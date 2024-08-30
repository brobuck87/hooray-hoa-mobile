import axios from "axios";

const baseUrl = "https://hooray-hoa-api.onrender.com";

const api = {
  login: (data) => axios.post(`${baseUrl}/api/v1/auth/login`, data),
  register: (data) => axios.post(`${baseUrl}/api/v1/auth/register`, data),
};

export default api;
/* {
    "name": "john",
    "email": "john@john.com",
    "password": "john",
    "role": "admin"
} */
