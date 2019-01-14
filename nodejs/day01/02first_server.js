//1.http 这个模块就是帮你创建编写服务器的

// 1. 加载http 核心模块
var http = require('http')

// 2. 使用 http.createServer()方法创建一个web服务器
// 返回一个Server实例

// 3.服务器要干嘛？
// 提供服务：对数据的服务
// 发请求
// 接受请求
// 处理请求
// 给个反馈（发送响应）
// 注册 request 请求事件
//当客户端请求过来，就会自动触发服务器的request请求事件，然后普执行第二个参数：回调函数

// request 请求事件处理函数，需要接受两个参数:
// Request 请求对象
    //可以用来获取客户端的一些请求信息，例如请求路径
// Response 响应对象
//    可以用来给客户端发送响应信息
server.on('request',function (request,response) {
    console.log('收到客户端请求了，请求路径是：' +request.url)

    //response 对象有一个方法：Write可以用来给客户端发送相应数据
    //Write可以使用多次，但是最后一定要使用end来结束响应，否则客户端会一直等待。
    //根据不同的请求路径发送不同的响应结果
    // 1. 获取请求路径
        //req.url 获取到是端口号之后的那一部分路径
        //也就是说所有的 url 都是以 / 开头的
    var url = req.url
    // if(url === '/'){
    //     res.end('index page')
    // }else if(url === '/login'){
    //     res.end('login page')
    // }else{
    //     res.end('404 Not Found')
    // }
    
    if(url === '/products'){
        var products = [
        {
            name:'苹果X',
            price:8888
        },
        {
            name:'菠萝X',
            price:888
        },
        {
            name:'小垃圾X',
            price:88
        },
        ]
        //响应内容只能是二进制数据或者字符串
        //怎么把一个数组转为字符串啊

        //JSON.parse('[]') //把字符串转为数组
        //JSON.stringify([]) //把数组转为字符串

        res.end(JSON.stringify(products)) //把products数组转为了字符串，可以响应了。
    }
})
http.createServer(function (req,res) {
    res.write('<head><meta charset="utf-8"></head>')
    res.write('这是一个中文')
    res.end('这是写的结束')
    //res.end()
    //告诉客户端，我的话说完了
    //绑定端口号，启动服务器
}).listen(8080)
//服务器启动成功后会输出这句话
console.log('http is running, port is 8080')
