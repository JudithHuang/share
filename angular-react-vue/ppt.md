title: Angular vs React vs Vue
speaker: Judith Huang
url: ''
transition: slide
files: /css/theme.moon.css
theme: moon
date: 2018年03月30日

[slide]
# Angular1.x vs React vs Vue

[slide]
# 基本概念
---
| Angular1.x | React | Vue
:-------:|:------:|:-------:|:--------:
状态管理 | scope | state | data
条件渲染 | 支持 | js 实现 | 支持
列表渲染 | 支持 | js 实现 | 支持
事件处理 | ng-click 等 | onClick 等 | v-bind:click 等
表单 | ng-model 双向绑定 | 受控组件 | v-model 双向绑定
组件 |  | 支持 | 支持
生命周期 |  | 支持 | 支持
计算属性 |  |  | 支持
监听器 | 支持 |  | 支持
过滤器 | 支持 |  | 支持

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
- 表单
- 组件
- 生命周期

[slide]
# 计算属性与监听器
---

模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护。

```html
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
```

[slide]
# 条件渲染
---
v-if, v-else, v-else-if, v-show

[slide]
# 列表渲染
---
```heml
  <div v-for="item of items" :key="item.id"></div>
```
- 注意事项：数组更新检测 (push, pop, shift, unshift, splice, sort,reverse)

[slide]
# 事件处理
---
## 每个 Vue 实例都实现了事件接口
- 使用 $on(eventName) 监听事件
- 使用 $emit(eventName, optionalPayload) 触发事件

```html
<div id="counter-event-example">
  <p>{{ total }}</p>
  <button-counter v-on:increment="incrementTotal"></button-counter>
  <button-counter v-on:increment="incrementTotal"></button-counter>
</div>
```
```javascript
Vue.component('button-counter', {
  template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    incrementCounter: function () {
      this.counter += 1
      this.$emit('increment')
    }
  },
})

new Vue({
  el: '#counter-event-example',
  data: {
    total: 0
  },
  methods: {
    incrementTotal: function () {
      this.total += 1
    }
  }
})
```

[slide]
# 表单
---

你可以用 v-model 指令在表单 input 及 textarea 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 v-model 本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。
```html
<input v-model="message" placeholder="edit me">
<p>Message is: {{ message }}</p>
```

[slide]
# 组件
---

组件 (Component) 是 Vue.js 最强大的功能之一。组件可以扩展 HTML 元素，封装可重用的代码。在较高层面上，组件是自定义元素，Vue.js 的编译器为它添加特殊功能。
所有的 Vue 组件同时也都是 Vue 的实例，所以可接受相同的选项对象 (除了一些根级特有的选项) 并提供相同的生命周期钩子。

[slide]
# slot
---
为了让组件可以组合，我们需要一种方式来混合父组件的内容与子组件自己的模板。这个过程被称为内容分发 (即 Angular 用户熟知的“transclusion”)。Vue.js 实现了一个内容分发 API，使用特殊的 `slot` 元素作为原始内容的插槽。

```html
<!-- app-layout component -->
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>

<!-- parent component -->
<app-layout>
  <h1 slot="header">这里可能是一个页面标题</h1>

  <p>主要内容的一个段落。</p>
  <p>另一个主要段落。</p>

  <p slot="footer">这里有一些联系信息</p>
</app-layout>
```



[slide]
# 生命周期
---
![生命周期](/images/vue2.x-lifecycle.png "生命周期")

[slide]
# React

[slide]
# React 基本概念

- JSX
- 虚拟 DOM
- props && state
- 数据流
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

```html
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
```

