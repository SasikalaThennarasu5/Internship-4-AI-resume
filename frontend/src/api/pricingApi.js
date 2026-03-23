import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/pricing/";

export const getPlans = (type) => {
  return axios.get(`${BASE_URL}?type=${type}`);
};