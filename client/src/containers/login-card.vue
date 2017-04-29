<template>
    <Card class="login-card">
        <h2>IAS-APIs</h2>
        <Input type="text" placeholder="姓名" v-model="user.username"></Input>
        <Input type="password" placeholder="密码" v-model="user.password"></Input>
        <Input type="text" placeholder="团队" v-model="user.team" v-show="isRegister"></Input>
        <Button type="primary" size="large" @click="login" v-show="!isRegister">登录</Button>
        <Button :type="!isRegister ? 'dashed' : 'primary'" size="large" :loading="isRegisterLoading" @click="register">注册</Button>
    </Card>
</template>

<script>
export default {
    name: 'login-card',
    data() {
        return {
            isRegister: false,
            isRegisterLoading: false,
            user: {
                username: '',
                password: '',
                team: ''
            }
        }
    },
    methods: {
        login() {
            this.$store.dispatch('登录', this.user)
        },
        register() {
            if (this.isRegister) {
                this.isRegisterLoading = true
                this.$store.dispatch('注册', this.user)
                    .then((res) => {
                        this.isRegisterLoading = false
                        if (res.data.ok) {
                            this.isRegister = false
                            console.log(2)
                        }
                    })
            } else {
                this.isRegister = true
                console.log(1)
            }
        }
    }
}
</script>

<style>
.login-card {
    width: 300px;
    top: 30%;
    padding: 0 20px;
    align-self: center;
    text-align: center;
}

.login-card h2 {
    margin-bottom: 10px;
}

.login-card input {
    margin-bottom: 15px;
}
</style>
