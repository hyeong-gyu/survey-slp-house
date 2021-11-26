<template>
    <div class="conve-chart-wrap">
        <div class="container-md">
            <button type="button" class="btn btn-chart-close" @click="chartClose"><i class="bi bi-x-square"></i></button>
            <div class="chart-info-wrap mt-5 mb-2">
                <div class="chart-info-list row">
                    <div class="col">
                        <i class="bi bi-person-circle"></i>
                        <span></span>
                    </div>
                    <div class="col">
                        <i class="bi bi-heart-half"></i>
                        <span></span>
                    </div>
                </div>
            </div>
            <div class="chart-list-wrap">
                <div class="chart-item row">
                    <highcharts :options="barChartOption" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
                    height: 700
                },
                title: {
                    useHTML: true,
                    text: ''
                },
                xAxis: {
                    type: 'category'
                },
                yAxis: {
                    min: 0,
                    max: 34,
                    tickInterval:1,
                    title: {
                        text: ''
                    }
                },
                tooltip: {
                    pointFormat: '{point.name} {point.y}점'
                },
                colors: ['#247deb', '#91bef5', '#d0e3fb', '#e73a40', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
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
        }
    },
    mounted() {
        console.log(this.dataset);
        let __series = [
            {
                colorByPoint: true,
                data: []
            }
        ];

        this.dataset.labels.forEach((__label, __i) => {
            __series[0].data.push({});
            __series[0].data[__i]['name'] = __label;
            __series[0].data[__i]['y'] = __i === 0 ? this.dataset.asis : this.dataset.tobe;
        });

        this.barChartOption.title.text =`${this.dataset.labels[0]}, ${this.dataset.labels[1]}`;
        this.barChartOption.series = __series;
        console.log('__series : ', __series);
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