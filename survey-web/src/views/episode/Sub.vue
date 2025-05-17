<template>
    <div class="sub-talk episode">
        <router-link to="/episode/main" class="btn-back-main">
            <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
            <svg fill="#000000" height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 26.676 26.676" xml:space="preserve"><g><path d="M26.105,21.891c-0.229,0-0.439-0.131-0.529-0.346l0,0c-0.066-0.156-1.716-3.857-7.885-4.59
                        c-1.285-0.156-2.824-0.236-4.693-0.25v4.613c0,0.213-0.115,0.406-0.304,0.508c-0.188,0.098-0.413,0.084-0.588-0.033L0.254,13.815
                        C0.094,13.708,0,13.528,0,13.339c0-0.191,0.094-0.365,0.254-0.477l11.857-7.979c0.175-0.121,0.398-0.129,0.588-0.029
                        c0.19,0.102,0.303,0.295,0.303,0.502v4.293c2.578,0.336,13.674,2.33,13.674,11.674c0,0.271-0.191,0.508-0.459,0.562
                        C26.18,21.891,26.141,21.891,26.105,21.891z"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g></svg>
        </router-link>
        <!-- {{$route.query.list}} -->
        <div class="sub-inner">
            <!-- <div class="sub-search-box">
                <label for="talk-search">
                    <img src="../../../assets/images/icon_search.svg" alt="" />
                </label>
                <input type="text" id="talk-search" />
            </div> -->
            <div class="sub-contents">
                <div class="sub-aside">
                    <ul class="sub-step">
                        <li>
                            <button type="button" data-role="0" @click="_pageMove(0)">
                                <img src="../../assets/images/talk_icon.svg" alt="">
                                <span>이야기</span>
                            </button>
                        </li>
                        <li>
                            <button type="button" data-role="1" @click="_pageMove(1)">
                                <img src="../../assets/images/tuning_icon.svg" alt="">
                                <span>의사소통<br />조율</span>
                            </button>
                        </li>
                        <li>
                            <button type="button" data-role="2" @click="_pageMove(2)">
                                <img src="../../assets/images/indirect_icon.svg" alt="">
                                <span>간접 표현</span>
                            </button>
                        </li>
                        <li>
                            <button type="button" data-role="3" @click="_pageMove(3)">
                                <img src="../../assets/images/ironic_icon.svg" alt="">
                                <span>반어/비유</span>
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="sub-content">
                    <div class="sub-talk-inner">
                        <div class="talk-box story-video-box">
                            <div class="sub-video-box on">
                                <carousel class="video-carousel" :items-to-show="1" ref="myCarousel" @slide-end="_slideEnd">
                                    <slide v-for="sub1 in selectData.sub1" :key="sub1">
                                        <div class="video">
                                            <vimeo-player ref="player" :video-id="sub1" :player-width="700" :player-height="450" @ready="true"/>
                                        </div>
                                    </slide>
                                    <template #addons>
                                        <navigation />
                                    </template>
                                </carousel>
                            </div>
                            <div class="sub-video-box">
                                <carousel class="video-carousel" :items-to-show="1" ref="myCarouse2" @slide-end="_slideEnd">
                                    <slide v-for="sub2 in selectData.sub2" :key="sub2">
                                        <div class="video">
                                            <vimeo-player ref="player" :video-id="sub2" :player-width="700" :player-height="450" @ready="true"/>
                                        </div>
                                    </slide>
                                    <template #addons>
                                        <navigation />
                                    </template>
                                </carousel>
                            </div>
                            <div class="sub-video-box">
                                <carousel class="video-carousel" :items-to-show="1" ref="myCarouse3" @slide-end="_slideEnd">
                                    <slide v-for="sub3 in selectData.sub3" :key="sub3">
                                        <div class="video">
                                            <vimeo-player ref="player" :video-id="sub3" :player-width="700" :player-height="450" @ready="true"/>
                                        </div>
                                    </slide>
                                    <template #addons>
                                        <navigation />
                                    </template>
                                </carousel>
                            </div>
                            <div class="sub-video-box">
                                <carousel class="video-carousel" :items-to-show="1" ref="myCarouse4" @slide-end="_slideEnd">
                                    <slide v-for="sub4 in selectData.sub4" :key="sub4">
                                        <div class="video">
                                            <vimeo-player ref="player" :video-id="sub4" :player-width="700" :player-height="450" @ready="true"/>
                                        </div>
                                    </slide>
                                    <template #addons>
                                        <navigation />
                                    </template>
                                </carousel>
                            </div>
                        </div>
                        <div class="talk-text-box">
                            <p class="talk-result">
                                {{ selectTitle }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import { vueVimeoPlayer } from 'vue-vimeo-player'

const myCarousel = ref(null);

export default {
    name: 'Sub',
    components: {
        Carousel,
        Slide,
        Navigation,
        vueVimeoPlayer
    },
    beforeMount() {
        console.log(this.$cookie.getCookie('episode-token'));
        if (this.$cookie.getCookie('episode-token') === null) this.$router.push('/');
    },
    data() {
        return {
            videoData: {
                episode1: {
                    sub1: ['926295363'],
                    sub2: ['926295324'],
                    sub3: ['926326043'],
                    sub4: [
                        '926295242',
                        '926295286'
                    ],
                    title: [
                        '1.과자뺏어먹지마(전체)',
                        '1.과자뺏어먹지마(의사소통조율)',
                        '1.과자뺏어먹지마(간접표현)',
                        '1.과자뺏어먹지마(반어,비유)'
                    ]
                },
                episode2: {
                    sub1: ['926310875'],
                    sub2: ['926310837'],
                    sub3: ['926310771'],
                    sub4: [
                        '926310784',
                        '926310812'
                    ],
                    title: [
                        '2.놀리지마(전체)',
                        '2.놀리지마(의사소통조율)',
                        '2.놀리지마(간접표현)',
                        '2.놀리지마(반어,비유)'
                    ]
                },
                episode3: {
                    sub1: ['926314936'],
                    sub2: ['926314904'],
                    sub3: ['926314746'],
                    sub4: [
                        '926314789',
                        '926314835',
                        '926314864'
                    ],
                    title: [
                        '3.나도끼워줘(전체)',
                        '3.나도끼워줘(의사소통조율)',
                        '3.나도끼워줘(간접표현)',
                        '3.나도끼워줘(비유,반어)'
                    ]
                },
                episode4: {
                    sub1: ['926319135'],
                    sub2: ['926319115'],
                    sub3: ['926319020'],
                    sub4: [
                        '926319058',
                        '926319090',
                    ],
                    title: [
                        '4.나좀빌려줘(전체)',
                        '4.나좀빌려줘(의사소통조율)',
                        '4.나좀빌려줘(간접표현)',
                        '4.나좀빌려줘(반어,비유)'
                    ]
                },
                episode5: {
                    sub1: ['926336111'],
                    sub2: ['926336079'],
                    sub3: ['926335991'],
                    sub4: [
                        '926336023',
                        '926336052',
                    ],
                    title: [
                        '5.더러운보람이는싫어(전체)',
                        '5.더러운보람이는싫어(의사소통조율)',
                        '5.더러운보람이는싫어(간접표현)',
                        '5.더러운보람이는싫어(비유,반어)'
                    ]
                },
                episode6: {
                    sub1: ['926345254'],
                    sub2: ['926338765'],
                    sub3: ['926338667'],
                    sub4: [
                        '926338697',
                        '926338734',
                    ],
                    title: [
                        '6.똥인형싫은데~(전체)',
                        '6.똥인형싫은데~(의사소통조율)',
                        '6.똥인형싫은데~(간접표현)',
                        '6.똥인형싫은데~(비유,반어)'
                    ]
                },
                episode7: {
                    sub1: ['926343640'],
                    sub2: ['926338967', '926338986'],
                    sub3: ['926338866'],
                    sub4: [
                        '926338889',
                        '926338926',
                    ],
                    title: [
                        '7.게임규칙좀지켜(전체)',
                        '7.게임규칙좀지켜(의사소통조율)',
                        '7.게임규칙좀지켜(간접표현)',
                        '7.게임규칙좀지켜(비유,반어)'
                    ]
                },
                episode8: {
                    sub1: ['926344303'],
                    sub2: ['926339181'],
                    sub3: ['926339059'],
                    sub4: [
                        '926339095',
                        '926339130',
                    ],
                    title: [
                        '8.너마음대로하면안돼(전체)',
                        '8.너마음대로하면안돼(의사소통조율)',
                        '8.너마음대로하면안돼(간접표현)',
                        '8.너마음대로하면안돼(비유,반어)'
                    ]
                },
                episode9: {
                    sub1: ['926342677'],
                    sub2: ['926339314'],
                    sub3: ['926339258'],
                    sub4: [
                        '926339288'
                    ],
                    title: [
                        '9.반칙하지마!(전체)',
                        '9.반칙하지마!(의사소통조율)',
                        '9.반칙하지마!(간접표현)',
                        '9.반칙하지마!(비유,반어)1,2'
                    ]
                },
                episode10: {
                    sub1: ['926341948'],
                    sub2: ['926339542'],
                    sub3: ['926339472'],
                    sub4: [
                        '926339508'
                    ],
                    title: [
                        '10.배가아픈재순이(전체)',
                        '10.배가아픈재순이(의사소통조율)',
                        '10.배가아픈재순이(간접표현)',
                        '10.배가아픈재순이(비유,반어)1,2'
                    ]
                },
                episode11: {
                    sub1: ['926341166'],
                    sub2: ['926339925'],
                    sub3: ['926339818'],
                    sub4: [
                        '926339849',
                        '926339887'
                    ],
                    title: [
                        '11.음식을 함께 만들어요(전체)',
                        '11.음식을 함께 만들어요(의사소통조율)',
                        '11.음식을 함께 만들어요(간접표현)',
                        '11.음식을 함께 만들어요(비유,반어)'
                    ]
                },
                episode12: {
                    sub1: ['926346409'],
                    sub2: ['926346390'],
                    sub3: ['926346434'],
                    sub4: [
                        '926346461',
                        '926346337',
                        '926346366'
                    ],
                    title: [
                        '12.뽀뽀하지마(전체)',
                        '12.뽀뽀하지마(의사소통조율)',
                        '12.뽀뽀하지마(간접표현)',
                        '12.뽀뽀하지마(비유,반어)'
                    ]
                },
                episode13: {
                    sub1: ['926347285'],
                    sub2: ['926347263'],
                    sub3: ['926347320'],
                    sub4: [
                        '926347357',
                        '926347388',
                    ],
                    title: [
                        '13.재순이는 못말려~(전체)',
                        '13.재순이는 못말려~(의사소통조율)',
                        '13.재순이는 못말려~(간접표현)',
                        '13.재순이는 못말려~(반어,비유)'
                    ]
                },
                episode14: {
                    sub1: ['926347980'],
                    sub2: ['926347939'],
                    sub3: ['926347795'],
                    sub4: [
                        '926347821',
                        '926347862',
                        '926347884',
                        '926347909',
                    ],
                    title: [
                        '14.그만자랑해(전체)',
                        '14.그만자랑해(의사소통조율)',
                        '14.그만자랑해(간접표현)',
                        '14.그만자랑해(비유,반어)'
                    ]
                },
                episode15: {
                    sub1: ['926348938'],
                    sub2: ['926348428'],
                    sub3: ['926348478'],
                    sub4: [
                        '926348357',
                        '926348398',
                    ],
                    title: [
                        '15.전해주지못한편지(전체)',
                        '15.전해주지못한편지(의사소통조율)',
                        '15.전해주지못한편지(간접표현)',
                        '15.전해주지못한편지(비유,반어)'
                    ]
                },
                episode16: {
                    sub1: ['926349554'],
                    sub2: ['926349526'],
                    sub3: ['926349580'],
                    sub4: [
                        '926349608',
                        '926349631',
                    ],
                    title: [
                        '16.재희야축하해(전체)',
                        '16.재희야축하해(의사소통조율)',
                        '16.재희야축하해(간접표현)',
                        '16.재희야축하해(비유,반어)'
                    ]
                }
            },
            selectData: null,
            selectTitle: null
        }
    },
    updated() {
        this.$refs.myCarousel.restartCarousel();
        this.$refs.myCarouse2.restartCarousel();
        this.$refs.myCarouse3.restartCarousel();
        this.$refs.myCarouse4.restartCarousel();
    },
    created() {
        console.log('this.selectData : ', this.selectData)
        const _searchParams = new URLSearchParams(location.search);
        const _listNumber = _searchParams.get('episode');

        console.log('_searchParams : ', _searchParams);
        console.log('_listNumber : ', typeof _listNumber);

        if (_searchParams) {
            switch (_listNumber) {
                case '1':
                    this.selectData = this.videoData.episode1;
                    this.selectTitle = this.videoData.episode1.title[0];
                    break;

                case '2':
                    this.selectData = this.videoData.episode2;
                    this.selectTitle = this.videoData.episode2.title[0];
                    break;

                case '3':
                    this.selectData = this.videoData.episode3;
                    this.selectTitle = this.videoData.episode3.title[0];
                    break;

                case '4':
                    this.selectData = this.videoData.episode4;
                    this.selectTitle = this.videoData.episode4.title[0];
                    break;

                case '5':
                    this.selectData = this.videoData.episode5;
                    this.selectTitle = this.videoData.episode5.title[0];
                    break;

                case '6':
                    this.selectData = this.videoData.episode6;
                    this.selectTitle = this.videoData.episode6.title[0];
                    break;

                case '7':
                    this.selectData = this.videoData.episode7;
                    this.selectTitle = this.videoData.episode7.title[0];
                    break;

                case '8':
                    this.selectData = this.videoData.episode8;
                    this.selectTitle = this.videoData.episode8.title[0];
                    break;

                case '9':
                    this.selectData = this.videoData.episode9;
                    this.selectTitle = this.videoData.episode9.title[0];
                    break;

                case '10':
                    this.selectData = this.videoData.episode10;
                    this.selectTitle = this.videoData.episode10.title[0];
                    break;

                case '11':
                    this.selectData = this.videoData.episode11;
                    this.selectTitle = this.videoData.episode11.title[0];
                    break;

                case '12':
                    this.selectData = this.videoData.episode12;
                    this.selectTitle = this.videoData.episode12.title[0];
                    break;

                case '13':
                    this.selectData = this.videoData.episode13;
                    this.selectTitle = this.videoData.episode13.title[0];
                    break;

                case '14':
                    this.selectData = this.videoData.episode14;
                    this.selectTitle = this.videoData.episode14.title[0];
                    break;

                case '15':
                    this.selectData = this.videoData.episode15;
                    this.selectTitle = this.videoData.episode15.title[0];
                    break;

                case '16':
                    this.selectData = this.videoData.episode16;
                    this.selectTitle = this.videoData.episode16.title[0];
                    break;

                default:
                    this.selectData = this.videoData.episode1;
                    break;
            }
        } else {
            this.selectData = this.videoData.episode1;
        }
    },
    methods: {
        _pageMove(idx) {
            [].forEach.call(this.$refs.player, function (_video) {
                _video.pause();
            });

            const _subVideoBox = document.querySelectorAll('.sub-video-box');
            _subVideoBox.forEach((_el, i) => {
                _el.classList.remove('on');
                if (Number(idx) === i) _el.classList.add('on');
            });
            this.selectTitle = this.selectData.title[idx];
        },
        _slideEnd() {
            [].forEach.call(this.$refs.player, function (_video) {
                _video.pause();
            });
        },
    },
}
</script>

<style>
    @import url(../../talk.css);
</style>