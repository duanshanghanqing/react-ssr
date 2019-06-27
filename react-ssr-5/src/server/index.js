import { renderToString } from 'react-dom/server';
import App from './App';
import express from 'express';
var app = express();
app.use(express.static('public'));
app.use('/client', express.static('client'));

app.get('*', function (req, res) {
    res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>react</title>
            </head>
            <body>
                <div id="app">${renderToString(App(req))}</div>
                <script src="/client/index.js"></script>
            </body>
        </html>
    `);
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
