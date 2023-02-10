<template>
    <div class="main-talk">
        <div class="talk-menu-wrap">
            <ul class="menu-list-wrap">
                <li class="menu-list">
                    <router-link to="/talk/sub1" class="menu-link green" @mouseover.prevent="_hover" @mouseout.prevent="_hoverOut">
                        <figure>
                            <img src="../../assets/images/slphouse_main1.png" alt="">
                        </figure>
                        <em>메뉴 1</em>
                        <!-- <p>sub text</p> -->
                        <div class="sub-menu">
                            <ul>
                                <li>
                                    <router-link to="/talk/sub1?list=1">
                                        일어나다
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/talk/sub1?list=2">
                                        먹다
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/talk/sub1?list=3">
                                        썩다
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/talk/sub1?list=4">
                                        만들다
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/talk/sub1?list=5">
                                        부르다
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/talk/sub1?list=6">
                                        넣다
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/talk/sub1?list=7">
                                        없다
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </router-link>
                </li>
                <li class="menu-list">
                    <router-link to="/talk/menu2" class="menu-link red">
                        <figure>
                            <img src="../../assets/images/slphouse_main1.png" alt="">
                        </figure>
                        <em>메뉴 2</em>
                        <p>sub text</p>
                    </router-link>
                </li>
                <li class="menu-list">
                    <router-link to="/talk/menu3" class="menu-link orange">
                        <figure>
                            <img src="../../assets/images/slphouse_main1.png" alt="">
                        </figure>
                        <em>메뉴 3</em>
                        <p>sub text</p>
                    </router-link>
                </li>
                <li class="menu-list">
                    <router-link to="/talk/menu4" class="menu-link blue">
                        <figure>
                            <img src="../../assets/images/slphouse_main1.png" alt="">
                        </figure>
                        <em>메뉴 4</em>
                        <p>sub text</p>
                    </router-link>
                </li>
                <li class="menu-list">
                    <router-link to="/talk/menu5" class="menu-link green">
                        <figure>
                            <img src="../../assets/images/slphouse_main1.png" alt="">
                        </figure>
                        <em>메뉴 5</em>
                        <p>sub text</p>
                    </router-link>
                </li>
                <li class="menu-list">
                    <router-link to="/talk/menu6" class="menu-link red">
                        <figure>
                            <img src="../../assets/images/slphouse_main1.png" alt="">
                        </figure>
                        <em>메뉴 6</em>
                        <p>sub text</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "talkMain",
    beforeMount() {
    },
    computed: {},
    methods: {
        _hover(e) {
            let _target = e.target;
            if (_target.className.indexOf('menu-link') === -1) _target = e.target.closest('.menu-link');

            _target.getElementsByClassName('sub-menu')[0].classList.add('on');
        },

        _hoverOut(e) {
            let _target = e.target;
            if (_target.className.indexOf('menu-link') === -1) _target = e.target.closest('.menu-link');

            _target.getElementsByClassName('sub-menu')[0].classList.remove('on');
        }
    }
}
</script>

<style scoped>
    .main-talk {
        width: 100%;
        height: calc(100vh - 63px);
        background: url('../../assets/images/talk_bg.svg') no-repeat center;
        background-size: cover;
    }

    .main-talk ul li {
        list-style: none;
    }

    .main-talk .talk-menu-wrap {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .main-talk .talk-menu-wrap .menu-list-wrap {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        gap: 60px;
        flex: 1 1 30%;
        justify-content: center;
        padding: 0;
        margin: 0;
    }

    .main-talk .talk-menu-wrap .menu-list-wrap .menu-link {
        transition: 0.25s;
        display: block;
        width: 226px;
        height: 266px;
        border-radius: 50px;
        text-align: center;
        text-decoration: none;
        color: #fff;
    }

    .main-talk .talk-menu-wrap .menu-list-wrap .menu-link.green {
        background-color: #74BF81;
    }

    .main-talk .talk-menu-wrap .menu-list-wrap .menu-link.red {
        background-color: #EF8A87;
    }

    .main-talk .talk-menu-wrap .menu-list-wrap .menu-link.orange {
        background-color: #FA9E6D;
    }

    .main-talk .talk-menu-wrap .menu-list-wrap .menu-link.blue {
        background-color: #9FD7EB;
    }

    .main-talk .talk-menu-wrap .menu-list-wrap .menu-link:hover,
    .main-talk .talk-menu-wrap .menu-list-wrap .menu-link:focus {
        transform: translateY(-0.25em);
    }

    .main-talk .talk-menu-wrap .menu-list-wrap .menu-link.green:hover,
    .main-talk .talk-menu-wrap .menu-list-wrap .menu-link.green:focus {
        box-shadow: 0 0.5em 0.5em -0.4em #74BF81;
    }

    .main-talk .talk-menu-wrap .menu-list-wrap .menu-link.red:hover,
    .main-talk .talk-menu-wrap .menu-list-wrap .menu-link.red:focus {
        box-shadow: 0 0.5em 0.5em -0.4em #EF8A87;
    }

    .main-talk .talk-menu-wrap .menu-list-wrap .menu-link.orange:hover,
    .main-talk .talk-menu-wrap .menu-list-wrap .menu-link.orange:focus {
        box-shadow: 0 0.5em 0.5em -0.4em #FA9E6D;
    }

    .main-talk .talk-menu-wrap .menu-list-wrap .menu-link.blue:hover,
    .main-talk .talk-menu-wrap .menu-list-wrap .menu-link.blue:focus {
        box-shadow: 0 0.5em 0.5em -0.4em #9FD7EB;
    }

    .main-talk .talk-menu-wrap .menu-list-wrap .menu-link figure {
        padding-top: 40px;
        border-radius: 50%;
    }

    .main-talk .talk-menu-wrap .menu-list-wrap .menu-link figure img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    .main-talk .talk-menu-wrap .menu-list-wrap .menu-link em {
        font-size: 30px;
        font-style: normal;
    }

    .main-talk .talk-menu-wrap .menu-list-wrap .menu-link p {
        font-size: 18px;
    }

    .sub-menu {
        display: none;
        z-index: 10;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 150px;
        background-color: #fff;
        border-radius: 20px;
        box-shadow: 1px 2px 4px 1px #999;
    }

    .sub-menu.on {
        display: block;
    }

    .sub-menu ul {
        padding-left: 0;
        padding: 20px;
    }

    .sub-menu ul li {
        margin-top: 10px;
    }
    
    .sub-menu ul li:first-child {
        margin-top: 0;
    }

    .sub-menu ul li a {
        color: #000;
        text-decoration: none;
    }

    .sub-menu ul li a:hover {
        color: chocolate;
    }
</style>