# Nginx 防盗链

## referer 是什么

**`referer` 请求头包含了当前请求的页面来源地址**，即表示当前页面是通过这个来源页面里的链接进入的；

服务端一般使用 referer 请求头识别访问来源，可能会以此进行统计分析、日志记录以及缓存优化等；

Request Headers

```
Referer: http://localhost:8080/nginx/tutorial/referers.html
```

## 利用 referer 防止盗链

假设当一个 HTTP 请求头的 referer 字段中包含一些不正确(期望)的值，使用 nginx 的 `ngx_http_referer_module` 模块，禁止这个请求访问站点.

防盗链功能主要由模块中的 `valid_referers` 指令与 `$invalid_referer` 变量配合使用；

`valid_referers none|blocked|server_names`

### 参数说明

- none：检测 Referer 头域不存在的情况；
- blocked：检测 Referer 头域的值被防火墙或着代理服务器删除或者伪装的清咖滚，这种情况该域不以 http 或 https 开头；
- server_names：设置一个或者多个 URL，检测 Referer 头域的值是否是这些 URL 的值；

### 配置示例

```nginx
server {
  ## other

  location ~*/(js|img/css){
    valid_referers 192.168.44.101; # 检测来源地址
    if( $valid_referer ){ // 校验失败，返回403
      return 403;
    }
  }

  ## other
}
```

:::warning 注意
referer 请求头是可以伪造的，因此这个模块并不能 100%的阻止这类请求。
:::

## 小结

- `referer` 请求头，用于识别访问来源；
- `referer` 请求头可以伪造，不能作为唯一的判断条件；
- 借助 `ngx_http_referer_module` 模块，实现简单的 nginx 防盗链；
