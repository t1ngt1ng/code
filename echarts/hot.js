/**
 *  author      : t1ng
 *  createTime  : 2018/12/1
 *  description : 绘制爱奇艺指数的内容热度图
 */

function getHotOption(data) {
    let xData = data.playtime,//x轴数据
        yData = data.details[0].data,//y轴数据
        name = data.names[0];//影片名称


    let yObj = getYNum(yData);//y轴处理数据
    xData = xFormat(xData);//x轴显示数据格式化

    //为了和y轴对应，将每个数据除以yObj返回的legnth-1个0
    let dataFormat = yData.map(item => item / Math.pow(10, yObj.length - 1));

    let option = {
        title: {
            text: '内容热度'
        },
        textStyle: {
            color: '#bbb'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: xData,
                axisLine: false
            }
        ],
        yAxis: {
            type: 'value',
            gridIndex: 0,
            min: yObj.min,
            max: yObj.max,
            axisLabel: {
                formatter: '{value} k',
                showMinLabel: false//不显示第一个y轴的值
            },
            axisLine: false
        }
        ,
        series: [
            {
                name: name,
                type: 'line',
                stack: '总量',
                smooth: true,//平滑曲线
                data: dataFormat,
                lineStyle: {
                    color: '#6da830',//线的颜色
                    width: 1
                },
                areaStyle: {//填充区域颜色
                    color: {
                        type: 'linear',//线性渐变
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 1, color: 'white' // 100% 处的颜色
                            },
                            {
                                offset: 0, color: '#a4c67e'// 0% 处的颜色
                            }]
                    }
                },
                itemStyle: {normal: {color: '#6da830'}}//折点颜色
            }
        ]
    };
    return option;
}

/**
 * 获取y轴坐标
 * @param yData y轴数据
 * @returns {{max: number, min: number, length: number}}
 * 这里最大最小值的计算其实应该不适用所有数据，因为不知道具体规范，
 * 我稍微看了几个数据感觉应该是通过最大最小值的差值决定的
 * 这里简化的都留一位，最大值向上取整，
 * 最小值向上取整减去间距（这个最小值因为我知道多少就这么写了）
 */
function getYNum(yData) {

    let
        obj = {max: 0, min: 0, length: 0},//要返回的数据
        maxNum = Math.max.apply(null, yData),//最大值
        minNum = Math.min.apply(null, yData),//最小值
        numLength = maxNum.toString().length,//数字长度
        min = Math.ceil(minNum / Math.pow(10, numLength - 1)),//用于最后计算的最小值
        line = 5;//y轴除0显示数字的数

    obj.max = Math.ceil(maxNum / Math.pow(10, numLength - 1));//要显示的最大值
    obj.length = numLength;

    //计算y轴间隔值
    let d = maxNum - minNum,
        dvid = Math.ceil(d / Math.pow(10, numLength)) / line;

    obj.min = min - dvid;
    return obj;
}

//将x轴20181123形式变成2018/11/23
function xFormat(data = []) {

    let regex = '(\\d{4})(\\d{2})(\\d{2})';//查找正则
    let replace = '$1/$2/$3';//替换正则
    let re = new RegExp(regex, 'g');

    return data.map(item => item.replace(re, replace));//返回替换后的数组
}