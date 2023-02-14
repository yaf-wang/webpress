# 任意值 （ `any`）

任意值 （Any）用来表示允许赋值为任意类型。

可以认为，**声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。**

## 未声明类型的变量

**变量如果在声明时候，未指定其类型，那么它会被识别为任意类型**；

```ts
let something;
something = "seven";
something = 7;

something.setName("Tom");
```

等价于：

```ts
let something: any;
something = "seven";
something = 7;

something.setName("Tom");
```
