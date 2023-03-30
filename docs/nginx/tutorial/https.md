# http(s) 协议

## http 协议：

- 明文传输;
- 默认端口 80;

对称加密和非对称加密

## https 协议

HTTPS（超文本传输安全协议）是 HTTP 协议的加密版本。它使用 SSL 或 TLS 协议来加密客户端和服务器之间所有的通信。安全连接允许客户端与服务器安全地交换敏感数据.

目的：身份认证、密文传输

数据加密 - 非对称加密：公钥加密，试药解密；私钥加密，公钥解密；公钥加密，公钥解不开；
公钥伪造 - 证书

## 根证书

由 CA 机构生成，并存放到操作系统中，用于解密 CA 颁布的证书的公钥；

## 自签名

- OpenSSL
- XCA

[!](../_images//https-cert.png)

Charles 代理抓包工具原理：在系统中安装 charles 的根证书；

[!Charles-proxy-https](../_images/Charles-proxy-https.png)

参考文章：
[图解 HTTPS：Charles 捕获 HTTPS 的原理](http://www.alloyteam.com/2019/07/13821/#prettyPhoto)
