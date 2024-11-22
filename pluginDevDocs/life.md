---
title: 插件开发-生命周期
---

## 简介
在插件系统中, 插件的安装/卸载/更新/启动/禁用这些状态都可以在插件内部接收到, 在使用创建插件工具类时, 我们默认为您创建了一个PluginEventService类, 用于监听插件的事件变更,您可以在每一个事件方法中编写您自己的代码逻辑
```java
package com.official;

import com.perfree.plugin.BasePluginEvent;
import org.springframework.stereotype.Service;

@Service
public class PluginEventService implements BasePluginEvent {

    @Override
    public void onStart() {
    }

    @Override
    public void onStop() {
    }

    @Override
    public void onUpdate() {
    }

    @Override
    public void onInstall() {
    }

    @Override
    public void onUnInstall() {
    }
}

```