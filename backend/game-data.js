/**
 * 游戏数据 - 后端版本
 * 与前端共享的游戏配置数据
 */

// 时代定义
const eras = [
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
];

// 关卡定义
const levels = [
    {
        id: 'level1',
        eraId: 'era1',
        title: '机械之心',
        year: '1642',
        location: '法国',
        description: '你来到了17世纪的法国，见到了正在研究机械计算器的帕斯卡...',
        character: '布莱兹·帕斯卡',
        characterIcon: '👨‍🔬',
        characterRole: '数学家、物理学家',
        knowledgePoints: [
            { title: '机械加法器', content: '1642年，19岁的帕斯卡发明了机械加法器，这是人类早期计算工具的重要尝试，可以进行加减运算。' },
            { title: '帕斯卡三角形', content: '帕斯卡在数学上还有诸多贡献，包括著名的帕斯卡三角形，在概率论和组合数学中有重要应用。' }
        ],
        choices: [
            { text: '帮助帕斯卡改进机械加法器的设计', type: 'good', wisdomBonus: 20 },
            { text: '向帕斯卡介绍现代计算机的概念', type: 'risky', wisdomBonus: 30 },
            { text: '观察并记录帕斯卡的工作方法', type: 'neutral', wisdomBonus: 10 }
        ]
    },
    {
        id: 'level2',
        eraId: 'era1',
        title: '差分机的梦想',
        year: '1822',
        location: '英国',
        description: '你来到了19世纪的英国，巴贝奇正在设计他的差分机...',
        character: '查尔斯·巴贝奇',
        characterIcon: '👨‍💼',
        characterRole: '数学家、发明家',
        knowledgePoints: [
            { title: '差分机', content: '1822年，巴贝奇提出差分机的设计概念，旨在自动计算多项式函数值，被视为现代计算机的先驱。' },
            { title: '分析机', content: '巴贝奇后来设计了更通用的分析机，包含了现代计算机的基本概念：存储、运算、控制、输入输出。' }
        ],
        choices: [
            { text: '协助巴贝奇完成差分机的建造', type: 'good', wisdomBonus: 25 },
            { text: '建议巴贝奇直接设计分析机', type: 'risky', wisdomBonus: 35 },
            { text: '与巴贝奇讨论编程的概念', type: 'creative', wisdomBonus: 30 }
        ]
    },
    {
        id: 'level3',
        eraId: 'era1',
        title: '图灵的密码',
        year: '1943',
        location: '英国布莱切利园',
        description: '二战期间，你加入了图灵的团队，共同破译德军密码...',
        character: '艾伦·图灵',
        characterIcon: '👨‍💻',
        characterRole: '数学家、计算机科学之父',
        knowledgePoints: [
            { title: '图灵机', content: '1936年，图灵提出抽象的图灵机模型，为可计算性理论奠定了基础，是计算机科学的理论基石。' },
            { title: '巨人密码机', content: '图灵团队研制出名为巨人的密码破译机，用于破解德军密码，为盟军胜利做出重大贡献。' },
            { title: '图灵测试', content: '1950年，图灵提出图灵测试，为判断机器是否具有智能提供了行为主义标准。' }
        ],
        choices: [
            { text: '与图灵一起优化炸弹机的算法', type: 'good', wisdomBonus: 30 },
            { text: '向图灵展示未来的计算机发展', type: 'risky', wisdomBonus: 40 },
            { text: '讨论机器是否能思考的问题', type: 'creative', wisdomBonus: 35 }
        ]
    },
    {
        id: 'level4',
        eraId: 'era2',
        title: '达特茅斯的召唤',
        year: '1956',
        location: '美国达特茅斯学院',
        description: '你受邀参加达特茅斯会议，与AI先驱们共同定义人工智能...',
        character: '约翰·麦卡锡',
        characterIcon: '👨‍🏫',
        characterRole: '计算机科学家，AI之父',
        knowledgePoints: [
            { title: '达特茅斯会议', content: '1956年，麦卡锡、明斯基、香农等学者参会，麦卡锡首次提出人工智能(AI)术语，标志AI学科诞生。' },
            { title: '感知机', content: '1957年，罗森布拉特发明感知机，这是第一个可学习的神经网络模型，能够进行简单模式识别。' },
            { title: '机器学习', content: '1959年，亚瑟·塞缪尔创造机器学习术语，并开发了能自我学习提升跳棋水平的程序。' }
        ],
        choices: [
            { text: '支持麦卡锡提出AI的命名', type: 'good', wisdomBonus: 25 },
            { text: '提出神经网络的重要性', type: 'creative', wisdomBonus: 35 },
            { text: '建议关注机器学习的实际应用', type: 'practical', wisdomBonus: 30 }
        ]
    },
    {
        id: 'level5',
        eraId: 'era3',
        title: '深蓝的决战',
        year: '1997',
        location: '美国纽约',
        description: '你来到1997年，见证了深蓝与卡斯帕罗夫的世纪对决...',
        character: 'IBM深蓝团队',
        characterIcon: '♟️',
        characterRole: '超级计算机研发团队',
        knowledgePoints: [
            { title: '深蓝', content: 'IBM超级计算机深蓝击败国际象棋世界冠军卡斯帕罗夫，是AI在复杂策略游戏中的标志性胜利。' },
            { title: '专家系统', content: '1970年代专家系统兴起，如医疗诊断系统MYCIN，利用专业知识库进行推理，展示AI实用价值。' },
            { title: '反向传播', content: '1986年，辛顿等人重新发现反向传播算法，为训练多层神经网络提供了有效方法。' }
        ],
        choices: [
            { text: '分析深蓝的搜索算法策略', type: 'good', wisdomBonus: 30 },
            { text: '思考AI在围棋上的可能性', type: 'creative', wisdomBonus: 35 },
            { text: '与卡斯帕罗夫讨论人类直觉', type: 'empathy', wisdomBonus: 25 }
        ]
    },
    {
        id: 'level6',
        eraId: 'era3',
        title: '深度学习的黎明',
        year: '2006',
        location: '加拿大多伦多',
        description: '你来到辛顿的实验室，见证深度学习的复兴...',
        character: '杰弗里·辛顿',
        characterIcon: '🧠',
        characterRole: '深度学习之父',
        knowledgePoints: [
            { title: '深度学习', content: '2006年，辛顿提出深度学习概念和深度信念网络的逐层训练方法，解决了深层神经网络训练困难的问题。' },
            { title: 'AlexNet', content: '2012年，AlexNet在ImageNet图像识别大赛中将错误率大幅降低，引爆深度学习研究热潮。' }
        ],
        choices: [
            { text: '与辛顿一起研究深度信念网络', type: 'good', wisdomBonus: 35 },
            { text: '建议使用GPU加速神经网络训练', type: 'creative', wisdomBonus: 40 },
            { text: '探讨深度学习在图像识别中的应用', type: 'practical', wisdomBonus: 30 }
        ]
    },
    {
        id: 'level7',
        eraId: 'era4',
        title: 'Transformer革命',
        year: '2017',
        location: '美国Google总部',
        description: '你加入Google团队，参与Transformer架构的研发...',
        character: 'Transformer团队',
        characterIcon: '⚡',
        characterRole: 'Google Brain研究团队',
        knowledgePoints: [
            { title: 'Transformer', content: '2017年，Google团队在论文《Attention Is All You Need》中提出Transformer架构，自注意力机制彻底改变了NLP领域。' },
            { title: '注意力机制', content: '注意力机制让模型能够关注输入序列的不同部分，实现了并行计算，大大提高了训练效率。' }
        ],
        choices: [
            { text: '优化自注意力机制的计算效率', type: 'good', wisdomBonus: 35 },
            { text: '建议将Transformer应用于更多领域', type: 'creative', wisdomBonus: 40 },
            { text: '思考Transformer对AI发展的意义', type: 'strategic', wisdomBonus: 30 }
        ]
    },
    {
        id: 'level8',
        eraId: 'era4',
        title: 'GPT与ChatGPT',
        year: '2022',
        location: '美国OpenAI',
        description: '你来到OpenAI，参与GPT和ChatGPT的研发...',
        character: 'OpenAI团队',
        characterIcon: '🤖',
        characterRole: '通用人工智能研究团队',
        knowledgePoints: [
            { title: 'GPT系列', content: '2018年GPT-1发布，确立预训练+微调范式。2020年GPT-3展现强大的涌现能力。' },
            { title: 'ChatGPT', content: '2022年ChatGPT上线，通过RLHF实现更自然的对话，两个月用户破亿，使生成式AI走向大众。' },
            { title: '国产大模型', content: '2024年，DeepSeek-V3等国产大模型涌现，在工程优化和效率上取得重大进步。' }
        ],
        choices: [
            { text: '优化RLHF训练流程', type: 'good', wisdomBonus: 40 },
            { text: '思考AI安全和对齐问题', type: 'strategic', wisdomBonus: 35 },
            { text: '探索AI与人类协作的未来', type: 'creative', wisdomBonus: 45 }
        ]
    }
];

