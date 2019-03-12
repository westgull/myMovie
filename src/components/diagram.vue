<template>
        <div class="movie-chart container">
            <div id="myEchart" style="width: 90%;margin:0 auto;height: 600px;border: 1px solid #ddd;padding:4px;"></div>
            <div id="myEchart3" style="width: 90%;margin:0 auto;height: 500px;border: 1px solid #ddd;padding:4px;margin-top:10px"></div>
            <div id="myEchart2" style="width: 90%;height: 500px;margin:0 auto;border: 1px solid #ddd;padding:4px;margin-top:10px"></div>

        </div>
</template>
<script>
import echarts from 'echarts'
export default {
        data () {
            return {
                charts: '',
            }
        },
        methods: {
             drawPie(id){
               this.charts = echarts.init(document.getElementById(id))
               this.charts.setOption({
                   title: {
                        text: '各类型电影票房比较',
                        subtext: '数据来源于网络',
                        top: 10,
                    },
                    grid: {
                        left: '10%',
                        top: '10%',
                        right: '10%',
                        bottom: '10%',
                        containLabel: true
                    },
                    xAxis: [{
                        show: false,
                    }],
                    yAxis: [{
                        axisTick: 'none',
                        axisLine: 'none',
                        offset: '27',
                        axisLabel: {
                            textStyle: {
                                color: '#777',
                                fontSize: '16',
                            }
                        },
                        data:['爱情','动画','动作','惊悚','剧情','科幻','奇幻','喜剧','灾难','战争']
                    }, {
                        axisTick: 'none',
                        axisLine: 'none',
                        axisLabel: {
                            textStyle: {
                                color: '#777',
                                fontSize: '16',
                            }
                        },
                        data: ['', '', '', '', '', '', '', '', '', '']
                    }, {
                        name: '',
                        nameGap: '50',
                        nameTextStyle: {
                            color: '#777',
                            fontSize: '16',
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(0,0,0,0)'
                            }
                        },
                        data: [],
                    }],
                    series: [{
                            name: '条',
                            type: 'bar',
                            yAxisIndex: 0,
                            data: [520947, 513440, 2738861, 31510, 240932, 1224820, 1056945, 1927314, 44745, 246927],
                            label: {
                                normal: {
                                    show: true,
                                    position: 'right',
                                    textStyle: {
                                        color: '#808000',
                                        fontSize: '12',
                                    }
                                }
                            },
                            barWidth: 6,
                            itemStyle: {
                                normal: {
                                    color: '#556B2F'
                                }
                            },
                            z: 2
                        }, {
                            name: '白框',
                            type: 'bar',
                            yAxisIndex: 1,
                            barGap: '-100%',
                            data: [2999999, 2999999.5, 2999999.5, 2999999.5, 2999999.5, 2999999.5, 2999999.5, 2999999.5, 2999999.5, 2999999.5],
                            barWidth: 20,
                            itemStyle: {
                                normal: {
                                    color: '#e7e7e7',
                                    barBorderRadius: 5,
                                }
                            },
                            z: 1
                        }, {
                            name: '外框',
                            type: 'bar',
                            yAxisIndex: 2,
                            barGap: '-100%',
                            data: [3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000],
                            barWidth: 24,
                            itemStyle: {
                                normal: {
                                    color: '#696969',
                                    barBorderRadius: 5,
                                }
                            },
                            z: 0
                        },
                        {
                            name: '外圆',
                            type: 'scatter',
                            hoverAnimation: false,
                            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            yAxisIndex: 2,
                            symbolSize: 20,
                            itemStyle: {
                                normal: {
                                    color:'#556B2F',
                                    opacity: .8,
                                }
                            },
                            z: 2
                        }
                    ]
               })
            },
            drawPie2(id) {
                var dataBJ = [
                    [55,9,56,0.46,18,6,1],
                    [25,11,21,0.65,34,9,2],
                    [56,7,63,0.3,14,5,3],
                    [33,7,29,0.33,16,6,4],
                    [42,24,44,0.76,40,16,5],
                    [82,58,90,1.77,68,33,6],
                    [74,49,77,1.46,48,27,7],
                    [78,55,80,1.29,59,29,8],
                    [267,216,280,4.8,108,64,9],
                    [185,127,216,2.52,61,27,10],
                    [39,19,38,0.57,31,15,11],
                    [41,11,40,0.43,21,7,12],
                    [64,38,74,1.04,46,22,13],
                    [108,79,120,1.7,75,41,14],
                    [108,63,116,1.48,44,26,15],
                    [33,6,29,0.34,13,5,16],
                    [94,66,110,1.54,62,31,17],
                    [186,142,192,3.88,93,79,18],
                    [57,31,54,0.96,32,14,19],
                    [22,8,17,0.48,23,10,20],
                    [39,15,36,0.61,29,13,21],
                    [94,69,114,2.08,73,39,22],
                    [99,73,110,2.43,76,48,23],
                    [31,12,30,0.5,32,16,24],
                    [42,27,43,1,53,22,25],
                    [154,117,157,3.05,92,58,26],
                    [234,185,230,4.09,123,69,27],
                    [160,120,186,2.77,91,50,28],
                    [134,96,165,2.76,83,41,29],
                    [52,24,60,1.03,50,21,30],
                    [46,5,49,0.28,10,6,31]
                ];
                var dataGZ = [
                    [26,37,27,1.163,27,13,1],
                    [85,62,71,1.195,60,8,2],
                    [78,38,74,1.363,37,7,3],
                    [21,21,36,0.634,40,9,4],
                    [41,42,46,0.915,81,13,5],
                    [56,52,69,1.067,92,16,6],
                    [64,30,28,0.924,51,2,7],
                    [55,48,74,1.236,75,26,8],
                    [76,85,113,1.237,114,27,9],
                    [91,81,104,1.041,56,40,10],
                    [84,39,60,0.964,25,11,11],
                    [64,51,101,0.862,58,23,12],
                    [70,69,120,1.198,65,36,13],
                    [77,105,178,2.549,64,16,14],
                    [109,68,87,0.996,74,29,15],
                    [73,68,97,0.905,51,34,16],
                    [54,27,47,0.592,53,12,17],
                    [51,61,97,0.811,65,19,18],
                    [91,71,121,1.374,43,18,19],
                    [73,102,182,2.787,44,19,20],
                    [73,50,76,0.717,31,20,21],
                    [84,94,140,2.238,68,18,22],
                    [93,77,104,1.165,53,7,23],
                    [99,130,227,3.97,55,15,24],
                    [146,84,139,1.094,40,17,25],
                    [113,108,137,1.481,48,15,26],
                    [81,48,62,1.619,26,3,27],
                    [56,48,68,1.336,37,9,28],
                    [82,92,174,3.29,0,13,29],
                    [106,116,188,3.628,101,16,30],
                    [118,50,0,1.383,76,11,31]
                ];
                var lineStyle = {
                    normal: {
                        width: 1,
                        opacity: .8
                    }
                };
               this.charts = echarts.init(document.getElementById(id))
               this.charts.setOption({
                   backgroundColor: '#fff',
                    title: {
                        text: '全球电影偏好分布图',
                        left: 'left',
                        top: 10,
                        textStyle: {
                            color: 'black'
                        }
                    },
                    legend: {
                        bottom: 5,
                        data: ['男性','女性'],
                        itemGap: 20,
                        textStyle: {
                            color: '#fff',
                            fontSize: 14
                        },
                        selectedMode: 'single'
                    },
                    radar: {
                        indicator: [
                            {name: '喜剧', max: 300},
                            {name: '悬疑', max: 250},
                            {name: '剧情', max: 300},
                            {name: '恐怖', max: 5},
                            {name: '爱情', max: 200},
                            {name: '记录片', max: 100}
                        ],
                        shape: 'circle',
                        splitNumber: 5,
                        name: {
                            textStyle: {
                                color: '#8B7765'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: [
                                    'rgba(139,119,101, 0.8)', 'rgba(139,119,101, 0.2)',
                                    'rgba(139,119,101, 0.4)', 'rgba(139,119,101, 0.6)',
                                    'rgba(139,119,101, 0.8)', 'rgba(139,119,101, 1)'
                                ].reverse()
                            }
                        },
                        splitArea: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(139,119,101,1)'
                            }
                        }
                    },
                    series: [
                        {
                            name: '男性',
                            type: 'radar',
                            lineStyle: lineStyle,
                            data: dataBJ,
                            symbol: 'none',
                            itemStyle: {
                                normal: {
                                   color: '	#D2691E'
                                }
                            },
                            areaStyle: {
                                normal: {
                                    opacity: 0.1
                                }
                            }
                        },
                        {
                            name: '女性',
                            type: 'radar',
                            lineStyle: lineStyle,
                            data: dataGZ,
                            symbol: 'none',
                            itemStyle: {
                                normal: {
                                   color: '	#CD5C5C'
                                }
                            },
                            areaStyle: {
                                normal: {
                                    opacity: 0.1
                                }
                            }
                        }
                    ]
               })
            },
            drawPie3(id) {
                this.charts = echarts.init(document.getElementById(id))
                this.charts.setOption({
                   backgroundColor: '#fff',
                    title: {
                        text: '各个国家电影票房比较',
                        left: 'left',
                        top: 10,
                        textStyle: {
                            color: '#000'
                        }
                    },

                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },

                    visualMap: {
                        show: false,
                        min: 80,
                        max: 600,
                        inRange: {
                            colorLightness: [0, 1]
                        }
                    },
                    series : [
                        {
                            name:'电影票房',
                            type:'pie',
                            radius : '55%',
                            center: ['50%', '50%'],
                            data:[
                                {value:335, name:'中国'},
                                {value:310, name:'美国'},
                                {value:274, name:'英国'},
                                {value:235, name:'日本'},
                                {value:400, name:'其他国家'}
                            ].sort(function (a, b) { return a.value - b.value}),
                            roseType: 'angle',
                            label: {
                                normal: {
                                    textStyle: {
                                        color: 'black'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    lineStyle: {
                                        color: 'black'
                                    },
                                    smooth: 0.2,
                                    length: 10,
                                    length2: 20
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#5F9EA0',
                                    shadowBlur: 200,
                                    shadowColor: 'rgba(0,139,139, 0.5)'
                                }
                            }
                        }
                    ]
               })
            }
        },
        mounted () {
            this.$nextTick(function() {
                this.drawPie('myEchart')
                this.drawPie2('myEchart2')
                this.drawPie3('myEchart3')
            })
        }
}
</script>
<style scoped>
    .movie-chart {
        width:100%;
        height:300px;
    }
</style>
