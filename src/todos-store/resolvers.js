// sideeffects
import { fetchTodos } from './controls';
import { populateTodos } from './actions';
import { dispatch } from '@wordpress/data';

export function* getTodos() {
  // this function is running each time the selectors toDos function is called.
  try {
    const todos = yield fetchTodos();
    return populateTodos(todos);
  } catch (error) {
    return dispatch('core/notices').createErrorNotice(
      error.message, 'Failed to fetch todos.'
    );
  }
}