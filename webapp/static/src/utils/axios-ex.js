/**
 * Promise based HTTP client
 * @module utils/axios.ex
 */
import axios from 'axios';
import * as common from '@/utils/common.js';

// Create axios instance
let config = {
	baseURL: common.getBaseURL(),
	timeout: 60000
};
let instance = axios.create(config);

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
