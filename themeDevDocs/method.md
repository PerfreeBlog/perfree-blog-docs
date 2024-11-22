---
title: 主题开发-共享方法
---
## 介绍
共享方法可以在任意页面进行使用,简单的来说就是系统提供的一系列开放给模板使用的java方法,使用方法为`#(方法名(参数))`, 使用方式如下:
```html
#(isBlank('xxx'))
```
也可以结合逻辑判断使用
```html
#if(isBlank('xxx'))
#else
#end
```
## 方法汇总
名称|参数|返回值类型|描述
---|:--:|:--:|---:
option|(String key, String identification)|String|根据key和标识获取系统或主题设置项
option|(String key, String identification,String defaultValue)|String|根据key和标识获取系统或主题设置项,可设置默认值
optionCompare|(String key, String identification,String compareValue)|boolean|根据key和标识比较系统或主题设置项是否和compareValue一致
pluginIsStart|(String pluginId)|boolean|插件是否启动
fastSimpleUUID||String|生成一个uuid
parseJsonToArray|(String jsonStr)|JSONArray|解析json数组
parseJsonToObj|(String jsonStr)|Object|解析json
isBlank|(String str)|boolean| 字符串是否为空
isNotBlank|(String str)|boolean| 字符串是否不为空
