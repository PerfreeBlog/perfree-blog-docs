---
title: 主题开发-文章相关
---
## 简介
该文档描述了文章相关的所有指令
## 文章分页
文章分页使用 #articlePage()指令,使用方式如下
```html
#articlePage(pageSize=10)
    #for(article: articlePage.data)
        文章信息: #(article)
    #else
        暂无文章
    #end
    #if(articlePage.pageTotal > 1)
        <nav class="m-pager-box wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
            #if(articlePage.hasPrevious)
                <a class="m-pager " href="#(articlePage.previousUrl)">上一页</a>
            #end
            <span class="page-num">#(articlePage.pageNo) / #(articlePage.pageTotal)</span>
            #if(articlePage.hasNext)
                <a class="m-pager next-page-btn" href="#(articlePage.nextUrl)">下一页</a>
            #end
        </nav>
    #end
#end
```
## 热门文章
热门文章使用#hotArticle()指令, 参数可传type和count, type为热门文章的排序类型(comment: 评论最多, great: 点赞最多, 不传则为浏览量最多), count为获取的条数, 使用方式如下
```html
 #hotArticle(count=3, type = 'comment')
    #for(article: articles)
        文章信息: #(article)
    #end
 #end
```
## 最近更新的文章
最近更新的文章使用#latestArticle()指令, 参数可传count(获取的条数), 使用方式如下
```html
#latestArticle(count=3)
    #for(article: articles)
        文章信息: #(article)
    #end
 #end
```
## 获取当前文章
> 注意: 只能在文章页使用

在文章article页面, 您可以直接使用#(article)获取文章信息

## 下一篇文章
> 注意: 只能在文章页使用

下一篇文章使用#nextArticle()指令获取, 使用方式如下
```html
#nextArticle()
    #if(nextArticle)
        文章信息: #(nextArticle)
    #end
#end
```

## 上一篇文章
> 注意: 只能在文章页使用

上一篇文章使用#preArticle()指令获取, 使用方式如下
```html
#preArticle()
    #if(preArticle)
        文章信息: #(preArticle)
    #end
#end
```
