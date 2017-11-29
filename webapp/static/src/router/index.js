import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';
import Home from '@/components/pages/Home';
import UserGuide from '@/components/pages/UserGuide';
import Background from '@/components/pages/Background';
import About from '@/components/pages/About';
import GetCode from '@/components/pages/GetCode';
const Analyze = () => import('@/components/pages/Analyze');

Vue.use(Router);
Vue.use(Meta);

const scrollBehavior = function (to, from, savedPosition) {
	return new Promise((resolve, reject) => {
		// wait for the out transition to complete (if necessary)
		router.app.$root.$once('triggerScroll', () => {
			let position = (() => {
				if (savedPosition) {
					// savedPosition is only available for popstate navigations.
					return savedPosition;
				} else {
					const position = {};

					// scroll to anchor by returning the selector
					if (to.hash) {
						position.selector = to.hash;

						if (document.querySelector(to.hash)) {
							return position;
						}

						// if the returned position is falsy or an empty object,
						// will retain current scroll position.
						return false;
					} else {
						return { x: 0, y: 0 };
					}
				}
			})();

			resolve(position);
		});
	});
};

const router = new Router({
	linkActiveClass: 'active',
	scrollBehavior,
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
			path: '/Background',
			name: 'Background',
			component: Background,
			meta: {
				anchor: '/#begin',
				breadcrumb: 'Begin'
			}
		},
		{
			path: '/about',
			name: 'about',
			component: About,
			meta: {
				anchor: '/#begin',
				breadcrumb: 'Begin'
			}
		},
		{
			path: '/get-code',
			name: 'get-code',
			component: GetCode,
			meta: {
				anchor: '/#begin',
				breadcrumb: 'Begin'
			}
		},
		{
			path: '/analyze/:plotType',
			name: 'analyze',
			component: Analyze,
			props: true,
			meta: {
				anchor: '/#plot',
				breadcrumb: 'Plot'
			}
		},
		{
			path: '/user-guide/:plotType',
			name: 'user-guide',
			component: UserGuide,
			props: true,
			meta: {
				anchor: '/#begin',
				breadcrumb: 'Begin'
			}
		}
	]
});

export default router;
