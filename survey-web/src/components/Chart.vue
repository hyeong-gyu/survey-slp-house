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
            }
        }
    },
    computed: {
        ...mapState(['icb'])
    },
    mounted() {
        //var ctx = document.getElementById('myChart');
        console.log('chartSurveyData : ', this.chartSurveyData);
        console.log('chartResultData : ', this.chartResultData);
        let _isChartType = this.isChartType;

        //chart type setting
        for(let _key in this.chartSurveyData.chart) {
            let _chartType = this.chartSurveyData.chart[_key].type;
            if (typeof _isChartType[_chartType] !== 'undefined') _isChartType[_chartType] = true;
        }

        console.log('_isChartType : ', _isChartType)

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

    .chart-list-wrap .chart-item {

    }
</style>