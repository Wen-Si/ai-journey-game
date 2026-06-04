# 🎮 AI穿越之旅

> 玩游戏 · 学AI · 探索智能的边界

一款关于人工智能发展史的RPG教育游戏。玩家扮演一位来自未来的时间旅行者，穿越回AI发展的关键历史节点，与图灵、麦卡锡、辛顿等AI先驱并肩工作，经历从机械计算器到ChatGPT的完整AI发展历程。

## 🌟 游戏特色

- **🎯 教育意义**：通过游戏学习AI发展史，收集知识点
- **🤖 AI角色对话**：与历史人物进行智能对话（基于GLM4.5-Flash）
- **🎨 赛博朋克风格**：AI科技感的视觉设计
- **👥 多用户支持**：注册登录系统，独立游戏进度
- **📱 响应式设计**：支持桌面和移动设备

## 🚀 在线游玩

### 前端页面（GitHub Pages）
🔗 **https://wen-si.github.io/ai-journey-game/auth.html**

### 后端服务（Render）
🔗 **https://ai-journey-game.onrender.com**

## 📁 项目结构

```
ai-journey-game/
├── auth.html              # AI风格登录注册页面
├── index.html             # 游戏主页面
├── styles.css             # 游戏样式
├── game-data.js           # 游戏数据配置
├── api-client.js          # API通信客户端
├── game-online.js         # 在线版游戏逻辑
├── game.js                # 离线版游戏逻辑
├── backend/               # 后端服务
│   ├── server.js          # Express服务器
│   ├── game-data.js       # 后端游戏数据
│   └── package.json       # 依赖配置
└── .github/workflows/     # GitHub Actions部署配置
```

## 🛠️ 本地开发

### 1. 克隆仓库
```bash
git clone https://github.com/Wen-Si/ai-journey-game.git
cd ai-journey-game
```

### 2. 安装后端依赖
```bash
cd backend
npm install
```

### 3. 启动服务器
```bash
npm start
```

### 4. 打开游戏
浏览器访问 `http://localhost:3000/auth.html`

## 🎮 游戏玩法

1. **注册/登录**：创建账号或使用已有账号登录
2. **创建角色**：选择你的专长（逻辑/创造/共情/技术）
3. **穿越历史**：经历8个AI发展史上的重要时刻
4. **做出选择**：每个关卡面临不同的选择，影响游戏结局
5. **AI对话**：与历史人物进行智能对话
6. **收集知识**：学习AI发展史的重要知识点
7. **解锁结局**：根据你的选择获得不同的游戏结局

## 📚 游戏关卡

| 关卡 | 年份 | 主题 | 角色 |
|------|------|------|------|
| 1 | 1642 | 机械之心 | 帕斯卡 |
| 2 | 1822 | 差分机的梦想 | 巴贝奇 |
| 3 | 1943 | 图灵的密码 | 图灵 |
| 4 | 1956 | 达特茅斯的召唤 | 麦卡锡 |
| 5 | 1997 | 深蓝的决战 | IBM团队 |
| 6 | 2006 | 深度学习的黎明 | 辛顿 |
| 7 | 2017 | Transformer革命 | Google团队 |
| 8 | 2022 | GPT与ChatGPT | OpenAI团队 |

## 🔧 技术栈

- **前端**：HTML5 + CSS3 + JavaScript
- **后端**：Node.js + Express + Socket.io
- **AI服务**：智谱GLM4.5-Flash API
- **部署**：GitHub Pages + Render

## 🤝 贡献

欢迎提交Issue和Pull Request！

## 📄 许可证

MIT License

---

Made with ❤️ for AI Education
