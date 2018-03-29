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

- 计算属性与监听器
- 过滤器
- 条件渲染
- 列表渲染
- 事件处理
- 表单输入绑定
- 组件
- 生命周期

[slide]
# 计算属性与监听器
---

模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护。

<pre><code type="javascript">
<div id="demo">{{ fullName }}</div>
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})
</code></pre>

[slide]
# 条件渲染
---
v-if, v-else, v-else-if, v-show

[slide]
# 列表渲染
---
- <div v-for="item of items" :key="item.id"></div>
- 数组更新检测 (push, pop, shift, unshift, splice, sort,reverse)

[slide]
# 表单输入绑定
---
## 基础用法    

你可以用 v-model 指令在表单 <input> 及 <textarea> 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 v-model 本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。

## 修饰符

- .lazy
- .number
- .trim

[slide]
# 组件
---

组件 (Component) 是 Vue.js 最强大的功能之一。组件可以扩展 HTML 元素，封装可重用的代码。在较高层面上，组件是自定义元素，Vue.js 的编译器为它添加特殊功能。在有些情况下，组件也可以表现为用 is 特性进行了扩展的原生 HTML 元素。
所有的 Vue 组件同时也都是 Vue 的实例，所以可接受相同的选项对象 (除了一些根级特有的选项) 并提供相同的生命周期钩子。

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
---
- 一个基本的JavaScript对象
- 生成Virtual DOM树
- 对比两棵树的差异
- 更新视图


[slide]
# props && state && 数据流
---

- props: 组件的父组件传入参数配置子组件。它是外部传进来的配置参数，组件内部无法控制也无法修改。除非外部组件主动传入新的 props，否则组件的 props 永远保持不变。
- state: 用于组件保存、控制、修改自己的可变状态。state 在组件内部初始化，可以被组件自身修改，而外部不能访问也不能修改。是一个局部的、只能被组件自身控制的数据源。state 中状态可以通过 this.setState 方法进行更新，setState 会导致组件的重新渲染。
- 数据流:

![单向数据流](./images/react-data-flow.jpg "单向数据流")

[slide]
# 组件
---

组件可以将UI切分成一些的独立的、可复用的部件，这样你就只需专注于构建每一个单独的部件。

[slide]
# 事件处理
---

- React事件绑定属性的命名采用驼峰式写法，而不是小写
- 如果采用 JSX 的语法你需要传入一个函数作为事件处理函数，而不是一个字符串(DOM元素的写法)

[slide]
# 条件渲染
---

- 元素变量
- 与运算符
- 三目运算符

[slide]
# 列表渲染
---

使用 Javascript Array.map 实现列表渲染

[slide]
# 表单
---

- 受控组件
- 非受控组件

[slide]
# 生命周期
---

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
