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
        this.currentAct = null;      // 当前幕
        this.currentActIndex = 0;    // 当前幕索引
        this.gameState = 'boot';
        this.dialogueQueue = [];
        this.isShowingDialogue = false;
        this.levelData = null;
        this.isOnline = false;
        this.globalState = {};       // 全局状态追踪
        
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
        
        // 确保 GameData 已加载
        if (typeof GameData === 'undefined' || !GameData.levels) {
            console.warn('GameData 未加载，时间线无法渲染');
            return;
        }
        
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

        // 初始化幕系统
        this.currentActIndex = 0;
        if (level.acts && level.acts.length > 0) {
            this.currentAct = level.acts[0];
            this.loadAct(this.currentAct, level);
        } else {
            // 兼容旧数据结构
            this.loadLegacyLevel(level);
        }

        // 更新时间线
        this.renderTimeline();
    }

    // 加载幕内容
    loadAct(act, level) {
        this.currentAct = act;
        
        // 重置对话状态，防止旧状态干扰
        this.isShowingDialogue = false;
        
        // 构建对话队列
        this.dialogueQueue = [];
        
        // 如果是第一幕，添加关卡介绍
        if (this.currentActIndex === 0) {
            this.dialogueQueue.push(
                { speaker: '系统', text: `欢迎来到${level.year}年的${level.location}。`, icon: '🌐' }
            );
        }
        
        // 添加幕标题
        this.dialogueQueue.push(
            { speaker: '系统', text: `【${act.title}】`, icon: '📖' }
        );
        
        // 添加场景对话
        if (act.scenes && act.scenes.length > 0) {
            act.scenes.forEach(scene => {
                this.dialogueQueue.push({
                    speaker: scene.speaker,
                    text: scene.text,
                    icon: scene.icon || '🌐'
                });
            });
        }

        // 隐藏选择面板
        const choicesPanel = document.getElementById('choices-panel');
        if (choicesPanel) choicesPanel.style.display = 'none';

        // 延迟开始显示对话，确保UI已更新
        setTimeout(() => {
            this.isShowingDialogue = false;
            this.advanceDialogue();
        }, 100);
    }

    // 兼容旧数据结构
    loadLegacyLevel(level) {
        // 重置对话状态
        this.isShowingDialogue = false;
        
        this.dialogueQueue = [
            { speaker: '系统', text: `欢迎来到${level.year}年的${level.location}。`, icon: '🌐' },
            { speaker: '系统', text: level.description, icon: '🌐' },
            { speaker: level.character, text: this.getCharacterGreeting(level), icon: level.characterIcon }
        ];

        const choicesPanel = document.getElementById('choices-panel');
        if (choicesPanel) choicesPanel.style.display = 'none';

        // 延迟开始显示对话
        setTimeout(() => {
            this.isShowingDialogue = false;
            this.advanceDialogue();
        }, 100);
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

        // 新的数据结构：从关卡数据中提取角色信息
        const characters = [];
        
        // 添加主要角色（当前关卡的核心人物）
        if (level.character) {
            characters.push({
                id: 'main',
                name: level.character,
                icon: level.characterIcon || '👤',
                role: 'partner',
                era: level.eraId
            });
        }
        
        // 从当前幕的场景中提取其他角色
        if (this.currentAct && this.currentAct.scenes) {
            const seenSpeakers = new Set([level.character, '系统']);
            this.currentAct.scenes.forEach(scene => {
                if (scene.speaker && !seenSpeakers.has(scene.speaker)) {
                    seenSpeakers.add(scene.speaker);
                    characters.push({
                        id: 'speaker_' + scene.speaker,
                        name: scene.speaker,
                        icon: scene.icon || '👤',
                        role: 'partner',
                        era: level.eraId
                    });
                }
            });
        }
        
        // 兼容旧数据结构
        if (characters.length === 0 && GameData.characters && Array.isArray(GameData.characters)) {
            const oldChars = GameData.characters.filter(c => c.era === level.eraId);
            characters.push(...oldChars);
        }
        
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
            // 如果选择后对话已结束，处理后续剧情推进
            if (this._afterChoice) {
                if (this._onlineChoiceResult) {
                    this.handleOnlineChoiceAfterDialogue();
                } else {
                    this.handleChoiceAfterDialogue();
                }
            } else {
                this.showChoices();
            }
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
        
        // 新数据结构：从当前幕获取选择
        let choices = [];
        if (this.currentAct && this.currentAct.choices) {
            choices = this.currentAct.choices;
        } else if (level.choices) {
            // 兼容旧数据结构
            choices = level.choices;
        }
        
        if (choices.length === 0) {
            // 如果没有选择，检查是否还有下一幕
            const hasMoreActs = level.acts && this.currentActIndex < level.acts.length - 1;
            
            if (hasMoreActs) {
                // 还有下一幕，自动进入
                this.dialogueQueue.push({
                    speaker: '系统',
                    text: '剧情继续...',
                    icon: '🌐'
                });
                this.advanceDialogue();
                setTimeout(() => {
                    this.currentActIndex++;
                    this.loadAct(level.acts[this.currentActIndex], level);
                }, 1500);
            } else {
                // 所有幕都完成了，进入关卡完成
                this.dialogueQueue.push({
                    speaker: '系统',
                    text: '本关结束。',
                    icon: '🌐'
                });
                this.advanceDialogue();
                setTimeout(() => {
                    this.showLevelComplete({
                        wisdomBonus: 0,
                        totalWisdom: this.player.wisdom,
                        newKnowledge: level.knowledgePoints || []
                    });
                }, 1500);
            }
            return;
        }
        
        choices.forEach((choice, index) => {
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
            strategic: '🎯 战略思考',
            // 新增类型
            revolutionary: '🔥 颠覆性变革',
            cautious: '🛡️ 谨慎行事',
            insightful: '💡 深刻洞见',
            diplomatic: '🕊️ 外交手腕',
            loyal: '🤝 忠诚支持',
            visionary: '🔮 远见卓识',
            determined: '💪 坚定不移',
            sacrifice: '🦸 自我牺牲',
            redemption: '🌅 救赎之路',
            cold: '❄️ 冷酷决断',
            honest: '🗣️ 坦诚相见',
            deceptive: '🎭 策略性隐瞒',
            scientific: '🔬 科学严谨',
            emotional: '❤️ 情感驱动',
            open: '📂 开放共享',
            patient: '⏳ 耐心等待',
            collaborative: '🤲 合作共赢',
            independent: '🦅 独立自主',
            business: '💼 商业导向',
            idealistic: '🌈 理想主义',
            innovative: '🚀 创新突破',
            responsible: '⚖️ 负责任',
            proactive: '🎯 主动出击',
            transparent: '🔍 透明公开',
            sustainable: '🌱 可持续发展',
            pure: '✨ 纯粹追求',
            academic: '🎓 学术导向',
            action: '⚡ 立即行动',
            research: '🔍 深入研究',
            forward: '➡️ 前瞻布局',
            balanced: '⚖️ 平衡之道',
            decisive: '⚔️ 果断决策',
            pragmatic: '🛠️ 务实方案',
            celebratory: '🎉 庆祝成功',
            urgent: '🚨 紧急行动',
            thorough: '📋  thorough研究',
            scalable: '📈 扩展规模',
            monetization: '💰 商业化',
            iterative: '🔄 迭代优化',
            reactive: '🛡️ 应对危机',
            pivot: '🔄 战略转型',
            hybrid: '🔀 混合方案',
            technical: '⚙️ 技术优化',
            openSource: '🌍 开源共享',
            conservative: '📜 保守稳健',
            cold_calculated: '🧮 冷静计算'
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

                // 标记为选择后状态，等待对话结束后再推进
                this._afterChoice = true;
                this._onlineChoiceResult = result;

                this.advanceDialogue();

            } catch (error) {
                console.error('提交选择失败:', error);
                this.makeChoiceOffline(choiceIndex);
            }
        } else {
            this.makeChoiceOffline(choiceIndex);
        }
    }
    
    // 处理在线模式选择后的剧情推进
    handleOnlineChoiceAfterDialogue() {
        if (!this._onlineChoiceResult) return;
        
        const result = this._onlineChoiceResult;
        this._onlineChoiceResult = null;
        this._afterChoice = false;
        
        // 延迟后显示关卡完成或进入下一关
        setTimeout(() => {
            this.showLevelComplete(result);
        }, 500);
    }

    // 离线模式做出选择
    makeChoiceOffline(choiceIndex) {
        const level = GameData.levels[this.currentLevel];
        
        // 获取选择 - 支持新数据结构
        let choice;
        if (this.currentAct && this.currentAct.choices) {
            choice = this.currentAct.choices[choiceIndex];
        } else {
            choice = level.choices[choiceIndex];
        }
        
        if (!choice) return;
        
        let wisdomBonus = choice.wisdomBonus || 0;
        
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
            act: this.currentAct ? this.currentAct.id : null,
            choice: choice.text,
            type: choice.type
        });

        this.updatePlayerUI();

        // 处理选择后果
        const consequences = choice.consequences || {};
        const consequenceDesc = consequences.description || this.getDefaultResult(choice.type);
        
        // 判断是进入下一幕还是完成关卡
        const nextActId = consequences.nextAct;
        const hasNextAct = nextActId && level.acts && level.acts.find(a => a.id === nextActId);
        
        // 构建结果对话队列
        this.dialogueQueue = [
            { speaker: '系统', text: consequenceDesc, icon: '🌐' },
            { speaker: '系统', text: `智慧值 +${wisdomBonus}！`, icon: '⭐' }
        ];
        
        // 如果有下一幕，添加过渡提示
        if (hasNextAct) {
            this.dialogueQueue.push(
                { speaker: '系统', text: '剧情继续发展...', icon: '➡️' }
            );
        } else {
            // 如果没有下一幕，添加关卡完成提示
            this.dialogueQueue.push(
                { speaker: '系统', text: '本关剧情结束，准备进入下一关...', icon: '🏁' }
            );
        }

        // 更新全局状态
        if (consequences.stateChanges) {
            Object.assign(this.globalState, consequences.stateChanges);
        }

        // 标记为选择后状态，防止 advanceDialogue 调用 showChoices
        this._afterChoice = true;
        this._choiceNextAct = hasNextAct ? nextActId : null;
        this._choiceLevel = level;
        this._choiceWisdomBonus = wisdomBonus;

        this.advanceDialogue();
    }
    
    // 处理选择后的剧情推进（在对话队列清空后调用）
    handleChoiceAfterDialogue() {
        if (!this._afterChoice) return;
        
        const nextActId = this._choiceNextAct;
        const level = this._choiceLevel;
        const wisdomBonus = this._choiceWisdomBonus;
        
        // 清除标记
        this._afterChoice = false;
        this._choiceNextAct = null;
        this._choiceLevel = null;
        this._choiceWisdomBonus = 0;
        
        if (nextActId && level.acts) {
            // 查找并进入下一幕
            const nextAct = level.acts.find(a => a.id === nextActId);
            if (nextAct) {
                this.currentActIndex = level.acts.indexOf(nextAct);
                this.loadAct(nextAct, level);
                return;
            }
        }
        
        // 没有下一幕，完成关卡
        // 收集知识点
        let newKnowledge = [];
        if (level.knowledgePoints) {
            level.knowledgePoints.forEach(kp => {
                if (!this.player.knowledgeCollected.find(k => k.title === kp.title)) {
                    this.player.knowledgeCollected.push(kp);
                    newKnowledge.push(kp);
                }
            });
        }
        
        this.showLevelComplete({
            wisdomBonus: wisdomBonus,
            totalWisdom: this.player.wisdom,
            newKnowledge: newKnowledge
        });
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
        this.currentAct = null;
        this.currentActIndex = 0;
        this.gameState = 'boot';
        this.dialogueQueue = [];
        this.isShowingDialogue = false;
        this.isOnline = false;
        this.globalState = {};
        this._afterChoice = false;
        this._choiceNextAct = null;
        this._choiceLevel = null;
        this._choiceWisdomBonus = 0;
        this._onlineChoiceResult = null;

        // 重置UI
        document.getElementById('player-name').value = '';
        document.querySelectorAll('.specialty-card').forEach(c => c.classList.remove('selected'));
        document.getElementById('confirm-character-btn').disabled = true;

        this.showScreen('boot-screen');
        this.startBootSequence();
    }

    // 打开聊天
    openChat(characterId) {
        let character = null;
        
        // 尝试从旧数据结构查找
        if (Array.isArray(GameData.characters)) {
            character = GameData.characters.find(c => c.id === characterId);
        }
        
        // 如果找不到，从当前关卡数据构建角色信息
        if (!character) {
            const level = GameData.levels[this.currentLevel];
            if (level && level.character) {
                character = {
                    id: 'main',
                    name: level.character,
                    icon: level.characterIcon || '👤',
                    personality: `我是${level.characterRole || level.character}`
                };
            }
        }
        
        if (!character) return;

        document.getElementById('chat-character-name').textContent = `与${character.name}对话`;
        document.getElementById('chat-messages').innerHTML = '';
        document.getElementById('chat-input').value = '';
        
        this.currentChatCharacter = characterId;
        
        // 添加欢迎消息
        const welcomeMsg = character.personality 
            ? `你好，我是${character.name}。${character.personality}。你想聊些什么？`
            : `你好，我是${character.name}。你想聊些什么？`;
        this.addChatMessage('ai', welcomeMsg);
        
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
        let character = null;
        
        // 尝试从旧数据结构查找
        if (Array.isArray(GameData.characters)) {
            character = GameData.characters.find(c => c.id === characterId);
        }
        
        // 如果找不到，从当前关卡数据构建
        if (!character) {
            const level = GameData.levels[this.currentLevel];
            if (level && level.character) {
                character = {
                    id: 'main',
                    name: level.character,
                    prompt: `你是${level.character}，${level.characterRole || '历史人物'}。你在${level.year}年的${level.location}。`
                };
            }
        }
        
        if (!character) return '角色不存在';

        const systemPrompt = `${character.prompt || '你是' + character.name}\n\n当前情境：这是"AI穿越之旅"游戏，玩家是一位来自未来的时间旅行者，正在与你一起工作。\n请保持角色设定，用中文回复。回复要简洁有趣，适合游戏对话，不超过150字。\n可以适当加入emoji增加趣味性。`;

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
