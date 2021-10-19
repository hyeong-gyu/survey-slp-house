<template>
    <div class="step-box">
        <div class="btn-wrap">
            <button type="button" class="btn btn-outline-success btn-sm" title="전체 열림" @click="openAll"><i class="bi bi-fullscreen"></i></button>
            <button type="button" class="btn btn-outline-danger btn-sm" title="전체 닫힘" @click="closeAll"><i class="bi bi-fullscreen-exit"></i></button>
            <button type="button" class="btn btn-primary btn-sm" @click="inpResult">RESULT</button>
        </div>
        <div class="accordion" id="accordionPanelsStayOpenExample">
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
                            <tbody>
                                <tr v-for="(questionArray, n2) in table.q" :key="n2">
                                    <td v-for="(question, n3) in questionArray" :key="n3">
                                        <div class="question-box" v-if="question !== 'checkbox'">
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
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>합 계</td>
                                    <td v-html="surveyScoreObject[table.name][table.score.name[0]]"></td>
                                    <td v-html="surveyScoreObject[table.name][table.score.name[1]]"></td>
                                    <td v-html="surveyScoreObject[table.name][table.score.name[2]]"></td>
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
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    name: 'Step',
    props: {
        surveyTable: Array
    },
    data() {
        return {
            surveyScoreObject: {}
        }
    },
    computed: {
        ...mapState(['parentNode'])
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
        }
    },
}
</script>

<style>
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
        margin-left: 14px;
        font-size: 0.8rem;
        font-style: normal;
        color: #1976d2;
    }
    
    .question-sum-box {
        text-align: right;
        font-size: 0.9rem;
    }
</style>