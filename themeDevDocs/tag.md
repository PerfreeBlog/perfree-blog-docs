---
title: 主题开发-标签相关
---
## 简介
该文档描述了标签相关的所有指令
## 标签分页
标签分页使用#tagsPage()指令, 使用方法如下
```html
#tagsPage(pageSize=100)
    #for(tag: tagsPage.data)
        标签信息: #(tag)
    #end
#end
```
## 热门标签
热门标签使用#hotTag()指令,使用方法如下
```html
 #hotTag(count=36)
    #if(tags != null && !isEmpty(tags))
        #for(tag : tags)
            标签信息: #(tag)
        #end
    #end
#end
```
## 标签下的文章
每个标签的url规则为/tag/xxxx,当访问/tag/xxxx时, 会自动渲染articleList.html, 在articleList.html只需要写了文章分页指令即可