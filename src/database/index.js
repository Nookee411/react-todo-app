// Provide object of database methods for CRUD in webDB

const URL_BASE = new URL('http://localhost:3000/todos/');
const REQUEST_COMMON_HEADERS = {
  'Content-Type': 'application/json;charset=utf-8',
};
const fetchTodos = () =>
  fetch(URL_BASE).then((response) => {
    if (response.ok) return response.json();
    throw new Error('fetch Eror');
  });

const addTodo = (content) =>
  fetch(URL_BASE, {
    method: 'POST',
    headers: { ...REQUEST_COMMON_HEADERS },
    body: JSON.stringify({ content }),
  }).then(() => fetchTodos());

const removeTodo = (id) =>
  fetch(URL_BASE, {
    method: 'DELETE',
    headers: {
      ...REQUEST_COMMON_HEADERS,
    },
    body: JSON.stringify({ id }),
  }).then(() => fetchTodos());

const updateTodo = ({ id, todo }) =>
  fetch(URL_BASE, {
    method: 'PUT',
    headers: {
      ...REQUEST_COMMON_HEADERS,
    },
    body: JSON.stringify({ id, todo }),
  }).then(() => fetchTodos());

const findTodoById = (id) =>
  fetch(URL_BASE, {
    method: 'GET',
    headers: { ...REQUEST_COMMON_HEADERS },
    body: JSON.stringify({ id }),
  }).then(() => fetchTodos());

export default {
  fetchTodos,
  addTodo,
  removeTodo,
  updateTodo,
  findTodoById,
};
