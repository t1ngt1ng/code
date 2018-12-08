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
 * */

function maxMin(arrs, type) {
    //两种返回都可以
    return Math[type].apply(null, arrs)
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




