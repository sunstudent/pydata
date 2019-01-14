/*
    将一个英文语句进行逆序次序输出
    例如：I'm a code.最终输出的是 code. a I'm
    要求：不能使用split、indexOf、search(尽量不要使用字符串的原生方法)
*/


//2.4 实现查找方法  返回值就是 找到的下标
function index_of(src,subsrc){
    if(!src){
        return
    }
    for(let i =0;i<src.length;i++){
        //找到字符串出现的第一个位置
        if(src[i] == subsrc[0]){
            let j = i
            //轮询substr[0]后面的
            for(let k =0;k<subsrc.length;k++){
                if(src[j] != substr[k]){
                    break
                }
                j=j+1
            }
            //找到输出
            return i
        }
    }
    return -1
}


// 2.3 进行分割
function my_split(src,substr){
    //定义一个容器数组，用来存储 最终的分割结果
    let temp = []
    //要明确字符串的长度
    let src_len = src.length
    let substr_len = substr.length

    for(let i = 0;i<src_len;i++){
        //要找出现 指定字符或者字符串的第一位置
        //要在这里实现一个 indexOf方法
        let index = index_of(src,substr)
        //没找到
        if(index == -1){
            return temp
        }else{
            temp.push(src.substr(index)) //第一次
            src = src.substr(index,)
        }
    }

}

// 2.1 次序
function word_reverse(src){
    //2.2 对src进行分割
    let substr = ' '
    my_split(src,substr)
}


// 1.1 实现逆序
function my_reverse(src){
    //如果不存在
    if(!src){
        return
    }

    let temp = ''
    for(let i = src.length-1;i>=0;i--){
        temp += src[i]

    }
    return temp
}


function show(string) {
    // 1.逆序
    let rever_str = my_reverse(string)
    console.log(rever_str)
    // 2.次序

    // 3.输出
}




let src = "I\'m a code."
show(src)