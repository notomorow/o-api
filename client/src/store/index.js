import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/src/plugins/logger'
import { http, socket } from '@/helper/server'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state: {
        isLogin: false,
        user: {},
        route: 'home',
        APIs: {},
        selectedAPIId: ''
    },
    actions: {
        获取必应每日美图() {
            return http.get('https://ouyancey.cn/api/bing_daily_pic_url')
        },
        登录({ commit }, user) {
            http.post('/login', user)
                .then((res) => {
                    if (res.data.success) {
                        commit('登录成功', res.data.user)
                        socket.emit('join', res.data.user)
                    }
                })
        },
        注册({ commit }, user) {
            return http.post('/register', user)
        }
    },
    mutations: {
        获取必应每日美图成功() {},
        登录成功(state, user) {
            state.isLogin = true
            state.user = user
        },
        注册成功() {},
        切换页面(state, route) {
            state.route = route
        },
        选择API(state, APIId) {
            state.selectedAPIId = APIId
        },
        新增API(state, APIInfo) {
            socket.emit('create APIs', APIInfo)
        },
        SOCKET_新增APIs(state, APIs) {
            Object.keys(APIs).forEach((APIId) => {
                Vue.set(state.APIs, APIId, APIs[APIId])
            })
        },
        SOCKET_删除API(state, APIId) {
            console.log(state, APIId)
        },
        SOCKET_更新API(state, API) {
            console.log(state, API)
        },
        SOCKET_获得APIs(state, APIs) {
            state.APIs = APIs
        }
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})
