//存在blog路由器相关类容
function handleBlogRouter(req, res) {
    const method = req.method;
    if (method == 'GET' && req.path == '/api/blog/list') {
        //向数据库获取博客信息
        Console.log(req.query);
        return {
            id: '1',
            title: '标题',
            content: '内容'
        }
    }
    if (method == 'GET' && req.path == '/api/blog/diaocan') {
        //向数据库获取博客信息

        return {
            id: '2',
            title: '标题',
            content: '内容'
        }
    }
    module.exports = {
        handleBlogRouter
    }
}