<template>
    <div id="surveyChart" class="chart-wrap">
        <div class="container-md">
            <button type="button" class="btn btn-chart-close" @click="chartClose"><i class="bi bi-x-square"></i></button>
            <div class="chart-info-wrap mt-5 mb-2">
                <div class="chart-info-list row">
                    <div class="col">
                        <i class="bi bi-person-circle"></i>
                        <span>{{ icb.name }}</span>
                    </div>
                    <div class="col">
                        <i class="bi bi-heart-half"></i>
                        <span>생년월일 : {{ icb.birth }}</span>
                    </div>
                    <div class="col">
                        <i class="bi bi-file-earmark-bar-graph"></i>
                        <span>CB-stage : {{ icb.matrix }} 단계</span>
                    </div>
                </div>
            </div>
            <div class="chart-list-wrap">
                <div class="chart-item row" v-if="isChartType.mix">
                    <canvas id="mix-chart"></canvas>
                </div>
                <div class="chart-item row" v-if="isChartType.line">
                    <highcharts :options="lineChartOptions" />
                </div>
                <div class="chart-item row" v-if="isChartType.pie">
                    <!-- <canvas id="pie-chart"></canvas> -->
                    <highcharts :options="pieChartOptions" />
                </div>
                <div class="chart-item row" v-if="isChartType.bar">
                    <highcharts :options="barChartOption" />
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
    name: 'Chart',
    props: {
        chartSurveyData: Object,
        chartResultData: Object
    },
    data() {
        return {
            scrollY: 0,
            timer: null,
            isChartType: {
                mix: false,
                line: false,
                pie: false,
                bar: false
            },
            isChartTitle: {
                mix: '',
                line: '',
                pie: '',
                bar: ''
            },
            isChartLabels: {
                mix: [],
                line: [],
                pie: [],
                bar: []
            },
            lineChartOptions: {
                title: {
                    useHTML: true,
                    text: ''
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },
                plotOptions: {
                    series: {
                        label: {
                            connectorAllowed: false
                        },
                        pointStart: 2010
                    }
                },
                xAxis: {
                    categories: null,
                    title: {
                        text: null
                    },
                    labels: {
                        style: {
                            fontSize: '14px'
                        }
                    }
                },
                yAxis: {
                    min: 0,
                    max: 15,
                    tickPixelInterval: 20,
                    title: {
                        text: '점수',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                colors: ['#247deb', '#91bef5', '#d0e3fb', '#e73a40', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
                tooltip: {
                    valueSuffix: ' 점'
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                series: null,
                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            legend: {
                                layout: 'horizontal',
                                align: 'center',
                                verticalAlign: 'bottom'
                            }
                        }
                    }]
                }
            },
            pieChartOptions: {
                chart: {
                    type: 'pie'
                },
                title: {
                    useHTML: true,
                    text: `<span style='display:inline-block; line-height:100%; vertical-align: middle;'>의사소통 수단</span>`
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                colors: ['#247deb', '#91bef5', '#d0e3fb', '#e73a40', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                        }
                    }
                },
                series: [
                    {
                        name: '비율',
                        colorByPoint: true,
                        data: [
                            {
                                name: "Chrome",
                                y: 62.74
                            },
                            {
                                name: "Firefox",
                                y: 10.57
                            },
                            {
                                name: "Internet Explorer",
                                y: 7.23
                            }
                        ]
                    }
                ],
            },
            barChartOption: {
                chart: {
                    type: 'bar'
                },
                title: {
                    useHTML: true,
                    text: ''
                },
                xAxis: {
                    categories: null,
                    labels: {
                        style: {
                            fontSize: '14px'
                        }
                    },
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    min: 0,
                    max: null,
                    tickInterval:1,
                    labels: {
                        overflow: 'justify',
                        step: 1,
                        style: {
                            fontSize: '14px'
                        }
                    },
                    title: {
                        text: null
                    }
                },
                tooltip: {
                    valueSuffix: ' 점'
                },
                colors: ['#247deb', '#91bef5', '#d0e3fb', '#e73a40', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
                plotOptions: {
                    bar: {
                        groupPadding:0.3,
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                credits: {
                    enabled: false
                },
                series: null
            }
        }
    },
    computed: {
        ...mapState(['icb'])
    },
    beforeMount() {
        let _isChartType = this.isChartType;
        let _isChartTitle = this.isChartTitle;
        let _isChartLabels = this.isChartLabels;

        //chart type setting
        for(let _key in this.chartSurveyData.chart) {
            let _chartType = this.chartSurveyData.chart[_key].type;
            let _chartLabels = this.chartSurveyData.chart[_key].labels;
            if (typeof _isChartType[_chartType] !== 'undefined') {
                _isChartType[_chartType] = true;
                _isChartTitle[_chartType] = _key;
                _isChartLabels[_chartType] = _chartLabels;
            }
        }

        //chart modal
        document.getElementsByTagName('body')[0].classList.add('modal-open');
    },
    mounted() {
        // 핸들러 등록하기
        document.getElementById('surveyChart').addEventListener('scroll', this.throttleUsingRaf(this.handleScroll));

        let _isChartType = this.isChartType;
        let _isChartTitle = this.isChartTitle;
        let _isChartLabels = this.isChartLabels;

        for(let _key in _isChartType) {

            if (_isChartType[_key]) {

                //line
                if (_key === "line") {
                    let _lineDataset = [
                        {
                            name: this.icb.name,
                            data: []
                        }
                    ];

                    //line chart value
                    for(let _key in this.chartResultData) {
                        _lineDataset[0].data.push(this.chartResultData[_key].total);
                    }

                    this.lineChartOptions.title.text = `<div class="chart-title">${this.icb.name} : ${_isChartTitle[_key]}</div>`;
                    this.lineChartOptions.xAxis.categories = _isChartLabels[_key];
                    this.lineChartOptions.series = _lineDataset;
                }

                if (_key === "pie") {
                    let _pieData = {};
                    let _pieTotalData = 0;
                    let _pieDataset = [];

                    for (let _dataKey in this.chartResultData) {
                        _pieTotalData += this.chartResultData[_dataKey].total;
                    }
                    
                    for (let _pieKey in _isChartLabels[_key]) {
                        if (typeof _pieData['labels'] === 'undefined') _pieData['labels'] = [];
                        if (typeof _pieData['data'] === 'undefined') _pieData['data'] = [];
                        _pieData['labels'].push(_isChartLabels[_key][_pieKey]);

                        let _keyIndex = 0;
                        let _singleDataSum = 0;

                        for (let _dataKey in this.chartResultData) {
                            
                            let _typeData = this.chartResultData[_dataKey];
                            let _typeSingleData = _typeData[_pieKey];

                            _singleDataSum += _typeSingleData;

                            if (_keyIndex === Object.keys(this.chartResultData).length -1) {
                                _pieData['data'].push(
                                    Math.round(((_singleDataSum / _pieTotalData) * 100) * 100) / 100
                                );
                            }

                            _keyIndex++;
                        }
                    }

                    _pieData.labels.forEach((_name, _i) => {
                        if (typeof _pieDataset[_i] === 'undefined') _pieDataset.push({});
                        _pieDataset[_i].name = _name;
                        _pieDataset[_i].y = _pieData.data[_i];

                    });

                    this.pieChartOptions.title.text = `<div class="chart-title">${this.icb.name} : ${_isChartTitle[_key]}</div>`;
                    this.pieChartOptions.series[0].data = _pieDataset;
                }

                if (_key === "bar") {
                    let _barDataset = [];
                    let _barIndex = 0;
                    let _barLabels;
                    let _barCategories = [];
                    
                    for (let _barLabelKey in this.chartSurveyData.chart) {
                        _barLabels = this.chartSurveyData.chart[_barLabelKey].type === _key && this.chartSurveyData.chart[_barLabelKey];
                    }

                    //bar dataset setting
                    _barDataset = _barLabels.datasetForm.set;
                    _barDataset.forEach((_itemObj) => {
                        _itemObj.data = [];
                        for (let _resultKey in this.chartResultData) {
                            for (let _subKey in this.chartResultData[_resultKey]) {
                                if (_subKey === _itemObj.key) {
                                    _itemObj.data.push(this.chartResultData[_resultKey][_subKey]);
                                }
                            }
                        }
                    });

                    this.barChartOption.title.text = `<div class="chart-title">${this.icb.name} : ${_isChartTitle[_key]}</div>`;
                    this.barChartOption.xAxis.categories = _isChartLabels[_key];
                    this.barChartOption.yAxis.max = _barLabels.datasetForm.max;
                    this.barChartOption.series = _barDataset;

                }

            }

        }
    },
    beforeDestroy: function () {
        document.getElementById('surveyChart').removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        throttleUsingRaf(cb) {

            let rAfTimeout = null;

            return function () {
                if (rAfTimeout) {
                    window.cancelAnimationFrame(rAfTimeout);
                }
                rAfTimeout = window.requestAnimationFrame(function () {
                    cb();
                })
            }
        },
        handleScroll () {
            // let _surveyChartScrollTop = document.getElementById('surveyChart').scrollTop;
            // let _surveyChartInfoWrap = document.querySelector('.chart-info-wrap');
            // let _surveyChartInfoScrollTop = _surveyChartInfoWrap.offsetTop;
            // let _surveyChartInfoList = document.querySelector('.chart-info-list');

            // if (_surveyChartScrollTop >= _surveyChartInfoScrollTop) {
            //     _surveyChartInfoList.classList.add('fixed');
            // } else {
            //     _surveyChartInfoList.classList.remove('fixed');
            // }
        },
        chartClose() {
            this.$emit('chartClose');
        }
    },
}
</script>

<style>
    .chart-wrap .container-md {
        padding-top: 5rem;
    }

    .chart-wrap {
        overflow: auto;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #f7f7f7;
    }

    .chart-info-wrap {
        height: 4.5rem;
    }

    .chart-info-wrap .chart-info-list {
        padding: 1.5rem 0;
        background-color: #4778c1;
        border-radius: 1rem;
        box-shadow: 0 5px 3px 0 rgb(0 0 0 / 20%);
        color: #fff;
    }

    .chart-info-wrap .chart-info-list .col > span {
        margin-left: 5px;
    }

    .chart-info-wrap .chart-info-list.fixed {
        position: fixed;
        top: 0;
        width: 1320px;
    }

    /* .chart-wrap .card-header {
        background-color: #fff;
    } */

    .chart-list-wrap {
        margin-top: 5rem;
    }

    .chart-list-wrap .chart-item {
        padding: 5rem;
        margin-bottom: 5rem;
        background-color: #fff;
        border-radius: 1rem;
        box-shadow: 0 5px 3px 0 rgb(0 0 0 / 10%);
    }

    .chart-title {
        font-size: 1.75rem;
    }

    .btn-chart-close {
        z-index: 20;
        position: fixed;
        top: 0.4rem;
        right: 2rem;
        font-size: 2rem;
    }

    .btn-chart-close:hover {
        color: #4778c1;
    }
</style>