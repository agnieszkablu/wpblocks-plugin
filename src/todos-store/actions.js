import { ADD_TODO, POPULATE_TODOS } from './types';
import { createTodo } from './controls';
import { dispatch } from '@wordpress/data';

export function* addTodo(title) {
  // action.
  try {
  const todo = yield createTodo(title);

  return {
    type: ADD_TODO,
    todo
  };
  } catch (error) {
    console.error('Failed to add todo:', error);
    return dispatch('core/notices').createErrorNotice(
      error.message, 'Failed to create todos.'
    );
  }
};

export const populateTodos = (todos) => {
  return {
    type: POPULATE_TODOS,
    todos
  };
};
