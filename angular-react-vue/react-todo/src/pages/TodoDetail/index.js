import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { TodoDetail as Detail } from '../../components/index';
import * as actions from './state';

class TodoDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.viewTodo(id);
  }

  render() {
    console.log()
    return (
      <div className="todo-detail">
        <Detail todo={this.props.todoDetail} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { todoDetail: state.todoDetail }
}

function mapDispatchToProps(dispatch) {
  return {
    viewTodo: bindActionCreators(actions.viewTodo, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoDetail)
