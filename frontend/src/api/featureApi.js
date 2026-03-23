import axios from "axios";

export const getFeatures = () =>
  axios.get("http://127.0.0.1:8000/api/features/");