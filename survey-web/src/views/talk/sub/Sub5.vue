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
                        <Story v-if="page === 'story'" :videoUrl="'sub5'" :videoTitle="'무서운 꿈'" />
                        <Vocabulary v-if="page === 'vocabulary'" :selectData="selectData" ref="vocabSlide" :videoUrl="'sub5'" />
                        <Game v-if="page === 'game'" :selectData="selectData" :gameLangthData="[1,2,3,4]" :currentIndex="currentIndex" :imageUrl="'sub5'" ref="sentChildGame" />
                        <Sentence v-if="page === 'sentence'" :selectData="selectData" :sentData="sentData" :currentIndex="currentIndex" :imageUrl="'sub5'" ref="sentChild" />
                    </div>
                </div>
            </div>
            <div class="talk-b-side">
                <button type="button" class="btn-b-side-toggle" @click="_slideClick">
                    <img src="../../../assets/images/icon_direaction.svg" alt="" />
                </button>
                <ul>
                    <li>
                        <button type="button" data-role="1" @click="_listClick">소풍</button>
                    </li>
                    <li>
                        <button type="button" data-role="2" @click="_listClick">꿈</button>
                    </li>
                    <li>
                        <button type="button" data-role="3" @click="_listClick">꾸다</button>
                    </li>
                    <li>
                        <button type="button" data-role="4" @click="_listClick">무섭다</button>
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
    name: 'Sub5',
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
                2: 6,
                3: 9,
                4: 9
            },
            talkData: {
                '1': {
                    title: '소풍',
                    list: [
                        [
                            '현장학습',
                            '나들이'
                        ]
                    ],
                    video: [
                        'sub5-1'
                    ],
                    use: [
                        '오늘은 학교에서 소풍을 가는 날이에요.<br><br>가족들과 공원으로 나들이를 가요.'
                    ]
                },
                '2': {
                    title: '꿈',
                    list: [
                        [
                            '경찰관이 꿈이야',
                            '장래희망'
                        ],
                        [
                            '무서운 꿈을 꾸다'
                        ]
                    ],
                    video: [
                        'sub5-2-1',
                        'sub5-2-2'
                    ],
                    use: [
                        '가을이는 커서 경찰관이 되는 것이 꿈이에요.<br><br>나의 장래희망은 유튜버예요.',
                        '겨울이는 자주 무서운 꿈을 꿔요.<br><br>나는 피곤하면 밤에 악몽을 꿔요.'
                    ]
                },
                '3': {
                    title: '꾸다',
                    list: [
                        [
                            '무서운 꿈을 꾸다'
                        ],
                        [
                            '꿈을 꾸다',
                            '장래희망'
                        ],
                        [
                            '돈을 꾸다',
                            '빌리다'
                        ]
                    ],
                    video: [
                        'sub5-3-1',
                        'sub5-3-2',
                        'sub5-3-3'
                    ],
                    use: [
                        '가을이는 자면서 무서운 꿈을 꿔요.<br><br>귀신이 나오는 꿈을 꾸면 정말 무서워요.',
                        '나는 축구선수가 되는 꿈을 꿔요.<br><br>나는 아직 장래희망이 없어요.',
                        '겨울이가 여름이에게 돈을 꿔요.<br><br>나는 장난감을 사려고 동생한테 돈을 빌려요.'
                    ]
                },
                '4': {
                    title: '무섭다',
                    list: [
                        [
                            '두렵다',
                            '공포'
                        ],
                        [
                            '(비가) 무섭게 (내린다)',
                            '심하다',
                            '많이'
                        ],
                        [
                            '문을 열기 무섭게',
                            '곧바로'
                        ],
                        [
                            '무슨일이 일어날 까 무섭다',
                            '염려되다',
                            '걱정되다'
                        ]
                    ],
                    video: [
                        'sub5-4-1',
                        'sub5-4-2',
                        'sub5-4-3',
                        'sub5-4-4',
                    ],
                    use: [
                        '티비에서 갑자기 귀신이 나타나서 무서워요.<br><br>밤에 귀신이 나타날까 봐 두려워요.',
                        '여름이는 비가 무섭게 내려서 나가지 못해요.<br><br>저녁에 갑자기 비가 심하게 내려요.',
                        '문을 열기 무섭게 고양이가 도망가요.<br><br>교실 문이 열리자 곧바로 친구들이 뛰어나가요.',
                        '부모님은 여름이에게 무슨 일이 일어날까 무서워요.<br><br>친구가 학교에 나오지 못해 걱정돼요.',
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