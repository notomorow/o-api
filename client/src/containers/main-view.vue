<template>
<main>
    <ApisTable></ApisTable>
    <ApiInfoCard></ApiInfoCard>
</main>
</template>

<script>
import ApisTable from './apis-table'
import ApiInfoCard from './api-info-card'

export default {
    name: 'login-card',
    components: {
        ApisTable,
        ApiInfoCard
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