[slide]
# 虚拟 DOM
---
- React之所以快，是因为它不直接操作DOM。React将DOM结构存储在内存中，然后同render()的返回内容进行比较，计算出需要改动的地方，最后才反映到DOM中。
此外，React实现了一套完整的事件合成机制，能够保持事件冒泡的一致性，跨浏览器执行。甚至可以在IE8中使用HTML5的事件。
- 大部分情况下，我们都是在构建React的组件，也就是操作虚拟DOM。但是有时候我们需要访问底层的API，可能或通过使用第三方的插件来实现我们的功能，如jQuery。React也提供了接口让我们操作底层API。


[slide]
# props && state
---

- props: 组件的父组件传入参数配置子组件。它是外部传进来的配置参数，组件内部无法控制也无法修改。除非外部组件主动传入新的 props，否则组件的 props 永远保持不变。
- state: 用于组件保存、控制、修改自己的可变状态。state 在组件内部初始化，可以被组件自身修改，而外部不能访问也不能修改。是一个局部的、只能被组件自身控制的数据源。state 中状态可以通过 this.setState 方法进行更新，setState 会导致组件的重新渲染。

[slide]
# 数据流
---
![单向数据流](/images/react-data-flow.png "单向数据流")

[slide]
# 组件
---

组件可以将UI切分成一些的独立的、可复用的部件，这样你就只需专注于构建每一个单独的部件。
```html
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

[slide]
# 事件处理
---

- React事件绑定属性的命名采用驼峰式写法，而不是小写
- 如果采用 JSX 的语法你需要传入一个函数作为事件处理函数，而不是一个字符串(DOM元素的写法)
```html
<input
  className="new-todo"
  placeholder="What needs to be done?"
  value={this.state.newTodo}
  onKeyDown={this.handleNewTodoKeyDown.bind(this)}
  onChange={this.handleChange.bind(this)}
  autoFocus={true}
