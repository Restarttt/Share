import Vue from 'vue'
import App from './App'

import homepage from './pages/homepage/home.vue'
Vue.component('homepage',homepage)

import post from './pages/post/home.vue'
Vue.component('post',post)

import mine from './pages/mine/home.vue'
Vue.component('mine',mine)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



