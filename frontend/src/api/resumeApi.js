import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api";

// 🔐 Get token
const getAuthHeader = () => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// ✅ Create Resume
export const createResume = (data) => {
  return axios.post(`${BASE_URL}/resumes/`, data, getAuthHeader());
};

// ✅ Get Resumes
export const getResumes = () => {
  return axios.get(`${BASE_URL}/resumes/`, getAuthHeader());
};