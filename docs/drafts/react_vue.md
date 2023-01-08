# React VS Vue

React 组件通信 props， 单向流。组件可以接受任意 props，包括基本数据类型，React 元素以及函数。

- 父传子：基本数据类型作为 props 数据参数；
- 子传父：函数作为 props 参数，回调函数，$emit;
- 继承： React 元素（JSX/DOM） 作为 props 数据，插槽，slot；默认通过 `props.children`，也可以通过指定；

## 继承/插槽

```jsx
function Layout(props) {
  return (
    <header>
      {props.header}
    </header>
    <main>
      {props.main}
    </main>
    <footer>
      {props.footer}
    </footer>
  );
}


function App(){

  return (
    <Layout
      header={<HeaderLayout></HeaderLayout>}
      main={<div>header</div>}
      footer={<div>footer</div>}
    />
  )
}
```
