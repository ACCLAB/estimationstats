import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';
import Home from '@/components/pages/Home';
import Analyze from '@/components/pages/Analyze';
import UserGuide from '@/components/pages/UserGuide';
import Introduction from '@/components/pages/Introduction';
import About from '@/components/pages/About';
import GetCode from '@/components/pages/GetCode';

Vue.use(Router);
Vue.use(Meta);

export default new Router({
	linkActiveClass: 'active',
	scrollBehavior(to, from, savedPosition) {
		// Scroll to top
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({ x: 0, y: 0 });
			}, 500);
		});
	},
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			meta: {
				noHeader: true,
				breadcrumb: 'Estimation stats'
			}
		},
		{
			path: '/introduction',
			name: 'introduction',
			component: Introduction,
			meta: {
				breadcrumb: 'Introduction'
			}
		},
		{
			path: '/about',
			name: 'about',
			component: About,
			meta: {
				breadcrumb: 'About'
			}
		},
		{
			path: '/get-code',
			name: 'get-code',
			component: GetCode,
			meta: {
				breadcrumb: 'Get code'
			}
		},
		{
			path: '/analyze/:plotType',
			name: 'analyze',
			component: Analyze,
			props: true,
			meta: {
				breadcrumb: 'Plot'
			}
		},
		{
			path: '/user-guide/:plotType',
			name: 'user-guide',
			component: UserGuide,
			props: true,
			meta: {
				breadcrumb: 'User guide'
			}
		}
	]
});
