/**
 *  author      :
 *  createTime  : 2018/12/8
 *  description :这里放一些从网上看到或总结的很有意思的代码
 */


/**
 * 从数组中随机获取成员
 * 调用：
 * let arrs = [1, 5, 2, 3, 23, 6, 657, 34];
 * getRandomInArr(arrs);
 * */

function getRandomInArr(arrs) {
    return arrs[Math.floor(Math.random() * arrs.length)];
}


/**
 * 获取制定范围内的随机数
 * 调用：
 *getRandomInRange(20,50)
 * */
function getRandomInRange(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 生成从0到制定值的数组
 * 调用：
 *rangeArrs(20)
 * */

function rangeArrs(max) {
    let arrs = [];
    for (let i = 1; arrs.push(i++) < max;) ;//这两个分号太重要了

    return arrs;
}

/**
 * 生成制定长度随机的字母数字字符串（随机码）
 * 调用：
 *generateRandom(5)
 * */
function generateRandom(len) {
    let numStr = '';
    for (; numStr.length < len; numStr += Math.random().toString(36).substr(2)) ;
    return numStr.substr(0, len);
}

/**
 * 去首尾空格，trim（）
 * 调用：strTrim('   3333.  .33   ')
 * 这个方法原生js已经有了，所以不用String.prototype.trim=function(){}添加了
 * 去掉全部空格/\s+/g  | 为正则中或操作，想只去掉开头或结尾，去掉另一半就行了
 * */
function strTrim(str) {
    return str.replace(/^\s+|\s$/g, "");
}


/**
 * 打乱数字数组的顺序
 * 调用：
 * let arrs = [3, 445, 323, 54, 7, 899, 3];
 * disOrderArr(arrs)
 * 一直简单形式，需要精确的可以找相关算法
 * */

function disOrderArr(arrs) {
    return arrs.sort(function () {
        return Math.random() - 0.5
    });
}


/**
 * 数组之间追加
 * 调用：
 * let arr1 = [1, 5, 2, 3],
 * arr2 = [23, 6, 657, 34];
 * arraysPlus(arr1, arr2);
 * */

function arraysPlus(arr1, arr2) {
    Array.prototype.push.apply(arr1, arr2);
    return arr1;
}

/**
 * 返回数组最大最小值
 * 调用：
 * let arrs = [23, 6, 657, 34];
 * maxMin(arrs, 'min')
 * 之前echarts仿阿奇艺指数中用到，总结的方法
 * 这个地方我理解了一下，call和apply的不同就在于参数的传递
 * apply的参数可以是整个arguments，也就是把整个数组传进去，他会当成是该方法的每个参数
 * 也就相当于传入的是每一个参数，这里appley第一个参数传this，null，Math是一样的
 * */

function maxMin(arrs, type) {
    //三种返回都可以
    return Math[type].apply(this, arrs);
    // return Math[type].apply(null, arrs)
    // return Math[type].apply(Math, arrs);
    // return type === 'max' ? Math.max.apply(null, arrs) : Math.min.apply(null, arrs);
}


/**
 * 对象转数组
 * 调用：
 * let obj = {'username': 'tt','age': '0'};
 * objToArr(obj)
 * 结果：[ { username: 'tt', age: '0' } ]
 * */

function objToArr(obj) {
    return Array.prototype.slice.call(arguments);
}

/**
 * 删除数组元素
 * 使用delete将当前位置滞空[22, 2, empty, 3, 4]
 * 完全删除数据，不再占用当前位置要使用splice
 * splice还可以用于添加和替换数组元素
 * */
let arr1 = [22, 2, 2, 3, 4];
delete arr1[2];//
console.log(arr1);
console.log(arr1.length);
arr1.splice(2, 1);
console.log(arr1);
console.log(arr1.length);


/**
 * 这里验证一下原始操作比函数调用快，
 * 操作的内容是，比较两个数的大小，把小的数放入数组
 * 第一种方法：
 * Math.min   array.push
 * 第二种方法：
 * a > b ? b : a  array[array.length]
 * 结果：第一种时差是3，第二种是2，所以确实如此
 * */
let a = 2, b = 3, array = [];//a.b要比较的数，array数组
let time1 = new Date().getTime();//记录操作前时间
//第一种方法
let min = Math.min(a, b);
array.push(min);
//第二种方法
// let min = a > b ? b : a;
// array[array.length] = min

//这里打印一下数组因为上面操作太快了，不打印时差是0
console.log(array)

let time2 = new Date().getTime();//记录操作后时间
console.log(time2 - time1);//输出时间差


/**
 * 一个数组，取前十个（正序排列）,倒叙插到另一个数组里
 * echarts仿阿奇艺指数中用到，总结的方法
 * let orginArr = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

 * 调用getTopLimt(orginArr, 10)
 * */


function getTopLimt(orginArr, length) {
    let resList = [];
    for (let i = 0; resList.length < length; resList.unshift(orginArr[i++])) ;
    return resList;
}


/**
 * 倒叙输出一个字符串
 * 调用stringReverse('abcd')
 * */

function stringReverse(str) {
    return str.split('').reverse().join('')
}
