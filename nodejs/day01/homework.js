//作业 查找指定字符串中出现最多的字母，并统计出现的次数

var str = "abbabcaccc";
var obj = {};//定义一个对象来保存str拆分出来的元素，把一个字符当做key，字符出现的次数当做value 保存在obj中
for (var i = 0; i < str.length; i++) {
    if (!obj[str.charAt(i)]) { // 如果obj中没有存在当前遍历的值
        obj[str.charAt(i)] = 1  // 就给他添加一个1，比如：“a”:1
    }
    else {
        obj[str.charAt(i)]++  //如果存在就让它的值加1
    }
}

//程序执行到这一步的时候 obj={ "a":3 , "b":3 , "c":4 }
//然后用for in 来遍历 obj 对象里面的值

var maxValue = 0;
var maxStr = "";
for (var i in obj) {
    console.log(i)  //i为key    //a   b  c
    if (obj[i] > maxValue) {
        console.log(obj[i])     //3  3   4
        console.log(maxValue)   //0  3   3
        maxValue = obj[i];
        maxStr = i
    }
}

console.log("出现最多的元素为：" + maxStr + "出现" + maxValue + "次");
