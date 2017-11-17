import _ from 'lodash';
import Vue from 'vue';
import VueBreadcrumbs from 'vue-breadcrumbs';
import App from './App';
import router from './router';
import 'materialize-css';
import './scss/style.scss';

Vue.use(VueBreadcrumbs, {
	template: `
	<nav class="breadcrumb" v-if="$breadcrumbs.length">
		<router-link exact class="breadcrumb-item black-text" :to="{ name: 'home' }">Estimation stats</router-link>
		<template v-for="(crumb, key) in $breadcrumbs">
			/
			<router-link v-if="key < $breadcrumbs.length - 1" exact class="breadcrumb-item black-text" :to="linkProp(crumb)" :key="key">{{ crumb | crumbText }}</router-link>
			<template v-else>{{ crumb | crumbText }}</template>
		</template>
	</nav>`
});

// Define lodash for all vue components
Object.defineProperty(Vue.prototype, '_', { value: _ });

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: h => h(App)
});
