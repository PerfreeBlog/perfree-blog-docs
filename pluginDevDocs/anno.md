---
title: 插件开发-常用注解
---
## 简介
在插件开发过程中, 您可以像普通应用程序编码一样, 编写controller, service,mapper等,我们支持了一系列注解的使用, 如下所示(仅展示常用)
- @Controller
- @RestController
- @RequestMapping, @PostMapping ,@GetMapping...
- @Resource
- @PluginPreAuthorize("@ss.hasPermission('admin:pluginDemo:query')")  该注解用于权限认证, admin:pluginDemo:query为权限字符串
- @Mapper
- @Service
- @Component
- @Repository
- ...