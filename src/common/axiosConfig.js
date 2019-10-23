import axios from 'axios';
import qs from 'qs';

const axiosConfigure = () => {
    // 创建axios实例
  const service = axios.create({
    baseURL: 'https://dube.io/service/ping', 
    timeout: 5000, // 请求的超时时间
    //设置默认请求头，使post请求发送的是formdata格式数据// axios的header默认的Content-Type好像是'application/json;charset=UTF-8',我的项目都是用json格式传输，如果需要更改的话，可以用这种方式修改
    headers: {  
      "Content-Type":"text/plain",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true // 允许携带cookie
  })
  // 发送请求前处理request的数据
  axios.defaults.transformRequest = [function (data) {
    let newData = ''
    for (let k in data) {
      newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&'
    }
    return newData
  }]

  // request拦截器
  service.interceptors.request.use(
    config => {
      // 发送请求之前，要做的业务
      return config
    },
    error => {
      // 错误处理代码
      return Promise.reject(error)
    }
  )

  // 拦截响应response，并做一些错误处理
  axios.interceptors.response.use((response) => {
      if (response.status === 200 || response.status === 206 || response.status === 304) {
          return response.data;
      }
  }, (err) => { // 这里是返回状态码不为200时候的错误处理
      return Promise.reject(err);;
  });

}
export default axiosConfigure; 