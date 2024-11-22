---
title: 主题开发-动态相关
---
## 简介
该文档描述了动态相关的所有指令
## 动态分页
动态分页使用#journalPage()指令, 使用方法如下
```html
 #journalPage(pageSize=10)
    #for(article: journalPage.data)
        动态信息: #(article)
    #else
        暂无动态
    #end
    #if(journalPage.pageTotal > 1)
        <nav class="m-pager-box wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
            #if(journalPage.hasPrevious)
                <a class="m-pager previous-page-btn" href="#(journalPage.previousUrl)">上一页</a>
            #end
            <span>#(journalPage.pageNo) / #(journalPage.pageTotal)</span>
            #if(journalPage.hasNext)
                <a class="m-pager next-page-btn" href="#(journalPage.nextUrl)">下一页</a>
            #end
        </nav>
    #end
#end
```