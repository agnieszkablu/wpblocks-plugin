import { ADD_TODO, POPULATE_TODOS } from './types';
export const addTodo = (todo) => {
  // action.
  return {
    type: ADD_TODO,
    todo
  };
};

export const populateTodos = (todos) => {
  return {
    type: POPULATE_TODOS,
    todos
  };
};
