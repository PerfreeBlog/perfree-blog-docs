---
title: 插件开发-页面开发
---
## 页面开发
创建完模块及页面后, 实际开发就与普通vue项目一致了, 您也可以参考主程序中的任意一个模块进行开发

## 附件选择器
在主程序中, 我们已将文件选择器注册为全局组件, 您可以直接使用
```vue
<attach-select-input :attach-type="'img'" :enable-input="true" :placeholder="'请选择或输入封面图地址'" v-model:model-value="addForm.thumbnail"></attach-select-input>
```
## 文章编辑器
在主程序中, 我们已将文章编辑器注册为全局组件, 您可以直接使用
```vue
<custom-editor :editor-type="'Vditor'"  :init-value="addForm.appDescription" :height="'520px'" ref="editorRef"></custom-editor>
```