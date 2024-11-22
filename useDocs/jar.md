## 环境准备
1. 安装JDK, 版本应>=17 (安装过程略)
2. 安装Mysql数据库 (安装过程略)
3. 创建数据库, 编码格式最好为utf8mb4,无需执行初始化脚本, 之后按照平台参考以下步骤操作即可
## 安装
1. 下载最新的 PerfreeBlog 运行包并解压
2. 修改config目录下application-prod.yaml配置文件中的端口和数据库信息, 以下是示例,找到配置文件中对应以下信息的位置进行修改即可


```yaml
server:
  # 端口
  port: 8080

datasource:
  # 数据库账户
  username: root
  # 数据库url
  url: jdbc:mysql://153.153.234.13:3306/perfree?useSSL=false&allowPublicKeyRetrieval=true&useUnicode=true&characterEncoding=UTF-8&nullCatalogMeansCurrent=true
  # 数据库密码
  password: xwt@123
```
3. 启动程序

windows直接双击start.bat即可,无需参考以下步骤
```bash
./start.sh start
```
如遇到`-bash: ./start.sh: /bin/bash^M: 坏的解释器: 没有那个文件或目录`错误,则执行以下命令
```bash
sed -i 's/\r//' ./start.sh
./start.sh start
```

这里提供一些常用命令
```bash
# 运行
./start.sh start

# 查看运行状态
./start.sh status

# 重新启动
./start.sh restart

# 停止
./start.sh stop
```

## 访问
启动成功之后访问ip:端口即可, 如访问不到请查看服务器防火墙是否开启对应端口的访问权限
![init](./images/1732155174095.jpg)