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
                    <highcharts :options="mixChartOption" />
                </div>
                <div class="chart-item row" v-if="isChartType.line">
                    <highcharts :options="lineChartOptions" />
                </div>
                <div class="chart-item row" v-if="isChartType.pie">
                    <highcharts :options="pieChartOptions" />
                </div>
                <div class="chart-item row" v-if="isChartType.bar">
                    <highcharts :options="barChartOption" />
                </div>
                <div class="chart-item row" v-if="isChartType.solidgauge">
                    <highcharts :options="solidgaugeChartOption" />
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
    data(prop) {
        return {
            scrollY: 0,
            timer: null,
            isChartType: {
                mix: false,
                line: false,
                pie: false,
                bar: false,
                solidgauge: false
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
            mixChartOption: {
                chart: {
                    type: 'column'
                },
                title: {
                    useHTML: true,
                    text: ''
                },
                xAxis: {
                    categories: ['a', 'b', 'c', 'd'],
                    labels: {
                        style: {
                            fontSize: '14px'
                        }
                    }
                },
                yAxis: {
                    min: 0,
                    max: 10,
                    title: {
                        text: '점수',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                colors: ['#247deb', '#91bef5', '#d0e3fb', '#2e2a4f', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
                tooltip: {
                    formatter: function() {
                        let name = this.series.name;
                        let key = this.key;
                        let y = this.y;
                        
                        if (this.series.type === 'column') {
                            let _criteriaText = name === '숙달완료' ? '이상' : name === '미숙달' ? '이하' : '';
                            let _mixChartCriteria;

                            for (let _chartKey in prop.chartSurveyData.chart) {
                                if (prop.chartSurveyData.chart[_chartKey].type === 'mix') _mixChartCriteria = prop.chartSurveyData.chart[_chartKey].datasetForm.criteria;
                            }

                            return `${name} : ${_mixChartCriteria[key][name]}`;
                        } else {
                            return `${this.x} : ${y}`;
                        }
                    }
                },
                plotOptions: {
                    column: {
                        stacking: 'normal',
                        dataLabels: {
                            enabled: true,
                            formatter: function() {
                                return '';
                            }
                        }
                    }
                },
                series: []
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
                        data: null
                    }
                ],
            },
            barChartOption: {
                chart: {
                    type: 'bar',
                    height: 800
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
            },
            solidgaugeChartOption: {
                chart: {
                    type: 'solidgauge',
                    alignTicks: false
                },
                title: {
                    useHTML: true,
                    text: ``
                },
                pane: {
                    center: ['50%', '85%'],
                    size: '140%',
                    startAngle: -90,
                    endAngle: 90,
                    background: {
                        backgroundColor: '#EEE',
                        innerRadius: '60%',
                        outerRadius: '100%',
                        shape: 'arc'
                    }
                },
                exporting: {
                    enabled: false
                },
                tooltip: {
                    enabled: false
                },
                // the value axis
                yAxis: {
                    stops: [
                        [0.1, '#d0e3fb'], // green
                        [0.5, '#91bef5'], // yellow
                        [0.9, '#247deb'] // red
                    ],
                    min: 0,
                    max: 6,
                    minorTickInterval: null,
                    tickInterval:0,
                    lineWidth: 0,
                    tickWidth: 0,
                    tickAmount: 1,
                    title: {
                        y: -70
                    },
                    labels: {
                        y: 16,
                        overflow: 'justify',
                        step: 1
                    }
                },
                plotOptions: {
                    solidgauge: {
                        dataLabels: {
                            y: 5,
                            borderWidth: 0,
                            useHTML: true
                        }
                    }
                },
                series: [{
                    data: [0],
                    dataLabels: {
                        format: ''
                    },
                    tooltip: {
                        // valueSuffix: props.radioTotal.mastery
                    }
                }]
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

        console.log('_isChartType : ', _isChartType)

        //chart modal
        document.getElementsByTagName('body')[0].classList.add('modal-open');
    },
    mounted() {
        // 핸들러 등록하기
        // document.getElementById('surveyChart').addEventListener('scroll', this.throttleUsingRaf(this.handleScroll));

        setTimeout(() => {
            let _isChartType = this.isChartType;
            let _isChartTitle = this.isChartTitle;
            let _isChartLabels = this.isChartLabels;

            for(let _key in _isChartType) {

                if (_isChartType[_key]) {

                    //mix
                    if (_key === 'mix') {

                        let _mixDataset = [];
                        let _mixLabels;
                        let _mixCategories = [];

                        for (let _mixLabelKey in this.chartSurveyData.chart) {
                            if (this.chartSurveyData.chart[_mixLabelKey].type === _key) _mixLabels = this.chartSurveyData.chart[_mixLabelKey];
                        }
                        
                        _mixDataset = _mixLabels.datasetForm.set;
                        _mixDataset.forEach((_itemObj) => {
                            if (_itemObj.type === 'spline') {
                                _itemObj.data = [];
                                for (let _resultKey in this.chartResultData) {
                                    if (_resultKey !== 'imitRepeat') _itemObj.data.push(this.chartResultData[_resultKey].total);
                                }
                            }
                        });

                        console.log('_mixDataset : ', _mixDataset);
                        this.mixChartOption.title.text = `<div class="chart-title">${this.icb.name} : ${_isChartTitle[_key]}</div>`;
                        this.mixChartOption.yAxis.max = _mixLabels.datasetForm.max;
                        this.mixChartOption.xAxis.categories = _isChartLabels[_key];
                        this.mixChartOption.series = _mixDataset;

                    }

                    //line
                    if (_key === 'line') {
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

                    //pie
                    if (_key === 'pie') {
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
                                let _keyMinus = typeof this.chartResultData['imitRepeat'] === 'undefined' ? 1 : 2;
                                if (_dataKey !== 'imitRepeat') {
                                    let _typeData = this.chartResultData[_dataKey];
                                    let _typeSingleData = _typeData[_pieKey];
                                    _singleDataSum += _typeSingleData;

                                    if (_keyIndex === Object.keys(this.chartResultData).length - _keyMinus) {
                                        _pieData['data'].push(
                                            Math.round(((_singleDataSum / _pieTotalData) * 100) * 100) / 100
                                        );
                                    }
                                    _keyIndex++;
                                }
                                
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

                    //bar
                    if (_key === 'bar') {
                        let _barDataset = [];
                        let _barIndex = 0;
                        let _barLabels;
                        let _barCategories = [];
                        
                        for (let _barLabelKey in this.chartSurveyData.chart) {
                            if (this.chartSurveyData.chart[_barLabelKey].type === _key) _barLabels = this.chartSurveyData.chart[_barLabelKey];
                        }

                        //bar dataset setting
                        _barDataset = _barLabels.datasetForm.set;
                        _barDataset.forEach((_itemObj) => {
                            _itemObj.data = [];
                            for (let _resultKey in this.chartResultData) {
                                if (_resultKey !== 'imitRepeat') {
                                    for (let _subKey in this.chartResultData[_resultKey]) {
                                        if (_subKey === _itemObj.key) {
                                            _itemObj.data.push(this.chartResultData[_resultKey][_subKey]);
                                        }
                                    }
                                }
                            }
                        });
                        
                        this.barChartOption.chart.height = 150 * _isChartLabels[_key].length;
                        this.barChartOption.title.text = `<div class="chart-title">${this.icb.name} : ${_isChartTitle[_key]}</div>`;
                        this.barChartOption.xAxis.categories = _isChartLabels[_key];
                        this.barChartOption.yAxis.max = _barLabels.datasetForm.max;
                        this.barChartOption.series = _barDataset;

                    }

                    //solidgauge
                    if (_key === 'solidgauge') {
                        let _solidgaugeDataset;
                        let _solidgaugeLabels;
                        let _solidgaugeTotal = this.chartResultData.imitRepeat.total;
                        let _solidgaugeText = '';
                        
                        for (let _solidgaugeKey in this.chartSurveyData.chart) {
                            if (this.chartSurveyData.chart[_solidgaugeKey].type === _key) _solidgaugeLabels = this.chartSurveyData.chart[_solidgaugeKey];
                        }

                        //숙달여부 체크
                        _solidgaugeDataset = _solidgaugeLabels.datasetForm;
                        for (let _ruleKey in _solidgaugeDataset.rule) {
                            _solidgaugeDataset.rule[_ruleKey].forEach((_ruleNum) => {
                                if (_ruleNum === _solidgaugeTotal) _solidgaugeText = _ruleKey;
                            });
                        }

                        this.solidgaugeChartOption.yAxis.max = _solidgaugeDataset.max;
                        this.solidgaugeChartOption.title.text = `<div class="chart-title">${this.icb.name} : ${_isChartTitle[_key]}</div>`;
                        this.solidgaugeChartOption.series[0].data.push(_solidgaugeTotal);
                        this.solidgaugeChartOption.series[0].dataLabels.format = `
                            <div style="text-align:center">
                                <span style="font-size:2rem">${_solidgaugeTotal}</span><br/>
                                <span style="font-size:2rem;">${_solidgaugeText}</span>
                            </div>
                        `;
                    }

                }

            }
        }, 500);
        
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
        top: 1.5rem;
        right: 2rem;
        padding: 0;
        font-size: 2rem;
        line-height: 0;
        color: #818181;
    }

    .btn-chart-close:hover {
        color: #2b2b2b;
    }
</style>