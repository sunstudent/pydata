var oldArray = [1,2,3,4,5,6,7,8,9,10];
var newArray = oldArray.filter(function(val){
　　return val<6;
});
console.log(newArray)


// 2. 读取文件

//使用require方法加载fs核心模块
//fs是file-system 的简写，就是文件系统的意思
//在node 中如果想要进行文件操作，就必须引入fs这个核心模块
//在fs这个核心模块中，就提供了所有的文件操作相关的API
//例如：fs.readFile 就是用来读取文件的

var fs = require('fs')

// 第一个参数    要读取的文件路径
// 第二个参数    一个回调函数
fs.readFile('./data/hello.txt',function (error,data){
    //文件中存储的都是二进制数据
    //这里看不到0和1，是因为二进制转为了16进制了
    //我们可以通过 toString 方法把其转为我们能认识的字符
    if(error){
        console.log('读取失败')
    }else{
        console.log(data.toString())
    }
})
// 成功
//      data 数据
//      error  null
// 失败
//      data undefined没有数据
//      error  错误对象


//2. 写文件
var fs = require('fs')

// 第一个参数：文件路径
// 第二个参数：文件内容
// 第三个参数：回调函数
//  error

fs.writeFile('./data/你ha.md','大家好啊',function (error){
    console.log('文件写入成功')
})

// 成功
//   文件写入成功
//    error  null
// 失败
//    文件写入失败
//    error  错误对象
