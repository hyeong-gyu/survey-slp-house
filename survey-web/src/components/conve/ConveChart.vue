<template>
    <div class="conve-chart-wrap">
        <div class="container-md">
            <button type="button" class="btn btn-chart-close" @click="chartClose"><i class="bi bi-x-square"></i></button>
            <div class="chart-info-wrap mt-5 mb-2">
                <div class="chart-info-list row">
                    <div class="col">
                        <i class="bi bi-person-circle"></i>
                        <span>{{ conve.name }}</span>
                    </div>
                    <div class="col">
                        <i class="bi bi-heart-half"></i>
                        <span>{{ conve.birth }}</span>
                    </div>
                </div>
            </div>
            <div class="chart-list-wrap">
                <div class="chart-item row">
                    <highcharts :options="barChartOption" />
                </div>
                <div class="chart-item row">
                    <highcharts :options="columChartOption" />
                </div>
                <div class="chart-item row">
                    <highcharts :options="spiderChartOption" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
    name: 'ConveChart',
    props: {
        dataset: Object
    },
    data() {
        return {
            barChartOption: {
                chart: {
                    type: 'column',
                    height: 600
                },
                title: {
                    useHTML: true,
                    text: ''
                },
                xAxis: {
                    type: 'category',
                    labels: {
                        style: {
                            fontSize:'14px'
                        }
                    }
                },
                yAxis: {
                    min: 0,
                    max: 34,
                    // tickInterval:1,
                    title: {
                        text: ''
                    }
                },
                tooltip: {
                    pointFormat: '{point.name} {point.y}점'
                },
                // colors: ['#247deb', '#91bef5', '#d0e3fb', '#e73a40', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
                legend: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        borderWidth: 0,
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                credits: {
                    enabled: false
                },
                series: null
            },
            columChartOption: {
                chart: {
                    type: 'column',
                    height: 600
                },
                title: {
                    useHTML: true,
                    text: ''
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    categories: [
                        '대화차례',
                        '대화기능',
                        '비언어적 대화반응',
                        '기타'
                    ],
                    crosshair: true,
                    labels: {
                        style: {
                            fontSize:'14px'
                        }
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: ''
                    }
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: null
            },
            spiderChartOption: {
                chart: {
                    polar: true,
                    type: 'line',
                    height: 600
                },
                title: {
                    text: '',
                    x: -80
                },
                pane: {
                    size: '90%'
                },
                xAxis: {
                    categories: ['주도형', '무반응형', '설명형', '특이형', '반응형'],
                    tickmarkPlacement: 'on',
                    lineWidth: 0,
                    labels: {
                        style: {
                            fontSize:'14px'
                        }
                    }
                },
                yAxis: {
                    gridLineInterpolation: 'polygon',
                    lineWidth: 0,
                    min: 0
                },
                tooltip: {
                    shared: true,
                    pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y}</b><br/>'
                },
                legend: {
                    align: 'right',
                    verticalAlign: 'middle',
                    layout: 'vertical',
                    fontSize: '15px'
                },
                series: null,
                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 800
                        },
                        chartOptions: {
                            legend: {
                                align: 'center',
                                verticalAlign: 'bottom',
                                layout: 'horizontal',
                                fontSize: '25px'
                            },
                            pane: {
                                size: '70%'
                            }
                        }
                    }]
                }
            }
        }
    },
    computed: {
        ...mapState(['conve'])
    },
    beforeMount() {
        //chart modal
        document.getElementsByTagName('body')[0].classList.add('modal-open');
    },
    mounted() {
        console.log(this.dataset);
        let __barSeries = [
            {
                colorByPoint: true,
                data: []
            }
        ];
        let __columSeries = [
            {
                name: this.dataset.labels[0],
                data: []
            },
            {
                name: this.dataset.labels[1],
                data: []
            }
        ];
        let __spiderSeries = [
            {
                name: this.dataset.labels[0],
                data: []
            },
            {
                name: this.dataset.labels[1],
                data: []
            }
        ]

        //bar chart
        this.dataset.labels.forEach((__label, __i) => {
            __barSeries[0].data.push({});
            __barSeries[0].data[__i]['name'] = __label;
            __barSeries[0].data[__i]['y'] = __i === 0 ? this.dataset.asis : this.dataset.tobe;
        });

        this.barChartOption.title.text =`이름 : ${this.conve.name} / 생년월일 : ${this.conve.birth} / ${this.dataset.labels[0]}, ${this.dataset.labels[1]}`;
        this.barChartOption.series = __barSeries;

        //colum chart
        __columSeries[0].data.push(
            this.dataset.asisConversation,
            this.dataset.asisFunction,
            this.dataset.asisNonverbal,
            this.dataset.asisEtc
        );

        __columSeries[1].data.push(
            this.dataset.tobeConversation,
            this.dataset.tobeFunction,
            this.dataset.tobeNonverbal,
            this.dataset.tobeEtc
        );

        this.columChartOption.title.text =`이름 : ${this.conve.name} / 생년월일 : ${this.conve.birth} / ${this.dataset.labels[0]}, ${this.dataset.labels[1]}`;
        this.columChartOption.series = __columSeries;

        //spider chart ['주도형', '무반응형', '설명형', '특이형', '반응형']
        __spiderSeries[0].data.push(
            this.dataset.asisLeading,
            this.dataset.asisNoneReactive,
            this.dataset.asisExplanation,
            this.dataset.asisUnusual,
            this.dataset.asisReactive
        );

        __spiderSeries[1].data.push(
            this.dataset.tobeLeading,
            this.dataset.tobeNoneReactive,
            this.dataset.tobeExplanation,
            this.dataset.tobeUnusual,
            this.dataset.tobeReactive
        );

        this.spiderChartOption.series = __spiderSeries;
        console.log('__barSeries2 : ', __barSeries);
    },
    methods: {
        chartClose() {
            this.$emit('chartClose');
        }
    },
}
</script>

