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
                        <Story v-if="page === 'story'" :videoUrl="'sub2'" :videoTitle="'심부름'" />
                        <Vocabulary v-if="page === 'vocabulary'" :selectData="selectData" ref="vocabSlide" :videoUrl="'sub2'" />
                        <Game v-if="page === 'game'" :selectData="selectData" :gameLangthData="[1,1,1,1,3,7,6,3,3]" :currentIndex="currentIndex" :imageUrl="'sub2'" ref="sentChildGame" />
                        <Sentence v-if="page === 'sentence'" :selectData="selectData" :sentData="sentData" :currentIndex="currentIndex" :imageUrl="'sub2'" ref="sentChild" />
                    </div>
                </div>
            </div>
            <div class="talk-b-side">
                <button type="button" class="btn-b-side-toggle" @click="_slideClick">
                    <img src="../../../assets/images/icon_direaction.svg" alt="" />
                </button>
                <ul>
                    <li>
                        <button type="button" data-role="1" @click="_listClick">동네</button>
                    </li>
                    <li>
                        <button type="button" data-role="2" @click="_listClick">가게</button>
                    </li>
                    <li>
                        <button type="button" data-role="3" @click="_listClick">심부름</button>
                    </li>
                    <li>
                        <button type="button" data-role="4" @click="_listClick">지갑</button>
                    </li>
                    <li>
                        <button type="button" data-role="5" @click="_listClick">시키다</button>
                    </li>
                    <li>
                        <button type="button" data-role="6" @click="_listClick">가다</button>
                    </li>
                    <li>
                        <button type="button" data-role="7" @click="_listClick">찾다</button>
                    </li>
                    <li>
                        <button type="button" data-role="8" @click="_listClick">다가오다</button>
                    </li>
                    <li>
                        <button type="button" data-role="9" @click="_listClick">생각하다</button>
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
    name: 'Sub2',
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
                1: 12,
                2: 13,
                3: 6,
                4: 6,
                5: 8,
                6: 28,
                7: 14,
                8: 9,
                9: 6
            },
            talkData: {
                '1': {
                    title: '동네',
                    list: [
                        [
                            "동네",
                            "마을",
                        ]
                    ],
                    video: [
                        'sub2-1'
                    ],
                    use: [
                        '우리 동네에는 나무가 많아요.<br><br>같은 반 친구들이 동네에 많이 살아요.'
                    ]
                },
                '2': {
                    title: '가게',
                    list: [
                        [
                            '가게',
                            '슈퍼',
                            '마트'
                        ]
                    ],
                    video: [
                        'sub2-2'
                    ],
                    use: [
                        '여름이가 빵을 사려고 가게에 가요.<br><br>나는 떡볶이가게에서 파는 순대를 좋아해요.'
                    ]
                },
                '3': {
                    title: '심부름',
                    list: [
                        [
                            '심부름'
                        ]
                    ],
                    video: [
                        'sub2-3'
                    ],
                    use: [
                        '엄마가 여름이에게 심부름을 시켜요.<br><br>나는 심부름을 잘하면 용돈을 받아요.'
                    ]
                },
                '4': {
                    title: '지갑',
                    list: [
                        [
                            '지갑'
                        ]
                    ],
                    video: [
                        'sub2-4'
                    ],
                    use: [
                        '아빠 생신 선물로 지갑을 사요.<br><br>지갑에서 돈을 꺼내요.'
                    ]
                },
                '5': {
                    title: '시키다',
                    list: [
                        [
                            '음식을 시키다',
                            '주문하다'
                        ],
                        [
                            '심부름을 시키다',
                            '부탁하다'
                        ]
                    ],
                    video: [
                        'sub2-5-1',
                        'sub2-5-2'
                    ],
                    use: [
                        '여름이는 스테이크랑 아이스크림을 시켜요.<br><br>배가 너무 고파서 미리 음식을 주문해요.',
                        '엄마가 여름이에게 심부름을 시켜요.<br><br>아빠는 나에게 리모컨을 가져오라고 시켜요.'
                    ]
                },
                '6': {
                    title: '가다',
                    list: [
                        [
                            '장소에 가다',
                            '이동하다'
                        ],
                        [
                            '전기가 가다',
                            '정전'
                        ],
                        [
                            '맛이 가다',
                            '상하다',
                            '쉬다'
                        ],
                        [
                            '정이 가다'
                        ],
                        [
                            '주름이 가다',
                            '주름이 생기다',
                            '늙다'
                        ],
                        [
                            '몸에 무리가 가다'
                        ],
                        [
                            '시간이 가다',
                            '흐르다'
                        ],
                    ],
                    video: [
                        'sub2-6-1',
                        'sub2-6-2',
                        'sub2-6-3',
                        'sub2-6-4',
                        'sub2-6-5',
                        'sub2-6-6',
                        'sub2-6-7',
                    ],
                    use: [
                        '가을이는 버스를 타고 가게 앞으로 가요.<br><br>할머니 댁에 가려면 버스를 타고 이동해야 해요.',
                        '갑자기 정전이 돼서 무서워요.<br><br>전기가 가서 너무 깜깜해요.',
                        '맛이 간 고기를 먹으면 배가 아파요.<br><br>날씨가 더우면 음식이 잘 상해요.',
                        '봄이는 집 앞에 있는 고양이에게 자꾸 정이 가요.<br><br>추운 날씨에 자꾸 마음이 가서 밥을 챙겨줘요.',
                        '나이가 들면 얼굴에 주름이 가요.<br><br>얼굴에 주름이 생기는 건 자연스러운 거예요.',
                        '보드를 타서 몸에 무리가 가요.<br><br>무거운 짐을 잘못 들면 몸에 무리가 가요.',
                        '겨울이는 게임이 재밌어서 시간이 빨리 가요.<br><br>오늘 혼자 집에 있으니까 시간이 느리게 흘러요.',
                    ]
                },
                '7': {
                    title: '찾다',
                    list: [
                        [
                            '길을 찾다',
                            '검색하다'
                        ],
                        [
                            '자신감을 찾다',
                            '회복하다'
                        ],
                        [
                            '돈을 찾다',
                            '인출하다',
                            '출금하다',
                            '현금을 뽑다'
                        ],
                        [
                            '범인을 찾다',
                            '밝혀내다',
                            '쫓다'
                        ],
                        [
                            '장소를 찾다',
                            '방문하다'
                        ]
                    ],
                    video: [
                        'sub2-7-1',
                        'sub2-7-2',
                        'sub2-7-3',
                        'sub2-7-4',
                        'sub2-7-5'
                    ],
                    use: [
                        '봄이는 핸드폰으로 길을 찾아요.<br><br>인터넷으로 식당가는 길을 검색해요.',
                        '봄이는 줄넘기를 열심히 연습해서 자신감을 찾아요.<br><br>봄이는 자신감을 회복하고, 줄넘기 대회에 나가요.',
                        '겨울이는 은행에서 돈을 찾아요.<br><br>여름이는 장난감을 사려고 돈을 출금해요.',
                        '경찰이 동네를 돌아다니며 도둑을 찾아요.<br><br>어제 산에 불을 낸 사람이 누구인지 밝혀내요.',
                        '코로나 검사를 하려고 보건소를 찾아요.<br><br>친구에게 택배를 보내려고 우체국을 방문해요.'
                    ]
                },
                '8': {
                    title: '다가오다',
                    list: [
                        [
                            '겨울이 다가오다',
                            '찾아오다'
                        ],
                        [
                            '수능이 다가오다',
                            '임박하다'
                        ],
                        [
                            '개가 다가오다',
                            '접근하다'
                        ]
                    ],
                    video: [
                        'sub2-8-1',
                        'sub2-8-2',
                        'sub2-8-3'
                    ],
                    use: [
                        '가울이 다가오면 나뭇잎이 떨어지기 시작해요.<br><br>봄이 지나고 이제 여름이 찾아와요.',
                        '100일만 지나면 이제 수능이 다가와요.<br><br>여름 방학이 임박해서 기분이 좋아요.',
                        '강아지가 가을이에게 다가와요.<br><br>동생이 같이 놀자고 나에게 접근해요.'
                    ]
                },
                '9': {
                    title: '생각하다',
                    list: [
                        [
                            '어린 시절을 생각하다',
                            '기억하다',
                            '추억하다',
                            '떠올리다'
                        ],
                        [
                            '원인을 생각하다',
                            '고민하다'
                        ],
                        [
                            '대회에 나가려고 생각하다',
                            '결심하다',
                            '마음먹다'
                        ]
                    ],
                    video: [
                        'sub2-9-1',
                        'sub2-9-2',
                        'sub2-9-3'
                    ],
                    use: [
                        '경찰이 된 가을이는 어렸을 때를 생각해요.<br><br>나는 가끔 바다에 놀러 갔던 일을 떠올려요.',
                        '겨울이는 자전거 바퀴에 구멍이 난 이유를 생각해요.<br><br>나는 동생이 우는 이유가 무엇인지 고민해요.',
                        '가을이는 피아노 대회에 나가려고 생각해요.<br><br>나는 이제 숙제를 열심히 하기로 결심해요.'
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
            return `${require(`../../../assets/video/talk/sub2/${_fileName}`)}`;
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