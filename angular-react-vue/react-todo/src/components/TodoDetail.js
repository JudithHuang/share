import React, { Component } from 'react';

class TodoDetail extends Component {
  render() {
    return (
      <div className="todo-detail">
        <h1>Todo Detail</h1>
        <div>
          ID: {this.props.todo.objectId}
        </div>
        <div>
          title: {this.props.todo.title}
        </div>
      </div>
    );
  }
}

export default TodoDetail;
