<template>
    <div class="conve-table-wrap mb-5">
        <table class="table table-striped table-hover align-middle">
            <colgroup>
                <col width="8%" />
                <col width="*" />
            </colgroup>
            <thead>
                <!-- <tr>
                    <th colspan="3"></th>
                    <th>사전</th>
                    <th>사후</th>
                </tr> -->
                <tr>
                    <th>구분</th>
                    <th>번호</th>
                    <th>내용</th>
                    <th>
                        <input type="text" class="form-control" data-role-name="asis-name" value="사전">
                    </th>
                    <th>
                        <input type="text" class="form-control" data-role-name="tobe-name" value="사후">
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th rowspan="6">대화차례</th>
                    <td class="number">1</td>
                    <td>아동은 상대방이 말이 끝난 후 말을 시작한다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="conversation">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="conversation">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">2</td>
                    <td>아동은 대화를 시작하는 것을 주저하지 않는다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="conversation">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="conversation">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">3</td>
                    <td>아동은 대화를 개시하는 횟수가 또래와 비교하였을 때 비슷하게 나타난다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="conversation">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="conversation">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">4</td>
                    <td>아동은 주제를 유지하면서 상대방과 말을 주고 받을 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="conversation">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="conversation">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">5</td>
                    <td>아동은 대화하다가 주제가 바뀐다는 것을 적절히 표시할 수 있다. (ex. 그런데 오늘 유치원에서...)</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="conversation">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="conversation">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">6</td>
                    <td>아동은 다른 사람이 이야기하거나 상대방에게 집중해야 하는  상황에서는 조용히 할 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="conversation">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="conversation">
                        </label>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <th rowspan="15">대화기능</th>
                    <td class="number">7</td>
                    <td>아동은 다양한 의문사 질문에 적절히 대답할 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="function">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="function">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">8</td>
                    <td>아동은 ‘응, 그래. 그렇구나. 그래서? 그런데?’등으로 다른 사람의 말을 좀 더 확장할 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="function">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="function">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">9</td>
                    <td>아동은 대화 시 잘 알아듣지 못했을 경우 다시 말해달라고 요구할 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="function">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="function">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">10</td>
                    <td>아동은 방법, 상황 등에 대하여 설명할 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="function">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="function">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">11</td>
                    <td>아동은 자신의 경험에 대하여 이야기 할 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="function">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="function">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">12</td>
                    <td>아동은 타당한 이유를 대면서 다른 사람을 설득할 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="function">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="function">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">13</td>
                    <td>아동은 다른 사람이 관심을 보이지 않는 주제에 대해 반복적으로 이야기하지 않는다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="function">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="function">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">14</td>
                    <td>아동은 대화 주제를 갑자기 엉뚱한 내용으로 바꾸지 않는다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="function">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="function">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">15</td>
                    <td>아동은 궁금한 것이 있을 때 적절하게 질문할 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="function">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="function">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">16</td>
                    <td>아동은 상대방 기분이 상하지 않도록 거부표현을 할 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="function">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="function">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">17</td>
                    <td>아동은 친구들을 놀리거나 유머 표현을 할 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="function">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="function">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">18</td>
                    <td>아동은 놀이상황에서 상황이나 장면을 상상하여 표현할 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="function">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="function">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">19</td>
                    <td>아동은 의견이 다를 때 또는 다툼이 있을 때 적절하게 표현할 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="function">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="function">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">20</td>
                    <td>아동은 상황에 맞게 고마움이나 미안함을 적절하게 표현할 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="function">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="function">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">21</td>
                    <td>아동은 상대방의 말에 공감할 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="function">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="function">
                        </label>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <th rowspan="10">비언어적<br>대화기능</th>
                    <td class="number">22</td>
                    <td>아동은 대화할 때 상대방을 적절하게 쳐다 볼 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="nonverbal">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="nonverbal">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">23</td>
                    <td>아동은 대화할 때 상대방을 보며 미소를 적절하게 지을 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="nonverbal">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="nonverbal">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">24</td>
                    <td>아동은 말할 때 과도하게 크거나, 작게 말하지 않는다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="nonverbal">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="nonverbal">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">25</td>
                    <td>아동은 대화 시 상대방의 말을 수용하기 위한 반응(음, 네, 고개 끄덕임 등)을 할 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="nonverbal">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="nonverbal">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">26</td>
                    <td>아동은 다른 사람 표정을 보고 화/언짢음 등의 기분을 파악 할 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="nonverbal">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="nonverbal">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">27</td>
                    <td>아동은 말을 할 때 상대방과 적절한 거리를 유지 할 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="nonverbal">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="nonverbal">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">28</td>
                    <td>아동은 주위상황을 파악하고 적절한 표정을 지을 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="nonverbal">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="nonverbal">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">29</td>
                    <td>아동은 다른 사람의 어깨를 두드리는 것과 같은 행동으로 주의 끌기를 할 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="nonverbal">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="nonverbal">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">30</td>
                    <td>아동은 사람에 따라 말소리(크기나 높낮이)나 내용을 다양하게 달리하여 사용할 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="nonverbal">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="nonverbal">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">31</td>
                    <td>아동은 다른 사람의 말에 주의 집중하여 들을 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="nonverbal">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="nonverbal">
                        </label>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <th rowspan="3">기타</th>
                    <td class="number">32</td>
                    <td>아동은 자기가 알고 있거나 좋아하는 낱말을 부적절한 상황에서는 되풀이하지 않는다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="etc">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="etc">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">33</td>
                    <td>아동은 대화 중에 불필요하게 세세한 정보를 언급하지 않는다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="etc">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="etc">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">34</td>
                    <td>아동은 자신이 관심 있어 하는 것뿐만 아니라 다른 사람의 관심사에 대해서도 이야기할 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="etc">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="etc">
                        </label>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="mt-5 mb-5">
            <button type="submit" class="btn btn-primary" @click="onResult">Result</button>
        </div>
    </div>
    <ConveChart v-if="chartCheck" :dataset="dataset" />
