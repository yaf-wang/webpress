# nginx 实战教程

## Nginx 基础使用

- [Nginx 待整理](/nginx/tutorial/01)
- [Nginx 负载均衡配置](/nginx/tutorial/02)
- [Nginx 防盗链](/nginx/tutorial/referers)
- [https 配置](/nginx/tutorial/https)

## Nginx 进阶

### 扩容

- 单机垂直扩容-硬件资源增加
- 水平扩容-集群化
- 细粒度拆分-分布式
  - 数据分区
  - 上游服务 SOA 化（原生支持水平/垂直扩容）
  - 入口细分
    - 浏览器
    - 移动端原生 app（物联网）
    - H5 内嵌式应用
  - 数据异构化
    - 多级缓存
      - 客户端缓存
      - CDN 缓存
      - 异步多活
      - Nginx 缓存
  - 服务异步化
    - 拆分请求
    - 消息中间件

扩容原则：

1. 无状态原则
2. 弹性原则
