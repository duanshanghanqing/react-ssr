import * as utils from './utils';

// 获取接口前缀
export const getBasicUrl = () => {
    if (utils.isServer()) {
        return 'http://47.95.113.63/ssr';
    } else {
        return '';
    }
}
