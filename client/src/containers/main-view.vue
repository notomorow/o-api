<template>
<div class="main-view">
    <home v-if="route === 'home'"></home>
    <api-info-card v-if="route === 'api'"></api-info-card>
</div>
</template>

<script>
import Home from '@/containers/home'
import ApiInfoCard from '@/containers/api-info-card'

export default {
    components: {
        ApiInfoCard,
        Home
    },
    computed: {
        route() {
            return this.$store.state.route
        }
    }
}
</script>

<style scoped>
.main-view {
    height: 100%;
    width: 70%;
    padding: 10px;
    border: 1px solid #d7dde4;
    background: #f5f7f9;
}
</style>
