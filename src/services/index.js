import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";
const USER_ID = 1;

export const getTodos = () => {
  return axios
    .get(`${BASE_URL}/todos?userId=${USER_ID}`)
    .then((res) => res.data);
};

export const deleteTodo = (id) => {
  return axios.delete(`${BASE_URL}/todos/${id}`).then((res) => res.data);
};

export const addTodo = (title, completed) => {
  return axios
    .post(`${BASE_URL}/todos`, { userId: USER_ID, title, completed })
    .then((res) => res.data);
};

export const updateTodo = (id, title, completed) => {
  return axios
    .patch(`${BASE_URL}/todos/${id}`, {
      title,
      completed,
      userId: USER_ID,
    })
    .then((res) => res.data);
};
