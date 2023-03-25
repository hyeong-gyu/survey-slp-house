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
                        <Story v-if="page === 'story'" :videoUrl="'sub3'" :videoTitle="'벌을 받았어요'" />
                        <Vocabulary v-if="page === 'vocabulary'" :selectData="selectData" ref="vocabSlide" :videoUrl="'sub3'" />
                        <Game v-if="page === 'game'" :selectData="selectData" :gameLangthData="[1,1,1,1,6,5,3]" :currentIndex="currentIndex" :imageUrl="'sub3'" ref="sentChildGame" />
                        <Sentence v-if="page === 'sentence'" :selectData="selectData" :sentData="sentData" :currentIndex="currentIndex" :imageUrl="'sub3'" ref="sentChild" />
                    </div>
                </div>
            </div>
            <div class="talk-b-side">
                <button type="button" class="btn-b-side-toggle" @click="_slideClick">
                    <img src="../../../assets/images/icon_direaction.svg" alt="" />
                </button>
                <ul>
                    <li>
                        <button type="button" data-role="1" @click="_listClick">수업</button>
                    </li>
                    <li>
                        <button type="button" data-role="2" @click="_listClick">공책</button>
                    </li>
                    <li>
                        <button type="button" data-role="3" @click="_listClick">벌</button>
                    </li>
                    <li>
                        <button type="button" data-role="4" @click="_listClick">재미있다</button>
                    </li>
                    <li>
                        <button type="button" data-role="5" @click="_listClick">걸다</button>
                    </li>
                    <li>
                        <button type="button" data-role="6" @click="_listClick">받다</button>
                    </li>
                    <li>
                        <button type="button" data-role="7" @click="_listClick">듣다</button>
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
    name: 'Sub3',
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
                1: 12,
                2: 9,
                3: 5,
                4: 9,
                5: 11,
                6: 13,
                7: 12
            },
            talkData: {
                '1': {
                    title: '수업',
                    list: [
                        [
                            "수업시간",
                            "공부시간",
                        ]
                    ],
                    video: [
                        'sub3-1'
                    ],
                    use: [
                        '오늘 수업 시간에 더하기를 배워요.<br><br>공부 시간에 떠들면 선생님께 혼나요.'
                    ]
                },
                '2': {
                    title: '공책',
                    list: [
                        [
                            '공책',
                            '노트',
                            '연습장'
                        ]
                    ],
                    video: [
                        'sub3-2'
                    ],
                    use: [
                        '칠판에 쓰여 있는 준비물을 공책에 적어요.<br><br>누나는 노트에 그림을 그리는 것을 좋아해요.'
                    ]
                },
                '3': {
                    title: '벌',
                    list: [
                        [
                            '벌',
                            '훈육'
                        ]
                    ],
                    video: [
                        'sub3-3'
                    ],
                    use: [
                        '오빠하고 싸우면 벌을 받아요.<br><br>부모님이 훈육할 때에는 올바른 훈육이 필요해요.'
                    ]
                },
                '4': {
                    title: '재미있다',
                    list: [
                        [
                            '게임이 재미있다',
                            '흥미있다',
                            '유쾌하다',
                            '즐겁다'
                        ]
                    ],
                    video: [
                        'sub3-4'
                    ],
                    use: [
                        '가을이랑 겨울이는 재미있게 게임을 해요.<br><br>나는 노래를 들으며 춤을 추는 것이 즐거워요.'
                    ]
                },
                '5': {
                    title: '걸다',
                    list: [
                        [
                            '시동을 걸다',
                            '작동시키다'
                        ],
                        [
                            '자물쇠를 걸다',
                            '잠그다'
                        ],
                        [
                            '벽에 그림을 걸다',
                            '달다',
                            '매달다'
                        ],
                        [
                            '말을 걸다',
                            '말을 붙이다',
                            '대화를 시작하다'
                        ],
                        [
                            '전화를 걸다',
                            '전화하다',
                            '발신하다'
                        ],
                        [
                            '발을 걸다'
                        ]
                    ],
                    video: [
                        'sub3-5-1',
                        'sub3-5-2',
                        'sub3-5-3',
                        'sub3-5-4',
                        'sub3-5-5',
                        'sub3-5-6'
                    ],
                    use: [
                        '자동차에 시동을 걸어요.<br><br>엄마는 빨래하기 위해 세탁기를 작동시켜요.',
                        '나는 자전거에 자물쇠를 걸어요.<br><br>아무도 상자 안을 보지 못하게 자물쇠로 잠가요.',
                        '봄이는 새로 산 그림을 벽에 걸어요.<br><br>크리스마스 트리에 작은 인형을 달아요.',
                        '봄이는 길을 물어보려고 말을 걸어요.<br><br>새로 만난 친구와 친해지고 싶어서 말을 걸어요.',
                        '가을이는 친구에게 전화를 걸어요.<br><br>학교가 끝나고 엄마에게 전화해요.',
                        '가을이는 겨울이에게 발을 걸어요.<br><br>돌에 걸려서 넘어져요.',
                    ]
                },
                '6': {
                    title: '받다',
                    list: [
                        [
                            '선물을 받다'
                        ],
                        [
                            '전화를 받다',
                            '수신'
                        ],
                        [
                            '공을 받다'
                        ],
                        [
                            '손님을 받다',
                            '맞다',
                            '맞이하다'
                        ],
                        [
                            '물을 받다',
                            '담다',
                            '채우다'
                        ]
                    ],
                    video: [
                        'sub3-6-1',
                        'sub3-6-2',
                        'sub3-6-3',
                        'sub3-6-4',
                        'sub3-6-5'
                    ],
                    use: [
                        '가을이는 여름이에게 선물을 받아요.<br><br>생일 선물을 받아서 정말 기뻐요.',
                        '가을이는 전화를 받아요.<br><br>핸드폰이 고장이 나서 수신이 안 돼요.',
                        '겨울이는 여름이가 던진 공을 받아요.<br><br>공을 받아서 골대에 넣어요.',
                        '레스토랑 앞에서 직원이 손님을 받아요.<br><br>나는 집에 놀러 온 친구를 맞아요.',
                        '여름이는 그릇에 물을 받아요.<br><br>겨울이는 목욕하기 위해서 욕조에 물을 담아요.'
                    ]
                },
                '7': {
                    title: '듣다',
                    list: [
                        [
                            '음악을 듣다'
                        ],
                        [
                            '컴퓨터가 말을 듣지 않는다',
                            '고장나다'
                        ],
                        [
                            '약이 잘 듣다',
                            '효과가 나타나다'
                        ]
                    ],
                    video: [
                        'sub3-7-1',
                        'sub3-7-2',
                        'sub3-7-3'
                    ],
                    use: [
                        '겨울이는 스피커로 노랫소리를 들어요.<br><br>노래를 들으니 흥이 나요.',
                        '가을이의 노트북이 갑자기 말을 듣지 않아요.<br><br>티비가 고장나서 수리점에 맡겨야 해요.',
                        '금방 열이 내리는 걸 보니 약이 잘 들어요.<br><br>약을 먹은 지 30분 지나자 약 효과가 나타나요.',
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