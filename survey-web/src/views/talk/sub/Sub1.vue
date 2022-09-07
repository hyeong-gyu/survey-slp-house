<template>
    <div class="sub-talk">
        <div class="sub-inner">
            <div class="sub-search-box">
                <label>
                    <input type="text">
                </label>
            </div>
            <div class="sub-contents">
                <div class="sub-aside">
                    <ul class="sub-step">
                        <li>
                            <button type="button">
                                <img src="../../../assets/images/sub_icon1.svg" alt="">
                                <span>기본</span>
                            </button>
                        </li>
                        <li>
                            <button type="button">
                                <img src="../../../assets/images/sub_icon2.svg" alt="">
                                <span>활동</span>
                            </button>
                        </li>
                        <li>
                            <button type="button">
                                <img src="../../../assets/images/sub_icon3.svg" alt="">
                                <span>확인</span>
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="sub-content">
                    <div class="sub-talk-inner">
                        <div class="talk-box">

                        </div>
                        <div class="talk-text-box">
                            <p class="talk-result">일어나다</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sub1',
    beforeMount() {
        
    },
    computed: {
        
    },
    methods: {
        
    },
}
</script>

<style scoped>
    .sub-talk {
        width: 100%;
        height: calc(100vh - 63px);
        background: url('../../../assets/images/sub_bg.svg') no-repeat center;
        background-size: cover;
    }

    .sub-inner {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 1440px;
    }

    .sub-contents {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        flex-basis: 100%;
    }

    .sub-contents .sub-aside {
        display: flex;
        flex-basis: 15%;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    .sub-contents .sub-aside ul {
        gap: 50px;
        padding-left: 0;
        margin-bottom: 0;
    }

    .sub-contents .sub-aside ul li {
        margin-top: 50px;
        list-style: none;
    }

    .sub-contents .sub-aside ul li:first-child {
        margin-top: 0;
    }

    .sub-contents .sub-aside ul li button span {
        display: block;
    }

    .sub-contents .sub-content {
        flex-basis: 85%;
    }

    .sub-talk-inner {
        width: 990px;
        margin: 0 auto;
    }

    .talk-box {
        width: 990px;
        height: 640px;
        background-color: #BDD2DF;
        border-radius: 30px;
    }

    .talk-text-box {
        width: 990px;
        height: 90px;
        margin-top: 20px;
        background-color: #fff;
        border-radius: 20px;
    }

    .talk-text-box p {
        margin-bottom: 0;
        text-align: center;
        line-height: 90px;
        font-size: 28px;
    }
</style>