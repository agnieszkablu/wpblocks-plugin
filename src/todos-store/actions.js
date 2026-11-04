import { ADD_TODO, POPULATE_TODOS, TOGGLE_TODO, UPDATE_TODO } from './types';
import { createTodo, toggleTodo as toggleTodoControl } from './controls';
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

export function* toggleTodo(todo, index) {
  try {
    yield updateTodo({...todo, loading: true}, index)
    const updatedTodo = yield toggleTodoControl(todo);
 
    return updateTodo(updatedTodo, index);
  } catch (error) {
    console.error('Failed to toggle todo:', error);
    return dispatch('core/notices').createErrorNotice(
      error.message, 'Failed to toggle todo.'
    );
  }
}

export const updateTodo = (todo, index) => {
  return {
    type: UPDATE_TODO,
    index,
    todo
  };
};

export const populateTodos = (todos) => {
  return {
    type: POPULATE_TODOS,
    todos
  };
};
