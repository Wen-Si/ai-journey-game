/**
 * AI穿越之旅 - 后端服务
 * 支持多用户多实例的游戏服务器（含用户认证）
 */

const express = require('express');
const cors = require('cors');
const { createServer } = require('http');
const { Server } = require('socket.io');
const { v4: uuidv4 } = require('uuid');
const fetch = require('node-fetch');
const path = require('path');
const crypto = require('crypto');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../')));

// 游戏数据
const GameData = require('./game-data');

// 存储
const users = new Map();         // 用户存储: userId -> userData
const userAccounts = new Map();  // 用户账号: username -> {userId, passwordHash}
const sessions = new Map();      // 游戏会话: sessionId -> sessionData
const conversations = new Map();  // AI对话历史: sessionId -> messages[]
const tokens = new Map();        // 登录令牌: token -> userId

// 智谱API配置
const AI_CONFIG = {
    apiKey: '325d6fa364954d2e871c30ba95b553bd.KBdQdqgJgELJBhnv',
    apiUrl: 'https://open.bigmodel.cn/api/paas/v4/chat/completions',
    model: 'glm-4.5-flash'
};

// ============ 认证中间件 ============

// 验证Token
function authMiddleware(req, res, next) {
    const token = req.headers.authorization?.replace('Bearer ', '');
    
    if (!token || !tokens.has(token)) {
        return res.status(401).json({ error: '未登录或登录已过期' });
    }
    
    req.userId = tokens.get(token);
    next();
}

// ============ 用户认证API ============

// 用户注册
app.post('/api/auth/register', (req, res) => {
    const { username, password } = req.body;
    
    if (!username || !password) {
        return res.status(400).json({ error: '用户名和密码不能为空' });
    }
    
    if (username.length < 3 || username.length > 20) {
        return res.status(400).json({ error: '用户名长度需在3-20位之间' });
    }
    
    if (password.length < 6) {
        return res.status(400).json({ error: '密码长度至少6位' });
    }
    
    if (userAccounts.has(username)) {
        return res.status(409).json({ error: '用户名已存在' });
    }
    
    const userId = uuidv4();
    const passwordHash = crypto.createHash('sha256').update(password).digest('hex');
    
    userAccounts.set(username, {
        userId,
        passwordHash,
        createdAt: new Date().toISOString()
    });
    
    users.set(userId, {
        id: userId,
        username,
        createdAt: new Date().toISOString(),
        sessions: [],
        gameProgress: null
    });
    
    console.log(`新用户注册: ${username} (${userId})`);
    
    res.json({
        message: '注册成功',
        userId,
        username
    });
});

// 用户登录
app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body;
    
    if (!username || !password) {
        return res.status(400).json({ error: '用户名和密码不能为空' });
    }
    
    const account = userAccounts.get(username);
    if (!account) {
        return res.status(401).json({ error: '用户名或密码错误' });
    }
    
    const passwordHash = crypto.createHash('sha256').update(password).digest('hex');
    if (passwordHash !== account.passwordHash) {
        return res.status(401).json({ error: '用户名或密码错误' });
    }
    
    // 生成Token
    const token = crypto.randomBytes(32).toString('hex');
    tokens.set(token, account.userId);
    
    // 设置Token过期（7天）
    setTimeout(() => {
        tokens.delete(token);
    }, 7 * 24 * 60 * 60 * 1000);
    
    const user = users.get(account.userId);
    console.log(`用户登录: ${username} (${account.userId})`);
    
    res.json({
        message: '登录成功',
        userId: account.userId,
        username,
        token
    });
});

// 用户登出
app.post('/api/auth/logout', authMiddleware, (req, res) => {
    const token = req.headers.authorization?.replace('Bearer ', '');
    tokens.delete(token);
    res.json({ message: '登出成功' });
});

// 获取当前用户信息
app.get('/api/auth/me', authMiddleware, (req, res) => {
    const user = users.get(req.userId);
    if (!user) {
        return res.status(404).json({ error: '用户不存在' });
    }
    res.json(user);
});

// ============ 游戏会话管理（需要认证） ============

