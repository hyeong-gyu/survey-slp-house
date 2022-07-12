<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-md slp-nav">
            <a class="navbar-brand" href="/">
                <img src="@/assets/images/logo.jpg" alt="">
            </a>
            <div class="slp-shop">
                <a href="https://smartstore.naver.com/slphouse2013" target="_blank" title="새창 열림">
                    <i class="bi bi-shop-window"></i>
                    <span>스토어 바로가기</span>
                </a>
            </div>
        </div>
    </nav>
    <router-view />
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
    .navbar {
        background-color: #fff;
        box-shadow: 0px -36px 40px 0px #000;
    }

    .navbar .container-md.slp-nav {
        position: relative;
        flex-flow: column;
    }

    .navbar-brand {
        margin-right: 0;
    }

    .navbar-brand {
        display: block;
        width: 10rem;
    }

    .navbar-brand img {
        width: 100%;
    }

    .slp-shop {
        position: absolute;
        top: 8px;
        right: 45px;
    }

    .slp-shop a {
        font-size: 18px;
        text-decoration: none;
        color: #1c3242;
    }

    .slp-shop a span {
        margin-left: 5px;
        font-size: 16px;
        line-height: 100%;
    }

    .slp-shop a:hover {
        color: #35a3ed;
    }
</style>
