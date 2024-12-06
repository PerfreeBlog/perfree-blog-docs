---
title: 主题开发-创建主题
---
## 主题开发准备
在开发PerfreeBlog主题前,建议先在本机安装好PerfreeBlog, 将application.yaml配置文件中的`spring.profiles.active`的值调整为`dev`, 避免文件缓存
## 创建主题
在开发主题时,先要在PerfreeBlog安装目录resources/static/themes下新建你的主题文件夹,如myTheme。目录如下所示
```bash
myTheme # 主题目录
├── index.html # 首页
├── theme.yaml # 主题信息
```
在新建一个主题时,index.html和theme.yaml为必须文件,一个主题至少由这两个文件组成。 theme.yaml内容如下:
```yaml
# 主题名称
name: myTheme 
# 主题版本
version: 4.0.2
# 作者信息
author:
  # 作者名称
  name: Perfree
  # 作者邮箱
  email: perfree@126.com
  # 作者网站
  webSite: http://yinpengfei.com
# 主题描述
description: PerfreeBlog默认主题,一款简简单单的博客主题
# 主题更新url(后续版本的PerfreeBlog会用到, 目前可不写)
updateUrl: http://yinpengfei.com
# 主题预览图
screenshots: screenshots.jpg
# 主题类型(采用模板引擎开发为html, vue开发为vue)
type: html
# 主题设置类型(目前只支持json, 后续会支持html页面)
settingType: json
```
## 主题结构
在做完以上操作后,您的主题就可以在后台进行启用然后访问了,当然,这个主题只有首页才能访问,其他页面的文件还没创建,以下是完整的主题目录结构
```bash
myTheme # 主题目录
├── static # 静态资源目录(目录名不一定是必须是static,您可以任意起名, 但是注意静态资源引用地址, 要从static/themes开始, 如/static/themes/default/static/css/style.css)
├── archive.html # 文章归档页
├── article.html # 文章详情页
├── articleList.html # 文章列表页(当首页使用了文章分页指令时,默认翻页会采用该页面,同时如您访问某个分类或标签的url,也会采用该页面展示文章列表)
├── journalList.html # 动态列表页
├── page # 自定义页面存放目录(如用户在后台创建了访问别名slug为link的页面,当用户访问时,系统就会优先展示改目录下link.html,如不存在同名的html,则会展示通用的page.html)
├── ── link.html # 友链页
├── index.html # 首页
├── screenshots.jpg # 主题截图,会在后台管理所有主题显示当前截图(如不存在则显示默认图片)
├── search.html # 搜索结果页
├── categories.html # 分类页
├── tags.html # 标签页
├── page.html # 通用page页(如果未在page目录下存在对应自定义页面同名slug(访问别名)的html,则自定义页面会展示该页面)
├── theme.yaml # 主题信息
├── setting.json # 主题设置项
```
## 主题开发须知
目前PerfreeBlog提供了丰富的模板指令以及接口,建议您两者结合进行开发,更加方便快速