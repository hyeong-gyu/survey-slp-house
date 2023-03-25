<template>
    <div class="talk-box story-video-box">
        <video controlsList="nodownload" controls oncontextmenu='return false'>
            <source :src="_getUrl(`story_video.mp4`)" type="video/mp4">
        </video>
    </div>
    <div class="talk-text-box">
        <p class="talk-result">
            {{ videoTitle }}
        </p>
    </div>
</template>

<script>
export default {
    name: 'Story',
    props: {
        videoUrl: String,
        videoTitle: String
    },
    components: {

    },
    data() {
        return {
            currentIndex: 0,
        }
    },
    updated() {
        document.getElementsByClassName('talk-b-side')[0].classList.remove('b-show');
    },
    methods: {
        _getUrl(_fileName) {
            return `${require(`../../assets/video/talk/${this.videoUrl}/${_fileName}`)}`;
        },
    }
}
</script>

<style scoped>
    .story-video-box {
        gap: 0;
        width: 100%;
        padding: 5%;
        justify-content: center;
    }

    .story-video-box video {
        width: 720px;
        border-radius: 20px;
    }

    @media (max-width: 1440px) {
        .story-video-box {
            gap: 0;
        }

        .story-video-box video {
            width: 50vw;
            border-radius: 1.3888vw;
        }
    }
</style>