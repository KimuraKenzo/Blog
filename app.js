//处理http响应请求
const Router = require('./src/router/bolg');

function handleServer(req, res) {
    // Console.log(req.module);
    const method = req.method;
    req.path = req.url.split('?')[0];
    res.setHeader('Content-type', 'application/json');
    req.path = querystring.parse(req.url.split('?')[1]);
    //处理博客列表请求
    const blogDate = Router.handBlogRouter(req, res);
    res.end(JSON.stringify(blogDate));
}
module.exports = handleServer;
//业务模块抽离：一个模块做一类事