import axios from "axios";

const api = axios.create({
  baseURL: "https://interview-question-recommendation-engine.onrender.com/api",
});

export default api;