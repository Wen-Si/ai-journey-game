/**
 * API客户端 - 与后端服务通信
 * 支持多用户多实例的游戏客户端
 */

class APIClient {
    constructor() {
        // 生产环境使用Render部署的后端地址
        this.baseUrl = window.location.hostname === 'localhost' 
            ? window.location.origin 
            : 'https://ai-journey-game.onrender.com';
        this.userId = null;
        this.sessionId = null;
        this.socket = null;
    }

    // 初始化Socket.io连接
    initSocket(sessionId) {
        if (this.socket) {
            this.socket.disconnect();
        }

        this.socket = io(this.baseUrl);
        
        this.socket.on('connect', () => {
            console.log('Socket连接成功');
            if (sessionId) {
                this.socket.emit('join-session', sessionId);
            }
        });

        this.socket.on('game-event', (data) => {
            console.log('收到游戏事件:', data);
            // 触发游戏事件处理
            if (window.game && window.game.handleSocketEvent) {
                window.game.handleSocketEvent(data);
            }
        });

        this.socket.on('disconnect', () => {
            console.log('Socket断开连接');
        });
    }

    // 通用请求方法
    async request(endpoint, options = {}) {
        const url = `${this.baseUrl}/api${endpoint}`;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        };

        if (config.body && typeof config.body === 'object') {
            config.body = JSON.stringify(config.body);
        }

        try {
            const response = await fetch(url, config);
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error || `请求失败: ${response.status}`);
            }
            
            return data;
        } catch (error) {
            console.error('API请求错误:', error);
            throw error;
        }
    }

    // ============ 用户管理 ============

    // 创建用户
    async createUser(name) {
        const data = await this.request('/users', {
            method: 'POST',
            body: { name }
        });
        this.userId = data.userId;
        return data;
    }

    // 获取用户信息
    async getUser(userId) {
        return await this.request(`/users/${userId || this.userId}`);
    }

    // ============ 会话管理 ============

    // 创建游戏会话
    async createSession(playerName, specialty) {
        const data = await this.request('/sessions', {
            method: 'POST',
            body: {
                userId: this.userId,
                playerName,
                specialty
            }
        });
        this.sessionId = data.sessionId;
        
        // 初始化Socket连接
        this.initSocket(this.sessionId);
        
        return data;
    }

    // 获取会话信息
    async getSession(sessionId) {
        return await this.request(`/sessions/${sessionId || this.sessionId}`);
    }

    // ============ 游戏逻辑 ============

    // 获取所有关卡
    async getLevels() {
        return await this.request('/levels');
    }

    // 获取当前关卡
    async getCurrentLevel() {
        return await this.request(`/sessions/${this.sessionId}/level`);
    }

    // 提交选择
    async submitChoice(choiceIndex) {
        return await this.request(`/sessions/${this.sessionId}/choice`, {
            method: 'POST',
            body: { choiceIndex }
        });
    }

    // 进入下一关
    async nextLevel() {
        return await this.request(`/sessions/${this.sessionId}/next-level`, {
            method: 'POST'
        });
    }

    // ============ AI对话 ============

    // 与角色对话
    async chatWithCharacter(characterId, message) {
        return await this.request(`/sessions/${this.sessionId}/chat`, {
            method: 'POST',
            body: { characterId, message }
        });
    }

    // 生成场景描述
    async generateScene(scene) {
        return await this.request(`/sessions/${this.sessionId}/scene`, {
            method: 'POST',
            body: { scene }
        });
    }

    // ============ Socket事件 ============

    // 发送游戏事件
    emitGameEvent(event, payload) {
        if (this.socket) {
            this.socket.emit('game-event', {
                sessionId: this.sessionId,
                event,
                payload
            });
        }
    }

    // 断开连接
    disconnect() {
        if (this.socket) {
            this.socket.disconnect();
            this.socket = null;
        }
    }
}

// 创建全局API客户端实例
const apiClient = new APIClient();
