---
title: 主题开发-获取菜单
---

## 简介
菜单的获取使用#menus指令,可获取所有的菜单信息,使用方式如下
```html
#menus()
    #for(menu : menus)
        #(menu)
    #end
#end
```

## 使用案例
```html
#menus()
    #for(menu : menus)
        <li class="layui-nav-item">
            <a href="#(menu.url ??)" data-href="#(menu.url ??)" target="#(menu.target == 0 ? '_self' : '_blank')" class="d-nav-item ">
                <i class="#(menu.icon ??)"></i>#(menu.name ??)
            </a>
            #if(menu.children != null && !isEmpty(menu.children))
                <dl class="layui-nav-child">
                    #for(children: menu.children)
                        <dd><a href="#(children.url)" target="#(children.target == 0 ? '_self' : '_blank')"> #(children.name ??)</a></dd>
                    #end
                </dl>
            #end
        </li>
    #end
#end
```