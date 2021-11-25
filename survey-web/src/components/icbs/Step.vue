<template>
    <div class="step-box">
        <div class="btn-wrap">
            <button type="button" class="btn btn-outline-success btn-sm" title="전체 열림" @click="openAll"><i class="bi bi-fullscreen"></i></button>
            <button type="button" class="btn btn-outline-danger btn-sm" title="전체 닫힘" @click="closeAll"><i class="bi bi-fullscreen-exit"></i></button>
            <button type="button" class="btn btn-primary btn-sm" @click="inpResult">RESULT</button>
        </div>
        <!-- 자동 계산 버전 -->
        <div class="accordion" id="accordion-manual-wrap" v-if="scoreType.auto">
            <div class="accordion-item" v-for="(table, i) in surveyTable" :key="i">
                <h2 class="accordion-header" :id="`question-heading-${i}`">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="`#question-${i}`" aria-expanded="true" :aria-controls="`question-${i}`">
                        <span>{{ table.title }}</span>
                        <em>(총 합계 : {{ surveyScoreObject[table.name].total }})</em>
                    </button>
                </h2>
                <div :id="`question-${i}`" class="accordion-collapse collapse show" :aria-labelledby="`question-heading-${i}`">
                    <div class="accordion-body" :data-role-name="`${table.name}`">
                        <table class="table table-striped table-hover align-middle">
                            <colgroup>
                                <col width="60%" />
                                <col width="*" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th v-for="(thead, n1) in table.thead" :key="n1">
                                        {{ thead }}
                                    </th>
                                </tr>
                            </thead>
                            <tbody v-if="typeof table.q !== 'undefined'">
                                <tr v-for="(questionArray, n2) in table.q" :key="n2">
                                    <td v-for="(question, n3) in questionArray" :key="n3">
                                        <div class="question-box" v-if="question !== 'checkbox' && question !== 'radio'">
                                            <span class="number">{{ n2 + 1 }}.</span>
                                            <span v-html="question"></span>
                                        </div>
                                        <span v-if="question === 'checkbox'">
                                            <div class="form-check">
                                                <label class="form-check-label" :for="`question-${i}-${n2}-${n3}`">
                                                    <input class="form-check-input" type="checkbox" :id="`question-${i}-${n2}-${n3}`" :data-role-name="`${table.score.name[n3 - 1]}`" :data-role-index="`${i}`" @change="inpCalculation">
                                                </label>
                                            </div>
                                        </span>
                                        <span v-if="question === 'radio'">
                                            <div class="form-check">
                                                <label class="form-check-label" :for="`question-radio-${i}-${n2}-${n3}`">
                                                    <input class="form-check-input" type="radio" :name="`radio-${i}-${n2}`" :id="`question-radio-${i}-${n2}-${n3}`" :data-role-name="`${table.score.name[n3 - 1]}`" :data-role-index="`${n3}`" @change="imitRepeatCalculation">
                                                </label>
                                            </div>
                                        </span>
                                    </td>
                                </tr>
                                <!-- <tr v-if="typeof table['q-mult'] !== 'undefined'" v-for="(questionArray, n2) in table['q-mult']" :key="n2">
                                    <td v-for="(question, n3) in questionArray" :key="n3">
                                        <div v-if="n3 == 0">
                                            <span v-html="question"></span>
                                        </div>
                                        <div class="question-box" v-if="question !== 'checkbox' && question !== 'radio' && n3 !== 0">
                                            <span class="number">{{ n2 + 1 }}.</span>
                                            <span v-html="question"></span>
                                        </div>
                                        <span v-if="question === 'checkbox'">
                                            <div class="form-check">
                                                <label class="form-check-label" :for="`question-${i}-${n2}-${n3}`">
                                                    <input class="form-check-input" type="checkbox" :id="`question-${i}-${n2}-${n3}`" :data-role-name="`${table.score.name[n3 - 1]}`" :data-role-index="`${i}`" @change="inpCalculation">
                                                </label>
                                            </div>
                                        </span>
                                        <span v-if="question === 'radio'">
                                            <div class="form-check">
                                                <label class="form-check-label" :for="`question-radio-${i}-${n2}-${n3}`">
                                                    <input class="form-check-input" type="radio" :name="`radio-${i}-${n2}`" :id="`question-radio-${i}-${n2}-${n3}`" :data-role-name="`${table.score.name[n3 - 1]}`" :data-role-index="`${n3}`" @change="imitRepeatCalculation">
                                                </label>
                                            </div>
                                        </span>
                                    </td>
                                </tr> -->
                            </tbody>
                            <tbody v-if="typeof table['q-mult']" v-for="(questionArray, n2) in table['q-mult']" :key="n2" class="table-mult-body">
                                <tr>
                                    <th colspan="5" class="table-mult-title">
                                        {{ table.colSpan[n2].text }}
                                    </th>
                                </tr>
                                <tr v-if="typeof table['q-mult'] !== 'undefined'" v-for="(qArray, n3) in questionArray" :key="n3">
                                    <td v-for="(question, n4) in qArray" :key="n4">
                                        <div class="question-box" v-if="question !== 'checkbox' && question !== 'radio'">
                                            <span class="number">{{ n3 + 1 }}.</span>
                                            <span v-html="question"></span>
                                        </div>
                                        <span v-if="question === 'checkbox'">
                                            <div class="form-check">
                                                <label class="form-check-label" :for="`question-${i}-${n3}-${n4}`">
                                                    <input class="form-check-input" type="checkbox" :id="`question-${i}-${n3}-${n4}`" :data-role-name="`${table.score.name[n4 - 1]}`" :data-role-index="`${i}`" @change="inpCalculation">
                                                </label>
                                            </div>
                                        </span>
                                        <span v-if="question === 'radio'">
                                            <div class="form-check">
                                                <label class="form-check-label" :for="`question-radio-${i}-${n3}-${n4}`">
                                                    <input class="form-check-input" type="radio" :name="`radio-${i}-${n3}`" :id="`question-radio-${i}-${n3}-${n4}`" :data-role-name="`${table.score.name[n4 - 1]}`" :data-role-index="`${n4}`" @change="imitRepeatCalculation">
                                                </label>
                                            </div>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot v-if="table.name !== 'imitRepeat'">
                                <tr>
                                    <td>합 계</td>
                                    <td v-html="surveyScoreObject[table.name][table.score.name[0]]"></td>
                                    <td v-html="surveyScoreObject[table.name][table.score.name[1]]"></td>
                                    <td v-html="surveyScoreObject[table.name][table.score.name[2]]"></td>
                                    <td v-if="table.score.name[3] !== 'total'" v-html="surveyScoreObject[table.name][table.score.name[3]]"></td>
                                </tr>
                            </tfoot>
                        </table>
                        <div class="question-sum-box">
                            <i class="bi bi-save2"></i>
                            총 합계 : {{ surveyScoreObject[table.name].total }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 점수 입력 버전 -->
        <div class="accordion" id="accordion-manual-wrap" v-if="scoreType.manual">
            <div class="accordion-item" v-for="(table, i) in surveyTable" :key="i">
                <h2 class="accordion-header" :id="`question-manual-heading-${i}`">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="`#question-manual-${i}`" aria-expanded="true" :aria-controls="`question-manual-${i}`">
                        <span>{{ table.title }}</span>
                        <em>(총 합계 : {{ surveyScoreObject[table.name].total }})</em>
                    </button>
                </h2>
                <div :id="`question-manual-${i}`" class="accordion-collapse collapse show" :aria-labelledby="`question-manual-heading-${i}`">
                    <div class="accordion-body" :data-role-name="`${table.name}`">
                        <div class="row question-manual-wrap">
                            <div class="col" :class="{'hidden' : a1 === 0}" v-for="(thead, a1) in table.thead" :key="a1" v-if="table.name !== 'imitRepeat'">
                                <h5 v-if="a1 === 0" class="question-manual-title">
                                    점수 입력 버전
                                </h5>
                                <div v-if="a1 !== 0" class="input-group question-manual-score">
                                    <label :for="`survey-${i}-${a1}`" class="input-group-text">{{ thead }}</label>
                                    <input type="number" class="form-control" :id="`survey-${i}-${a1}`" placeholder="0" value="0" :data-role-name="`${table.score.name[a1 - 1]}`" :data-role-index="`${i}`" @input="inpManualCalculation">
                                </div>
                            </div>
                            <div class="col" v-if="table.name === 'imitRepeat'">
                                <div class="input-group question-manual-score">
                                    <label for="survey-imit-repeat" class="input-group-text">점수 입력</label>
                                    <input type="number" class="form-control" id="survey-imit-repeat" placeholder="0" value="0" :data-role-name="`${table.name}`" :data-role-index="`${i}`" @input="imitRepeatManualCalculation">
                                </div>
                            </div>
                            <div class="question-sum-box">
                                <i class="bi bi-save2"></i>
                                총 합계 : {{ surveyScoreObject[table.name].total }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="btn-wrap mt-5" v-if="icb.matrix > 1 && closeCheck === false">
            <button type="button" class="btn btn-primary btn-sm" @click="inpResult">RESULT</button>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    name: 'Step',
    props: {
        surveyTable: Array,
        scoreType: Object,
        surveyManualRule: Object
    },
    data() {
        return {
            surveyScoreObject: {},
            closeCheck: false
        }
    },
    computed: {
        ...mapState(['icb', 'parentNode'])
    },
    beforeMount() {
        const _tableData = this.surveyTable;
        let _surveyScoreObject = this.surveyScoreObject;

        _tableData.forEach((_tableObj) => {
            if (typeof _surveyScoreObject[_tableObj.name] === 'undefined') {
                _surveyScoreObject[_tableObj.name] = {};
            }

            _tableObj.score.name.forEach((_score) => {
                _surveyScoreObject[_tableObj.name][_score] = 0;
            });

            //문제 별 점수 계산 값 설정
            for(let _key in _tableObj.score.rule) {
                if(typeof _surveyScoreObject[_tableObj.name]['rule'] === 'undefined') _surveyScoreObject[_tableObj.name]['rule'] = {};
                _surveyScoreObject[_tableObj.name]['rule'][_key] = _tableObj.score.rule[_key];
            }
        });
    },
    //데이터 변경 감지
    watch: {
        scoreType: {
            deep: true,
            handler(newData) {
                for(let _key in this.surveyScoreObject) {
                    for(let _scroeKey in this.surveyScoreObject[_key]) {
                        if (_scroeKey != 'rule') this.surveyScoreObject[_key][_scroeKey] = 0;
                    }
                }
            },
        }
    },
    methods: {
        ...mapMutations(['getParents']),
        inpCalculation(e) {

            const _tableIndex = Number(e.target.getAttribute('data-role-index'));
            let _parentFindNode = null;

            [].forEach.call(document.querySelectorAll('.accordion-body'), (_el, _i) => {
                if (_i === _tableIndex) {
                    _parentFindNode = _el;
                }
            })

            //부모 노드 찾기 위한 함수 실행
            this.getParents({
                el: e.target,
                parentSelector: _parentFindNode
            });

            let _surveyScoreObject = this.surveyScoreObject;
            let _checked = e.target.checked;
            let _checkBodyName = this.parentNode[this.parentNode.length -1].getAttribute('data-role-name');
            let _checkName = e.target.getAttribute('data-role-name');
            
            //rule 점수 계산
            if (_checked) {
                _surveyScoreObject[_checkBodyName][_checkName] += _surveyScoreObject[_checkBodyName].rule[_checkName];
            } else {
                _surveyScoreObject[_checkBodyName][_checkName] -= _surveyScoreObject[_checkBodyName].rule[_checkName];
            }

            //total 합산
            _surveyScoreObject[_checkBodyName].total = 0;
            for (let _key in _surveyScoreObject[_checkBodyName].rule) {
                _surveyScoreObject[_checkBodyName].total = _surveyScoreObject[_checkBodyName].total + _surveyScoreObject[_checkBodyName][_key];
            }
        },
        inpManualCalculation(e) {
            console.log('e : ', e.target.value)

            const _tableIndex = Number(e.target.getAttribute('data-role-index'));
            let _parentFindNode = null;

            [].forEach.call(document.querySelectorAll('.accordion-body'), (_el, _i) => {
                if (_i === _tableIndex) {
                    _parentFindNode = _el;
                }
            })

            //부모 노드 찾기 위한 함수 실행
            this.getParents({
                el: e.target,
                parentSelector: _parentFindNode
            });

            let _surveyNum = Number(e.target.value);
            let _surveyScoreObject = this.surveyScoreObject;
            let _inpBodyName = this.parentNode[this.parentNode.length -1].getAttribute('data-role-name');
            let _inpName = e.target.getAttribute('data-role-name');
            let _surveyManualRule = this.surveyManualRule[_inpBodyName].rule;
            let _targetName = e.target.getAttribute('data-role-name');
            let _max = typeof _surveyManualRule[`${_targetName}Max`] !== 'undefined' ? _surveyManualRule[`${_targetName}Max`] : _surveyManualRule.max;

            if (_surveyNum > _max) {
                e.target.value = _max;
                _surveyNum = Number(e.target.value);
            }
            if (_surveyNum < _surveyManualRule.min) {
                e.target.value = _surveyManualRule.min;
                _surveyNum = Number(e.target.value);
            }

            _surveyScoreObject[_inpBodyName][_inpName] = _surveyNum;

            //total 합산
            _surveyScoreObject[_inpBodyName].total = 0;
            for (let _key in _surveyScoreObject[_inpBodyName].rule) {
                _surveyScoreObject[_inpBodyName].total = _surveyScoreObject[_inpBodyName].total + _surveyScoreObject[_inpBodyName][_key];
            }
        },
        imitRepeatCalculation(e) {

            const _el = document.getElementsByClassName(event.target.className);
            let _type = e.target.getAttribute('type');
            let _imitRepeatTotal = 0;
            let _radioEl = [];
                        
            [].forEach.call(_el, (_searchEl) => {
                if (_searchEl.getAttribute('type') === _type) _radioEl.push(_searchEl);
            });

            for (let _i = 0; _i < _radioEl.length; _i++) {
                if (_radioEl[_i].checked) _imitRepeatTotal += Number(_radioEl[_i].getAttribute('data-role-index'));
            }

            this.surveyScoreObject.imitRepeat.total = _imitRepeatTotal;

            console.log('this.surveyScoreObject.imitRepeat.total : ', this.surveyScoreObject.imitRepeat.total)
            
        },
        imitRepeatManualCalculation(e) {

            let _targetName = e.target.getAttribute('data-role-name');
            let _surveyNum = Number(e.target.value);
            let _surveyManualRule = this.surveyManualRule[_targetName].rule;
            let _max = _surveyManualRule.max;
            let _min = _surveyManualRule.min;

            if (_surveyNum > _max) {
                e.target.value = _max;
                _surveyNum = Number(e.target.value);
            }
            if (_surveyNum < _min) {
                e.target.value = _min;
                _surveyNum = Number(e.target.value);
            }

            this.surveyScoreObject.imitRepeat.total = _surveyNum;

        },
        inpResult() {
            this.$emit('scoreResultObject', this.surveyScoreObject);
        },
        openAll() {
            const _accordionButton = document.querySelectorAll('.accordion-button');
            const _accordionContent = document.querySelectorAll('.accordion-collapse');

            [].forEach.call(_accordionButton, (_el) => {
                _el.classList.remove('collapsed');
                _el.setAttribute('aria-expanded', true);
            });

            [].forEach.call(_accordionContent, (_el) => {
                _el.classList.add('show');
            });

            this.closeCheck = false;
        },
        closeAll() {
            const _accordionButton = document.querySelectorAll('.accordion-button');
            const _accordionContent = document.querySelectorAll('.accordion-collapse');

            [].forEach.call(_accordionButton, (_el) => {
                _el.classList.add('collapsed');
                _el.setAttribute('aria-expanded', false);
            });

            [].forEach.call(_accordionContent, (_el) => {
                _el.classList.remove('show');
            });

            this.closeCheck = true;
        }
    },
}
</script>

<style>
    .hidden {
        overflow: hidden;
        position: absolute;
        top: -9999px;
        left: -9999px;
        width: 1px;
        height: 1px;
        font-size: 1;
        line-height: 0;
    }

    .step-box {
        margin-top: 2rem;
    }

    .step-box .btn-wrap {
        margin-bottom: 0.5rem;
        text-align: right;
    }

    .step-box .btn-wrap button {
        margin-left: 5px;
    }

    .step-box .btn-wrap button:first-child {
        margin-left: 0;
    }

    .step-box .nav {
        border-bottom: 1px solid #000;
    }

    .accordion-button em {
        display: inline-block;
        margin-left: 0.5rem;
        font-size: 14px;
        font-style: normal;
        color: darkslategrey;
    }

    .accordion-body .table {
        font-size: 0.9rem;
    }

    .accordion-body .table thead tr th {
        font-weight: normal;
    }

    .accordion-body .table tbody {
        font-size: 0.85rem;
    }

    .accordion-body .table tbody tr td:first-child {
        text-align: left;
    }

    .accordion-body .table tbody .question-box .number {
        margin-right: 4px;
    }

    .accordion-body .table tbody .question-box em {
        display: inline-block;
        margin-left: 25px;
        font-size: 0.8rem;
        font-style: normal;
        color: #1976d2;
        text-indent: -10px;
    }

    .accordion-body .table tbody.table-mult-body .table-mult-title {
        padding: 1.2rem;
        background-color: #e7f1ff;
        border-bottom: 1px solid #e7e7e7;
        box-shadow: none;
    }
    
    .question-sum-box {
        text-align: right;
        font-size: 0.9rem;
    }

    /* 자동계산 버전 css */
    .question-manual-wrap {
        width: 100%;
        padding: 2rem;
        margin: 0;
    }

    .question-manual-wrap .col label {
        width: 60%;
        justify-content: center;
        font-size: 12px;
    }

    .question-manual-wrap .col input {
        text-align: center;
        font-size: 12px;
    }

    .question-manual-wrap .question-sum-box {
        margin-top: 1rem;
    }
</style>