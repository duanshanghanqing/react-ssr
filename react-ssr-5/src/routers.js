import Home from './containers/Home';
import Login from './containers/Login';

export default [
    {
        path: '/',
        component: Home,
        exact: true // 表示路由精确匹配
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/login',
        component: Login
    }
]
