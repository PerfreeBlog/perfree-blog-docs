---
title: 主题开发-获取系统设置项
---
## 简介
在系统管理-> 系统设置中, 我们也提供了很多设置项供用户设置, 以下内容讲解了如何获取这些设置项的信息

## 获取设置项的值
其实获取这些设置项的值的方式与获取主题设置项的方式一致,都是采用#option获取,使用方式如下
```
#option('WEB_LOGO','system_setting','默认值')
```
参数解释: 第一个参数即为系统设置项的key, 第二个参数为固定的system_setting, 第三个参数为默认值(当获取的设置项为空时,会默认展示该值)

## 设置项Key一览
名称|类型|描述
---|:--:|---:
WEB_NAME|字符串|网站名称
WEB_ICO|字符串|网站ICO
WEB_LOGO|字符串|网站logo
WEB_TITLE|字符串|网站标题
WEB_SITE|字符串|网站域名
WEB_COPYRIGHT|字符串|版权信息
WEB_META_KEYWORD|字符串|网站关键词
WEB_META_DESC|字符串|网站描述
WEB_CUSTOM_HEAD|字符串|自定义head