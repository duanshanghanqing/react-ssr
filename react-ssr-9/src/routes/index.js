import App from '../App';
import Home from '../containers/Home';
import Login from '../containers/Login';

// export default [
//     {
//         path: '/',
//         component: Home,
//         exact: true, // 表示路由精确匹配
//         loadData: Home.loadData
//     },
//     {
//         path: '/home',
//         component: Home,
//         loadData: Home.loadData
//     },
//     {
//         path: '/login',
//         component: Login
//     }
// ]

export default [
    {
        path: '/',
        component: App,
        routes: [
            {
                path: '/',
                component: Home,
                exact: true, // 表示路由精确匹配
                loadData: Home.loadData
            },
            {
                path: '/home',
                component: Home,
                exact: true, // 表示路由精确匹配
                loadData: Home.loadData
            },
            {
                path: '/login',
                exact: true,
                component: Login
            }
        ]
    }
]
