<template>
    <div class="main-talk episode">
        <div class="talk-menu-wrap">
            <ul class="menu-list-wrap">
                <li class="menu-list">
                    <router-link to="/episode/sub?episode=1" class="menu-link green" @mouseover.prevent="_hover" @mouseout.prevent="_hoverOut">
                        <em>과자 뺏어 먹지 마!</em>
                    </router-link>
                </li>
                <li class="menu-list">
                    <router-link to="/episode/sub?episode=2" class="menu-link red" @mouseover.prevent="_hover" @mouseout.prevent="_hoverOut">
                        <em>놀리지 마!​</em>
                    </router-link>
                </li>
                <li class="menu-list">
                    <router-link to="/episode/sub?episode=3" class="menu-link blue" @mouseover.prevent="_hover" @mouseout.prevent="_hoverOut">
                        <em>나도 끼워 줘. </em>
                    </router-link>
                </li>
                <li class="menu-list">
                    <router-link to="/episode/sub?episode=4" class="menu-link red" @mouseover.prevent="_hover" @mouseout.prevent="_hoverOut">
                        <em>나 좀 빌려줘.</em>
                    </router-link>
                </li>
                <li class="menu-list">
                    <router-link to="/episode/sub?episode=5" class="menu-link orange" @mouseover.prevent="_hover" @mouseout.prevent="_hoverOut">
                        <em>더러운 보람이는 싫어.</em>
                    </router-link>
                </li>
                <li class="menu-list">
                    <router-link to="/episode/sub?episode=6" class="menu-link green" @mouseover.prevent="_hover" @mouseout.prevent="_hoverOut">
                        <em>똥 인형 싫은데~</em>
                    </router-link>
                </li>
                <li class="menu-list">
                    <router-link to="/episode/sub?episode=7" class="menu-link red" @mouseover.prevent="_hover" @mouseout.prevent="_hoverOut">
                        <em>게임 규칙 좀 지켜!</em>
                    </router-link>
                </li>
                <li class="menu-list">
                    <router-link to="/episode/sub?episode=8" class="menu-link blue" @mouseover.prevent="_hover" @mouseout.prevent="_hoverOut">
                        <em>너 마음대로 하면 안돼.​</em>
                    </router-link>
                </li>
                <li class="menu-list">
                    <router-link to="/episode/sub?episode=9" class="menu-link red" @mouseover.prevent="_hover" @mouseout.prevent="_hoverOut">
                        <em>반칙하지 마!​</em>
                    </router-link>
                </li>
                <li class="menu-list">
                    <router-link to="/episode/sub?episode=10" class="menu-link blue" @mouseover.prevent="_hover" @mouseout.prevent="_hoverOut">
                        <em>배가 아픈 재순이</em>
                    </router-link>
                </li>
                <li class="menu-list">
                    <router-link to="/episode/sub?episode=11" class="menu-link orange" @mouseover.prevent="_hover" @mouseout.prevent="_hoverOut">
                        <em>음식을 함께 만들어요.</em>
                    </router-link>
                </li>
                <li class="menu-list">
                    <router-link to="/episode/sub?episode=12" class="menu-link green" @mouseover.prevent="_hover" @mouseout.prevent="_hoverOut">
                        <em>뽀뽀하지 마!​</em>
                    </router-link>
                </li>
                <li class="menu-list">
                    <router-link to="/episode/sub?episode=13" class="menu-link blue" @mouseover.prevent="_hover" @mouseout.prevent="_hoverOut">
                        <em>재순이는 못 말려~​</em>
                    </router-link>
                </li>
                <li class="menu-list">
                    <router-link to="/episode/sub?episode=14" class="menu-link green" @mouseover.prevent="_hover" @mouseout.prevent="_hoverOut">
                        <em>그만 자랑해!</em>
                    </router-link>
                </li>
                <li class="menu-list">
                    <router-link to="/episode/sub?episode=15" class="menu-link blue" @mouseover.prevent="_hover" @mouseout.prevent="_hoverOut">
                        <em>건네주지 못한 편지​</em>
                    </router-link>
                </li>
                <li class="menu-list">
                    <router-link to="/episode/sub?episode=16" class="menu-link blue" @mouseover.prevent="_hover" @mouseout.prevent="_hoverOut">
                        <em>재희야! 축하해!</em>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { router } from '../../router';

export default {
    name: "episodeMain",
    beforeMount() {
        console.log(this.$cookie.getCookie('episode-token'));
        if (this.$cookie.getCookie('episode-token') === null) this.$router.push('/');
    },
    computed: {},
    methods: {
        _hover(e) {
            let _target = e.target;
            if (_target.className.indexOf('menu-link') === -1) _target = e.target.closest('.menu-link');
        },

        _hoverOut(e) {
            let _target = e.target;
            if (_target.className.indexOf('menu-link') === -1) _target = e.target.closest('.menu-link');
        }
    }
}
</script>

<style>
    @import url(../../talk.css);
</style>