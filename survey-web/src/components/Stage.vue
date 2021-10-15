<template>
    <div class="stage-wrap" v-if="surveyTypeData">
        <h4 v-html="surveyTypeData.title"></h4>

        <!-- step compontent -->
        <Step :surveyTable="surveyTypeData.table" @scoreResultObject="chartData" />

        <!-- step 결과에 따른 chart compontent -->
        <Chart v-if="chartResultData" :chartResultData="chartResultData" :chartSurveyData="surveyTypeData" />
    </div>
</template>

<script>
import { mapState } from 'vuex';
import surveyData from '../assets/surveyData.json';
import Step from './Step';
import Chart from './Chart';

export default {
    name: 'Stage',
    components: {
        Step,
        Chart
    },
    data() {
        return {
            surveyData: surveyData,
            surveyTypeData: null,
            chartResultData: null
        }
    },
    computed: {
        ...mapState(['surveyType', 'icb'])
    },
    mounted() {
        const _type = this.surveyType;
        const _surveyData = this.surveyData;
        const _icbObj = this.icb;

        this.surveyTypeData = _surveyData[_type].filter((_surveyObj) => {
            return _surveyObj.matrix === _icbObj.matrix;
        });

        //filter 0번째 => 객체만 추출하기 위해서
        this.surveyTypeData = this.surveyTypeData[0];
    },
    methods: {
        chartData(_data) {
            console.log("chartData : ", _data);
            this.chartResultData = _data;
        }
    },
}
</script>

<style>
    .stage-wrap {
        text-align: center;
    }
</style>