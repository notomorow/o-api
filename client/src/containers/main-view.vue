<template>
    <div>
        
    </div>
</template>

<script>
export default {
    name: 'login-card',
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

<style>
</style>
