---
title: 主题开发-获取登录用户
---
## 简介
您可以使用#loginUser()指令来获取当前登录用户, 使用方式如下
```html
#loginUser()
    #if(null != loginUser)
        #(loginUser)
    #else
        未登录
    #end
#end
```
## 使用案例
```html
#loginUser()
    #if(null != loginUser)
        <li class="layui-nav-item">
            <a href="javascript:;">
                <img src=" #(isBlank(loginUser.avatar) ? '/static/public/images/user.png': loginUser.avatar)?s=32" alt="" class="user-img"> #(loginUser.userName ??)
            </a>
            <dl class="layui-nav-child">
                <dd><a href="/admin"><i class="fa-solid fa-briefcase"></i> 后台管理</a></dd>
                <dd><a href="/logout" data-pjax="no"><i class="fa-solid fa-sign-out"></i> 退出登录</a></dd>
            </dl>
        </li>
    #else
        <li class="layui-nav-item">
            <a href="/login" class="d-nav-item"><i class="fa-solid fa-sign-in-alt"></i>登录</a>
        </li>
    #end
#end
```