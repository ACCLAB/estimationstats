import _ from 'lodash';
import Vue from 'vue';
import App from './App';
import router from './router';
import 'materialize-css';
import './scss/style.scss';

// Define lodash for all vue components
Object.defineProperty(Vue.prototype, '_', { value: _ });

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: h => h(App)
});
