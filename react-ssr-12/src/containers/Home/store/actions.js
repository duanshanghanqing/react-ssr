export const CHANGE_HOME_LIST = 'CHANGE_HOME_LIST';

export const changeList = (data) => ({
    type: CHANGE_HOME_LIST,
    data
})


export const getHomeList = () => {
    return (dispatch, getState, axios) => {
        // 返回 Promise 对象，在服务端执行
        // 代理前地址： http://47.95.113.63/ssr/api/news.json
        // 浏览器渲染请求的地址： http://localhost:8081/api/news.json
        // 服务端渲染请求的地址： /api/news.json
        // let url = '';
        // if (server) {
        //     url = 'http://47.95.113.63/ssr/api/news.json'
        // } else {
        //     url = '/api/news.json'
        // }

        // 问题：在服务端渲染的时候这个文件找不到会报错，因此服务端渲染时要请求后端完整路径
        //       http://47.95.113.63/ssr/api/news.json
        return axios.get('/api/news.json').then((res) => {
            let list = res.data.data;
            dispatch(changeList(list));
        });
    }
}
