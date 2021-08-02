import axios from 'axios';

const URL_BASE = new URL('http://localhost:3000/todos/');

const fetchTodos = (username) =>
  axios.get(`${URL_BASE}/?username=${username}`).then((res) => res.data);

const addTodo = (content, username) =>
  axios
    .post(URL_BASE, {
      content,
      userID: username,
    })
    .then(() => fetchTodos(username));

const removeTodo = (id, username) =>
  axios
    .delete(URL_BASE, {
      data: {
        id,
      },
    })
    .then(() => fetchTodos(username));

const updateTodo = ({ id, todo }, username) =>
  axios
    .put(URL_BASE, {
      id,
      todo,
    })
    .then(() => fetchTodos(username));

const findTodoById = (id, username) =>
  axios
    .get(URL_BASE, {
      id,
    })
    .then(() => fetchTodos(username));

export default {
  fetchTodos,
  addTodo,
  removeTodo,
  updateTodo,
  findTodoById,
};
