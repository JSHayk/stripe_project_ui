import axios from "axios";

export const BASE_URL = "https://stripe-project-api.onrender.com/api";

const $api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export default $api;
