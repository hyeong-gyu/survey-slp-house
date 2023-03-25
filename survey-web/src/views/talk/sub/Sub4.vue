<template>
    <div class="sub-talk">
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
                            <button type="button" data-role="story" :class="{'on': page === 'story'}" @click="_pageMove">
                                <img src="../../../assets/images/sub_icon4.png" alt="">
                                <span>이야기</span>
                            </button>
                        </li>
                        <li>
                            <button type="button" data-role="vocabulary" :class="{'on': page === 'vocabulary'}" @click="_pageMove">
                                <img src="../../../assets/images/sub_icon1.svg" alt="">
                                <span>어휘톡</span>
                            </button>
                        </li>
                        <li>
                            <button type="button" data-role="game" :class="{'on': page === 'game'}" @click="_pageMove">
                                <img src="../../../assets/images/sub_icon3.svg" alt="">
                                <span>게임톡</span>
                            </button>
                        </li>
                        <li>
                            <button type="button" data-role="sentence" :class="{'on': page === 'sentence'}" @click="_pageMove">
                                <img src="../../../assets/images/sub_icon2.svg" alt="">
                                <span>문장톡</span>
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="sub-content">
                    <div class="sub-talk-inner">
                        <Story v-if="page === 'story'" :videoUrl="'sub4'" :videoTitle="'어린이날'" />
                        <Vocabulary v-if="page === 'vocabulary'" :selectData="selectData" ref="vocabSlide" :videoUrl="'sub4'" />
                        <Game v-if="page === 'game'" :selectData="selectData" :gameLangthData="[1,1,1,2,4,8]" :currentIndex="currentIndex" :imageUrl="'sub4'" ref="sentChildGame" />
                        <Sentence v-if="page === 'sentence'" :selectData="selectData" :sentData="sentData" :currentIndex="currentIndex" :imageUrl="'sub4'" ref="sentChild" />
                    </div>
                </div>
            </div>
            <div class="talk-b-side">
                <button type="button" class="btn-b-side-toggle" @click="_slideClick">
                    <img src="../../../assets/images/icon_direaction.svg" alt="" />
                </button>
                <ul>
                    <li>
                        <button type="button" data-role="1" @click="_listClick">어린이날</button>
                    </li>
                    <li>
                        <button type="button" data-role="2" @click="_listClick">공원</button>
                    </li>
                    <li>
                        <button type="button" data-role="3" @click="_listClick">대회</button>
                    </li>
                    <li>
                        <button type="button" data-role="4" @click="_listClick">막히다</button>
                    </li>
                    <li>
                        <button type="button" data-role="5" @click="_listClick">오르다</button>
                    </li>
                    <li>
                        <button type="button" data-role="6" @click="_listClick">타다</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { router } from '../../../router';
import Story from '@/components/talk/Story';
import Vocabulary from '@/components/talk/Vocabulary';
import Game from '@/components/talk/Game';
import Sentence from '@/components/talk/Sentence';

