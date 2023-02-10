<template>
    <div class="talk-box">
        <div class="sent-wrap">
            <div class="sent-card-wrap col2">
                <!-- <div class="sent-card">
                    <img src="../../assets/images/talk/wakeup1.jpg" alt="Avatar" style="width:100%">
                </div>
                <div class="sent-card">
                    <img src="../../assets/images/talk/wakeup1.jpg" alt="Avatar" style="width:100%">
                </div> -->
                <!-- <div class="sent-card">
                    <img src="../../assets/images/talk/wakeup.jpg" alt="Avatar" style="width:100%">
                </div> -->
                <!-- <div class="sent-card">
                    <img src="../../assets/images/talk/wakeup.jpg" alt="Avatar" style="width:100%">
                </div> -->
                <div class="sent-card" v-for="imgs in selectImgData" :key="imgs">
                    <img :src="_getUrl(imgs)" style="width:100%" />
                </div>
            </div>
            <div class="sent-card-control">
                <button type="button" class="on" @click="_colsClick(2)">2장</button>
                <button type="button" @click="_colsClick(3)">3장</button>
                <button type="button" @click="_colsClick(4)">4장</button>
                <!-- <button type="button">reset</button> -->
            </div>
        </div>
    </div>
    <div class="talk-text-box">
        <p class="talk-result">
            그림을 보고 이야기를 만들어 주세요.
        </p>
    </div>
</template>

<script>
export default {
    name: 'Sentence',
    props: {
        currentIndex: Number
    },
    components: {
    },
    data() {
        return {
            updatedCheck: false,
            imgData: [
                [
                    'wakeup1.jpg',
                    'wakeup2.jpg',
                    'wakeup3.jpg',
                    'wakeup4.jpg',
                    'wakeup5.jpg',
                ],
                [
                    'eat1.jpg',
                    'eat2.jpg',
                    'eat3.jpg',
                    'eat4.jpg',
                    'eat5.jpg',
                    'eat6.jpg',
                    'eat7.jpg',
                    'eat8.jpg',
                ],
                [
                    'rot1.jpg',
                    'rot2.jpg',
                    'rot3.jpg',
                ],
                [
                    'make1.jpg',
                    'make2.jpg',
                    'make3.jpg',
                    'make4.jpg',
                    'make5.jpg',
                    'make6.jpg',
                    'make7.jpg',
                    'make8.jpg',
                    'make9.jpg',
                ],
                [
                    'call1.jpg',
                    'call2.jpg',
                    'call3.jpg',
                    'call4.jpg',
                    'call5.jpg',
                    'call6.jpg',
                ],
                [
                    'not1.jpg',
                    'not2.jpg',
                    'not3.jpg',
                ],
                [
                    'put1.jpg',
                    'put2.jpg',
                    'put3.jpg',
                    'put4.jpg',
                    'put5.jpg',
                    'put6.jpg',
                ]
            ],
            cols: 2,
            selectImgData: []
        }
    },
    mounted() {
        this._random();
        console.log('mounted');
    },
    methods: {
        _getUrl(_fileName) {
            return `${require(`@/assets/images/talk/${_fileName}`)}`;
        },
        _selectIndex(totalIndex, selectingNumber) {
            let randomIndexArray = []
            for (let i = 0; i < selectingNumber; i++) {
                let randomNum = Math.floor(Math.random() * totalIndex);
                if (randomIndexArray.indexOf(randomNum) === -1 && randomNum !== (this.currentIndex -1)) {
                    randomIndexArray.push(randomNum);
                } else { //if the randomNum is already in the array retry
                    i--;
                }
            }
            return randomIndexArray;
        },
        _random() {
            //reset
            this.selectImgData = [];

            let _randomNumber = [];
            let _choiceData = this.imgData[this.currentIndex -1];
            for (let _i = 0; _i < this.imgData.length; _i++) {
                if (_i !== this.currentIndex -1) _randomNumber.push(_i);
            }

            if (this.cols === 2) {
                let _randomData = this.imgData[_randomNumber[Math.floor(Math.random() * _randomNumber.length)]];

                _choiceData = _choiceData[Math.floor(Math.random() * _choiceData.length)];
                _randomData = _randomData[Math.floor(Math.random() * _randomData.length)];
                
                this.selectImgData.push(_randomData);
                this.selectImgData.push(_choiceData);
            } else {
                let _this = this;
                let _randomIndexArray = this._selectIndex(_randomNumber.length, this.cols - 1);
                let _ramdomDataArray = [];
                let _randomData = [];

                _randomIndexArray.forEach((_n) => {
                    _ramdomDataArray.push(_this.imgData[_n]);
                });

                _ramdomDataArray.forEach((_imgArr) => {
                    _randomData.push(_imgArr[Math.floor(Math.random() * _imgArr.length)]);
                });

                _randomData.push(_choiceData[Math.floor(Math.random() * _choiceData.length)]);
                this.selectImgData = _randomData;
            }
        },
        _colsClick(_n) {
            let _cardWrap = document.getElementsByClassName('sent-card-wrap')[0];
            _cardWrap.style.opacity = 0;

            setTimeout(() => {
                _cardWrap.classList.remove('col2');
                _cardWrap.classList.remove('col3');
                _cardWrap.classList.remove('col4');

                _cardWrap.classList.add(`col${_n}`);
                this.cols = _n;
                this._random();
            }, 500);

            setTimeout(() => {
                _cardWrap.style.opacity = 1;
            }, 600);
        }
    }
}
</script>

<style scoped>
    .sent-wrap {
        width: 100%;
        margin: 20px;
        background: #fff;
        box-sizing: border-box;
        border-radius: 25px;
    }

    .sent-card-wrap {
        transition: all 0.25s;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-content: flex-start;
        width: 480px;
        height: 540px;
        margin: 0 auto 10px;
    }

    .sent-card-wrap.col2 {
        width: auto;
        align-content: center;
    }

    .sent-card-wrap.col3 {
        width: auto;
        align-content: center;
    }

    .sent-card-wrap .sent-card {
        display: flex;
        flex-grow: 1;
        flex-basis: 45.8%;
        justify-content: center;
        flex-direction: column;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: 25px;
        margin: 10px;
    }

    .sent-card-wrap.col2 .sent-card {
        flex-basis: 25%;
    }

    .sent-card-wrap.col3 .sent-card {
        flex-basis: 30%;
    }

    .sent-card-wrap .sent-card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .sent-card-wrap .sent-card img {
        border-radius: 25px;
    }

    .sent-card-control {
        height: 60px;
    }
</style>