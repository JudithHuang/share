import { Todos } from '../../engine/index';

const VIEW = 'todoDetail/view';

// actions
export const viewTodo = function (id) {
  return function (dispatch) {
    const todo = Todos.get(id);
    dispatch({ type: VIEW, todo });
  };
};

// reducers
export default function(state = {}, action) {
  switch(action.type) {
    case VIEW:
      return action.todo || {};
    default:
      return state;
  }
}
