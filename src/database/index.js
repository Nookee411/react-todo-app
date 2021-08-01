import axios from 'axios';

const URL_BASE = new URL('http://localhost:3000/todos/');

const fetchTodos = (userID) =>
  axios.get(`${URL_BASE}/?userID=${userID}`).then((res) => res.data);

const addTodo = (content, userID) =>
  axios
    .post(URL_BASE, {
      content,
      userID,
    })
    .then(() => fetchTodos(userID));

const removeTodo = (id, userID) =>
  axios
    .delete(URL_BASE, {
      data: {
        id,
      },
    })
    .then(() => fetchTodos(userID));

const updateTodo = ({ id, todo }, userID) =>
  axios
    .put(URL_BASE, {
      id,
      todo,
    })
    .then(() => fetchTodos(userID));

const findTodoById = (id, userID) =>
  axios
    .get(URL_BASE, {
      id,
    })
    .then(() => fetchTodos(userID));

export default {
  fetchTodos,
  addTodo,
  removeTodo,
  updateTodo,
  findTodoById,
};
