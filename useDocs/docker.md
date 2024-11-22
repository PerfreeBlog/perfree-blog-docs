## 环境准备
1. 安装Mysql数据库 (安装过程略)
2. 创建数据库, 编码格式最好为utf8mb4,无需执行初始化脚本, 之后参考以下步骤操作即可

## 安装
注意将命令中数据库账户/数据库ip地址/数据库端口/创建的数据库名称/数据库密码/文件映射目录/版本号进行替换
```bash
sudo docker run -d -p 8080:8080 --name PerfreeBlog --privileged=true \
-e "SPRING_DATASOURCE_USERNAME=数据库账户" \
-e "SPRING_DATASOURCE_URL=jdbc:mysql://数据库ip地址:数据库端口/创建的数据库名称?useSSL=false&allowPublicKeyRetrieval=true&useUnicode=true&characterEncoding=UTF-8&nullCatalogMeansCurrent=true" \
-e "SPRING_DATASOURCE_PASSWORD=数据库密码" \
-v  文件映射目录:/perfree-server/resources \
registry.cn-hangzhou.aliyuncs.com/perfree/perfree_blog:版本号
```

## 访问
启动成功之后访问ip:端口即可, 如访问不到请查看服务器防火墙是否开启对应端口的访问权限
![init](./images/1732155174095.jpg)