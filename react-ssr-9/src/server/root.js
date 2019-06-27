import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom'; // matchPath： 只能匹配到一层路由，不能匹配到多级路由
import { matchRoutes, renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { createServerStore } from '../store';
import routes from '../routes';

export default (req, res) => {
    const store = createServerStore();
    // const promises = []
    // routes.some(route => {
    //     // 使用 matchPath 方法，匹配路由对应要展示的页面组件
    //     const match = matchPath(req.path, route);
    //     if (match) {
    //         promises.push(match);
    //     }
    //     return match;
    // })
    // console.log(promises);

    // 通过 matchRoutes 能匹配到路由的多级嵌套页面组件
    const matchedRoutes = matchRoutes(routes, req.path);
    let promises = [];
    // 执行 promises 内组件的 loadData 方法，获取数据
    matchedRoutes.forEach(item => {
        // 调用加载数据方法
        if (item.route.loadData) {
            // 把返回的 Promise 添加到数组中
            promises.push(item.route.loadData(store));
        }
    })

    // 打印出来的数据时默认值，因为ajax是异步，必须等待请求执行完成，在打印
    // console.log(store.getState());

    // 等到所有的 Promise 都执行成功，在去渲染页面
    Promise.all(promises).then(() => {
        // 打印出来的数据是有值的，说明组件提前要加载的数据成功
        console.log(store.getState());

        let content = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url} context={{}}>
                    {renderRoutes(routes)}
                </StaticRouter>
            </Provider>
        )
        res.send(`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>react</title>
                </head>
                <body>
                    <div id="root">${content}</div>
                    <script>
                        window._context = {
                            state: ${JSON.stringify(store.getState())}
                        }
                    </script>
                    <script src="/client/index.js"></script>
                </body>
            </html>
        `)
    })
};
