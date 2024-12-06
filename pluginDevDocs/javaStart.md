---
title: 插件开发-后端开发须知
---

## 后端开发须知
- 您需要将PerfreeBlog中application.yaml配置文件中的`spring.profiles.active`的值调整为`dev`
- 如果为开发环境, 您需要将plugin.yaml配置信息中的`plugin.isDev`修改为true, `plugin.frontDevAddress`修改为插件ui前端的实际地址
- 插件创建完毕后请先执行`maven clean`及`maven install`
![](./images/1732261789878.jpg)

- 插件源码有改动会自动加载, 无需重启程序, 您只需在每次修改完后在插件目录右键, `rebuild`下即可, 如下图
![](./images/1732261886835.jpg)

- 如您插件新增了第三方依赖, 请先停止程序, 执行`maven clean`及`maven install`后再启动程序
- 如遇到问题,可尝试先卸载插件, 之后执行`maven clean`及`maven install`后再启动程序