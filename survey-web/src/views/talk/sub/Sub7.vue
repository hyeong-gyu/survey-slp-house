<template>
    <div class="sub-talk">
        <router-link to="/talk/main" class="btn-back-main">
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
                        <Story v-if="page === 'story'" :videoUrl="'sub7'" :videoTitle="'이가 썩었어요'" />
                        <Vocabulary v-if="page === 'vocabulary'" :selectData="selectData" ref="vocabSlide" :videoUrl="'sub7'" />
                        <Game v-if="page === 'game'" :selectData="selectData" :gameLangthData="[5,4,4,4,5,3]" :currentIndex="currentIndex" :imageUrl="'sub7'" ref="sentChildGame" />
                        <Sentence v-if="page === 'sentence'" :selectData="selectData" :sentData="sentData" :currentIndex="currentIndex" :imageUrl="'sub7'" ref="sentChild" />
                    </div>
                </div>
            </div>
            <div class="talk-b-side">
                <button type="button" class="btn-b-side-toggle" @click="_slideClick">
                    <img src="../../../assets/images/icon_direaction.svg" alt="" />
                </button>
                <ul>
                    <li>
                        <button type="button" data-role="1" @click="_listClick">뽑다</button>
                    </li>
                    <li>
                        <button type="button" data-role="2" @click="_listClick">참다</button>
                    </li>
                    <li>
                        <button type="button" data-role="3" @click="_listClick">깨다</button>
                    </li>
                    <li>
                        <button type="button" data-role="4" @click="_listClick">터지다</button>
                    </li>
                    <li>
                        <button type="button" data-role="5" @click="_listClick">들다</button>
                    </li>
                    <li>
                        <button type="button" data-role="6" @click="_listClick">붓다</button>
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
    name: 'Sub7',
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
                1: 22,
                2: 14,
                3: 14,
                4: 19,
                5: 26,
                6: 7
            },
            talkData: {
                '1': {
                    title: '뽑다',
                    list: [
                        [
                            '이를 뽑다',
                            '발치',
                            '이를 빼다​'
                        ],
                        [
                            '반장을 뽑다',
                            '선출하다'
                        ],
                        [
                            '인형을 뽑다'
                        ],
                        [
                            '프린터로 뽑다',
                            '인쇄하다',
                            '프린트하다​'
                        ],
                        [
                            '피를 뽑다',
                            '채혈'
                        ],
                    ],
                    video: [
                        'sub7-1-1',
                        'sub7-1-2',
                        'sub7-1-3',
                        'sub7-1-4',
                        'sub7-1-5',
                    ],
                    use: [
                        '여름이는 썩은 이를 뽑아요.​<br><br>치과에서 발치한 이가 아파요.​',
                        '봄이가 2학년 3반 반장으로 뽑혀요.​<br><br>새 학기 반장을 선출해요.​',
                        '인형 뽑기에서 기린 인형을 뽑아요.​​<br><br>인형을 뽑아서 동생에게 줘요.​',
                        '사과 그림을 프린터로 뽑아요.​​​<br><br>가족사진을 인쇄해요.​​',
                        '겨울이는 병원에서 피를 뽑아요.​​​​<br><br>피 검사를 위해서 채혈해요.​',
                    ]
                },
                '2': {
                    title: '참다',
                    list: [
                        [
                            '웃음을 참다'
                        ],
                        [
                            '화를 참다​',
                            '인내하다​',
                        ],
                        [
                            '똥을 참다​',
                        ],
                        [
                            '졸음을 참다',
                        ],
                    ],
                    video: [
                        'sub7-2-1',
                        'sub7-2-2',
                        'sub7-2-3',
                        'sub7-2-4',
                    ],
                    use: [
                        '여름이는 웃음을 참아요.​<br><br>웃음을 참으려는 친구 얼굴이 웃겨요.',
                        '봄이는 화를 참아요.<br><br>축구 선수가 되려면 많은 노력과 인내가 필요해요.​',
                        '겨울이는 똥을 참아요.​<br><br>똥을 참다가 화장실에 도착해요.​​',
                        '겨울이는 수업 시간에 졸음을 참아요.​​<br><br>졸음을 참다가 세수해요.​​',
                    ]
                },
                '3': {
                    title: '깨다',
                    list: [
                        [
                            '잠에서 깨다',
                            '일어나다',
                            '기상​'
                        ],
                        [
                            '약속을 깨다',
                            '어기다'
                        ],
                        [
                            '병을 깨다',
                            '파손하다',
                            '부수다​'
                        ],
                        [
                            '병아리가 알을 깨다',
                            '부화'
                        ]
                    ],
                    video: [
                        'sub7-3-1',
                        'sub7-3-2',
                        'sub7-3-3',
                        'sub7-3-4',
                    ],
                    use: [
                        '겨울이는 아침에 잠에서 깨요.​<br><br>무서운 꿈을 꿔서 일어나요.​',
                        '겨울이는 엄마와의 약속을 깨요.​<br><br>친구가 약속을 어겨서 기분이 나빠요.​',
                        '가을이가 음료수 병을 깨요.<br><br>파손된 그릇은 ​엄마가 버려요.',
                        '병아리가 스스로 알을 깨요.​<br><br>달걀이 부화해서 병아리가 나와요.​',
                    ]
                },
                '4': {
                    title: '터지다',
                    list: [
                        [
                            '속이 터지다',
                            '답답하다',
                        ],
                        [
                            '폭죽이 터지다​',
                            '폭탄이 터지다​'
                        ],
                        [
                            '바지가 터지다​',
                            '뚫리다​',
                            '구멍나다​'
                        ],
                        [
                            '풍선이 터지다​',
                        ]
                    ],
                    video: [
                        'sub7-4-1',
                        'sub7-4-2',
                        'sub7-4-3',
                        'sub7-4-4',
                    ],
                    use: [
                        '엄마는 우리를 보고 속이 터져요.​<br><br>친구가 너무 느려서 답답해요.​',
                        '불꽃축제에서 폭죽이 터져요.​<br><br>폭탄이 터져서 사람들이 다쳐요.​',
                        '겨울이는 태권도 하다가 바지가 터져요.​<br><br>엄마가 구멍난 바지를 꿰매요.​',
                        '바람을 많이 넣어서 풍선이 터져요.​​<br><br>풍선이 터져서 깜짝 놀라요.​​',
                    ]
                },
                '5': {
                    title: '들다',
                    list: [
                        [
                            '빛이 들다​',
                            '들이비추다​'
                        ],
                        [
                            '물건을 들다​',
                            '휴대하다​',
                        ],
                        [
                            '돈이 들다​',
                            '쓰이다​',
                            '필요하다​'
                        ],
                        [
                            '상자에 들다​​',
                        ],
                        [
                            '잠이 들다​',
                            '수면​',
                            '취침​'
                        ],
                    ],
                    video: [
                        'sub7-5-1',
                        'sub7-5-2',
                        'sub7-5-3',
                        'sub7-5-4',
                        'sub7-5-5',
                    ],
                    use: [
                        '여름이 방에 빛이 들어요.​<br><br>옷장 밑을 손전등으로 들이비춰요.​',
                        '봄이는 짐을 많이 들어요.​<br><br>엄마는 스마트폰을 항상 휴대해요.​',
                        '가을이의 쇼핑에는 항상 돈이 많이 들어요.​<br><br>놀이공원에서​ 돈을 많이 써요.',
                        '장난감이 상자에 들어있어요.​​<br><br>편지가 봉투에 들어있어요.​',
                        '겨울이는 밤에 잠이 들어요.​<br><br>오늘 취침 시간은 10시에요.​​',
                    ]
                },
                '6': {
                    title: '붓다​',
                    list: [
                        [
                            '물을 붓다​​',
                            '따르다​',
                            '채우다​',
                        ],
                        [
                            '적금을 붓다​',
                            '넣다​',
                        ],
                        [
                            '팔이 붓다​',
                            '부어오르다​',
                            '부풀다​'
                        ],
                    ],
                    video: [
                        'sub7-6-1',
                        'sub7-6-2',
                        'sub7-6-3',
                    ],
                    use: [
                        '봄이는 커피에 물을 부어요.​​<br><br>컵에 오렌지주스를 따라요.​​',
                        '통장에 적금을 부어요.​​<br><br>용돈을 받아서 적금을 넣어요.​​',
                        '벌에 쏘여서 팔이 부어요.​​<br><br>상처가 부어올랐어요.​',
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
            
            if (document.getElementById('background-audio')) document.getElementById('background-audio').pause();
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