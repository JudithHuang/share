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

组件 (Component) 是 Vue.js 最强大的功能之一。组件可以扩展 HTML 元素，封装可重用的代码。在较高层面上，组件是自定义元素，Vue.js 的编译器为它添加特殊功能。在有些情况下，组件也可以表现为用 is 特性进行了扩展的原生 HTML 元素。
所有的 Vue 组件同时也都是 Vue 的实例，所以可接受相同的选项对象 (除了一些根级特有的选项) 并提供相同的生命周期钩子。

[slide]
# slot
---
为了让组件可以组合，我们需要一种方式来混合父组件的内容与子组件自己的模板。这个过程被称为内容分发 (即 Angular 用户熟知的“transclusion”)。Vue.js 实现了一个内容分发 API，使用特殊的 <slot> 元素作为原始内容的插槽。

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