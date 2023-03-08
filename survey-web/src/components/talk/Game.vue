<template>
    <div class="talk-box">
        <div class="game-wrap">
            <div class="shark-wrap">
                <img src="../../assets/images/talk/common/shark.png" alt="">
            </div>
            <audio controls autoplay loop>
                <source src="../../assets/audio/talk/aquatic.wav" type="audio/wav">
            </audio>
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
                    <img :src="_getCommonUrl(fishName + '.png')" alt="">
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
                                O
                            </button>
                            <button type="button" @click="_resultEvent(false)">
                                X
                            </button>
                        </div>
                    </div>
                    <div class="back">
                        <div class="result-content">
                            <div class="result-answer" v-if="answer">
                                <div class="result-answer-box">
                                    <figure>
                                        <img src="../../assets/images/talk/common/success.png" alt="">
                                    </figure>
                                    <strong class="success_text">
                                        <img src="../../assets/images/talk/common/success_text.png" alt="">
                                    </strong>
                                    <button v-if="!end" type="button" class="btn-result" @click="layer = false">OK</button>
                                    <button v-else-if="end" type="button" class="btn-result" @click="_reset">다시하기</button>
                                </div>
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
        currentIndex: Number,
        imageUrl: String
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
        // console.log('mounted : ', this.selectData);
        // console.log('mounted : ', this.gameLangthData);
        //this._createGameSet();
    },
    updated() {
        // console.log('up : ', this.currentIndex);
        //this._createGameSet();
    },
    methods: {
        _getCommonUrl(_fileName) {
            return `${require(`../../assets/images/talk/common/${_fileName}`)}`;
        },
        _getUrl(_fileName) {
            return `${require(`../../assets/images/talk/${this.imageUrl}/game/${_fileName}`)}`;
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
            
            for (let i = 0; i < this.pbt.length; i++) {
                if(this.pbt[i] >= _randomNumber){
                    _res = this.currentIndex;
                    continue;
                    //return _res;
                } else if (this.pbt[this.pbt.length - 1] < _randomNumber) {
                    _res = 'not';
                    continue;
                    //return _res;
                }
            }
            
            if (_res !== 'not') {
                const _selectLength = this.gameLangthData[_res - 1];
                const _random = Math.floor((Math.random() * _selectLength) + 1);
                
                this.answer = true;
                this.imgSrc = this._getUrl(`${_res}-${_random}.png`);
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
                this.imgSrc = this._getUrl(`${_firstRandom}-${_lastRandom}.png`);
            }
            
            this.fishEl = document.getElementsByClassName(_fishName)[0];
            this.layer = true;
        },
        _resultEvent(_answer) {
            //document.getElementsByClassName('game-layer')[0].classList.add('result');
            
            if (this.answer === _answer) {
                if (this.answer) {
                    // fish animation
                    document.getElementsByClassName('game-layer')[0].classList.add('result');
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
                this.layer = false;
                this.answer = false;
                const _fish = document.getElementsByClassName('fish');
                const _sharkWrap = document.getElementsByClassName('shark-wrap')[0];
                _sharkWrap.classList.add('show');

                [..._fish].forEach((_el) => {
                    _el.classList.add('run-fish');
                })

                setTimeout(() => {
                    [..._fish].forEach((_el) => {
                        _el.classList.remove('run-fish');
                        _sharkWrap.classList.remove('show');
                    });
                }, 2000);

                /*
                this.fishEl.classList.add('not_fish');
                setTimeout(() => {
                    this.fishEl.classList.remove('not_fish')
                }, 1000);
                */
            }
        }
    }
}
</script>

<style>
    
</style>