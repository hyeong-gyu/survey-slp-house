<template>
    <div class="container-md main-gen">
        <h2>우리같이 대화기술 활용편</h2>
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-hwa-tab" data-bs-toggle="tab" data-bs-target="#nav-hwa" type="button" role="tab" aria-controls="nav-home" aria-selected="true">화행</button>
                <button class="nav-link" id="nav-start-tab" data-bs-toggle="tab" data-bs-target="#nav-start" type="button" role="tab" aria-controls="nav-start" aria-selected="false">주제 개시</button>
                <button class="nav-link" id="nav-maintenance-tab" data-bs-toggle="tab" data-bs-target="#nav-maintenance" type="button" role="tab" aria-controls="nav-maintenance" aria-selected="false">주제 유지</button>
                <button class="nav-link" id="nav-change-tab" data-bs-toggle="tab" data-bs-target="#nav-change" type="button" role="tab" aria-controls="nav-change" aria-selected="false">주제 변경</button>
            </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-hwa" role="tabpanel" aria-labelledby="nav-hwa-tab">
                <h3>이 친구에게 어떻게 말해야 할까요?</h3>
                <div class="video-tab-content d-flex align-items-start">
                    <div class="video-box tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-hello1" role="tabpanel" aria-labelledby="v-pills-hello1-tab">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/behavior/1.인사1.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-pills-hello2" role="tabpanel" aria-labelledby="v-pills-hello2-tab">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/behavior/2.인사2.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-pills-hello3" role="tabpanel" aria-labelledby="v-pills-hello3-tab">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/behavior/3.인사3.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-pills-material1" role="tabpanel" aria-labelledby="v-pills-material1-tab">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/behavior/4.준비물1.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-pills-material2" role="tabpanel" aria-labelledby="v-pills-material2-tab">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/behavior/5.준비물2.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-pills-tease" role="tabpanel" aria-labelledby="v-pills-tease">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/behavior/6.놀리는형규.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-pills-mad" role="tabpanel" aria-labelledby="v-pills-mad">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/behavior/7.화난하은.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-pills-ignoring" role="tabpanel" aria-labelledby="v-pills-ignoring">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/behavior/8.무시해요.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-pills-cutin" role="tabpanel" aria-labelledby="v-pills-cutin">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/behavior/9.끼어들어요.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-pills-oppose" role="tabpanel" aria-labelledby="v-pills-oppose">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/behavior/10.반대하는형규.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-pills-dirty1" role="tabpanel" aria-labelledby="v-pills-dirty1">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/behavior/11.더러운치호.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-pills-dirty2" role="tabpanel" aria-labelledby="v-pills-dirty2">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/behavior/12.더러운형규.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-pills-excited" role="tabpanel" aria-labelledby="v-pills-excited">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/behavior/13.신난하은이.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-pills-perm" role="tabpanel" aria-labelledby="v-pills-perm">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/behavior/14.파마한은정.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>
                    <div class="video-category nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button class="nav-link active" @click="tabVideo" id="v-pills-hello1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-hello1" type="button" role="tab" aria-controls="v-pills-hello1" aria-selected="true">인사 1</button>
                        <button class="nav-link" @click="tabVideo" id="v-pills-hello2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-hello2" type="button" role="tab" aria-controls="v-pills-hello2" aria-selected="false">인사 2</button>
                        <button class="nav-link" @click="tabVideo" id="v-pills-hello3-tab" data-bs-toggle="pill" data-bs-target="#v-pills-hello3" type="button" role="tab" aria-controls="v-pills-hello3" aria-selected="false">인사 3</button>
                        <button class="nav-link" @click="tabVideo" id="v-pills-material1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-material1" type="button" role="tab" aria-controls="v-pills-material1" aria-selected="false">준비물 1</button>
                        <button class="nav-link" @click="tabVideo" id="v-pills-material2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-material2" type="button" role="tab" aria-controls="v-pills-material2" aria-selected="false">준비물 2</button>
                        <button class="nav-link" @click="tabVideo" id="v-pills-tease-tab" data-bs-toggle="pill" data-bs-target="#v-pills-tease" type="button" role="tab" aria-controls="v-pills-tease" aria-selected="false">놀리는 형규</button>
                        <button class="nav-link" @click="tabVideo" id="v-pills-mad-tab" data-bs-toggle="pill" data-bs-target="#v-pills-mad" type="button" role="tab" aria-controls="v-pills-mad" aria-selected="false">화난 하은</button>
                        <button class="nav-link" @click="tabVideo" id="v-pills-ignoring-tab" data-bs-toggle="pill" data-bs-target="#v-pills-ignoring" type="button" role="tab" aria-controls="v-pills-ignoring" aria-selected="false">무시해요</button>
                        <button class="nav-link" @click="tabVideo" id="v-pills-cutin-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cutin" type="button" role="tab" aria-controls="v-pills-cutin" aria-selected="false">끼어들어요</button>
                        <button class="nav-link" @click="tabVideo" id="v-pills-oppose-tab" data-bs-toggle="pill" data-bs-target="#v-pills-oppose" type="button" role="tab" aria-controls="v-pills-oppose" aria-selected="false">반대하는 형규</button>
                        <button class="nav-link" @click="tabVideo" id="v-pills-dirty1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-dirty1" type="button" role="tab" aria-controls="v-pills-dirty1" aria-selected="false">더러운 치호</button>
                        <button class="nav-link" @click="tabVideo" id="v-pills-dirty2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-dirty2" type="button" role="tab" aria-controls="v-pills-dirty2" aria-selected="false">더러운 형규</button>
                        <button class="nav-link" @click="tabVideo" id="v-pills-excited-tab" data-bs-toggle="pill" data-bs-target="#v-pills-excited" type="button" role="tab" aria-controls="v-pills-excited" aria-selected="false">신난 하은이</button>
                        <button class="nav-link" @click="tabVideo" id="v-pills-perm-tab" data-bs-toggle="pill" data-bs-target="#v-pills-perm" type="button" role="tab" aria-controls="v-pills-perm" aria-selected="false">파마한 은정</button>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-start" role="tabpanel" aria-labelledby="nav-start-tab">
                <h3>이 친구에게 어떻게 말을 걸까요?</h3>
                <div class="video-tab-content d-flex align-items-start">
                    <div class="video-box tab-content" id="v-topic-tabContent">
                        <div class="tab-pane fade show active" id="v-topic-hello1" role="tabpanel" aria-labelledby="v-topic-hello1-tab">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/topic/1.예쁜은정_주제개시_.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-topic-hello2" role="tabpanel" aria-labelledby="v-topic-hello2-tab">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/topic/2.100점_주제개시_.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-topic-hello3" role="tabpanel" aria-labelledby="v-topic-hello3-tab">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/topic/3.우는민영_주제개시_.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-topic-material1" role="tabpanel" aria-labelledby="v-topic-material1-tab">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/topic/4.공룡좋아해_주제개시_.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-topic-material2" role="tabpanel" aria-labelledby="v-topic-material2-tab">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/topic/5.슬픈형규_주제개시_.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-topic-tease" role="tabpanel" aria-labelledby="v-topic-tease">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/topic/6.벌_주제개시_.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-topic-mad" role="tabpanel" aria-labelledby="v-topic-mad">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/topic/7.점심시간_주제개시_.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-topic-ignoring" role="tabpanel" aria-labelledby="v-topic-ignoring">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/topic/8.생일_주제개시_.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-topic-cutin" role="tabpanel" aria-labelledby="v-topic-cutin">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/topic/9.시험_주제개시_.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-topic-oppose" role="tabpanel" aria-labelledby="v-topic-oppose">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/topic/10.여행_주제개시_.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-topic-dirty1" role="tabpanel" aria-labelledby="v-topic-dirty1">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/topic/11.아픈하은_주제개시_.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>
                    <div class="video-category nav flex-column nav-pills" id="v-topic-tab" role="tablist" aria-orientation="vertical">
                        <button class="nav-link active" @click="tabVideo" id="v-topic-hello1-tab" data-bs-toggle="pill" data-bs-target="#v-topic-hello1" type="button" role="tab" aria-controls="v-topic-hello1" aria-selected="true">예쁜 은정</button>
                        <button class="nav-link" @click="tabVideo" id="v-topic-hello2-tab" data-bs-toggle="pill" data-bs-target="#v-topic-hello2" type="button" role="tab" aria-controls="v-topic-hello2" aria-selected="false">100점</button>
                        <button class="nav-link" @click="tabVideo" id="v-topic-hello3-tab" data-bs-toggle="pill" data-bs-target="#v-topic-hello3" type="button" role="tab" aria-controls="v-topic-hello3" aria-selected="false">우는 민영</button>
                        <button class="nav-link" @click="tabVideo" id="v-topic-material1-tab" data-bs-toggle="pill" data-bs-target="#v-topic-material1" type="button" role="tab" aria-controls="v-topic-material1" aria-selected="false">공룡 좋아해</button>
                        <button class="nav-link" @click="tabVideo" id="v-topic-material2-tab" data-bs-toggle="pill" data-bs-target="#v-topic-material2" type="button" role="tab" aria-controls="v-topic-material2" aria-selected="false">슬픈 형규</button>
                        <button class="nav-link" @click="tabVideo" id="v-topic-tease-tab" data-bs-toggle="pill" data-bs-target="#v-topic-tease" type="button" role="tab" aria-controls="v-topic-tease" aria-selected="false">벌</button>
                        <button class="nav-link" @click="tabVideo" id="v-topic-mad-tab" data-bs-toggle="pill" data-bs-target="#v-topic-mad" type="button" role="tab" aria-controls="v-topic-mad" aria-selected="false">점심 시간</button>
                        <button class="nav-link" @click="tabVideo" id="v-topic-ignoring-tab" data-bs-toggle="pill" data-bs-target="#v-topic-ignoring" type="button" role="tab" aria-controls="v-topic-ignoring" aria-selected="false">생일</button>
                        <button class="nav-link" @click="tabVideo" id="v-topic-cutin-tab" data-bs-toggle="pill" data-bs-target="#v-topic-cutin" type="button" role="tab" aria-controls="v-topic-cutin" aria-selected="false">시험</button>
                        <button class="nav-link" @click="tabVideo" id="v-topic-oppose-tab" data-bs-toggle="pill" data-bs-target="#v-topic-oppose" type="button" role="tab" aria-controls="v-topic-oppose" aria-selected="false">여행</button>
                        <button class="nav-link" @click="tabVideo" id="v-topic-dirty1-tab" data-bs-toggle="pill" data-bs-target="#v-topic-dirty1" type="button" role="tab" aria-controls="v-topic-dirty1" aria-selected="false">아픈 하은</button>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade maintain-tab" id="nav-maintenance" role="tabpanel" aria-labelledby="nav-maintenance-tab">
                <div class="title-box">
                    <h3>대화를 이끌어 가보세요.</h3>
                    <div class="clue-box">
                        <label class="form-check-label clue-inp" for="clue-checkbox"><i class="bi bi-lightbulb-off"></i>단서</label>
                        <input class="form-check-input" type="checkbox" id="clue-checkbox" @input="clueInput" style="visibility: hidden;">
                    </div>
                </div>
                <div class="video-tab-content d-flex align-items-start">
                    <div class="video-box tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-maintain-hello1" role="tabpanel" aria-labelledby="v-maintain-hello1-tab">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/maintain/1.싸움_주제유지_-정보요청-단서없음.mp4" type="video/mp4">
                            </video>
                            <video class="gen-video" controlsList="nodownload" controls data-role="clue">
                                <source src="@/assets/video/maintain/1.싸움_주제유지_-정보요청-단서있음.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-maintain-hello2" role="tabpanel" aria-labelledby="v-maintain-hello2-tab">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/maintain/2.싸움_주제유지_-반응하기-단서없음.mp4" type="video/mp4">
                            </video>
                            <video class="gen-video" controlsList="nodownload" controls data-role="clue">
                                <source src="@/assets/video/maintain/2.싸움_주제유지_-반응하기-단서있음.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-maintain-hello3" role="tabpanel" aria-labelledby="v-maintain-hello3-tab">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/maintain/3.싸움_주제유지_-진술_언급하기-단서없음.mp4" type="video/mp4">
                            </video>
                            <video class="gen-video" controlsList="nodownload" controls data-role="clue">
                                <source src="@/assets/video/maintain/3.싸움_주제유지_-진술_언급하기-단서있음.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-maintain-material1" role="tabpanel" aria-labelledby="v-maintain-material1-tab">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/maintain/4.싸움_주제유지_-통합-단서없음.mp4" type="video/mp4">
                            </video>
                            <video class="gen-video" controlsList="nodownload" controls data-role="clue">
                                <source src="@/assets/video/maintain/4.싸움_주제유지_-통합-단서있음.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-maintain-material2" role="tabpanel" aria-labelledby="v-maintain-material2-tab">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/maintain/5.게임_주제유지_-정보요청-단서없음.mp4" type="video/mp4">
                            </video>
                            <video class="gen-video" controlsList="nodownload" controls data-role="clue">
                                <source src="@/assets/video/maintain/5.게임_주제유지_-정보요청-단서있음.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-maintain-tease" role="tabpanel" aria-labelledby="v-maintain-tease">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/maintain/6.게임_주제유지_-반응하기-단서없음.mp4" type="video/mp4">
                            </video>
                            <video class="gen-video" controlsList="nodownload" controls data-role="clue">
                                <source src="@/assets/video/maintain/6.게임_주제유지_-반응하기-단서있음.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-maintain-mad" role="tabpanel" aria-labelledby="v-maintain-mad">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/maintain/7.게임_주제유지_-진술_언급하기-단서없음.mp4" type="video/mp4">
                            </video>
                            <video class="gen-video" controlsList="nodownload" controls data-role="clue">
                                <source src="@/assets/video/maintain/7.게임_주제유지_-진술_언급하기-단서있음.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-maintain-ignoring" role="tabpanel" aria-labelledby="v-maintain-ignoring">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/maintain/8.게임_주제유지_-통합-단서없음.mp4" type="video/mp4">
                            </video>
                            <video class="gen-video" controlsList="nodownload" controls data-role="clue">
                                <source src="@/assets/video/maintain/8.게임_주제유지_-통합-단서있음.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-maintain-cutin" role="tabpanel" aria-labelledby="v-maintain-cutin">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/maintain/9.동물원_주제유지_-정보요청-단서없음.mp4" type="video/mp4">
                            </video>
                            <video class="gen-video" controlsList="nodownload" controls data-role="clue">
                                <source src="@/assets/video/maintain/9.-동물원_주제유지_-정보요청-단서있음.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-maintain-oppose" role="tabpanel" aria-labelledby="v-maintain-oppose">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/maintain/10.동물원_주제유지_-반응하기-단서없음.mp4" type="video/mp4">
                            </video>
                            <video class="gen-video" controlsList="nodownload" controls data-role="clue">
                                <source src="@/assets/video/maintain/10.동물원_주제유지-반응하기-단서있음.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-maintain-dirty1" role="tabpanel" aria-labelledby="v-maintain-dirty1">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/maintain/11.-동물원_주제유지_-진술언급하기-단서있음.mp4" type="video/mp4">
                            </video>
                            <video class="gen-video" controlsList="nodownload" controls data-role="clue">
                                <source src="@/assets/video/maintain/11.-동뭘원_주제유지-진술언급하기-단서없음.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-maintain-dirty2" role="tabpanel" aria-labelledby="v-maintain-dirty2">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/maintain/12.동물원_주제유지_-통합-단서없음.mp4" type="video/mp4">
                            </video>
                            <video class="gen-video" controlsList="nodownload" controls data-role="clue">
                                <source src="@/assets/video/maintain/12.동물원_주제유지_-통합-단서있음.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-maintain-excited" role="tabpanel" aria-labelledby="v-maintain-excited">
                            <video class="gen-video show" controlsList="nodownload" controls>
                                <source src="@/assets/video/maintain/13.말해요1_주제유지_.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-maintain-perm" role="tabpanel" aria-labelledby="v-maintain-perm">
                            <video class="gen-video show" controlsList="nodownload" controls>
                                <source src="@/assets/video/maintain/14.말해요2_주제유지_.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>
                    <div class="video-category nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button class="nav-link active" @click="tabVideo" id="v-maintain-hello1-tab" data-bs-toggle="pill" data-bs-target="#v-maintain-hello1" type="button" role="tab" aria-controls="v-maintain-hello1" aria-selected="true">싸움(정보요청)</button>
                        <button class="nav-link" @click="tabVideo" id="v-maintain-hello2-tab" data-bs-toggle="pill" data-bs-target="#v-maintain-hello2" type="button" role="tab" aria-controls="v-maintain-hello2" aria-selected="false">싸움(반응)</button>
                        <button class="nav-link" @click="tabVideo" id="v-maintain-hello3-tab" data-bs-toggle="pill" data-bs-target="#v-maintain-hello3" type="button" role="tab" aria-controls="v-maintain-hello3" aria-selected="false">싸움(진술/언급)</button>
                        <button class="nav-link" @click="tabVideo" id="v-maintain-material1-tab" data-bs-toggle="pill" data-bs-target="#v-maintain-material1" type="button" role="tab" aria-controls="v-maintain-material1" aria-selected="false">싸움(통합)</button>
                        <button class="nav-link" @click="tabVideo" id="v-maintain-material2-tab" data-bs-toggle="pill" data-bs-target="#v-maintain-material2" type="button" role="tab" aria-controls="v-maintain-material2" aria-selected="false">게임(정보요청)</button>
                        <button class="nav-link" @click="tabVideo" id="v-maintain-tease-tab" data-bs-toggle="pill" data-bs-target="#v-maintain-tease" type="button" role="tab" aria-controls="v-maintain-tease" aria-selected="false">게임(반응)</button>
                        <button class="nav-link" @click="tabVideo" id="v-maintain-mad-tab" data-bs-toggle="pill" data-bs-target="#v-maintain-mad" type="button" role="tab" aria-controls="v-maintain-mad" aria-selected="false">게임(진술/언급)</button>
                        <button class="nav-link" @click="tabVideo" id="v-maintain-ignoring-tab" data-bs-toggle="pill" data-bs-target="#v-maintain-ignoring" type="button" role="tab" aria-controls="v-maintain-ignoring" aria-selected="false">게임(통합)</button>
                        <button class="nav-link" @click="tabVideo" id="v-maintain-cutin-tab" data-bs-toggle="pill" data-bs-target="#v-maintain-cutin" type="button" role="tab" aria-controls="v-maintain-cutin" aria-selected="false">동물원(정보요청)</button>
                        <button class="nav-link" @click="tabVideo" id="v-maintain-oppose-tab" data-bs-toggle="pill" data-bs-target="#v-maintain-oppose" type="button" role="tab" aria-controls="v-maintain-oppose" aria-selected="false">동물원(반응)</button>
                        <button class="nav-link" @click="tabVideo" id="v-maintain-dirty1-tab" data-bs-toggle="pill" data-bs-target="#v-maintain-dirty1" type="button" role="tab" aria-controls="v-maintain-dirty1" aria-selected="false">동물원(진술/언급)</button>
                        <button class="nav-link" @click="tabVideo" id="v-maintain-dirty2-tab" data-bs-toggle="pill" data-bs-target="#v-maintain-dirty2" type="button" role="tab" aria-controls="v-maintain-dirty2" aria-selected="false">동물원(통합)</button>
                        <button class="nav-link" @click="tabVideo" id="v-maintain-excited-tab" data-bs-toggle="pill" data-bs-target="#v-maintain-excited" type="button" role="tab" aria-controls="v-maintain-excited" aria-selected="false">말해요1</button>
                        <button class="nav-link" @click="tabVideo" id="v-maintain-perm-tab" data-bs-toggle="pill" data-bs-target="#v-maintain-perm" type="button" role="tab" aria-controls="v-maintain-perm" aria-selected="false">말해요2</button>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-change" role="tabpanel" aria-labelledby="nav-change-tab">
                <h3>이 친구에게 어떻게 말을 걸까요?</h3>
                <div class="video-tab-content d-flex align-items-start">
                    <div class="video-box tab-content" id="v-topic-tabContent">
                        <div class="tab-pane fade show active" id="v-subject-hello1" role="tabpanel" aria-labelledby="v-subject-hello1-tab">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/subject/15.지루해_주제변경_.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-subject-hello2" role="tabpanel" aria-labelledby="v-subject-hello2-tab">
                            <video class="gen-video" controlsList="nodownload" controls>
                                <source src="@/assets/video/subject/16.무서워_주제변경_.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>
                    <div class="video-category nav flex-column nav-pills" id="v-subject-tab" role="tablist" aria-orientation="vertical">
                        <button class="nav-link active" @click="tabVideo" id="v-subject-hello1-tab" data-bs-toggle="pill" data-bs-target="#v-subject-hello1" type="button" role="tab" aria-controls="v-subject-hello1" aria-selected="true">지루해</button>
                        <button class="nav-link" @click="tabVideo" id="v-subject-hello2-tab" data-bs-toggle="pill" data-bs-target="#v-subject-hello2" type="button" role="tab" aria-controls="v-subject-hello2" aria-selected="false">무서워</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GenMain',
    beforeMount() {
        if (this.$cookie.getCookie('gen-token') === null) this.$router.push('/');  
    },
    methods: {
        tabVideo() {
            [].forEach.call(document.querySelectorAll('video'), (video) => {
                if (!video.paused) {
                    video.currentTime = 0;
                    video.pause();
                }
            });
        },
        clueInput(e) {
            if (e.target.checked) {
                document.querySelector('.maintain-tab').classList.add('clue')
                document.querySelector('.clue-inp i').classList.add('bi-lightbulb');
                document.querySelector('.clue-inp i').classList.remove('bi-lightbulb-off');
            } else{
                document.querySelector('.maintain-tab').classList.remove('clue');
                document.querySelector('.clue-inp i').classList.add('bi-lightbulb-off')
                document.querySelector('.clue-inp i').classList.remove('bi-lightbulb')
            }
            this.tabVideo();
        }
    },
}
</script>

