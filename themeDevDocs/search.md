---
title: 主题开发-搜索相关
---
## 简介
该文档描述了搜索相关的所有信息
## 搜索
文章搜索的规则是只要访问到"/article/search?title=搜索内容"url即可, 会自动渲染search.html中的内容, 在search.html中只要写了#articlePage()指令即可(该指令可参考文章相关-文章分页), 以下是一个搜索的案例
```html
<form action="/article/search" method="get">
    <a href="javascript:;" class="d-search-icon">
        <i class="fa-solid fa-search" aria-hidden="true"></i>
    </a>
    <input type="text" placeholder="搜索文章" name="title" class="d-search-input">
</form>
```