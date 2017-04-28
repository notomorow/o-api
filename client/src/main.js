import Vue from 'vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import App from '@/app'

Vue.config.productionTip = false
Vue.use(iView)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})
