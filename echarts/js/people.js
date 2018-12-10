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
    let yData = getDivid(xData)

    function getDivid(xData) {
        let max = Math.max.apply(null, xData),
            min = Math.min.apply(null, xData),
            line = 5;
        ;
        console.log('this is max min', max, min,{min: 0, max: (max - min) / 5 + max})
        return ({min: 0, max: Math.floor((max - min) / line + max)})
    }

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
            axisLine: false,
            splitNumber: 6,
            max: yData.max,
            min: yData.min
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

    console.log(xLabels)
    let option = {
        legend: {
            orient: 'vertical',
            y: 'bottom',
            data: [name],
            padding:[8,0,0,0]
        },
        textStyle: {
            color: '#000'
        },
        radar: {
            // name: {
            //     padding: -5
            // },
            // radius: '70%',
            // center: ['50%', '45%'],
            name:{
                padding:[-15,-3,-15,-3],
            },

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
                    name: name,
                    value: xData
                }
                ],
                itemStyle: {
                    normal: {
                        color: '#6da830'
                    },
                },//折点颜色,
                symbol: 'circle',
                symbolSize: 8
            }
        ]
    };

    return option;
}

//学历
function getEducationOption(data) {
    let name = data.names[0],
        yLabels = data.data.educationLabels,

        orginData = data.data.details[0][data.ids[0]].education;

    let xData = orginData.map(item => Math.floor(item * 100));
    let option = {
        color: ['#5aa700'],
        grid: {
            left: '4%',
            right: '4%',
            bottom: '12%',
            containLabel: true
        },
        legend: {
            orient: 'vertical',
            y: 'bottom',
            data: [name]
        },

        xAxis: {
            axisLine: {show: false},
            axisLabel: {show: false},
            axisTick: {show: false},
            splitLine: {
                show: false//去网格线
            },
            type: 'value'
        },
        yAxis: {
            axisLine: {show: false},
            axisLabel: {show: true},
            axisTick: {show: false},

            type: 'category',
            data: yLabels
        },
        series: [
            {
                sort:'desc',
                silent: true,
                name: name,
                type: 'bar',
                data: xData,
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{c}%',
                        textStyle: {
                            color: '#777'
                        },
                    }
                },
            }
        ]
    }
    console.log('22222222')
    return option
}

//兴趣
function getInterestOption(data) {
    let name = data.names[0],
        xLabels = data.data.interestLabels,
        xData = data.data.details[0][data.ids[0]].interest;
    console.log(name, xLabels, xData);
    let option = {
        xAxis: [{
            type: 'category',
            data: xLabels,
            axisLine: {show: false},
            axisLabel: {show: true},
            axisTick: {show: false},
            boundaryGap: false,
        }],
        yAxis: [
            {
                name: '喜好度',
                nameTextStyle: {
                    align: 'left',

                    color: '#999',
                    fontSize: 14,
                    borderColor: '#000',
                    fontWeight: 'bold',


                },
                type: 'value',
                splitLine: {
                    lineStyle: {
                        color: '#ededed'
                    }
                },
                axisLine: {
                    show: false
                },
                axisLabel: {show: true},
                axisTick: {show: false},
            }

        ],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            icon: 'roundRect',
            orient: 'horizontal',
            y: 'bottom',
            data: [name]
        },
        series: [{
            lineStyle: {
                color: '#6da830',//线的颜色
                width: 1
            },
            name: name,
            type: 'line',
            smooth: true,//平滑曲线
            data: xData,

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
            symbolSize: 6,
            itemStyle: {
                normal: {
                    color: '#6da830',

                },

            }, //折点颜色
            markLine: {
                silent: true,
                lineStyle: {
                    type: 'dashed',
                    color: '#ccc',
                },
                data: [{yAxis: 100}]
            }

        }]
    };
    return option;
}