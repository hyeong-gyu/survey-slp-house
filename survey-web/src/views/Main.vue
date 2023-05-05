<template>
    <div class="container-md">
        <div class="row mt-5">
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <button type="button" class="btn-survey-enter" data-bs-toggle="modal" data-bs-target="#staticBackdrop" @click="codeType('icb')">
                        <figure>
                            <img src="../assets/images/slphouse_main1.png" class="card-img-top" alt="">
                        </figure>
                        <div class="card-body">
                            <p class="card-text">아동의 의사소통 기능 및 수단을 단계적으로 확인할 수 있는 설문지(ICB)</p>
                        </div>
                    </button>
                </div>
            </div>
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <button type="button" class="btn-survey-enter" data-bs-toggle="modal" data-bs-target="#staticBackdrop" @click="codeType('conve')">
                        <figure>
                            <img src="../assets/images/slphouse_main2.png" class="card-img-top" alt="">
                        </figure>
                        <div class="card-body">
                            <p class="card-text">아동의 대화기술 능력을 체계적으로 확인할 수 있는 설문지</p>
                        </div>
                    </button>
                </div>
            </div>
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <button type="button" class="btn-survey-enter" data-bs-toggle="modal" data-bs-target="#staticBackdrop" @click="codeType('gen')">
                        <figure>
                            <img src="../assets/images/slphouse_main3.png" class="card-img-top" alt="">
                        </figure>
                        <div class="card-body">
                            <p class="card-text">아동의 대화기술을 일반화할 수 있는 프로그램</p>
                        </div>
                    </button>
                </div>
            </div>
            
            <!-- <div class="col">
                <div class="card" style="width: 18rem;">
                    <button type="button" class="btn-survey-enter" @click="rinkTo()">
                        <figure>
                            <img src="../assets/images/slphouse_main3.png" class="card-img-top" alt="">
                        </figure>
                        <div class="card-body">
                            <p class="card-text">test</p>
                        </div>
                    </button>
                </div>
            </div> -->
        </div>
        <div class="row mt-5">
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <button class="btn-survey-enter" data-bs-toggle="modal" data-bs-target="#staticBackdrop" @click="codeType('talk')">
                        <figure>
                            <img src="../assets/images/slphouse_main4.png" class="card-img-top" alt="">
                        </figure>
                        <div class="card-body">
                            <p class="card-text">WEB기반 어휘학습 프로그램</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Please enter the code.</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" v-if="surveyType">
                    <form>
                        <div class="row g-3 align-items-center">
                            <div class="col-auto">
                                <label for="survey-code" class="col-form-label">{{ surveyType.toUpperCase() }} CODE</label>
                            </div>
                            <div class="col-auto position-relative">
                                <input v-if="surveyType === 'icb'" type="password" maxlength="9" id="survey-code" class="form-control" aria-describedby="passwordHelpInline" @input="codeInput($event.target.value)" @keydown.enter.prevent="codeValidation" autocomplete="on" required>
                                <input v-if="surveyType === 'conve'" type="password" maxlength="6" id="survey-code" class="form-control" aria-describedby="passwordHelpInline" @input="codeInput($event.target.value)" @keydown.enter.prevent="codeValidation" autocomplete="on" required>
                                <input v-if="surveyType === 'gen'" type="password" maxlength="12" id="survey-code" class="form-control" aria-describedby="passwordHelpInline" @input="codeInput($event.target.value)" @keydown.enter.prevent="codeValidation" autocomplete="on" required>
                                <input v-if="surveyType === 'talk'" type="password" id="survey-code" class="form-control" aria-describedby="passwordHelpInline" @input="codeInput($event.target.value)" @keydown.enter.prevent="codeValidation" autocomplete="on" required>
                                <div class="invalid-tooltip" :class="{'on': !validCheck}">
                                    Please provide a {{ surveyType.toUpperCase() }} Code.
                                </div>
                            </div>
                            <div class="col-auto">
                                <span id="passwordHelpInline" class="form-text" v-if="surveyType === 'icb'">
                                    Must be 9 characters long.
                                </span>
                                <span id="passwordHelpInline" class="form-text" v-if="surveyType === 'conve'">
                                    Must be 6 characters long.
                                </span>
                                <span id="passwordHelpInline" class="form-text" v-if="surveyType === 'gen'">
                                    Must be 'SLP-' 4 characters long.
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="codeValidation">Sign In</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';

    export default {
        name: 'Main',
        data() {
            return {
                type: null
            }
        },
        computed: {
            ...mapState(['surveyType', 'icbCode', 'validCheck', 'icb', 'conve']),
        },
        methods: {
            ...mapMutations(['codeType', 'codeInput', 'codeValidation'])
        },
    }
</script>

<style scoped>
    .col .card {
        min-height: 520px;
        margin: auto;
    }

    .col .card .btn-survey-enter {
        min-height: 520px;
        height: 100%;
        padding: 0;
        background-color: transparent;
        border: none;
        text-decoration: none;
        color: #000;
    }

    .col .card .btn-survey-enter figure {
        height: 380px;    
    }

    .on {
        display: block;
    }

    .card-body {
        height: 6.5rem;
    }

    .btn-survey-enter {
        transition: box-shadow 0.5s;
    }

    .btn-survey-enter:hover {
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 1024px) {
        .row .col {
            padding: calc(var(--bs-gutter-x) *.5);
        }
    }
</style>