# block、inline 和 inline-block 区别

## 简要概述

- block 和 inline 这两个概念是简略的说法，完整确切的说应该是 block-level elements (块级元素) 和 inline elements (内联元素)。block 元素通常被现实为独立的一块，会单独换一行；inline 元素则前后不会产生换行，一系列 inline 元素都在一行内显示，直到该行排满。
- 大体来说 HTML 元素各有其自身的布局级别（block 元素还是 inline 元素）：
  - 常见的块级元素有 DIV, FORM, TABLE, P, PRE, H1~H6, DL, OL, UL 等。
  - 常见的内联元素有 SPAN, A, STRONG, EM, LABEL, INPUT, SELECT, TEXTAREA, IMG, BR 等。
- block 元素可以包含 block 元素和 inline 元素；但 inline 元素只能包含 inline 元素。要注意的是这个是个大概的说法，每个特定的元素能包含的元素也是特定的，所以具体到个别元素上，这条规律是不适用的。比如 P 元素，只能包含 inline 元素，而不能包含 block 元素。
- 一般来说，可以通过 display:inline 和 display:block 的设置，改变元素的布局级别。

## display:block

- block 元素会独占一行，多个 block 元素会各自新起一行。默认情况下，block 元素宽度自动填满其父元素宽度。
- block 元素可以设置 width,height 属性。块级元素即使设置了宽度,仍然是独占一行。
- block 元素可以设置 margin 和 padding 属性。

## display:inline

- inline 元素不会独占一行，多个相邻的行内元素会排列在同一行里，直到一行排列不下，才会新换一行，其宽度随元素的内容而变化。
- inline 元素设置 width,height 属性无效。
- inline 元素的 margin 和 padding 属性，水平方向的 padding-left, padding-right, margin-left, margin-right 都产生边距效果；但竖直方向的 padding-top, padding-bottom, margin-top, margin-bottom 不会产生边距效果。

## display:inline-block

- 简单来说就是将对象呈现为 inline 对象，但是对象的内容作为 block 对象呈现。之后的内联对象会被排列在同一行内。比如我们可以给一个 link（a 元素）inline-block 属性值，使其既具有 block 的宽度高度特性又具有 inline 的同行特性。
