---
title: 主题开发-自定义页面相关
---
## 简介
关于自定义页面, 您可以理解为除了固定的首页/文章页/分类页等页面之外, 允许主题扩展更多的页面出来, 为了支持自定义页面, 我们可以在主题目录下创建page.html,来支持所有的自定义页面, 在自定义页面中可以通过#(article)来获取所有的信息; 

-------

当然自定义页面也支持所有自定义页面的同时,我们还可以利用主题实现某个页面的自定义化, 比如友链页, 在主题目录新建page目录, 在page目录中新建link.html, 这时访问/page/link会自动渲染该页面;

-------

让我们按照以下步骤更加深入的理解下自定义页面:
1. 在系统中创建自定义页面, 标题为关于我, 访问地址别名为about
2. 访问下/page/about, 如果主题内存在page.html, 那么就会渲染page.html来展示我们的信息
3. 在主题的page目录内新建about.html
4. 再次访问/page/about, 就会渲染about.html

## 获取所有自定义页面
获取所有自定义页面使用#pages()指令, 使用方式如下
```html
#pages()
    #for(article: pages)
        页面信息: #(article)
    #end
#end
```
## 自定义页面的内容
1. 在每个自定义页面中,我们都可以通过#(article)来获取用户创建页面时填写的信息
2. 在每个自定义页面中, 我们都可以使用评论插件来加载评论信息