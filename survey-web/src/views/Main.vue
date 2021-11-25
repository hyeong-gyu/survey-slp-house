<template>
    <div class="container-md">
        <div class="row mt-5">
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <button type="button" class="btn-survey-enter" data-bs-toggle="modal" data-bs-target="#staticBackdrop" @click="codeType('icb')">
                        <img src="https://valetmag.com/gr/daily/living/features/how_to_make_better_conversation_080719/art-strangers_staring_at_their_phone.webp" class="card-img-top" alt="test">
                        <div class="card-body">
                            <p class="card-text">ICB 설문지 관련 설명 글....</p>
                        </div>
                    </button>
                </div>
            </div>
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <button type="button" class="btn-survey-enter" data-bs-toggle="modal" data-bs-target="#staticBackdrop" @click="codeType('conve')">
                        <img src="https://valetmag.com/gr/daily/living/features/how_to_make_better_conversation_080719/art-strangers_staring_at_their_phone.webp" class="card-img-top" alt="test">
                        <div class="card-body">
                            <p class="card-text">우리같이 대화기술 설문지...</p>
                        </div>
                    </button>
                </div>
            </div>
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="https://valetmag.com/gr/daily/living/features/how_to_make_better_conversation_080719/art-strangers_staring_at_their_phone.webp" class="card-img-top" alt="test">
                    <div class="card-body">
                        <p class="card-text">Comming Soon.</p>
                    </div>
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
                                <input type="password" maxlength="9" id="survey-code" class="form-control" aria-describedby="passwordHelpInline" @input="codeInput($event.target.value)" autocomplete="on" required>
                                <div class="invalid-tooltip" :class="{'on': !validCheck}">
                                    Please provide a {{ surveyType.toUpperCase() }} Code.
                                </div>
                            </div>
                            <div class="col-auto">
                                <span id="passwordHelpInline" class="form-text">
                                    Must be 9 characters long.
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
            ...mapState(['surveyType', 'icbCode', 'validCheck']),
        },
        methods: {
            ...mapMutations(['codeType', 'codeInput', 'codeValidation'])
        },
    }
</script>

<style>
    .col .card {
        margin: auto;
    }

    .col .card button {
        padding: 0;
        background-color: transparent;
        border: none;
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
</style>