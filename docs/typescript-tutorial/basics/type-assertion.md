# 类型断言

类型断言（Type Assertion）可以用来手动指定一个值的类型。

## 语法

`值 as 类型` 或 `<类型>值`

在 tsx 语法（React 的 jsx 语法的 ts 版）中必须使用前者，即 值 as 类型。

形如 `<Foo>` 的语法在 tsx 中表示的是一个 ReactNode，在 ts 中除了表示类型断言之外，也可能是表示一个泛型。

:::tip 建议
在使用类型断言时，统一使用 `值 as 类型` 这样的语法，本书中也会贯彻这一思想。
:::

## 类型断言的用途

类型断言的常见用途有以下几种：

### 将一个联合类型断言为其中一个类型

[之前提到过](https://ts.xcatliu.com/basics/union-types.html#%E8%AE%BF%E9%97%AE%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%B1%9E%E6%80%A7%E6%88%96%E6%96%B9%E6%B3%95)，当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们**只能访问此联合类型的所有类型中共有的属性或方法**：

```ts
interface Cat {
  name: string;
  run(): void;
}

interface Fish {
  name: string;
  swim(): void;
}

function getName(animal: Cat | Fish) {
  return animal.name;
}
```

而有时候，我们确实需要在还不确定类型的时候就访问其中一个类型特有的属性或方法，比如：

```ts
function isFish(animal: Cat | Fish): boolean {
  if (typeof animal.swim === "function") {
    return true;
  } else {
    return false;
  }
}
// Property 'swim' does not exist on type 'Cat | Fish'.Property 'swim' does not exist on type 'Cat'.(2339)
```

上面的例子中，获取 `animal.swim` 的时候会报错。

此时可以使用类型断言，将 animal 断言成 Fish：

```ts
function isFish(animal: Cat | Fish): boolean {
  if (typeof (animal as Fish).swim === "function") {
    return true;
  } else {
    return false;
  }
}
```

这样就可以解决访问 animal.swim 时报错的问题了。

:::warning 注意
类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误：
:::

```ts
function swim(animal: Cat | Fish) {
  (animal as Fish).swim();
}

const tom: Cat = {
  name: "Tom",
  run() {
    console.log("running...");
  },
};
swim(tom);
```

上面的例子编译时不会报错，但在运行时会报错：`Uncaught TypeError: animal.swim is not a function`。

原因是 `(animal as Fish).swim()` 这段代码隐藏了 animal 可能为 Cat 的情况，将 animal 直接断言为 Fish 了，而 TypeScript 编译器信任了我们的断言，故在调用 `swim()` 时没有编译错误。

可是 swim 函数接受的参数是 `Cat | Fish`，一旦传入的参数是 Cat 类型的变量，由于 Cat 上没有 swim 方法，就会导致运行时错误了。

:::tip 提示
总之，使用类型断言时一定要格外小心，尽量避免断言后调用方法或引用深层属性，以减少不必要的运行时错误。
:::

### 将一个父类断言为更加具体的子类