<style scoped>
    .main-gen h2 {
        padding: 60px 0;
        text-align: center;
    }

    .main-gen .nav-link.active {
        color: dodgerblue;
    }

    .main-gen > .tab-content {
        margin-top: 60px;
    }

    .main-gen > .tab-content h3 {
        padding: 20px 0 10px;
    }

    .main-gen .tab-content .nav-link.active {
        color: #fff;
    }

    .main-gen .tab-content .video-tab-content {
        justify-content: space-between;
    }

    .main-gen .tab-content .video-tab-content .video-box {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 650px;
        box-sizing: border-box;
        border: 1px solid #eee;
    }

    .main-gen .tab-content .video-tab-content .video-box .tab-pane {
        text-align: center;
    }

    .main-gen .tab-content .video-tab-content .video-box .tab-pane .gen-video {
        min-width: 850px;
        margin-top: 5px;
    }

    .main-gen .tab-content .maintain-tab .title-box {
        display: flex;
        justify-content: space-between;
    }

    .main-gen .tab-content .maintain-tab h3 {
        display: inline-block;
    }

    .main-gen .tab-content .maintain-tab .clue-box {
        display: inline-block;
        padding-top: 20px;
        font-size: 26px;
    }

    .main-gen .tab-content .maintain-tab .gen-video[data-role="clue"] {
        display: none;
    }

    .main-gen .tab-content .maintain-tab.clue .gen-video {
        display: none;
    }

    .main-gen .tab-content .maintain-tab.clue .gen-video[data-role="clue"] {
        display: inline-block;
    }

    .gen-video.show {
        display: inline-block !important;
    }

    .main-gen .tab-content .video-tab-content .video-category button {
        text-align: left;
        border-radius: 0;
    }

    .main-gen .tab-content .video-tab-content .video-category {
        flex-basis: 12%;
        font-size: 14px;
    }

    .video-js {
        margin: 0 auto;
    }
    
    @media (max-width: 1200px) {
        .main-gen .tab-content .video-tab-content .video-box {
            width: auto;
            flex-basis: 87%;
            height: 54.1666vw;
            min-height: auto;
        }

        .main-gen .tab-content .video-tab-content .video-box .tab-pane .gen-video {
            width: 65vw;
            min-width: auto;
            height: 48.7555vw;
            margin-top: 0;
        }

        .main-gen .tab-content .video-tab-content .video-category {
            flex-basis: 13%;
        }
    }

    @media (max-width: 991px) {
        .main-gen .tab-content .video-tab-content .video-box {
            flex-basis: 80%;
            height: 52.1666vw;
            min-height: auto;
        }

        .main-gen .tab-content .video-tab-content .video-box .tab-pane .gen-video {
            width: 55vw;
            height: 41.2222vw;
            margin-top: 0px;
        }

        .main-gen .tab-content .video-tab-content .video-category {
            flex-basis: 20%;
        }
    }
</style>