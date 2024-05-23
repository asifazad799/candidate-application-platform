import axios from "axios";
const baseUrl = "https://api.weekday.technology";

export const API = axios.create({
  baseURL: baseUrl,
});
