var foo = 'bbb'

//exports对象
//它等同于 p.js里的 bExports
exports.foo = 'hello'

exports.add = function (x,y){
    return x+y
}

var age = 18
exports.age = age
//必须 使用exports才能被外部访问

//该函数能不能被访问
function add(x,y){
    return x-y
}