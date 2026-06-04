/**
 * AI服务 - 集成智谱GLM4.5-Flash API
 * 用于AI角色对话和动态内容生成
 */

class AIService {
    constructor() {
        this.apiKey = '325d6fa364954d2e871c30ba95b553bd.KBdQdqgJgELJBhnv';
        this.apiUrl = 'https://open.bigmodel.cn/api/paas/v4/chat/completions';
        this.model = 'glm-4.5-flash';
        this.conversationHistory = [];
        this.maxHistoryLength = 10;
    }

    /**
     * 发送消息到AI
     * @param {string} message - 用户消息
     * @param {string} systemPrompt - 系统提示词（角色设定）
     * @param {boolean} useHistory - 是否使用对话历史
     * @returns {Promise<string>} AI回复
     */
    async sendMessage(message, systemPrompt = '', useHistory = false) {
        try {
            const messages = [];
            
            // 添加系统提示词
            if (systemPrompt) {
                messages.push({
                    role: 'system',
                    content: systemPrompt
                });
            }

            // 添加历史对话
            if (useHistory && this.conversationHistory.length > 0) {
                messages.push(...this.conversationHistory);
            }

            // 添加当前用户消息
            messages.push({
                role: 'user',
                content: message
            });

            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`
                },
                body: JSON.stringify({
                    model: this.model,
                    messages: messages,
                    temperature: 0.7,
                    max_tokens: 500,
                    top_p: 0.9
                })
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                console.error('API请求失败:', errorData);
                return this.getFallbackResponse(message);
            }

            const data = await response.json();
            
            if (data.choices && data.choices[0] && data.choices[0].message) {
                const aiResponse = data.choices[0].message.content;
                
                // 保存对话历史
                if (useHistory) {
                    this.conversationHistory.push(
                        { role: 'user', content: message },
                        { role: 'assistant', content: aiResponse }
                    );
                    
                    // 限制历史长度
                    if (this.conversationHistory.length > this.maxHistoryLength * 2) {
                        this.conversationHistory = this.conversationHistory.slice(-this.maxHistoryLength * 2);
                    }
                }
                
                return aiResponse;
            } else {
                console.error('API响应格式异常:', data);
                return this.getFallbackResponse(message);
            }
        } catch (error) {
            console.error('AI服务错误:', error);
            return this.getFallbackResponse(message);
        }
    }

    /**
     * 与游戏角色对话
     * @param {string} characterId - 角色ID
     * @param {string} message - 玩家消息
     * @returns {Promise<string>} 角色回复
     */
    async chatWithCharacter(characterId, message) {
        const character = GameData.characters.find(c => c.id === characterId);
        if (!character) {
            return '角色不存在';
        }

        const systemPrompt = `${character.prompt}

当前情境：这是"AI穿越之旅"游戏，玩家是一位来自未来的时间旅行者，正在与你一起工作。
请保持角色设定，用中文回复。回复要简洁有趣，适合游戏对话，不超过150字。
可以适当加入emoji增加趣味性。`;

        return await this.sendMessage(message, systemPrompt, true);
    }

    /**
     * 生成场景描述
     * @param {string} scene - 场景信息
     * @returns {Promise<string>} 场景描述
     */
    async generateSceneDescription(scene) {
        const systemPrompt = `你是一位游戏叙事设计师，擅长创作引人入胜的场景描述。
请用生动的中文描述游戏场景，不超过200字。要富有画面感和代入感。`;

        const prompt = `请描述以下游戏场景：\n${scene}`;
        return await this.sendMessage(prompt, systemPrompt, false);
    }

    /**
     * 生成选择结果
     * @param {string} choice - 选择内容
     * @param {string} context - 上下文
     * @returns {Promise<string>} 结果描述
     */
    async generateChoiceResult(choice, context) {
        const systemPrompt = `你是一位游戏剧情设计师。请根据玩家的选择生成有趣的结果描述。
用中文回复，不超过150字。要体现选择的后果和对故事的影响。`;

        const prompt = `上下文：${context}\n玩家选择：${choice}\n请生成这个选择的结果。`;
        return await this.sendMessage(prompt, systemPrompt, false);
    }

    /**
     * 获取备用回复（当API不可用时）
     * @param {string} message - 用户消息
     * @returns {string} 备用回复
     */
    getFallbackResponse(message) {
        const fallbacks = [
            '这是一个非常有趣的问题！让我想想...',
            '你的观点很有见地，我很赞同。',
            '从历史的角度来看，这确实是一个重要的时刻。',
            '让我们一起探索这个问题的答案吧！',
            '你的思考方式很独特，这让我很受启发。'
        ];
        return fallbacks[Math.floor(Math.random() * fallbacks.length)];
    }

    /**
     * 清空对话历史
     */
    clearHistory() {
        this.conversationHistory = [];
    }

    /**
     * 检查API是否可用
     * @returns {Promise<boolean>}
     */
    async checkAvailability() {
        try {
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`
                },
                body: JSON.stringify({
                    model: this.model,
                    messages: [{ role: 'user', content: '你好' }],
                    max_tokens: 10
                })
            });
            return response.ok;
        } catch {
            return false;
        }
    }
}

// 创建全局AI服务实例
const aiService = new AIService();

// 导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AIService;
}
