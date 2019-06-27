import axios from 'axios';

// 创建实例时修改配置
var instance = axios.create({
    baseURL: ''
});

export default instance;