export default {
    name: 'Sub4',
    components: {
        Story,
        Vocabulary,
        Game,
        Sentence
    },
    mounted() {
        if (this.$cookie.getCookie('talk-code') !== 'code-set-2023-slp') router.push('/');
        const _talkWrap = document.getElementsByClassName('sub-talk')[0];
        const _inner = document.getElementsByClassName('sub-inner')[0];
        const _innerHeight = _inner.offsetHeight;

        // if (window.innerWidth < 1024) _talkWrap.style.height = `${_innerHeight + 63}px`;
    },
    data() {
        return {
            page: 'story',
            pageData: '1',
            currentIndex: 1,
            sentData: {
                1: 18,
                2: 15,
                3: 11,
                4: 11,
                5: 21,
                6: 52
            },
            talkData: {
                '1': {
                    title: '어린이날',
                    list: [
                        [
                            "어린이날"
                        ]
                    ],
                    video: [
                        'sub4-1'
                    ],
                    use: [
                        '오늘은 드디어 5월 5일 어린이날이에요.<br><br>나는 가족들과 어린이날에 놀이공원에 가요.'
                    ]
                },
                '2': {
                    title: '공원',
                    list: [
                        [
                            '공원',
                            '놀이터',
                            '파크'
                        ]
                    ],
                    video: [
                        'sub4-2'
                    ],
                    use: [
                        '나는 저녁이 되면 공원에서 자전거를 타요.<br><br>공원에서 돗자리를 펴고 도시락을 먹어요.'
                    ]
                },
                '3': {
                    title: '대회',
                    list: [
                        [
                            '대회',
                            '시합'
                        ]
                    ],
                    video: [
                        'sub4-3'
                    ],
                    use: [
                        '나는 달리기 대회에서 1등을 하고 싶어요.<br><br>오늘은 태권도 도장에서 겨루기 시합을 해요.'
                    ]
                },
                '4': {
                    title: '막히다',
                    list: [
                        [
                            '도로가 막히다',
                            '정체되다',
                            '교통체증'
                        ],
                        [
                            '숨이 막히다',
                            '질식',
                            '답답하다'
                        ]
                    ],
                    video: [
                        'sub4-4-1',
                        'sub4-4-2'
                    ],
                    use: [
                        '차 사고가 나서 도로가 막혀요.<br><br>어제 눈이 많이 와서 도로 정체가 심해요.',
                        '봄이는 잠수를 오래 하니까 숨이 막혀요.<br><br>아기가 장난감을 삼키면 질식할 수 있어요.'
                    ]
                },
                '5': {
                    title: '오르다',
                    list: [
                        [
                            '산에 오르다',
                            '등산',
                            '등반'
                        ],
                        [
                            '살이 오르다',
                            '살이 찌다'
                        ],
                        [
                            '가격이 오르다',
                            '인상되다',
                            '비싸지다'
                        ],
                        [
                            '약이 오르다',
                            '화가 나다'
                        ]
                    ],
                    video: [
                        'sub4-5-1',
                        'sub4-5-2',
                        'sub4-5-3',
                        'sub4-5-4'
                    ],
                    use: [
                        '산에 오르니 기분이 참 좋아요.<br><br>이번주 토요일에 가족들과 등산을 해요.',
                        '가을이는 얼굴에 살이 올라서 더 귀여워요.<br><br>밥을 많이 먹으면 살쪄요.',
                        '가을이가 좋아하는 과자의 가격이 올라요.<br><br>이번에 채소의 가격이 인상돼요.',
                        '봄이가 약을 올리는 친구한테 화를 내요.<br><br>동생이 자꾸 옆에서 놀리니까 약이 올라요.'
                    ]
                },
                '6': {
                    title: '타다',
                    list: [
                        [
                            '버스를 타다',
                            '승차하다',
                            '오르다'
                        ],
                        [
                            '속이 타다',
                            '초조하다'
                        ],
                        [
                            '목이 타다',
                            '갈증이 나다',
                            '목이 마르다'
                        ],
                        [
                            '장작이 타다',
                            '연소되다',
                            '그을리다'
                        ],
                        [
                            '보드를 타다'
                        ],
                        [
                            '살이 타다',
                            '살이 익다'
                        ],
                        [
                            '커피를 타다',
                            '만들다',
                            '내리다'
                        ],
                        [
                            '밥이 타다',
                            '눋다'
                        ]
                    ],
                    video: [
                        'sub4-6-1',
                        'sub4-6-2',
                        'sub4-6-3',
                        'sub4-6-4',
                        'sub4-6-5',
                        'sub4-6-6',
                        'sub4-6-7',
                        'sub4-6-8'
                    ],
                    use: [
                        '가을이가 마트에 가려고 버스를 타요.<br><br>버스에 승차해서 카드를 찍어요.',
                        '엄마는 동생이 밥을 안 먹어서 속이 타요.<br><br>겨울이는 초조하게 대회 결과를 기다려요.',
                        '가을이는 목이 타서 물을 마시고 싶어요.<br><br>운동을 열심히 하니까 갈증이 나요.',
                        '장작이 타면서 주변이 따뜻해져요.<br><br>산에 불이 나서 나무가 까맣게 그을렸어요.',
                        '봄이는 공원에서 보드를 타요.<br><br>나는 친구랑 스케이트를 타요.',
                        '여름이는 뜨거운 햇빛에 살이 타요.<br><br>여름에 살이 익으면 피부가 까매져요.',
                        '봄이는 커피를 잘 타요.<br><br>나는 졸릴 때 커피를 만들어서 먹어요.',
                        '가을이가 만든 밥이 다 타서 못 먹어요.<br><br>밥이 눋는 냄새가 구수해요.'
                    ]
                }
            },
            selectData: []
        }
    },
    created() {
        const _searchParams = new URLSearchParams(location.search);
        const _listNumber = _searchParams.get('list');
        
        if (_searchParams.get('list') === null) {
            this.selectData = this.talkData['1'];
        } else {
            this.pageData = _listNumber;
            this.selectData = this.talkData[_listNumber];
            this.currentIndex = _listNumber;
        }
    },
    methods: {
        _pageMove(e) {
            e.preventDefault();
            
            const _el = e.target.tagName !== 'button' ? e.target.closest('button') : e.target;
            const _page = _el.getAttribute('data-role');
            
            this.selectData = this.talkData[this.pageData];
            this.page =_page;
        },
        _slideClick() {
            let _bSlide = document.getElementsByClassName('talk-b-side')[0];
            if (_bSlide.className.indexOf('b-show') === -1) {
                _bSlide.classList.add('b-show');
            } else {
                _bSlide.classList.remove('b-show');
            }
        },
        _listClick(e) {
            const _el = e.target;
            const _index = Number(_el.getAttribute('data-role'));
            this.currentIndex = _index;
            this.pageData = _index;
            this.selectData = this.talkData[this.currentIndex];

            if (this.page === 'vocabulary') {
                this.$refs.vocabSlide._resetSlide();
            }

            if (this.page === 'game') {
                this.$refs.sentChildGame._reset();
            }

            if (this.page === 'sentence') {
                this.$refs.sentChild._random(_index);
            }

            document.getElementsByClassName('talk-b-side')[0].classList.remove('b-show');
        }
    },
}
</script>

<style>
    @import url(../../../talk.css);
</style>