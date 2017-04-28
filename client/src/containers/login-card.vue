<template>
    <Card class="login-card">
        <h1>IAS</h1>
        <Input type="password" placeholder="姓名" v-model="login.username"></Input>
        <Input type="password" placeholder="密码" v-model="login.password"></Input>
        <Button type="primary" size="large" @click="login()">登录</Button>
    </Card>
</template>

<script>
export default {
    name: 'login-card',
    data() {
        return {
            login: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        login() {

        }
    }
}
</script>

<style scoped>
.login-card {
    width: 300px;
    top: 30%;

    align-self: center;
    text-align: center;
}
.login-card input {
    margin-bottom: 15px;
}
</style>
