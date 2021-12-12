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
                        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            xxxxx
                        </div>
                        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
                    </div>
                    <div class="video-category nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
                        <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
                        <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
                        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
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

    .main-gen .tab-content .video-tab-content .video-category button {
        text-align: left;
        border-radius: 0;
    }
</style>