// 创建游戏会话
app.post('/api/sessions', authMiddleware, (req, res) => {
    const { playerName, specialty } = req.body;
    const userId = req.userId;
    
    const sessionId = uuidv4();
    const session = {
        id: sessionId,
        userId: userId,
        player: {
            name: playerName,
            specialty: specialty,
            wisdom: 0,
            health: 100,
            knowledgeCollected: [],
            charactersMet: [],
            choices: []
        },
        currentLevel: 0,
        gameState: 'playing',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    sessions.set(sessionId, session);
    conversations.set(sessionId, []);
    
    const user = users.get(userId);
    user.sessions.push(sessionId);

    res.json({ sessionId, session });
});

// 获取会话信息
app.get('/api/sessions/:sessionId', authMiddleware, (req, res) => {
    const session = sessions.get(req.params.sessionId);
    if (!session) {
        return res.status(404).json({ error: '会话不存在' });
    }
    
    // 验证会话属于当前用户
    if (session.userId !== req.userId) {
        return res.status(403).json({ error: '无权访问此会话' });
    }
    
    res.json(session);
});

// 获取用户的所有会话
app.get('/api/sessions', authMiddleware, (req, res) => {
    const user = users.get(req.userId);
    const userSessions = user.sessions.map(sid => sessions.get(sid)).filter(Boolean);
    res.json(userSessions);
});

// ============ 游戏逻辑API（需要认证） ============

// 获取关卡数据
app.get('/api/levels', (req, res) => {
    res.json(GameData.levels);
});

// 获取当前关卡
app.get('/api/sessions/:sessionId/level', authMiddleware, (req, res) => {
    const session = sessions.get(req.params.sessionId);
    if (!session) {
        return res.status(404).json({ error: '会话不存在' });
    }
    
    if (session.userId !== req.userId) {
        return res.status(403).json({ error: '无权访问此会话' });
    }

    const level = GameData.levels[session.currentLevel];
    if (!level) {
        return res.json({ completed: true, message: '所有关卡已完成' });
    }

    res.json({
        level: level,
        player: session.player,
        progress: {
            current: session.currentLevel + 1,
            total: GameData.levels.length
        }
    });
});

// 提交选择
app.post('/api/sessions/:sessionId/choice', authMiddleware, async (req, res) => {
    const session = sessions.get(req.params.sessionId);
    if (!session) {
        return res.status(404).json({ error: '会话不存在' });
    }
    
    if (session.userId !== req.userId) {
        return res.status(403).json({ error: '无权访问此会话' });
    }

    const { choiceIndex } = req.body;
    const level = GameData.levels[session.currentLevel];
    
    if (!level || !level.choices[choiceIndex]) {
        return res.status(400).json({ error: '无效的选择' });
    }

    const choice = level.choices[choiceIndex];
    
    // 计算智慧值
    let wisdomBonus = choice.wisdomBonus;
    if (session.player.specialty === 'logic' && (choice.type === 'good' || choice.type === 'strategic')) {
        wisdomBonus += 10;
    } else if (session.player.specialty === 'creative' && choice.type === 'creative') {
        wisdomBonus += 10;
    } else if (session.player.specialty === 'tech' && choice.type === 'practical') {
        wisdomBonus += 10;
    } else if (session.player.specialty === 'empathy' && choice.type === 'empathy') {
        wisdomBonus += 10;
    }

    session.player.wisdom += wisdomBonus;
    session.player.choices.push({
        level: session.currentLevel,
        choice: choice.text,
        type: choice.type,
        wisdomBonus: wisdomBonus
    });

    // 收集知识点
    const newKnowledge = [];
    if (level.knowledgePoints) {
        level.knowledgePoints.forEach(kp => {
            if (!session.player.knowledgeCollected.find(k => k.title === kp.title)) {
                session.player.knowledgeCollected.push(kp);
                newKnowledge.push(kp);
            }
        });
    }

    // 生成结果描述
    let resultText = '';
    try {
        resultText = await generateChoiceResult(choice.text, `${level.title} - ${level.description}`);
    } catch (error) {
        resultText = getDefaultResult(choice.type);
    }

    session.updatedAt = new Date().toISOString();

    res.json({
        result: resultText,
        wisdomBonus: wisdomBonus,
        totalWisdom: session.player.wisdom,
        newKnowledge: newKnowledge,
        levelComplete: true
    });
});

// 进入下一关
app.post('/api/sessions/:sessionId/next-level', authMiddleware, (req, res) => {
    const session = sessions.get(req.params.sessionId);
    if (!session) {
        return res.status(404).json({ error: '会话不存在' });
    }
    
    if (session.userId !== req.userId) {
        return res.status(403).json({ error: '无权访问此会话' });
    }

    session.currentLevel++;
    session.updatedAt = new Date().toISOString();

    if (session.currentLevel >= GameData.levels.length) {
        session.gameState = 'completed';
        const ending = calculateEnding(session);
        
        // 保存用户游戏进度
        const user = users.get(req.userId);
        user.gameProgress = {
            completedAt: new Date().toISOString(),
            finalWisdom: session.player.wisdom,
            knowledgeCount: session.player.knowledgeCollected.length,
            ending: ending
        };
        
        return res.json({
            completed: true,
            ending: ending,
            finalStats: {
                wisdom: session.player.wisdom,
                knowledge: session.player.knowledgeCollected.length,
                choices: session.player.choices.length
            }
        });
    }

    const nextLevel = GameData.levels[session.currentLevel];
    res.json({
        level: nextLevel,
        player: session.player,
        progress: {
            current: session.currentLevel + 1,
            total: GameData.levels.length
        }
    });
});

// ============ AI对话服务（需要认证） ============

// AI聊天
app.post('/api/sessions/:sessionId/chat', authMiddleware, async (req, res) => {
    const session = sessions.get(req.params.sessionId);
    if (!session) {
        return res.status(404).json({ error: '会话不存在' });
    }
    
    if (session.userId !== req.userId) {
        return res.status(403).json({ error: '无权访问此会话' });
    }

    const { characterId, message } = req.body;
    const character = GameData.characters.find(c => c.id === characterId);
    
    if (!character) {
        return res.status(404).json({ error: '角色不存在' });
    }

    try {
        const systemPrompt = `${character.prompt}

当前情境：这是"AI穿越之旅"游戏，玩家${session.player.name}是一位来自未来的时间旅行者，正在与你一起工作。
请保持角色设定，用中文回复。回复要简洁有趣，适合游戏对话，不超过150字。
可以适当加入emoji增加趣味性。`;

        const response = await callAI(message, systemPrompt, session.id);
        res.json({ response });
    } catch (error) {
        console.error('AI对话错误:', error);
        res.json({ 
            response: getFallbackResponse(),
            error: 'AI服务暂时不可用，使用默认回复'
        });
    }
});

// ============ Socket.io 实时通信 ============

io.on('connection', (socket) => {
    console.log('用户连接:', socket.id);

    socket.on('join-session', (sessionId) => {
        socket.join(sessionId);
        console.log(`Socket ${socket.id} 加入会话 ${sessionId}`);
    });

    socket.on('leave-session', (sessionId) => {
        socket.leave(sessionId);
        console.log(`Socket ${socket.id} 离开会话 ${sessionId}`);
    });

    socket.on('game-event', (data) => {
        const { sessionId, event, payload } = data;
        socket.to(sessionId).emit('game-event', { event, payload });
    });

    socket.on('disconnect', () => {
        console.log('用户断开连接:', socket.id);
    });
});

// ============ 辅助函数 ============

async function callAI(message, systemPrompt, sessionId, useHistory = true) {
    const messages = [];
    
    if (systemPrompt) {
        messages.push({ role: 'system', content: systemPrompt });
    }

    if (useHistory && conversations.has(sessionId)) {
        const history = conversations.get(sessionId);
        messages.push(...history);
    }

    messages.push({ role: 'user', content: message });

    const response = await fetch(AI_CONFIG.apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${AI_CONFIG.apiKey}`
        },
        body: JSON.stringify({
            model: AI_CONFIG.model,
            messages: messages,
            temperature: 0.7,
            max_tokens: 500,
            top_p: 0.9
        })
    });

    if (!response.ok) {
        throw new Error(`API请求失败: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.choices && data.choices[0] && data.choices[0].message) {
        const aiResponse = data.choices[0].message.content;
        
        if (useHistory) {
            if (!conversations.has(sessionId)) {
                conversations.set(sessionId, []);
            }
            const history = conversations.get(sessionId);
            history.push(
                { role: 'user', content: message },
                { role: 'assistant', content: aiResponse }
            );
            
            if (history.length > 20) {
                conversations.set(sessionId, history.slice(-20));
            }
        }
        
        return aiResponse;
    }
    
    throw new Error('API响应格式异常');
}

async function generateChoiceResult(choice, context) {
    const systemPrompt = `你是一位游戏剧情设计师。请根据玩家的选择生成有趣的结果描述。
用中文回复，不超过150字。要体现选择的后果和对故事的影响。`;

    const prompt = `上下文：${context}\n玩家选择：${choice}\n请生成这个选择的结果。`;
    return await callAI(prompt, systemPrompt, 'global', false);
}

function getDefaultResult(type) {
    const results = {
        good: '你的选择非常明智！通过努力，你成功地完成了任务，获得了宝贵的经验。',
        risky: '虽然风险很大，但你的勇气和远见带来了丰厚的回报！',
        creative: '你的创新思维带来了意想不到的突破！这是一个开创性的时刻。',
        neutral: '你谨慎地观察和学习，积累了重要的知识和经验。',
        practical: '你的实用主义方法取得了良好的效果，解决了实际问题。',
        empathy: '你的共情能力帮助你建立了深厚的连接，获得了他人的信任。',
        strategic: '你的战略眼光看到了更远的未来，为后续发展奠定了基础。'
    };
    return results[type] || '你的选择带来了有趣的结果。';
}

function getFallbackResponse() {
    const fallbacks = [
        '这是一个非常有趣的问题！让我想想...',
        '你的观点很有见地，我很赞同。',
        '从历史的角度来看，这确实是一个重要的时刻。',
        '让我们一起探索这个问题的答案吧！',
        '你的思考方式很独特，这让我很受启发。'
    ];
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}

function calculateEnding(session) {
    const player = session.player;
    
    if (player.wisdom >= 300) {
        return {
            title: 'AI先驱者',
            icon: '🚀',
            description: '你以卓越的智慧和远见，成为了AI发展史上的重要推动者。',
            message: '你证明了人类创造力是无可替代的。在AI时代，人类的独特价值在于创新、共情和战略思维。'
        };
    } else if (player.knowledgeCollected.length >= 15) {
        return {
            title: '智慧学者',
            icon: '📚',
            description: '你通过不断学习和思考，深刻理解了AI的本质。',
            message: '知识是你最强大的武器。理解历史，才能更好地把握未来。'
        };
    } else if (player.specialty === 'empathy' && player.wisdom >= 200) {
        return {
            title: '人机协作者',
            icon: '🤝',
            description: '你找到了与AI和谐共存的方式。',
            message: '人类与AI可以携手创造更美好的未来。技术应该服务于人类的价值。'
        };
    } else {
        return {
            title: '时代幸存者',
            icon: '💪',
            description: '你在AI时代的浪潮中找到了自己的位置。',
            message: '适应变化，持续学习，这是人类在AI时代最重要的能力。'
        };
    }
}

// 清理过期会话
setInterval(() => {
    const now = new Date();
    const expireTime = 24 * 60 * 60 * 1000;
    
    for (const [sessionId, session] of sessions.entries()) {
        const updatedAt = new Date(session.updatedAt);
        if (now - updatedAt > expireTime) {
            sessions.delete(sessionId);
            conversations.delete(sessionId);
            console.log(`清理过期会话: ${sessionId}`);
        }
    }
}, 30 * 60 * 1000);

// 启动服务器
const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
    console.log(`🎮 AI穿越之旅服务器运行在端口 ${PORT}`);
    console.log(`📡 API地址: http://localhost:${PORT}/api`);
    console.log(`🔐 认证系统已启用`);
    console.log(`🌐 前端地址: http://localhost:${PORT}/`);
});
