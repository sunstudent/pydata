// 用来获取机器信息的
var os = require('os')

//用来操作路径的
var path = require('path')
//获取一个路径中的扩展名部分
// extname extension name 扩展名
console.log(path.extname('c:/a/c/d/hello.txt'))

//cpus() 获取当前机器的 CPU信息
console.log(os.cpus())

//memory 内存
console.log(os.totalmem())