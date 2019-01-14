//声明一个函数
function sum(a,b) {
    return a+b
}

var ret = sum(1,1)
console.log(ret)

//调用文件外的js文件
// require() 引入/导入一个模块  js文件
var sayHi2 = require('./index.js')
sayHi2('hello node js!!!')

var says = require('./index01')
// says.sBB('sassaas')
// says.sH('1245454')
says.sayBye('54545')
says.sayHello('77878878')