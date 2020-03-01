let axios = require('axios');

// axios.defaults.withCredentials = true;


// let token = () => {
//   // code to get token from store
// }

const ajax = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization: '',
    'Content-Type': 'application/json',
  },
});

export default ajax;
