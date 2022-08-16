import VueRouter from 'vue-router'
//引入组件
import Hview from '../pages/Hview'
import Sign from '../pages/Sign'
import Apoint from '../pages/Apoint'
import Login from '../pages/Login'
import Spoint from '../pages/Spoint'
import Ltest from '../pages/Ltest'
import Intro from '../pages/Intro'
import About from '../components/About'
import We from '../pages/We'
import Need from '../components/Need'
//创建并暴露一个路由器
export default new VueRouter({
	routes:[
		{
			path:'/',
			redirect:'/Hview',
		},
		{
			path:'/Hview',
			component:Hview,
		},
		{
			path:'/Sign',
			component:Sign,
		},
		{
			path:'/Apoint',
			component:Apoint
		},
		{
			path:'/Login',
			component:Login
		},
		{
			path:'/Spoint',
			component:Spoint
		},
		{
			path:'/Ltest',
			component:Ltest
		},
		{
			path:'/Intro',
			component:Intro,
		},
		{
			path:'/We',
			component:We,
		},
		{
			path:'/About',
			component:About,
		},
		{
			path:'/Need',
			component:Need,
		},
	]
})
