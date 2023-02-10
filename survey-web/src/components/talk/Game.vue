<template>
    <div class="talk-box">
        <div class="game-wrap">
            <div class="ocean">
                <div class="bubbles">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="fish-wrap">
                <button type="button" v-for="fishName in fishArray" :key="fishName" :class="[fishName, fishClassName]" @click="_play(fishName)">
                    <img :src="_getUrl(fishName + '.png')" alt="">
                </button>
            </div>
            <div v-if="layer" class="game-layer">
                <div class="content">
                    <div class="front">
                        <figure>
                            <img :src="imgSrc" alt="">
                        </figure>
                        <div class="btn-wrap">
                            <button type="button" @click="_resultEvent(true)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                </svg>
                            </button>
                            <button type="button" @click="_resultEvent(false)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="back">
                        <div class="result-content">
                            <div class="result-answer" v-if="answer">
                                <div class="result-answer-box">
                                    <figure>
                                        <img :src="fishSrc" alt="">
                                    </figure>
                                    <strong>정답!!</strong>
                                    <button v-if="!end" type="button" class="btn-result" @click="layer = false">OK</button>
                                    <button v-else-if="end" type="button" class="btn-result" @click="_reset">다시하기</button>
                                </div>
                            </div>
                            <div class="result-not-answer" v-if="!answer">
                                <img src="../../assets/images/talk/game/shark.gif" alt="" >
                                <button type="button" class="btn-result" @click="layer = false">OK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="game-result">
                <div class="result-box">
                    <p v-if="answerArray[0] !== undefined">
                        <img :src="answerArray[0]" alt="">
                    </p>
                    <p v-else>?</p>
                </div>
                <div class="result-box">
                    <p v-if="answerArray[1] !== undefined">
                        <img :src="answerArray[1]" alt="">
                    </p>
                    <p v-else>?</p>
                </div>
                <div class="result-box">
                    <p v-if="answerArray[2] !== undefined">
                        <img :src="answerArray[2]" alt="">
                    </p>
                    <p v-else>?</p>
                </div>
                <div class="result-box">
                    <p v-if="answerArray[3] !== undefined">
                        <img :src="answerArray[3]" alt="">
                    </p>
                    <p v-else>?</p>
                </div>
                <div class="result-box">
                    <p v-if="answerArray[4] !== undefined">
                        <img :src="answerArray[4]" alt="">
                    </p>
                    <p v-else>?</p>
                </div>
                <div class="result-box">
                    <p v-if="answerArray[5] !== undefined">
                        <img :src="answerArray[5]" alt="">
                    </p>
                    <p v-else>?</p>
                </div>
            </div>
        </div>
    </div>
    <div class="talk-text-box">
        <p class="talk-result">
            '{{ selectData.title }}' 그림을 찾아주세요
        </p>
    </div>
</template>

<script>

export default {
    name: 'Game',
    props: {
        selectData: Array,
        gameLangthData: Array,
        currentIndex: Number
    },
    components: {
    },
    data() {
        return {
            fishArray: ['fish1', 'fish2', 'fish3', 'fish4', 'fish5', 'fish6'],
            fishClassName: 'fish',
            pbt: [30, 70],
            layer: false,
            imgSrc: '',
            fishSrc: '',
            answer: null,
            answerArray: [],
            fishEl: null,
            end: false
        }
    },
    mounted() {
        console.log('mounted : ', this.selectData);
        console.log('mounted : ', this.gameLangthData);
        //this._createGameSet();
    },
    updated() {
        console.log('up : ', this.currentIndex);
        //this._createGameSet();
    },
    methods: {
        _getUrl(_fileName) {
            return `${require(`../../assets/images/talk/${_fileName}`)}`;
        },
        _getImgUrl(_fileName) {
            return `${require(`../../assets/images/talk/game/sub1/${_fileName}`)}`;
        },
        _reset() {
            this.layer = false;
            this.end = false;
            this.answerArray = [];
        },
        _play(_fishName) {
            if (this.layer) return;

            const _randomNumber = Math.floor((Math.random() * 99) + 1);
            let _res = '';

            console.log(this.currentIndex);
            
            for (let i = 0; i < this.pbt.length; i++) {
                if(this.pbt[i] >= _randomNumber){
                    _res = this.currentIndex;
                    //return _res;
                } else if (this.pbt[this.pbt.length - 1] < _randomNumber) {
                    _res = 'not';
                    //return _res;
                }
            }

            console.log('_res : ', _res);

            if (_res !== 'not') {
                const _selectLength = this.gameLangthData[_res - 1];
                const _random = Math.floor((Math.random() * _selectLength) + 1);
                
                console.log('_selectLength : ', _random);
                this.answer = true;
                this.imgSrc = this._getImgUrl(`${_res}-${_random}.jpg`);
            } else {
                let _firstRandom = 0;
                let _lastRandom = 0;

                for (let _i = 0; _i < 2; _i++) {
                    _firstRandom = Math.floor((Math.random() * this.gameLangthData.length) + 1);
                    if (_firstRandom === this.currentIndex) {
                        _i--;
                    } else {
                        continue;
                    }
                }

                _lastRandom = Math.floor((Math.random() * this.gameLangthData[_firstRandom - 1]) + 1);

                this.answer = false;
                this.imgSrc = this._getImgUrl(`${_firstRandom}-${_lastRandom}.jpg`);
            }
            
            this.fishEl = document.getElementsByClassName(_fishName)[0];
            this.layer = true;
        },
        _resultEvent(_answer) {
            document.getElementsByClassName('game-layer')[0].classList.add('result');

            if (this.answer === _answer) {
                if (this.answer) {
                    // fish animation
                    this.fishSrc = this.fishEl.getElementsByTagName('img')[0].getAttribute('src');
                    this.fishEl.classList.add('not_fish');
                    setTimeout(() => {
                        this.fishEl.classList.remove('not_fish')
                    }, 1000);
                    
                    if (this.answerArray.length < 6) this.answerArray.push(this.fishSrc);
                    if (this.answerArray.length >= 6) {
                        this.end = true;
                    }
                    
                } else {
                    this.layer = false;
                }
            } else {
                this.answer = false;
                this.fishEl.classList.add('not_fish');
                setTimeout(() => {
                    this.fishEl.classList.remove('not_fish')
                }, 1000);
            }
        }
    }
}
</script>

