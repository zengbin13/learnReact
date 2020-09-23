# 安装

## 在网站中添加 React

```html
  <!-- 加载 React。-->
  <!-- 注意: 部署时，将 "development.js" 替换为 "production.min.js"。-->
  <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
  <!-- 加载我们的 React 组件。-->
  <script src="like_button.js"></script>
```



## Hello World

```js
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

```js
ReactDOM.render(element, container[, callback])
```

- 在提供的 `container` 里渲染一个 React 元素
- 并返回对该组件的引用（或者针对无状态组件返回 null）
- 若提供回调函数，在组件被**渲染或更新之后执行**
- 首次调用时，容器节点里的所有 DOM 元素都会**被替换**，后续的调用则会使用 React 的 **DOM 差分算法**



## JSX 简介

```jsx
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```

-  JSX是一个 JavaScript 的语法扩展
  - JSX 可以生成 React “元素”
- 可以在大括号内放置任何有效的 [JavaScript 表达式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions)
- JSX 也是一个表达式 ,可以赋值或返回等操作
- JSX 防止注入攻击 
  - React DOM 在渲染所有输入内容之前，默认会进行[转义](https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-on-html)

- JSX 表示对象 

  - Babel 会把 JSX 转译成一个名为 `React.createElement()` 函数调用

  

```jsx
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

```js
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

