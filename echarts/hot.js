/**
 *  author      : t1ng
 *  createTime  : 2018/12/1
 *  description :
 */

function getHotOption(xData, yData, name) {
    let dataFormat = yData.map(item => item / 1000);

    let yObj = getYNum(yData);
    xData = xFormat(xData);

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
        toolbox: {
            feature: {
                saveAsImage: {}
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
                showMinLabel: false
            },
            axisLine: false
        }
        ,
        series: [
            {
                name: name,
                type: 'line',
                stack: '总量',
                smooth: true,
                data: dataFormat,
                lineStyle: {
                    color: '#6da830',
                    width: 1
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 1, color: 'white' // 0% 处的颜色
                        },
                            {
                                offset: 0, color: '#a4c67e'
                            }]
                    }
                },
                itemStyle: {normal: {color: '#6da830'}}
            }
        ]
    };
    return option;
}

//获取y轴坐标
function getYNum(yData) {

    let
        obj = {max: 0, min: 0},
        maxNum = Math.max.apply(null, yData),//最大值
        minNum = Math.min.apply(null, yData),//最小值
        numLength = maxNum.toString().length,//数字长度
        min = Math.ceil(minNum / Math.pow(10, numLength - 1)),//用于最后计算的最小值
        line = 5;//y轴除0显示数字的数

    obj.max = Math.ceil(maxNum / Math.pow(10, numLength - 1));

    //计算y轴间隔值
    let d = maxNum - minNum,
        dvid = Math.ceil(d / Math.pow(10, numLength)) / line;
    obj.min = min - dvid;
    return obj;
}

//将x轴20181123形式变成2018/11/23
function xFormat(xdata = []) {

    let regex = '(\\d{4})(\\d{2})(\\d{2})';
    let replace = '$1/$2/$3';
    var re = new RegExp(regex, 'g');

    return xdata.map(item => item.replace(re, replace));
}