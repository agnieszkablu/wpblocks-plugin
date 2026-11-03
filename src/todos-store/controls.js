export const FETCH_TODOS = 'FETCH_TODOS'; 
export const CREATE_TODO = 'CREATE_TODO';

export const fetchTodos = () => {
  return {
    type: FETCH_TODOS
  };
};

export const createTodo = (title) => {
  return {
    type: CREATE_TODO,
    title
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
  },
  CREATE_TODO({title}) {
    return window
      .fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          completed: false,
          userId: 1
        })
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to create todo.');
        }
        return response.json();
      });
  }
}
