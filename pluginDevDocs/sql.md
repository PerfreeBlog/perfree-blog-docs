---
title: 插件开发-插件sql
---
## 简介
在生成的插件中, resources/sql目录中存放了install.sql和uninstall.sql文件, 这两个sql会在插件安装和卸载时分别执行,您可以将您的数据库建表语句,创建菜单语句等存放至install.sql文件中, 删除表语句存放至uninstall.sql文件中, 这样就可以直接实现表自动创建和删除操作, 同时也支持更新sql, 如update-1.0.1.sql,update-1.0.2.sql, 会自动按照当前版本进行执行

## 案例
以下是一个install.sql的案例

```sql
INSERT INTO `p_menu` (
`id`,`pid`,`name`,`url`,`icon`,
`menuType`,`pluginId`,`component`,`componentName`,`moduleName`,`type`
)
VALUES(
'2cadaa1f51f042a3956f0d64e5cc7b76','-1','测试管理','/admin/pluginDemo','fa-solid fa-feather-alt',
1,  'perfree-plugin-demo'  ,'/view/PluginDemoView','pluginDemo','PluginDemo', 1
);
```