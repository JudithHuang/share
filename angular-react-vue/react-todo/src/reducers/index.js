import { combineReducers } from 'redux';
import todos from '../pages/TodoList/state';
import todoDetail from '../pages/TodoDetail/state';

const todoApp = combineReducers({
  todos,
  todoDetail
});

export default todoApp;