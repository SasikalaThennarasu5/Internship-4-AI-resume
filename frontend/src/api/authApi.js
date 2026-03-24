import axios from "axios";

const BASE_URL = "https://internship-4-ai-resume-5.onrender.com/api/auth";

// REGISTER
export const registerUser = (data) => {
  return axios.post(`${BASE_URL}/register/`, data);
};

// LOGIN
export const loginUser = (data) => {
  return axios.post(`${BASE_URL}/login/`, data);
};