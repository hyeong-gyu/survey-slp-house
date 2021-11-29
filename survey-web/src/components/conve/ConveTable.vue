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
                    <th rowspan="5">대화차례</th>
                    <td class="number">1</td>
                    <td>상대방의 말이 끝난 후 말을 시작한다.</td>
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
                    <td>대화를 시작하는 것을 주저하지 않는다..</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="conversation" data-role-spider="leading">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="conversation" data-role-spider="leading">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">3</td>
                    <td>대화를 개시하는 횟수가 또래와 비교하였을 때 비슷하게 나타난다.</td>
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
                    <td>대화하다가 주제가 바뀐다는 것을 적절히 표시할 수 있다.<br>(예 : “그런데 오늘 유치원에서~~”)</td>
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
                    <td> 다른 사람이 이야기하거나 상대방에게 집중해야 하는 상황에서 조용히 할 수 있다.</td>
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
                    <th rowspan="20">대화기능</th>
                    <td class="number">6</td>
                    <td>다양한 의문사 질문에 적절하게 대답할 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="function" data-role-spider="reactive">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="function" data-role-spider="reactive">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">7</td>
                    <td>“그래서? 그런데?” 등으로 다른 사람의 말을 좀 더 확장할 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="function" data-role-spider="leading">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="function" data-role-spider="leading">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">8</td>
                    <td>대화 시 잘 알아듣지 못했을 경우 다시 말해달라고 요구할 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="function" data-role-spider="leading">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="function" data-role-spider="leading">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">9</td>
                    <td>순서나 방법에 대하여 자세히 설명할 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="function" data-role-spider="explanation">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="function" data-role-spider="explanation">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">10</td>
                    <td>타당한 이유를 대면서 다른 사람을 설득할 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="function" data-role-spider="explanation">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="function" data-role-spider="explanation">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">11</td>
                    <td>다른 사람이 관심을 보이지 않는 주제에 대하여 반복적으로 이야기하지 않는다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="function" data-role-spider="unusual">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="function" data-role-spider="unusual">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">12</td>
                    <td>갑작스럽게 엉뚱한 내용으로 대화주제를 바꾸지 않는다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="function" data-role-spider="unusual">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="function" data-role-spider="unusual">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">13</td>
                    <td>지나간 사건이나 상황에 대하여 분명하게 설명할 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="function" data-role-spider="explanation">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="function" data-role-spider="explanation">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">14</td>
                    <td>상대방 기분이 상하지 않도록 거부 표현을 할 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="function" data-role-spider="reactive">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="function" data-role-spider="reactive">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">15</td>
                    <td>상대방의 요구에 긍정 표현을 할 수 있다.<br>(예 : “이거 할래?” → “응, 좋아.”)</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="function" data-role-spider="reactive">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="function" data-role-spider="reactive">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">16</td>
                    <td>친구들을 놀리거나 유머 표현을 할 수 있다.</td>
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
                    <td>상황이나 장면을 상상하여 표현할 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="function" data-role-spider="explanation">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="function" data-role-spider="explanation">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">18</td>
                    <td>의견이 다르거나 다툼이 있을 때 적절하게 표현할 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="function" data-role-spider="explanation">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="function" data-role-spider="explanation">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">19</td>
                    <td>고마움이나 미안함을 상황에 적절하게 표현할 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="function" data-role-spider="explanation">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="function" data-role-spider="explanation">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">20</td>
                    <td>타인이 슬프거나 기쁜 이야기를 했을 때 적절하게 반응할 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="function" data-role-spider="reactive">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="function" data-role-spider="reactive">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">21</td>
                    <td>다른 사람의 이야기에 감탄사를 적절하게 사용할 수 있다.<br>(예 : “우와~”, “정말?”, “진짜?”, “헐”, “대박”)</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="function" data-role-spider="reactive">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="function" data-role-spider="reactive">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">22</td>
                    <td>궁금한 것에 대하여 적절하게 질문할 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="function" data-role-spider="leading">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="function" data-role-spider="leading">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">23</td>
                    <td>자신이 관심 있어 하는 것 뿐만 아니라 다른 사람의 관심사에 대해서도 이야기 할 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="function" data-role-spider="reactive">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="function" data-role-spider="reactive">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">24</td>
                    <td>방법이나 미래계획, 소망 등을 묻는 개방형 질문을 사용할 수 있다.<br>(예 : “어떻게 할까?”, “왜 안 될까?”, “뭐 하고 싶어?”)</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="function" data-role-spider="leading">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="function" data-role-spider="leading">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">25</td>
                    <td>다른 사람에게 놀이를 제안하거나 선택형 질문을 할 수 있다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="function" data-role-spider="leading">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="function" data-role-spider="leading">
                        </label>
                    </td>
                </tr>
                <tr>
                    <th rowspan="9">비언어적<br>대화기능</th>
                    <td class="number">26</td>
                    <td>대화 시 상대방을 적절하게 쳐다볼 수 있다.</td>
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
                    <td>대화 시 상대방을 보며 미소를 적절하게 지을 수 있다.</td>
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
                    <td>대화 시 상대방이 지루해하면 자연스럽게 대화 주제를 바꿀 수 있다.</td>
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
                    <td>대화 시 상대방의 말을 수용하기 위한 반응(예 : 고개 끄덕임 등)을 할 수 있다.</td>
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
                    <td>대화 시 상대방과 적절한 거리를 유지할 수 있다.</td>
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
                    <td>대화 시 주위상황을 파악하고 적절한 표정을 지을 수 있다.</td>
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
                    <td class="number">32</td>
                    <td>다른 사람의 어깨를 두드리는 것과 같은 행동으로 주의 끌기를 할 수 있다.</td>
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
                    <td class="number">33</td>
                    <td>사람에 따라 말소리(크기나 높낮이)나 내용을 다양하게 달리하여 사용할 수 있다.</td>
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
                    <td class="number">34</td>
                    <td>다른 사람의 말에 주의 집중하여 들을 수 있다.</td>
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
                    <th rowspan="4">기타</th>
                    <td class="number">35</td>
                    <td>자기가 알고 있거나 좋아하는 낱말을 부적절한 상황에서는 되풀이하지 않는다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="etc" data-role-spider="unusual">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="etc" data-role-spider="unusual">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">36</td>
                    <td>대화 시 불필요하게 세세한 정보를 언급하지 않는다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="etc" data-role-spider="unusual">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="etc" data-role-spider="unusual">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">37</td>
                    <td>애매한 표현을 자주 사용하지 않는다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="etc" data-role-spider="unusual">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="etc" data-role-spider="unusual">
                        </label>
                    </td>
                </tr>
                <tr>
                    <td class="number">38</td>
                    <td>상대방의 반응을 살피지 않고 혼잣말이나 자문자답을 하지 않는다.</td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="asis" data-role-ctegory="etc" data-role-spider="unusual">
                        </label>
                    </td>
                    <td>
                        <label class="form-check-label" for="">
                            <input class="form-check-input" type="checkbox" id="" data-role-default="tobe" data-role-ctegory="etc" data-role-spider="unusual">
                        </label>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="conve-btn-wrap mt-5 mb-5">
            <button type="button" class="btn btn-primary" @click="onResult">Result</button>
        </div>
    </div>
    <ConveChart v-if="chartCheck" :dataset="dataset" @chartClose="layerClose" />
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
                asisReactive: 0,
                asisNoneReactive: 0,
                asisLeading: 0,
                asisExplanation: 0,
                asisUnusual: 0,
                tobe: 0,
                tobeConversation: 0,
                tobeFunction: 0,
                tobeNonverbal: 0,
                tobeEtc: 0,
                tobeReactive: 0,
                tobeNoneReactive: 0,
                tobeLeading: 0,
                tobeExplanation: 0,
                tobeUnusual: 0,
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

            const __asisReactiveEl = document.querySelectorAll('[data-role-default="asis"][data-role-spider="reactive"]');
            const __asisLeadingEl = document.querySelectorAll('[data-role-default="asis"][data-role-spider="leading"]');
            const __asisExplanationEl = document.querySelectorAll('[data-role-default="asis"][data-role-spider="explanation"]');
            const __asisUnusualEl = document.querySelectorAll('[data-role-default="asis"][data-role-spider="unusual"]');

            const __tobeName = document.querySelector('[data-role-name="tobe-name"]').value;
            const __tobeEl = document.querySelectorAll('[data-role-default="tobe"]');
            const __tobeConversationEl = document.querySelectorAll('[data-role-default="tobe"][data-role-ctegory="conversation"]');
            const __tobeFunctionEl = document.querySelectorAll('[data-role-default="tobe"][data-role-ctegory="function"]');
            const __tobeNonverbalEl = document.querySelectorAll('[data-role-default="tobe"][data-role-ctegory="nonverbal"]');
            const __tobeEtcEl = document.querySelectorAll('[data-role-default="tobe"][data-role-ctegory="etc"]');

            const __tobeReactiveEl = document.querySelectorAll('[data-role-default="tobe"][data-role-spider="reactive"]');
            const __tobeLeadingEl = document.querySelectorAll('[data-role-default="tobe"][data-role-spider="leading"]');
            const __tobeExplanationEl = document.querySelectorAll('[data-role-default="tobe"][data-role-spider="explanation"]');
            const __tobeUnusualEl = document.querySelectorAll('[data-role-default="tobe"][data-role-spider="unusual"]');

            let __asisTotal = 0;
            let __asisConversationTotal = 0;
            let __asisFunctionTotal = 0;
            let __asisNonverbalTotal = 0;
            let __asisEtcTotal = 0;
            let __asisReactiveTotal = 0;
            let __asisNoneReactiveTotal = 0;
            let __asisLeadingTotal = 0;
            let __asisExplanationTotal = 0;
            let __asisUnusuaTotal = 0;

            let __tobeTotal = 0;
            let __tobeConversationTotal = 0;
            let __tobeFunctionTotal = 0;
            let __tobeNonverbalTotal = 0;
            let __tobeEtcTotal = 0;
            let __tobeReactiveTotal = 0;
            let __tobeNoneReactiveTotal = 0;
            let __tobeLeadingTotal = 0;
            let __tobeExplanationTotal = 0;
            let __tobeUnusuaTotal = 0;

            //asis total
            [].forEach.call(__asisEl, (__el) => {
                if (__el.checked) __asisTotal++;
            });

            //asis conversation total
            [].forEach.call(__asisConversationEl, (__el) => {
                if (__el.checked) __asisConversationTotal++;
            });

            //asis function total
            [].forEach.call(__asisFunctionEl, (__el) => {
                if (__el.checked) __asisFunctionTotal++;
            });

            //asis nonverbal total
            [].forEach.call(__asisNonverbalEl, (__el) => {
                if (__el.checked) __asisNonverbalTotal++;
            });

            //asis etc total
            [].forEach.call(__asisEtcEl, (__el) => {
                if (__el.checked) __asisEtcTotal++;
            });

            //asis reactive total
            [].forEach.call(__asisReactiveEl, (__el) => {
                if (__el.checked) __asisReactiveTotal++;
                if (!__el.checked) __asisNoneReactiveTotal++;
            });

            //asis leading total
            [].forEach.call(__asisLeadingEl, (__el) => {
                if (__el.checked) __asisLeadingTotal++;
            });

            //asis explantion total
            [].forEach.call(__asisExplanationEl, (__el) => {
                if (__el.checked) __asisExplanationTotal++;
            });

            //asis unusaual total
            [].forEach.call(__asisUnusualEl, (__el) => {
                if (__el.checked) __asisUnusuaTotal++;
            });

            //asis ete total
            [].forEach.call(__asisEtcEl, (__el) => {
                if (__el.checked) __asisEtcTotal++;
            });

            //tobe total
            [].forEach.call(__tobeEl, (__el) => {
                if (__el.checked) __tobeTotal++;
            });

            //tobe conversation total
            [].forEach.call(__tobeConversationEl, (__el) => {
                if (__el.checked) __tobeConversationTotal++;
            });

            //tobe function total
            [].forEach.call(__tobeFunctionEl, (__el) => {
                if (__el.checked) __tobeFunctionTotal++;
            });

            //tobe nonverbal total
            [].forEach.call(__tobeNonverbalEl, (__el) => {
                if (__el.checked) __tobeNonverbalTotal++;
            });

            //tobe etc total
            [].forEach.call(__tobeEtcEl, (__el) => {
                if (__el.checked) __tobeEtcTotal++;
            });

            //tobe reactive total
            [].forEach.call(__tobeReactiveEl, (__el) => {
                if (__el.checked) __tobeReactiveTotal++;
                if (!__el.checked) __tobeNoneReactiveTotal++;
            });

            //tobe leading total
            [].forEach.call(__tobeLeadingEl, (__el) => {
                if (__el.checked) __tobeLeadingTotal++;
            });

            //tobe explantion total
            [].forEach.call(__tobeExplanationEl, (__el) => {
                if (__el.checked) __tobeExplanationTotal++;
            });

            //tobe unusaual total
            [].forEach.call(__tobeUnusualEl, (__el) => {
                if (__el.checked) __tobeUnusuaTotal++;
            });

            this.dataset.labels = [];
            this.dataset.labels.push(__asisName, __tobeName);
            this.dataset.asis = __asisTotal;
            this.dataset.asisConversation = __asisConversationTotal;
            this.dataset.asisFunction = __asisFunctionTotal;
            this.dataset.asisNonverbal = __asisNonverbalTotal;
            this.dataset.asisEtc = __asisEtcTotal;

            this.dataset.asisReactive = __asisReactiveTotal;
            this.dataset.asisNoneReactive = __asisNoneReactiveTotal;
            this.dataset.asisLeading = __asisLeadingTotal;
            this.dataset.asisExplanation = __asisExplanationTotal;
            this.dataset.asisUnusual = __asisUnusuaTotal;

            this.dataset.tobe = __tobeTotal;
            this.dataset.tobeConversation = __tobeConversationTotal;
            this.dataset.tobeFunction = __tobeFunctionTotal;
            this.dataset.tobeNonverbal = __tobeNonverbalTotal;
            this.dataset.tobeEtc = __tobeEtcTotal;

            this.dataset.tobeReactive = __tobeReactiveTotal;
            this.dataset.tobeNoneReactive = __tobeNoneReactiveTotal;
            this.dataset.tobeLeading = __tobeLeadingTotal;
            this.dataset.tobeExplanation = __tobeExplanationTotal;
            this.dataset.tobeUnusual = __tobeUnusuaTotal;

            console.log('this.dataset : ', this.dataset);

            this.chartCheck = true;
        },
        layerClose() {
            console.log('close click')
            this.chartCheck = false;
            document.getElementsByTagName('body')[0].classList.remove('modal-open');
        }
    },
}
</script>

<style scoped>
    .conve-table-wrap table {
        font-size: 14px;
    }

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

    .conve-btn-wrap {
        text-align: center;
    }

</style>