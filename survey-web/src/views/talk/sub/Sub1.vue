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
                        <Vocabulary v-if="page === 'vocabulary'" :selectData="selectData" ref="vocabSlide" :videoUrl="'sub1'" />
                        <Game v-if="page === 'game'" :selectData="selectData" :gameLangthData="[5,8,3,9,6,3,7]" :currentIndex="currentIndex" :imageUrl="'sub1'" ref="sentChildGame" />
                        <Sentence v-if="page === 'sentence'" :selectData="selectData" :sentData="sentData" :currentIndex="currentIndex" :imageUrl="'sub1'" ref="sentChild" />
                    </div>
                </div>
            </div>
            <div class="talk-b-side">
                <button type="button" class="btn-b-side-toggle" @click="_slideClick">
                    <img src="../../../assets/images/icon_direaction.svg" alt="" />
                </button>
                <ul>
                    <li>
                        <button type="button" data-role="1" @click="_listClick">일어나다</button>
                    </li>
                    <li>
                        <button type="button" data-role="2" @click="_listClick">먹다</button>
                    </li>
                    <li>
                        <button type="button" data-role="3" @click="_listClick">썩다</button>
                    </li>
                    <li>
                        <button type="button" data-role="4" @click="_listClick">만들다</button>
                    </li>
                    <li>
                        <button type="button" data-role="5" @click="_listClick">부르다</button>
                    </li>
                    <li>
                        <button type="button" data-role="6" @click="_listClick">없다</button>
                    </li>
                    <li>
                        <button type="button" data-role="7" @click="_listClick">넣다</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { router } from '../../../router';
import Vocabulary from '@/components/talk/Vocabulary';
import Game from '@/components/talk/Game';
import Sentence from '@/components/talk/Sentence';

