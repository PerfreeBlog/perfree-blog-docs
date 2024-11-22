---
title: 插件开发-插件代理
---

## 简介
插件支持一系列代理方法供插件使用,提高插件的灵活性,在开发过程中,只需继承指定的代理类,并增加@Component注解,就可以在特定的时机执行插件的自定义代码,比如修改渲染后的html

## Html渲染代理
Html渲染代理类HtmlRenderProxy: 插件可继承该类重写其中的方法,获取渲染的html Document对象进行操作, 内置代理方法如下:
```java
/**
 * Html渲染代理: 插件可继承该类,获取渲染的html Document对象进行操作
 */
public abstract class HtmlRenderProxy {

    /**
     * 修改渲染后的html Document
     *
     * @param document html document对象
     * @param response HttpServletResponse
     * @param request  HttpServletRequest
     * @return 修改后的 html Document
     */
    public Document editDocument(Document document, HttpServletResponse response, HttpServletRequest request) {
        return document;
    }

    /**
     * 修改渲染后的html Document(该方法只有访问地址非/admin起始时才会调用)
     *
     * @param document html document对象
     * @param response HttpServletResponse
     * @param request  HttpServletRequest
     * @return 修改后的 html Document
     */
    public Document editFrontDocument(Document document, HttpServletResponse response, HttpServletRequest request) {
        return document;
    }

    /**
     * 修改渲染后的html Document(该方法只有访问地址为/admin起始时才会调用)
     *
     * @param document html document对象
     * @param response HttpServletResponse
     * @param request  HttpServletRequest
     * @return 修改后的 html Document
     */
    public Document editAdminDocument(Document document, HttpServletResponse response, HttpServletRequest request) {
        return document;
    }
}

```

使用案例, 网页变灰
```java
@Component
public class WebGray extends HtmlRenderProxy {

    @Override
    public Document editFrontDocument(Document document, HttpServletResponse response, HttpServletRequest request) {
        document.head().append("<style>html{\n" +
                "filter: grayscale(100%);\n" +
                "-webkit-filter: grayscale(100%);\n" +
                "-moz-filter: grayscale(100%);\n" +
                "-ms-filter: grayscale(100%);\n" +
                "-o-filter: grayscale(100%);\n" +
                "filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);\n" +
                "}</style>");
        return document;
    }
}
```