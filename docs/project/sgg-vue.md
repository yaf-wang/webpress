# VUE 实战项目笔记

## 组件拆分

## AXIOS 封装

### 跨域

三元组：协议、域名、主机(域名)，三者不同都会触发跨域；

同源策略：是一个重要的安全策略，它用于限制一个 origin 的文档或者它加载的脚本如何能与另一个源的资源进行交互。它能帮助阻隔恶意文档，减少可能被攻击的媒介。

#### 什么是跨域？

**浏览器限制**、而不是服务器端限制；可以在 Network 中查看，请求正常响应，response 响应也是正常；

#### 有哪些方法解决跨域？

- JSONP（前后端）
- 代理（前端）
- CORS 头（后端）

### MockJS

安装依赖：`pnpm add mockjs -D`

## 事件绑定、事件委托

## 防抖、节流

## v-for 使用

### key 使用 index、ID？

key 值的作用：

key 是给每一个 vnode 的唯一 id，也是 diff 的一种优化策略，可以根据 key，更准确， 更快的找到对应的 vnode 节点

vue diff 算法：

## vuex

- state
- getter
- mutation
- action
- module

## EventBus

原理：`vm.$on`，`vm.$emit`

- 全局

```javascript
// main.js
Vue.prototyp.$bus = new Vue();

// 订阅
this.$bus.$on('loaded'， （) => {})

// 发布
this.$bus.$emit('loaded'，data)
```
