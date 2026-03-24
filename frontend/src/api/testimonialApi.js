import axios from "axios";

export const getTestimonials = () => {
  return axios.get("https://internship-4-ai-resume-5.onrender.com/api/testimonials/");
};