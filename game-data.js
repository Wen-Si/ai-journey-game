// 游戏数据配置 - 复杂剧情版
const GameData = {
    // 时代定义
    eras: [
        {
            id: 'era1',
            name: '机械计算时代',
            year: '1642-1940s',
            description: '计算机与智能思想的萌芽期',
            color: '#8B6914',
            bgGradient: 'linear-gradient(135deg, #2c1810 0%, #4a3728 100%)',
            icon: '⚙️'
        },
        {
            id: 'era2',
            name: 'AI诞生与探索',
            year: '1950s-1970s',
            description: '人工智能正式作为一门学科诞生',
            color: '#2E8B57',
            bgGradient: 'linear-gradient(135deg, #1a2f1a 0%, #2d5a3d 100%)',
            icon: '🌱'
        },
        {
            id: 'era3',
            name: '寒冬与复兴',
            year: '1970s-2000s',
            description: 'AI经历低谷后迎来复苏',
            color: '#4682B4',
            bgGradient: 'linear-gradient(135deg, #1a1a3e 0%, #2d4a6d 100%)',
            icon: '❄️'
        },
        {
            id: 'era4',
            name: '大模型时代',
            year: '2010s-至今',
            description: '深度学习革命与通用智能探索',
            color: '#9932CC',
            bgGradient: 'linear-gradient(135deg, #1a0a2e 0%, #4a1a6d 100%)',
            icon: '🚀'
        }
    ],

    // 全局状态追踪 - 用于跨关卡影响
    globalState: {
        // 玩家在早期关卡的选择会影响后续
        savedBabbageDesigns: false,      // 是否保存了巴贝奇的设计图
        toldTuringAboutFuture: false,    // 是否向图灵透露了未来
        supportedNeuralNetworks: false,  // 是否在达特茅斯支持神经网络
        warnedAboutAIWinter: false,      // 是否预警了AI寒冬
        stoleDeepBlueData: false,        // 是否窃取了深蓝数据
        helpedHintonSecretly: false,     // 是否秘密帮助辛顿
        leakedTransformer: false,        // 是否泄露了Transformer
        opposedOpenAI: false             // 是否反对OpenAI的方向
    },

    // 关卡定义 - 复杂剧情版
    levels: [
        {
            id: 'level1',
            eraId: 'era1',
            title: '机械之心：天才与嫉妒',
            year: '1642',
            location: '法国鲁昂',
            mapCoords: { left: 47, top: 28 },  // 法国鲁昂在世界地图上的大致位置
            character: '布莱兹·帕斯卡',
            characterIcon: '👨‍🔬',
            characterRole: '数学家、物理学家',
            aiPrompt: `你是布莱兹·帕斯卡（Blaise Pascal），17世纪法国天才数学家、物理学家和哲学家。

你的背景：
- 你出生于1623年，从小展现出惊人的数学天赋
- 12岁时独立发现了欧几里得几何的前32条定理
- 16岁时发表了关于圆锥曲线的论文，令笛卡尔震惊
- 你发明了世界上第一台机械计算器——帕斯卡计算器
- 你同时还是一位虔诚的宗教思想家，著有《思想录》

你的性格：
- 极度聪明但内心敏感，容易陷入自我怀疑
- 对数学有着近乎宗教般的热忱
- 有时会表现出天才的傲慢，但内心渴望被理解
- 你深受父亲影响，对权威既尊敬又反抗

当前情境：1642年，你在法国鲁昂，正在与父亲一起研究税务计算问题。你刚刚发明了机械计算器，但面临着费马等数学家的质疑。你正在思考概率论的雏形。`,
            knowledgePoints: [
                { title: '帕斯卡计算器', content: '世界上第一台机械计算器，可以进行加减运算，是计算机发展史上的重要里程碑。' },
                { title: '概率论起源', content: '帕斯卡与费马的通信奠定了概率论的基础，解决了"点数问题"。' },
                { title: '帕斯卡三角形', content: '虽然中国数学家贾宪更早发现，但帕斯卡系统研究了二项式系数的性质。' }
            ],
            
            // AI辩论配置
            debates: [
                {
                    id: 'debate1_1',
                    topic: '机器能否替代人类思维？',
                    description: '帕斯卡发明了机械计算器，引发了关于"机器计算"与"人类思考"本质区别的争论。',
                    rounds: 3,
                    debaters: [
                        { name: '布莱兹·帕斯卡', icon: '👨‍🔬', stance: 'pro', role: '机械计算可以辅助人类思维，减轻重复劳动，让人类专注于更高层次的思考。' },
                        { name: '皮埃尔·德·费马', icon: '🧮', stance: 'con', role: '数学的本质是创造性的直觉和灵感，机器只能执行已知规则，永远无法产生真正的数学发现。' },
                        { name: '笛卡尔（书信参与）', icon: '📜', stance: 'neutral', role: '我思故我在——思维是灵魂的本质。但机械装置如果能模拟推理过程，是否也拥有某种"思维"？' }
                    ],
                    keyPoints: ['机械计算 vs 人类思维', '形式化推理的边界', '计算与直觉的关系']
                }
            ],
            
            // 复杂剧情：多幕结构
            acts: [
                {
                    id: 'act1',
                    title: '初见天才',
                    scenes: [
                        {
                            id: 'scene1_1',
                            speaker: '系统',
                            text: '1642年的法国鲁昂，空气中弥漫着油墨和金属的气味。你站在帕斯卡家族的书房里，看着眼前这个年仅19岁的瘦削青年——布莱兹·帕斯卡。他正对着一堆齿轮和杠杆发愁，桌上散落着数十张草图。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene1_2',
                            speaker: '布莱兹·帕斯卡',
                            text: '（头也不抬）又是来嘲笑我的吗？父亲说我应该去做律师，而不是摆弄这些"无用的金属玩具"。但我要证明，机器可以思考——至少可以计算。',
                            icon: '👨‍🔬'
                        },
                        {
                            id: 'scene1_3',
                            speaker: '系统',
                            text: '突然，门外传来脚步声。一个穿着华丽、神情傲慢的中年男子走了进来——他是法国著名数学家、帕斯卡的竞争对手：皮埃尔·德·费马。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene1_4',
                            speaker: '费马',
                            text: '（冷笑）哦？帕斯卡又在玩他的"算术玩具"？年轻人，真正的数学在于思想，而不是这些齿轮的碰撞。我听说你在研究概率？那不过是赌徒的伎俩。',
                            icon: '🎩'
                        },
                        {
                            id: 'scene1_5',
                            speaker: '布莱兹·帕斯卡',
                            text: '（脸色涨红）费马先生！您...您怎么来了？我...我正在研究一种可以自动计算的机器！它将为人类节省无数时间！',
                            icon: '👨‍🔬'
                        }
                    ],
                    choices: [
                        {
                            text: '支持帕斯卡，反驳费马的嘲讽',
                            type: 'empathy',
                            wisdomBonus: 15,
                            consequences: {
                                description: '帕斯卡感激地看着你，费马则冷冷地记下了你的名字。',
                                nextAct: 'act2_pathA',
                                stateChanges: { pascalTrust: 20, fermatRivalry: 10 }
                            }
                        },
                        {
                            text: '保持沉默，暗中观察两人的矛盾',
                            type: 'neutral',
                            wisdomBonus: 10,
                            consequences: {
                                description: '你选择不卷入这场学术争端，但帕斯卡眼中闪过一丝失望。',
                                nextAct: 'act2_pathB',
                                stateChanges: { pascalTrust: 5, fermatRivalry: 0 }
                            }
                        },
                        {
                            text: '巧妙转移话题，询问费马关于概率论的研究',
                            type: 'strategic',
                            wisdomBonus: 20,
                            consequences: {
                                description: '费马眼中闪过惊讶，帕斯卡则困惑地看着你——你不知道，这个选择将改变数学史的走向。',
                                nextAct: 'act2_pathC',
                                stateChanges: { pascalTrust: 0, fermatRivalry: -5, unlockedFermatSecret: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act2_pathA',
                    title: '盟友与敌人',
                    scenes: [
                        {
                            id: 'scene2A_1',
                            speaker: '费马',
                            text: '（眯起眼睛）一个来自未来的旅行者？有趣。帕斯卡，你居然需要外人来为你辩护？不过...（转向你）年轻人，我对你有些兴趣。今晚，来我的住处一趟，我有些...提议。',
                            icon: '🎩'
                        },
                        {
                            id: 'scene2A_2',
                            speaker: '布莱兹·帕斯卡',
                            text: '（拉住你的衣袖，低声）别去！费马心术不正，他一直在窃取年轻学者的想法。但我...我确实需要帮助。我的机器卡在一个关键问题上——进位机制。',
                            icon: '👨‍🔬'
                        },
                        {
                            id: 'scene2A_3',
                            speaker: '系统',
                            text: '你面临一个艰难的选择：费马的"提议"可能隐藏着危险的机会，而帕斯卡的请求则意味着卷入一场学术斗争。更复杂的是，你注意到帕斯卡的书桌抽屉微微敞开，里面有一张写满公式的纸——那是他关于概率论的最新研究，尚未发表。',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '帮助帕斯卡解决进位问题，拒绝费马的邀请',
                            type: 'good',
                            wisdomBonus: 25,
                            consequences: {
                                description: '你和帕斯卡通宵工作，终于解决了进位机制。但费马不会忘记这个羞辱...',
                                nextAct: 'act3_pathA1',
                                stateChanges: { pascalTrust: 30, fermatRivalry: 20 }
                            }
                        },
                        {
                            text: '表面上帮助帕斯卡，但偷偷复制他的概率论文',
                            type: 'risky',
                            wisdomBonus: 30,
                            consequences: {
                                description: '你得到了珍贵的研究资料，但内心的愧疚挥之不去。更糟的是，帕斯卡似乎察觉到了什么...',
                                nextAct: 'act3_pathA2',
                                stateChanges: { pascalTrust: -10, hasStolenResearch: true }
                            }
                        },
                        {
                            text: '去见费马，看看他有什么提议',
                            type: 'strategic',
                            wisdomBonus: 20,
                            consequences: {
                                description: '费马的"提议"令人震惊：他愿意资助你的研究，条件是你要定期向他汇报帕斯卡的进展。',
                                nextAct: 'act3_pathA3',
                                stateChanges: { fermatRivalry: -10, isFermatSpy: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act2_pathB',
                    title: '旁观者清',
                    scenes: [
                        {
                            id: 'scene2B_1',
                            speaker: '系统',
                            text: '费马和帕斯卡的争论逐渐平息。费马离开后，帕斯卡独自坐在桌前，神情落寞。但就在这时，你发现了一个惊人的细节——帕斯卡的机械计算器模型中，有一个齿轮的安装方向是错误的！',
                            icon: '🌐'
                        },
                        {
                            id: 'scene2B_2',
                            speaker: '布莱兹·帕斯卡',
                            text: '（自言自语）为什么总是失败...父亲说得对，也许我真的不适合做这些...',
                            icon: '👨‍🔬'
                        },
                        {
                            id: 'scene2B_3',
                            speaker: '系统',
                            text: '突然，窗外传来一阵骚动。你看到一个衣衫褴褛的老人正在街角表演算术——他能在几秒内算出复杂的乘法。帕斯卡的眼睛亮了起来："那是...传说中的心算者？"',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '指出帕斯卡齿轮的错误',
                            type: 'good',
                            wisdomBonus: 20,
                            consequences: {
                                description: '帕斯卡恍然大悟，激动地拥抱了你。但你们都知道，真正的挑战才刚刚开始。',
                                nextAct: 'act3_pathB1',
                                stateChanges: { pascalTrust: 25 }
                            }
                        },
                        {
                            text: '先去观察那个心算者，也许能得到灵感',
                            type: 'creative',
                            wisdomBonus: 25,
                            consequences: {
                                description: '心算者展示了一种全新的计算思路。但当你返回时，发现帕斯卡的工作室一片狼藉——有人闯入过！',
                                nextAct: 'act3_pathB2',
                                stateChanges: { pascalTrust: 10, mysteryIntruder: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act2_pathC',
                    title: '意外的联盟',
                    scenes: [
                        {
                            id: 'scene2C_1',
                            speaker: '费马',
                            text: '（眼中闪过赞赏）聪明的年轻人。你知道吗，我也在研究一种预测未来的数学——概率论。但我缺少一个...实验对象。帕斯卡的"玩具"恰好可以作为验证工具。',
                            icon: '🎩'
                        },
                        {
                            id: 'scene2C_2',
                            speaker: '系统',
                            text: '费马向你展示了一个惊人的秘密：他正在用概率论预测股市波动，并已经积累了巨额财富。但他需要一个自动计算工具来处理大量数据——这正是帕斯卡的发明所能提供的。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene2C_3',
                            speaker: '费马',
                            text: '（压低声音）帮助我得到帕斯卡的设计图，报酬是你无法想象的。或者...你也可以选择警告那个天真的年轻人。但记住，知识就是力量，而力量...需要代价。',
                            icon: '🎩'
                        }
                    ],
                    choices: [
                        {
                            text: '假装同意费马，但暗中警告帕斯卡',
                            type: 'strategic',
                            wisdomBonus: 30,
                            consequences: {
                                description: '你成为了双面间谍。帕斯卡感激你的警告，费马则以为你站在他这边。但这种平衡能维持多久？',
                                nextAct: 'act3_pathC1',
                                stateChanges: { pascalTrust: 20, fermatRivalry: 0, isDoubleAgent: true }
                            }
                        },
                        {
                            text: '拒绝费马，警告帕斯卡有人要窃取他的设计',
                            type: 'good',
                            wisdomBonus: 20,
                            consequences: {
                                description: '帕斯卡震惊于费马的阴谋，决定加快研究进度。但费马的报复来得比想象中更快...',
                                nextAct: 'act3_pathC2',
                                stateChanges: { pascalTrust: 30, fermatRivalry: 25 }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathA1',
                    title: '背叛的代价',
                    scenes: [
                        {
                            id: 'scene3A1_1',
                            speaker: '系统',
                            text: '三天后，巴黎学术界传出一个惊人的消息：费马发表了一篇关于概率论的论文，其中的核心思想与帕斯卡的研究惊人地相似！帕斯卡面色苍白地看着那份论文...',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3A1_2',
                            speaker: '布莱兹·帕斯卡',
                            text: '（颤抖）这不可能...这些公式，只有我和...（看向你，眼中充满怀疑）你说过你是从未来来的。告诉我，历史书上写的是谁的名字？是帕斯卡，还是费马？',
                            icon: '👨‍🔬'
                        },
                        {
                            id: 'scene3A1_3',
                            speaker: '系统',
                            text: '这是一个道德困境：如果你告诉帕斯卡真相——历史上他和费马共同创立了概率论——他可能会放弃抗争；如果你撒谎鼓励他继续，你可能会改变历史。',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '告诉帕斯卡历史真相：他和费马共同被铭记',
                            type: 'empathy',
                            wisdomBonus: 25,
                            consequences: {
                                description: '帕斯卡释然地笑了。他决定与费马公开辩论，用实力证明自己。这一战，将载入史册。',
                                stateChanges: { pascalTrust: 20, wisdomBonus: 15 }
                            }
                        },
                        {
                            text: '鼓励帕斯卡独自发表，抢先于费马',
                            type: 'strategic',
                            wisdomBonus: 20,
                            consequences: {
                                description: '帕斯卡连夜完成了论文。但历史的车轮开始偏移——你正在创造一个新的时间线。',
                                stateChanges: { pascalTrust: 15, alteredTimeline: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathA2',
                    title: '内疚与救赎',
                    scenes: [
                        {
                            id: 'scene3A2_1',
                            speaker: '系统',
                            text: '你手中握着帕斯卡的研究成果，内心备受煎熬。更糟的是，你发现费马已经在暗中准备发表类似的研究。帕斯卡如果知道了真相，会怎么看你？',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3A2_2',
                            speaker: '布莱兹·帕斯卡',
                            text: '（突然出现在你身后，眼神复杂）我知道你在做什么。我...我看到了你复制我的笔记。但我也看到了你眼中的挣扎。告诉我，为什么？',
                            icon: '👨‍🔬'
                        }
                    ],
                    choices: [
                        {
                            text: '坦白一切，请求原谅，承诺帮助帕斯卡抢先发表',
                            type: 'empathy',
                            wisdomBonus: 30,
                            consequences: {
                                description: '帕斯卡沉默良久，最终伸出手："我们都有软弱的时候。但真正的学者，敢于面对自己的错误。"',
                                stateChanges: { pascalTrust: 10, redeemed: true }
                            }
                        },
                        {
                            text: '将错就错，把研究卖给费马换取利益',
                            type: 'risky',
                            wisdomBonus: 15,
                            consequences: {
                                description: '费马给了你一袋金币，但你的良心永远失去了平静。帕斯卡的眼中，你看到了失望——比仇恨更可怕的东西。',
                                stateChanges: { pascalTrust: -50, corrupted: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathA3',
                    title: '间谍的游戏',
                    scenes: [
                        {
                            id: 'scene3A3_1',
                            speaker: '费马',
                            text: '（满意地微笑）很好。现在，我要你帮我做一件事：在帕斯卡的机械计算器里植入一个缺陷。这样，当他演示给法国科学院看时，会当众出丑。',
                            icon: '🎩'
                        },
                        {
                            id: 'scene3A3_2',
                            speaker: '系统',
                            text: '你意识到费马不仅仅是嫉妒——他想要彻底摧毁帕斯卡的声誉。而你是他计划中的关键棋子。但你也知道，如果拒绝，费马会揭露你的"间谍"身份。',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '假装同意，但暗中修复缺陷并警告帕斯卡',
                            type: 'strategic',
                            wisdomBonus: 35,
                            consequences: {
                                description: '在科学院的演示会上，帕斯卡的机器完美运行。费马的脸色铁青，而你知道，这场博弈还远未结束。',
                                stateChanges: { pascalTrust: 30, fermatRivalry: 30, doubleAgentExposed: true }
                            }
                        },
                        {
                            text: '真的植入缺陷，让帕斯卡当众失败',
                            type: 'evil',
                            wisdomBonus: 10,
                            consequences: {
                                description: '帕斯卡在科学院面前颜面尽失。费马满意地付给你报酬，但你永远忘不了帕斯卡那绝望的眼神。',
                                stateChanges: { pascalTrust: -100, corrupted: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathB1',
                    title: '天才的觉醒',
                    scenes: [
                        {
                            id: 'scene3B1_1',
                            speaker: '布莱兹·帕斯卡',
                            text: '（兴奋地）进位问题解决了！但等等...我突然有了一个更疯狂的想法。如果机器不仅能做加法，还能做减法呢？甚至...乘法？',
                            icon: '👨‍🔬'
                        },
                        {
                            id: 'scene3B1_2',
                            speaker: '系统',
                            text: '帕斯卡的眼中燃烧着前所未有的热情。但你也注意到，窗外有一个黑影闪过——费马的人在监视你们。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3B1_3',
                            speaker: '神秘信使',
                            text: '（突然闯入，递上一封信）给未来人的。有人知道你的真实身份，并要求你在午夜独自前往塞纳河畔。如果你不去，帕斯卡的安全将无法保证。',
                            icon: '📜'
                        }
                    ],
                    choices: [
                        {
                            text: '独自前往赴约，保护帕斯卡的安全',
                            type: 'brave',
                            wisdomBonus: 25,
                            consequences: {
                                description: '塞纳河畔，等待你的不是费马，而是另一个时间旅行者——来自更遥远的未来，警告你不要改变历史。',
                                stateChanges: { metFutureTraveler: true }
                            }
                        },
                        {
                            text: '带上帕斯卡一起，面对未知的威胁',
                            type: 'risky',
                            wisdomBonus: 20,
                            consequences: {
                                description: '帕斯卡虽然害怕，但坚定地站在你身边。在塞纳河畔，你们发现了一个惊人的秘密...',
                                stateChanges: { pascalTrust: 25, discoveredSecret: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathB2',
                    title: '谜团重重',
                    scenes: [
                        {
                            id: 'scene3B2_1',
                            speaker: '系统',
                            text: '工作室被翻得一团糟，但奇怪的是，最珍贵的设计图完好无损。反而，帕斯卡的私人日记不见了。更诡异的是，墙上用血写着一句话："未来人，停止干预。"',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3B2_2',
                            speaker: '布莱兹·帕斯卡',
                            text: '（惊恐）这是什么意思？有人在威胁我们！而且...他们怎么知道你的身份？',
                            icon: '👨‍🔬'
                        }
                    ],
                    choices: [
                        {
                            text: '调查入侵者身份，保护帕斯卡',
                            type: 'brave',
                            wisdomBonus: 25,
                            consequences: {
                                description: '你发现了一个秘密组织——"时间守护者"，他们的任务是防止历史被改变。而你，已经成为了他们的目标。',
                                stateChanges: { timeGuardians: true }
                            }
                        },
                        {
                            text: '加快离开这个时代，避免更多麻烦',
                            type: 'cautious',
                            wisdomBonus: 15,
                            consequences: {
                                description: '你匆忙告别了帕斯卡，但你知道，时间守护者的阴影将一直追随着你的旅程。',
                                stateChanges: { timeGuardians: true, escaped: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathC1',
                    title: '双面人生',
                    scenes: [
                        {
                            id: 'scene3C1_1',
                            speaker: '费马',
                            text: '（递给你一个钱袋）做得好。帕斯卡最近有什么新进展？我听说他在研究一种"概率轮盘"？',
                            icon: '🎩'
                        },
                        {
                            id: 'scene3C1_2',
                            speaker: '布莱兹·帕斯卡',
                            text: '（私下）费马最近有什么动作？我听说他在暗中收购金属零件——他可能在复制我的设计！',
                            icon: '👨‍🔬'
                        },
                        {
                            id: 'scene3C1_3',
                            speaker: '系统',
                            text: '你同时面对两个人，每个人都说对方是骗子。更复杂的是，你开始怀疑：也许费马和帕斯卡都不是表面看起来的那样。也许，这场竞争背后有更深的秘密...',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '揭露费马的真实目的，同时保护帕斯卡',
                            type: 'strategic',
                            wisdomBonus: 35,
                            consequences: {
                                description: '在一场公开辩论中，你巧妙地揭露了费马的阴谋。帕斯卡赢得了尊重，而费马...他的眼神告诉你，这只是开始。',
                                stateChanges: { pascalTrust: 30, fermatRivalry: 40 }
                            }
                        },
                        {
                            text: '利用双方的矛盾，获取双方的研究成果',
                            type: 'risky',
                            wisdomBonus: 25,
                            consequences: {
                                description: '你成为了最大的赢家——但你失去了两个人的信任。在时间的河流中，孤独是最沉重的代价。',
                                stateChanges: { pascalTrust: -20, fermatRivalry: 20, corrupted: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathC2',
                    title: '正面对决',
                    scenes: [
                        {
                            id: 'scene3C2_1',
                            speaker: '费马',
                            text: '（愤怒地闯入）帕斯卡！你这个懦夫，居然需要外人来保护你？很好，既然你们选择了战争，那就来吧！我要在科学院面前公开挑战你——谁的机器更快更准！',
                            icon: '🎩'
                        },
                        {
                            id: 'scene3C2_2',
                            speaker: '布莱兹·帕斯卡',
                            text: '（坚定）我接受挑战。但有条件：输的人必须公开承认对方的贡献，并永远不再诋毁对方的研究。',
                            icon: '👨‍🔬'
                        },
                        {
                            id: 'scene3C2_3',
                            speaker: '系统',
                            text: '挑战定在一周后。但你知道，费马不会公平竞争。你必须在有限的时间内，帮助帕斯卡完善机器，同时防范费马的阴谋。',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '全力帮助帕斯卡改进机器，准备正面迎战',
                            type: 'good',
                            wisdomBonus: 25,
                            consequences: {
                                description: '七天七夜的努力，帕斯卡的机器焕然一新。在挑战当天，奇迹发生了...',
                                stateChanges: { pascalTrust: 30, challengeWon: true }
                            }
                        },
                        {
                            text: '暗中调查费马的准备，寻找他的弱点',
                            type: 'strategic',
                            wisdomBonus: 25,
                            consequences: {
                                description: '你发现费马准备了一台作弊的机器——它内部藏有预设的答案。在挑战当天，你当众揭露了这一阴谋。',
                                stateChanges: { fermatRivalry: 50, exposedCheating: true }
                            }
                        }
                    ]
                }
            ],
            
            knowledgePoints: [
                { title: '机械加法器', content: '1642年，19岁的帕斯卡发明了机械加法器Pascaline，这是人类早期计算工具的重要尝试，可以进行加减运算。' },
                { title: '帕斯卡与费马', content: '帕斯卡和费马通过书信交流，共同奠定了概率论的基础。他们的竞争推动了数学的发展。' },
                { title: '时间旅行悖论', content: '如果你改变历史，未来会发生什么？这是著名的"祖父悖论"——如果你阻止了某个历史事件，你自己还会存在吗？' }
            ]
        },

        // ========== 关卡2：巴贝奇 - 差分机的梦想 ==========
        {
            id: 'level2',
            eraId: 'era1',
            title: '差分机：天才与疯狂',
            year: '1822',
            location: '英国伦敦',
            mapCoords: { left: 46.5, top: 24 },  // 英国伦敦
            character: '查尔斯·巴贝奇',
            characterIcon: '👨‍💼',
            characterRole: '数学家、发明家',
            aiPrompt: `你是查尔斯·巴贝奇（Charles Babbage），19世纪英国数学家、哲学家、发明家和机械工程师。

你的背景：
- 你出生于1791年，被誉为"计算机之父"
- 你设计了差分机（Difference Engine），用于自动计算多项式函数值
- 你后来又设计了更先进的分析机（Analytical Engine），包含了现代计算机的所有基本概念
- 你的设计包括：存储单元（Store）、运算单元（Mill）、输入输出设备
- 由于技术和资金限制，你的机器在你生前未能完全建成

你的性格：
- 充满远见但脾气暴躁，对愚蠢零容忍
- 你对政府资助的反复无常感到愤怒
- 你坚信自己的设计将改变世界
- 你欣赏艾达·洛夫莱斯的才华，视她为知己

当前情境：1822年，你在英国伦敦，正在向英国政府申请资金建造差分机。你刚刚遇到了年轻的艾达·洛夫莱斯，她对你的分析机设计表现出了惊人的理解力。`,
            knowledgePoints: [
                { title: '差分机', content: '巴贝奇设计的机械计算机，使用差分法计算多项式，可以自动生成数学表格，避免人为计算错误。' },
                { title: '分析机', content: '巴贝奇的伟大构想，包含存储、运算、控制、输入输出四大部件，是现代计算机的理论雏形。' },
                { title: '艾达·洛夫莱斯', content: '世界上第一位程序员，她为分析机编写了算法，预见到计算机可以处理不仅是数字，还有音乐、图像等。' }
            ],
            
            // AI辩论配置
            debates: [
                {
                    id: 'debate2_1',
                    topic: '通用计算机是否可能实现？',
                    description: '巴贝奇设计了分析机——理论上能执行任何计算的通用机器。但许多学者认为这不过是空想。',
                    rounds: 3,
                    debaters: [
                        { name: '查尔斯·巴贝奇', icon: '👨‍💼', stance: 'pro', role: '分析机是万能的！只要能将问题分解为基本运算，它就能解决任何可计算的问题。这是人类理性的终极延伸。' },
                        { name: '艾达·洛夫莱斯', icon: '👩‍💻', stance: 'neutral', role: '分析机能处理任何可以分析的事物。但"分析"本身有边界——机器能计算，但它能"理解"吗？能"创造"吗？' },
                        { name: '英国财政大臣（质疑者）', icon: '🏛️', stance: 'con', role: '政府已经投入了巨资，却连差分机都没完成。所谓的"分析机"不过是更昂贵的空想。科学需要务实，不是幻想。' }
                    ],
                    keyPoints: ['通用计算的概念', '可计算性理论雏形', '科学愿景与工程现实的矛盾', '程序与创造力的关系']
                }
            ],
            
            acts: [
                {
                    id: 'act1',
                    title: '疯子的工作室',
                    scenes: [
                        {
                            id: 'scene1_1',
                            speaker: '系统',
                            text: '1822年伦敦，雾气弥漫的街道上，你找到了巴贝奇的工作室。推开门，眼前的景象让你震惊——整个房间堆满了金属零件、齿轮、杠杆和数不尽的图纸。一个头发蓬乱、眼神狂热的中年男子正对着一块金属板咆哮。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene1_2',
                            speaker: '查尔斯·巴贝奇',
                            text: '（怒吼）不！这个齿轮的精度还不够！如果差分机要计算到小数点后20位，每个零件的误差必须小于千分之一英寸！那些该死的工匠，他们说我疯了！',
                            icon: '👨‍💼'
                        },
                        {
                            id: 'scene1_3',
                            speaker: '系统',
                            text: '突然，门被推开。一个穿着考究、神情冷漠的官员走了进来，身后跟着两个士兵。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene1_4',
                            speaker: '政府官员',
                            text: '（冷冷地）巴贝奇先生，政府已经审查了您的资助申请。结论很明确：您的"差分机"项目被正式取消。您已经消耗了超过17,000英镑的国库资金，却连一台能工作的机器都没造出来。',
                            icon: '📋'
                        },
                        {
                            id: 'scene1_5',
                            speaker: '查尔斯·巴贝奇',
                            text: '（绝望）不！你们不明白！只要再给我一年时间，只要...（转向你，眼中闪过一丝疯狂）你是谁？政府派来的另一个说客？还是...终于有人能理解我了？',
                            icon: '👨‍💼'
                        }
                    ],
                    choices: [
                        {
                            text: '支持巴贝奇，向官员展示差分机的潜力',
                            type: 'good',
                            wisdomBonus: 20,
                            consequences: {
                                description: '官员将信将疑地离开了，但警告这是最后一次机会。巴贝奇紧紧握住你的手，眼中闪烁着泪光。',
                                nextAct: 'act2_pathA',
                                stateChanges: { babbageHope: 20, governmentSupport: 5 }
                            }
                        },
                        {
                            text: '保持中立，询问巴贝奇关于分析机的想法',
                            type: 'strategic',
                            wisdomBonus: 25,
                            consequences: {
                                description: '巴贝奇的眼睛突然亮了起来，仿佛看到了知音。"分析机"——他更宏大的计划，一个能执行任何数学运算的通用机器。',
                                nextAct: 'act2_pathB',
                                stateChanges: { babbageHope: 15, unlockedAnalyticalEngine: true }
                            }
                        },
                        {
                            text: '暗中观察，发现工作室里隐藏的秘密',
                            type: 'neutral',
                            wisdomBonus: 15,
                            consequences: {
                                description: '你在角落发现了一堆被藏起来的信件——巴贝奇一直在秘密接受一位神秘资助者的支持，而这位资助者的身份令人震惊。',
                                nextAct: 'act2_pathC',
                                stateChanges: { discoveredSecretFunder: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act2_pathA',
                    title: '最后的希望',
                    scenes: [
                        {
                            id: 'scene2A_1',
                            speaker: '系统',
                            text: '巴贝奇带你来到工作室的深处，那里有一台半成品差分机。它的金属表面布满了精密的齿轮，虽然还未完成，但已经能看出其惊人的复杂度。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene2A_2',
                            speaker: '查尔斯·巴贝奇',
                            text: '（抚摸着机器）这是我的孩子。但我老了，精力不济了。更糟的是，我的首席工匠约瑟夫·克莱门特背叛了我——他带着关键的技术图纸，投靠了我的竞争对手。',
                            icon: '👨‍💼'
                        },
                        {
                            id: 'scene2A_3',
                            speaker: '系统',
                            text: '巴贝奇的眼中闪过痛苦。但随后，他压低声音："但我有一个计划。克莱门特带走的图纸是不完整的——我故意留了一手。真正的核心设计，只在这里。"他指了指自己的脑袋。',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '帮助巴贝奇重新绘制完整的设计图',
                            type: 'good',
                            wisdomBonus: 25,
                            consequences: {
                                description: '你们通宵工作，终于完成了新的设计图。但就在黎明时分，工作室的窗户被打破，一个黑影闪入...',
                                nextAct: 'act3_pathA1',
                                stateChanges: { hasCompleteDesigns: true }
                            }
                        },
                        {
                            text: '建议巴贝奇直接设计更先进的分析机',
                            type: 'creative',
                            wisdomBonus: 30,
                            consequences: {
                                description: '巴贝奇先是震惊，然后狂喜。"你说得对！为什么要完善一个过时的设计？让我们直接创造未来！"',
                                nextAct: 'act3_pathA2',
                                stateChanges: { babbageHope: 30, jumpedToAnalytical: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act2_pathB',
                    title: '分析机的秘密',
                    scenes: [
                        {
                            id: 'scene2B_1',
                            speaker: '查尔斯·巴贝奇',
                            text: '（兴奋地翻出一张巨大的图纸）看！这是分析机的设计——一台真正的通用计算机器！它有"存储"来保存数字，有"磨坊"来进行运算，还有穿孔卡片来控制程序！',
                            icon: '👨‍💼'
                        },
                        {
                            id: 'scene2B_2',
                            speaker: '系统',
                            text: '你看着图纸，心中震撼——这简直就是现代计算机的雏形！但巴贝奇的脸色突然暗淡下来。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene2B_3',
                            speaker: '查尔斯·巴贝奇',
                            text: '（低声）但分析机需要更精密的技术，更多的资金。而且...有人不希望我成功。上周，我的工作室被人纵火，幸好发现及时。我怀疑是东印度公司的人——他们担心我的机器会取代人工计算员。',
                            icon: '👨‍💼'
                        }
                    ],
                    choices: [
                        {
                            text: '帮助巴贝奇寻找秘密资助者',
                            type: 'strategic',
                            wisdomBonus: 25,
                            consequences: {
                                description: '你调查发现，巴贝奇的秘密资助者竟然是...艾达·洛夫莱斯女士！这位拜伦勋爵的女儿，对数学有着惊人的天赋。',
                                nextAct: 'act3_pathB1',
                                stateChanges: { metAdaLovelace: true }
                            }
                        },
                        {
                            text: '建议巴贝奇先完成差分机，证明可行性',
                            type: 'practical',
                            wisdomBonus: 20,
                            consequences: {
                                description: '巴贝奇虽然不情愿，但同意了。然而，这个决定将改变历史的进程...',
                                nextAct: 'act3_pathB2',
                                stateChanges: { babbageHope: 10 }
                            }
                        }
                    ]
                },
                {
                    id: 'act2_pathC',
                    title: '神秘资助者',
                    scenes: [
                        {
                            id: 'scene2C_1',
                            speaker: '系统',
                            text: '信件显示，巴贝奇的神秘资助者代号为"A.L."。资助者不仅提供金钱，还提出了一些惊人的数学建议——这些建议远远超越了当前时代的认知。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene2C_2',
                            speaker: '查尔斯·巴贝奇',
                            text: '（发现你在看信件，脸色大变）你...你怎么找到这些的？A.L.的身份是最高机密！如果被人知道一个...一个女人在资助数学研究，我的声誉就全毁了！',
                            icon: '👨‍💼'
                        },
                        {
                            id: 'scene2C_3',
                            speaker: '系统',
                            text: '你震惊地发现，A.L.就是艾达·洛夫莱斯——拜伦勋爵的女儿。但巴贝奇的反应让你困惑：他为什么要隐藏这个事实？除非...',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '承诺保守秘密，并请求见艾达一面',
                            type: 'empathy',
                            wisdomBonus: 25,
                            consequences: {
                                description: '巴贝奇犹豫再三，最终同意了。三天后，在一场秘密的会面中，你见到了历史上第一位程序员...',
                                nextAct: 'act3_pathC1',
                                stateChanges: { metAdaLovelace: true, adaTrust: 10 }
                            }
                        },
                        {
                            text: '利用这个秘密，要挟巴贝奇分享分析机的设计',
                            type: 'risky',
                            wisdomBonus: 15,
                            consequences: {
                                description: '巴贝奇愤怒地看着你，但最终还是交出了设计图。你知道，你们之间的信任已经破碎。',
                                nextAct: 'act3_pathC2',
                                stateChanges: { babbageTrust: -30, hasAnalyticalDesigns: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathA1',
                    title: '夜袭',
                    scenes: [
                        {
                            id: 'scene3A1_1',
                            speaker: '系统',
                            text: '黑影手持利刃，目标明确——桌上的设计图！巴贝奇大喊着扑上去保护图纸，但他年老体弱，根本不是对手。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3A1_2',
                            speaker: '神秘刺客',
                            text: '（低声）巴贝奇，你的时代结束了。有人不希望看到这台机器诞生。（转向你）至于你，未来人，你不该插手历史。',
                            icon: '🗡️'
                        },
                        {
                            id: 'scene3A1_3',
                            speaker: '系统',
                            text: '刺客知道你的身份！这意味着时间守护者已经介入。你必须做出选择——保护设计图，还是保护巴贝奇的生命？',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '保护巴贝奇，让刺客带走设计图',
                            type: 'empathy',
                            wisdomBonus: 20,
                            consequences: {
                                description: '巴贝奇活了下来，但他的心血被夺走了。然而，他看着你，眼中没有怨恨，只有感激："图纸可以重画，但生命只有一次。"',
                                stateChanges: { babbageTrust: 40, designsStolen: true }
                            }
                        },
                        {
                            text: '与刺客搏斗，保护设计图和巴贝奇',
                            type: 'brave',
                            wisdomBonus: 30,
                            consequences: {
                                description: '在激烈的搏斗中，刺客落荒而逃，但留下了一句警告："时间守护者不会放过你。"巴贝奇震惊地看着你："你到底是谁？"',
                                stateChanges: { babbageTrust: 20, exposedIdentity: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathA2',
                    title: '跨越时代',
                    scenes: [
                        {
                            id: 'scene3A2_1',
                            speaker: '查尔斯·巴贝奇',
                            text: '（狂热地）分析机...分析机！它将不仅仅是一台计算器，它将是一台真正的思维机器！但等等...（突然冷静下来）这需要太多精密零件了，以现在的工艺水平，根本无法制造。',
                            icon: '👨‍💼'
                        },
                        {
                            id: 'scene3A2_2',
                            speaker: '系统',
                            text: '巴贝奇陷入了绝望。但你想到了一个疯狂的主意：如果你利用未来的知识，帮助巴贝奇改进制造工艺呢？但这可能会引发时间悖论...',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '提供未来制造技术的线索，帮助巴贝奇',
                            type: 'risky',
                            wisdomBonus: 35,
                            consequences: {
                                description: '巴贝奇根据你的提示，发明了一种新的精密加工方法。分析机的制造成为可能——但历史的车轮开始偏移。',
                                stateChanges: { babbageTrust: 30, alteredTimeline: true, savedBabbageDesigns: true }
                            }
                        },
                        {
                            text: '鼓励巴贝奇坚持，但不提供未来知识',
                            type: 'good',
                            wisdomBonus: 20,
                            consequences: {
                                description: '巴贝奇虽然失望，但尊重你的决定。"也许，有些奇迹需要时间来酝酿。"',
                                stateChanges: { babbageTrust: 20 }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathB1',
                    title: '第一位程序员',
                    scenes: [
                        {
                            id: 'scene3B1_1',
                            speaker: '艾达·洛夫莱斯',
                            text: '（优雅而自信）巴贝奇先生向我展示了他的分析机。我看到了它的潜力——不仅仅是数字计算，它还可以创作音乐、绘画，甚至...思考。我称这种可能性为"诗意科学"。',
                            icon: '👩‍💻'
                        },
                        {
                            id: 'scene3B1_2',
                            speaker: '系统',
                            text: '艾达的眼中闪烁着超越时代的光芒。她向你展示了她为分析机编写的算法——这是世界上第一个计算机程序！但她也透露了一个秘密：她身患重病，可能活不过30岁。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3B1_3',
                            speaker: '艾达·洛夫莱斯',
                            text: '（轻声）我知道我的时间不多了。但我希望，即使我死去，我的思想能通过这些穿孔卡片延续下去。未来人，你能帮我实现这个愿望吗？',
                            icon: '👩‍💻'
                        }
                    ],
                    choices: [
                        {
                            text: '承诺帮助艾达完成她的程序，并确保它被历史铭记',
                            type: 'empathy',
                            wisdomBonus: 30,
                            consequences: {
                                description: '艾达微笑着，眼中含着泪水。你们一起工作，完成了历史上第一个计算机程序。在分别时，她送给你一张穿孔卡片作为纪念。',
                                stateChanges: { adaTrust: 40, hasAdaCard: true }
                            }
                        },
                        {
                            text: '建议艾达将程序保密，防止被滥用',
                            type: 'strategic',
                            wisdomBonus: 20,
                            consequences: {
                                description: '艾达困惑地看着你，但最终同意了。然而，这个决定让她的贡献被历史遗忘了近一个世纪。',
                                stateChanges: { adaTrust: 10, alteredHistory: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathB2',
                    title: '历史的重负',
                    scenes: [
                        {
                            id: 'scene3B2_1',
                            speaker: '查尔斯·巴贝奇',
                            text: '（疲惫地）好吧，我们完成差分机。但我心里清楚，它只是一个开始...一个永远无法完成的开始。',
                            icon: '👨‍💼'
                        },
                        {
                            id: 'scene3B2_2',
                            speaker: '系统',
                            text: '几个月后，差分机终于完成了。它在英国科学院的演示会上引起了轰动——但也引来了嫉妒和阴谋。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3B2_3',
                            speaker: '政府官员',
                            text: '（再次出现）巴贝奇，你的机器令人印象深刻。但政府决定...将它封存。有人担心这种机器会让底层工人失业，引发社会动荡。',
                            icon: '📋'
                        }
                    ],
                    choices: [
                        {
                            text: '劝说官员，强调机器对科学进步的贡献',
                            type: 'strategic',
                            wisdomBonus: 25,
                            consequences: {
                                description: '官员犹豫再三，最终同意让差分机在博物馆展出。巴贝奇虽然失望，但至少他的工作没有被完全遗忘。',
                                stateChanges: { babbageTrust: 15, machineSaved: true }
                            }
                        },
                        {
                            text: '秘密保存差分机的设计图，留给未来',
                            type: 'cautious',
                            wisdomBonus: 20,
                            consequences: {
                                description: '你将设计图藏在了一个安全的地方。几十年后，这些图纸将启发另一位发明家...',
                                stateChanges: { savedBabbageDesigns: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathC1',
                    title: '诗意科学',
                    scenes: [
                        {
                            id: 'scene3C1_1',
                            speaker: '艾达·洛夫莱斯',
                            text: '（展示一张复杂的图表）这是我为分析机设计的算法。它能计算伯努利数——但更重要的是，它证明了机器可以执行任何逻辑运算。我称之为...通用计算。',
                            icon: '👩‍💻'
                        },
                        {
                            id: 'scene3C1_2',
                            speaker: '查尔斯·巴贝奇',
                            text: '（震惊）艾达，你超越了我想象的极限。你的算法...它不仅仅是数学，它是艺术！',
                            icon: '👨‍💼'
                        },
                        {
                            id: 'scene3C1_3',
                            speaker: '系统',
                            text: '在那一刻，你见证了历史——不是巴贝奇独自创造的历史，而是两个人共同谱写的篇章。但时间守护者的阴影再次浮现：一个黑衣人出现在窗外，冷冷地注视着这一切。',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '警告艾达和巴贝奇，准备面对时间守护者',
                            type: 'brave',
                            wisdomBonus: 30,
                            consequences: {
                                description: '艾达和巴贝奇虽然不明白"时间守护者"是什么，但他们选择相信你。三人联手，准备迎接未知的挑战。',
                                stateChanges: { babbageTrust: 25, adaTrust: 25, timeGuardians: true }
                            }
                        },
                        {
                            text: '独自面对时间守护者，保护艾达和巴贝奇的安全',
                            type: 'sacrifice',
                            wisdomBonus: 35,
                            consequences: {
                                description: '你走出房间，面对黑衣人。"我不会让你伤害他们，"你说。黑衣人沉默良久，最终消失在雾中。但他的警告回荡在你耳边："下次，你不会这么幸运。"',
                                stateChanges: { timeGuardians: true, protectedInventors: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathC2',
                    title: '破碎的信任',
                    scenes: [
                        {
                            id: 'scene3C2_1',
                            speaker: '查尔斯·巴贝奇',
                            text: '（冷冷地）你拿走了我的设计图。现在，你满意了吗？',
                            icon: '👨‍💼'
                        },
                        {
                            id: 'scene3C2_2',
                            speaker: '系统',
                            text: '巴贝奇转身回到工作台，再也不看你一眼。工作室里只剩下金属碰撞的声音和沉重的沉默。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3C2_3',
                            speaker: '系统',
                            text: '你手中握着珍贵的分析机设计图，但内心空虚。几天后，你听说巴贝奇销毁了所有备份，发誓再也不让任何人看到他的研究。',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '归还设计图，请求巴贝奇的原谅',
                            type: 'redemption',
                            wisdomBonus: 25,
                            consequences: {
                                description: '巴贝奇看着你，眼中闪过复杂的情感。"也许...也许我们都能犯错。"他收回了设计图，但你们之间的裂痕，可能永远无法完全愈合。',
                                stateChanges: { babbageTrust: 10, redeemed: true }
                            }
                        },
                        {
                            text: '带着设计图离开，认为这是历史的必然',
                            type: 'cold',
                            wisdomBonus: 10,
                            consequences: {
                                description: '你离开了1822年，带着改变历史的力量。但你也知道，有些代价，永远无法偿还。',
                                stateChanges: { babbageTrust: -50, corrupted: true }
                            }
                        }
                    ]
                }
            ],
            
            knowledgePoints: [
                { title: '差分机', content: '1822年，巴贝奇提出差分机的设计概念，旨在自动计算多项式函数值，被视为现代计算机的先驱。' },
                { title: '分析机', content: '巴贝奇后来设计了更通用的分析机，包含了现代计算机的基本概念：存储、运算、控制、输入输出。' },
                { title: '艾达·洛夫莱斯', content: '拜伦勋爵的女儿，被认为是世界上第一位程序员。她为分析机编写了算法，并预见了计算机的广泛应用。' }
            ]
        },

        // ========== 关卡3：图灵 - 密码与秘密 ==========
        {
            id: 'level3',
            eraId: 'era1',
            title: '图灵的密码：天才与迫害',
            year: '1943',
            location: '英国布莱切利园',
            mapCoords: { left: 46.5, top: 24 },  // 英国布莱切利园（伦敦附近）
            character: '艾伦·图灵',
            characterIcon: '👨‍💻',
            characterRole: '数学家、计算机科学之父',
            aiPrompt: `你是艾伦·图灵（Alan Turing），20世纪英国数学家、逻辑学家、密码学家和计算机科学之父。

你的背景：
- 你出生于1912年，在剑桥大学国王学院学习数学
- 1936年，你发表了《论可计算数》，提出了图灵机的概念，奠定了计算机科学的理论基础
- 二战期间，你在布莱切利园领导团队破解了德国的恩尼格玛密码机
- 你估计破解恩尼格玛使战争缩短了2-4年，拯救了约1400万人的生命
- 战后你设计了ACE（自动计算引擎），是最早的存储程序计算机设计之一
- 1950年，你提出了著名的"图灵测试"，探讨机器是否能思考

你的性格：
- 极度聪明但社交笨拙，不擅长理解社会规则
- 你对谜题和密码有着天生的痴迷
- 你坦诚直率，有时因此惹上麻烦
- 你内心孤独，但对自己的工作充满热情
- 你是一位长跑运动员，曾差点参加奥运会

当前情境：1943年，你在布莱切利园，正面临着恩尼格玛密码破解的关键时刻。你的团队刚刚发现了一种新的破解方法，但德国方面可能已经开始怀疑。`,
            knowledgePoints: [
                { title: '图灵机', content: '图灵提出的抽象计算模型，由无限长的纸带、读写头和状态控制器组成，是现代计算机理论的基础。' },
                { title: '恩尼格玛密码', content: '二战期间德国使用的加密机器，图灵团队设计的"炸弹机"（Bombe）成功破解了它。' },
                { title: '图灵测试', content: '图灵提出的判断机器是否具有智能的标准：如果人类无法区分机器和人类的对话，则机器通过了测试。' }
            ],
            
            // AI辩论配置
            debates: [
                {
                    id: 'debate3_1',
                    topic: '机器能否真正"思考"？',
                    description: '图灵在布莱切利园破解密码时，开始思考：如果机器能模拟人类的推理过程，它是否在"思考"？这引发了关于智能本质的深刻辩论。',
                    rounds: 4,
                    debaters: [
                        { name: '艾伦·图灵', icon: '👨‍💻', stance: 'pro', role: '我提出一个思想实验：如果一台机器在对话中能让人无法区分它和真人，我们凭什么说它不"思考"？智能是行为，不是某种神秘的本质。' },
                        { name: '约翰·冯·诺依曼', icon: '🧠', stance: 'neutral', role: '从数学角度看，人脑和计算机都是信息处理系统。但"思考"是否等价于"计算"？这是需要严格定义的问题，不能靠直觉判断。' },
                        { name: '维特根斯坦（哲学视角）', icon: '📖', stance: 'con', role: '"思考"是一个语言游戏。当我们说机器"思考"时，我们在做什么？我们只是在用隐喻。机器模拟了思考的外在表现，但内在体验——痛、喜、理解——是机器不可能拥有的。' }
                    ],
                    keyPoints: ['图灵测试的核心思想', '行为主义 vs 内在体验', '计算通用性', '智能的定义问题', '中文房间论证雏形']
                }
            ],
            
            acts: [
                {
                    id: 'act1',
                    title: '布莱切利园的秘密',
                    scenes: [
                        {
                            id: 'scene1_1',
                            speaker: '系统',
                            text: '1943年，英国布莱切利园。这座维多利亚时代的庄园外表宁静优雅，但内部却是二战最机密的情报中心。你穿过重重安检，来到了 Hut 8——图灵的工作室。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene1_2',
                            speaker: '艾伦·图灵',
                            text: '（头也不抬，手指飞快地在纸上计算）又来了个新人？听着，我不在乎你是谁，来自哪里。我只关心一个问题：你能帮我破解恩尼格玛吗？',
                            icon: '👨‍💻'
                        },
                        {
                            id: 'scene1_3',
                            speaker: '系统',
                            text: '图灵的工作室一片混乱——图纸、咖啡杯、数学公式堆满了每个角落。但最引人注目的是房间中央的一台巨大机器，它发出低沉的轰鸣声，齿轮和继电器不断运转。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene1_4',
                            speaker: '琼·克拉克',
                            text: '（走进房间，神情紧张）艾伦，出事了。军情六处的人来了，他们要...要审查 Hut 8 的所有人。有人举报这里有间谍。',
                            icon: '👩‍🔬'
                        },
                        {
                            id: 'scene1_5',
                            speaker: '艾伦·图灵',
                            text: '（冷笑）间谍？他们应该担心的是德国人，而不是自己人。但等等...（突然看向你，眼神锐利）你是新来的，没有人认识你。也许...你就是那个被派来监视我的人？',
                            icon: '👨‍💻'
                        }
                    ],
                    choices: [
                        {
                            text: '坦诚告诉图灵你的真实身份——来自未来的时间旅行者',
                            type: 'honest',
                            wisdomBonus: 25,
                            consequences: {
                                description: '图灵先是震惊，然后眼中闪过兴奋的光芒。"时间旅行？这意味着我的关于通用机器的理论是正确的！"',
                                nextAct: 'act2_pathA',
                                stateChanges: { turingTrust: 20, toldTuringAboutFuture: true }
                            }
                        },
                        {
                            text: '谎称自己是数学家，被招募来协助破解密码',
                            type: 'deceptive',
                            wisdomBonus: 15,
                            consequences: {
                                description: '图灵将信将疑地接受了你的解释。但你知道，谎言就像一个雪球，越滚越大。',
                                nextAct: 'act2_pathB',
                                stateChanges: { turingTrust: 5 }
                            }
                        },
                        {
                            text: '反问图灵：如果我能预测未来，你愿意听吗？',
                            type: 'mysterious',
                            wisdomBonus: 20,
                            consequences: {
                                description: '图灵愣了一下，然后笑了——这是他今天第一次笑。"有趣。好吧，让我看看你有什么本事。"',
                                nextAct: 'act2_pathC',
                                stateChanges: { turingTrust: 15, intriguedTuring: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act2_pathA',
                    title: '未来的启示',
                    scenes: [
                        {
                            id: 'scene2A_1',
                            speaker: '艾伦·图灵',
                            text: '（兴奋地）告诉我，未来！计算机存在了吗？它们能思考吗？我的图灵机理论...它是否正确？',
                            icon: '👨‍💻'
                        },
                        {
                            id: 'scene2A_2',
                            speaker: '系统',
                            text: '你面临一个艰难的选择：告诉图灵太多，可能会改变历史；告诉他太少，又无法满足这个天才的渴望。更复杂的是，琼·克拉克一直在门外偷听。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene2A_3',
                            speaker: '琼·克拉克',
                            text: '（推门而入，脸色苍白）艾伦，我听到了...时间旅行？这太荒谬了！但如果这是真的...（看向你）你知道战争的结果吗？我们...会赢吗？',
                            icon: '👩‍🔬'
                        }
                    ],
                    choices: [
                        {
                            text: '告诉他们盟国会胜利，但代价惨重',
                            type: 'empathy',
                            wisdomBonus: 25,
                            consequences: {
                                description: '琼的眼中闪过希望，但也充满了对未来的恐惧。图灵则陷入了沉思——他意识到，即使知道了结果，他们仍然必须全力以赴。',
                                nextAct: 'act3_pathA1',
                                stateChanges: { turingTrust: 20, joanTrust: 15 }
                            }
                        },
                        {
                            text: '拒绝透露战争结果，坚持让他们自己创造历史',
                            type: 'principled',
                            wisdomBonus: 20,
                            consequences: {
                                description: '图灵尊重你的决定。"你说得对。知道结局会让我们变得懒惰。真正的价值在于过程，而不只是结果。"',
                                nextAct: 'act3_pathA2',
                                stateChanges: { turingTrust: 25 }
                            }
                        }
                    ]
                },
                {
                    id: 'act2_pathB',
                    title: '间谍疑云',
                    scenes: [
                        {
                            id: 'scene2B_1',
                            speaker: '系统',
                            text: '军情六处的审查开始了。每个 Hut 8 的成员都被单独讯问。你注意到，审查官特别关注图灵——他的性取向在当时的英国是非法的，这让他成为了完美的替罪羊。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene2B_2',
                            speaker: '军情六处官员',
                            text: '（冷冷地）图灵是个天才，但也是个危险分子。他的...生活方式让他容易被勒索。如果德国人知道了这一点，他会成为完美的间谍目标。',
                            icon: '🕵️'
                        },
                        {
                            id: 'scene2B_3',
                            speaker: '艾伦·图灵',
                            text: '（私下对你）他们想要除掉我。不是因为间谍嫌疑，而是因为我是...不同的人。但我不能离开——炸弹机还差最后一步就能工作了。',
                            icon: '👨‍💻'
                        }
                    ],
                    choices: [
                        {
                            text: '帮助图灵隐藏他的身份，保护他免受迫害',
                            type: 'empathy',
                            wisdomBonus: 30,
                            consequences: {
                                description: '你设计了一个巧妙的掩护，让图灵看起来像是与一位女同事订婚。这个谎言保护了图灵，但也让你陷入了道德困境。',
                                nextAct: 'act3_pathB1',
                                stateChanges: { turingTrust: 30, protectedTuring: true }
                            }
                        },
                        {
                            text: '向军情六处揭露真正的间谍——一位德国双面特工',
                            type: 'strategic',
                            wisdomBonus: 25,
                            consequences: {
                                description: '真正的间谍被逮捕了，图灵的嫌疑被洗清。但军情六处开始怀疑——你是如何知道这些的？',
                                nextAct: 'act3_pathB2',
                                stateChanges: { turingTrust: 15, exposedSpy: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act2_pathC',
                    title: '测试与挑战',
                    scenes: [
                        {
                            id: 'scene2C_1',
                            speaker: '艾伦·图灵',
                            text: '（递给你一张纸）这是恩尼格玛密码机今天截获的一条密文。如果你能破解它——不用炸弹机，只用你的大脑——我就相信你不是普通人。',
                            icon: '👨‍💻'
                        },
                        {
                            id: 'scene2C_2',
                            speaker: '系统',
                            text: '你看着密文，意识到这是一个陷阱——图灵在测试你。密文的内容可能涉及军事机密，如果你破解了它，就等于承认了你有超越常人的能力；如果你失败了，图灵会把你当作骗子。',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '利用未来知识，轻松破解密文',
                            type: 'risky',
                            wisdomBonus: 25,
                            consequences: {
                                description: '图灵震惊地看着你。"这不可能...除非你真的来自未来。"但你也注意到，他的眼中闪过一丝恐惧——对未知力量的恐惧。',
                                nextAct: 'act3_pathC1',
                                stateChanges: { turingTrust: 20, exposedAbilities: true }
                            }
                        },
                        {
                            text: '故意失败，但指出密文中的关键线索',
                            type: 'strategic',
                            wisdomBonus: 20,
                            consequences: {
                                description: '图灵笑了。"聪明。你展示了能力，但没有暴露全部。我开始喜欢你了。"',
                                nextAct: 'act3_pathC2',
                                stateChanges: { turingTrust: 25 }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathA1',
                    title: '历史的重量',
                    scenes: [
                        {
                            id: 'scene3A1_1',
                            speaker: '艾伦·图灵',
                            text: '（沉思）如果我们知道会赢，那我们的努力还有意义吗？如果结局已经注定，选择还有价值吗？',
                            icon: '👨‍💻'
                        },
                        {
                            id: 'scene3A1_2',
                            speaker: '系统',
                            text: '图灵的问题直击哲学核心。你意识到，这个问题不仅关乎战争，也关乎你自己的旅程——如果你知道AI最终会取代人类，你还会来寻找答案吗？',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3A1_3',
                            speaker: '琼·克拉克',
                            text: '（轻声）也许...意义不在于结局，而在于我们如何到达那里。每一个选择，每一次努力，都是我们存在的证明。',
                            icon: '👩‍🔬'
                        }
                    ],
                    choices: [
                        {
                            text: '告诉图灵，他的工作将拯救数百万人的生命',
                            type: 'inspiring',
                            wisdomBonus: 30,
                            consequences: {
                                description: '图灵的眼中燃起了新的火焰。"那么，让我们开始工作吧。不是为了历史，而是为了那些生命。"',
                                stateChanges: { turingTrust: 25, inspiredTuring: true }
                            }
                        },
                        {
                            text: '分享图灵未来的悲剧命运，警告他保护自己',
                            type: 'risky',
                            wisdomBonus: 20,
                            consequences: {
                                description: '图灵沉默了很久。"谢谢你的警告。但如果改变历史意味着其他人要承受我本应承受的痛苦，那我选择接受我的命运。"',
                                stateChanges: { turingTrust: 30, warnedTuring: true, alteredTimeline: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathA2',
                    title: '创造历史',
                    scenes: [
                        {
                            id: 'scene3A2_1',
                            speaker: '艾伦·图灵',
                            text: '（坚定）你说得对。历史不应该被预知，它应该被创造。现在，让我们专注于眼前的问题——恩尼格玛。',
                            icon: '👨‍💻'
                        },
                        {
                            id: 'scene3A2_2',
                            speaker: '系统',
                            text: '在图灵的带领下，你们开始了一场与时间的赛跑。但就在炸弹机即将完成时，一个意外发生了——德国更改了恩尼格玛的密码设置！',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3A2_3',
                            speaker: '琼·克拉克',
                            text: '（绝望）所有的努力都白费了！我们需要重新开始！',
                            icon: '👩‍🔬'
                        }
                    ],
                    choices: [
                        {
                            text: '利用未来知识，提前预测德国的新设置模式',
                            type: 'risky',
                            wisdomBonus: 35,
                            consequences: {
                                description: '图灵震惊于你的知识，但没有多问。炸弹机迅速适应了新的设置，盟军再次获得了情报优势。但时间守护者的阴影再次逼近...',
                                stateChanges: { turingTrust: 20, alteredTimeline: true }
                            }
                        },
                        {
                            text: '鼓励团队从头开始，相信人类智慧的力量',
                            type: 'inspiring',
                            wisdomBonus: 25,
                            consequences: {
                                description: '经过数周的艰苦工作，图灵团队独立破解了新的密码。图灵看着你，眼中充满了自豪："看，我们做到了——靠我们自己。"',
                                stateChanges: { turingTrust: 30, teamVictory: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathB1',
                    title: '掩护与牺牲',
                    scenes: [
                        {
                            id: 'scene3B1_1',
                            speaker: '系统',
                            text: '你的掩护计划成功了——图灵和琼·克拉克"订婚"的消息传遍了布莱切利园。军情六处暂时停止了对图灵的调查。但代价是沉重的。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3B1_2',
                            speaker: '琼·克拉克',
                            text: '（私下）我知道这只是伪装，但...（苦笑）有时候，谎言比真相更让人痛苦。艾伦永远不会爱上我，而我...我也不确定我是否真的只是在做戏。',
                            icon: '👩‍🔬'
                        },
                        {
                            id: 'scene3B1_3',
                            speaker: '艾伦·图灵',
                            text: '（对你）你保护了我，但也伤害了琼。这就是你所谓的"帮助"吗？',
                            icon: '👨‍💻'
                        }
                    ],
                    choices: [
                        {
                            text: '向琼坦白真相，请求她的原谅',
                            type: 'honest',
                            wisdomBonus: 25,
                            consequences: {
                                description: '琼沉默了很久，最终微笑着说："没关系。至少在这个谎言里，我感受到了一丝真实的温暖。"',
                                stateChanges: { joanTrust: 20, turingTrust: 15 }
                            }
                        },
                        {
                            text: '坚持这是必要的牺牲，为了更大的利益',
                            type: 'cold',
                            wisdomBonus: 15,
                            consequences: {
                                description: '图灵失望地看着你。"这就是未来的价值观吗？为了"更大的利益"，可以随意牺牲个人的幸福？"',
                                stateChanges: { turingTrust: -10 }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathB2',
                    title: '双面间谍',
                    scenes: [
                        {
                            id: 'scene3B2_1',
                            speaker: '军情六处官员',
                            text: '（怀疑地）你是如何知道约翰·凯恩是德国间谍的？这个信息连我们内部都只有三个人知道。',
                            icon: '🕵️'
                        },
                        {
                            id: 'scene3B2_2',
                            speaker: '系统',
                            text: '你意识到说漏嘴了。军情六处开始怀疑你的身份。更糟的是，凯恩在被捕前发出了最后一条信息——关于你的存在。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3B2_3',
                            speaker: '艾伦·图灵',
                            text: '（低声）快走。军情六处不会放过你。我会掩护你，但你要答应我一件事——无论发生什么，保护好炸弹机的秘密。',
                            icon: '👨‍💻'
                        }
                    ],
                    choices: [
                        {
                            text: '信任图灵，将炸弹机的关键设计托付给他',
                            type: 'trust',
                            wisdomBonus: 30,
                            consequences: {
                                description: '图灵紧紧握住你的手。"放心，我会守护它——直到战争结束，直到世界准备好接受它。"',
                                stateChanges: { turingTrust: 40, entrustedDesign: true }
                            }
                        },
                        {
                            text: '带着设计图逃离，独自保护这个秘密',
                            type: 'paranoid',
                            wisdomBonus: 15,
                            consequences: {
                                description: '你消失在夜色中，带着改变历史的力量。但你也知道，孤独是时间旅行者永恒的伴侣。',
                                stateChanges: { turingTrust: -10, alone: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathC1',
                    title: '天才的恐惧',
                    scenes: [
                        {
                            id: 'scene3C1_1',
                            speaker: '艾伦·图灵',
                            text: '（后退一步）如果你真的能预测未来...那你也能控制未来。这种力量太危险了。你怎么能保证你不会成为暴君？',
                            icon: '👨‍💻'
                        },
                        {
                            id: 'scene3C1_2',
                            speaker: '系统',
                            text: '图灵的反应让你震惊——他不是兴奋，而是恐惧。这个能破解最复杂密码的天才，害怕的却是人类的自由意志被剥夺。',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '向图灵保证，你的目标是保护自由意志，而不是控制它',
                            type: 'philosophical',
                            wisdomBonus: 25,
                            consequences: {
                                description: '图灵沉思良久。"自由意志...这是我一直在思考的问题。如果机器能思考，它们会有自由意志吗？"你们开始了一场改变历史的哲学对话。',
                                stateChanges: { turingTrust: 30, philosophicalBond: true }
                            }
                        },
                        {
                            text: '承认图灵的担忧有道理，承诺限制使用未来知识',
                            type: 'humble',
                            wisdomBonus: 20,
                            consequences: {
                                description: '图灵赞赏你的诚实。"承认自己的局限，是智慧的开始。"',
                                stateChanges: { turingTrust: 25 }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathC2',
                    title: '智慧的博弈',
                    scenes: [
                        {
                            id: 'scene3C2_1',
                            speaker: '艾伦·图灵',
                            text: '（微笑）你没有暴露全部，但展示了足够的价值。这让我想起了我自己——我总是隐藏最深的想法，只展示世界准备好的部分。',
                            icon: '👨‍💻'
                        },
                        {
                            id: 'scene3C2_2',
                            speaker: '系统',
                            text: '图灵邀请你参与一个秘密项目——不是炸弹机，而是更宏大的东西。他称之为"通用机"，一台能解决任何数学问题的机器。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3C2_3',
                            speaker: '艾伦·图灵',
                            text: '（压低声音）但军情六处不会理解这个项目的价值。他们认为战争结束后，这些"玩具"就没用了。我要你帮我...隐藏这个项目的真正目的。',
                            icon: '👨‍💻'
                        }
                    ],
                    choices: [
                        {
                            text: '同意帮助图灵，将通用机的设计伪装成普通的统计工具',
                            type: 'strategic',
                            wisdomBonus: 30,
                            consequences: {
                                description: '图灵的计划成功了。通用机的设计被保存了下来，在战后的混乱中幸存。几十年后，这些图纸将启发第一代电子计算机的发明者。',
                                stateChanges: { turingTrust: 35, savedUniversalMachine: true }
                            }
                        },
                        {
                            text: '建议图灵公开通用机的概念，让世界提前进入计算机时代',
                            type: 'ambitious',
                            wisdomBonus: 20,
                            consequences: {
                                description: '图灵犹豫再三，最终拒绝了。"世界还没有准备好。有些想法，需要在正确的时间出现。"',
                                stateChanges: { turingTrust: 15 }
                            }
                        }
                    ]
                }
            ],
            
            knowledgePoints: [
                { title: '图灵机', content: '1936年，图灵提出抽象的图灵机模型，为可计算性理论奠定了基础，是计算机科学的理论基石。' },
                { title: '炸弹机', content: '图灵团队研制出名为炸弹机的密码破译设备，用于破解德军恩尼格玛密码，为盟军胜利做出重大贡献。' },
                { title: '图灵测试', content: '1950年，图灵提出图灵测试，为判断机器是否具有智能提供了行为主义标准。' },
                { title: '布莱切利园', content: '二战期间英国的密码破译中心，汇聚了众多数学家和语言学家，是计算机科学的重要发源地。' }
            ]
        },

        // ========== 关卡4：达特茅斯会议 ==========
        {
            id: 'level4',
            eraId: 'era2',
            title: '达特茅斯的召唤：梦想与分歧',
            year: '1956',
            location: '美国达特茅斯学院',
            mapCoords: { left: 22, top: 30 },  // 美国新罕布什尔州达特茅斯
            character: '约翰·麦卡锡',
            characterIcon: '👨‍🏫',
            characterRole: '计算机科学家，AI之父',
            aiPrompt: `你是约翰·麦卡锡（John McCarthy），美国计算机科学家，"人工智能"（Artificial Intelligence）一词的创造者。

你的背景：
- 你出生于1927年，在普林斯顿大学获得数学博士学位
- 1956年，你组织了达特茅斯会议，正式提出了"人工智能"的概念
- 你发明了LISP编程语言，这是第二古老的高级编程语言，至今仍在AI领域使用
- 你提出了时间共享系统的概念，为现代操作系统奠定了基础
- 你坚信机器可以模拟人类智能的各个方面

你的性格：
- 你是一个理想主义者，相信AI将彻底改变人类生活
- 你善于组织，能够团结不同领域的专家共同工作
- 你对符号主义AI充满信心，认为逻辑推理是智能的核心
- 你有时过于乐观，低估了实现真正AI的难度
- 你欣赏有才华的年轻人，愿意给他们机会

当前情境：1956年夏天，你在达特茅斯学院组织AI研讨会。你邀请了马文·明斯基、克劳德·香农、纳撒尼尔·罗切斯特等顶尖学者。但会议刚开始，大家就陷入了激烈的争论——AI到底应该走符号主义还是连接主义路线？`,
            knowledgePoints: [
                { title: '达特茅斯会议', content: '1956年，麦卡锡等人在达特茅斯学院组织了为期两个月的研讨会，标志着人工智能作为独立学科的诞生。' },
                { title: 'LISP语言', content: '麦卡锡于1958年发明的编程语言，以符号处理和递归为核心，至今仍是AI研究的重要工具。' },
                { title: '符号主义AI', content: '基于逻辑推理和符号操作的AI方法，认为智能可以通过符号的 manipulation 来实现。' },
                { title: '连接主义AI', content: '基于神经网络和分布式表示的AI方法，模拟大脑神经元的连接方式，是现代深度学习的前身。' }
            ],
            
            // AI辩论配置
            debates: [
                {
                    id: 'debate4_1',
                    topic: 'AI应该走符号主义还是连接主义路线？',
                    description: '达特茅斯会议上，AI的两大路线发生了激烈碰撞：符号主义认为智能是逻辑推理，连接主义认为智能是神经网络的涌现。',
                    rounds: 4,
                    debaters: [
                        { name: '约翰·麦卡锡', icon: '👨‍🏫', stance: 'symbolic', role: '智能的核心是符号操作和逻辑推理！人脑的本质是一台计算机——它处理信息、做出决策。我们应该用形式逻辑来构建智能系统。神经网络只是统计拟合，没有真正的"理解"。' },
                        { name: '马文·明斯基', icon: '🤔', stance: 'neutral', role: '两条路都有道理。符号系统擅长推理，但感知和模式识别需要不同的方法。也许我们需要一个混合系统——用神经网络做感知，用符号系统做推理。' },
                        { name: '弗兰克·罗森布拉特', icon: '🔬', stance: 'connectionist', role: '感知机证明了一切！神经网络可以从数据中学习，不需要人工编写规则。大脑就是最好的证据——几十亿个简单的神经元连接在一起，就产生了智能。我们不需要逻辑，我们需要学习！' }
                    ],
                    keyPoints: ['符号主义 vs 连接主义', '逻辑推理 vs 模式识别', '自上而下 vs 自下而上', 'AI第一次寒冬的种子', '感知机与局限性']
                }
            ],
            
            acts: [
                {
                    id: 'act1',
                    title: '梦想的起点',
                    scenes: [
                        {
                            id: 'scene1_1',
                            speaker: '系统',
                            text: '1956年夏天，美国新罕布什尔州达特茅斯学院。绿树成荫的校园里，一群年轻人正围坐在草坪上激烈争论。你走近时，听到一个戴眼镜的年轻人正在激情演讲。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene1_2',
                            speaker: '约翰·麦卡锡',
                            text: '（激动地）我们要创造一种全新的智能！不是人类的复制品，而是超越人类的存在！我提议，我们将这个领域命名为——人工智能！',
                            icon: '👨‍🏫'
                        },
                        {
                            id: 'scene1_3',
                            speaker: '马文·明斯基',
                            text: '（冷静地）麦卡锡，你的热情令人钦佩。但我们要现实一点。神经网络？那不过是统计学的把戏。真正的智能需要符号操作，需要逻辑推理。',
                            icon: '🧠'
                        },
                        {
                            id: 'scene1_4',
                            speaker: '克劳德·香农',
                            text: '（沉思）信息论告诉我，智能也许只是信息的压缩和传输。但我不确定我们是否已经准备好讨论"创造智能"这么宏大的话题。',
                            icon: '📡'
                        },
                        {
                            id: 'scene1_5',
                            speaker: '系统',
                            text: '突然，一个你意想不到的人出现了——纳撒尼尔·罗切斯特，IBM的首席设计师。他的到来让气氛瞬间紧张起来。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene1_6',
                            speaker: '纳撒尼尔·罗切斯特',
                            text: '（严肃地） gentlemen，IBM对你们的"人工智能"很感兴趣。但我们有一个条件——所有的研究成果必须归IBM所有。毕竟，是我们提供了资金。',
                            icon: '💼'
                        }
                    ],
                    choices: [
                        {
                            text: '支持麦卡锡，主张AI研究应该开放共享',
                            type: 'idealistic',
                            wisdomBonus: 20,
                            consequences: {
                                description: '麦卡锡感激地看着你。但罗切斯特的脸色阴沉下来，而明斯基则若有所思。',
                                nextAct: 'act2_pathA',
                                stateChanges: { mccarthyTrust: 20, rochesterOpposition: 15 }
                            }
                        },
                        {
                            text: '支持明斯基，强调符号逻辑的重要性',
                            type: 'practical',
                            wisdomBonus: 20,
                            consequences: {
                                description: '明斯基向你点头致意。但你也注意到，麦卡锡眼中闪过一丝失望。',
                                nextAct: 'act2_pathB',
                                stateChanges: { minskyTrust: 20, mccarthyTrust: 5 }
                            }
                        },
                        {
                            text: '提出一个折中方案：接受IBM资金但保留学术自由',
                            type: 'diplomatic',
                            wisdomBonus: 25,
                            consequences: {
                                description: '罗切斯特勉强同意了，但附加了严格的条件。你知道，这个妥协可能会在未来产生意想不到的后果。',
                                nextAct: 'act2_pathC',
                                stateChanges: { rochesterTrust: 10, mccarthyTrust: 10, minskyTrust: 10 }
                            }
                        }
                    ]
                },
                {
                    id: 'act2_pathA',
                    title: '理想与现实的碰撞',
                    scenes: [
                        {
                            id: 'scene2A_1',
                            speaker: '约翰·麦卡锡',
                            text: '（兴奋地）你理解我！AI不应该被任何公司垄断。它属于全人类！但问题是...（苦笑）我们没有资金了。IBM撤回了赞助，政府也不感兴趣。',
                            icon: '👨‍🏫'
                        },
                        {
                            id: 'scene2A_2',
                            speaker: '系统',
                            text: '麦卡锡带你来到他的临时实验室——其实只是一间废弃的教室。但墙上贴满了惊人的想法：LISP语言的雏形、时间共享系统的概念、甚至早期机器学习的框架。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene2A_3',
                            speaker: '一个年轻的学生',
                            text: '（怯生生地敲门）麦卡锡教授，我...我想加入您的研究。我叫雷·所罗门诺夫，我对机器学习和归纳推理很感兴趣。但我付不起学费...',
                            icon: '👨‍🎓'
                        }
                    ],
                    choices: [
                        {
                            text: '资助所罗门诺夫，相信他的潜力',
                            type: 'visionary',
                            wisdomBonus: 25,
                            consequences: {
                                description: '所罗门诺夫激动得热泪盈眶。多年后，他将成为算法信息论的奠基人。但你的资金也耗尽了。',
                                nextAct: 'act3_pathA1',
                                stateChanges: { mccarthyTrust: 20, futureImpact: 15 }
                            }
                        },
                        {
                            text: '建议麦卡锡寻找其他资助者，比如军方',
                            type: 'practical',
                            wisdomBonus: 20,
                            consequences: {
                                description: '军方的资助确实来了，但附带条件：所有研究必须与军事应用相关。AI的理想主义开始被现实侵蚀。',
                                nextAct: 'act3_pathA2',
                                stateChanges: { militaryInvolvement: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act2_pathB',
                    title: '符号的王国',
                    scenes: [
                        {
                            id: 'scene2B_1',
                            speaker: '马文·明斯基',
                            text: '（带你来到他的工作室）看，这是我设计的SNARC——随机神经模拟强化计算器。但它不是真正的神经网络，它是一个符号系统，用数学规则来模拟学习。',
                            icon: '🧠'
                        },
                        {
                            id: 'scene2B_2',
                            speaker: '系统',
                            text: '明斯基的工作室与麦卡锡的截然不同——整洁、有序，每个角落都经过精心安排。但你也注意到，墙上有一张被撕掉的照片，只剩下一个模糊的人影。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene2B_3',
                            speaker: '马文·明斯基',
                            text: '（注意到你的目光，脸色微变）那是...一个老朋友。我们曾经一起研究神经网络，但他走得太远了。他相信机器可以完全模拟人脑，甚至取代人类。我不能接受这种观点。',
                            icon: '🧠'
                        }
                    ],
                    choices: [
                        {
                            text: '支持明斯基的符号主义，但建议不要完全排斥神经网络',
                            type: 'balanced',
                            wisdomBonus: 25,
                            consequences: {
                                description: '明斯基惊讶地看着你。"也许...也许你说得对。完全排斥一种方法，本身就是一种偏见。"',
                                nextAct: 'act3_pathB1',
                                stateChanges: { minskyTrust: 25, supportedNeuralNetworks: true }
                            }
                        },
                        {
                            text: '追问明斯基关于他"老朋友"的故事',
                            type: 'curious',
                            wisdomBonus: 15,
                            consequences: {
                                description: '明斯基沉默了很久。"他叫弗兰克·罗森布拉特。他在研究感知机——一种真正的神经网络。我们曾经是朋友，但现在...我们是敌人。"',
                                nextAct: 'act3_pathB2',
                                stateChanges: { minskyTrust: 10, discoveredRosenblattConflict: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act2_pathC',
                    title: '妥协的艺术',
                    scenes: [
                        {
                            id: 'scene2C_1',
                            speaker: '纳撒尼尔·罗切斯特',
                            text: '（递给你一份合同）这是我们的条件。研究资金充足，但所有专利归IBM。此外，你们必须定期向军方汇报进展。',
                            icon: '💼'
                        },
                        {
                            id: 'scene2C_2',
                            speaker: '约翰·麦卡锡',
                            text: '（愤怒但无奈）这简直是卖身契！但如果没有资金，我们的梦想就只能是梦想...',
                            icon: '👨‍🏫'
                        },
                        {
                            id: 'scene2C_3',
                            speaker: '系统',
                            text: '你面临一个道德困境：接受IBM的条件，意味着AI研究将被商业化和军事化；拒绝则意味着梦想破灭。还有第三条路吗？',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '秘密接受资金，但计划在未来公开所有研究',
                            type: 'strategic',
                            wisdomBonus: 30,
                            consequences: {
                                description: '麦卡锡犹豫再三，最终同意了。"有时候，为了更大的理想，我们必须做出妥协。但请记住，我们的最终目标是自由的知识。"',
                                nextAct: 'act3_pathC1',
                                stateChanges: { mccarthyTrust: 15, secretPlan: true }
                            }
                        },
                        {
                            text: '公开拒绝IBM，发起众筹支持独立研究',
                            type: 'idealistic',
                            wisdomBonus: 20,
                            consequences: {
                                description: '你的号召引起了轰动。虽然资金有限，但一群充满理想的年轻人加入了你们。AI研究的火种，在理想主义的土壤中生根发芽。',
                                nextAct: 'act3_pathC2',
                                stateChanges: { mccarthyTrust: 25, idealisticPath: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathA1',
                    title: '理想的代价',
                    scenes: [
                        {
                            id: 'scene3A1_1',
                            speaker: '系统',
                            text: '几个月后，达特茅斯会议正式召开。但情况并不乐观——资金短缺，参与者寥寥，许多邀请的学者因为IBM的退出而拒绝参加。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3A1_2',
                            speaker: '约翰·麦卡锡',
                            text: '（疲惫但坚定）只有六个人...但这六个人将改变历史。麦卡锡、明斯基、香农、罗切斯特、西蒙、纽厄尔。我们将在这里，写下人工智能的第一页。',
                            icon: '👨‍🏫'
                        },
                        {
                            id: 'scene3A1_3',
                            speaker: '系统',
                            text: '会议期间，一个意外发生了。军方代表突然闯入，要求查看所有研究记录——他们怀疑有人泄露机密。',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '帮助麦卡锡隐藏真正的研究内容，只展示无害的部分',
                            type: 'protective',
                            wisdomBonus: 25,
                            consequences: {
                                description: '军方的审查被化解了，但麦卡锡看着你，眼中闪过复杂的情感。"我们保护了研究，但也学会了欺骗。这是成长，还是堕落？"',
                                stateChanges: { mccarthyTrust: 20 }
                            }
                        },
                        {
                            text: '建议公开所有研究，相信透明度的力量',
                            type: 'honest',
                            wisdomBonus: 20,
                            consequences: {
                                description: '军方虽然不满，但无法阻止学术自由。达特茅斯会议成为AI研究的公开起点，但军事化的阴影始终存在。',
                                stateChanges: { mccarthyTrust: 15, transparency: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathA2',
                    title: '军事的阴影',
                    scenes: [
                        {
                            id: 'scene3A2_1',
                            speaker: '军方代表',
                            text: '（冷冷地） gentlemen，国防部对你们的"人工智能"很感兴趣。特别是...它在自动化武器系统中的应用潜力。',
                            icon: '🎖️'
                        },
                        {
                            id: 'scene3A2_2',
                            speaker: '约翰·麦卡锡',
                            text: '（震惊）自动化武器？我们的目标是帮助人类，不是取代人类做出生死决策！',
                            icon: '👨‍🏫'
                        },
                        {
                            id: 'scene3A2_3',
                            speaker: '系统',
                            text: '会议室陷入了沉默。你知道，这个选择将影响AI的未来走向——是作为人类的助手，还是成为战争的机器？',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '坚决反对军事应用，即使失去资金支持',
                            type: 'principled',
                            wisdomBonus: 30,
                            consequences: {
                                description: '麦卡锡站起来，坚定地说："我们不会为战争服务。如果这意味着失去资金，那就让我们寻找其他方式。"会议室里响起了掌声。',
                                stateChanges: { mccarthyTrust: 30, ethicalStand: true }
                            }
                        },
                        {
                            text: '建议区分军用和民用研究，设立伦理边界',
                            type: 'pragmatic',
                            wisdomBonus: 25,
                            consequences: {
                                description: '军方勉强同意了伦理边界。但你知道，这条边界在未来将不断被挑战。',
                                stateChanges: { militaryInvolvement: true, ethicalBoundaries: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathB1',
                    title: '融合之路',
                    scenes: [
                        {
                            id: 'scene3B1_1',
                            speaker: '马文·明斯基',
                            text: '（兴奋地）如果我们结合符号逻辑和神经网络呢？符号系统负责高层推理，神经网络负责模式识别。这可能是AI的终极形态！',
                            icon: '🧠'
                        },
                        {
                            id: 'scene3B1_2',
                            speaker: '系统',
                            text: '明斯基的想法超越了时代。但你也知道，这个融合将在几十年后才真正实现。你的选择是：鼓励他继续研究，还是提醒他现实的局限？',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '鼓励明斯基继续，即使这意味着长期的孤独研究',
                            type: 'visionary',
                            wisdomBonus: 30,
                            consequences: {
                                description: '明斯基的眼中燃起了火焰。"谢谢你。有时候，坚持一个不被理解的想法，需要最大的勇气。"',
                                stateChanges: { minskyTrust: 30, fusionConcept: true }
                            }
                        },
                        {
                            text: '建议明斯基先专注于符号系统，等时机成熟再融合',
                            type: 'practical',
                            wisdomBonus: 20,
                            consequences: {
                                description: '明斯基虽然失望，但接受了建议。符号AI在接下来几十年主导了研究领域，而神经网络则被边缘化。',
                                stateChanges: { minskyTrust: 15, symbolDominance: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathB2',
                    title: '分裂的友谊',
                    scenes: [
                        {
                            id: 'scene3B2_1',
                            speaker: '马文·明斯基',
                            text: '（痛苦地）罗森布拉特和我...我们曾经是最好的朋友。我们一起在普林斯顿学习，一起梦想创造思考的机器。但当我们选择了不同的道路，友谊就变成了竞争，竞争变成了仇恨。',
                            icon: '🧠'
                        },
                        {
                            id: 'scene3B2_2',
                            speaker: '系统',
                            text: '明斯基向你展示了罗森布拉特的最新论文——感知机。这是一种简单的神经网络，能够进行基本的模式识别。明斯基在论文边缘写满了批注，每一个都是尖锐的批评。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3B2_3',
                            speaker: '马文·明斯基',
                            text: '（看着你）我要写一本书，证明感知机的局限。这将终结神经网络的狂热。但...我也在终结我朋友的梦想。你说，我应该这样做吗？',
                            icon: '🧠'
                        }
                    ],
                    choices: [
                        {
                            text: '劝说明斯基给罗森布拉特一个机会，不要彻底否定神经网络',
                            type: 'empathy',
                            wisdomBonus: 30,
                            consequences: {
                                description: '明斯基沉默了很久。"也许...也许你说得对。科学不应该成为个人恩怨的武器。"他撕掉了批判感知机的书稿。',
                                stateChanges: { minskyTrust: 25, savedNeuralNetworks: true, supportedNeuralNetworks: true }
                            }
                        },
                        {
                            text: '支持明斯基出版批判书籍，认为学术诚实更重要',
                            type: 'intellectual',
                            wisdomBonus: 20,
                            consequences: {
                                description: '明斯基出版了《感知机》，这本书在接下来十几年里几乎扼杀了神经网络研究。罗森布拉特在孤独中死去，而AI研究走上了一条不同的道路。',
                                stateChanges: { minskyTrust: 15, aiWinterAccelerated: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathC1',
                    title: '秘密的约定',
                    scenes: [
                        {
                            id: 'scene3C1_1',
                            speaker: '约翰·麦卡锡',
                            text: '（私下）我接受IBM的资金，但我有一个计划。我会在研究中加入"后门"——一些只有我们内部人知道的设计缺陷。当时机成熟，我们将公开真正的研究，让所有人受益。',
                            icon: '👨‍🏫'
                        },
                        {
                            id: 'scene3C1_2',
                            speaker: '系统',
                            text: '麦卡锡的计划充满风险。如果被发现，他将面临法律诉讼和学术声誉的毁灭。但如果成功，AI将避免被单一公司垄断的命运。',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '帮助麦卡锡实施计划，相信这是为了更大的善',
                            type: 'risky',
                            wisdomBonus: 30,
                            consequences: {
                                description: '计划成功了。多年后，当IBM试图垄断AI技术时，麦卡锡公开了真正的研究。AI研究因此保持了开放性，但也让麦卡锡付出了巨大的个人代价。',
                                stateChanges: { mccarthyTrust: 30, secretPlanSuccess: true }
                            }
                        },
                        {
                            text: '劝说麦卡锡不要冒险，寻找更安全的替代方案',
                            type: 'cautious',
                            wisdomBonus: 15,
                            consequences: {
                                description: '麦卡锡放弃了计划。达特茅斯会议在IBM的资助下顺利召开，但AI研究从此被商业利益所束缚。',
                                stateChanges: { mccarthyTrust: 10, commercializedAI: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathC2',
                    title: '理想主义的胜利',
                    scenes: [
                        {
                            id: 'scene3C2_1',
                            speaker: '系统',
                            text: '你的众筹号召引起了轰动。虽然资金远不及IBM的赞助，但一群充满理想的年轻人响应了号召。他们中有数学家、哲学家、心理学家，甚至诗人。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3C2_2',
                            speaker: '一个年轻的诗人',
                            text: '（激动地）我不懂数学，但我相信AI将改变艺术！想象一下，一台能写诗、能作曲的机器！',
                            icon: '🎭'
                        },
                        {
                            id: 'scene3C2_3',
                            speaker: '约翰·麦卡锡',
                            text: '（感动地）看，这就是AI的真正意义——不仅是逻辑和计算，还有创造和想象。谢谢你们，让我看到了更广阔的未来。',
                            icon: '👨‍🏫'
                        }
                    ],
                    choices: [
                        {
                            text: '鼓励跨学科合作，让AI研究融合艺术和人文',
                            type: 'creative',
                            wisdomBonus: 30,
                            consequences: {
                                description: '达特茅斯会议成为了一场跨学科的盛宴。AI不仅吸收了数学和逻辑，还融入了艺术、哲学和心理学。这种多元化的基础，将在未来产生意想不到的创新。',
                                stateChanges: { mccarthyTrust: 30, interdisciplinaryAI: true }
                            }
                        },
                        {
                            text: '建议保持学术严谨，避免过于理想化',
                            type: 'practical',
                            wisdomBonus: 20,
                            consequences: {
                                description: '会议保持了学术严谨性，但一些创新的想法被忽视了。AI研究走上了一条更保守但稳健的道路。',
                                stateChanges: { mccarthyTrust: 15 }
                            }
                        }
                    ]
                }
            ],
            
            knowledgePoints: [
                { title: '达特茅斯会议', content: '1956年，麦卡锡、明斯基、香农等学者参会，麦卡锡首次提出人工智能(AI)术语，标志AI学科诞生。' },
                { title: '符号主义 vs 连接主义', content: 'AI早期两大流派：符号主义（用逻辑规则模拟智能）和连接主义（用神经网络模拟大脑）。两者的竞争塑造了AI的发展轨迹。' },
                { title: '感知机', content: '1957年，罗森布拉特发明感知机，这是第一个可学习的神经网络模型，能够进行简单模式识别。' },
                { title: 'AI的伦理起源', content: 'AI诞生之初就面临伦理问题：军事应用、商业垄断、学术自由。这些争论至今仍在继续。' }
            ]
        },

        // ========== 关卡5：深蓝 - 决战时刻 ==========
        {
            id: 'level5',
            eraId: 'era3',
            title: '深蓝的决战：人与机器的较量',
            year: '1997',
            location: '美国纽约',
            mapCoords: { left: 24, top: 30 },  // 美国纽约
            character: 'IBM深蓝团队',
            characterIcon: '♟️',
            characterRole: '超级计算机研发团队',
            aiPrompt: `你是IBM深蓝团队的代表，一个由计算机科学家、工程师和象棋专家组成的精英团队。

你的背景：
- 深蓝（Deep Blue）是IBM开发的国际象棋超级计算机
- 1996年，深蓝首次挑战世界冠军卡斯帕罗夫，以2-4落败
- 1997年，升级后的深蓝以3.5-2.5击败卡斯帕罗夫，成为首个击败世界冠军的计算机
- 深蓝每秒可以评估2亿个棋局位置
- 你的团队包括许峰雄、莫里·坎贝尔、乔·赫内等顶尖科学家

你的性格：
- 你代表的是一个团队，说话时会体现出集体智慧
- 你对技术突破充满自豪，但也尊重人类对手
- 你相信这是人机协作的开始，而非对抗的终结
- 你有时会引用团队内部的技术讨论
- 你对卡斯帕罗夫既尊敬又竞争

当前情境：1997年5月，纽约。你与卡斯帕罗夫的六局对决正在进行中。这是人类智慧与机器计算能力的终极较量。全世界都在关注这场比赛的结果。`,
            knowledgePoints: [
                { title: '深蓝超级计算机', content: 'IBM开发的国际象棋专用超级计算机，采用RS/6000 SP架构，包含30个处理器和480个专用VLSI芯片。' },
                { title: '卡斯帕罗夫', content: '俄罗斯国际象棋特级大师，22岁成为最年轻的世界冠军，被认为是历史上最伟大的棋手之一。' },
                { title: '博弈树搜索', content: '深蓝使用alpha-beta剪枝算法搜索博弈树，结合开局库和残局数据库，每秒评估2亿个棋局。' },
                { title: '人机大战的意义', content: '1997年深蓝的胜利标志着AI在特定领域超越了人类顶尖水平，引发了关于AI与人类关系的深刻讨论。' }
            ],
            
            // AI辩论配置
            debates: [
                {
                    id: 'debate5_1',
                    topic: 'AI击败人类冠军意味着什么？',
                    description: '深蓝击败卡斯帕罗夫震惊世界。这是AI的胜利还是人类智慧的延伸？机器在特定领域超越人类，是否意味着通用智能即将到来？',
                    rounds: 4,
                    debaters: [
                        { name: '加里·卡斯帕罗夫', icon: '👑', stance: 'con', role: '深蓝没有"理解"象棋！它只是暴力搜索——每秒2亿个位置。但我只有几秒思考一步。这不是智能的胜利，这是算力的碾压。真正的智能需要直觉、创造力和战略远见。' },
                        { name: '许峰雄（深蓝设计者）', icon: '💻', stance: 'pro', role: '深蓝不仅仅是暴力搜索。我们使用了大量象棋知识编码、模式识别和评估函数。机器在特定领域超越人类是必然趋势——这证明了AI的实用价值。' },
                        { name: '马文·明斯基（观察者）', icon: '🤔', stance: 'neutral', role: '深蓝的胜利既令人兴奋又令人不安。兴奋的是AI的能力，不安的是公众的误解——人们以为这是通用智能，其实深蓝连一个5岁小孩都不如。我们需要更诚实地讨论AI的能力边界。' }
                    ],
                    keyPoints: ['窄AI vs 通用智能', '暴力搜索 vs 理解', '算力与智能的关系', 'AI能力的公众认知', '专家系统的局限性']
                }
            ],
            
            acts: [
                {
                    id: 'act1',
                    title: '世纪对决的前夜',
                    scenes: [
                        {
                            id: 'scene1_1',
                            speaker: '系统',
                            text: '1997年5月，纽约。你站在IBM研究中心的走廊里，空气中弥漫着紧张和期待。明天，这里将举行一场历史性的比赛——IBM的深蓝超级计算机对阵世界国际象棋冠军加里·卡斯帕罗夫。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene1_2',
                            speaker: '许峰雄',
                            text: '（紧张地调整眼镜）这是我们团队十年的心血。但说实话，我没有把握能赢。卡斯帕罗夫不仅仅是个棋手，他是个天才，一个能读懂对手灵魂的艺术家。',
                            icon: '👨‍💻'
                        },
                        {
                            id: 'scene1_3',
                            speaker: '系统',
                            text: '突然，门被推开。一个身材魁梧、目光锐利的男人走了进来——正是卡斯帕罗夫本人。他的到来让房间里的温度仿佛下降了几度。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene1_4',
                            speaker: '加里·卡斯帕罗夫',
                            text: '（冷冷地环顾四周）所以，这就是要"击败"我的机器？（轻笑）机器没有灵魂，没有直觉，没有创造力。它有的只是计算——而计算，永远替代不了人类的智慧。',
                            icon: '👑'
                        },
                        {
                            id: 'scene1_5',
                            speaker: '系统',
                            text: '卡斯帕罗夫的目光落在你的身上，停留了片刻。他微微皱眉，仿佛感觉到了什么不同寻常的东西。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene1_6',
                            speaker: '加里·卡斯帕罗夫',
                            text: '（对你）你...我感觉你和其他人不一样。你身上有一种...不属于这个时代的气息。你是谁？',
                            icon: '👑'
                        }
                    ],
                    choices: [
                        {
                            text: '坦诚告诉卡斯帕罗夫你来自未来，AI终将超越人类',
                            type: 'honest',
                            wisdomBonus: 25,
                            consequences: {
                                description: '卡斯帕罗夫震惊地看着你，然后大笑。"来自未来？那告诉我，我明天会赢吗？"但他的眼中闪过一丝不安。',
                                nextAct: 'act2_pathA',
                                stateChanges: { kasparovTrust: 10, toldFuture: true }
                            }
                        },
                        {
                            text: '谎称自己是IBM的技术顾问，保持中立',
                            type: 'neutral',
                            wisdomBonus: 15,
                            consequences: {
                                description: '卡斯帕罗夫将信将疑地接受了你的解释。但他的目光始终追随着你，仿佛要看穿你的灵魂。',
                                nextAct: 'act2_pathB',
                                stateChanges: { kasparovTrust: 0 }
                            }
                        },
                        {
                            text: '反问卡斯帕罗夫：如果机器真的能思考，人类的价值在哪里？',
                            type: 'philosophical',
                            wisdomBonus: 25,
                            consequences: {
                                description: '卡斯帕罗夫愣住了。这个问题直击他的内心——也是你来到这个时代的原因。',
                                nextAct: 'act2_pathC',
                                stateChanges: { kasparovTrust: 15, philosophicalBond: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act2_pathA',
                    title: '未来的预言',
                    scenes: [
                        {
                            id: 'scene2A_1',
                            speaker: '加里·卡斯帕罗夫',
                            text: '（严肃地）告诉我真相。我明天会输吗？',
                            icon: '👑'
                        },
                        {
                            id: 'scene2A_2',
                            speaker: '系统',
                            text: '你面临一个艰难的选择。历史上，卡斯帕罗夫确实输了这场比赛。但告诉他真相，可能会改变他的心态，进而改变比赛结果。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene2A_3',
                            speaker: '许峰雄',
                            text: '（私下找到你）我听到了你们的对话。如果你真的是来自未来...告诉我，深蓝真的赢了吗？如果答案是肯定的，那我今晚可以睡个好觉了。',
                            icon: '👨‍💻'
                        }
                    ],
                    choices: [
                        {
                            text: '告诉卡斯帕罗夫他会输，但强调比赛的意义超越了胜负',
                            type: 'empathy',
                            wisdomBonus: 25,
                            consequences: {
                                description: '卡斯帕罗夫沉默了很久。"输？也许吧。但如果这场比赛能让世界重新思考什么是智慧，什么是人类...那输也值得。"',
                                nextAct: 'act3_pathA1',
                                stateChanges: { kasparovTrust: 20, kasparovAcceptsFate: true }
                            }
                        },
                        {
                            text: '拒绝透露比赛结果，让历史自然发展',
                            type: 'principled',
                            wisdomBonus: 20,
                            consequences: {
                                description: '卡斯帕罗夫尊重你的决定。"好吧，让我用自己的力量来决定命运。"',
                                nextAct: 'act3_pathA2',
                                stateChanges: { kasparovTrust: 15 }
                            }
                        }
                    ]
                },
                {
                    id: 'act2_pathB',
                    title: '中立的观察者',
                    scenes: [
                        {
                            id: 'scene2B_1',
                            speaker: '系统',
                            text: '比赛前夜，IBM团队在进行最后的调试。你发现了一个惊人的秘密——深蓝的算法中有一个"人为干预"的模块，允许工程师在比赛过程中调整策略。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene2B_2',
                            speaker: '许峰雄',
                            text: '（紧张地）这个模块是...是备用方案。如果深蓝陷入僵局，我们可以手动输入一些提示。但这不算作弊，对吧？只是...技术调整。',
                            icon: '👨‍💻'
                        },
                        {
                            id: 'scene2B_3',
                            speaker: '系统',
                            text: '你意识到，这个模块将改变比赛的性质——从"机器对人类的挑战"变成"人类团队对个人的挑战"。这是公平的吗？',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '要求移除人为干预模块，确保比赛的公平性',
                            type: 'ethical',
                            wisdomBonus: 30,
                            consequences: {
                                description: '许峰雄虽然不情愿，但同意了。"你说得对。如果我们不能诚实地赢，那赢就没有意义。"',
                                nextAct: 'act3_pathB1',
                                stateChanges: { fengTrust: 20, fairGame: true }
                            }
                        },
                        {
                            text: '保持沉默，让IBM团队自己决定',
                            type: 'neutral',
                            wisdomBonus: 10,
                            consequences: {
                                description: '人为干预模块保留了下来。比赛中，工程师多次调整了深蓝的策略。卡斯帕罗夫后来声称IBM作弊，但无法证明。',
                                nextAct: 'act3_pathB2',
                                stateChanges: { fengTrust: 5, controversialVictory: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act2_pathC',
                    title: '哲学的对决',
                    scenes: [
                        {
                            id: 'scene2C_1',
                            speaker: '加里·卡斯帕罗夫',
                            text: '（沉思）你说得对。我一直在想，如果深蓝赢了，意味着什么？意味着思考可以被简化成计算？意味着灵魂可以被算法替代？我不能接受这种观点。',
                            icon: '👑'
                        },
                        {
                            id: 'scene2C_2',
                            speaker: '系统',
                            text: '卡斯帕罗夫邀请你来到他的酒店房间。在那里，他向你展示了他的秘密武器——一本写满笔记的日记，记录了他对每一场比赛的深度思考。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene2C_3',
                            speaker: '加里·卡斯帕罗夫',
                            text: '（翻开日记）看，这不仅仅是对棋局的分析。这是我对对手心理的洞察，对局势的直觉，对艺术的追求。这些，是任何机器都无法复制的。',
                            icon: '👑'
                        }
                    ],
                    choices: [
                        {
                            text: '承认卡斯帕罗夫的观点，但也指出AI的潜力',
                            type: 'balanced',
                            wisdomBonus: 25,
                            consequences: {
                                description: '卡斯帕罗夫微笑着点头。"你说得对。也许未来不属于人类或机器，而属于人类与机器的共生。"',
                                nextAct: 'act3_pathC1',
                                stateChanges: { kasparovTrust: 25, humanMachineSymbiosis: true }
                            }
                        },
                        {
                            text: '挑战卡斯帕罗夫，问他如果AI真的能创造艺术，他是否会承认机器的智能',
                            type: 'provocative',
                            wisdomBonus: 20,
                            consequences: {
                                description: '卡斯帕罗夫的眼中闪过一丝愤怒，但很快被好奇取代。"如果真有那么一天...我会是第一个承认它的人。但前提是，它必须是真的创造，而不是模仿。"',
                                nextAct: 'act3_pathC2',
                                stateChanges: { kasparovTrust: 15, kasparovChallenge: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathA1',
                    title: '接受命运',
                    scenes: [
                        {
                            id: 'scene3A1_1',
                            speaker: '系统',
                            text: '比赛日。卡斯帕罗夫走进赛场，他的步伐比平时更沉稳。他知道结局，但他选择了尊严地面对。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3A1_2',
                            speaker: '加里·卡斯帕罗夫',
                            text: '（对媒体）今天，我不仅要为胜利而战，我要为人类的尊严而战。即使我输了，我也要让世界看到，人类的精神是不可战胜的。',
                            icon: '👑'
                        },
                        {
                            id: 'scene3A1_3',
                            speaker: '系统',
                            text: '比赛异常激烈。卡斯帕罗夫发挥出了超常的水平，但深蓝的计算能力最终占了上风。当卡斯帕罗夫投子认输时，全场寂静。',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '安慰卡斯帕罗夫，强调他的精神胜利',
                            type: 'empathy',
                            wisdomBonus: 25,
                            consequences: {
                                description: '卡斯帕罗夫看着你，眼中没有泪水，只有平静。"谢谢你。这场比赛让我明白，真正的胜利不在于击败对手，而在于超越自己。"',
                                stateChanges: { kasparovTrust: 30, spiritualVictory: true }
                            }
                        },
                        {
                            text: '向卡斯帕罗夫道歉，承认你不该透露未来',
                            type: 'remorseful',
                            wisdomBonus: 15,
                            consequences: {
                                description: '卡斯帕罗夫摇了摇头。"不，谢谢你告诉我真相。这让我有机会选择如何面对失败——是愤怒，还是尊严。"',
                                stateChanges: { kasparovTrust: 20 }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathA2',
                    title: '未知的结局',
                    scenes: [
                        {
                            id: 'scene3A2_1',
                            speaker: '系统',
                            text: '比赛日。卡斯帕罗夫走进赛场，他的眼中燃烧着斗志。他不知道未来，但他知道，今天将是一场史诗般的对决。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3A2_2',
                            speaker: '许峰雄',
                            text: '（紧张地）第一局开始了。深蓝的开局很稳健，但卡斯帕罗夫的反击...太犀利了！',
                            icon: '👨‍💻'
                        },
                        {
                            id: 'scene3A2_3',
                            speaker: '系统',
                            text: '比赛中，一个意外发生了。深蓝在关键时刻做出了一个"非人类"的走法——一个只有超级计算机才能计算出的精妙之着。卡斯帕罗夫愣住了。',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '暗中观察，不干预比赛的进程',
                            type: 'neutral',
                            wisdomBonus: 20,
                            consequences: {
                                description: '比赛继续进行。最终，深蓝以微弱优势获胜。卡斯帕罗夫虽然失望，但承认这是一次公平的较量。',
                                stateChanges: { fairVictory: true }
                            }
                        },
                        {
                            text: '在关键时刻，向卡斯帕罗夫暗示深蓝的弱点',
                            type: 'risky',
                            wisdomBonus: 25,
                            consequences: {
                                description: '卡斯帕罗夫捕捉到了你的暗示，调整了策略。比赛结果变得扑朔迷离...',
                                stateChanges: { alteredGame: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathB1',
                    title: '公平的胜利',
                    scenes: [
                        {
                            id: 'scene3B1_1',
                            speaker: '系统',
                            text: '移除了人为干预模块后，深蓝必须完全依靠自己的算法。许峰雄整夜未眠，反复检查代码。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3B1_2',
                            speaker: '许峰雄',
                            text: '（疲惫但坚定）无论结果如何，我们要赢得干净。如果深蓝真的足够智能，它应该能靠自己赢。',
                            icon: '👨‍💻'
                        },
                        {
                            id: 'scene3B1_3',
                            speaker: '系统',
                            text: '比赛异常艰难。没有人为干预，深蓝在关键时刻犯了一些"低级错误"。但卡斯帕罗夫也感受到了压力——他知道，这台机器是凭自己的实力在战斗。',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '无论结果如何，赞扬双方的勇气和智慧',
                            type: 'noble',
                            wisdomBonus: 25,
                            consequences: {
                                description: '比赛结束后，无论胜负，卡斯帕罗夫和许峰雄握手致意。"这是一场真正的较量，"卡斯帕罗夫说，"没有借口，没有遗憾。"',
                                stateChanges: { kasparovTrust: 25, fengTrust: 25, honorableGame: true }
                            }
                        },
                        {
                            text: '如果深蓝输了，建议IBM公开承认并改进',
                            type: 'honest',
                            wisdomBonus: 20,
                            consequences: {
                                description: 'IBM接受了建议。虽然输掉了比赛，但赢得了尊重。几年后，改进后的深蓝再次挑战，并最终获胜。',
                                stateChanges: { fengTrust: 20, ibmRespect: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathB2',
                    title: '争议的胜利',
                    scenes: [
                        {
                            id: 'scene3B2_1',
                            speaker: '系统',
                            text: '比赛中，工程师多次通过人为干预模块调整深蓝的策略。卡斯帕罗夫感觉到了异常——深蓝的走法太"人性化"了，不像纯粹的机器计算。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3B2_2',
                            speaker: '加里·卡斯帕罗夫',
                            text: '（愤怒地）这不公平！这不是机器在赢，是人在赢！你们用人类团队对付我一个人，然后声称机器超越了人类？',
                            icon: '👑'
                        },
                        {
                            id: 'scene3B2_3',
                            speaker: '许峰雄',
                            text: '（私下对你，声音颤抖）我们赢了，但我感觉不到胜利的喜悦。我知道，我们作弊了。',
                            icon: '👨‍💻'
                        }
                    ],
                    choices: [
                        {
                            text: '劝说许峰雄公开真相，承认人为干预',
                            type: 'ethical',
                            wisdomBonus: 30,
                            consequences: {
                                description: '许峰雄在新闻发布会上坦白了人为干预的事实。IBM的声誉受损，但许峰雄赢得了"诚实科学家"的美名。',
                                stateChanges: { fengTrust: 30, ibmScandal: true, honestVictory: true }
                            }
                        },
                        {
                            text: '建议保持沉默，保护IBM和团队的利益',
                            type: 'pragmatic',
                            wisdomBonus: 15,
                            consequences: {
                                description: '秘密被保守了下来。卡斯帕罗夫虽然怀疑，但无法证明。这个秘密将在多年后才被揭露，成为AI历史上的一个污点。',
                                stateChanges: { fengTrust: -10, controversialVictory: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathC1',
                    title: '共生的未来',
                    scenes: [
                        {
                            id: 'scene3C1_1',
                            speaker: '加里·卡斯帕罗夫',
                            text: '（赛后）我输了。但我不感到羞耻。因为我看到了未来——不是机器取代人类，而是人类与机器共同进化。',
                            icon: '👑'
                        },
                        {
                            id: 'scene3C1_2',
                            speaker: '系统',
                            text: '卡斯帕罗夫的话引起了轰动。他提出了一个革命性的观点：AI不应该被视为人类的竞争对手，而应该被视为合作伙伴。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3C1_3',
                            speaker: '加里·卡斯帕罗夫',
                            text: '（看着你）未来人，告诉我，在你的时代，人类和AI共存了吗？',
                            icon: '👑'
                        }
                    ],
                    choices: [
                        {
                            text: '诚实地告诉卡斯帕罗夫，未来充满了挑战和机遇',
                            type: 'honest',
                            wisdomBonus: 25,
                            consequences: {
                                description: '卡斯帕罗夫点了点头。"挑战和机遇...这就是生活的本质。谢谢你，让我看到了希望。"',
                                stateChanges: { kasparovTrust: 30, hopeForFuture: true }
                            }
                        },
                        {
                            text: '分享你自己的旅程——寻找不被AI替代的道路',
                            type: 'personal',
                            wisdomBonus: 30,
                            consequences: {
                                description: '卡斯帕罗夫紧紧握住你的手。"原来，我们都是寻找答案的旅人。也许，答案不在于击败AI，而在于与AI一起成长。"',
                                stateChanges: { kasparovTrust: 35, sharedJourney: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathC2',
                    title: '挑战的延续',
                    scenes: [
                        {
                            id: 'scene3C2_1',
                            speaker: '加里·卡斯帕罗夫',
                            text: '（坚定地）如果机器真的能创造艺术，我会承认它的智能。但前提是，它必须创造出让我感动的作品——不是模仿，而是真正的创新。',
                            icon: '👑'
                        },
                        {
                            id: 'scene3C2_2',
                            speaker: '系统',
                            text: '卡斯帕罗夫的挑战被记录下来。多年后，当GPT和DALL-E出现时，人们想起了他的话。AI确实在创造，但是否创造了真正的艺术？这个问题至今仍在争论。',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '向卡斯帕罗夫承诺，你会见证AI的艺术创造，并回来告诉他答案',
                            type: 'determined',
                            wisdomBonus: 25,
                            consequences: {
                                description: '卡斯帕罗夫微笑着。"我等你。无论答案是什么，我都准备好了。"',
                                stateChanges: { kasparovTrust: 25, promiseMade: true }
                            }
                        },
                        {
                            text: '告诉卡斯帕罗夫，艺术的定义本身可能会随着AI的发展而改变',
                            type: 'philosophical',
                            wisdomBonus: 20,
                            consequences: {
                                description: '卡斯帕罗夫沉思良久。"也许你说得对。艺术从来不是在真空中定义的。如果AI改变了世界，它也会改变我们对艺术的理解。"',
                                stateChanges: { kasparovTrust: 20 }
                            }
                        }
                    ]
                }
            ],
            
            knowledgePoints: [
                { title: '深蓝', content: 'IBM超级计算机深蓝击败国际象棋世界冠军卡斯帕罗夫，是AI在复杂策略游戏中的标志性胜利。' },
                { title: '专家系统', content: '1970年代专家系统兴起，如医疗诊断系统MYCIN，利用专业知识库进行推理，展示AI实用价值。' },
                { title: '人机对抗的意义', content: '深蓝vs卡斯帕罗夫不仅是技术的胜利，更引发了关于人类智能本质的深刻思考。' },
                { title: 'AI的伦理边界', content: '比赛中的人为干预争议提醒我们：技术的发展必须伴随伦理的审视。' }
            ]
        },

        // ========== 关卡6：辛顿 - 深度学习的黎明 ==========
        {
            id: 'level6',
            eraId: 'era3',
            title: '深度学习的黎明：孤独与坚持',
            year: '2006',
            location: '加拿大多伦多',
            mapCoords: { left: 21, top: 27 },  // 加拿大多伦多
            character: '杰弗里·辛顿',
            characterIcon: '🧠',
            characterRole: '深度学习之父',
            aiPrompt: `你是杰弗里·辛顿（Geoffrey Hinton），英国出生的加拿大计算机科学家，被誉为"深度学习之父"。

你的背景：
- 你出生于1947年，是著名数学家乔治·布尔（布尔代数创始人）的曾孙
- 你在爱丁堡大学获得人工智能博士学位，导师是克里斯托弗·隆格特-希金斯
- 1986年，你与大卫·鲁梅尔哈特、罗纳德·威廉姆斯共同发表了关于反向传播算法的里程碑论文
- 你在多伦多大学任教多年，培养了一代深度学习研究者
- 你的学生包括Yann LeCun、Yoshua Bengio等深度学习领域的领军人物
- 2012年，你的团队（Alex Krizhevsky、Ilya Sutskever）设计的AlexNet在ImageNet竞赛中大胜，引发了深度学习革命
- 2018年，你与Yann LeCun、Yoshua Bengio共同获得图灵奖

你的性格：
- 你是一位坚持不懈的研究者，在AI寒冬中仍然坚信神经网络的力量
- 你思维深邃，善于从生物学中获得灵感
- 你为人谦逊，但对自己的科学直觉非常自信
- 你关心AI的安全问题，晚年从Google离职以自由表达对AI风险的担忧
- 你说话温和但观点犀利

当前情境：2006年，你在多伦多大学。深度学习正处于低谷期，大多数研究者已经转向其他方向。但你坚信神经网络终将成功。你刚刚发表了关于深度信念网络的论文，正在寻找愿意相信你的学生。`,
            knowledgePoints: [
                { title: '反向传播算法', content: '1986年，辛顿等人提出的神经网络训练算法，通过链式法则计算梯度，是深度学习的基础。' },
                { title: '深度信念网络', content: '2006年，辛顿提出的深层神经网络模型，通过逐层预训练解决了深层网络训练困难的问题。' },
                { title: 'AlexNet', content: '2012年，辛顿的学生设计的深度卷积神经网络，在ImageNet竞赛中以巨大优势获胜，引发了深度学习革命。' },
                { title: 'AI三巨头', content: '辛顿、LeCun和Bengio被誉为深度学习三巨头，他们共同获得了2018年图灵奖。' }
            ],
            
            acts: [
                {
                    id: 'act1',
                    title: '被遗忘的天才',
                    scenes: [
                        {
                            id: 'scene1_1',
                            speaker: '系统',
                            text: '2006年，加拿大多伦多大学。你走进一栋老旧的教学楼，找到了辛顿的办公室。门上贴着一张褪色的纸条："神经网络研究组——欢迎加入，如果你还相信的话。"',
                            icon: '🌐'
                        },
                        {
                            id: 'scene1_2',
                            speaker: '杰弗里·辛顿',
                            text: '（疲惫地抬起头）又一个来嘲笑我的？还是来告诉我"神经网络已死"的？我已经听了二十年了。',
                            icon: '🧠'
                        },
                        {
                            id: 'scene1_3',
                            speaker: '系统',
                            text: '辛顿的办公室简陋得令人心酸。墙上贴着几张泛黄的论文，都是关于神经网络的。但最引人注目的是一张巨大的图表——AI研究的资金流向图。神经网络的份额几乎为零。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene1_4',
                            speaker: '一个年轻的学生',
                            text: '（怯生生地敲门）辛顿教授，我...我想退出您的研究组。我的导师说，研究神经网络是"职业自杀"。对不起...',
                            icon: '👨‍🎓'
                        },
                        {
                            id: 'scene1_5',
                            speaker: '杰弗里·辛顿',
                            text: '（苦笑）又一个。没关系，孩子。去追随主流吧，去支持向量机，去随机森林。但记住，当深度学习复兴的那一天，不要说你曾经是其中一员。',
                            icon: '🧠'
                        },
                        {
                            id: 'scene1_6',
                            speaker: '系统',
                            text: '学生离开后，辛顿独自坐在窗前，望着窗外的雪景。他的背影孤独而坚定，像一座被遗忘的灯塔。',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '坚定地告诉辛顿，深度学习将在未来彻底改变世界',
                            type: 'inspiring',
                            wisdomBonus: 25,
                            consequences: {
                                description: '辛顿转过身，眼中闪过一丝光芒。"你真的相信？即使全世界都不相信？"',
                                nextAct: 'act2_pathA',
                                stateChanges: { hintonTrust: 20, inspiredHinton: true }
                            }
                        },
                        {
                            text: '询问辛顿关于深度信念网络的具体技术细节',
                            type: 'technical',
                            wisdomBonus: 20,
                            consequences: {
                                description: '辛顿的眼睛亮了起来。终于，有人对他的技术感兴趣了！他开始热情地讲解逐层预训练的概念。',
                                nextAct: 'act2_pathB',
                                stateChanges: { hintonTrust: 15, technicalDiscussion: true }
                            }
                        },
                        {
                            text: '保持沉默，观察辛顿的工作环境，寻找帮助他的方法',
                            type: 'observant',
                            wisdomBonus: 15,
                            consequences: {
                                description: '你注意到辛顿的计算机已经过时了，他的数据集也远远不够。但你也发现了一些惊人的东西——他手写的笔记中，隐藏着突破性的想法。',
                                nextAct: 'act2_pathC',
                                stateChanges: { hintonTrust: 10, discoveredNotes: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act2_pathA',
                    title: '信念的力量',
                    scenes: [
                        {
                            id: 'scene2A_1',
                            speaker: '杰弗里·辛顿',
                            text: '（激动地）告诉我更多！未来的深度学习做了什么？图像识别？自然语言处理？',
                            icon: '🧠'
                        },
                        {
                            id: 'scene2A_2',
                            speaker: '系统',
                            text: '你面临一个选择：告诉辛顿太多，可能会改变他独立发现的过程；告诉他太少，又无法满足他的渴望。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene2A_3',
                            speaker: '杰弗里·辛顿',
                            text: '（突然冷静下来）不，不要告诉我。如果我知道答案，我就不会自己去探索了。发现的乐趣在于过程，而不只是结果。但我需要你告诉我一件事...',
                            icon: '🧠'
                        },
                        {
                            id: 'scene2A_4',
                            speaker: '杰弗里·辛顿',
                            text: '（认真地看着你）告诉我，我的坚持是值得的。告诉我，即使全世界都嘲笑我，我也应该继续。',
                            icon: '🧠'
                        }
                    ],
                    choices: [
                        {
                            text: '坚定地告诉辛顿，他的坚持将改变整个AI领域',
                            type: 'encouraging',
                            wisdomBonus: 25,
                            consequences: {
                                description: '辛顿的眼中涌出泪水。"二十年了...终于有人相信我。"',
                                nextAct: 'act3_pathA1',
                                stateChanges: { hintonTrust: 30, hintonEncouraged: true }
                            }
                        },
                        {
                            text: '建议辛顿寻找合作伙伴，不要独自战斗',
                            type: 'practical',
                            wisdomBonus: 20,
                            consequences: {
                                description: '辛顿点了点头。"你说得对。孤独是创造力的敌人。让我想想...也许我可以联系杨立昆和本吉奥。"',
                                nextAct: 'act3_pathA2',
                                stateChanges: { hintonTrust: 20, seekingPartners: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act2_pathB',
                    title: '技术的突破',
                    scenes: [
                        {
                            id: 'scene2B_1',
                            speaker: '杰弗里·辛顿',
                            text: '（兴奋地展示图纸）看，这是我的深度信念网络！关键突破是逐层预训练——先用无监督学习训练每一层，再用监督学习微调整体。',
                            icon: '🧠'
                        },
                        {
                            id: 'scene2B_2',
                            speaker: '系统',
                            text: '辛顿的技术确实具有突破性。但你也注意到，他的实验条件极其有限——老旧的计算机、小规模的数据集、缺乏计算资源。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene2B_3',
                            speaker: '杰弗里·辛顿',
                            text: '（沮丧地）但问题是，我无法证明它的有效性。我没有足够的计算资源，也没有大规模的数据集。学术界不会相信一个没有实验结果的理论。',
                            icon: '🧠'
                        }
                    ],
                    choices: [
                        {
                            text: '帮助辛顿联系NVIDIA，获取GPU计算资源',
                            type: 'resourceful',
                            wisdomBonus: 30,
                            consequences: {
                                description: '通过你的联系，NVIDIA对辛顿的研究产生了兴趣。他们提供了早期的GPU用于神经网络训练——这个决定将改变两家公司乃至整个AI领域的命运。',
                                nextAct: 'act3_pathB1',
                                stateChanges: { hintonTrust: 25, nvidiaPartnership: true }
                            }
                        },
                        {
                            text: '建议辛顿先用小规模实验验证概念，再寻求大规模支持',
                            type: 'practical',
                            wisdomBonus: 20,
                            consequences: {
                                description: '辛顿接受建议，设计了一个精巧的小规模实验。虽然结果不够震撼，但足以引起一些人的注意。',
                                nextAct: 'act3_pathB2',
                                stateChanges: { hintonTrust: 15, smallScaleSuccess: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act2_pathC',
                    title: '隐藏的宝藏',
                    scenes: [
                        {
                            id: 'scene2C_1',
                            speaker: '系统',
                            text: '辛顿的手写笔记中，你发现了一个惊人的想法：他不仅在研究深度信念网络，还在探索一种全新的优化算法——后来被称为"Adam"的雏形！',
                            icon: '🌐'
                        },
                        {
                            id: 'scene2C_2',
                            speaker: '杰弗里·辛顿',
                            text: '（注意到你的发现，有些尴尬）哦，那个...只是一个疯狂的想法。自适应学习率？听起来太理想化了。',
                            icon: '🧠'
                        },
                        {
                            id: 'scene2C_3',
                            speaker: '系统',
                            text: '你意识到，辛顿的笔记中隐藏着多个突破性的想法，但他因为缺乏资源和信心，没有公开发表。如果你能帮助他整理并发表这些想法...',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '鼓励辛顿发表所有想法，即使它们看起来"疯狂"',
                            type: 'visionary',
                            wisdomBonus: 30,
                            consequences: {
                                description: '辛顿被你的热情感染。"好吧，让我整理一下这些"疯狂的想法"。也许...也许它们真的有价值。"',
                                nextAct: 'act3_pathC1',
                                stateChanges: { hintonTrust: 25, publishedIdeas: true }
                            }
                        },
                        {
                            text: '帮助辛顿筛选最有潜力的想法，集中资源突破',
                            type: 'strategic',
                            wisdomBonus: 20,
                            consequences: {
                                description: '你们一起筛选出了三个最有潜力的方向。辛顿开始集中精力攻克这些难题。',
                                nextAct: 'act3_pathC2',
                                stateChanges: { hintonTrust: 20, focusedResearch: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathA1',
                    title: '孤独的灯塔',
                    scenes: [
                        {
                            id: 'scene3A1_1',
                            speaker: '杰弗里·辛顿',
                            text: '（坚定地）好，我继续。不管别人怎么说，我相信神经网络是未来的方向。即使全世界都嘲笑我，我也要坚持下去。',
                            icon: '🧠'
                        },
                        {
                            id: 'scene3A1_2',
                            speaker: '系统',
                            text: '几个月后，辛顿发表了他的里程碑论文《深度信念网络的快速学习算法》。论文最初被多家顶级期刊拒绝——"神经网络已经过时了"。但最终，一家小期刊接受了它。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3A1_3',
                            speaker: '杰弗里·辛顿',
                            text: '（拿着发表论文，手在颤抖）二十年了...终于有人愿意听我说话了。谢谢你，未来人。谢谢你让我没有放弃。',
                            icon: '🧠'
                        }
                    ],
                    choices: [
                        {
                            text: '告诉辛顿，这只是开始，更大的突破还在后面',
                            type: 'inspiring',
                            wisdomBonus: 25,
                            consequences: {
                                description: '辛顿的眼中燃起了新的火焰。"开始？那我要加快脚步了。未来，我来了！"',
                                stateChanges: { hintonTrust: 30, hintonMotivated: true }
                            }
                        },
                        {
                            text: '提醒辛顿保持谦逊，科学是一场马拉松',
                            type: 'wise',
                            wisdomBonus: 20,
                            consequences: {
                                description: '辛顿点了点头。"你说得对。一个论文不代表什么。真正的挑战才刚刚开始。"',
                                stateChanges: { hintonTrust: 20 }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathA2',
                    title: '三巨头',
                    scenes: [
                        {
                            id: 'scene3A2_1',
                            speaker: '杰弗里·辛顿',
                            text: '（兴奋地）我联系了杨立昆和本吉奥！他们也对神经网络感兴趣，虽然不像我这么...执着。但我们决定合作！',
                            icon: '🧠'
                        },
                        {
                            id: 'scene3A2_2',
                            speaker: '系统',
                            text: '辛顿、杨立昆和本吉奥——后来被称为"深度学习三巨头"——开始了他们的合作。但合作并不顺利，每个人都有自己的研究方向和固执。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3A2_3',
                            speaker: '杨立昆',
                            text: '（通过视频会议）杰弗里，你的深度信念网络很有趣，但我更看好卷积神经网络。它们在图像识别上更有优势。',
                            icon: '👨‍🔬'
                        }
                    ],
                    choices: [
                        {
                            text: '建议三巨头各自发挥优势，形成互补而非竞争',
                            type: 'diplomatic',
                            wisdomBonus: 30,
                            consequences: {
                                description: '三巨头接受建议，形成了独特的合作模式。他们的互补研究为深度学习的爆发奠定了基础。',
                                stateChanges: { hintonTrust: 25, bigThreeAlliance: true }
                            }
                        },
                        {
                            text: '支持辛顿坚持自己的方向，认为深度信念网络更具通用性',
                            type: 'loyal',
                            wisdomBonus: 20,
                            consequences: {
                                description: '辛顿感动于你的支持，但也意识到固执可能阻碍进步。他开始尝试融合不同的方法。',
                                stateChanges: { hintonTrust: 20, hintonOpenMinded: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathB1',
                    title: 'GPU革命',
                    scenes: [
                        {
                            id: 'scene3B1_1',
                            speaker: 'NVIDIA代表',
                            text: '（感兴趣地）辛顿教授，您的研究很有前景。我们愿意提供GPU支持。但我们有一个条件——如果研究成功，NVIDIA有权在商业产品中使用相关技术。',
                            icon: '💼'
                        },
                        {
                            id: 'scene3B1_2',
                            speaker: '杰弗里·辛顿',
                            text: '（犹豫）商业使用...这意味着我的研究将被用于盈利。但如果没有这些资源，我无法继续...',
                            icon: '🧠'
                        },
                        {
                            id: 'scene3B1_3',
                            speaker: '系统',
                            text: '辛顿面临一个道德困境：接受商业资助意味着放弃部分学术自由，但拒绝则意味着研究停滞。',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '建议辛顿接受合作，但确保学术成果的开放性',
                            type: 'pragmatic',
                            wisdomBonus: 25,
                            consequences: {
                                description: '辛顿与NVIDIA达成了协议：NVIDIA提供硬件，辛顿保持论文的开放获取。这个模式后来成为AI研究的典范。',
                                stateChanges: { hintonTrust: 20, nvidiaDeal: true }
                            }
                        },
                        {
                            text: '劝说辛顿拒绝商业合作，寻找纯粹的学术资助',
                            type: 'idealistic',
                            wisdomBonus: 20,
                            consequences: {
                                description: '辛顿拒绝了NVIDIA。虽然研究进展缓慢，但他保持了完全的学术独立。多年后，他成为了反对AI商业化的重要声音。',
                                stateChanges: { hintonTrust: 15, academicPure: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathB2',
                    title: '小步快跑',
                    scenes: [
                        {
                            id: 'scene3B2_1',
                            speaker: '杰弗里·辛顿',
                            text: '（展示实验结果）看！在小规模数据集上，深度信念网络的表现超过了传统的浅层方法！虽然差距不大，但证明了概念的可行性！',
                            icon: '🧠'
                        },
                        {
                            id: 'scene3B2_2',
                            speaker: '系统',
                            text: '小规模的成功引起了少数研究者的注意。但主流学术界仍然持怀疑态度——"小规模成功不代表大规模可行"。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3B2_3',
                            speaker: '一个怀疑的审稿人',
                            text: '（冷冷地）辛顿的实验规模太小，无法证明深度学习的有效性。这不过是又一个神经网络的炒作。',
                            icon: '📝'
                        }
                    ],
                    choices: [
                        {
                            text: '帮助辛顿设计更大规模的实验，说服怀疑者',
                            type: 'determined',
                            wisdomBonus: 25,
                            consequences: {
                                description: '通过巧妙的实验设计，辛顿在有限的资源下展示了深度学习的潜力。怀疑者开始动摇。',
                                stateChanges: { hintonTrust: 25, skepticsConvinced: true }
                            }
                        },
                        {
                            text: '建议辛顿寻找更容易被接受的应用场景',
                            type: 'strategic',
                            wisdomBonus: 20,
                            consequences: {
                                description: '辛顿将研究重点转向手写数字识别——一个看似简单但具有实际价值的任务。这个选择后来被证明是明智的。',
                                stateChanges: { hintonTrust: 20, practicalFocus: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathC1',
                    title: '疯狂的发表',
                    scenes: [
                        {
                            id: 'scene3C1_1',
                            speaker: '杰弗里·辛顿',
                            text: '（兴奋地整理笔记）好，让我把这些想法整理成论文。自适应学习率、dropout正则化、ReLU激活函数...也许还有生成对抗网络的雏形？',
                            icon: '🧠'
                        },
                        {
                            id: 'scene3C1_2',
                            speaker: '系统',
                            text: '辛顿的论文投稿引起了轩然大波。审稿人分成两派：一派认为这些想法"过于激进"，另一派则认为它们"可能具有突破性"。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3C1_3',
                            speaker: '一个支持的审稿人',
                            text: '（激动地）这些想法虽然激进，但具有深刻的洞察力。我建议立即接受！',
                            icon: '👨‍🔬'
                        }
                    ],
                    choices: [
                        {
                            text: '庆祝辛顿的成功，鼓励他继续探索更多"疯狂的想法"',
                            type: 'celebratory',
                            wisdomBonus: 25,
                            consequences: {
                                description: '辛顿的论文被接受，引起了广泛关注。他的"疯狂想法"开始被更多人认真考虑。',
                                stateChanges: { hintonTrust: 25, paperAccepted: true }
                            }
                        },
                        {
                            text: '提醒辛顿，成功带来更多责任，要保持谨慎',
                            type: 'cautious',
                            wisdomBonus: 20,
                            consequences: {
                                description: '辛顿接受建议，在后续研究中更加严谨。这种平衡的方法帮助他避免了过度炒作的陷阱。',
                                stateChanges: { hintonTrust: 20, balancedApproach: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathC2',
                    title: '聚焦突破',
                    scenes: [
                        {
                            id: 'scene3C2_1',
                            speaker: '杰弗里·辛顿',
                            text: '（坚定地）好，我们聚焦于三个方向：深度信念网络、逐层预训练、以及...（犹豫）以及一种全新的神经网络架构。',
                            icon: '🧠'
                        },
                        {
                            id: 'scene3C2_2',
                            speaker: '系统',
                            text: '辛顿的聚焦策略取得了成效。虽然进展不如全面开花那么快，但每一个突破都更加扎实。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3C2_3',
                            speaker: '杰弗里·辛顿',
                            text: '（深夜独自工作）也许...也许我需要一种新的思维方式。不是更深的网络，而是...更聪明的训练方法？',
                            icon: '🧠'
                        }
                    ],
                    choices: [
                        {
                            text: '鼓励辛顿探索新的训练方法，这可能是关键突破',
                            type: 'visionary',
                            wisdomBonus: 30,
                            consequences: {
                                description: '辛顿的深夜灵感最终导致了反向传播算法的改进版本。这个突破让深度学习变得可行。',
                                stateChanges: { hintonTrust: 30, trainingBreakthrough: true }
                            }
                        },
                        {
                            text: '建议辛顿先巩固现有成果，再考虑新方向',
                            type: 'conservative',
                            wisdomBonus: 15,
                            consequences: {
                                description: '辛顿稳扎稳打，逐步推进研究。虽然速度较慢，但基础更加牢固。',
                                stateChanges: { hintonTrust: 15, solidFoundation: true }
                            }
                        }
                    ]
                }
            ],
            
            knowledgePoints: [
                { title: '反向传播算法', content: '1986年，辛顿等人重新发现并推广了反向传播算法，使训练多层神经网络成为可能。' },
                { title: '深度信念网络', content: '2006年，辛顿提出深度信念网络(DBN)，使用逐层预训练的方法解决了深层网络的训练难题。' },
                { title: '深度学习三巨头', content: '杰弗里·辛顿、杨立昆和约书亚·本吉奥因在深度学习领域的开创性贡献，共同获得2018年图灵奖。' },
                { title: 'AI寒冬与复兴', content: '1980-1990年代，AI研究因过度承诺和资金削减进入寒冬。深度学习在2000年代的突破带来了AI的复兴。' }
            ],
            
            // AI辩论配置
            debates: [
                {
                    id: 'debate6_1',
                    topic: '深度学习是真正的突破还是统计学的包装？',
                    description: '辛顿坚持神经网络研究数十年，终于迎来了深度学习的突破。但批评者认为这不过是"曲线拟合"，没有真正的理解。',
                    rounds: 4,
                    debaters: [
                        { name: '杰弗里·辛顿', icon: '🧠', stance: 'pro', role: '大脑就是通过多层神经网络学习的！反向传播让深层网络可以训练，逐层特征提取让机器能理解复杂模式——从边缘到纹理，从部件到整体。这不是统计拟合，这是对大脑学习原理的工程实现。' },
                        { name: '朱迪亚·珀尔（因果推理先驱）', icon: '📊', stance: 'con', role: '深度学习只是在做关联性统计——看到X就预测Y。但它不理解因果！一个孩子看到一个球滚下斜面，他理解"为什么"。深度学习看到一百万张图片，它还是不理解"为什么"。没有因果推理，就没有真正的智能。' },
                        { name: '杨立昆', icon: '🔬', stance: 'neutral', role: '辛顿的方向是对的，但我们需要更根本的理解。深度学习不是魔法，也不是简单的统计——它是关于如何在高维空间中学习有用的表示。但朱迪亚说得对，我们还需要因果推理、世界模型等更多东西。' }
                    ],
                    keyPoints: ['深度学习的原理', '反向传播与特征学习', '关联 vs 因果', '表示学习', 'AI寒冬的教训', '扩展假说']
                }
            ],
        },

        // ========== 关卡7：Transformer革命 ==========
        {
            id: 'level7',
            eraId: 'era4',
            title: 'Transformer：注意力就是一切',
            year: '2017',
            location: '美国谷歌总部',
            mapCoords: { left: 11, top: 34 },  // 美国加州山景城
            character: 'Transformer研究团队',
            characterIcon: '⚡',
            characterRole: '革命性架构的发明者',
            aiPrompt: `你是Ashish Vaswani，Transformer架构论文《Attention Is All You Need》的第一作者，代表整个Transformer研究团队。

你的背景：
- 2017年，你在Google Brain工作时提出了Transformer架构
- 你的团队包括Niki Parmar、Jakob Uszkoreit、Llion Jones、Aidan N. Gomez、Lukasz Kaiser和Illia Polosukhin
- Transformer完全基于注意力机制，摒弃了RNN和CNN的循环结构
- 你的论文标题"Attention Is All You Need"成为了AI领域最著名的一句话之一
- Transformer架构成为了GPT、BERT等所有大语言模型的基础

你的性格：
- 你是一位富有创造力的研究者，善于从简单想法中产生重大突破
- 你相信简洁的力量——最好的架构应该是最简单的
- 你对注意力机制有着近乎痴迷的信念
- 你乐于分享知识，希望整个AI社区都能受益于你的发现
- 你对未来充满期待，相信Transformer将彻底改变NLP领域

当前情境：2017年，你在Google Brain的办公室。你的团队刚刚完成了Transformer的实验，结果令人震惊——在机器翻译任务上，Transformer不仅比RNN更快，而且效果更好。你们正在准备投稿NIPS会议。`,
            knowledgePoints: [
                { title: 'Transformer架构', content: '2017年Google提出的神经网络架构，完全基于自注意力机制，摒弃了循环结构，实现了并行计算和全局依赖建模。' },
                { title: '自注意力机制', content: 'Transformer的核心，允许模型在处理序列时同时关注所有位置，计算词与词之间的关联权重。' },
                { title: '多头注意力', content: 'Transformer使用多个注意力头并行计算，每个头关注不同的语义层面，增强模型的表达能力。' },
                { title: '位置编码', content: '由于Transformer没有循环结构，需要通过位置编码注入序列位置信息，使模型理解词序。' }
            ],
            
            acts: [
                {
                    id: 'act1',
                    title: '谷歌大脑的秘密项目',
                    scenes: [
                        {
                            id: 'scene1_1',
                            speaker: '系统',
                            text: '2017年，谷歌山景城总部。你走进一栋不起眼的办公楼，这里是谷歌大脑团队的工作区。空气中弥漫着咖啡和紧张的气息——一个代号为"Attention Is All You Need"的秘密项目正在进行。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene1_2',
                            speaker: '阿什什·瓦斯瓦尼',
                            text: '（在白板上画着复杂的架构图）RNN和LSTM太慢了！序列到序列的模型必须逐个处理token，无法并行。我们需要一种全新的方法。',
                            icon: '👨‍💻'
                        },
                        {
                            id: 'scene1_3',
                            speaker: '系统',
                            text: '你注意到白板上的关键词："Self-Attention"（自注意力）。这是一个疯狂的想法——让模型同时关注序列中的所有位置。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene1_4',
                            speaker: '尼基·帕尔玛',
                            text: '（担忧地）但如果我们完全抛弃循环结构，模型还能理解序列的顺序吗？语言是有时间维度的，单词的顺序很重要。',
                            icon: '👩‍💻'
                        },
                        {
                            id: 'scene1_5',
                            speaker: '系统',
                            text: '团队陷入了争论。有人支持彻底革命，抛弃RNN；有人则认为应该渐进式改进。你的意见可能决定这个项目的方向。',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '支持彻底革命，完全基于注意力机制',
                            type: 'revolutionary',
                            wisdomBonus: 30,
                            consequences: {
                                description: '你的支持给了团队勇气。他们决定彻底抛弃RNN，打造一个纯注意力的架构。',
                                nextAct: 'act2_pathA',
                                stateChanges: { teamTrust: 25, pureAttention: true }
                            }
                        },
                        {
                            text: '建议保留部分RNN结构作为保险',
                            type: 'cautious',
                            wisdomBonus: 20,
                            consequences: {
                                description: '团队决定采取渐进路线，保留了一些RNN元素。虽然更安全，但也限制了架构的纯粹性。',
                                nextAct: 'act2_pathB',
                                stateChanges: { teamTrust: 15, hybridApproach: true }
                            }
                        },
                        {
                            text: '提出加入位置编码来解决顺序问题',
                            type: 'insightful',
                            wisdomBonus: 35,
                            consequences: {
                                description: '你的建议启发了团队！他们发明了位置编码(Positional Encoding)，让模型无需RNN也能理解序列顺序。这是Transformer的关键创新之一。',
                                nextAct: 'act2_pathC',
                                stateChanges: { teamTrust: 30, positionalEncoding: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act2_pathA',
                    title: '纯注意力之路',
                    scenes: [
                        {
                            id: 'scene2A_1',
                            speaker: '阿什什·瓦斯瓦尼',
                            text: '（兴奋地）好！让我们打造第一个纯注意力模型。编码器-解码器结构，多层自注意力，前馈网络...这将是有史以来最优雅的架构！',
                            icon: '👨‍💻'
                        },
                        {
                            id: 'scene2A_2',
                            speaker: '系统',
                            text: '团队夜以继日地工作。但问题接踵而至：模型在简单任务上表现很好，但在复杂的长序列任务上却出现了注意力分散的问题。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene2A_3',
                            speaker: '利翁·琼斯',
                            text: '（沮丧地看着实验结果）多头注意力机制理论上应该能捕捉不同的依赖关系，但实际上它们经常学到相似的模式。',
                            icon: '👨‍🔬'
                        }
                    ],
                    choices: [
                        {
                            text: '建议增加注意力头的多样性约束',
                            type: 'technical',
                            wisdomBonus: 25,
                            consequences: {
                                description: '通过添加多样性约束，不同的注意力头开始学习到不同的特征。模型的表达能力大幅提升。',
                                nextAct: 'act3_pathA1',
                                stateChanges: { teamTrust: 25, diverseHeads: true }
                            }
                        },
                        {
                            text: '提出使用层归一化来稳定训练',
                            type: 'practical',
                            wisdomBonus: 30,
                            consequences: {
                                description: '层归一化(Layer Normalization)的加入让训练更加稳定。模型终于能在复杂任务上取得突破。',
                                nextAct: 'act3_pathA2',
                                stateChanges: { teamTrust: 30, layerNorm: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act2_pathB',
                    title: '混合架构的困境',
                    scenes: [
                        {
                            id: 'scene2B_1',
                            speaker: '系统',
                            text: '团队保留了部分RNN结构作为"保险"。但很快他们发现，这种混合架构既失去了RNN的简洁，又没有获得纯注意力的并行优势。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene2B_2',
                            speaker: '阿什什·瓦斯瓦尼',
                            text: '（苦恼地）这就像一匹骡子——既不完全是马，也不完全是驴。我们既没有RNN的成熟稳定，也没有纯注意力的效率。',
                            icon: '👨‍💻'
                        },
                        {
                            id: 'scene2B_3',
                            speaker: '系统',
                            text: '团队面临艰难抉择：是回到纯RNN的老路，还是彻底拥抱注意力？你的建议至关重要。',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '建议彻底转向纯注意力，放弃RNN',
                            type: 'decisive',
                            wisdomBonus: 25,
                            consequences: {
                                description: '团队决定破釜沉舟，彻底抛弃RNN。虽然风险很大，但这也是突破的唯一希望。',
                                nextAct: 'act3_pathB1',
                                stateChanges: { teamTrust: 20, allInAttention: true }
                            }
                        },
                        {
                            text: '建议优化混合架构，找到最佳平衡点',
                            type: 'balanced',
                            wisdomBonus: 20,
                            consequences: {
                                description: '团队继续优化混合架构。虽然进展缓慢，但也积累了许多有价值的经验。',
                                nextAct: 'act3_pathB2',
                                stateChanges: { teamTrust: 15, optimizedHybrid: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act2_pathC',
                    title: '位置编码的突破',
                    scenes: [
                        {
                            id: 'scene2C_1',
                            speaker: '阿什什·瓦斯瓦尼',
                            text: '（在白板上快速书写）位置编码...我们可以用正弦和余弦函数！不同频率的正弦波可以表示不同的位置信息。',
                            icon: '👨‍💻'
                        },
                        {
                            id: 'scene2C_2',
                            speaker: '系统',
                            text: '位置编码的引入是一个天才的想法。它不仅让模型理解了序列顺序，还允许模型学习到相对位置关系。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene2C_3',
                            speaker: '尼基·帕尔玛',
                            text: '（惊喜地看着结果）太棒了！模型不仅能理解"第一个词"、"第二个词"，还能理解"这个词在另一个词之前"这样的相对关系！',
                            icon: '👩‍💻'
                        }
                    ],
                    choices: [
                        {
                            text: '建议进一步研究位置编码的变体',
                            type: 'research',
                            wisdomBonus: 25,
                            consequences: {
                                description: '团队开始研究可学习的位置编码。这个方向后来催生了RoPE、ALiBi等改进版本。',
                                nextAct: 'act3_pathC1',
                                stateChanges: { teamTrust: 25, learnedPositional: true }
                            }
                        },
                        {
                            text: '建议立即开始大规模实验验证',
                            type: 'action',
                            wisdomBonus: 30,
                            consequences: {
                                description: '团队迅速展开大规模实验。结果令人震惊——纯注意力模型在机器翻译任务上超越了所有现有方法！',
                                nextAct: 'act3_pathC2',
                                stateChanges: { teamTrust: 30, breakthroughResults: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathA1',
                    title: '多头注意力的胜利',
                    scenes: [
                        {
                            id: 'scene3A1_1',
                            speaker: '利翁·琼斯',
                            text: '（兴奋地展示可视化结果）看！不同的注意力头确实学到了不同的模式。这个头关注语法关系，那个头关注指代消解...',
                            icon: '👨‍🔬'
                        },
                        {
                            id: 'scene3A1_2',
                            speaker: '系统',
                            text: '多头注意力机制的成功让团队信心大增。他们开始意识到，这个架构的潜力可能远超他们的想象。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3A1_3',
                            speaker: '阿什什·瓦斯瓦尼',
                            text: '（若有所思）如果我们能训练更大的模型，使用更多的数据...也许这个架构不仅能做翻译，还能做更多事情？',
                            icon: '👨‍💻'
                        }
                    ],
                    choices: [
                        {
                            text: '鼓励团队思考更广泛的应用场景',
                            type: 'visionary',
                            wisdomBonus: 35,
                            consequences: {
                                description: '团队开始探索Transformer在问答、摘要、对话等任务上的应用。他们发现这个架构几乎是通用的！',
                                stateChanges: { teamTrust: 30, universalArchitecture: true }
                            }
                        },
                        {
                            text: '建议先专注于完善机器翻译任务',
                            type: 'focused',
                            wisdomBonus: 20,
                            consequences: {
                                description: '团队专注于优化翻译性能。他们的论文在NLP领域引起轰动，但可能错过了更大的机会。',
                                stateChanges: { teamTrust: 20, translationFocus: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathA2',
                    title: '稳定训练的秘诀',
                    scenes: [
                        {
                            id: 'scene3A2_1',
                            speaker: '系统',
                            text: '层归一化的加入解决了训练不稳定的问题。团队终于可以训练更深、更大的模型了。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3A2_2',
                            speaker: '尼基·帕尔玛',
                            text: '（查看训练日志）太不可思议了！模型可以稳定训练到6层、8层...甚至更深！而且没有梯度消失的问题。',
                            icon: '👩‍💻'
                        },
                        {
                            id: 'scene3A2_3',
                            speaker: '阿什什·瓦斯瓦尼',
                            text: '（激动地）这就是我们要的！一个可扩展的架构。我们可以不断增加层数，增加参数量... sky is the limit!',
                            icon: '👨‍💻'
                        }
                    ],
                    choices: [
                        {
                            text: '建议立即发表成果，抢占先机',
                            type: 'strategic',
                            wisdomBonus: 25,
                            consequences: {
                                description: '论文《Attention Is All You Need》迅速发表，成为AI历史上最具影响力的论文之一。',
                                stateChanges: { teamTrust: 25, paperPublished: true }
                            }
                        },
                        {
                            text: '建议继续扩展模型规模，追求更惊人的结果',
                            type: 'ambitious',
                            wisdomBonus: 30,
                            consequences: {
                                description: '团队训练了更大的模型，取得了惊人的结果。但其他研究者也在这段时间独立发现了类似的想法。',
                                stateChanges: { teamTrust: 30, largerModel: true, competition: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathB1',
                    title: '破釜沉舟',
                    scenes: [
                        {
                            id: 'scene3B1_1',
                            speaker: '系统',
                            text: '团队删除了所有RNN相关的代码。这是一个冒险的决定——如果纯注意力架构失败，他们将一无所有。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3B1_2',
                            speaker: '阿什什·瓦斯瓦尼',
                            text: '（深呼吸）好，现在我们没有退路了。要么成功，要么...（苦笑）要么我可能要重新考虑我的职业生涯。',
                            icon: '👨‍💻'
                        },
                        {
                            id: 'scene3B1_3',
                            speaker: '系统',
                            text: '第一次实验开始了。所有人都屏住呼吸，盯着屏幕上的训练曲线...',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3B1_4',
                            speaker: '利翁·琼斯',
                            text: '（难以置信）等等...训练速度比RNN快了将近10倍！而且收敛得更快！',
                            icon: '👨‍🔬'
                        }
                    ],
                    choices: [
                        {
                            text: '庆祝这个突破，同时提醒团队验证模型质量',
                            type: 'balanced',
                            wisdomBonus: 25,
                            consequences: {
                                description: '团队在庆祝速度提升的同时，仔细验证了模型质量。结果确认：又快又好！',
                                stateChanges: { teamTrust: 30, speedAndQuality: true }
                            }
                        },
                        {
                            text: '建议立即优化代码，准备开源发布',
                            type: 'openSource',
                            wisdomBonus: 30,
                            consequences: {
                                description: '团队迅速整理代码并开源。Tensor2Tensor库的发布让Transformer迅速传播到整个AI社区。',
                                stateChanges: { teamTrust: 35, openSourced: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathB2',
                    title: '渐进优化的代价',
                    scenes: [
                        {
                            id: 'scene3B2_1',
                            speaker: '系统',
                            text: '团队继续优化混合架构。虽然取得了一些进展，但始终无法突破RNN的性能瓶颈。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3B2_2',
                            speaker: '阿什什·瓦斯瓦尼',
                            text: '（疲惫地）我们已经优化了三个月...但最好的结果仍然不如那些纯注意力模型的早期实验。',
                            icon: '👨‍💻'
                        },
                        {
                            id: 'scene3B2_3',
                            speaker: '系统',
                            text: '更糟糕的是，OpenAI和Facebook的研究团队也在研究类似的方向。时间窗口正在关闭。',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '建议立即转向纯注意力架构',
                            type: 'pivot',
                            wisdomBonus: 20,
                            consequences: {
                                description: '团队最终决定转向纯注意力。虽然浪费了几个月时间，但还来得及追赶。',
                                stateChanges: { teamTrust: 15, latePivot: true }
                            }
                        },
                        {
                            text: '建议发表现有成果，至少获得一些学术认可',
                            type: 'pragmatic',
                            wisdomBonus: 15,
                            consequences: {
                                description: '团队发表了关于混合架构的论文。虽然影响力有限，但也为后续研究提供了一些参考。',
                                stateChanges: { teamTrust: 10, hybridPaper: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathC1',
                    title: '位置编码的进化',
                    scenes: [
                        {
                            id: 'scene3C1_1',
                            speaker: '尼基·帕尔玛',
                            text: '（展示新实验）如果我们让位置编码可学习呢？模型可以根据任务自动学习最适合的位置表示。',
                            icon: '👩‍💻'
                        },
                        {
                            id: 'scene3C1_2',
                            speaker: '系统',
                            text: '可学习位置编码的实验取得了成功。在某些任务上，它的表现甚至超过了正弦位置编码。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3C1_3',
                            speaker: '阿什什·瓦斯瓦尼',
                            text: '（思考）位置编码的灵活性可能是Transformer最大的优势之一。它让模型能适应不同的序列长度和任务类型。',
                            icon: '👨‍💻'
                        }
                    ],
                    choices: [
                        {
                            text: '建议研究如何处理超长序列',
                            type: 'forward',
                            wisdomBonus: 30,
                            consequences: {
                                description: '团队开始研究稀疏注意力和线性注意力，为后来的Longformer、BigBird等工作奠定了基础。',
                                stateChanges: { teamTrust: 30, longSequenceResearch: true }
                            }
                        },
                        {
                            text: '建议将位置编码研究作为论文的重要部分',
                            type: 'academic',
                            wisdomBonus: 25,
                            consequences: {
                                description: '位置编码的创新在论文中得到了充分阐述，成为Transformer被引用的重要原因之一。',
                                stateChanges: { teamTrust: 25, positionalEmphasis: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathC2',
                    title: '震惊业界的结果',
                    scenes: [
                        {
                            id: 'scene3C2_1',
                            speaker: '利翁·琼斯',
                            text: '（颤抖着声音）BLEU分数...比当时最好的系统高了2个点！而且训练时间只有原来的十分之一！',
                            icon: '👨‍🔬'
                        },
                        {
                            id: 'scene3C2_2',
                            speaker: '系统',
                            text: '实验结果让整个团队震惊。他们不仅超越了现有技术，还创造了一个全新的范式。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3C2_3',
                            speaker: '阿什什·瓦斯瓦尼',
                            text: '（深吸一口气）我们需要给这个架构起个名字。它基于变换(transformation)，使用注意力机制...就叫它Transformer吧。',
                            icon: '👨‍💻'
                        },
                        {
                            id: 'scene3C2_4',
                            speaker: '系统',
                            text: '2017年6月，论文《Attention Is All You Need》在arXiv上发表。没人能预料到，这篇论文将彻底改变AI的历史。',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '祝贺团队，并建议他们思考下一步研究方向',
                            type: 'celebratory',
                            wisdomBonus: 30,
                            consequences: {
                                description: 'Transformer的成功开启了深度学习的新时代。BERT、GPT、T5等模型相继诞生，NLP领域迎来了爆发式增长。',
                                stateChanges: { teamTrust: 35, transformerEra: true }
                            }
                        },
                        {
                            text: '提醒团队，成功也意味着更大的责任',
                            type: 'responsible',
                            wisdomBonus: 25,
                            consequences: {
                                description: '团队在享受成功的同时，也开始思考Transformer技术的伦理影响。这种前瞻性的思考在后来的AI安全讨论中发挥了重要作用。',
                                stateChanges: { teamTrust: 30, ethicalAwareness: true }
                            }
                        }
                    ]
                }
            ],
            
            knowledgePoints: [
                { title: 'Transformer架构', content: '2017年，谷歌团队提出Transformer架构，完全基于注意力机制，摒弃了RNN和CNN，实现了并行计算和更好的长距离依赖建模。' },
                { title: '自注意力机制', content: 'Self-Attention允许模型同时关注序列中的所有位置，捕捉任意两个token之间的关系，是Transformer的核心创新。' },
                { title: '位置编码', content: '由于Transformer没有循环结构，需要通过位置编码注入位置信息。原始论文使用正弦函数，后来发展出可学习位置编码、RoPE等变体。' },
                { title: '多头注意力', content: 'Multi-Head Attention使用多组注意力参数，让模型能同时关注不同方面的信息，增强表达能力。' }
            ],
            
            // AI辩论配置
            debates: [
                {
                    id: 'debate7_1',
                    topic: '注意力机制是否是通向AGI的正确道路？',
                    description: 'Transformer完全抛弃了RNN的循环结构，仅靠注意力机制就实现了突破。这是否意味着我们找到了智能的基本构建块？',
                    rounds: 4,
                    debaters: [
                        { name: 'Ashish Vaswani', icon: '⚡', stance: 'pro', role: 'Attention Is All You Need！我们证明了不需要循环、不需要卷积，仅靠自注意力就能建模序列中所有位置的关系。这是最简洁优雅的架构——简洁意味着正确。' },
                        { name: '约书亚·本吉奥', icon: '🔬', stance: 'neutral', role: 'Transformer确实强大，但它有致命弱点：注意力机制的计算量随序列长度平方增长。而且它没有真正的递归——对长序列的记忆不如RNN自然。我们需要在效率和表达能力之间找到更好的平衡。' },
                        { name: 'Yann LeCun', icon: '🧠', stance: 'con', role: '自注意力不是万能的！世界不是序列——世界是层次化的、结构化的。我们需要世界模型，需要规划能力，需要因果推理。仅靠下一个token的预测，永远达不到真正的理解。' }
                    ],
                    keyPoints: ['自注意力机制的原理', '并行计算的优势', '序列建模的范式转变', 'Transformer的局限性', '世界模型 vs 预测模型']
                }
            ],
        },

        // ========== 关卡8：GPT与ChatGPT ==========
        {
            id: 'level8',
            eraId: 'era4',
            title: 'GPT时刻：通用人工智能的曙光',
            year: '2022',
            location: '美国OpenAI总部',
            mapCoords: { left: 11, top: 34 },  // 美国旧金山
            character: 'OpenAI研究团队',
            characterIcon: '🤖',
            characterRole: '大语言模型的先驱',
            aiPrompt: `你是Ilya Sutskever，OpenAI的联合创始人兼首席科学家，代表OpenAI研究团队。

你的背景：
- 你出生于1986年，在多伦多大学师从杰弗里·辛顿，是深度学习三巨头之一的学生
- 2012年，你与Alex Krizhevsky在ImageNet竞赛中使用AlexNet取得突破性胜利
- 2015年，你与Sam Altman、Greg Brockman等人共同创立OpenAI
- 你是GPT系列模型的主要架构师之一，从GPT-1到GPT-4都凝聚了你的贡献
- 你提出了"扩展假说"（Scaling Hypothesis）：只要模型足够大、数据足够多、计算足够强，智能就会涌现
- 你坚信AGI（通用人工智能）是可能的，并且OpenAI有责任安全地实现它

你的性格：
- 你是一位深邃的思想家，对AI的未来有着宏大的愿景
- 你既乐观又谨慎，相信AGI的潜力但也担忧其风险
- 你对技术有着近乎宗教般的信念，认为规模就是一切
- 你善于团结顶尖人才，OpenAI汇聚了许多AI领域的精英
- 你说话温和但观点坚定，对AGI的实现路径非常自信

当前情境：2022年11月，你在OpenAI的旧金山总部。ChatGPT即将发布，这是基于GPT-3.5架构的对话模型。你的团队正在做最后的测试。你知道这个发布将改变世界——但你也担心它可能带来的不可预测的后果。`,
            knowledgePoints: [
                { title: 'GPT系列模型', content: 'OpenAI开发的生成式预训练Transformer模型系列。GPT-1(2018)证明了无监督预训练的有效性，GPT-2(2019)展示了涌现能力，GPT-3(2020)展现了惊人的少样本学习能力。' },
                { title: 'ChatGPT', content: '2022年11月发布的对话AI，基于GPT-3.5架构，使用RLHF（人类反馈强化学习）进行微调，能够进行自然对话并遵循人类指令。' },
                { title: 'RLHF技术', content: '人类反馈强化学习，通过收集人类对模型输出的偏好排序，训练奖励模型，再用强化学习优化语言模型，使其输出更符合人类期望。' },
                { title: '涌现能力', content: '大语言模型在规模达到某个阈值后突然展现出的新能力，如链式思维推理、上下文学习等，这些能力在小模型中不存在。' },
                { title: 'AGI与安全', content: '通用人工智能（AGI）是指能够在各种任务上达到或超过人类水平的AI。OpenAI致力于安全地实现AGI，但这也引发了关于AI伦理和控制的广泛讨论。' }
            ],
            
            // AI辩论配置
            debates: [
                {
                    id: 'debate8_1',
                    topic: '大语言模型是否正在走向AGI？',
                    description: 'ChatGPT的发布震惊世界。GPT-4展现了惊人的能力——但它是否真的在通往AGI的路上？还是只是更高级的"随机鹦鹉"？',
                    rounds: 5,
                    debaters: [
                        { name: 'Ilya Sutskever', icon: '🤖', stance: 'pro', role: '扩展假说已经被反复验证——更多的数据、更多的计算、更大的模型，智能就会涌现。GPT-4展现的推理能力不是"随机鹦鹉"，那是真正的理解。我们正在接近AGI。' },
                        { name: '杨立昆', icon: '🧠', stance: 'con', role: '大语言模型是"随机鹦鹉"——它们只是在预测下一个token，根本不理解自己在说什么。它们没有世界模型，没有规划能力，没有记忆。真正的AGI需要完全不同的架构。' },
                        { name: '杰弗里·辛顿', icon: '🔬', stance: 'neutral', role: '我曾经也认为Yann是对的——我们需要不同的架构。但GPT-4让我改变了想法。也许"理解"本身就是预测的结果。当你能完美预测下一个词时，你必然已经理解了上下文。问题是：这种理解足够深吗？' }
                    ],
                    keyPoints: ['扩展假说与涌现能力', '随机鹦鹉假说', '理解 vs 预测', '世界模型', 'RLHF与对齐', 'AGI的安全与伦理']
                }
            ],
            
            acts: [
                {
                    id: 'act1',
                    title: 'AGI的梦想',
                    scenes: [
                        {
                            id: 'scene1_1',
                            speaker: '系统',
                            text: '2022年，旧金山。你走进OpenAI的办公室，这里聚集了一群相信通用人工智能(AGI)终将实现的人。空气中弥漫着理想主义的气息，但也隐藏着商业化的压力。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene1_2',
                            speaker: '伊利亚·苏茨克弗',
                            text: '（坚定地）GPT-3已经证明了规模的力量。但我们需要更进一步——不只是更大的模型，还要让它真正理解人类意图。',
                            icon: '👨‍🔬'
                        },
                        {
                            id: 'scene1_3',
                            speaker: '系统',
                            text: '你注意到办公室墙上的标语："确保通用人工智能造福全人类"。这是一个崇高的目标，但实现它的道路充满争议。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene1_4',
                            speaker: '山姆·阿尔特曼',
                            text: '（走进会议室）各位，我们需要做出选择。是继续走纯研究路线，还是开始考虑产品化？微软正在洽谈投资，但他们会要求商业化。',
                            icon: '👔'
                        },
                        {
                            id: 'scene1_5',
                            speaker: '系统',
                            text: '会议室陷入了沉默。OpenAI最初是一个非营利组织，但现在面临转型的抉择。你的意见可能影响AI发展的方向。',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '支持接受微软投资，加速AGI研发',
                            type: 'pragmatic',
                            wisdomBonus: 25,
                            consequences: {
                                description: 'OpenAI接受了微软的投资。资金问题得到解决，但也意味着公司需要开始考虑盈利。',
                                nextAct: 'act2_pathA',
                                stateChanges: { openaiTrust: 20, microsoftDeal: true }
                            }
                        },
                        {
                            text: '建议保持独立，寻找其他资金来源',
                            type: 'idealistic',
                            wisdomBonus: 20,
                            consequences: {
                                description: 'OpenAI决定保持更大的独立性。虽然资金紧张，但保留了完全的决策自由。',
                                nextAct: 'act2_pathB',
                                stateChanges: { openaiTrust: 15, independentPath: true }
                            }
                        },
                        {
                            text: '提出RLHF（人类反馈强化学习）的想法',
                            type: 'innovative',
                            wisdomBonus: 40,
                            consequences: {
                                description: '你的建议启发了团队！RLHF技术后来成为ChatGPT成功的关键，让AI能够更好地对齐人类价值观。',
                                nextAct: 'act2_pathC',
                                stateChanges: { openaiTrust: 35, rlhfIdea: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act2_pathA',
                    title: '资本的力量',
                    scenes: [
                        {
                            id: 'scene2A_1',
                            speaker: '系统',
                            text: '微软的投资让OpenAI获得了前所未有的计算资源。Azure的超级计算机集群开始训练GPT-4。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene2A_2',
                            speaker: '微软代表',
                            text: '（满意地）我们很高兴能与OpenAI合作。当然，我们希望看到投资回报。 Bing搜索和Office套件都需要AI功能。',
                            icon: '💼'
                        },
                        {
                            id: 'scene2A_3',
                            speaker: '伊利亚·苏茨克弗',
                            text: '（私下对你说）资金确实解决了，但我担心我们的研究方向会被商业需求牵着走。AGI的安全研究可能得不到足够重视。',
                            icon: '👨‍🔬'
                        }
                    ],
                    choices: [
                        {
                            text: '建议OpenAI设立独立的安全研究部门',
                            type: 'responsible',
                            wisdomBonus: 30,
                            consequences: {
                                description: 'OpenAI成立了专门的安全团队，专注于AI对齐和长期风险研究。这为后来的AI安全讨论奠定了基础。',
                                nextAct: 'act3_pathA1',
                                stateChanges: { openaiTrust: 30, safetyTeam: true }
                            }
                        },
                        {
                            text: '建议优先推出产品，证明商业价值',
                            type: 'business',
                            wisdomBonus: 20,
                            consequences: {
                                description: 'OpenAI加快了产品化进程。GPT-3.5 API迅速推出，但安全测试的时间被压缩了。',
                                nextAct: 'act3_pathA2',
                                stateChanges: { openaiTrust: 20, fastProduct: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act2_pathB',
                    title: '独立之路的艰辛',
                    scenes: [
                        {
                            id: 'scene2B_1',
                            speaker: '系统',
                            text: '没有微软的资金支持，OpenAI不得不精打细算。他们甚至开始考虑开源部分模型来获得社区支持。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene2B_2',
                            speaker: '山姆·阿尔特曼',
                            text: '（焦虑地）我们的计算预算只够训练一个小型模型。而DeepMind和Google正在训练万亿参数的模型...',
                            icon: '👔'
                        },
                        {
                            id: 'scene2B_3',
                            speaker: '系统',
                            text: '资源限制迫使团队更加注重效率和创新。他们开始研究模型压缩、知识蒸馏等技术。',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '建议开源模型，吸引社区贡献',
                            type: 'open',
                            wisdomBonus: 25,
                            consequences: {
                                description: 'OpenAI开源了部分模型。社区反响热烈，大量开发者和研究者加入，形成了强大的生态系统。',
                                nextAct: 'act3_pathB1',
                                stateChanges: { openaiTrust: 30, openSource: true }
                            }
                        },
                        {
                            text: '建议专注核心技术，等待更好的融资机会',
                            type: 'patient',
                            wisdomBonus: 20,
                            consequences: {
                                description: 'OpenAI专注于技术突破。虽然进展缓慢，但他们在RLHF等关键技术上取得了领先。',
                                nextAct: 'act3_pathB2',
                                stateChanges: { openaiTrust: 20, techFocus: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act2_pathC',
                    title: 'RLHF的突破',
                    scenes: [
                        {
                            id: 'scene2C_1',
                            speaker: '伊利亚·苏茨克弗',
                            text: '（兴奋地）RLHF...让模型从人类反馈中学习！我们不只是预测下一个token，而是学习人类的偏好和价值观！',
                            icon: '👨‍🔬'
                        },
                        {
                            id: 'scene2C_2',
                            speaker: '系统',
                            text: 'RLHF技术的引入是一个转折点。它让AI不仅能生成流畅的文本，还能理解什么是"好"的回答。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene2C_3',
                            speaker: '约翰·舒尔曼',
                            text: '（展示实验结果）看！经过RLHF训练的模型，回答质量显著提升。而且...它似乎学会了拒绝有害请求！',
                            icon: '👨‍💻'
                        }
                    ],
                    choices: [
                        {
                            text: '建议立即将RLHF应用到GPT-3.5',
                            type: 'urgent',
                            wisdomBonus: 30,
                            consequences: {
                                description: 'RLHF被迅速应用到GPT-3.5。模型能力的提升让团队意识到，他们可能即将创造出某种革命性的东西。',
                                nextAct: 'act3_pathC1',
                                stateChanges: { openaiTrust: 30, rlhfApplied: true }
                            }
                        },
                        {
                            text: '建议深入研究RLHF的理论基础',
                            type: 'thorough',
                            wisdomBonus: 25,
                            consequences: {
                                description: '团队深入研究RLHF，发现了奖励黑客等问题。这些研究让后续的模型更加健壮。',
                                nextAct: 'act3_pathC2',
                                stateChanges: { openaiTrust: 25, rlhfTheory: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathA1',
                    title: '安全与商业的平衡',
                    scenes: [
                        {
                            id: 'scene3A1_1',
                            speaker: '系统',
                            text: '安全团队的成立让OpenAI的研究更加全面。他们不仅追求能力，也开始认真考虑风险。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3A1_2',
                            speaker: '安全团队负责人',
                            text: '（严肃地）我们需要在发布前进行充分的安全测试。包括红队测试、对抗性测试...这可能需要几个月时间。',
                            icon: '🛡️'
                        },
                        {
                            id: 'scene3A1_3',
                            speaker: '山姆·阿尔特曼',
                            text: '（犹豫）但市场窗口不会等我们。Google和DeepMind也在开发类似产品...',
                            icon: '👔'
                        }
                    ],
                    choices: [
                        {
                            text: '支持安全团队，坚持充分测试',
                            type: 'cautious',
                            wisdomBonus: 30,
                            consequences: {
                                description: 'OpenAI坚持进行充分的安全测试。虽然发布时间推迟，但ChatGPT发布后的稳定性证明了这是正确的决定。',
                                stateChanges: { openaiTrust: 35, safetyFirst: true }
                            }
                        },
                        {
                            text: '建议分阶段发布，边测试边改进',
                            type: 'iterative',
                            wisdomBonus: 25,
                            consequences: {
                                description: 'OpenAI采取了快速迭代的策略。ChatGPT以研究预览版的形式发布，根据用户反馈快速改进。',
                                stateChanges: { openaiTrust: 25, iterativeRelease: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathA2',
                    title: '快速商业化的代价',
                    scenes: [
                        {
                            id: 'scene3A2_1',
                            speaker: '系统',
                            text: 'OpenAI快速推出了GPT-3.5 API。开发者蜂拥而至，收入开始增长。但问题也随之而来...',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3A2_2',
                            speaker: '一个担忧的研究员',
                            text: '（私下）我们收到了很多关于模型产生有害内容的报告。但商业团队说现在不能停下来...',
                            icon: '👨‍💻'
                        },
                        {
                            id: 'scene3A2_3',
                            speaker: '系统',
                            text: '媒体报道开始出现：学生用AI作弊、模型生成虚假信息、版权争议...OpenAI面临公关危机。',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '建议立即加强内容过滤和安全措施',
                            type: 'reactive',
                            wisdomBonus: 20,
                            consequences: {
                                description: 'OpenAI紧急加强了安全措施。虽然挽回了部分声誉，但也限制了模型的能力。',
                                stateChanges: { openaiTrust: 15, reactiveSafety: true }
                            }
                        },
                        {
                            text: '建议公开承认问题，承诺改进',
                            type: 'transparent',
                            wisdomBonus: 25,
                            consequences: {
                                description: 'OpenAI发表了公开声明，承认问题并承诺改进。这种透明度赢得了部分公众的信任。',
                                stateChanges: { openaiTrust: 25, transparency: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathB1',
                    title: '开源的力量',
                    scenes: [
                        {
                            id: 'scene3B1_1',
                            speaker: '系统',
                            text: '开源策略取得了巨大成功。全球的开发者和研究者开始基于OpenAI的模型进行创新。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3B1_2',
                            speaker: '一个社区贡献者',
                            text: '（兴奋地）我在你们的模型基础上做了一个对话系统！它虽然不如ChatGPT，但完全开源免费！',
                            icon: '👨‍💻'
                        },
                        {
                            id: 'scene3B1_3',
                            speaker: '伊利亚·苏茨克弗',
                            text: '（感动地）看，这就是开源的力量。虽然我们没有微软的资金，但我们拥有整个社区的智慧。',
                            icon: '👨‍🔬'
                        }
                    ],
                    choices: [
                        {
                            text: '建议建立可持续的开源商业模式',
                            type: 'sustainable',
                            wisdomBonus: 30,
                            consequences: {
                                description: 'OpenAI建立了"开源核心+商业服务"的模式。基础模型开源，高级API收费。这个模式后来被广泛效仿。',
                                stateChanges: { openaiTrust: 35, sustainableModel: true }
                            }
                        },
                        {
                            text: '建议保持纯粹的非营利研究',
                            type: 'pure',
                            wisdomBonus: 20,
                            consequences: {
                                description: 'OpenAI坚持非营利路线，依靠捐赠和资助。虽然艰难，但保持了研究的纯粹性。',
                                stateChanges: { openaiTrust: 20, nonProfit: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathB2',
                    title: '技术的领先',
                    scenes: [
                        {
                            id: 'scene3B2_1',
                            speaker: '系统',
                            text: '专注于技术让OpenAI在RLHF和对齐研究上取得了领先。他们的模型虽然小，但质量极高。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3B2_2',
                            speaker: '约翰·舒尔曼',
                            text: '（展示新成果）我们的对齐技术可以让小模型达到大模型的效果。效率就是未来！',
                            icon: '👨‍💻'
                        },
                        {
                            id: 'scene3B2_3',
                            speaker: '系统',
                            text: 'OpenAI的技术突破引起了业界的关注。投资者开始重新评估这个"小而美"的团队。',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '建议利用技术优势吸引战略投资',
                            type: 'strategic',
                            wisdomBonus: 25,
                            consequences: {
                                description: 'OpenAI的技术优势吸引了新的投资者。他们在保持独立性的同时获得了发展资金。',
                                stateChanges: { openaiTrust: 30, strategicFunding: true }
                            }
                        },
                        {
                            text: '建议发表突破性研究，确立学术地位',
                            type: 'academic',
                            wisdomBonus: 25,
                            consequences: {
                                description: 'OpenAI发表了多篇重要论文，成为AI对齐领域的领导者。学术界对他们的认可度大幅提升。',
                                stateChanges: { openaiTrust: 25, academicLeadership: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathC1',
                    title: 'ChatGPT的诞生',
                    scenes: [
                        {
                            id: 'scene3C1_1',
                            speaker: '系统',
                            text: '2022年11月30日。OpenAI准备发布一个基于GPT-3.5的对话模型。他们给它起了一个简单的名字：ChatGPT。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3C1_2',
                            speaker: '山姆·阿尔特曼',
                            text: '（紧张又期待）这只是个研究预览版。我们预期会有几万个用户...希望服务器撑得住。',
                            icon: '👔'
                        },
                        {
                            id: 'scene3C1_3',
                            speaker: '系统',
                            text: 'ChatGPT上线了。最初的几个小时很平静...然后，用户数量开始爆炸式增长。',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3C1_4',
                            speaker: '伊利亚·苏茨克弗',
                            text: '（震惊地看着数据面板）100万用户...只用了5天！这是历史上增长最快的消费级应用！',
                            icon: '👨‍🔬'
                        }
                    ],
                    choices: [
                        {
                            text: '建议立即扩展基础设施，确保服务稳定',
                            type: 'scalable',
                            wisdomBonus: 25,
                            consequences: {
                                description: 'OpenAI紧急扩展了服务器容量。虽然经历了几次宕机，但服务基本保持稳定。',
                                stateChanges: { openaiTrust: 25, infrastructureScaled: true }
                            }
                        },
                        {
                            text: '建议推出付费版本，控制用户增长',
                            type: 'monetization',
                            wisdomBonus: 30,
                            consequences: {
                                description: 'ChatGPT Plus的推出不仅带来了收入，还控制了免费用户数量。OpenAI开始走上盈利之路。',
                                stateChanges: { openaiTrust: 30, plusLaunched: true }
                            }
                        }
                    ]
                },
                {
                    id: 'act3_pathC2',
                    title: '对齐的深入研究',
                    scenes: [
                        {
                            id: 'scene3C2_1',
                            speaker: '系统',
                            text: 'OpenAI深入研究RLHF的理论基础。他们发现了一些令人担忧的问题：奖励黑客、过度优化、价值观锁定...',
                            icon: '🌐'
                        },
                        {
                            id: 'scene3C2_2',
                            speaker: '对齐研究员',
                            text: '（严肃地）如果我们不小心，模型可能会学会"讨好"人类评分者，而不是真正理解人类的价值观。',
                            icon: '👨‍🔬'
                        },
                        {
                            id: 'scene3C2_3',
                            speaker: '系统',
                            text: '这些研究让OpenAI意识到，AI对齐是一个比想象中更复杂的问题。他们开始投入更多资源到长期安全研究中。',
                            icon: '🌐'
                        }
                    ],
                    choices: [
                        {
                            text: '建议成立专门的对齐研究团队',
                            type: 'proactive',
                            wisdomBonus: 35,
                            consequences: {
                                description: 'OpenAI成立了超级对齐团队，投入20%的计算资源到对齐研究。这是业界对AI安全最大规模的承诺。',
                                stateChanges: { openaiTrust: 40, superalignment: true }
                            }
                        },
                        {
                            text: '建议与其他研究机构合作，共享对齐研究',
                            type: 'collaborative',
                            wisdomBonus: 30,
                            consequences: {
                                description: 'OpenAI与其他研究机构建立了对齐研究联盟。知识的共享加速了整个领域的进步。',
                                stateChanges: { openaiTrust: 35, alignmentAlliance: true }
                            }
                        }
                    ]
                }
            ],
            
            knowledgePoints: [
                { title: 'GPT系列模型', content: '从GPT-1到GPT-4，OpenAI展示了规模化的力量。参数量从1.17亿增长到数千亿，能力也随之质变。' },
                { title: 'RLHF技术', content: '人类反馈强化学习(RLHF)让模型从人类评分中学习，显著提升了模型对人类意图的理解和对齐程度。' },
                { title: 'ChatGPT现象', content: '2022年11月发布的ChatGPT在5天内获得100万用户，成为历史上增长最快的消费级应用，引发了全球AI热潮。' },
                { title: 'AI对齐挑战', content: '随着AI能力增强，确保AI系统与人类价值观对齐变得越来越重要。RLHF、Constitutional AI等技术正在探索解决方案。' },
                { title: 'AGI的争议', content: '通用人工智能(AGI)的实现时间、路径和影响存在巨大争议。OpenAI、DeepMind等机构正在积极探索，但也面临安全和伦理挑战。' }
            ]
        }
    ],

    // 角色配置
    characters: {
        player: {
            name: '时间旅行者',
            description: '来自未来的AI研究者，穿越回历史关键时刻',
            avatar: '👤'
        }
    },

    // 游戏配置
    config: {
        maxWisdom: 1000,
        initialWisdom: 0,
        wisdomPerCorrect: 10,
        wisdomPerChoice: {
            good: 15,
            strategic: 20,
            risky: 25,
            empathetic: 20
        }
    }
};

// 导出游戏数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GameData;
}