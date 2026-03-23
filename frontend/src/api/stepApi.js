import axios from "axios";

export const getSteps = () =>
  axios.get("http://127.0.0.1:8000/api/steps/");