<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-md">
            <a class="navbar-brand" href="#">SURVEY</a>
        </div>
    </nav>
    <div class="container-md">
        <div class="row mt-5">
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" @click="codeType('icb')">
                        <img src="https://valetmag.com/gr/daily/living/features/how_to_make_better_conversation_080719/art-strangers_staring_at_their_phone.webp" class="card-img-top" alt="test">
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </button>
                </div>
            </div>
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <img src="https://valetmag.com/gr/daily/living/features/how_to_make_better_conversation_080719/art-strangers_staring_at_their_phone.webp" class="card-img-top" alt="test">
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
            <div class="modal-body">
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <label for="inputPassword6" class="col-form-label">{{ type.toUpperCase() }} CODE</label>
                    </div>
                    <div class="col-auto">
                        <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" @input="codeValidation($event.target.value)">
                    </div>
                    <div class="col-auto">
                        <span id="passwordHelpInline" class="form-text">
                        Must be 8-20 characters long.
                        </span>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Sign In</button>
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
            ...mapState(['icbCode']),
        },
        methods: {
            ...mapMutations(['codeValidation']),
            codeType(_type) {
                this.type = _type;
            }
        },
    }
</script>

<style>
    .navbar {
        box-shadow: 0px -36px 40px 0px #000;
    }

    .navbar .container-md {
        flex-flow: column;
    }

    .navbar-brand {
        margin-right: 0;
    }

    .col .card {
        margin: auto;
    }

    .col .card button {
        padding: 0;
        background-color: transparent;
        border: none;
    }
</style>