import { Todos } from '../../engine/index';

const VIEW = 'todoDetail/view';

// actions
export const viewTodo = (id) => {
  return async (dispatch) => {
    const todo = await Todos.get(id);
    dispatch({ type: VIEW, todo });
  };
};

// reducers
export default (state = {}, action) => {
  switch(action.type) {
    case VIEW:
      return action.todo || {};
    default:
      return state;
  }
}
