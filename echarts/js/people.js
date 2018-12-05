/**
 *  author      : t1ng
 *  createTime  : 2018/12/2
 *  description :
 */
//性别
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
            axisTick: {show: false},
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
            silent: true,
            markPoint: {//气泡
                data: [
                    {name: xLabels[0], value: Math.floor(xData[0] * 100) + '%', xAxis: 0, yAxis: xData[0]},
                    {name: xLabels[1], value: Math.ceil(xData[1] * 100) + '%', xAxis: 1, yAxis: xData[1]}
                ]
                ,
                itemStyle: {
                    color: '#78b335',//气泡颜色
                }
            }
        }]

    };
    return option;
}

//年龄
function getAgeOption(data) {
    let name = data.names[0],
        xLabels = data.data.ageLabels,
        orginData = data.data.details[0][data.ids[0]].age;

    let xData = orginData.map(item => Math.floor(item * 100));

    console.log(name, xLabels, xData);

    let option = {
        color: ['#5aa700'],
        legend: {
            orient: 'vertical',
            y: 'bottom',
            data: [name]
        },
        tooltip: {
            // show:false,
            trigger: 'axis',
            axisPointer: {
                type: 'none',
                label: {
                    backgroundColor: '#6a7985'
                },

            },
            formatter: "{b}岁 <br/>{a}: {c}%"
        },
        xAxis: [{

            type: 'category',
            data: xLabels,
            axisLine: {show: false},
            axisTick: {show: false},
            // axisLabel: {show: true},
            axisLabel: {
                formatter: '{value}岁'
            }

        }],
        yAxis: [{
            splitLine: {
                show: true//去网格线
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
            // silent: true,
            markPoint: {//气泡
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
                ,
                label: {
                    formatter: '{c}%'
                },
                itemStyle: {

                    color: '#78b335',//气泡颜色
                }
            }
        }]

    };
    return option;
}

//星座
function getConstellaOption(data) {
    let name = data.names[0],
        orginLabels = data.data.constellationLabels,
        orginData = data.data.details[0][data.ids[0]].constellation;

    let xData = orginData.map(item => Math.floor(item * 100));
    let xLabels = orginLabels.map(item => {
        return {name: item, max: 10}
    });

    let option = {
        legend: {
            orient: 'vertical',
            y: 'bottom',
            data: [name]
        },
        textStyle: {
            color: '#000'
        },
        radar: {
            shape: 'circle',
            indicator: xLabels,
            splitNumber: 2,
            splitArea: {
                areaStyle: {
                    color: '#fff'
                }
            },
            splitLine: {
                lineStyle: {color: ['#95cf72'], width: 0.5}
            },
            axisLine: {
                lineStyle: {color: ['#95cf72'], width: 2}
            },

        },
        series: [
            {
                lineStyle: {
                    color: '#6da830',//线的颜色
                    width: 1
                },
                areaStyle: {
                    color: 'rgba(149,207,114,0.5)'
                },
                type: 'radar',
                data: [{
                    name: '星座',
                    value: xData
                }
                ],
                itemStyle: {
                    normal: {color: '#6da830', symbol: 'rect',},
                },//折点颜色,
                symbol: 'circle',
                symbolSize: 8
            }
        ]
    };

    return option;
}