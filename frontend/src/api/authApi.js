import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/auth";

// REGISTER
export const registerUser = (data) => {
  return axios.post(`${BASE_URL}/register/`, data);
};

// LOGIN
export const loginUser = (data) => {
  return axios.post(`${BASE_URL}/login/`, data);
};