---
title: 插件开发-插件拦截器
---

## 简介
插件可以实现拦截器功能进行接口拦截, 编写插件拦截器需实现HandlerInterceptor类并增加@Component及@InterceptPath("/**")注解, 其中@InterceptPath的值为要具体拦截的路径

## 案例
```java
@Component
@InterceptPath("/**")
public class InterceptorDemo implements HandlerInterceptor {

    private static final Logger LOGGER = LoggerFactory.getLogger(InterceptorDemo.class);

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        LOGGER.info("-----------进入插件拦截器preHandle: {}", request.getRequestURI());
        return HandlerInterceptor.super.preHandle(request, response, handler);
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        LOGGER.info("-----------进入插件拦截器postHandle:{}", request.getRequestURI());
        HandlerInterceptor.super.postHandle(request, response, handler, modelAndView);
    }
}
```