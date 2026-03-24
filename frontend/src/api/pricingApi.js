import axios from "axios";

const BASE_URL = "https://internship-4-ai-resume-5.onrender.com/api/pricing/";

export const getPlans = (type) => {
  return axios.get(`${BASE_URL}?type=${type}`);
};