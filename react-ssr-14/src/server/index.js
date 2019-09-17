import express from 'express';
import proxy from 'express-http-proxy';
import Root from './root';

const app = express();
app.use(express.static('public'));
// 浏览器端加载的核心js路径
app.use('/client', express.static('client'));
// 静态资源路径
app.use('/status', express.static('server/status'));
// 代理浏览器接口请求
app.use('/api', proxy('http://47.95.113.63', {
  proxyReqPathResolver(req) {
    // req.url: /news.json
    // http://47.95.113.63/ssr/api/news.json
    return `/ssr/api${req.url}`;
  },
}));

app.get('*', (req, res) => {
  Root(req, res);
});

const root = (typeof self == 'object' && self.self === self && self) || (typeof global == 'object' && global.global === global && global) || this;
// 读取环境变量
console.log(root.process.env.STAGE_ENV, root.process.env.PORT);

const server = app.listen(root.process.env.PORT || '9020', () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('应用实例，访问地址为 http://%s:%s', host, port);
});
