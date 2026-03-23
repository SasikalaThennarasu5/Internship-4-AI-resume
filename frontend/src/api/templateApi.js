import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/templates/";

export const getTemplates = (category) => {
  return axios.get(`${BASE_URL}?category=${category}`);
};

export const getTemplatePreview = () => {
  return axios.get("http://127.0.0.1:8000/api/templates/preview/");
};