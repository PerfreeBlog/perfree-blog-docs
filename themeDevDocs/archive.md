---
title: 主题开发-文章归档相关
---
## 简介
该文档描述了文章归档相关的所有指令

## 文章归档分页
文章归档分页使用#archivePage()指令, 使用方式如下
```html
#archivePage(pageSize=12)
    #for(archive: archivePage.data)
        周期: #(archive.date??)
        #for(archiveArticle: archive.articles??)
            文章信息: #(archiveArticle)
        #end
    #end
    #if(archivePage.pageTotal > 1)
        <nav class="m-pager-box wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
            #if(archivePage.hasPrevious)
                <a class="m-pager previous-page-btn" href="#(archivePage.previousUrl)">上一页</a>
            #end
            <span>#(archivePage.pageNo) / #(archivePage.pageTotal)</span>
            #if(archivePage.hasNext)
                <a class="m-pager next-page-btn" href="#(archivePage.nextUrl)">下一页</a>
            #end
        </nav>
    #end
#end
```