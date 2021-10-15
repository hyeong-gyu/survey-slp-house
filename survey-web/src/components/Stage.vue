<template>
    <div class="stage-wrap" v-if="surveyTypeData">
        <h4 v-html="surveyTypeData.title"></h4>
        <Step :surveyTable="surveyTypeData.table" />
    </div>
</template>

<script>
import { mapState } from 'vuex';
import surveyData from '../assets/surveyData.json';
import Step from './Step';

export default {
    name: 'Stage',
    components: {
        Step
    },
    data() {
        return {
            surveyData: surveyData,
            surveyTypeData: null
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
}
</script>

<style>
    .stage-wrap {
        text-align: center;
    }
</style>