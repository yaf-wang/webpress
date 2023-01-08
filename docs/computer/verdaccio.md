# 私有源服务搭建-verdaccio

## 背景

- 公司或者个人的组件库不想公开；
- npm 服务源存在网络问题；

## 安装依赖

需要哪些依赖：

- verdaccio
- forever 守护进程
- pm2 是 node 进程管理工具
- nrm 管理 npm 仓库源

## 用户认证

auth(身份认证)配置：

- max_users 属性表示最大注册用户， 当值为 -1 时，表示禁止用户注册；当值不为 -1 时，可以使用 npm adduser 命令添加用户。

使用 npm 客户端注册：

`npm adduser --registry http://81.68.83.239:4873/`

禁用用户注册时，可以使用  [htpasswd-generator 工具](https://link.zhihu.com/?target=https%3A//hostingcanada.org/htpasswd-generator/)  生成身份凭证，然后存储在  **/verdaccio/conf/htpasswd**。

配置环境变量 `export PATH=$PATH:/usr/local/share/.config/yarn/global/node_modules/.bin/`

## pm2 管理进程

- 开启服务

`pm2 start verdaccio`

- 停止服务

`pm2 stop app_name|app_id`

- 查看进程状态

`pm2 list`

- 停止所有应用

`pm2 stop all`

## npm 源管理

- 查看源

`npm config get registry`

- 设置源地址

`npm config set registry http://localhost:4873/`

- 查看 `.npmrc` 源

`cat .npmrc`

- 本地指定安装依赖源

`npm install 依赖名 --registry 源地址`

或

`yarn add 依赖名 --registry 源地址`

[.npmrc 优先级问题](https://blog.csdn.net/kelly0721/article/details/121908256)

## nrm 管理依赖源

- 安装

`npm install -g nrm`

- 切换源

`nrm use npm`

- 查看源

`nrm ls`

- 添加源

`nrm add <registry> <url>`

- 删除源

`nrm del <registry>`

- 卸载

`npm uninstall nrm -g -C or npm uninstall nrm -g --clean`

> 目前 npm 发布的 nrm 版本存在 BUG，nrm ls 依然不带星或 nrm current 不显示当前，[参考 issues](https://github.com/Pana/nrm/issues/111)  
> `sudo npm install -g git@github.com:Pana/nrm.git`
