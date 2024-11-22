---
title: 主题开发-分类相关
---
## 简介
该文档描述了分类相关的所有指令
## 分类分页
分类分页使用 #categoriesPage()指令,使用方式如下
```html
 #categoriesPage(pageSize=20)
    #for(category: categoriesPage.data)
        分类信息: #(category)
    #else
        暂无分类
    #end

    #if(categoriesPage.pageTotal > 1)
        <nav class="m-pager-box wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;margin-top: 15px">
            #if(categoriesPage.hasPrevious)
                <a class="m-pager previous-page-btn" href="#(categoriesPage.previousUrl)">上一页</a>
            #end
            <span>#(categoriesPage.pageNo) / #(categoriesPage.pageTotal)</span>
            #if(categoriesPage.hasNext)
                <a class="m-pager next-page-btn" href="#(categoriesPage.nextUrl)">下一页</a>
            #end
        </nav>
    #end
#end
```

## 获取所有分类
获取所有分类使用#categories()指令,使用方法如下
```html
#categories()
    #if(categories != null && !isEmpty(categories))
        #for(category: categories)
            分类信息: #(category)
        #end
    #end
#end
```
## 获取热门分类
获取热门分类使用#hotCategories()指令, 使用方法如下
```html
#hotCategories(count=4)
    #for(category : categories)
        分类信息: #(category)
    #end
#end
```

## 分类下的文章
每个分类的url规则为/category/xxxx,当访问/category/xxxx时, 会自动渲染articleList.html, 在articleList.html只需要写了文章分页指令即可