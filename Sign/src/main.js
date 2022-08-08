//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
Vue.config.productionTip = false
//应用插件
Vue.use(VueRouter)
new Vue({
	el:'#app',
	render: h => h(App),
	router:router
})
