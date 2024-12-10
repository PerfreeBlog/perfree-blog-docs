import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    server: {
      proxy: {
        // 代理 /api 开头的请求到后端
        '/api': {
          target: 'https://www.yinpengfei.com/api', // 后端服务地址
          changeOrigin: true, // 支持跨域
          rewrite: (path) => path.replace(/^\/api/, ''), // 去掉 /api 前缀
        },
        '/attach': {
          target: 'https://www.yinpengfei.com/attach', // 后端服务地址
          changeOrigin: true, // 支持跨域
          rewrite: (path) => path.replace(/^\/attach/, ''), // 去掉 /api 前缀
        },
      },
    },
  },
  title: " PerfreeBlog - 一款Java开发的博客/CMS系统 - 我的学习笔记2",
  description: "PerfreeBlog文档",
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', type: 'icon', href: '/favicon.ico' }],
  ],
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true
    }
  },
  themeConfig: {
    siteTitle: 'PerfreeBlog',
    logo: { src: '/logo.png', width: 24, height: 24 },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '📖 使用文档', link: '/useDocs', activeMatch: '/useDocs' },
      { text: '🎨 主题仓库', link: '/theme', activeMatch: '/theme/' },
      { text: '🔌 插件仓库', link: '/plugin', activeMatch: '/plugin/' },
      { 
        text: '💻 开发文档',
        items: [
          { text: '🎨 主题开发', link: '/themeDevDocs', activeMatch: '/themeDevDocs' },
          { text: '🔌 插件开发', link: '/pluginDevDocs', activeMatch: '/pluginDevDocs' }
        ] 
      },
      { text: '🔖 案例网站', link: '/case', activeMatch: '/case/' },
      // { text: '🎨 主题开发', link: '/themeDevDocs', activeMatch: '/themeDevDocs' },
      // { text: '🔌 插件开发', link: '/pluginDevDocs', activeMatch: '/pluginDevDocs' },
      // { text: '🌏 官网', link: 'https://www.perfree.org.cn'}
    ],
    search: {
      provider: 'local'
    },
    sidebar: {
      '/useDocs': [
        {
          text: '🕹 安装',
          items: [
            { text: '快速开始', link: '/useDocs/' },
            { text: 'jar安装', link: '/useDocs/jar' },
            { text: 'Docker安装', link: '/useDocs/docker' },
            { text: 'DockerCompose安装', link: '/useDocs/dockerCompose' },
            { text: '目录结构', link: '/useDocs/dir' }, 
            { text: '更新教程', link: '/useDocs/update' }
          ]
        },
        {
          text: '👉🏻 使用',
          items: [
            { text: '主题相关', link: '/useDocs/themes' },
            { text: '插件相关', link: '/useDocs/plugins' },
            { text: '附件相关', link: '/useDocs/attach' },
            { text: '邮箱配置', link: '/useDocs/email' },
            { text: '菜单配置', link: '/useDocs/menu' },
            { text: '自定义页面', link: '/useDocs/page' },
            { text: '权限相关', link: '/useDocs/permission' },
            { text: '系统设置', link: '/useDocs/setting' },
          ]
        }
      ],
      '/themeDevDocs':[
        {
          text: '✨ 准备工作',
          items: [
            { text: '创建主题', link: '/themeDevDocs/' },
            { text: '模板语法', link: '/themeDevDocs/grammar' },
          ]
        },
        {
          text: '☀️ 公共信息',
          items: [
            { text: '全局变量', link: '/themeDevDocs/variable' },
            { text: '主题设置项', link: '/themeDevDocs/setting' },
            { text: '获取系统设置项', link: '/themeDevDocs/systemSetting' },
            { text: '获取菜单', link: '/themeDevDocs/menu' },
            { text: '获取登录用户', link: '/themeDevDocs/loginUser' },
            { text: '共享方法', link: '/themeDevDocs/method' },
          ]
        },
        {
          text: '🌈 页面相关',
          items: [
            { text: '文章相关', link: '/themeDevDocs/article' },
            { text: '分类相关', link: '/themeDevDocs/category' },
            { text: '标签相关', link: '/themeDevDocs/tag' },
            { text: '动态相关', link: '/themeDevDocs/journal' },
            { text: '文章归档', link: '/themeDevDocs/archive' },
            { text: '搜索相关', link: '/themeDevDocs/search' },
            { text: '评论相关', link: '/themeDevDocs/comment' },
            { text: '友链相关', link: '/themeDevDocs/link' },
            { text: '自定义页面相关', link: '/themeDevDocs/page' },
          ]
        },
        {
          text: '🪐 更多',
          items: [
            { text: 'Api接口', link: '/themeDevDocs/api' },
            { text: '使用Vue开发', link: '/themeDevDocs/vue' },
            { text: '主题打包', link: '/themeDevDocs/package' },
            { text: '主题投递', link: '/themeDevDocs/post' },
          ]
        },
      ],
      '/pluginDevDocs': [
        {
          text: '📜 准备工作',
          items: [
            { text: '创建插件', link: '/pluginDevDocs/' },
            { text: '插件案例', link: '/pluginDevDocs/demo' },
          ]
        },
        {
          text: '💻 后端',
          items: [
            { text: '开发须知', link: '/pluginDevDocs/javaStart' },
            { text: '插件sql', link: '/pluginDevDocs/sql' },
            { text: '生命周期', link: '/pluginDevDocs/life' },
            { text: '常用注解', link: '/pluginDevDocs/anno' },
            { text: '插件代理', link: '/pluginDevDocs/proxy' },
            { text: '插件拦截器', link: '/pluginDevDocs/intercept' },
            { text: '插件自定义模板指令', link: '/pluginDevDocs/directive' },
            { text: '插件websocket', link: '/pluginDevDocs/websocket' },
            { text: '代码生成', link: '/pluginDevDocs/codeGen' },
          ]
        },
        {
          text: '📱 前端',
          items: [
            { text: '开发须知', link: '/pluginDevDocs/uiStart' },
            { text: '创建页面', link: '/pluginDevDocs/createPage' },
            { text: '页面开发', link: '/pluginDevDocs/pageDev' },
          ]
        },
        {
          text: '🧾 更多',
          items: [
            { text: '插件打包', link: '/pluginDevDocs/package' },
            { text: '插件投递', link: '/pluginDevDocs/post' },
          ]
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PerfreeBlog/PerfreeBlog' }
    ],
    footer: {
      message: 'Released under the <a href="https://github.com/PerfreeBlog/PerfreeBlog/blob/develop-4.0.0/LICENSE">GPL-3.0 License</a>.',
      copyright: 'Copyright ©PerfreeBlog <a href="https://beian.miit.gov.cn">豫ICP备18035337号-4</a>'
    }
  }
})
