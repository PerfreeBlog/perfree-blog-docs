---
outline: deep
---

> 使用下面的方式可以快速在本地体验最新版本的PerfreeBlog,但如果部署至服务器,推荐您参考对应部署方式的详细安装文档, 注意: 非docker compose方式部署需要提前安装mysql数据库

## docker compose
下载  [docker-compose.yml](https://gitee.com/PerfreeBlog/PerfreeBlog/raw/main/docker-compose.yml) 或新建docker-compose.yml, 注意替换里边的版本号
```yaml
version: '3.8'
services:
  # MySQL容器配置
  mysql-container:
    image: registry.cn-hangzhou.aliyuncs.com/perfree/perfree_mysql:8.0
    restart: always
    environment:
      # 设置MySQL的root用户密码
      MYSQL_ROOT_PASSWORD: perfree666
      # 设置时区为亚洲/上海
      TZ: Asia/Shanghai
      # 创建名为perfree的数据库
      MYSQL_DATABASE: perfree
      # 设置MySQL字符集为utf8mb4
      MYSQL_CHARSET: utf8mb4
      # 设置MySQL排序规则为utf8mb4_unicode_ci
      MYSQL_COLLATION: utf8mb4_unicode_ci
    volumes:
      - ./perfree/mysql/data:/var/lib/mysql
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
      interval: 10s
      timeout: 10s
      retries: 3
      start_period: 40s
  # perfree-blog容器配置
  perfree-blog-container:
    image: registry.cn-hangzhou.aliyuncs.com/perfree/perfree_blog:版本号
    restart: always
    ports:
      # 将主机的8080端口映射到容器的8080端口
      - 8080:8080
    environment:
      SPRING_DATASOURCE_URL: jdbc:mysql://mysql-container:3306/perfree?useSSL=false&allowPublicKeyRetrieval=true&useUnicode=true&characterEncoding=UTF-8&nullCatalogMeansCurrent=true
      SPRING_DATASOURCE_USERNAME: root
      SPRING_DATASOURCE_PASSWORD: perfree666
    depends_on:
      mysql-container:
        condition: service_healthy  # 等待MySQL容器健康检查通过
    volumes:
      - ./perfree/resources:/perfree-server/resources
```
之后启动容器
```bash
docker compose up -d
```


## docker
注意将命令中数据库账户/数据库ip地址/数据库端口/创建的数据库名称/数据库密码/文件映射目录/版本号进行替换
```bash
sudo docker run -d -p 8080:8080 --name PerfreeBlog --privileged=true \
-e "SPRING_DATASOURCE_USERNAME=数据库账户" \
-e "SPRING_DATASOURCE_URL=jdbc:mysql://数据库ip地址:数据库端口/创建的数据库名称?useSSL=false&allowPublicKeyRetrieval=true&useUnicode=true&characterEncoding=UTF-8&nullCatalogMeansCurrent=true" \
-e "SPRING_DATASOURCE_PASSWORD=数据库密码" \
-v  文件映射目录:/perfree-server/resources \
registry.cn-hangzhou.aliyuncs.com/perfree/perfree_blog:版本号
```

## jar安装
1. 安装jdk17(安装过程略)
2. 下载最新的 PerfreeBlog 运行包解压,
3. 修改config目录下application-prod.yaml配置文件中的端口和数据库信息
4. 之后参照以下命令运行
```
windows: 双击start.bat
linux: ./start.sh start
```