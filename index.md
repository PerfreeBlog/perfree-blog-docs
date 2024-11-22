---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "PerfreeBlog"
  tagline: ✨一款Java开发的博客/CMS系统, 支持主题及扩展插件, 助您更加灵活的构建站点✨
  image:
    src: '/logo.png'
    alt: PerfreeBlog
  actions:
    - theme: brand
      text: 快速开始
      link: /useDocs
    - theme: alt
      text: 源码地址
      link: https://github.com/PerfreeBlog/PerfreeBlog

features:
  - icon: 📝
    title: 代码开源
    details: 系统在GitHub及Gitee上完全开源,且处于积极维护状态,您也可以在上面提交您的问题或者参与代码贡献。
  - icon: 🚀
    title: 快速高效
    details: 支持多种编辑器,易读更易写,编辑器支持一键插入视频、音频、图片、附件等,给您带来全新的写作体验
  - icon: 🎨
    title: 主题系统
    details: 完善的主题系统,支持主题自定义配置,支持在线安装、切换、编辑、预览主题,无需开发工具,在后台即可创作专属于你的主题
  - icon: 🔌
    title: 插件系统
    details: 强大的扩展插件功能,更近一步满足您的需求,插件开发简单,与开发SpringBoot程序基本一致,无需学习成本
---
 <div class="h-d-box">
    <img src="/plugins.png" class="shadow-img">
    <div class="h-d-b-desc-box h-d-desc-right">
        <h3>扩展插件支持</h3>
        <div class="text-lg">强大的扩展插件功能,更近一步满足您的需求,扩展插件支持生产/开发环境动态插拔, 插件开发简单,与开发SpringBoot程序基本一致,无需学习成本</div>
    </div>
</div>

<div class="h-d-box">
    <div class="h-d-b-desc-box h-d-desc-left">
        <h3>主题支持</h3>
        <div class="text-lg">提供完善的主题管理机制,用于构建网站前台界面, 支持在线安装、切换、编辑、预览主题, 可以根据自己的喜好选择不同类型的主题模板来定制化自己的网站样式</div>
    </div>
    <img src="/themes.png" class="shadow-img">
</div>

<div class="h-d-box">
    <img src="/article.png" class="shadow-img">
    <div class="h-d-b-desc-box h-d-desc-right">
        <h3>文章编辑器</h3>
        <div class="text-lg">内置多种markdown编辑器,支持插入图片、视频、音频以及各种附件, 每篇文章都配备SEO标题、SEO关键字、SEO描述功能，便于文章抓取与排名</div>
    </div>
</div>

<div class="h-d-box">
    <div class="h-d-b-desc-box h-d-desc-left">
        <h3>每日动态</h3>
        <div class="text-lg">支持动态功能,每天记录下生活中的美好事件, 支持插入Emoji表情、图片、视频、音频以及各种附件</div>
    </div>
    <img src="/journal.png" class="shadow-img">
</div>

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

}

.shadow-img{
    width: 100%;
    margin-top: 20px;
    box-shadow: rgb(0 0 0 / 8%) 0px 0px 3px 3px;
    border-radius: 8px;
    border: 1px solid #dddddd;
}

.h-d-box{
    margin-top: 80px;
    display: flex;
}
.h-d-box img{
    width: 65%;
}
.h-d-b-desc-box{
    padding-top: 30px;
    width: calc(35% - 30px);
}
.h-d-desc-right{
    margin-left: 30px;
}
.h-d-desc-left{
    margin-right: 30px;
}
.h-d-b-desc-box h3{
    margin-bottom: 30px;
    font-size: 22px;
}
@media (max-width: 800px) {
  .h-d-box{
    margin-top: 80px;
    display: block;
  }
  .h-d-desc-right{
    margin:0
  }
  .h-d-desc-left{
    margin:0
  }
  .h-d-b-desc-box{
    width: 100%
  }
  .h-d-box img{
    width: 100%;
}
}

@media (min-width: 640px) {
  :root {
  }
}

@media (min-width: 960px) {
  :root {
  }
}
</style>