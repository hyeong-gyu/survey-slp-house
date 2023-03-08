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
                    <img :src="imgs" style="width:100%" />
                </div>
            </div>
            <div class="sent-card-control">
                <button type="button" class="on btn-re" @click="_colsClick(2)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bootstrap-reboot" viewBox="0 0 16 16">
                        <path d="M1.161 8a6.84 6.84 0 1 0 6.842-6.84.58.58 0 1 1 0-1.16 8 8 0 1 1-6.556 3.412l-.663-.577a.58.58 0 0 1 .227-.997l2.52-.69a.58.58 0 0 1 .728.633l-.332 2.592a.58.58 0 0 1-.956.364l-.643-.56A6.812 6.812 0 0 0 1.16 8z"/>
                        <path d="M6.641 11.671V8.843h1.57l1.498 2.828h1.314L9.377 8.665c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H5.5v7.352h1.141zm0-3.75V5.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.504 1.324-1.386 1.324h-1.6z"/>
                    </svg>
                </button>
                <!-- <button type="button">reset</button> -->
            </div>
        </div>
    </div>
    <div class="talk-text-box">
        <p class="talk-result">
            그림을 보고 &lt;{{ selectData.title }}&gt; 이야기를 만들어 주세요.
        </p>
    </div>
</template>

<script>
export default {
    name: 'Sentence',
    props: {
        currentIndex: Number,
        sentData: Object,
        selectData: Array,
        imageUrl: String
    },
    components: {
    },
    data() {
        return {
            updatedCheck: false,
            cols: 2,
            selectImgData: []
        }
    },
    mounted() {
        this._random(this.currentIndex);
    },
    methods: {
        _getUrl(_fileName) {
            return `${require(`@/assets/images/talk/${this.imageUrl}/sentence/${_fileName}`)}`;
        },
        _selectIndex(totalIndex, selectingNumber) {
            let randomIndexArray = []
            for (let i = 0; i < selectingNumber; i++) {
                let randomNum = Math.floor(Math.random() * totalIndex);
                if (randomIndexArray.indexOf(randomNum) === -1 && randomNum !== (this.currentIndex -1)) {
                    randomIndexArray.push(randomNum);
                } else {
                    i--;
                }
            }
            return randomIndexArray;
        },
        _random(_n = this.currentIndex) {
            //reset
            this.selectImgData = [];
            console.log('_n : ', _n);
            const _sentLength = this.sentData[_n];
            const _random = Math.floor(Math.random() * _sentLength) + 1;
            
            this.selectImgData.push(this._getUrl(`${_n}/${_random}/1.png`));
            this.selectImgData.push(this._getUrl(`${_n}/${_random}/2.png`));
        },
        _colsClick(_n) {
            let _cardWrap = document.getElementsByClassName('sent-card-wrap')[0];
            _cardWrap.style.opacity = 0;

            setTimeout(() => {
                _cardWrap.classList.remove('col2');
                _cardWrap.classList.add(`col2`);
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

    .btn-re {
        margin: 0 auto;
        display: block;
    }

    @media (max-width: 1440px) {
        .sent-wrap {
            margin: 1.3888vw;
            border-radius: 1.7361vw;
        }

        .sent-card-wrap {
            height: 37.5vw;
            margin: 0 auto 0.6944vw;
        }

        .sent-card-wrap .sent-card {
            margin: 0.6944vw;
            border-radius: 1.7361vw;
        }
        
        .sent-card-wrap .sent-card img {
            border-radius: 1.7361vw;
        }

        .sent-card-control {
            height: 4.1666vw;
        }

        .sent-card-control .btn-re {
            border-radius: 0.6944vw;
            padding: 0.3472vw 1.3888vw;
        }
    }
</style>