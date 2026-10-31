export const FETCH_TODOS = 'FETCH_TODOS'; 

export const fetchTodos = () => {
  return {
    type: FETCH_TODOS
  };
};

export default {
  FETCH_TODOS() {
    return window
      .fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch todos.');
        }
        return response.json();
      });
  }
}
