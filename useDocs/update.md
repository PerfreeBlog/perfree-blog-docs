## jar安装
首先需要停止当前项目,记录当前项目的端口号及数据库配置信息, 之后将下载的更新包直接解压覆盖至原有的目录即可,之后修改端口号及数据库配置信息,然后启动即可

## docker安装
修改docker启动命令中的版本号即可

## dockerCompose安装
1. 首先停止当前项目
```bash
docker compose stop
```
2. 修改docker-compose.yml中的版本号,如下
```yaml
# perfree-blog容器配置
perfree-blog-container:
    image: registry.cn-hangzhou.aliyuncs.com/perfree/perfree_blog:[版本号]
```
3.启动
```bash
docker compose up -d
```