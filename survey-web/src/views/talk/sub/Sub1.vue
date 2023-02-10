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
                        <Vocabulary v-if="page === 'vocabulary'" :selectData="selectData" />
                        <Game v-if="page === 'game'" :selectData="selectData" :gameLangthData="[5,8,3,9,6,3,7]" :currentIndex="currentIndex" ref="sentChildGame" />
                        <Sentence v-if="page === 'sentence'" :currentIndex="currentIndex" ref="sentChild" />
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
    data() {
        return {
            page: 'vocabulary',
            currentIndex: 1,
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
                        'rise1.mp4',
                        'rise2.mp4',
                        'rise3.mp4',
                        'rise4.mp4',
                        'rise5.mp4'
                    ],
                    use: [
                        '나는 매일 아침 8시에 일어난다.<br>아침에 눈을 뜨니 비가온다.',
                        '자리에 일어나 우리는 팀을 응원한다.<br>버스에 오래 앉아 있으니 다리가 아프다',
                        '일본에서 지진이 많이 일어난다.<br>지신이 발생하면 건물이 흔들린다.',
                        '돌고래를 바다로 돌려보내기 위해 들고 일어나야 한다.<br>전쟁을 반대하는 시위가 열린다.',
                        '싸움이 일어나면 경찰에 신고해야 한다.<br>동생이 내 장난감을 가져가서 자주 싸움이 생긴다.'
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
                        ]
                    ],
                    video: [
                        'eat1.mp4',
                        'eat2.mp4',
                        'eat3.mp4',
                        'eat4.mp4',
                        'eat5.mp4',
                        'eat6.mp4',
                        'eat7.mp4',
                        'eat8.mp4',
                    ],
                    use: [
                        '배가 고파서 밥을 많이 먹는다.<br>건강을 위해서는 야채를 많이 섭취해야 한다.',
                        '동생에게 계속 장난쳐서 욕을 먹다.<br>친구한테 욕을 들어서 기분이 나쁘다.',
                        '바지가 작아서 엉덩이가 바지를 먹는다.<br>길을 걷다가 바지가 끼어서 뺐다.',
                        '귀가 먹었는지 큰 소리로 불러도 모른다.<br>시끄러운 소리를 들으면 귀가 먹을 수 있다.',
                        '올해가 지나면 한 살 더 먹는다.<br>사람이 늙으면 얼굴에 주름이 생긴다.',
                        '수학 시험에서 0점을 받아 충격을 먹다.<br>할머니는 충격을 먹고 쓰러졌다.',
                        '벌레 먹은 사과가 나무에서 떨어졌다.<br>밤송이를 열어보니 벌레가 먹었다.',
                        '나는 달리기 대회에서 1등을 먹었다.<br>나는 경기에서 우승하기 위해서 열심히 운동한다.',
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
                        'rot1.mp4',
                        'rot2.mp4',
                        'rot3.mp4'
                    ],
                    use: [
                        '사과가 오래되어서 썩다.<br>날씨가 더워서 반찬이 상하다.',
                        '사탕을 많이 먹으면 이가 썩는다.<br>충치가 생겨서 치과에 간다.',
                        '엄마한테 혼난 동생의 표정이 썩는다.<br>누나는 목걸이를 잃어버려서 표정이 좋지 않다.'
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
                        'make1.mp4',
                        'make2.mp4',
                        'make3.mp4',
                        'make4.mp4',
                        'make5.mp4',
                        'make6.mp4',
                        'make7.mp4',
                        'make8.mp4',
                        'make9.mp4'
                    ],
                    use: [
                        '마트에서 재료를 사서 김밥을 싸다.<br>나는 엄마와 함께 도시락을 만들다.',
                        '우리 엄마는 음악을 만드는 사람이다.<br>엄마가 작곡한 곡이 티비에 나온다.',
                        '엄마는 나에게 종이비행기를 만들어 주셨다.<br>아빠, 강아지에게 새집을 제작해주세요.',
                        '영화를 만드는 것은 돈이 많이 필요하다.<br>나의 꿈은 만화를 제작하는 것이다.',
                        '학원에서 새 친구를 만들었다.<br>놀이터에서 놀다가 친구를 사귀다.',
                        '나는 친구의 얼굴에 상처를 만들었다.<br>형은 놀다가 나무에 상처가 생기게 했다.',
                        '엄마는 매일 나를 웃게 만든다.<br>개그 프로그램에 나오는 사람들은 정말 재미있다.',
                        '선생님과 친구들은 함께 교실 규칙을 만들었다.<br>규칙을 정하면 꼭 지켜야 한다.',
                        '학교에서 댄스 동아리를 만들다.<br>나는 친구들과 게임 동아리를 결성한다.'
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
                        'call1.mp4',
                        'call2.mp4',
                        'call3.mp4',
                        'call4.mp4',
                        'call5.mp4',
                        'call6.mp4'
                    ],
                    use: [
                        '나는 노래를 부르면 기분이 좋아진다.<br>친구랑 놀러 가면서 신나게 노래를 부른다.',
                        '가격을 비싸게 부르면 물건이 잘 팔리지 않는다.<br>백화점에서 옷 가격을 비싸게 제시한다.',
                        '동생은 매일 장난을 쳐서 화를 부른다.<br>나는 엄마 말을 안 들어서 화를 내게 한다.',
                        '내 생일에는 친구들을 집에 부른다.<br>친구야. 나도 너희 집에 초대해주면 안 돼?',
                        '친구와 함께 놀기 위해 친구의 이름을 불렀다.<br>내 도움이 필요할 땐 내 이름을 크게 불러줘.',
                        '저녁에 밥을 많이 먹었더니 배가 부르다.<br>아침을 먹어서 하루 종일 배가 든든하다.'
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
                        'not1.mp4',
                        'not2.mp4',
                        'not3.mp4'
                    ],
                    use: [
                        '친구의 생일 선물을 샀더니 이제 돈이 없다.<br>돈이 없으면 좋아하는 장난감을 사지 못한다.',
                        '나는 이사해서 동네에 친구가 없다.<br>친구 집에 아무도 없어서 돌아갔다.',
                        '나는 피아노 연습을 열심히 해서 1등은 문제없다.<br>받아쓰기 100점정도는 문제 없다.'
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
                        'put1.mp4',
                        'put2.mp4',
                        'put3.mp4',
                        'put4.mp4',
                        'put5.mp4',
                        'put6.mp4',
                    ],
                    use: [
                        '내일 학교 준비물을 미리 가방에 넣다.<br>나는 오늘 가방에 도시락을 챙기지 않았다.',
                        '엄마는 커피가 써서 설탕을 넣는다.<br>나는 비빔밥에 계란을 꼭 추가한다.',
                        '나는 용돈을 받으면 통장에 넣는다.<br>돼지 저금통에 동전을 모아서 통장에 입금한다.',
                        '회사에 들어가려면 이력서를 넣어야 한다.<br>나는 학교에 숙제를 제출한다.',
                        '나는 골을 넣어서 소리를 질렀다.<br>어제 경기에서 손흥민은 세 골을 터트렸다.',
                        '밭에 씨를 넣고, 흙을 덮는다.<br>오늘 수업시간에 화분에 꽃을 심는다.'
                    ]
                }
            },
            selectData: []
        }
    },
    created() {
        const _searchParams = new URLSearchParams(location.search);
        
        if (Object.keys(_searchParams).length === 0) {
            this.selectData = this.talkData['1'];
            return;
        }

        for (const _param of _searchParams) {
            this.selectData = this.talkData[_param[1]];
        }
    },
    methods: {
        _getUrl(_fileName) {
            return `${require(`../../../assets/video/talk/${_fileName}`)}`;
        },
        _pageMove(e) {
            e.preventDefault();
            
            const _el = e.target.tagName !== 'button' ? e.target.closest('button') : e.target;
            const _page = _el.getAttribute('data-role');
            
            this.selectData = this.talkData['1'];
            this.page =_page;
        },
        _slideEnd(data) {
            this.currentIndex = data.currentSlideIndex;
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
            this.selectData = this.talkData[this.currentIndex];

            if (this.page === 'game') {
                this.$refs.sentChildGame._reset();
            }

            if (this.page === 'sentence') {
                this.$refs.sentChild._random();
            }

            document.getElementsByClassName('talk-b-side')[0].classList.remove('b-show');
        }
    },
}
</script>

