import axios from 'axios';

const URL_BASE = new URL('http://localhost:3000/todos/');

const REQUEST_COMMON_HEADERS = {
  'Content-Type': 'application/json;charset=utf-8',
};
const fetchTodos = () => axios.get(URL_BASE).then((res) => res.data);

const addTodo = (content) =>
  axios
    .post(URL_BASE, {
      content,
    })
    .then(() => fetchTodos());

const removeTodo = (id) =>
  axios
    .delete(URL_BASE, {
      data: {
        id,
      },
    })
    .then(() => fetchTodos());

const updateTodo = ({ id, todo }) =>
  axios
    .put(URL_BASE, {
      id,
      todo,
    })
    .then(() => fetchTodos());

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
