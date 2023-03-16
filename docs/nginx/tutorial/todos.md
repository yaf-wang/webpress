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
