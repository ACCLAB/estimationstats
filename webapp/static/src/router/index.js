import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';
import Analyze from '@/components/pages/Analyze';
import UserGuide from '@/components/pages/UserGuide';

Vue.use(Router);
Vue.use(Meta);

export default new Router({
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			name: 'home',
			redirect: { name: 'analyze' }
		},
		{
			path: '/analyze/:plotType',
			name: 'analyze',
			component: Analyze,
			props: true
		},
		{
			path: '/user-guide/:plotType',
			name: 'user-guide',
			component: UserGuide,
			props: true
		}
	]
});
