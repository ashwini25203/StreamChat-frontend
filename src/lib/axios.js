import axios from "axios";

const BASE_URL = "https://streamchat-backend-hlv9.onrender.com/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});
