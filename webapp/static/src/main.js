import _ from 'lodash';
import Vue from 'vue';
import VueBreadcrumbs from 'vue-breadcrumbs';
import App from './App';
import router from './router';
import 'materialize-css';
import './scss/style.scss';
import VueAnalytics from 'vue-analytics';
import vueSlider from 'vue-slider-component';
// import VTooltip from 'v-tooltip';
import(/* webpackPrefetch: true */ 'vue-handsontable-official');

// Using Imports
Vue.use(VueBreadcrumbs, {
	template: `
	<nav class="breadcrumb" v-if="$breadcrumbs.length">
		<router-link exact class="breadcrumb-item black-text" :to="{ name: 'home' }">Estimation stats</router-link>
		<template v-for="(crumb, key) in $breadcrumbs">
			/
			<router-link active-class="" exact class="breadcrumb-item black-text" :to="crumb.meta.anchor ? crumb.meta.anchor : linkProp(crumb)" :key="key">{{ crumb | crumbText }}</router-link>
		</template>
	</nav>`
});

// Define lodash for all vue components
Object.defineProperty(Vue.prototype, '_', { value: _ });

Vue.config.productionTip = false;

// analytics code
const isProd = process.env.NODE_ENV === 'production';

Vue.use(VueAnalytics, {
	id: 'UA-118265936-1',
	router,
	autoTracking: {
		exception: true
	},
	debug: {
		enabled: !isProd,
		sendHitTask: isProd
	}
});

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: h => h(App)
});

export default {
	components: {
		vueSlider // VueSlideBar
		// VTooltip
	}
};
