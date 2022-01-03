<template>
    <div class="container-md main-gen">
        <h2>우리같이 활용편</h2>
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
                <div class="video-tab-content d-flex align-items-start">
                    <div class="video-box tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-hello1" role="tabpanel" aria-labelledby="v-pills-hello1-tab">
                            <video class="gen-video" controls>
                                <source src="@/assets/video/behavior/1.인사1.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-pills-hello2" role="tabpanel" aria-labelledby="v-pills-hello2-tab">
                            <video class="gen-video" controls>
                                <source src="@/assets/video/behavior/2.인사2.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-pills-hello3" role="tabpanel" aria-labelledby="v-pills-hello3-tab">
                            <video class="gen-video" controls>
                                <source src="@/assets/video/behavior/3.인사3.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-pills-material1" role="tabpanel" aria-labelledby="v-pills-material1-tab">
                            <video class="gen-video" controls>
                                <source src="@/assets/video/behavior/4.준비물1.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-pills-material2" role="tabpanel" aria-labelledby="v-pills-material2-tab">
                            <video class="gen-video" controls>
                                <source src="@/assets/video/behavior/5.준비물2.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-pills-tease" role="tabpanel" aria-labelledby="v-pills-tease">
                            <video class="gen-video" controls>
                                <source src="@/assets/video/behavior/6.놀리는형규.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-pills-mad" role="tabpanel" aria-labelledby="v-pills-mad">
                            <video class="gen-video" controls>
                                <source src="@/assets/video/behavior/7.화난하은.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-pills-ignoring" role="tabpanel" aria-labelledby="v-pills-ignoring">
                            <video class="gen-video" controls>
                                <source src="@/assets/video/behavior/8.무시해요.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-pills-cutin" role="tabpanel" aria-labelledby="v-pills-cutin">
                            <video class="gen-video" controls>
                                <source src="@/assets/video/behavior/9.끼어들어요.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-pills-oppose" role="tabpanel" aria-labelledby="v-pills-oppose">
                            <video class="gen-video" controls>
                                <source src="@/assets/video/behavior/10.반대하는형규.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-pills-dirty1" role="tabpanel" aria-labelledby="v-pills-dirty1">
                            <video class="gen-video" controls>
                                <source src="@/assets/video/behavior/11.더러운치호.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-pills-dirty2" role="tabpanel" aria-labelledby="v-pills-dirty2">
                            <video class="gen-video" controls>
                                <source src="@/assets/video/behavior/12.더러운형규.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-pills-excited" role="tabpanel" aria-labelledby="v-pills-excited">
                            <video class="gen-video" controls>
                                <source src="@/assets/video/behavior/13.신난하은이.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="tab-pane fade" id="v-pills-perm" role="tabpanel" aria-labelledby="v-pills-perm">
                            <video class="gen-video" controls>
                                <source src="@/assets/video/behavior/14.파마한은정.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>
                    <div class="video-category nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button class="nav-link active" id="v-pills-hello1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-hello1" type="button" role="tab" aria-controls="v-pills-hello1" aria-selected="true">인사 1</button>
                        <button class="nav-link" id="v-pills-hello2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-hello2" type="button" role="tab" aria-controls="v-pills-hello2" aria-selected="false">인사 2</button>
                        <button class="nav-link" id="v-pills-hello3-tab" data-bs-toggle="pill" data-bs-target="#v-pills-hello3" type="button" role="tab" aria-controls="v-pills-hello3" aria-selected="false">인사 3</button>
                        <button class="nav-link" id="v-pills-material1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-material1" type="button" role="tab" aria-controls="v-pills-material1" aria-selected="false">준비물 1</button>
                        <button class="nav-link" id="v-pills-material2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-material2" type="button" role="tab" aria-controls="v-pills-material2" aria-selected="false">준비물 2</button>
                        <button class="nav-link" id="v-pills-tease-tab" data-bs-toggle="pill" data-bs-target="#v-pills-tease" type="button" role="tab" aria-controls="v-pills-tease" aria-selected="false">놀리는 형규</button>
                        <button class="nav-link" id="v-pills-mad-tab" data-bs-toggle="pill" data-bs-target="#v-pills-mad" type="button" role="tab" aria-controls="v-pills-mad" aria-selected="false">화난 하은</button>
                        <button class="nav-link" id="v-pills-ignoring-tab" data-bs-toggle="pill" data-bs-target="#v-pills-ignoring" type="button" role="tab" aria-controls="v-pills-ignoring" aria-selected="false">무시해요</button>
                        <button class="nav-link" id="v-pills-cutin-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cutin" type="button" role="tab" aria-controls="v-pills-cutin" aria-selected="false">끼어들어요</button>
                        <button class="nav-link" id="v-pills-oppose-tab" data-bs-toggle="pill" data-bs-target="#v-pills-oppose" type="button" role="tab" aria-controls="v-pills-oppose" aria-selected="false">반대하는 형규</button>
                        <button class="nav-link" id="v-pills-dirty1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-dirty1" type="button" role="tab" aria-controls="v-pills-dirty1" aria-selected="false">더러운 치호</button>
                        <button class="nav-link" id="v-pills-dirty2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-dirty2" type="button" role="tab" aria-controls="v-pills-dirty2" aria-selected="false">더러운 형규</button>
                        <button class="nav-link" id="v-pills-perm-tab" data-bs-toggle="pill" data-bs-target="#v-pills-perm" type="button" role="tab" aria-controls="v-pills-perm" aria-selected="false">파마한 은정</button>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-start" role="tabpanel" aria-labelledby="nav-start-tab">

            </div>
            <div class="tab-pane fade" id="nav-maintenance" role="tabpanel" aria-labelledby="nav-maintenance-tab">

            </div>
            <div class="tab-pane fade" id="nav-change" role="tabpanel" aria-labelledby="nav-change-tab">

            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'GenMain',
    
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
        margin-top: 100px;
    }

    .main-gen .tab-content .nav-link.active {
        color: #fff;
    }

    .main-gen .tab-content .video-tab-content {
        justify-content: space-between;
    }

    .main-gen .tab-content .video-tab-content .video-box {
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

    .main-gen .tab-content .video-tab-content .video-category button {
        text-align: left;
        border-radius: 0;
    }

    .main-gen .tab-content .video-tab-content .video-category {
        flex-basis: 12%;
        font-size: 14px;
    }
</style>