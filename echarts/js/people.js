/**
 *  author      : t1ng
 *  createTime  : 2018/12/2
 *  description :
 */
function getMaleOption(data) {

    let name = data.names[0],
        xLabels = data.data.genderLabels,
        xData = data.data.details[0][data.ids[0]].gender;

    let option = {
        color: ['#5aa700'],
        legend: {
            orient: 'vertical',
            y: 'bottom',
            data: [name]
        },
        xAxis: [{
            type: 'category',
            data: xLabels,
            axisLine: {show: false},
            axisLabel: {show: true}
        }],
        yAxis: [{
            splitLine: {
                show: false//去网格线
            },
            type: 'value',
            axisLine: false
        }],
        series: [{
            hoverAnimation: false,
            name: name,
            type: 'bar',
            data: xData,
            barWidth: '30px',
            itemStyle: {
                emphasis: {
                    color: '#5aa700'//停留不变色
                }
            },
            markPoint: {//气泡
                data: [
                    {name: xLabels[0], value: Math.floor(xData[0] * 100) + '%', xAxis: 0, yAxis: xData[0]},
                    {name: xLabels[1], value: Math.ceil(xData[1] * 100) + '%', xAxis: 1, yAxis: xData[1]}
                ]
                ,
                itemStyle: {
                    color: '#78b335',//气泡颜色
                    emphasis: {
                        color: '#78b335'//停留不变色
                    }
                }
            }
        }]

    };
    return option;
}
