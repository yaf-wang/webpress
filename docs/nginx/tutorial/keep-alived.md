# Nginx 高可用性 Keepalived

:::info
Keepalived 是一种高性能的服务器高可用或热备解决方案，Keepalived 可以用来防止服务器单点故障的发生，通过配合 Nginx 可以实现 web 服务的高可用。虚拟 IP 将 N 台提供相同功能的 Nginx 节点组成一个路由器组，这个组里面有一个 master，多个 backup。backup 节点如果收不到 master 节点的 vrrp 包就认为 master 挂了，这时候就需要优先级来选择一个 backup 当 master 节点，这样就保证了服务的高可用。
:::

VIP(Virtual IP Address)
采用 VRRP(Vortual Router Redundancy Protocol) 协议

## keepalived 下载

`wget https://keepalived.org/software/keepalived-2.2.7.tar.gz`

## keepalived 安装
