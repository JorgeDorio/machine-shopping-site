// import axios from "axios";
// import { parse } from "cookie";

// export const api = axios.create({
//   baseURL: "http://localhost:5042/api",
//   timeout: 1000,
// });

// api.interceptors.request.use((config) => {
//   const cookies = parse(context.req.headers.cookie || "");
//   const token = Cookies.get("token");
//   console.log(token);

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });
