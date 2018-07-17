import axios from 'axios';
// import store from '../store';

export const fetch = (url, params, method) => {
  return new Promise((resolve, reject) => {
    let ajx;
    if (method === 'get') {
      ajx = axios.get(url, params);
    } else if (method === 'delete') {
      ajx = axios.delete(url, params);
    } else if (method === 'put') {
      ajx = axios.put(url, params);
    } else {
      ajx = axios.post(url, params);
    }
    ajx.then(res => {
      if (res.code === 1) {
        reject(res);
      } else {
        resolve(res);
      }
    }).catch((err) => {
      if (err) return err;
      // console.log(err);
    })
  })
};

const development = 'http://localhost:2618';
const API = (url, method) => params => fetch(development + url, params, method);




export default {
  //获取用户信息
  getGymAPI: API('/gym', 'post'),
  getGymListAPI: API('/gymlist', 'get'),
  getReserveAPI:API('/reserve','get'),
  postReserveAPI:API('/reserve','post'),
}

