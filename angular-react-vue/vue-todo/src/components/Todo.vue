<template>
  <section class="todoapp" v-cloak>
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?" v-model="newTodo" @keyup.enter="addTodo">
    </header>
    <section class="main" v-show="todos.length">
      <ul class="todo-list">
        <li class="todo" v-for="todo in todos"
          :key="todo.id.toHexString()"
          :class="{completed: todo.completed, editing: todo == editedTodo}"
        >
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed">
            <label @dblclick="editTodo(todo)" @click="onToggle(todo)">{{todo.title}}</label>
            <button class="destroy" @click="removeTodo(todo)"></button>
          </div>
          <input class="edit"
            type="text"
            v-model="todo.title"
            v-todo-focus="todo == editedTodo"
            @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)"
            @keyup.esc="cancelEdit(todo)"
          >
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
import { ObjectIDHelper, Todos } from '../engine/index'
import 'todomvc-app-css/index.css'

export default {
  name: 'Todo',
  props: {
    msg: String
  },
  data() {
    return {
      todos: Todos.getList(),
      newTodo: '',
      editedTodo: null
    }
  },
  created: function() {
    console.log('created');
  },
  mounted: function() {
    console.log('mounted');
  },
  updated: function() {
    console.log('updated');
  },
  destroyed: function() {
    console.log('destroyed');
  },
  methods: {
    addTodo: function () {
      const value = this.newTodo && this.newTodo.trim();
      if (!value) {
        return;
      }
      const newTodo = { id: ObjectIDHelper.generate(new Date().valueOf()), title: value, completed: false }
      Todos.add(newTodo);

      this.todos = Todos.getList();
      this.newTodo = '';
    },

    removeTodo: function (todo) {
      Todos.del(todo.id);
      this.todos = Todos.getList();
    },

    editTodo: function (todo) {
      this.beforeEditCache = todo.title;
      this.editedTodo = todo;
    },

    doneEdit: function (todo) {
      if (!this.editedTodo) {
        return;
      }
      this.editedTodo = null;
      todo.title = todo.title.trim();
      if (!todo.title) {
        this.removeTodo(todo);
      }
    },

    cancelEdit: function (todo) {
      this.editedTodo = null;
      todo.title = this.beforeEditCache;
    },

    onToggle: function (todo) {
      const newTodo = { ...todo, completed: !todo.completed }
      Todos.edit(newTodo)
      this.todos = Todos.getList()
    }
  },

  // a custom directive to wait for the DOM to be updated
  // before focusing on the input field.
  // http://vuejs.org/guide/custom-directive.html
  directives: {
    'todo-focus': function (el, binding) {
      if (binding.value) {
        el.focus();
      }
    }
  }
}
</script>
