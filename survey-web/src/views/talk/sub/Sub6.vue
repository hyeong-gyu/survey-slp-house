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
                        <Story v-if="page === 'story'" :videoUrl="'sub6'" :videoTitle="'노력하는 두 형제'" />
                        <Vocabulary v-if="page === 'vocabulary'" :selectData="selectData" ref="vocabSlide" :videoUrl="'sub6'" />
                        <Game v-if="page === 'game'" :selectData="selectData" :gameLangthData="[1,1,3,3,3]" :currentIndex="currentIndex" :imageUrl="'sub6'" ref="sentChildGame" />
                        <Sentence v-if="page === 'sentence'" :selectData="selectData" :sentData="sentData" :currentIndex="currentIndex" :imageUrl="'sub6'" ref="sentChild" />
                    </div>
                </div>
            </div>
            <div class="talk-b-side">
                <button type="button" class="btn-b-side-toggle" @click="_slideClick">
                    <img src="../../../assets/images/icon_direaction.svg" alt="" />
                </button>
                <ul>
                    <li>
                        <button type="button" data-role="1" @click="_listClick">운동</button>
                    </li>
                    <li>
                        <button type="button" data-role="2" @click="_listClick">뚱뚱하다</button>
                    </li>
                    <li>
                        <button type="button" data-role="3" @click="_listClick">마르다</button>
                    </li>
                    <li>
                        <button type="button" data-role="4" @click="_listClick">줄이다</button>
                    </li>
                    <li>
                        <button type="button" data-role="5" @click="_listClick">되다</button>
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
    name: 'Sub6',
    components: {
        Story,
        Vocabulary,
        Game,
        Sentence
    },
    beforeMount() {
        if (this.$cookie.getCookie('talk-token') === null) router.push('/');
    },
    data() {
        return {
            page: 'story',
            pageData: '1',
            currentIndex: 1,
            sentData: {
                1: 6,
                2: 2,
                3: 11,
                4: 7,
                5: 12
            },
            talkData: {
                '1': {
                    title: '운동',
                    list: [
                        [
                            '운동하다',
                            '체육',
                            '스포츠'
                        ]
                    ],
                    video: [
                        'sub6-1'
                    ],
                    use: [
                        '나는 열심히 운동을 해요.<br><br>내가 좋아하는 스포츠는 태권도에요.'
                    ]
                },
                '2': {
                    title: '뚱뚱하다',
                    list: [
                        [
                            '비만',
                            '통통하다',
                            '포동포동하다',
                            '우량하다'
                        ]
                    ],
                    video: [
                        'sub6-2'
                    ],
                    use: [
                        '가을이는 과자를 많이 먹어서 뚱뚱해요.<br><br>비만은 건강에 좋지 않아요.'
                    ]
                },
                '3': {
                    title: '마르다',
                    list: [
                        [
                            '몸이 마르다',
                            '왜소하다',
                            '날씬하다'
                        ],
                        [
                            '옷이 마르다',
                            '건조'
                        ],
                        [
                            '목이 마르다',
                            '갈증나다',
                            '목이 타다'
                        ]
                    ],
                    video: [
                        'sub6-3-1',
                        'sub6-3-2',
                        'sub6-3-3'
                    ],
                    use: [
                        '친구는 잘 먹지 않아서 몸이 말라요.<br><br>내 친구는 날씬해서 옷이 헐렁해요.',
                        '햇빛에 젖은 옷을 널면 잘 말라요.<br><br>신발이 비에 젖어서 건조시켜요.',
                        '가을이는 목이 말라요.<br><br>땀을 많이 흘려서 갈증이 나요.',
                    ]
                },
                '4': {
                    title: '줄이다',
                    list: [
                        [
                            '짐을 줄이다',
                            '간소화 하다',
                            '간단히 하다'
                        ],
                        [
                            '소리를 줄이다',
                            '작게하다',
                            '낮추다'
                        ],
                        [
                            '체중을 줄이다',
                            '다이어트하다',
                            '살을 빼다',
                            '감량하다'
                        ]
                    ],
                    video: [
                        'sub6-4-1',
                        'sub6-4-2',
                        'sub6-4-3'
                    ],
                    use: [
                        '겨울이는 가방이 너무 무거워서 짐을 줄여요.<br><br>배낭여행을 갈 때는 짐을 간소화하는 것이 좋아요.',
                        '음악 소리가 너무 커서 소리를 줄여요.<br><br>시끄러운 친구에게 목소리를 조금 낮추라고 말해요.',
                        '봄이는 줄넘기를 하면서 체중을 줄여요.<br><br>나는 체중을 감량하기 위해서 운동을 해요.'
                    ]
                },
                '5': {
                    title: '되다',
                    list: [
                        [
                            '경찰관이 되다',
                            '이루다'
                        ],
                        [
                            '배터리가 다 되다',
                            '다하다',
                            '방전되다',
                            '닳다'
                        ],
                        [
                            '반죽이 되다',
                            '퍽퍽하다',
                            '물기가 적다'
                        ]
                    ],
                    video: [
                        'sub6-5-1',
                        'sub6-5-2',
                        'sub6-5-3'
                    ],
                    use: [
                        '가을이는 자라서 경찰관이 돼요.<br><br>선생님이 되고 싶어서 공부를 열심히 해요.',
                        '핸드폰 배터리가 다 돼서 충전해요.<br><br>배터리가 다하면 시계가 멈춰요.',
                        '밀가루 반죽이 돼서 물을 더 넣어요.<br><br>나는 된밥을 좋아해요.'
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