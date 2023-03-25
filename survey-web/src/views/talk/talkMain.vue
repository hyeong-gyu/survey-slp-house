<template>
    <div class="main-talk">
        <div class="talk-menu-wrap">
            <ul class="menu-list-wrap">
                <li class="menu-list">
                    <router-link to="/talk/sub1" class="menu-link green" @mouseover.prevent="_hover" @mouseout.prevent="_hoverOut">
                        <figure>
                            <img src="../../assets/images/talk/sub1.png" alt="">
                        </figure>
                        <em>오늘은 <br>내가 요리사</em>
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
                                        없다
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/talk/sub1?list=7">
                                        넣다
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </router-link>
                </li>
                <li class="menu-list">
                    <router-link to="/talk/sub2" class="menu-link red" @mouseover.prevent="_hover" @mouseout.prevent="_hoverOut">
                        <figure>
                            <img src="../../assets/images/talk/sub5.png" alt="">
                        </figure>
                        <em>심부름</em>
                        <div class="sub-menu">
                            <ul>
                                <li>
                                    <router-link to="/talk/sub2?list=1">
                                        동네
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/talk/sub2?list=2">
                                        가게
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/talk/sub2?list=3">
                                        심부름
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/talk/sub2?list=4">
                                        지갑
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/talk/sub2?list=5">
                                        시키다
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/talk/sub2?list=6">
                                        가다
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/talk/sub2?list=7">
                                        찾다
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/talk/sub2?list=8">
                                        다가오다
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/talk/sub2?list=9">
                                        생각하다
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </router-link>
                </li>
                <li class="menu-list">
                    <router-link to="/talk/sub3" class="menu-link blue" @mouseover.prevent="_hover" @mouseout.prevent="_hoverOut">
                        <figure>
                            <img src="../../assets/images/talk/sub4.png" alt="">
                        </figure>
                        <em>벌을 받았어요</em>
                        <div class="sub-menu">
                            <ul>
                                <li>
                                    <router-link to="/talk/sub3?list=1">
                                        수업
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/talk/sub3?list=2">
                                        공책
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/talk/sub3?list=3">
                                        벌
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/talk/sub3?list=4">
                                        재미있다
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/talk/sub3?list=5">
                                        걸다
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/talk/sub3?list=6">
                                        받다
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/talk/sub3?list=7">
                                        듣다
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </router-link>
                </li>
                <li class="menu-list">
                    <router-link to="/talk/sub4" class="menu-link red" @mouseover.prevent="_hover" @mouseout.prevent="_hoverOut">
                        <figure>
                            <img src="../../assets/images/talk/sub6.png" alt="">
                        </figure>
                        <em>어린이날</em>
                        <div class="sub-menu">
                            <ul>
                                <li>
                                    <router-link to="/talk/sub4?list=1">
                                        어린이날
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/talk/sub4?list=2">
                                        공원
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/talk/sub4?list=3">
                                        대회
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/talk/sub4?list=4">
                                        막히다
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/talk/sub4?list=5">
                                        오르다
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/talk/sub4?list=6">
                                        타다
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </router-link>
                </li>
                <li class="menu-list">
                    <router-link to="/talk/sub5" class="menu-link orange" @mouseover.prevent="_hover" @mouseout.prevent="_hoverOut">
                        <figure>
                            <img src="../../assets/images/talk/sub3.png" alt="">
                        </figure>
                        <em>무서운 꿈</em>
                        <div class="sub-menu">
                            <ul>
                                <li>
                                    <router-link to="/talk/sub5?list=1">
                                        소풍
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/talk/sub5?list=2">
                                        꿈
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/talk/sub5?list=3">
                                        꾸다
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/talk/sub5?list=4">
                                        무섭다
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </router-link>
                </li>
                <li class="menu-list">
                    <router-link to="/talk/sub6" class="menu-link green" @mouseover.prevent="_hover" @mouseout.prevent="_hoverOut">
                        <figure>
                            <img src="../../assets/images/talk/sub2.png" alt="">
                        </figure>
                        <em>노력하는 <br>두 형제</em>
                        <div class="sub-menu">
                            <ul>
                                <li>
                                    <router-link to="/talk/sub6?list=1">
                                        운동
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/talk/sub6?list=2">
                                        뚱뚱하다
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/talk/sub6?list=3">
                                        마르다
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/talk/sub6?list=4">
                                        줄이다
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/talk/sub6?list=5">
                                        되다
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { router } from '../../router';

export default {
    name: "talkMain",
    mounted() {
        if (this.$cookie.getCookie('talk-code') !== 'code-set-2023-slp') router.push('/');
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

<style>
    @import url(../../talk.css);
</style>