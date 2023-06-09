# 类与接口

[之前学习过](https://ts.xcatliu.com/basics/type-of-object-interfaces.html)，接口（Interfaces）可以用于对「对象的形状（Shape）」进行描述。

这一章主要介绍接口的另一个用途，对类的一部分行为进行抽象。

## 类实现接口

实现（implements）是面向对象中的一个重要概念。一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces），用 `implements` 关键字来实现。这个特性大大提高了面向对象的灵活性。

举例来说，门是一个类，防盗门是门的子类。如果防盗门有一个报警器的功能，我们可以简单的给防盗门添加一个报警方法。这时候如果有另一个类，车，也有报警器的功能，就可以考虑把报警器提取出来，作为一个接口，防盗门和车都去实现它

```ts
interface Alarm {
  alert(): void;
}

class Door {}

class SecurityDoor extends Door implements Alarm {
  alert() {
    console.log("SecurityDoor alert");
  }
}

class Car implements Alarm {
  alert() {
    console.log("Car alert");
  }
}
```

一个类可以实现多个接口：

```ts
interface Alarm {
  alert(): void;
}

interface Light {
  turnOn(): void;
  turnOff(): void;
}

class Car implements Alarm, Light {
  alert() {
    console.log("Car alert");
  }

  turnOn() {
    console.log("Car Light turnOn");
  }

  turnOff() {
    console.log("Car Light turnOff");
  }
}
```

## 接口继承接口

接口与接口之间可以是继承关系：

```ts
interface Alarm {
  alert(): void;
}

interface Light extends Alarm {
  turnOn(): void;
  turnOff(): void;
}

class Car implements Light {
  alert() {
    console.log("Car alert");
  }

  turnOn() {
    console.log("Car Light turnOn");
  }

  turnOff() {
    console.log("Car Light turnOff");
  }
}
```

## 接口继承类

常见的面向对象语言中，接口是不能继承类的，但是在 TypeScript 中却是可以的：
