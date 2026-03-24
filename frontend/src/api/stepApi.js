import axios from "axios";

export const getSteps = () =>
  axios.get("https://internship-4-ai-resume-5.onrender.com/api/steps/");