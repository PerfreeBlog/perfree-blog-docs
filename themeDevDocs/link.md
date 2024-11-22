---
title: 主题开发-友链相关
---
## 简介
该文档描述了友链相关的所有信息

## 友链分页
友链分页采用#linkPage()指令, 使用方式如下

```html
#linkPage(pageSize=99)
    #for(link: linkPage.data)
        友链信息: #(link)
    #end
#end
```
## 友链页面
一般来说, 友链会存在单独的页面, 您可参考自定义页面相关的教程, 配合自定义页面实现单独的友链页
