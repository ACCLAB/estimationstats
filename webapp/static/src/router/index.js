import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home';
import UserGuide from '@/components/pages/UserGuide';
import Background from '@/components/pages/Background';
import About from '@/components/pages/About';
import GetCode from '@/components/pages/GetCode';
import ReadThePaper from '@/components/pages/ReadThePaper';
import MeetTheTeam from '@/components/pages/MeetTheTeam';
import AboutEffectSizes from '@/components/pages/AboutEffectSizes';

const Analyze = () => import('@/components/pages/Analyze');

Vue.use(Router);

const scrollBehavior = function (to, from, savedPosition) {
	return { x: 0, y: 0 }; // Scroll to the top of the page always
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
				title: 'Estimation Stats',
				noHeader: true,
				breadcrumb: 'Estimation Stats'
			}
		},
		{
			path: '/background',
			name: 'background',
			component: Background,
			meta: {
				title: 'What is estimation?',
				anchor: '',
				breadcrumb: 'What is estimation?'
			}
		},

		{
			path: '/user-guide/:plotType',
			name: 'user-guide',
			component: UserGuide,
			props: true,
			meta: {
				anchor: '',
				breadcrumb: 'Find out more'
			}
		},

		{
			path: '/about',
			name: 'about',
			component: About,
			meta: {
				anchor: '',
				breadcrumb: 'About'
			}
		},
		{
			path: '/get-code',
			name: 'getcode',
			component: GetCode,
			meta: {
				anchor: '',
				breadcrumb: 'Get the code'
			}
		},
		{
			path: '/read-the-paper',
			name: 'readthepaper',
			component: ReadThePaper,
			meta: {
				anchor: '',
				breadcrumb: 'Read the paper'
			}
		},
		{
			path: '/meet-the-team',
			name: 'meettheteam',
			component: MeetTheTeam,
			meta: {
				anchor: '',
				breadcrumb: 'Meet the team'
			}
		},
		{
			path: '/about-effect-sizes',
			name: 'abouteffsizes',
			component: AboutEffectSizes,
			meta: {
				anchor: '',
				breadcrumb: 'About effect sizes'
			}
		},
		{
			path: '/analyze/:plotType',
			name: 'analyze',
			component: Analyze,
			props: true,
			meta: {
				anchor: '',
				breadcrumb: 'Plot'
			}
		}
	]
});

export default router;
