/**
 *  author      : t1ng
 *  createTime  : 2018/12/10
 *  description :显示地图和排名
 */

function getAreaOption(data, map) {
    let name = data.names[0],
        provinces = data.data[0],
        values = [];

    provinces.forEach(item => {
        values.push(item.value)
    });

    let min = Math.min.apply(null, values),
        max = Math.max.apply(null, values);
    for (let i = 0; i < provinces.length; i++) {
        if ((provinces[i].name.indexOf('内蒙古') === -1) && (provinces[i].name.indexOf('黑龙江') === -1)) {
            provinces[i].name = provinces[i].name.substring(0, 2);
        } else {
            provinces[i].name = provinces[i].name.substring(0, 3);
        }
    }

    let option = {

        geo: {
            map: 'china'
        },
        color: ['rgb(109,164,48)', 'rgb(202,229,165)'],
        dataRange: {
            min: min,
            max: max,
            text: ['高', '低'],
            calculable: false,
            color: ['rgb(109,164,48)', 'rgb(202,229,165)'],
            splitNumber: 5//渐变条变渐变块

        },
        series: [{
            name: name,
            type: 'map',
            data: provinces,
            map: 'china',
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 0.3
                },
                emphasis: {
                    label: {
                        show: true,
                        textStyle: {
                            color: 'brown'
                        }
                    },
                    areaColor: "rgba(227,236,215)"
                },
            }
        }]

    };

    return option;
}

function getRankOption(rankList) {
    let titles = [], values = [];
    rankList.forEach(item => {
        titles[titles.length] = item.name;
        values[values.length] = item.value;
    });
    let option = {
        grid: {
            left: '4%',
            right: '4%',
            bottom: '9%',//此处调整了整个bar间距
            containLabel: true
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
            data: titles
        },
        series: [
            {
                silent: true,
                barWidth: 5,//bar宽度
                name: name,
                type: 'bar',
                data: values,
                itemStyle: {//bar渐变
                    normal: {
                        color: function (params) {
                            //首先定义一个数组
                            let colorList = [];
                            //传入十个渐变值，透明度0.1-1
                            for (let a = 0; a < 0.9; colorList.push('rgba(109,164,48,' + (a += 0.1).toFixed(1) + ')')) ;
                            return colorList[params.dataIndex]
                        },
                        label: {
                            show: false
                        }
                    }
                }
            }
        ]
    };

    return option;
}