/>
```

[slide]
# 条件渲染
---

- 元素变量
- 与运算符
- 三目运算符

```html
render() {
  // 元素变量
  const elem = <div>hello, This is 元素变量</div>;
  const bool = true;

  return () {
    <div>
      { elem }
      {/* 与运算符 */}
      { bool && <div>Yes</div> }
      {/* 三目运算符 */}
      { bool ? <div>Yes</div> : <div>No</div> }
    </div>
  }
}
```

[slide]
# 列表渲染
---

使用 Javascript Array.map 实现列表渲染

```html
render() {
  const todos = ['Angular', 'React', 'vue'];

  return (
    <div>
      {todos.map((todo) => {
        return <div className="todo">{{todo}}</div>;
      })}
    </div>
  );
}
```

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
# redux

[slide]
# redux
---
- 介绍
- 基础
- 高级
- 技巧

[slide]
# 介绍
---
- 动机
- 核心概念
- 三大原则

[slide]
# 动机
---
随着 JavaScript 单页应用开发日趋复杂，JavaScript 需要管理比任何时候都要多的 state （状态）。 这些 state 可能包括服务器响应、缓存数据、本地生成尚未持久化到服务器的数据，也包括 UI 状态，如激活的路由，被选中的标签，是否显示加载动效或者分页器等等。

管理不断变化的 state 非常困难。如果一个 model 的变化会引起另一个 model 变化，那么当 view 变化时，就可能引起对应 model 以及另一个 model 的变化，依次地，可能会引起另一个 view 的变化。直至你搞不清楚到底发生了什么。state 在什么时候，由于什么原因，如何变化已然不受控制。 当系统变得错综复杂的时候，想重现问题或者添加新功能就会变得举步维艰。

[slide]
# 核心概念
---
Redux 本身很简单。

当使用普通对象来描述应用的 state 时。例如，todo 应用的 state 可能长这样：

```javascript
{
  todos: [{
    text: 'Eat food',
    completed: true
  }, {
    text: 'Exercise',
    completed: false
  }],
  visibilityFilter: 'SHOW_COMPLETED'
}
```

[slide]
# 核心概念
---
这个对象就像 “Model”，区别是它并没有 setter（修改器方法）。因此其它的代码不能随意修改它，造成难以复现的 bug。

要想更新 state 中的数据，你需要发起一个 action。Action 就是一个普通 JavaScript 对象（注意到没，这儿没有任何魔法？）用来描述发生了什么。下面是一些 action 的示例：

```javascript
{ type: 'ADD_TODO', text: 'Go to swimming pool' }
{ type: 'TOGGLE_TODO', index: 1 }
{ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }
```

[slide]
# 核心概念
---
强制使用 action 来描述所有变化带来的好处是可以清晰地知道应用中到底发生了什么。如果一些东西改变了，就可以知道为什么变。action 就像是描述发生了什么的指示器。最终，为了把 action 和 state 串起来，开发一些函数，这就是 reducer。再次地，没有任何魔法，reducer 只是一个接收 state 和 action，并返回新的 state 的函数。 对于大的应用来说，不大可能仅仅只写一个这样的函数，所以我们编写很多小函数来分别管理 state 的一部分：

```javascript
function visibilityFilter(state = 'SHOW_ALL', action) {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter;
  } else {
    return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
  case 'ADD_TODO':
    return state.concat([{ text: action.text, completed: false }]);
  case 'TOGGLE_TODO':
    return state.map((todo, index) =>
      action.index === index ?
        { text: todo.text, completed: !todo.completed } :
        todo
   )
  default:
    return state;
  }
}
```

[slide]
# 核心概念
---
再开发一个 reducer 调用这两个 reducer，进而来管理整个应用的 state：

```javascript
function todoApp(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  };
}
```
这差不多就是 Redux 思想的全部。注意到没我们还没有使用任何 Redux 的 API。Redux 里有一些工具来简化这种模式，但是主要的想法是如何根据这些 action 对象来更新 state，而且 90% 的代码都是纯 JavaScript，没用 Redux、Redux API 和其它魔法。

[slide]
# 三大原则
---
## 单一数据源
- 整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。

- 这让同构应用开发变得非常容易。来自服务端的 state 可以在无需编写更多代码的情况下被序列化并注入到客户端中。由于是单一的 state tree ，调试也变得非常容易。在开发中，你可以把应用的 state 保存在本地，从而加快开发速度。此外，受益于单一的 state tree ，以前难以实现的如“撤销/重做”这类功能也变得轻而易举。

[slide]
# 三大原则
---
## State 是只读的

- 唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。

- 这样确保了视图和网络请求都不能直接修改 state，相反它们只能表达想要修改的意图。因为所有的修改都被集中化处理，且严格按照一个接一个的顺序执行，因此不用担心竞态条件（race condition）的出现。 Action 就是普通对象而已，因此它们可以被日志打印、序列化、储存、后期调试或测试时回放出来。

```javascript
store.dispatch({
  type: 'COMPLETE_TODO',
  index: 1
})

[slide]
# 三大原则
---
## 使用纯函数来执行修改

- 为了描述 action 如何改变 state tree ，你需要编写 reducers。

- Reducer 只是一些纯函数，它接收先前的 state 和 action，并返回新的 state。刚开始你可以只有一个 reducer，随着应用变大，你可以把它拆成多个小的 reducers，分别独立地操作 state tree 的不同部分，因为 reducer 只是函数，你可以控制它们被调用的顺序，传入附加数据，甚至编写可复用的 reducer 来处理一些通用任务，如分页器。

```javascript
function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case 'COMPLETE_TODO':
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: true
          })
        }
        return todo
      })
    default:
      return state
  }
}

import { combineReducers, createStore } from 'redux'
let reducer = combineReducers({ visibilityFilter, todos })
let store = createStore(reducer)
```

[slide]
# 基础
---
- Action
- Reducer
- Store
- 数据流
- 搭配 React