<style>
    .sub-talk {
        width: 100%;
        height: calc(100vh - 63px);
        background: url('../../../assets/images/sub_bg.svg') no-repeat center;
        background-size: cover;
    }

    .sub-inner {
        overflow: hidden;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 1440px;
    }

    .sub-step li button.on span {
        font-weight: bold;
        text-decoration: underline;
    }

    .sub-search-box {
        margin-right: 196px;
        margin-bottom: 20px;
        text-align: right;
    }

    .sub-search-box label,
    .sub-search-box input {
        height: 50px;
        border: 0;
    }

    .sub-search-box label {
        width: 50px;
        border-top-left-radius: 70px;
        border-bottom-left-radius: 70px;
        background-color: #fff;
        line-height: 50px;
        text-align: center;
    }

    .sub-search-box input {
        width: 300px;
        border-top-right-radius: 70px;
        border-bottom-right-radius: 70px;
    }

    .sub-contents {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        flex-basis: 100%;
    }

    .sub-contents .sub-aside {
        display: flex;
        flex-basis: 15%;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    .sub-contents .sub-aside ul {
        gap: 50px;
        padding-left: 0;
        margin-bottom: 0;
    }

    .sub-contents .sub-aside ul li {
        margin-top: 50px;
        list-style: none;
    }

    .sub-contents .sub-aside ul li:first-child {
        margin-top: 0;
    }

    .sub-contents .sub-aside ul li button span {
        display: block;
    }

    .sub-contents .sub-content {
        flex-basis: 85%;
    }

    .sub-talk-inner {
        width: 990px;
        margin: 0 auto 0 40px;
    }

    .talk-box {
        display: flex;
        gap: 20px;
        width: 990px;
        height: 640px;
        background-color: #BDD2DF;
        border-radius: 30px;
    }

    .slide-img-box {
        width: 692px;
        margin-top: 20px;
        margin-left: 20px;
    }

    .slide-img-box ul {
        padding-left: 0;
        margin-bottom: 0;
    }

    .slide-img-box figure img {
        width: 100%;
        border-radius: 20px;
    }

    .navi-talk-list {
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 20px 0;
    }

    .navi-talk-list ul {
        width: 100%;
        padding-left: 0;
        margin-bottom: 0;
    }

    .navi-talk-list ul li {
        width: 238px;
        height: 40px;
        margin-top: 20px;
        background-color: #fff;
        border-radius: 70px;
        line-height: 40px;
        font-size: 14px;
        text-align: center;
    }

    .navi-talk-list ul li:first-child {
        margin-top: 0;
    }

    .btn-use-sent {
        width: 238px;
        height: 56px;
        line-height: 56px;
        background-color: #65adda;
        border-radius: 100px;
        color: #fff;
        font-size: 24px;
    }

    .btn-use-sent.use-show {
        background-color: #3280B0;
    }

    .talk-b-side {
        position: absolute;
        transition: all 0.5s;
        top: 0;
        right: -250px;
        width: 330px;
        height: 750px;
        background-color: #8FC7EA;
        border-top-left-radius: 40px;
        border-bottom-left-radius: 40px;
    }

    .talk-b-side.b-show {
        right: 0;
    }

    .talk-b-side .btn-b-side-toggle {
        display: block;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-50%, -50%);
        content: '';
        width: 70px;
        height: 70px;
    }

    .talk-b-side.b-show .btn-b-side-toggle img {
        transform: rotate(180deg);
    }

    .talk-b-side ul {
        padding-left: 0;
        margin-top: 45px;
        margin-bottom: 0;
    }

    .talk-b-side ul li {
        margin-top: 30px;
        text-align: center;
    }

    .talk-b-side ul li:first-child {
        margin-top: 0;
    }

    .talk-b-side ul li button {
        width: 250px;
        height: 46px;
        padding: 0 20px;
        background-color: #fff;
        border-radius: 70px;
        text-align: left;
        box-sizing: border-box;
    }

    .talk-text-box {
        width: 990px;
        height: 90px;
        margin-top: 20px;
        background-color: #fff;
        border-radius: 20px;
    }

    .talk-text-box p {
        margin-bottom: 0;
        text-align: center;
        line-height: 90px;
        font-size: 28px;
    }

    .use-sent-wrap {
        display: none;
        z-index: 10;
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 90%;
        padding: 30px;
        box-sizing: border-box;
        background-color: #3280b0;
        border-radius: 15px;
        color: #fff;
    }

    .use-sent-wrap.use-sent-show {
        display: block;
        visibility: initial;
        animation: growDown 300ms ease-in-out forwards;
        transform-origin: bottom center;
    }

    @keyframes growDown {
        0% {
            transform: scaleY(0);
        }

        80% {
            transform: scaleY(1.05);
        }

        100% {
            transform: scaleY(1);
        }
    }

    .carousel__slide video {
        width: 600px;
        border-radius: 30px;
    }

    @media (max-width: 1440px) {
        .sub-inner {
            width: 100vw;
        }

        .sub-contents .sub-aside ul li {
            margin-top: 3.4722vw;
        }

        .sub-talk-inner {
            width: 68.75vw;
            margin: 0 auto 0 2.7777vw;
        }

        .talk-box {
            gap: 1.3888vw;
            width: 68.75vw;
            height: 44.4444vw;
        }

        .slide-img-box {
            width: 48.0555vw;
            margin-top: 1.3888vw;
            margin-left: 1.3888vw;
        }

        .navi-talk-list {
            margin: 1.3888vw 0;
        }

        .navi-talk-list ul li {
            width: 16.5277vw;
            height: 2.7777vw;
            margin-top: 1.3888vw;
            border-radius: 4.8611vw;
            line-height: 2.7777vw;
            font-size: 0.9722vw;
        }

        .btn-use-sent {
            width: 16.5277vw;
            height: 3.8888vw;
            line-height: 3.8888vw;
            font-size: 1.6666vw;
        }

        .talk-b-side {
            z-index: 10;
            right: -17.3611vw;
            width: 22.9166vw;
            height: 52.0833vw;
        }

        .talk-b-side .btn-b-side-toggle {
            width: 4.8611vw;
            height: 4.8611vw;
        }

        .talk-b-side .btn-b-side-toggle img {
            width: 100%;
        }

        .talk-b-side ul {
            margin-top: 3.125vw;
        }

        .talk-b-side ul li {
            margin-top: 2.083vw;
        }

        .talk-b-side ul li button {
            width: 17.3611vw;
            height: 3.1944vw;
            padding: 0 1.3888vw;
        }

        .talk-b-side ul li button {
            width: 17.3611vw;
            height: 3.1944vw;
            padding: 0 1.3888vw;
        }

        .talk-text-box {
            width: 68.75vw;
            height: 6.25vw;
            margin-top: 1.3888vw;
        }

        .talk-text-box p {
            line-height: 6.25vw;
            font-size: 1.9444vw;
        }

        .use-sent-wrap {
            padding: 2.0833vw;
        }

        .use-sent-wrap.use-sent-show {
            display: block;
        }

        .carousel__slide video {
            width: 41.6666vw;
        }
    }
</style>