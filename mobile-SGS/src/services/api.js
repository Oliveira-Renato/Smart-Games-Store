import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.0.132:3000/",
});

export default API;
