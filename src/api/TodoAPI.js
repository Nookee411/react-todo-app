/* eslint-disable consistent-return */
import axios from 'axios';
import Cookies from 'js-cookie';

const URL_BASE = new URL('http://localhost:3000/todos/');
const HEADERS = {
  Bearer: Cookies.get('ACCESS_TOKEN'),
};

const fetchTodos = () =>
  axios
    .get(`${URL_BASE}/`, {
      headers: {
        ...HEADERS,
      },
    })
    .then((res) => res.data.data);

const addTodo = (content) =>
  axios
    .post(
      URL_BASE,
      {
        content,
      },
      {
        headers: {
          ...HEADERS,
        },
      },
    )
    .then(() => fetchTodos());

const removeTodo = (id) =>
  axios
    .delete(URL_BASE, {
      headers: {
        ...HEADERS,
      },
      data: {
        id,
      },
    })
    .then(() => fetchTodos());

const updateTodo = ({ id, todo }) =>
  axios
    .put(
      URL_BASE,
      {
        id,
        todo,
      },
      {
        headers: {
          ...HEADERS,
        },
      },
    )
    .then(() => fetchTodos());

const findTodoById = (id) =>
  axios
    .get(
      URL_BASE,
      {
        id,
      },
      {
        headers: {
          ...HEADERS,
        },
      },
    )
    .then(() => fetchTodos());

export default {
  fetchTodos,
  addTodo,
  removeTodo,
  updateTodo,
  findTodoById,
};
