import axios from "axios";

// in production, there's no localhost so we have to make this dynamic
//const BASE_URL = import.meta.env.MODE === "development" ? "/api" : "/api";

const api = axios.create({
  baseURL: "http://localhost:3000" ,
});

export default api;