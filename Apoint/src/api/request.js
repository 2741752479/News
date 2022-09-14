// 请求
import axios from 'axios'

// create an axios instance   创建axios实例
const instance = axios.create({
	baseURL: 'http://localhost:8888', // api 的 base_url
	withCredentials: false,//跨域时使用凭证，默认带上cookies
	
  })

// 添加请求拦截器
instance.interceptors.request.use(
  config => {
   //判断token是否存在
   if (localStorage.getItem('token')) {
    // 在请求头中添加token
      config.headers.token = localStorage.getItem('token');
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  });

export default instance
