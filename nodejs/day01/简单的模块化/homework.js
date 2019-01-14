//作业 ：使一个字符串或者数组内容逆序并次序输出，不能使用reverse join substr split find等方法。

function sun(params){
    let i = 0;
    let s = 0; //s 表示开始索引空格 ' ' 的下标
    let new_str; // 表示从给定的字符串中截取出来的字符串
    while (index1 != -1) {
        // index1 表示索引空格的返回值 如果index1 等于 -1 则表示字符串中已经没有空格
        //// indexOf(找的元素,开始索引的下标)
        var index1 = params.indexOf(' ',s) 
        console.log(index1) //1 4 6 
        //substr(i,j) 就是截取字符串的一个方法 ，其中i 表示开始截取字符串的下标 j 表示截取字符串的长度
        if (index1 == -1) {
            new_str = params.substr(s); //如果是最后一个空格，则截取该空格后面的所有字符
        }else{
            new_str = params.substr(s,index1-s); //var str = 'I am a student';
        }

        if(new_str != '') {
            a_array.unshift(new_str);
        }

        i++;
        console.log('现在打印的是第' + i +'个元素>>>' + new_str)
        s = index1 + 1;
    }
    console.log(a_array)
}

function func1(){
    var last_str = '';
    for (let i =0;i < a_array.length; i++) {
        if(i > a_array.length - 1) {
            last_str += a_array[i];
        }else{
            last_str += a_array[i] + ' ';    
        }
    }
    console.log(last_str);
}
var a_array = [];
var str = 'I am a student';
sun(str)
func1();

