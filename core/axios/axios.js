import axios from 'axios';

const instance = axios.create({
  baseURL: '/', // 替换为你的接口地址
  timeout: 5000,
});

// 请求拦截器
instance.interceptors.request.use(
  config => {
    return config;
  },
  error => Promise.reject(error)
);

// 响应拦截器
instance.interceptors.response.use(
  response => response.data,
  error => {
    console.error('请求出错:', error);
    return Promise.reject(error);
  }
);

export default instance;