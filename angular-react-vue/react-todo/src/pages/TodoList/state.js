import { Todos } from '../../engine/index';

const FETCH_LIST = 'todos/list';
const ADD = 'todos/ADD';
const EDIT = 'todos/EDIT';
const DEL = 'todos/DELETE';
const TOGGLE = 'todos/TOGGLE';

// actions
export const fetchList = () => {
  return async (dispatch) => {
    const todos = await Todos.getList();
    dispatch({ type: FETCH_LIST, todos });
  }
}

export const addTodo = (todo) => {
  return async (dispatch) => {
    const newTodo = { title: todo };
    await Todos.add(newTodo);
    const todos = await Todos.getList();
    dispatch({ type: ADD, todos });
  };
};

export const editTodo = (todo, newVal) => {
  return async (dispatch) => {
    const newTodo = { ...todo, title: newVal };
    await Todos.edit(newTodo);
    const todos = await Todos.getList();
    dispatch({ type: EDIT, todos });
  };
};

export const delTodo = (id) => {
  return async (dispatch) => {
    await Todos.del(id);
    const todos = await Todos.getList();
    dispatch({ type: DEL, todos });
  };
};

export const toggle = (todo) => {
  return async (dispatch) => {
    const newTodo = { ...todo, completed: !todo.completed };
    await Todos.edit(newTodo);
    const todos = await Todos.getList();
    dispatch({ type: TOGGLE, todos });
  };
}

// reducers
export default function(state = [], action) {
  switch(action.type) {
    case FETCH_LIST:
    case ADD:
    case EDIT:
    case DEL:
    case TOGGLE:
      return action.todos;
    default:
      return state;
  }
}
