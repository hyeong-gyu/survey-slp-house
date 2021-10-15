<template>
    <div class="chart-wrap">
        <div class="container-md">
            <div class="chart-info-wrap mt-5 mb-4">
                <div class="card text-center">
                    <div class="card-header">
                        CB-stage : {{ icb.matrix }} 단계
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{ icb.name }}</h5>
                        <p class="card-text">CB-stage 설명글이 입력되는 곳입니다.</p>
                    </div>
                    <div class="card-footer text-muted">
                        생년월일 : {{ icb.birth }}
                    </div>
                </div>
            </div>
            <div class="chart-list-wrap">
                <div class="chart-item row" v-if="isChartType.mix">
                    <canvas id="mix-chart"></canvas>
                </div>
                <div class="chart-item row" v-if="isChartType.line">
                    <canvas id="line-chart"></canvas>
                </div>
                <div class="chart-item row" v-if="isChartType.doughnut">
                    <canvas id="doughnut-chart"></canvas>
                </div>
                <div class="chart-item row" v-if="isChartType.bar">
                    <canvas id="bar-chart"></canvas>
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
            isChartType: {
                mix: false,
                line: false,
                doughnut: false,
                bar: false
            },
            isChartTitle: {
                mix: '',
                line: '',
                doughnut: '',
                bar: ''
            }
        }
    },
    computed: {
        ...mapState(['icb'])
    },
    beforeMount() {
        let _isChartType = this.isChartType;
        let _isChartTitle = this.isChartTitle;

        //chart type setting
        for(let _key in this.chartSurveyData.chart) {
            let _chartType = this.chartSurveyData.chart[_key].type;
            if (typeof _isChartType[_chartType] !== 'undefined') {
                _isChartType[_chartType] = true;
                _isChartTitle[_chartType] = _key;
            }
        }
    },
    mounted() {
        //var ctx = document.getElementById('myChart');
        console.log('chartSurveyData : ', this.chartSurveyData);
        console.log('chartResultData : ', this.chartResultData);
        console.log('_isChartTitle22 : ', this.isChartTitle);

        let _isChartType = this.isChartType;
        let _isChartTitle = this.isChartTitle;

        for(let _key in _isChartType) {

            if (_isChartType[_key]) {
                console.log('_isChartType : ', _key);

                if (_key === "line") {
                    let _ctx = document.getElementById('line-chart');
                    let _labels = [];
                    let _data = [];

                    //line chart title
                    this.chartSurveyData.table.forEach((_tableObj) => {
                        _labels.push(_tableObj.title);
                    });

                    //line chart value
                    for(let _key in this.chartResultData) {
                        _data.push(this.chartResultData[_key].total);
                    }

                    let _lineChart = new Chart(_ctx, {
                        type: 'line',
                        data: {
                            labels: _labels,
                            datasets: [
                                {
                                    label: `${this.icb.name}`,
                                    data: _data,
                                    backgroundColor: [
                                        '#247deb'
                                    ],
                                    borderColor: [
                                        '#247deb'
                                    ],
                                    borderWidth: 3
                                }
                            ]
                        },
                        options: {
                            plugins: {
                                title: {
                                    display: true,
                                    font: {
                                        size: 30
                                    },
                                    color: '#2b2b2b',
                                    text: _isChartTitle[_key],
                                    padding: {
                                        bottom: 30
                                    }
                                },
                                legend: {
                                    position: 'bottom'
                                }
                            },
                            scales: {
                                y: {
                                    beginAtZero: true,
                                    max: 15,
                                    ticks: {
                                        // forces step size
                                        stepSize: 1
                                    }
                                }
                            }
                        }
                    });
                }

                // switch(_key) {

                //     case "mix":

                //         break;

                //     case "line":

                //         break;

                //     case "doughnut":

                //         break;

                //     case "bar":

                //         break;
                // }
            }

        }

        // let _labels = [];
        // let _data = [];

        // this.chartSurveyData.table.forEach((_tableObj) => {
        //     _labels.push(_tableObj.title);
        // });
        
        // for(let _key in this.chartResultData) {
        //     _data.push(this.chartResultData[_key].total);
        // }

        // console.log(_labels);
        // console.log(_data);

        // new Chart(ctx, {
        //     type: 'line',
        //     data: {
        //         labels: _labels,
        //         datasets: [
        //             {
        //                 label: `${this.icb.name}`,
        //                 data: _data,
        //                 backgroundColor: [
        //                     'rgb(75, 192, 192)'
        //                 ],
        //                 borderColor: [
        //                     'rgb(75, 192, 192)'
        //                 ],
        //                 borderWidth: 1
        //             }
        //         ]
        //     },
        //     options: {
        //         plugins: {
        //             title: {
        //                 display: true,
        //                 text: 'Chart Title',
        //             }
        //         },
        //         scales: {
        //             y: {
        //                 beginAtZero: true,
        //                 max: 15,
        //                 ticks: {
        //                     // forces step size
        //                     stepSize: 1
        //                 }
        //             }
        //         }
        //     }
        // });
    },
}
</script>

<style scoped>
    .chart-wrap {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
    }

    .chart-list-wrap {
        margin-top: 8rem;
    }
</style>