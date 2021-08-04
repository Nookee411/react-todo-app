import axios from 'axios';

const URL_BASE = 'http://localhost:3000/user/';
const signUser = ({ login, password }) =>
  axios
    .post('http://localhost:3000/user/signin', { login, password })
    .then((res) => res.data);

const registerUser = ({ login, password }) =>
  axios.post(`${URL_BASE}signup`, { login, password });

const restoreUser = (token) =>
  axios
    .post(
      `${URL_BASE}restore`,
      {},
      {
        headers: { Bearer: token },
      },
    )
    .then((res) => res.data);

const UserAPI = { signUser, registerUser, restoreUser };
export default UserAPI;