<style>
    .game-wrap {
        overflow: hidden;
        position: relative;
        width: 950px;
        height: 600px;
        margin: 20px;
        background-image: linear-gradient(0deg, #022244, #58c8da);
        border-radius: 20px;
    }

    .fish-wrap button {
        position: absolute;
    }

    .fish-wrap button img {
        width: 100%;
    }

    .game-layer {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 500px;
        height: 450px;
        border-radius: 20px;
        perspective: 500px;
    }

    .game-layer .content {
        position: absolute;
        width: 100%;
        height: 100%;
        box-shadow: 0 0 15px rgba(0,0,0,0.1);
        transition: transform 1s;
        transform-style: preserve-3d;
    }

    .game-layer.result .content {
        transform: rotateY( 180deg ) ;
        transition: transform 0.5s;
    }

    .game-layer .front,
    .game-layer .back {
        position: absolute;
        height: 100%;
        width: 100%;
        background: white;
        color: #03446A;
        text-align: center;
        border-radius: 5px;
        backface-visibility: hidden;
    }

    .game-layer .front figure {
        width: 320px;
        margin: 30px auto 10px;
    }

    .game-layer .front figure img {
        width: 100%;
    }

    .game-layer .back {
        background: #03446A;
        color: white;
        transform: rotateY( 180deg );
    }

    .game-layer .back .result-content {
        position: relative;
        height: 100%;
    }

    .game-layer .back .result-answer {
        position: relative;
        width: 100%;
        height: 450px;
    }

    .game-layer .back .result-answer .result-answer-box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .game-layer .back .result-answer img {
        width: 200px;
    }

    .game-layer .back .result-not-answer {
        width: 300px;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .game-layer .back .result-not-answer img {
        width: 100%;
    }

    .game-layer .back .result-content .btn-result {
        display: block;
        padding: 5px 30px;
        margin: 10px auto 0;
        border-radius: 20px;
        background-color: #fff;
    }
    
    .game-result {
        position: absolute;
        bottom: 10px;
        display: flex;
        justify-content: center;
        gap: 10px;
        width: 100%;
    }

    .game-result .result-box {
        width: 50px;
        height: 50px;
        background-color: #fff;
        border-radius: 20px;
        border: 1px solid #022244;
        box-shadow: 1px 1px 4px 1px #022244;
        text-align: center;
        line-height: 50px;
    }

    .game-result .result-box p {
        margin-bottom: 0;
    }

    .game-result .result-box p img {
        width: 100%;
    }

    .ocean {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .ocean::after,
    .ocean::before {
        background-color: white;
        width: 120%;
        height: 120px;
        position: absolute;
        content: "";
        top: -80px;
        left: -10%;
        border-radius: 100%;
        animation: waves 10s ease infinite;
        opacity: 0.2;
    }

    .ocean::before {
        top: -60px;
        animation-delay: 5s;
        opacity: 0.1;
        left: -5%;
    }

    @keyframes waves {
        0%, 100% {
            transform: rotate(-2deg);
        }
        50% {
            transform: rotate(2deg);
        }
    }
    .bubbles {
        width: 100%;
        height: 100vh;
        animation: bubbles 10s linear infinite;
    }

    @keyframes bubbles {
        0%, 100% {
            transform: rotate(-5deg);
        }
        50% {
            transform: rotate(5deg);
        }
    }
    .bubbles span {
        width: 50px;
        height: 50px;
        border-radius: 100%;
        position: absolute;
        background-color: white;
        bottom: -10%;
        animation: bubble 10s ease-in-out infinite;
    }

    @keyframes bubble {
        0% {
            bottom: -10%;
            opacity: 0;
        }
        100% {
            bottom: 100%;
        }
    }
    .bubbles span:nth-child(1) {
        width: 50px;
        height: 50px;
        opacity: 0.5;
        left: 10%;
        animation-delay: 3s;
        animation-duration: 10s;
        opacity: 0.2;
    }

    .bubbles span:nth-child(2) {
        width: 30px;
        height: 30px;
        opacity: 0.5;
        left: 40%;
        animation-delay: 1s;
        animation-duration: 5s;
        opacity: 0.1;
    }

    .bubbles span:nth-child(3) {
        width: 10px;
        height: 10px;
        opacity: 0.5;
        left: 30%;
        animation-delay: 5s;
        animation-duration: 20s;
        opacity: 0.3;
    }

    .bubbles span:nth-child(4) {
        width: 35px;
        height: 35px;
        opacity: 0.5;
        left: 40%;
        animation-delay: 8s;
        animation-duration: 8s;
        opacity: 0.2;
    }

    .bubbles span:nth-child(5) {
        width: 45px;
        height: 45px;
        opacity: 0.5;
        left: 60%;
        animation-delay: 10s;
        animation-duration: 15s;
        opacity: 0.1;
    }

    .bubbles span:nth-child(6) {
        width: 40px;
        height: 40px;
        opacity: 0.5;
        left: 80%;
        animation-delay: 3s;
        animation-duration: 30s;
        opacity: 0.4;
    }

    .bubbles span:nth-child(7) {
        width: 15px;
        height: 15px;
        opacity: 0.5;
        left: 90%;
        animation-duration: 25s;
        opacity: 0.3;
    }

    .bubbles span:nth-child(8) {
        width: 20px;
        height: 20px;
        opacity: 0.5;
        left: 50%;
        animation-duration: 10s;
        opacity: 0.2;
    }

    .fish {
        width: 150px;
        height: 150px;
        content: "";
        position: absolute;
        top: 50%;
        left: -15%;
        transition: transform 1s;
    }

    .fish:hover {
        transform: scale(1.2);
    }

    .fish1 {
        animation: fish1 25s ease-in infinite;
    }

    .fish2 {
        top: 15%;
        animation: fish2 35s ease-in infinite;
    }

    .fish3 {
        top: 70%;
        animation: fish3 25.5s ease-in infinite;
        animation-delay: 1s;
    }

    .fish4 {
        top: 35%;
        animation: fish4 32.5s ease-in infinite;
    }

    .fish5 {
        top: 45%;
        animation: fish5 40s ease-in infinite;
        animation-delay: 1s;
    }

    .fish6 {
        top: 25%;
        animation: fish5 30s ease-in infinite;
        animation-delay: 4s;
    }

    @keyframes fish1 {
        0% {
            left: -15%;
            top: 50%;
        }
        25% {
            top: 47%
        }
        50% {
            top: 55%;
        }
        75% {
            top: 48%
        }
        100% {
            left: 100%;
            top: 50%;
        }
    }

    @keyframes fish2 {
        0% {
            left: -15%;
            top: 15%;
        }
        25% {
            top: 25%
        }
        50% {
            top: 15%;
        }
        75% {
            top: 25%
        }
        100% {
            left: 100%;
            top: 15%;
        }
    }

    @keyframes fish3 {
        0% {
            left: 100%;
            top: 70%;
        }
        25% {
            top: 60%
        }
        50% {
            top: 70%;
        }
        75% {
            top: 60%
        }
        100% {
            left: -20%;
            top: 70%;
        }
    }

    @keyframes fish4 {
        0% {
            left: 100%;
            top: 35%;
        }
        25% {
            top: 45%
        }
        50% {
            top: 35%;
        }
        75% {
            top: 45%
        }
        100% {
            left: -20%;
            top: 35%;
        }
    }

    @keyframes fish5 {
        0% {
            left: 100%;
            top: 45%;
        }
        25% {
            top: 35%
        }
        50% {
            top: 45%;
        }
        75% {
            top: 35%
        }
        100% {
            left: -20%;
            top: 45%;
        }
    }

    @keyframes fish6 {
        0% {
            left: 100%;
            top: 25%;
        }
        25% {
            top: 15%
        }
        50% {
            top: 25%;
        }
        75% {
            top: 15%
        }
        100% {
            left: -20%;
            top: 25%;
        }
    }

    /* fish tail */
    .fish::after, .fish::before {
        width: 50px;
        height: 50px;
        border-radius: 10px;
        background-color: inherit;
        content: "";
        position: absolute;
        top: 30%;
        right: -20px;
        transform: rotate(-20deg);
        z-index: -1;
        animation: tail 2s ease infinite;
    }

    .fish::before {
        top: 42%;
        transform: rotate(20deg);
    }

    .fish.not_fish {
        animation: none;
    }
</style>