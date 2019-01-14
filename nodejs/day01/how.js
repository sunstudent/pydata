//作业 ：使一个字符串或者数组内容逆序并次序输出，不能使用reverse join substr split find等方法。
function func(params) {
    //s = startIndex   s 表示开始索引空格 ' ' 的下标
    let s = 0;
    // index1 表示索引空格的返回值 如果index1 等于 -1 则表示字符串中已经没有空格
    let index1;
    // 表示从给定的字符串中截取出来的字符串
    var new_str;
    // while循环 遍历给定字符串中的空格 （如果index1 等于 -1 则程序结束》》不太准确）
    while (index1 != -1) {
        index1 = params.indexOf(' ',s);
        if (index1 == -1) {
            new_str =  params.substr(s);
        }else{
            new_str =  params.substr(s,index1 - s);
        }
        //unshift() 方法表示从数组头部开始 向数组中添加数据
        a_array.unshift(new_str);
        s = index1 +1;
    }
    console.log(a_array);
}

//通过遍历数组，把字符串拼接到一起
function func1() {
    //定义一个空字符串
    var last_str = '';
    // for 循环遍历元素 使元素后边加上空格 注意：如果元素是最后一个 应不应该加空格
    for (let i = 0; i < a_array.length;i++) {
        //判断元素是否是最后一个 如果是最后一个则不填加空格
        if (i < a_array.length -1) {
            last_str += a_array[i] + ' ';
        }else{
            last_str += a_array[i];
        } 
    }
    console.log(last_str);
}


//定义一个空数组 用于存放从给定字符串中取出来的字符串
var a_array = [];
//定义一个变量 a 用于存放给定的字符串
var a ='我 是 刘 玉 鑫'
//调用函数
func(a)
func1()