[slide]
# Action
---
- 首先，让我们来给 action 下个定义。
- Action 是把数据从应用（译者注：这里之所以不叫 view 是因为这些数据有可能是服务器响应，用户输入或其它非 view 的数据 ）传到 store 的有效载荷。它是 store 数据的唯一来源。一般来说你会通过 store.dispatch() 将 action 传到 store。
- 添加新 todo 任务的 action 是这样的：
```javascript
const ADD_TODO = 'ADD_TODO'
{
  type: ADD_TODO,
  text: 'Build my first Redux app'
}
```
- Action 本质上是 JavaScript 普通对象。我们约定，action 内必须使用一个字符串类型的 type 字段来表示将要执行的动作。多数情况下，type 会被定义成字符串常量。当应用规模越来越大时，建议使用单独的模块或文件来存放 action。
- 除了 type 字段外，action 对象的结构完全由你自己决定。

[slide]
# Action 创建函数
---
- Action 创建函数 就是生成 action 的方法。“action” 和 “action 创建函数” 这两个概念很容易混在一起，使用时最好注意区分。
- 在 Redux 中的 action 创建函数只是简单的返回一个 action:
```javascript
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}
```
- Redux 中只需把 action 创建函数的结果传给 dispatch() 方法即可发起一次 dispatch 过程。
```javascript
dispatch(addTodo(text))
```
- 或者创建一个 被绑定的 action 创建函数 来自动 dispatch：
```javascript
const boundAddTodo = text => dispatch(addTodo(text))
// 直接调用
boundAddTodo(text);
```
- store 里能直接通过 store.dispatch() 调用 dispatch() 方法，但是多数情况下你会使用 react-redux 提供的 connect() 帮助器来调用。bindActionCreators() 可以自动把多个 action 创建函数 绑定到 dispatch() 方法上。

[slide]
# Action examples
---
```javascript
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * 其它的常量
 */
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action 创建函数
 */
export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
```

[slide]
# Reducer
---
Reducers 指定了应用状态的变化如何响应 actions 并发送到 store 的，记住 actions 只是描述了有事情发生了这一事实，并没有描述应用如何更新 state。

[slide]
# Reducer 之 设计 State 结构
---
- 在 Redux 应用中，所有的 state 都被保存在一个单一对象中。建议在写代码前先想一下这个对象的结构。如何才能以最简的形式把应用的 state 用对象描述出来？
- 以 todo 应用为例，需要保存两种不同的数据：
  当前选中的任务过滤条件；
  完整的任务列表。
- 通常，这个 state 树还需要存放其它一些数据，以及一些 UI 相关的 state。这样做没问题，但尽量把这些数据与 UI 相关的 state 分开。
```javascript
{
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true,
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}
```

[slide]
# Reducer 之 Action 处理
---
- 现在我们已经确定了 state 对象的结构，就可以开始开发 reducer。reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state。
```javascript
(previousState, action) => newState
```
- 之所以将这样的函数称之为reducer，是因为这种函数与被传入 Array.prototype.reduce(reducer, ?initialValue) 里的回调函数属于相同的类型。保持 reducer 纯净非常重要。永远不要在 reducer 里做这些操作：
  - 修改传入参数；
  - 执行有副作用的操作，如 API 请求和路由跳转；
  - 调用非纯函数，如 Date.now() 或 Math.random()。
- 在高级篇里会介绍如何执行有副作用的操作。现在只需要谨记 reducer 一定要保持纯净。只要传入参数相同，返回计算得到的下一个 state 就一定相同。没有特殊情况、没有副作用，没有 API 请求、没有变量修改，单纯执行计算。
- 明白了这些之后，就可以开始编写 reducer，并让它来处理之前定义过的 action。
- 我们将以指定 state 的初始状态作为开始。Redux 首次执行时，state 为 undefined，此时我们可借机设置并返回应用的初始 state。
```javascript
import { VisibilityFilters } from './actions'

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

function todoApp(state = initialState, action) {
  // 这里暂不处理任何 action，
  // 仅返回传入的 state。
  return state
}
```
- 现在可以处理 SET_VISIBILITY_FILTER。需要做的只是改变 state 中的 visibilityFilter。
```javascript
function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
      // return {...state, visibilityFilter: action.filter}
    default:
      return state
  }
}
```



