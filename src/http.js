import axios from 'axios'
import router from './router'

export default axios;

//请求拦截 设置统一header
axios.interceptors.request.use(config => {
    if (localStorage.wxToken) {
        config.headers.Authorization = localStorage.wxToken;
    }
    return config
}), err => {
    return Promise.reject(err);
}

// 响应拦截
axios.interceptors.response.use(response => {
    return response;
}),err => {
    // 错误提醒
    const { status } = response.data;
    if (status == 401) {
        // 说明Token值已经过期了
        localStorage.removeItem('wxToken')
        router.push('/login')
    } else return err.response.data;

    return Promise.reject(err);
}