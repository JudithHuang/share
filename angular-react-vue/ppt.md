title: Angular vs React vs Vue
speaker: Judith Huang
url: ''
transition: slide
files: /css/theme.moon.css
theme: moon
highlightStyle: monokai_sublime
date: 2018年03月20日

[slide]
# Angular vs React vs Vue

[slide]
# Vue

[slide]
# Vue 基本概念
---

- 指令
- 计算属性与监听器
- 过滤器
- 条件渲染
- 列表渲染
- 事件处理
- 表单输入绑定
- 组件
- 生命周期

[slide]
# 指令
---

[slide]
# 计算属性与监听器
---

[slide]
# 过滤器
---

[slide]
# 条件渲染
---

[slide]
# 列表渲染
---

[slide]
# 表单输入绑定
---

[slide]
# 组件
---

[slide]
# 生命周期
---

[slide]
# React

[slide]
# React 基本概念

- JSX
- 虚拟 DOM
- props && state && 数据流
- 组件
- 事件处理
- 条件渲染
- 列表渲染
- 表单
- 生命周期

[slide]
# JSX
---

 一种 JavaScript 的语法扩展。 我们推荐在 React 中使用 JSX 来描述用户界面， JSX 乍看起来可能比较像是模版语言，但事实上它完全是在 JavaScript 内部实现的。

<pre><code type="javascript">
// JSX
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.toWhat}</div>;
  }
}

ReactDOM.render(
  <Hello toWhat="World" />,
  document.getElementById('root')
);

// without JSX
class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  }
}

ReactDOM.render(
  React.createElement(Hello, {toWhat: 'World'}, null),
  document.getElementById('root')
);
</code></pre>

[slide]
# 虚拟 DOM

[slide]
# props && state && 数据流
---

- props: 组件的父组件传入参数配置子组件。它是外部传进来的配置参数，组件内部无法控制也无法修改。除非外部组件主动传入新的 props，否则组件的 props 永远保持不变。
- state: 用于组件保存、控制、修改自己的可变状态。state 在组件内部初始化，可以被组件自身修改，而外部不能访问也不能修改。是一个局部的、只能被组件自身控制的数据源。state 中状态可以通过 this.setState 方法进行更新，setState 会导致组件的重新渲染。
- 数据流:

![单向数据流](./images/react-data-flow.jpg "单向数据流")

[slide]
# 组件

组件可以将UI切分成一些的独立的、可复用的部件，这样你就只需专注于构建每一个单独的部件。

[slide]
# 事件处理
- React事件绑定属性的命名采用驼峰式写法，而不是小写
- 如果采用 JSX 的语法你需要传入一个函数作为事件处理函数，而不是一个字符串(DOM元素的写法)

[slide]
# 条件渲染

- 元素变量
- 与运算符 &&
- 三目运算符

[slide]
# 列表渲染

使用 Javascript Array.map 实现列表渲染

[slide]
# 表单

- 受控组件
- 非受控组件

[slide]
# 生命周期

- componentWillMount
- componentDidMount
- componentWillReceiveProps
- shouldComponentUpdate
- componentWillUpdate
- componentDidUpdate
- componentWillUnmount

[slide]
# Angular

[slide]
# Angular

- 指令
- 条件渲染
- 列表渲染
- 事件处理
- 表单

[slide]
# 基本概念

[slide]
# 数据绑定

[slide]
# angular vs react vs vue
