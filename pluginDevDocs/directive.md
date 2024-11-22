---
title: 插件开发-自定义模板指令
---

## 简介
在插件中您还可以自定义模板指令供主题使用, 在开发时需要继承com.perfree.commons.directive.BaseDirective类, 并增加@TemplateDirective("pluginDemo")和@Component注解, 其中@TemplateDirective的值为自定义指令的名称

## 案例
```java
package com.demo.directive;

import com.jfinal.template.Env;
import com.jfinal.template.io.Writer;
import com.jfinal.template.stat.Scope;
import com.perfree.commons.directive.BaseDirective;
import com.perfree.commons.directive.TemplateDirective;
import org.springframework.stereotype.Component;

@TemplateDirective("pluginDemo")
@Component
public class PluginDemoDirective extends BaseDirective {
    @Override
    public void exec(Env env, Scope scope, Writer writer) {
        write(writer, "这是一个来自插件自定义的指令");
    }
}

```