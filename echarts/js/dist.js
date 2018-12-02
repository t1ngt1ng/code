/**
 *  author      : t1ng
 *  createTime  : 2018/12/1
 *  description : 绘制爱奇艺指数的播放设备分布
 */

function getDistOption(data) {
    let name = data.names[0];
    let numData = data.data;

    let option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {d}%"
        },
        textStyle: {
            color: '#000'
        },
        legend: {
            orient: 'vertical',
            y: 'bottom',
            data: [name]
        },

        color: ['#6da430', '#d6e8c1'],
        series: [
            {
                name: name,
                type: 'pie',
                hoverAnimation: false,
                radius: ['50%', '70%'],
                label: {
                    normal: {
                        show: true,
                        position: 'outside'
                    },
                },
                labelLine: {
                    normal: {
                        show: true,
                        lineStyle: {color: '#000'}
                    }
                },
                data: numData
            }
        ]
    };
    return option;
}