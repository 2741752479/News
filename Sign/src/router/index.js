import VueRouter from 'vue-router'
//引入组件
import Hview from '../pages/Hview'
import Sign from '../pages/Sign'
import Apoint from '../pages/Apoint'
import Login from '../pages/Login'
import Spoint from '../pages/Spoint'
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
		}
	]
})
