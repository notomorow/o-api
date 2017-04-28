<template>
    <div class="app">
        <div class="bg" ref="bg"></div>
        <LoginCard></LoginCard>
    </div>
</template>

<script>
import axios from 'axios'
import LoginCard from '@/containers/login-card'

export default {
    components: {
        LoginCard
    },
    data() {
        return {
            isLogin: false
        }
    },
    methods: {
        login() {
            // axios.post()
        }
    },
    created() {
        axios.get('https://ouyancey.cn/api/bing_daily_pic_url')
            .then((res) => {
                this.$refs.bg.style.backgroundImage = `url(${res.data[0].url}`
                this.$refs.bg.style.opacity = 0.8
            })
    }
}
</script>

<style>
html,
body,
.app {
    margin: 0;
    height: 100%;
    overflow: hidden;
}
.app {
    display: flex;
    flex-direction: column;
}
.bg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;

    background-position: center;
    transition: 3s;
    opacity: 0;
}
</style>
