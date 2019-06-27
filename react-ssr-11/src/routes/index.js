import App from '../App';
import Home from '../containers/Home';
import Translation from '../containers/Translation';
import NotFound from '../containers/NotFound';

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
        loadData: App.loadData,
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
                exact: true,
                loadData: Home.loadData
            },
            {
                path: '/translation',
                component: Translation,
                exact: true,
                loadData: Translation.loadData
            },
            {
                // path: '/translation',
                component: NotFound,
                // exact: true
            }
        ]
    }
]