</template>

<script>
import ConveChart from './ConveChart';

export default {
    name: 'ConveTable',
    components: {
        ConveChart
    },
    data() {
        return {
            chartCheck: false,
            dataset: {
                labels: [],
                asis: 0,
                asisConversation: 0,
                asisFunction: 0,
                asisNonverbal: 0,
                asisEtc: 0,
                tobe: 0,
                tobeConversation: 0,
                tobeFunction: 0,
                tobeNonverbal: 0,
                tobeEtc: 0,
            }
        }
    },
    methods: {
        onResult() {
            console.log('click');
            
            const __asisName = document.querySelector('[data-role-name="asis-name"]').value;
            const __asisEl = document.querySelectorAll('[data-role-default="asis"]');
            const __asisConversationEl = document.querySelectorAll('[data-role-default="asis"][data-role-ctegory="conversation"]');
            const __asisFunctionEl = document.querySelectorAll('[data-role-default="asis"][data-role-ctegory="function"]');
            const __asisNonverbalEl = document.querySelectorAll('[data-role-default="asis"][data-role-ctegory="nonverbal"]');
            const __asisEtcEl = document.querySelectorAll('[data-role-default="asis"][data-role-ctegory="etc"]');
            const __tobeName = document.querySelector('[data-role-name="tobe-name"]').value;
            const __tobeEl = document.querySelectorAll('[data-role-default="tobe"]');
            const __tobeConversationEl = document.querySelectorAll('[data-role-default="tobe"][data-role-ctegory="conversation"]');
            const __tobeFunctionEl = document.querySelectorAll('[data-role-default="tobe"][data-role-ctegory="function"]');
            const __tobeNonverbalEl = document.querySelectorAll('[data-role-default="tobe"][data-role-ctegory="nonverbal"]');
            const __tobeEtcEl = document.querySelectorAll('[data-role-default="tobe"][data-role-ctegory="etc"]');
            let __asisTotal = 0;
            let __asisConversationTotal = 0;
            let __asisFunctionTotal = 0;
            let __asisNonverbalTotal = 0;
            let __asisEtcTotal = 0;
            let __tobeTotal = 0;
            let __tobeConversationTotal = 0;
            let __tobeFunctionTotal = 0;
            let __tobeNonverbalTotal = 0;
            let __tobeEtcTotal = 0;

            [].forEach.call(__asisEl, (__el) => {
                if (__el.checked) __asisTotal++;
            });

            [].forEach.call(__asisConversationEl, (__el) => {
                if (__el.checked) __asisConversationTotal++;
            });

            [].forEach.call(__asisFunctionEl, (__el) => {
                if (__el.checked) __asisFunctionTotal++;
            });

            [].forEach.call(__asisNonverbalEl, (__el) => {
                if (__el.checked) __asisNonverbalTotal++;
            });

            [].forEach.call(__asisEtcEl, (__el) => {
                if (__el.checked) __asisEtcTotal++;
            });

            [].forEach.call(__tobeEl, (__el) => {
                if (__el.checked) __tobeTotal++;
            });

            [].forEach.call(__tobeConversationEl, (__el) => {
                if (__el.checked) __tobeConversationTotal++;
            });

            [].forEach.call(__tobeFunctionEl, (__el) => {
                if (__el.checked) __tobeFunctionTotal++;
            });

            [].forEach.call(__tobeNonverbalEl, (__el) => {
                if (__el.checked) __tobeNonverbalTotal++;
            });

            [].forEach.call(__tobeEtcEl, (__el) => {
                if (__el.checked) __tobeEtcTotal++;
            });


            this.dataset.labels.push(__asisName, __tobeName);
            this.dataset.asis = __asisTotal;
            this.dataset.asisConversation = __asisConversationTotal;
            this.dataset.asisFunction = __asisFunctionTotal;
            this.dataset.asisNonverbal = __asisNonverbalTotal;
            this.dataset.asisEtc = __asisEtcTotal;
            this.dataset.tobe = __tobeTotal;
            this.dataset.tobeConversation = __tobeConversationTotal;
            this.dataset.tobeFunction = __tobeFunctionTotal;
            this.dataset.tobeNonverbal = __tobeNonverbalTotal;
            this.dataset.tobeEtc = __tobeEtcTotal;

            console.log('__tobeName : ', __tobeName);
            console.log('this.dataset : ', this.dataset);

            this.chartCheck = true;
        }
    },
}
</script>

<style scoped>
    .conve-table-wrap table th {
        text-align: center;
    }

    .conve-table-wrap table thead input {
        text-align: center;
    }

    .conve-table-wrap table tbody th {
        border-right: 1px solid #000;
        border-bottom: 1px solid #000;
        box-shadow: none;
    }

    .conve-table-wrap table tbody:last-child th {
        border-bottom: 1px solid #dee2e6;
    }

    .conve-table-wrap table tbody td.number {
        text-align: center;
    }

    .conve-table-wrap table tbody td.number + td ~ td {
        text-align: center;
    }

</style>