export default {
    name: 'Sub1',
    components: {
        Vocabulary,
        Game,
        Sentence
    },
    mounted() {
        if (this.$cookie.getCookie('talk-code') !== 'code-set-2023-slp') router.push('/');
        const _talkWrap = document.getElementsByClassName('sub-talk')[0];
        const _inner = document.getElementsByClassName('sub-inner')[0];
        const _innerHeight = _inner.offsetHeight;

        if (window.innerWidth < 1024) _talkWrap.style.height = `${_innerHeight + 63}px`;
    },
    data() {
        return {
            page: 'vocabulary',
            pageData: '1',
            currentIndex: 1,
            sentData: {
                1: 12,
                2: 10,
                3: 7,
                4: 12,
                5: 7,
                6: 7,
                7: 9
            },
            talkData: {
                '1': {
                    title: '일어나다',
                    list: [
                        [
                            "잠에서 일어나다",
                            "깨다",
                            "기상하다",
                            "눈뜨다"
                        ],
                        [
                            "자리에서 일어나다",
                            "기립하다"
                        ],
                        [
                            "지진이 일어나다",
                            "발생하다"
                        ],
                        [
                            "문제를 들고 일어나다",
                            "시위하다",
                            "건의하다"
                        ],
                        [
                            "싸움이 일어나다",
                            "생기다",
                            "나다",
                            "벌어지다"
                        ]
                    ],
                    video: [
                        'rise1',
                        'rise2',
                        'rise3',
                        'rise4',
                        'rise5'
                    ],
                    use: [
                        '겨울이는 8시에 일어나요.<br><br>아침에 눈을 뜨니까 비가 와요.',
                        '여름이는 의자에서 일어나요.<br><br>버스에 오래 서 있으니 다리가 아파요.',
                        '여름이는 지진이 일어나서 식탁 밑으로 들어가요.<br><br>지진이 발생하면 건물이 흔들려요.',
                        '돌고래를 바다로 돌려보내기 위해서 들고 일어나요.<br><br>전쟁을 반대하는 시위가 열려요.',
                        '싸움이 일어나면 경찰에 신고 해요.<br><br>동생이랑 나는 장난감 때문에 자주 싸움이 생겨요.'
                    ]
                },
                '2': {
                    title: '먹다',
                    list: [
                        [
                            '사탕을 먹다',
                            '섭취하다',
                            '취식하다'
                        ],
                        [
                            '욕을 먹다',
                            '듣다'
                        ],
                        [
                            '엉덩이가 바지를 먹다',
                            '바지가 꼇다'
                        ],
                        [
                            '귀가 먹다',
                            '소리를 못 듣다'
                        ],
                        [
                            '나이를 먹다',
                            '들다',
                            '늙다'
                        ],
                        [
                            '충격을 먹다',
                            '충격받다',
                            '깜짝 놀라다'
                        ],
                        [
                            '벌레 먹다',
                            '썩다',
                            '상하다',
                            '부패하다'
                        ],
                        [
                            '1등을 먹다',
                            '우승하다',
                            '승리하다'   
                        ],
                        [
                            '마음을 먹다',
                            '결심하다'
                        ]
                    ],
                    video: [
                        'eat1',
                        'eat2',
                        'eat3',
                        'eat4',
                        'eat5',
                        'eat6',
                        'eat7',
                        'eat8',
                        'eat9'
                    ],
                    use: [
                        '여름이는 달콤한 사탕을 먹어요.<br><br>건강을 위해서는 야채를 많이 섭취해야 해요.',
                        '여름이는 겨울이한테 계속 장난쳐서 욕을 먹어요.<br><br>나는 친구한테 욕을 먹어서 기분이 나빠요.',
                        '바지가 작아서 엉덩이가 바지를 먹는다.<br><br>길을 걷다가 바지가 끼어서 빼요.',
                        '노래를 크게 들으면 귀가 먹어요.<br><br>귀가 먹었는지 큰 소리로 불러도 몰라요.',
                        '올해가 지나면 한 살 더 먹어요.<br><br>사람은 늙으면 얼굴에 주름이 생겨요.',
                        '겨울이는 0점을 받아서 충격을 먹어요.<br><br>엄마가 충격을 먹어서 쓰러져요.',
                        '벌레 먹은 사과가 나무에서 떨어져요.<br><br>밤송이를 열어보니 벌레가 먹어요.',
                        '봄이는 1등을 먹어서 기분이 좋아요.<br><br>나는 경기에서 우승하기 위해서 열심히 노력해요.',
                        '나는 공부를 열심히 하기로 마음을 먹어요.<br><br>가을이는 경찰관이 되기로 결심해요'
                    ]
                },
                '3': {
                    title: '썩다',
                    list: [
                        [
                            '사과가 썩다',
                            '상하다',
                            '부패하다'
                        ],
                        [
                            '이가 썩다',
                            '충치',
                            '부식되다'
                        ],
                        [
                            '표정이 썩다',
                            '좋지 않다'
                        ]
                    ],
                    video: [
                        'rot1',
                        'rot2',
                        'rot3'
                    ],
                    use: [
                        '사과가 오래되면 썩어요.<br><br>날씨가 더우면 반찬이 상해요.',
                        '사탕을 많이 먹으면 이가 썩어요.<br><br>충치가 생기면 치과에 가야 해요.',
                        '엄마한테 혼난 동생의 표정이 좋지 않아요.<br><br>목걸이를 잃어버려서 표정이 썩어요.'
                    ]
                },
                '4': {
                    title: '만들다',
                    list: [
                        [
                            '김밥을 만들다',
                            '싸다'
                        ],
                        [
                            '음악을 만들다',
                            '작사',
                            '작곡'
                        ],
                        [
                            '비행기를 만들다',
                            '제작하다',
                            '접다'
                        ],
                        [
                            '영화를 만들다',
                            '찍다',
                            '제작하다'
                        ],
                        [
                            '친구를 만들다',
                            '맺다',
                            '사귀다',
                            '생기다'
                        ],
                        [
                            '상처를 만들다',
                            '다치다',
                            '생기다'
                        ],
                        [
                            '웃게 만들다',
                            '코미디',
                            '개그'
                        ],
                        [
                            '규칙을 만들다',
                            '정하다',
                            '규정을 만들다'   
                        ],
                        [
                            '동아리를 만들다',
                            '결성하다',
                            '모이다'   
                        ]
                    ],
                    video: [
                        'make1',
                        'make2',
                        'make3',
                        'make4',
                        'make5',
                        'make6',
                        'make7',
                        'make8',
                        'make9'
                    ],
                    use: [
                        '마트에서 재료를 사서 김밥을 싸요.<br><br>나는 엄마와 함께 도시락을 만들어요.',
                        '우리 엄마는 노래를 만드는 것을 좋아해요.<br><br>엄마는 항상 피아노를 치면서 작곡을 해요.',
                        '엄마와 나는 종이비행기를 만들어요.<br><br>아빠, 강아지에게 새집을 제작해주세요.',
                        '우리 형은 영화를 만드는 일을 해요.<br><br>나의 꿈은 만화를 제작하는 것이에요.',
                        '가을이는 새 친구를 만들어요.<br><br>놀이터에서 놀다가 친구를 사귀어요.',
                        '겨울이의 얼굴에 상처를 만들어요.<br><br>형이 나무에 상처가 생기게 해요.',
                        '겨울이는 항상 여름이를 웃게 만들어요.<br><br>티비에서 나오는 만화가 나를 웃게 만들어요.',
                        '선생님과 친구들은 함께 교실 규칙을 만들어요.<br><br>규칙을 정하면 꼭 지켜야 해요.',
                        '학교에서 노래 동아리를 만들어요.<br><br>우리 반은 동아리를 결성해서 춤 대회에 나가요.'
                    ]
                },
                '5': {
                    title: '부르다',
                    list: [
                        [
                            '노래를 부르다',
                            '노래하다',
                            '흥얼거리다'
                        ],
                        [
                            '값을 부르다',
                            '제시하다',
                            '제안하다'
                        ],
                        [
                            '화를 부르다',
                            '일으키다',
                            '유발하다',
                            '내게하다'
                        ],
                        [
                            '집으로 부르다',
                            '초대하다'
                        ],
                        [
                            '친구를 부르다',
                            '이름을 부르다'
                        ],
                        [
                            '배가 부르다',
                            '든든하다',
                            '배가 차다'
                        ]
                    ],
                    video: [
                        'call1',
                        'call2',
                        'call3',
                        'call4',
                        'call5',
                        'call6'
                    ],
                    use: [
                        '여름이가 노래를 불러요.<br><br>나는 노래를 부르면 기분이 좋아져요.',
                        '봄이는 원피스 가격을 비싸게 불러서 사지 못해요.<br><br>시장에서 옷의 가격을 말해요.',
                        '겨울이는 매일 장난을 쳐서 친구의 화를 불러요.<br><br>내 동생은 화를 부르는 행동을 자주 해요.',
                        '봄이가 여름이를 집으로 불러요.<br><br>봄아, 나도 너희 집에 초대해주면 안 돼?',
                        '가을이가 봄이를 불러요.<br><br>우리 집 강이지는 이름을 부르면 나에게 달려와요.',
                        '겨울이는 저녁을 많이 먹어서 배가 불러요.<br><br>아침을 먹어서 하루종일 배가 든든해요.'
                    ]
                },
                '6': {
                    title: '없다',
                    list: [
                        [
                            '돈이 없다',
                            '가난하다',
                            '궁하다'
                        ],
                        [
                            '엄마가 없다'
                        ],
                        [
                            '문제 없다',
                            '할 수 있다',
                            '가능하다'
                        ]
                    ],
                    video: [
                        'not1',
                        'not2',
                        'not3'
                    ],
                    use: [
                        '여름이는 친구의 생일 선물을 많이 사서 돈이 없어요.<br><br>돈이 없으면 좋아하는 장난감을 사지 못해요.',
                        '봄이는 집에 왔는데 엄마가 없어요.<br><br>친구가 없어서 놀이터에서 혼자 놀아요.',
                        '가을이는 피아노 연습을 많이 해서 1등은 문제없어요.<br><br>겨울아, 학교에 무슨 문제 없니?'
                    ]
                },
                '7': {
                    title: '넣다',
                    list: [
                        [
                            '책을 넣다',
                            '챙기다'
                        ],
                        [
                            '설탕을 넣다',
                            '추가하다'
                        ],
                        [
                            '통장에 돈을 넣다',
                            '입금하다',
                            '저금하다',
                            '모으다'
                        ],
                        [
                            '이력서를 넣다',
                            '제출하다',
                            '보내다'
                        ],
                        [
                            '골을 넣다',
                            '터트리다',
                            '골망을 흔들다'
                        ],
                        [
                            '씨를 넣다',
                            '심다',
                            '뿌리다'
                        ]
                    ],
                    video: [
                        'put1',
                        'put2',
                        'put3',
                        'put4',
                        'put5',
                        'put6',
                    ],
                    use: [
                        '여름이는 준비물을 가방에 넣어요.<br><br>나는 가방을 챙겨서 학교에 가요.',
                        '엄마는 커피가 써서 설탕을 넣어요.<br><br>나는 비빔밥에 참기름을 꼭 추가해요.',
                        '겨울이는 용돈을 받으면 통장에 넣어요.<br><br>저금통에 동전을 모아서 통장에 입금해요.',
                        '겨울이는 가게에서 일하고 싶어서 이력서를 넣어요.<br><br>나는 학교에 숙제를 제출해요.',
                        '겨울이가 경기에서 골을 넣어요.<br><br>나는 골을 많이 넣어서 기뻐요.',
                        '밭에 씨를 넣고, 흙을 덮어요.<br><br>화분에 꽃을 심어요.'
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
        _getUrl(_fileName) {
            return `${require(`../../../assets/video/talk/sub1/${_fileName}`)}`;
        },
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