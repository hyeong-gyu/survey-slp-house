<template>
    <div class="stage-wrap" v-if="surveyTypeData">
        <h4 v-html="surveyTypeData.title"></h4>
        <div class="form-check-box">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="auto" checked @change="scoreTypeCheck">
                <label class="form-check-label" for="inlineRadio1">자동 계산 버전</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="manual" @change="scoreTypeCheck">
                <label class="form-check-label" for="inlineRadio2">점수입력 버전</label>
            </div>
        </div>

        <!-- step compontent -->
        <Step :surveyManualRule="surveyTypeData.manual" :surveyTable="surveyTypeData.table" @scoreResultObject="chartData" :scoreType="scoreType" />

        <!-- step 결과에 따른 chart compontent -->
        <transition name="fade">
            <Chart v-if="layerOpen" :chartResultData="chartResultData" :chartSurveyData="surveyTypeData" @chartClose="layerClose" />
        </transition>
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
            chartResultData: null,
            layerOpen: false,
            scoreType: {
                manual: false,
                auto: true
            }
        }
    },
    computed: {
        ...mapState(['surveyType', 'icb'])
    },
    mounted() {
        const _type = this.surveyType === null ? this.$cookie.getCookie('type') : this.surveyType;
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
            this.layerOpen = true;
            this.chartResultData = _data;
        },
        scoreTypeCheck(e) {
            const _type = e.target.value;
            for(let _key in this.scoreType) {
                if (_key === _type) this.scoreType[_key] = true;
                if (_key !== _type) this.scoreType[_key] = false;
            }
        },
        layerClose() {
            this.layerOpen = false;
            document.getElementsByTagName('body')[0].classList.remove('modal-open');
        }
    },
}
</script>

<style>
    .stage-wrap {
        margin-bottom: 10rem;
        text-align: center;
    }

    .stage-wrap .form-check-box {
        margin-top: 2rem;
    }

    .fade-enter-from {
        opacity: 0;
    }

    .fade-enter-active {
        transition: all 0.5s;
    }

    .fade-enter-to {
        opacity: 1;
    }

    .fade-leave-from {
        opacity: 1;
    }

    .fade-leave-active {
        transition: all 0.5s;
    }

    .fade-leave-to {
        opacity: 0;
    }
</style>