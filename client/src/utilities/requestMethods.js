import axios from "axios";

const TOKEN = "token";

const BASE_URI = "http://localhost:1700/api/v1";

// PUBLIC REQUEST
export const publicRequest = axios.create({
  baseURL: BASE_URI,
});

// USER REQUEST
export const userRequest = axios.create({
  baseURL: BASE_URI,
  headers: { token: `Bearer ${TOKEN}` },
});
