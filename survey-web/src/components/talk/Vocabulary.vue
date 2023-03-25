<template>
    <div class="talk-box">
        <div class="slide-img-box">
            <carousel class="video-carousel" :items-to-show="1" ref="myCarousel" @slide-end="_slideEnd" :v-model="slideIndex">
                <slide v-for="videoList in selectData.video" :key="videoList">
                    <video controlsList="nodownload" controls preload oncontextmenu='return false'>
                        <source :src="_getUrl(`${videoList}.mp4`)" type="video/mp4">
                    </video>
                </slide>
                <template #addons>
                    <navigation />
                </template>
            </carousel>
        </div>
        <div class="navi-talk-list">
            <ul>
                <li v-for="listName in selectData.list[currentIndex]" :key="listName">
                    &lt;{{ listName }}&gt;
                </li>
            </ul>
            <button type="button" class="btn-use-sent" @click="_useSentClick">문장활용</button>
            <div class="use-sent-wrap">
                <div class="sent-content" v-html="selectData.use[currentIndex]"></div>
            </div>
        </div>
    </div>
    <div class="talk-text-box">
        <p class="talk-result">
            {{ selectData.title }}
        </p>
    </div>
</template>

<script>
import { ref } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
const myCarousel = ref(null);

export default {
    name: 'Vocabulary',
    props: {
        selectData: Array,
        videoUrl: String
    },
    components: {
        Carousel,
        Slide,
        Navigation
    },
    data() {
        return {
            currentIndex: 0,
        }
    },
    updated() {
        document.getElementsByClassName('talk-b-side')[0].classList.remove('b-show');
        this.$refs.myCarousel.restartCarousel();
    },
    methods: {
        _getUrl(_fileName) {
            return `${require(`@/assets/video/talk/${this.videoUrl}/${_fileName}`)}`;
        },
        _resetSlide() {
            this.$refs.myCarousel.slideTo(0);
            this.currentIndex = 0;
        },
        _slideEnd(data) {
            const _li = document.getElementsByClassName('video-carousel')[0].getElementsByTagName('li');
            const _afterLi = [..._li].filter((_el, _i) => { return _i === data.prevSlideIndex });
            
            if (_afterLi[0] !== null && _afterLi[0] !== undefined) {
                _afterLi[0].getElementsByTagName('video')[0].pause();
                this.currentIndex = data.currentSlideIndex;
            }
        },
        _slideClick() {
            let _bSlide = document.getElementsByClassName('talk-b-side')[0];
            if (_bSlide.className.indexOf('b-show') === -1) {
                _bSlide.classList.add('b-show');
            } else {
                _bSlide.classList.remove('b-show');
            }
        },
        _useSentClick(e) {
            const _btn = e.target;
            const _useSentWrap = document.getElementsByClassName('use-sent-wrap')[0];
            
            _btn.className.indexOf('use-show') > -1 ? _btn.classList.remove('use-show') : _btn.classList.add('use-show');
            _useSentWrap.className.indexOf('use-sent-show') > -1 ? _useSentWrap.classList.remove('use-sent-show') : _useSentWrap.classList.add('use-sent-show');
        },
    }
}
</script>

<style scoped>

</style>