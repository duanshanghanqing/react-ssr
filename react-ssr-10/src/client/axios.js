import axios from 'axios';

// 创建实例时修改配置
// var instance = axios.create({
//     baseURL: ''
// });

export default () => axios.create({
    baseURL: '',
    params: {
        secret: 'M5s2sPneDE'
    }
});
