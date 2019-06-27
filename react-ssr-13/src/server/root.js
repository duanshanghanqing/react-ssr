import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom'; // matchPath： 只能匹配到一层路由，不能匹配到多级路由
import { matchRoutes, renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { createServerStore } from '../store';
import routes from '../routes';

const isProd = process.env.ENV === 'production';

export default (req, res) => {
  const store = createServerStore(req);
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
  const promises = [];
  // 执行 promises 内组件的 loadData 方法，获取数据
  matchedRoutes.forEach((item) => {
    // 调用加载数据方法
    if (item.route.loadData) {
      // 把返回的 Promise 添加到数组中
      // promises.push(item.route.loadData(store));
      // 问题，当有一个接口出现异常，使 Promise.all 方法的不到调用，页面就渲染不了。解决即使有一个接口异常也能完整打开页面
      const promise = new Promise((resolve) => {
        // 捕获异常，也调用resolve
        item.route.loadData(store).then(resolve).catch(resolve);
      });
      // 在puhs自定义 promise
      promises.push(promise);
    }
  });

  // 打印出来的数据时默认值，因为ajax是异步，必须等待请求执行完成，在打印
  // console.log(store.getState());

  // 等到所有的 Promise 都执行成功，在去渲染页面
  Promise.all(promises).then(() => {
    // 打印出来的数据是有值的，说明组件提前要加载的数据成功
    console.log(store.getState());

    // 404页面的核心技术点
    const context = {};
    // 301 服务端重定向的实现
    // 发现使用了Redirect, StaticRouter会自动向context注入重定向内容

    const content = renderToString(
      <LocaleProvider locale={zh_CN}>
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            {renderRoutes(routes)}
          </StaticRouter>
        </Provider>
      </LocaleProvider>,
    );

    let css = '';
    if (isProd) {
      css = `<link href="/status/css/main.css?v=${new Date() * 1}" rel="stylesheet">`;
    }
    // 服务端样式的渲染
    const html = `
                    <!DOCTYPE html>
                    <html>
                        <head>
                            <title>react</title>
                            ${css}
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
                    `;
    console.log(context);
    if (context.action === 'REPLACE') { // 304重定向
      res.redirect(301, context.url);
    } else if (context.NOT_FOUND) { // 访问不存在的页面返回404状态码
      res.status(404);
      res.send(html);
    } else {
      res.send(html);
    }
  });
};
