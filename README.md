# zjc 个人技术博客

一个使用纯 HTML5 + CSS + JavaScript 构建的个人技术博客，零依赖。

## 特性
- 📱 响应式设计，适配手机与桌面
- 🌙 暗黑模式切换（自动记忆偏好）
- ⚡ 零依赖，纯原生实现
- 📝 文章列表与文章详情页

## 目录结构
```
├── index.html        # 首页（文章列表）
├── css/style.css     # 样式与设计系统
├── js/main.js        # 交互脚本（主题切换、列表渲染）
└── posts/            # 博客文章
```

## 本地预览
直接用浏览器打开 `index.html`，或在项目目录运行：
```bash
python3 -m http.server 8000
```
然后访问 http://localhost:8000

## 部署
可托管在 GitHub Pages 等任意静态服务上。
