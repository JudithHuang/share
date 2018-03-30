import { ObjectIDHelper, Todos } from '../engine/index';

const ADD = 'todos/ADD';
const EDIT = 'todos/EDIT';
const DEL = 'todos/DELETE';
const TOGGLE = 'todos/TOGGLE';

// actions
export const addTodo = function (todo) {
  return function (dispatch) {
    const newTodo = { id: ObjectIDHelper.generate(new Date().valueOf()), title: todo };
    dispatch({ type: ADD, todo: newTodo });
  };
};

export const editTodo = function (todo, newVal) {
  return function (dispatch) {
    dispatch({ type: EDIT, todo: { ...todo, title: newVal } });
  };
};

export const delTodo = function (id) {
  return function (dispatch) {
    dispatch({ type: DEL, id });
  };
};

export const toggle = function (todo) {
  return function (dispatch) {
    dispatch({ type: TOGGLE, todo });
  };
}

// reducers
export default function(state = Todos.getList(), action) {
  switch(action.type) {
    case ADD:
      Todos.add(action.todo);
      return Todos.getList();
    case EDIT:
      Todos.edit(action.todo);
      return Todos.getList();
    case DEL:
      Todos.del(action.id);
      return Todos.getList();
    case TOGGLE:
      const newTodo = { ...action.todo, completed: !action.todo.completed }
      Todos.edit(newTodo);
      return Todos.getList();
    default:
      return state;
  }
}
