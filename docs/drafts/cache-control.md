# 解决 index.html 缓存问题

一般项目发版后前端静态文件会有缓存问题，不强制刷新很难解决，但是用户不会去强制刷新，这就需要我们开发人员在配置方面解决浏览器缓存静态文件问题。

一般浏览器缓存的文件有 html、css、js 等。css、js 文件被缓存的解决方案，一般 html 中引入的 css 和 js 的名字都加了哈希值，所以新版本 css、js 和就旧版本的名字是不同的，不会有缓存问题。

如果 index.html 文件被缓存就稍微麻烦些

- 首先可以在 index.html 文件头部添加 mate 标签禁止缓存

```html
<meta
  http-equiv="Cache-Control"
  content="no-cache, no-store, must-revalidate"
/>
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />
```

浏览器的缓存解决，但是一般在服务器端还是会有缓存，当浏览器访问 index.html 时拿到的就是服务器缓存的文件，所有我们还需要解决服务器的缓存，这需要在服务器配置不让缓存 index.html

nginx 配置如下：

```sh
location = /index.html {
  add_header Cache-Control "no-cache, no-store";
}
```

## 常见配置

`Cache-Control` 作用于 `HTTP1.1`，`HTTP1.1` 中启用 `Cache-Control` 来控制页面的缓存与否，这里介绍几个常用的参数：

- `no-cache`，浏览器和缓存服务器都不应该缓存页面信息；
- `public`，浏览器和缓存服务器都可以缓存页面信息；
- `no-store`，请求和响应的信息都不应该被存储在对方的磁盘系统中；
- `must-revalidate`，对于客户机的每次请求，代理服务器必须想服务器验证缓存是否过时；

Pragma 作用于 `HTTP 1.0`：

HTTP1.0 中通过 Pragma 控制页面缓存，通常设置的值为 no- cache，不过这个值不这么保险，通常还加上 Expires 置为 0 来达到目的。但是如我们刻意需要浏览器或缓存服务器缓存住我们的页面这个值则要设置为 Pragma。

Expires 作用于 proxies：

表示存在时间，允许客户端在这个时间之前不去检查（发请求），等同 max-age 的 效果。但是如果同时存在，则被 Cache-Control 的 max-age 覆盖。 格式： Expires ：时间，后面跟一个时间或者日期，超过这个时间后缓存失效。也就是浏览器发出请求之前，会检查这个时间是否失效，若失效，则浏览器会重新发出请求。
