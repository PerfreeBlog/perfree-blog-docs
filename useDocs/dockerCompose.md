## 安装
下载  [https://raw.githubusercontent.com/PerfreeBlog/PerfreeBlog/refs/heads/develop-4.0.0/docker-compose.yml](https://raw.githubusercontent.com/PerfreeBlog/PerfreeBlog/refs/heads/develop-4.0.0/docker-compose.yml)或新建docker-compose.yml

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
    image: registry.cn-hangzhou.aliyuncs.com/perfree/perfree_blog:v4.0.0-beta.1.01
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
## 访问
启动成功之后访问ip:端口即可, 如访问不到请查看服务器防火墙是否开启对应端口的访问权限
![init](./images/1732155174095.jpg)