import axios from 'axios';

const API_URL = '/api/users';
const authHeader = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
});

export const getAllUsers = () =>
  axios.get(API_URL, authHeader()).then(res => res.data);

export const getUserById = id =>
  axios.get(`${API_URL}/${id}`, authHeader()).then(res => res.data);

export const createUser = user =>
  axios.post(API_URL, user, authHeader()).then(res => res.data);

export const updateUser = (id, user) =>
  axios.put(`${API_URL}/${id}`, user, authHeader()).then(res => res.data);
