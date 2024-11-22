---
title: 插件开发-前端开发须知
---
## 前端开发须知
- 系统整体包括插件都采用模块化开发概念
- 每个模块都可以独立管理自己的路由
- 插件已默认引入了element plus ui组件, 无需再次引入
- 插件已默认引入了Axios, 无需再次引入
- 主系统已默认引入了pina并公开在全局, 直接使用window.pinia即可
- 理论上除了modules目录内的代码改动外, 其他代码无需改动
- 如果是开发环境, 您需要将plugin.yaml配置信息中的plugin.isDev修改为true, plugin.frontDevAddress修改为插件ui前端的实际地址