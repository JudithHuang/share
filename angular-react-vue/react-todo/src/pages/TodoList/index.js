import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Todos } from '../../components/index';
import * as todoActions from './state';

class TodoList extends Component {
  componentDidMount = () => {
    console.log('TodoList didMount')
    this.props.fetchList()
  }

  render() {
    return (
      <div className="todo-list">
        <Todos
          todos={this.props.todos}
          match={this.props.match}
          addTodo={this.props.addTodo}
          editTodo={this.props.editTodo}
          delTodo={this.props.delTodo}
          toggle={this.props.toggle}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { todos: state.todos }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchList: bindActionCreators(todoActions.fetchList, dispatch),
    addTodo: bindActionCreators(todoActions.addTodo, dispatch),
    editTodo: bindActionCreators(todoActions.editTodo, dispatch),
    delTodo: bindActionCreators(todoActions.delTodo, dispatch),
    toggle: bindActionCreators(todoActions.toggle, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
