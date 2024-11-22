---
title: 主题开发-使用vue开发
---
## 简介
该文档讲解了如何使用vue进行主题开发

## 创建主题
与普通主题一样, 同样要在PerfreeBlog安装目录resources/static/themes下新建你的主题文件夹,如myTheme, 您也可以使用vite来创建, 保持目录结构如下即可
```bash
myTheme # 主题目录
├── public # 公共资源
├── ── screenshots.jpg # 预览图
├── ── setting.json # 主题设置项
├── ── theme.yaml # 主题信息
├── src # 源码目录
├── index.html # 入口
├── package.json # 依赖
├── vite.config.js # vite配置
```
theme.yaml, 参考如下
```yaml
name: myTheme
version: 1.0.0
author:
  name: Perfree
  email: perfree@126.com
  webSite: http://yinpengfei.com
description: 主题描述
updateUrl: http://yinpengfei.com
screenshots: screenshots.jpg
type: vue
settingType: json
```

修改vite.config.js, 参考如下
```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
  ],
    server: {
        port: 4202,
        host: '0.0.0.0',
        open: false,
        proxy: {
            "/api": {
                target: 'http://127.0.0.1:8080/api',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '')
            },
            "/static": {
                target: 'http://127.0.0.1:8080/static',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/static/, '')
            }
        }
    },
    base: '/',
    build:{
        outDir: "dist/ele",
        assetsDir: 'static',
        modulePreload: true,
        emptyOutDir: true,
    }
})
```

## 注意事项
1. 要保证项目打包后根目录存在index.html和theme.yaml文件
2. theme.yaml文件中的type为vue
3. 路由尽量和普通主题保持一致


## 案例
您可参考[https://github.com/PerfreeBlog/ele](https://github.com/PerfreeBlog/ele)进行开发,这是一款使用vue+element plus开发的PerfreeBlog主题