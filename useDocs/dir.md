PerfreeBlog的安装目录结构如下:
```bash
perfree-server  # 安装目录
├── config  # 配置文件目录
│   └── application.yml  # 配置文件
│   └── application-dev.yml  # 开发环境配置文件
│   └── application-prod.yml  # 生产环境配置文件
├── perfree-server.jar # jar包
├── start.bat # windows启动脚本
├── start.sh # linux启动脚本
├── resources # 资源目录
│   └── logs # 日志文件存放目录
│   └── plugins # 插件存放目录
│   └── static # 静态资源目录
│       └── themes # 主题存放目录
│   └── temp # 临时文件目录
│   └── upload # 默认自带的附件上传存储规则存储目录
```