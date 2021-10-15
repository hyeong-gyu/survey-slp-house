<template>
    <div class="container-md main-icb">
        <div class="row mt-5">
            <div class="col-md info-box">
                <div class="form-floating">
                    <input type="email" class="form-control" id="icb-info-name" placeholder="name" value="홍길동">
                    <label for="icb-info-name">아동이름</label>
                </div>
                <div class="form-floating">
                    <input type="email" class="form-control" id="icb-info-birth" placeholder="1999.01.01" value="1999.01.01">
                    <label for="icb-info-birth">생년월일</label>
                </div>
            </div>
            <div class="col-md info-box">
                <div class="form-floating survey-select">
                    <select class="form-select" id="icb-info-matrix" aria-label="Floating label select example">
                        <option selected value="1">1단계</option>
                        <option value="2">2단계</option>
                        <option value="3">3단계</option>
                        <option value="4">4단계</option>
                        <option value="5">5단계</option>
                    </select>
                    <label for="icb-info-matrix">Matrix단계</label>
                </div>
            </div>
            <div class="col-md mt-5 info-box info-desc">
                <div class="info-start-desc">
                    <strong class="mb-2">시작순서</strong>
                    <ol>
                        <li>7점 이상 : <em>5단계</em></li>
                        <li>5 ~ 6점 : <em>4단계</em></li>
                        <li>3 ~ 4점 : <em>3단계</em></li>
                        <li>3점 미만 : <em>1 ~ 2단계</em></li>
                        <li class="circle">의도가 조금 나타나면 <em>2단계</em></li>
                        <li class="circle">의도가 전혀 나타나지 않으면 <em>1단계</em></li>
                    </ol>
                </div>
            </div>
            <div class="col-md mt-5 info-box info-table">
                <table class="table caption-top">
                    <thead>
                        <tr>
                            <th scope="col">구분</th>
                            <th scope="col">전혀 나타나지 않음</th>
                            <th scope="col">간헐적으로 나타남</th>
                            <th scope="col">종종/자주 나타남</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">구어 사용 (2 ~ 3어 조합)</th>
                            <td>0</td>
                            <td>1</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <th scope="row">구어 사용 (한 낱말)</th>
                            <td>0</td>
                            <td>1</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <th scope="row">지시적 몸짓</th>
                            <td>0</td>
                            <td>1</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <th scope="row">관습/표상적 몸짓</th>
                            <td>0</td>
                            <td>1</td>
                            <td>2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="d-grid gap-2 col-2 mt-5 mx-auto">
            <button class="btn btn-primary" type="button" @click="icbPlay">점수계산 실행</button>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'IcbMain',
    computed: {
        ...mapState(['icb'])
    },
    methods: {
        ...mapMutations(['icbPlay'])
    },
}
</script>

<style scoped>
    .main-icb .info-box {
        display: flex;
        flex-basis: 50%;
        justify-content: space-evenly;
    }

    .main-icb .info-box .form-floating {
        flex-basis: 50%;
        justify-content: space-between;
        margin-left: 1%;
    }
    
    .main-icb .info-box .form-floating:first-child {
        margin-left: 0;
    }

    .main-icb .info-box .form-floating.survey-select {
        flex-basis: 100%;
    }

    .main-icb .info-box.info-desc {
        flex-basis: 100%;
    }

    .main-icb .info-box.info-desc .info-start-desc {
        flex-basis: 100%;
        padding: 15px;
        border: 1px solid rgb(206 212 218);
        border-radius: 4px;
    }

    .main-icb .info-box.info-desc .info-start-desc strong {
        display: inline-block;
    }

    .main-icb .info-box.info-desc .info-start-desc ol {
        margin-bottom: 0;
    }

    .main-icb .info-box.info-desc .info-start-desc ol li {
        margin-top: 4px;
        list-style: disc;
    }

    .main-icb .info-box.info-desc .info-start-desc ol li.circle {
        list-style: circle;
    }

    .main-icb .info-box.info-desc .info-start-desc ol li > em {
        font-style: normal;
        color: #105498;
    }

    .main-icb .info-box.info-table {
        flex-basis: 100%;
    }

    .main-icb .info-box.info-table table {
        font-size: 12px;
    }

    .main-icb .info-box.info-table table th,
    .main-icb .info-box.info-table table td {
        vertical-align: middle;
    }

    .main-icb .info-box.info-table table thead th,
    .main-icb .info-box.info-table table td {
        text-align: center;
    }

    .main-icb .info-box.info-table table thead {
        background-color: #1976d2;
        color: #fff;
    }

    .main-icb .info-box.info-table table thead th,
    .main-icb .info-box.info-table table tbody th {
        font-weight: normal;
    }
</style>