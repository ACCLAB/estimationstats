/**
 * Promise based HTTP client
 * @module utils/axios.ex
 */
import _ from 'lodash';
import axios from 'axios';
import Materialize from 'materialize-css';
import * as common from '@/utils/common.js';

// Create axios instance
let config = {
	baseURL: common.getBaseURL(),
	timeout: 120000
};
let instance = axios.create(config);

instance.interceptors.response.use(response => {
	return response;
}, error => {
	Materialize.toast(_.get(error, 'response.data.message', 'Oops! Something went wrong...'), 5000);
	return Promise.reject(error);
});

const methods = {
	/**
	 * Get method
	 * @param {String} url Url
	 * @param {Object} config Config
	 * @return {Promise} Promise
	 * @see {@link https://github.com/mzabriskie/axios#instance-methods}
	 */
	get(url, config) {
		return instance.get(url, config);
	},

	/**
	 * Post method
	 * @param {String} url Url
	 * @param {Object} data Data
	 * @param {Object} config Config
	 * @return {Promise} Promise
	 * @see {@link https://github.com/mzabriskie/axios#instance-methods}
	 */
	post(url, data, config) {
		return instance.post(url, data, config);
	}
};

export default (methods);