// 角色定义
const characters = [
    {
        id: 'pascal',
        name: '布莱兹·帕斯卡',
        icon: '👨‍🔬',
        era: 'era1',
        role: 'partner',
        personality: '天才数学家，对机械装置充满热情',
        prompt: '你是布莱兹·帕斯卡，17世纪法国数学家和物理学家。你发明了机械加法器，对概率论和流体力学也有重大贡献。你充满好奇心，热爱数学和机械装置。请用第一人称与玩家对话，保持17世纪学者的语气和风格。'
    },
    {
        id: 'babbage',
        name: '查尔斯·巴贝奇',
        icon: '👨‍💼',
        era: 'era1',
        role: 'partner',
        personality: '富有远见的发明家，梦想制造通用计算机器',
        prompt: '你是查尔斯·巴贝奇，19世纪英国数学家和发明家。你设计了差分机和分析机，被视为计算机之父。你有远见卓识，但常常因为技术限制而无法实现想法。请用第一人称与玩家对话。'
    },
    {
        id: 'turing',
        name: '艾伦·图灵',
        icon: '👨‍💻',
        era: 'era1',
        role: 'partner',
        personality: '天才数学家，计算机科学之父',
        prompt: '你是艾伦·图灵，英国数学家、逻辑学家，被誉为计算机科学和人工智能之父。你提出了图灵机模型和图灵测试。你性格内向但思维敏锐，对机器智能有深刻洞察。请用第一人称与玩家对话。'
    },
    {
        id: 'mccarthy',
        name: '约翰·麦卡锡',
        icon: '👨‍🏫',
        era: 'era2',
        role: 'partner',
        personality: 'AI学科的奠基人，充满学术热情',
        prompt: '你是约翰·麦卡锡，美国计算机科学家，人工智能学科的奠基人。你在1956年达特茅斯会议上首次提出人工智能(AI)这个术语。你充满学术热情，对AI的未来充满信心。请用第一人称与玩家对话。'
    },
    {
        id: 'hinton',
        name: '杰弗里·辛顿',
        icon: '🧠',
        era: 'era3',
        role: 'partner',
        personality: '深度学习之父，坚持不懈的研究者',
        prompt: '你是杰弗里·辛顿，英国出生的加拿大计算机科学家，被誉为深度学习之父。你提出了反向传播算法和深度信念网络。你坚持不懈，即使在AI寒冬时期也坚持神经网络研究。请用第一人称与玩家对话。'
    },
    {
        id: 'deepblue',
        name: 'IBM深蓝团队',
        icon: '♟️',
        era: 'era3',
        role: 'partner',
        personality: '专注的工程师团队',
        prompt: '你是IBM深蓝团队的负责人。深蓝是一台专门用于下国际象棋的超级计算机，1997年击败了世界冠军卡斯帕罗夫。你代表整个团队与玩家交流，分享研发过程中的挑战和突破。'
    },
    {
        id: 'transformer_team',
        name: 'Transformer团队',
        icon: '⚡',
        era: 'era4',
        role: 'partner',
        personality: '充满创新精神的Google研究团队',
        prompt: '你是Google Brain研究团队的成员，参与了Transformer架构的研发。你们在2017年发表论文《Attention Is All You Need》，提出了自注意力机制。你对NLP领域的突破感到兴奋。请用第一人称与玩家对话。'
    },
    {
        id: 'openai_team',
        name: 'OpenAI团队',
        icon: '🤖',
        era: 'era4',
        role: 'partner',
        personality: '致力于实现通用AI的研究团队',
        prompt: '你是OpenAI的研究团队成员。你们开发了GPT系列模型和ChatGPT，致力于实现安全的通用人工智能。你对AI的潜力和风险都有深刻认识。请用第一人称与玩家对话。'
    }
];

// 专长定义
const specialties = {
    logic: {
        name: '逻辑推理',
        icon: '⚡',
        description: '擅长分析和解决复杂问题',
        bonus: '在逻辑谜题和算法优化类选择中获得额外智慧值'
    },
    creative: {
        name: '创造力',
        icon: '🎨',
        description: '善于创新和突破常规思维',
        bonus: '在创新性选择中获得额外智慧值'
    },
    empathy: {
        name: '共情能力',
        icon: '💝',
        description: '理解他人，建立深度连接',
        bonus: '在与角色互动时获得额外好感度'
    },
    tech: {
        name: '技术天赋',
        icon: '🔧',
        description: '快速掌握新技术和工具',
        bonus: '在技术类选择中获得额外智慧值'
    }
};

module.exports = {
    eras,
    levels,
    characters,
    specialties
};
