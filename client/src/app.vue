<template>
    <div class="app">
        <div class="bg" ref="bg"></div>
        <transition name="fade" mode="out-in">
            <LoginCard v-if="!isLogin"></LoginCard>
            <main v-if="isLogin">
                <ApisTable></ApisTable>
                <MainView></MainView>
            </main>
        </transition>
    </div>
</template>

<script>
import LoginCard from '@/containers/login-card'
import MainView from '@/containers/main-view'
import ApisTable from '@/containers/apis-table'

export default {
    components: {
        LoginCard,
        MainView,
        ApisTable
    },
    computed: {
        isLogin() {
            return this.$store.state.isLogin
        }
    },
    methods: {},
    created() {
        this.$store.dispatch('获取必应每日美图')
            .then((res) => {
                this.$store.commit('获取必应每日美图成功')
                this.$refs.bg.style.backgroundImage = `url(${res.data[0].url}`
                this.$refs.bg.style.opacity = 0.9
            })
        // this.$store.dispatch('登录', {
        //     username: '111',
        //     password: '123456'
        // })
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
main {
    flex: 1;
    margin: 20px;
    display: flex;
    justify-content: space-around;
}
</style>
