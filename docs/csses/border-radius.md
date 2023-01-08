# border-radius

## 介绍

[CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS) 属性 **`border-radius`** 允许你设置元素的外边框圆角。当使用一个半径时确定一个圆形，当使用两个半径时确定一个椭圆。这个(椭)圆与边框的交集形成圆角效果。

border-radius，这个属性不仅仅用来画圆角，它还可以做点别的事情。radius 其实指的是边框所在椭圆的半径（长半径、短半径）。把这些角按照不同的顺序和大小来展现，能够绘制成多种多样的图形。以下图例就是通过定义 border-radius 得到的效果。

```css
/*全语法如下：斜杠前面的一组四个值分别表示四个角的水平半径；斜杠后面的一组四个值分别表示四个角的垂直半*/
border-radius: 100% 0% 51% 48% / 57% 0% 100% 43%;

border-radius: 4px 3px 6px / 2px 4px;

/* 等价于： */
border-top-left-radius: 4px 2px;
border-top-right-radius: 3px 4px;
border-bottom-right-radius: 6px 2px;
border-bottom-left-radius: 3px 4px;

/*语法1：斜杠前面和后面每一组分别表示的是四个角水平半径和四个角垂直半径。两个值、三个值的顺序规则你懂的哈。*/
border-radius: 10px 20px 40px/20px 50px;
```

## 语法和解释

斜杠前面的一组四个值分别表示四个角的水平半径；斜杠后面的一组四个值分别表示四个角的垂直半径。

border-radius 可以通过值来定义样式相同的角，也对每个角分别定义。下面的表格解释了各个写法所表示的效果。

## 语法使用

-将创建四个大小一样的圆角：

`border-radius:10px;`

- 四个值分别表示左上角、右上角、右下角、右下角。

`border-radius:10px 15px 10px 5px;`

- 第一个值表示左上角、右下角；第二个值表示右上角、左下角。

`border-radius:10px 15px;`

- 第一个值表示左上角；第二个值表示右上角、左下角；第三个值表示右下角。

`border-radius:10px 15px 5px;`

- 创建不对称的角–椭圆角。

`border-bottom-left-radius:20px 10px;`

- 写椭圆角的时候，可以用短写法，创建四个一样的椭圆角。

`border-radius:20px/10px;`

- 四个值分别表示四个角的半径（水平和垂直半径一样)。

`border-radius:10px 20px 30px 40px;`

- 斜杠前面的一组四个值分别表示四个角的水平半径；斜杠后面的一组四个值分别表示四个角的垂直半径。

`border-radius:10px 20px 30px 40px/20px 50px 30px 10px;`

- 斜杠前面和后面每一组分别表示的是四个角水平半径和四个角垂直半径。两个值、三个值的顺序规则你懂的哈。

`border-radius:10px 20px 40px/20px 50px;`

边框大小和外半径、内半径的关系： 实际的内半径相当于外半径减去相应的边框大小。相减的值中如果至少一个为为负值或零，则内半径为直角。不管怎样，相邻的两个边都会形成流畅的线条。

border-radius 可以用来制作很生动的效果：border-radius 结合 Gradients、Box Shadow 写的 Opra Logo with CSS

兼容 Firefox 老的版本： 为了兼容 Firefox3.6 及以下版本，需要写上供应商前缀，为-moz-border-radius:5px，对于每个角的语法，则为：-moz-border-radius-topleft:5px;要特别注意这与标准写法不同。

参考文章：
[CSS 绘制圆(弧)](http://www.yanhuangxueyuan.com/html5/circle.html)
