import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { Consts } from '../engine/index';
import * as todoActions from '../reducers/todos';
import TodoItem from './TodoItem';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nowShowing: Consts.appStatus.ALL_TODOS,
      editing: null,
      newTodo: ''
    };
  }

  toggle(todoToToggle) {
    this.props.toggle(todoToToggle);
  }

  destroy(todo) {
    this.props.delTodo(todo.id);
  }

  edit(todo) {
    this.setState({editing: todo.id});
  }

  save(todoToSave, text) {
    this.props.editTodo(todoToSave, text);
    this.setState({editing: null});
  }

  cancel() {
    this.setState({editing: null});
  }

  handleChange(event) {
    this.setState({newTodo: event.target.value});
  }

  handleNewTodoKeyDown(event) {
    if (event.keyCode !== Consts.eventKey.ENTER_KEY) {
      return;
    }

    event.preventDefault();

    var val = this.state.newTodo.trim();

    if (val) {
      this.props.addTodo(val);
      this.setState({newTodo: ''});
    }
  }

  renderTodoItems() {
    const { todos } = this.props;
    const shownTodos = todos.filter(function (todo) {
      switch (this.state.nowShowing) {
      case Consts.appStatus.ACTIVE_TODOS:
        return !todo.completed;
      case Consts.appStatus.COMPLETED_TODOS:
        return todo.completed;
      default:
        return true;
      }
    }, this);

    return shownTodos.map(function (todo) {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={this.toggle.bind(this, todo)}
            onDestroy={this.destroy.bind(this, todo)}
            onEdit={this.edit.bind(this, todo)}
            editing={this.state.editing === todo.id}
            onSave={this.save.bind(this, todo)}
            onCancel={this.cancel}
          />
        );
      }, this);
  }

  renderMain() {
    const { todos } = this.props;
    const activeTodoCount = todos.reduce(function (accum, todo) {
      return todo.completed ? accum : accum + 1;
    }, 0);

    if (todos.length) {
      return (
        <section className="main">
          <ul className="todo-list">
            {this.renderTodoItems()}
          </ul>
        </section>
      );
    }

    return null;
  }

  renderFooter() {
    return (
      <div className="footer">
        footer
      </div>
    );
  }

  render() {
    return (
      <div>
        <header className="header">
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={this.state.newTodo}
            onKeyDown={this.handleNewTodoKeyDown.bind(this)}
            onChange={this.handleChange.bind(this)}
            autoFocus={true}
          />
        </header>
        {this.renderMain()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { todos: state.todos }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: bindActionCreators(todoActions.addTodo, dispatch),
    editTodo: bindActionCreators(todoActions.editTodo, dispatch),
    delTodo: bindActionCreators(todoActions.delTodo, dispatch),
    toggle: bindActionCreators(todoActions.toggle, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
