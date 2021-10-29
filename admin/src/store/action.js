import axios from 'axios';
export const BASE_URL = "http://localhost:3000";

const client = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    withCredentials: false
});

function getDefaultHeader() {
    return {
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('accessToken')),
    }
}

client.interceptors.request.use((config) => {
    Object.assign(config.headers, getDefaultHeader());
    return config;
});

export const actions = {
  fetchUser(ctx) {
    return new Promise((resolve, reject) => {
      client
        .get(`${BASE_URL}/user`)
        .then(res => {
          ctx.commit('FETCH_USER', res.data);
          resolve(res);
        })
        .catch(err => {
          reject(err);
        })
    })
  }
}