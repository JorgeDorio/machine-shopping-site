import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5042/api",
  timeout: 1000,
});
