<template>
<main>
    <ApisTable></ApisTable>
    <ApiInfoView></ApiInfoView>
</main>
</template>

<script>
import ApisTable from './apis-table'
import ApiInfoView from './api-info-view'

export default {
    name: 'login-card',
    components: {
        ApisTable,
        ApiInfoView
    },
    data() {
        return {
            user: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            this.$store.dispatch('登录', this.user)
        }
    }
}
</script>

<style scoped>
main {
    flex: 1;
    margin: 20px;
    display: flex;
    justify-content: space-around;
}
</style>
