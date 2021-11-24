<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-md">
            <a class="navbar-brand" href="/">
                <img src="@/assets/images/logo.png" alt="">
            </a>
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

    .navbar .container-md {
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
</style>
