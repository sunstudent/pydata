//rqueire 有两个作用：
//      1.加载文件模块并执行里面的代码
//      2. 拿到被加载文件模块导出的接口对象

//每个文件模块中都提供了一个对象 ：exports
//  exports 默认是一个空对象
// 你要做的就是把所有需要被外部访问的成员挂载到 exports 对象中

var bExports = require('./v')

console.log(bExports.foo)
console.log(bExports.add(10,30))