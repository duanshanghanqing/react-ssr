import axios from 'axios';

// 创建实例时修改配置
var instance = axios.create({
    baseURL: 'http://47.95.113.63/ssr'
});

export default instance;
