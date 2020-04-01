// import store from './store/store'

let axios = require('axios');

const API_TEST_URL = "http://localhost:3000";

const ajax = axios.create({
  baseURL: API_TEST_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

ajax.interceptors.request.use((config) => {
  if (localStorage.vuex && JSON.parse(localStorage.vuex)["user"]["auth_token"] !== "") {
    config.headers = {
      ...config.headers, 'Authorization': JSON.parse(localStorage.vuex)["user"]["auth_token"]
    }
  }
  return config;
});

export default ajax;
