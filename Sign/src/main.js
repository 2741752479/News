//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
import 'font-awesome/css/font-awesome.min.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
axios.defaults.baseURL='https://registration.sends.cc/api'
Vue.use(MintUI)
Vue.config.productionTip = false
//应用插件
Vue.use(VueRouter)
new Vue({
	el:'#app',
	render: h => h(App),
	router:router
})
