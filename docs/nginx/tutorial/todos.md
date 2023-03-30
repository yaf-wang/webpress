# 待办事项

重启 nginx：`systemctl nginx reload`

## 域名解析、泛解析

## nginx 虚拟主机配置

主机名（域名）server_name 配置规则：

- 配置多个主机名，中间使用空格：

  如： `server_name a.baidu.com b.baidu.com`；

- 通配符开始匹配：

  规则示例： `server_name www.baidu.*`，可以匹配主机名： `www.baidu.com`、 `music.baidu.cn`、 `map.baidu.org`；

- 通配符结束匹配：

  规则示例： `server_name www.baidu.*`，可以匹配主机名： `www.baidu.com`、 `www.baidu.cn`、 `www.baidu.org`；

- 正则表达式匹配：

  规则示例：`server_name ~^[0-9]\.baidu\.com$`，可以匹配主机名：`1.baidu.com`、 `2.baidu.cn`；

  正则使用注意事项：

  - 以 `~` 开头；
  - 指定开始锚点（`^`）和结束喵点 （`$`）；
  - 使用 `{m,n}` 语法的正则表达式要用 `""`包括着；
  - 域名中 `.` 需要用斜杠（`\`）转义；

## 域名解析实战技术架构

- 多用户二级域名

  如：github.io

- 短网址

  常见抖音、淘宝分享链接，

- httpdns

  参考文章：<br/>
  [理解 DNS & HTTPDNS 原理](/network/dns)

## 反向代理

proxy_pass

### 网关、代理与反向代理

- 正向代理
- 反向代理

- 隧道式
- LVS DR 模型

### 反向代理应用场景

### 反向代理配置

代理配置如下：`proxy_pass: http://qq.com`，这时访 nginx 主机名时，会被重定向到 `http://www.qq.com`。

原因：代理到真实服务器时，真实服务器对于没有 www 返回重定向状态到 nginx，nginx 再返回浏览器，浏览器接收到进行页面重定向。

## Nginx 负载均衡

upstream + proxy_pass

## Nginx 动静分离

URLRewrite

301：永久重定向，浏览器会缓存；
302: 临时重定向，浏览器不会缓存，每次要经过服务器重定向；

网管服务器

## nginx 高可用配置 keep-alived

VIP(Virtual IP Address)
采用 VRRP(Vortual Router Redundancy Protocol) 协议

## sticky

第三方模块，保证同一个用户的请求，nginx 转发同一个服务器上。

步骤：

1. 客户端首次发起访问请求，nginx 接收后，发现请求头没有 cookie，则以轮询方式将请求分发给后端服务器。
2. 后端服务器处理完请求，将响应数据返回给 nginx。
3. 此时 nginx 生成带 route 的 cookie，返回给客户端。route 的值与后端服务器对应，可能是明文，也可能是 md5、sha1 等 Hash 值
4. 客户端接收请求，并保存带 route 的 cookie。
5. 当客户端下一次发送请求时，会带上 route，nginx 根据接收到的 cookie 中的 route 值，转发给对应的后端服务器

编译安装，sticky 依赖 `openssl-devel` ：

```shell
## 进入 nginx 源码包
cd nginx-1.21.6

## 添加第三方模块 add-module 注意：with-module 是添加官方模块
./configure --prefix=/usr/local/nginx --add-module=/root/nginx-sticky-module

## 编译安装
make && make install
```

## nginx 之 keepalive

http2.0 支持多路复用