<style scoped>
    .conve-chart-wrap {
        overflow: auto;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #f7f7f7;
    }

    .conve-chart-wrap .container-md {
        padding-top: 5rem;
    }

    .conve-chart-wrap .chart-info-wrap {
        height: 4.5rem;
    }

    .conve-chart-wrap .chart-info-wrap .chart-info-list {
        padding: 1.5rem 0;
        background-color: #4778c1;
        border-radius: 1rem;
        box-shadow: 0 5px 3px 0 rgb(0 0 0 / 20%);
        color: #fff;
    }

    .conve-chart-wrap .chart-info-wrap .chart-info-list .col {
        text-align: center;
    }

    .conve-chart-wrap .chart-info-wrap .chart-info-list .col > span {
        margin-left: 5px;
    }

    .conve-chart-wrap .chart-info-wrap .chart-info-list.fixed {
        position: fixed;
        top: 0;
        width: 1320px;
    }

    /* .chart-wrap .card-header {
        background-color: #fff;
    } */

    .conve-chart-wrap .chart-list-wrap {
        margin-top: 5rem;
    }

    .conve-chart-wrap .chart-list-wrap .chart-item {
        min-height: 600px;
        padding: 5rem;
        margin-bottom: 5rem;
        background-color: #fff;
        border-radius: 1rem;
        box-shadow: 0 5px 3px 0 rgb(0 0 0 / 10%);
    }

    .conve-chart-wrap .chart-title {
        font-size: 1.75rem;
    }

    .conve-chart-wrap .btn-chart-close {
        z-index: 20;
        position: fixed;
        top: 1.5rem;
        right: 2rem;
        padding: 0;
        font-size: 2rem;
        line-height: 0;
        color: #818181;
    }

    .conve-chart-wrap .btn-chart-close:hover {
        color: #2b2b2b;
    }
</style>