[slide]
# redux 应用
---
- redux
- react-redux
- redux-logger
- redux-thunk

[slide]
# react 项目搭建必备
- redux 相关
- react-router
- axios
- classnames
- history

[slide]
# Angular
---

[slide]
# 基本概念
---
- 表达式
- 指令
- scope
- 控制器
- 过滤器
- Service
- 条件渲染
- 列表渲染
- 事件处理
- 模块
- 表单
- 全局 API

[slide]
# 表达式
---
表达式写在双大括号内：{{ expression }}, 把数据绑定到 HTML，这与 ng-bind 指令有异曲同工之妙。

```html
<div ng-app="">
  <p>我的第一个表达式: {{ 5 + 5 }}</p>
</div>
```

[slide]
# 指令
---
- 通过指令来扩展 HTML。
- 通过内置的指令来为应用添加功能。
- 自定义指令。
```javascript
var app = angular.module("myApp", []);
app.directive("myDirective", function() {
    return {
        restrict : "A", // E/A/C/M
        template : "<h1>自定义指令!</h1>"
    };
});
```

[slide]
# scope
---
- Scope(作用域) 是应用在 HTML (视图) 和 JavaScript (控制器)之间的纽带。
- Scope 是一个对象，有可用的方法和属性。
- Scope 可应用在视图和控制器上。

[slide]
# 控制器
---
- 控制器 控制 AngularJS 应用程序的数据。
- 控制器是常规的 JavaScript 对象。
- ng-controller 指令定义了应用程序控制器

```html
<div ng-app="myApp" ng-controller="myCtrl">
  名: <input type="text" ng-model="firstName"><br>
  姓: <input type="text" ng-model="lastName"><br>
  <br>
  姓名: {{firstName + " " + lastName}}
</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});
</script>
```

[slide]
# 过滤器
---
- 内置: currency/filter/lowercase/orderBy/uppercase
```html
<div ng-app="myApp" ng-controller="personCtrl">
  <p>姓名为 {{ lastName | uppercase }}</p>
</div>
```
- 自定义过滤器, `.filter`
```javascript
app.filter('reverse', function() { //可以注入依赖
    return function(text) {
        return text.split("").reverse().join("");
    }
});
```

[slide]
# Service
---
- 内置: $http/$timeout/$interval/$location
- 自定义
```javascript
app.service('myService', function() {
    this.myFunc = function (x) {
        return x.toUpperCase();
    }
});
app.controller('myCtrl', function($scope, myService) {
    $scope.hex = myService.myFunc('hello');
});
```

[slide]
# 条件渲染
---
ng-if, ng-show, ng-hide, ng-switch

[slide]
# 事件处理
---
- ng-click
- $broadcast, $emit, $on

[slide]
# 模块
---
- 模块定义了一个应用程序。
- 模块是应用程序中不同部分的容器。
- 模块是应用控制器的容器。
- 控制器通常属于一个模块。
```html
<div ng-app="myApp">...</div>
<script>
var app = angular.module("myApp", []);
</script>
```

[slide]
# 表单
---
- HTML 控件: input/select/button/textarea
- 数据绑定: ng-model

```html
<form>
First Name: <input type="text" ng-model="firstname">
</form>

<h1>You entered: {{firstname}}</h1>
```

[slide]
# 全局 API
---
- angular.bootstrap
- angular.module
- angular.copy()
- angular.isFunction
- angular.isArray

[slide]
# Angular vs react vs vue
---

| | Angular1.x | React | Vue
:-------:|:------:|:-------:|:--------:
路由 | $stateProvider | react-router | vue-router
异步请求 | $http | axios | axios
状态管理 | scope | redux | vuex |

