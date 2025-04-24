import axios from 'axios';

const API_URL = '/api/tickets'; 

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});


export const getAllTickets = () =>
  axios.get(API_URL, authHeader()).then(res => res.data); 

export const getTicketById = (id) =>
  axios.get(`${API_URL}/${id}`, authHeader()).then(res => res.data);

export const createTicket = (ticketData) =>
  axios.post(API_URL, ticketData, authHeader()).then(res => res.data);


export const updateTicket = (id, ticketData) =>
  axios.put(`${API_URL}/${id}`, ticketData, authHeader()).then(res => res.data);

export const deleteTicket = (id) =>
  axios.delete(`${API_URL}/${id}`, authHeader()).then(res => res.data);
