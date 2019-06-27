import Root from './root';
import express from 'express';
import proxy from 'express-http-proxy';
var app = express();
app.use(express.static('public'));
app.use('/client', express.static('client'));
// 代理浏览器接口请求
app.use('/api', proxy('http://47.95.113.63', {
    proxyReqPathResolver: function (req) {
        // req.url: /news.json?secret=M5s2sPneDE
        // http://47.95.113.63/ssr/api/news.json?secret=M5s2sPneDE
        return '/ssr/api' + req.url
    }
}));

app.get('*', function (req, res) {
    Root(req, res);
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
