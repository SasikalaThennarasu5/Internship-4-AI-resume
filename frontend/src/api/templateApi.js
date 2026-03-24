import axios from "axios";

const BASE_URL = "https://internship-4-ai-resume-5.onrender.com/api/templates/";

export const getTemplates = (category) => {
  return axios.get(`${BASE_URL}?category=${category}`);
};

export const getTemplatePreview = () => {
  return axios.get("https://internship-4-ai-resume-5.onrender.com/api/templates/preview/");
};