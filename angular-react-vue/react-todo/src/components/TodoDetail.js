import React, { Component } from 'react';

class TodoDetail extends Component {
  render() {
    return (
      <div className="todo-detail">
        {this.props.todo.title}
      </div>
    );
  }
}

export default TodoDetail;
