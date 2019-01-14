//模块 module

function sayHi(msg) {
    console.log(msg)
}
//因为 ECMS js的同源策略
//exports 开放接口
module.exports = sayHi