/**
 * AI穿越之旅 - 在线版游戏主逻辑
 * 支持多用户多实例的游戏客户端
 */

class AIJourneyGameOnline {
    constructor() {
        this.player = {
            name: '',
            specialty: '',
            wisdom: 0,
            health: 100,
            knowledgeCollected: [],
            charactersMet: [],
            choices: []
        };
        
        this.currentLevel = 0;
        this.currentScene = null;
        this.gameState = 'boot';
        this.dialogueQueue = [];
        this.isShowingDialogue = false;
        this.levelData = null;
        this.isOnline = false;
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.startBootSequence();
        this.loadLevels();
    }

    // 加载关卡数据
    async loadLevels() {
        try {
            const data = await apiClient.getLevels();
            this.levels = data;
            console.log('关卡数据加载完成:', this.levels.length, '个关卡');
        } catch (error) {
            console.warn('无法从服务器加载关卡，使用本地数据');
            this.levels = GameData.levels;
        }
    }

    // 事件绑定
    bindEvents() {
        // 启动按钮
        document.getElementById('start-btn').addEventListener('click', () => {
            this.showScreen('character-screen');
        });

        // 专长选择
        document.querySelectorAll('.specialty-card').forEach(card => {
            card.addEventListener('click', () => {
                document.querySelectorAll('.specialty-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                this.player.specialty = card.dataset.specialty;
                this.checkCharacterForm();
            });
        });

        // 角色名输入
        document.getElementById('player-name').addEventListener('input', () => {
            this.checkCharacterForm();
        });

        // 确认角色按钮
        document.getElementById('confirm-character-btn').addEventListener('click', () => {
            this.startGame();
        });

        // 对话点击
        document.getElementById('dialogue-box').addEventListener('click', () => {
            this.advanceDialogue();
        });

        // 下一关按钮
        document.getElementById('next-level-btn').addEventListener('click', () => {
            this.nextLevel();
        });

        // 重新开始按钮
        document.getElementById('restart-btn').addEventListener('click', () => {
            this.restart();
        });

        // 模态框关闭
        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.target.closest('.modal').classList.remove('active');
            });
        });

        // AI聊天
        document.getElementById('chat-send-btn').addEventListener('click', () => {
            this.sendChatMessage();
        });

        document.getElementById('chat-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendChatMessage();
        });

        // 点击模态框外部关闭
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) modal.classList.remove('active');
            });
        });
    }

    // 启动序列
    startBootSequence() {
        const lines = document.querySelectorAll('.terminal-line');
        lines.forEach((line, index) => {
            line.style.opacity = '0';
            setTimeout(() => {
                line.style.opacity = '1';
                line.style.animation = 'typing 0.5s ease forwards';
            }, index * 600);
        });

        setTimeout(() => {
            document.getElementById('start-btn').style.opacity = '1';
            document.getElementById('start-btn').style.transform = 'translateY(0)';
        }, lines.length * 600 + 500);

        this.createParticles();
    }

    // 创建粒子效果
    createParticles() {
        const container = document.querySelector('.particles-container');
        if (!container) return;
        container.innerHTML = '';
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 5 + 's';
            particle.style.animationDuration = (3 + Math.random() * 4) + 's';
            container.appendChild(particle);
        }
    }

    // 检查角色表单
    checkCharacterForm() {
        const name = document.getElementById('player-name').value.trim();
        const btn = document.getElementById('confirm-character-btn');
        if (name && this.player.specialty) {
            btn.disabled = false;
        }
    }

    // 开始游戏
    async startGame() {
        const playerName = document.getElementById('player-name').value.trim();
        this.player.name = playerName;
        
        try {
            // 创建用户
            const userData = await apiClient.createUser(playerName);
            console.log('用户创建成功:', userData);

            // 创建游戏会话
            const sessionData = await apiClient.createSession(playerName, this.player.specialty);
            console.log('会话创建成功:', sessionData);

            this.isOnline = true;
            this.gameState = 'playing';
            this.showScreen('game-screen');
            this.updatePlayerUI();
            this.renderTimeline();
            await this.startLevel(0);

        } catch (error) {
            console.error('在线模式启动失败，切换到离线模式:', error);
            // 离线模式回退
            this.isOnline = false;
            this.gameState = 'playing';
            this.showScreen('game-screen');
            this.updatePlayerUI();
            this.renderTimeline();
            this.startLevelOffline(0);
        }
    }

    // 显示画面
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    // 更新玩家UI
    updatePlayerUI() {
        document.getElementById('display-name').textContent = this.player.name;
        const specialty = GameData.specialties[this.player.specialty];
        document.getElementById('display-specialty').textContent = specialty ? specialty.name : '';
        document.getElementById('wisdom-points').textContent = this.player.wisdom;
        document.getElementById('health-points').textContent = this.player.health;
    }

    // 渲染时间线
    renderTimeline() {
        const track = document.getElementById('timeline-track');
        if (!track) return;
        track.innerHTML = '';
        
        const levels = this.levels || GameData.levels;
        levels.forEach((level, index) => {
            const node = document.createElement('div');
            node.className = 'timeline-node';
            if (index < this.currentLevel) node.classList.add('completed');
            if (index === this.currentLevel) node.classList.add('current');
            
            node.innerHTML = `
                <div class="node-dot">${index < this.currentLevel ? '✓' : index + 1}</div>
                <div class="node-info">
                    <div class="node-year">${level.year}</div>
                    <div class="node-title">${level.title}</div>
                </div>
            `;
            track.appendChild(node);
        });
    }

    // 在线模式开始关卡
    async startLevel(levelIndex) {
        if (!this.isOnline) {
            this.startLevelOffline(levelIndex);
            return;
        }

        try {
            const data = await apiClient.getCurrentLevel();
            
            if (data.completed) {
                this.gameOver();
                return;
            }

            this.levelData = data.level;
            this.currentLevel = data.progress.current - 1;
            
            // 更新玩家数据
            if (data.player) {
                this.player = { ...this.player, ...data.player };
                this.updatePlayerUI();
            }

            this.setupLevelUI(this.levelData);
        } catch (error) {
            console.error('加载关卡失败:', error);
            this.startLevelOffline(levelIndex);
        }
    }

    // 离线模式开始关卡（回退方案）
    startLevelOffline(levelIndex) {
        if (levelIndex >= GameData.levels.length) {
            this.gameOver();
            return;
        }

        this.currentLevel = levelIndex;
        const level = GameData.levels[levelIndex];
        this.setupLevelUI(level);
    }

    // 设置关卡UI
    setupLevelUI(level) {
        // 更新时代信息
        const era = GameData.eras.find(e => e.id === level.eraId);
        document.getElementById('current-era').textContent = era.name;
        document.getElementById('current-year').textContent = level.year;
        document.getElementById('scene-badge').textContent = era.name;
        
        // 更新场景背景
        const scenePanel = document.querySelector('.scene-panel');
        if (scenePanel) {
            scenePanel.style.background = era.bgGradient;
        }

        // 渲染角色列表
        this.renderCharacters(level);

        // 设置对话队列
        this.dialogueQueue = [
            { speaker: '系统', text: `欢迎来到${level.year}年的${level.location}。`, icon: '🌐' },
            { speaker: '系统', text: level.description, icon: '🌐' },
            { speaker: level.character, text: this.getCharacterGreeting(level), icon: level.characterIcon }
        ];

        // 隐藏选择面板
        const choicesPanel = document.getElementById('choices-panel');
        if (choicesPanel) choicesPanel.style.display = 'none';

        // 开始显示对话
        this.isShowingDialogue = false;
        this.advanceDialogue();

        // 更新时间线
        this.renderTimeline();
    }

    // 获取角色问候语
    getCharacterGreeting(level) {
        const greetings = {
            '布莱兹·帕斯卡': '你好！我正在研究一种可以自动计算的机械装置。你对数学感兴趣吗？',
            '查尔斯·巴贝奇': '欢迎来到我的工作室！我正在设计一台能够自动计算多项式的机器。',
            '艾伦·图灵': '很高兴见到你。我正在思考一个问题：机器能思考吗？',
            '约翰·麦卡锡': '欢迎来到达特茅斯！我们正在讨论一个激动人心的概念——人工智能。',
            '杰弗里·辛顿': '你好！我相信神经网络是AI的未来，尽管现在很多人不认同。',
            'IBM深蓝团队': '欢迎来到IBM！我们正在准备一场历史性的对决——计算机对阵世界冠军。',
            'Transformer团队': '嗨！我们正在研究一种全新的架构，可能会彻底改变NLP领域。',
            'OpenAI团队': '欢迎来到OpenAI！我们正在努力让AI更好地理解和帮助人类。'
        };
        return greetings[level.character] || '很高兴见到你！';
    }

    // 渲染角色列表
    renderCharacters(level) {
        const list = document.getElementById('character-list');
        if (!list) return;
        list.innerHTML = '';

        const characters = GameData.characters.filter(c => c.era === level.eraId);
        
        characters.forEach(char => {
            const item = document.createElement('div');
            item.className = 'character-item';
            item.innerHTML = `
                <div class="char-icon">${char.icon}</div>
                <div class="char-info">
                    <div class="char-name">${char.name}</div>
                    <div class="char-role">${char.role === 'partner' ? '伙伴' : '对手'}</div>
                </div>
                <button class="chat-btn" data-character="${char.id}">💬</button>
            `;
            
            item.querySelector('.chat-btn').addEventListener('click', () => {
                this.openChat(char.id);
            });
            
            list.appendChild(item);
        });
    }

    // 推进对话
    advanceDialogue() {
        if (this.isShowingDialogue) return;

        if (this.dialogueQueue.length === 0) {
            this.showChoices();
            return;
        }

        const dialogue = this.dialogueQueue.shift();
        this.showDialogue(dialogue);
    }

    // 显示对话
    showDialogue(dialogue) {
        this.isShowingDialogue = true;
        const speakerEl = document.getElementById('dialogue-speaker');
        const textEl = document.getElementById('dialogue-text');
        const continueEl = document.getElementById('dialogue-continue');

        if (!speakerEl || !textEl) return;

        speakerEl.textContent = dialogue.speaker;
        textEl.textContent = '';
        if (continueEl) continueEl.style.opacity = '0';

        // 打字机效果
        let index = 0;
        const text = dialogue.text;
        
        const typeInterval = setInterval(() => {
            if (index < text.length) {
                textEl.textContent += text[index];
                index++;
            } else {
                clearInterval(typeInterval);
                this.isShowingDialogue = false;
                if (continueEl) continueEl.style.opacity = '1';
            }
        }, 30);
    }

    // 显示选择
    showChoices() {
        const level = this.levelData || GameData.levels[this.currentLevel];
        if (!level) return;

        const choicesPanel = document.getElementById('choices-panel');
        const choicesList = document.getElementById('choices-list');
        
        if (!choicesPanel || !choicesList) return;
        
        choicesList.innerHTML = '';
        
        level.choices.forEach((choice, index) => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.innerHTML = `
                <div class="choice-text">${choice.text}</div>
                <div class="choice-hint">${this.getChoiceHint(choice.type)}</div>
            `;
            btn.addEventListener('click', () => this.makeChoice(index));
            choicesList.appendChild(btn);
        });

        choicesPanel.style.display = 'block';
    }

    // 获取选择提示
    getChoiceHint(type) {
        const hints = {
            good: '✨ 稳妥的选择',
            risky: '⚡ 高风险高回报',
            creative: '🎨 创新思路',
            neutral: '📖 保守观察',
            practical: '🔧 实用主义',
            empathy: '💝 人文关怀',
            strategic: '🎯 战略思考'
        };
        return hints[type] || '';
    }

    // 做出选择
    async makeChoice(choiceIndex) {
        const choicesPanel = document.getElementById('choices-panel');
        if (choicesPanel) choicesPanel.style.display = 'none';

        if (this.isOnline) {
            try {
                const result = await apiClient.submitChoice(choiceIndex);
                
                // 更新玩家数据
                this.player.wisdom = result.totalWisdom;
                this.updatePlayerUI();

                // 显示结果
                this.dialogueQueue = [
                    { speaker: '系统', text: result.result, icon: '🌐' },
                    { speaker: '系统', text: `智慧值 +${result.wisdomBonus}！`, icon: '⭐' }
                ];

                // 显示新知识点
                if (result.newKnowledge && result.newKnowledge.length > 0) {
                    result.newKnowledge.forEach(kp => {
                        this.dialogueQueue.push({
                            speaker: '系统',
                            text: `📚 获得知识点：${kp.title}！`,
                            icon: '📚'
                        });
                    });
                }

                this.advanceDialogue();

                // 延迟后显示关卡完成
                setTimeout(() => {
                    this.showLevelComplete(result);
                }, 2000);

            } catch (error) {
                console.error('提交选择失败:', error);
                this.makeChoiceOffline(choiceIndex);
            }
        } else {
            this.makeChoiceOffline(choiceIndex);
        }
    }

    // 离线模式做出选择
    makeChoiceOffline(choiceIndex) {
        const level = GameData.levels[this.currentLevel];
        const choice = level.choices[choiceIndex];
        
        let wisdomBonus = choice.wisdomBonus;
        
        // 专长加成
        if (this.player.specialty === 'logic' && (choice.type === 'good' || choice.type === 'strategic')) {
            wisdomBonus += 10;
        } else if (this.player.specialty === 'creative' && choice.type === 'creative') {
            wisdomBonus += 10;
        } else if (this.player.specialty === 'tech' && choice.type === 'practical') {
            wisdomBonus += 10;
        } else if (this.player.specialty === 'empathy' && choice.type === 'empathy') {
            wisdomBonus += 10;
        }

        this.player.wisdom += wisdomBonus;
        this.player.choices.push({
            level: this.currentLevel,
            choice: choice.text,
            type: choice.type
        });

        this.updatePlayerUI();

        const resultText = this.getDefaultResult(choice.type);
        
        this.dialogueQueue = [
            { speaker: '系统', text: resultText, icon: '🌐' },
            { speaker: '系统', text: `智慧值 +${wisdomBonus}！`, icon: '⭐' }
        ];

        // 收集知识点
        if (level.knowledgePoints) {
            level.knowledgePoints.forEach(kp => {
                if (!this.player.knowledgeCollected.find(k => k.title === kp.title)) {
                    this.player.knowledgeCollected.push(kp);
                    this.dialogueQueue.push({
                        speaker: '系统',
                        text: `📚 获得知识点：${kp.title}！`,
                        icon: '📚'
                    });
                }
            });
        }

        this.advanceDialogue();

        setTimeout(() => {
            this.showLevelComplete({
                wisdomBonus: wisdomBonus,
                totalWisdom: this.player.wisdom,
                newKnowledge: level.knowledgePoints || []
            });
        }, 2000);
    }

    // 获取默认结果
    getDefaultResult(type) {
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

    // 显示关卡完成
    showLevelComplete(result) {
        const level = this.levelData || GameData.levels[this.currentLevel];
        
        document.getElementById('complete-wisdom').textContent = `+${result.wisdomBonus || 0}`;
        document.getElementById('complete-knowledge').textContent = 
            (result.newKnowledge ? result.newKnowledge.length : 0);
        
        const knowledgeList = document.getElementById('complete-knowledge-list');
        knowledgeList.innerHTML = '';
        
        const knowledgePoints = result.newKnowledge || (level ? level.knowledgePoints : []);
        if (knowledgePoints) {
            knowledgePoints.forEach(kp => {
                const item = document.createElement('div');
                item.className = 'knowledge-item';
                item.innerHTML = `
                    <div class="knowledge-title">📚 ${kp.title}</div>
                    <div class="knowledge-content">${kp.content}</div>
                `;
                knowledgeList.appendChild(item);
            });
        }

        this.showScreen('level-complete-screen');
    }

    // 下一关
    async nextLevel() {
        if (this.isOnline) {
            try {
                const result = await apiClient.nextLevel();
                
                if (result.completed) {
                    this.showScreen('game-screen');
                    this.gameOver(result.ending, result.finalStats);
                    return;
                }

                this.levelData = result.level;
                this.currentLevel = result.progress.current - 1;
                
                if (result.player) {
                    this.player = { ...this.player, ...result.player };
                    this.updatePlayerUI();
                }

                this.showScreen('game-screen');
                this.setupLevelUI(this.levelData);
            } catch (error) {
                console.error('进入下一关失败:', error);
                this.showScreen('game-screen');
                this.startLevelOffline(this.currentLevel + 1);
            }
        } else {
            this.showScreen('game-screen');
            this.startLevelOffline(this.currentLevel + 1);
        }
    }

    // 游戏结束
    gameOver(ending, finalStats) {
        const end = ending || this.calculateEnding();
        const stats = finalStats || {
            wisdom: this.player.wisdom,
            knowledge: this.player.knowledgeCollected.length,
            choices: this.player.choices.length
        };
        
        document.getElementById('over-icon').textContent = end.icon;
        document.getElementById('over-title').textContent = end.title;
        document.getElementById('over-desc').textContent = end.description;
        document.getElementById('final-wisdom').textContent = stats.wisdom;
        document.getElementById('final-knowledge').textContent = stats.knowledge;
        document.getElementById('final-era').textContent = GameData.eras[GameData.eras.length - 1].name;

        const endingText = document.getElementById('over-ending');
        endingText.innerHTML = `
            <h3>你的旅程总结</h3>
            <p>你经历了AI发展史上的${this.currentLevel}个重要时刻。</p>
            <p>收集了${stats.knowledge}个知识点。</p>
            <p>做出了${stats.choices}次关键选择。</p>
            <p class="ending-message">${end.message}</p>
        `;

        this.showScreen('game-over-screen');
    }

    // 计算结局
    calculateEnding() {
        if (this.player.wisdom >= 300) {
            return {
                title: 'AI先驱者',
                icon: '🚀',
                description: '你以卓越的智慧和远见，成为了AI发展史上的重要推动者。',
                message: '你证明了人类创造力是无可替代的。在AI时代，人类的独特价值在于创新、共情和战略思维。'
            };
        } else if (this.player.knowledgeCollected.length >= 15) {
            return {
                title: '智慧学者',
                icon: '📚',
                description: '你通过不断学习和思考，深刻理解了AI的本质。',
                message: '知识是你最强大的武器。理解历史，才能更好地把握未来。'
            };
        } else if (this.player.specialty === 'empathy' && this.player.wisdom >= 200) {
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

    // 重新开始
    restart() {
        // 断开连接
        if (apiClient) {
            apiClient.disconnect();
        }

        this.player = {
            name: '',
            specialty: '',
            wisdom: 0,
            health: 100,
            knowledgeCollected: [],
            charactersMet: [],
            choices: []
        };
        this.currentLevel = 0;
        this.currentScene = null;
        this.gameState = 'boot';
        this.dialogueQueue = [];
        this.isShowingDialogue = false;
        this.isOnline = false;

        // 重置UI
        document.getElementById('player-name').value = '';
        document.querySelectorAll('.specialty-card').forEach(c => c.classList.remove('selected'));
        document.getElementById('confirm-character-btn').disabled = true;

        this.showScreen('boot-screen');
        this.startBootSequence();
    }

    // 打开聊天
    openChat(characterId) {
        const character = GameData.characters.find(c => c.id === characterId);
        if (!character) return;

        document.getElementById('chat-character-name').textContent = `与${character.name}对话`;
        document.getElementById('chat-messages').innerHTML = '';
        document.getElementById('chat-input').value = '';
        
        this.currentChatCharacter = characterId;
        
        // 添加欢迎消息
        this.addChatMessage('ai', `你好，我是${character.name}。${character.personality}。你想聊些什么？`);
        
        document.getElementById('ai-chat-modal').classList.add('active');
    }

    // 发送聊天消息
    async sendChatMessage() {
        const input = document.getElementById('chat-input');
        const message = input.value.trim();
        if (!message || !this.currentChatCharacter) return;

        // 添加玩家消息
        this.addChatMessage('player', message);
        input.value = '';

        // 显示加载中
        const loadingId = this.addChatMessage('ai', '思考中...', true);

        try {
            let response;
            
            if (this.isOnline) {
                // 在线模式：通过后端调用AI
                const result = await apiClient.chatWithCharacter(this.currentChatCharacter, message);
                response = result.response;
            } else {
                // 离线模式：直接调用AI（仅用于测试，生产环境应始终通过后端）
                response = await this.callAIDirectly(message, this.currentChatCharacter);
            }
            
            // 移除加载消息
            const loadingMsg = document.getElementById(loadingId);
            if (loadingMsg) loadingMsg.remove();
            
            // 添加AI回复
            this.addChatMessage('ai', response);
        } catch (error) {
            // 移除加载消息
            const loadingMsg = document.getElementById(loadingId);
            if (loadingMsg) loadingMsg.remove();
            
            this.addChatMessage('ai', '抱歉，我现在有点忙，稍后再聊吧。');
        }
    }

    // 直接调用AI（离线模式回退）
    async callAIDirectly(message, characterId) {
        const character = GameData.characters.find(c => c.id === characterId);
        if (!character) return '角色不存在';

        const systemPrompt = `${character.prompt}\n\n当前情境：这是"AI穿越之旅"游戏，玩家是一位来自未来的时间旅行者，正在与你一起工作。\n请保持角色设定，用中文回复。回复要简洁有趣，适合游戏对话，不超过150字。\n可以适当加入emoji增加趣味性。`;

        const response = await fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 325d6fa364954d2e871c30ba95b553bd.KBdQdqgJgELJBhnv'
            },
            body: JSON.stringify({
                model: 'glm-4.5-flash',
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: message }
                ],
                temperature: 0.7,
                max_tokens: 500,
                top_p: 0.9
            })
        });

        const data = await response.json();
        return data.choices[0].message.content;
    }

    // 添加聊天消息
    addChatMessage(type, text, isLoading = false) {
        const container = document.getElementById('chat-messages');
        if (!container) return;
        
        const msgId = isLoading ? 'loading-' + Date.now() : 'msg-' + Date.now();
        
        const msgDiv = document.createElement('div');
        msgDiv.id = msgId;
        msgDiv.className = `chat-message ${type}`;
        msgDiv.innerHTML = `
            <div class="message-bubble">${text}</div>
        `;
        
        container.appendChild(msgDiv);
        container.scrollTop = container.scrollHeight;
        
        return msgId;
    }

    // Socket事件处理
    handleSocketEvent(data) {
        console.log('处理Socket事件:', data);
        // 可以在这里处理实时多人游戏事件
    }
}

// 启动游戏
document.addEventListener('DOMContentLoaded', () => {
    window.game = new AIJourneyGameOnline();
});
