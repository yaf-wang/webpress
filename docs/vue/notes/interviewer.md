# vue 常见面试总结

## vue 生命周期

### vue 有哪些生命周期？

- vue2 中生命周期函数

| 生命周期      | 描述                                                                                                              |
| ------------- | ----------------------------------------------------------------------------------------------------------------- |
| beforeCreate  | 执行是组件还为创建，通常用于插件开发中执行一些初始化任务                                                          |
| created       | 组件初始化完成，数据可以使用，常用于获取异步数据                                                                  |
| beforeMount   | 未执行渲染、更新，dom 未创建                                                                                      |
| mounted       | 初始化结束，dom 已经创建，可以用于获取访问数据或 DOM 元素                                                         |
| beforeUpdate  | 更新前，可用于获取更新前的各种状态                                                                                |
| updated       | 更新后，所有状态已是最新                                                                                          |
| beforeDestroy | 销毁前，可用于一些定时器、订阅的取消                                                                              |
| destroyed     | 实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。 |

### 在 created 中如何获取 DOM 元素？

- 可以通过异步函数，如 setTimeout、请求接口、Promise;
- vue 中 $nextTick 函数；

## vue-router

### 路由守卫有些些？

- 全局守卫：beforeEach、beforResolve、afterEach;
- 路由独享守卫：beforeEnter;
- 组件内守卫：beforeRouteEnter、beforeRouteUpdate、beforeRoutLeave；

### 路由守卫解析过程

- home->house->router.push

```
beforeRouteLeave http://localhost:9020/#/home
beforeEach---> http://localhost:9020/#/home
路由 beforeEnter http://localhost:9020/#/home
beforeRouteEnter http://localhost:9020/#/home
beforeResolve---> http://localhost:9020/#/home
afterEach---> http://localhost:9020/#/house/index
重用组件 created http://localhost:9020/#/house/index
失活组件 beforeDestroy http://localhost:9020/#/house/index
失活组件 destory http://localhost:9020/#/house/index
重用组件 mounted http://localhost:9020/#/house/index
```

- home->house->router.back

```
beforeRouteLeave http://localhost:9020/#/home
beforeEach---> http://localhost:9020/#/home
beforeRouteEnter http://localhost:9020/#/home
beforeResolve---> http://localhost:9020/#/home
afterEach---> http://localhost:9020/#/home
失活组件 created http://localhost:9020/#/home
重用组件 destory http://localhost:9020/#/home
失活组件 mounted http://localhost:9020/#/home
```
