/**
 * Plot service
 * @module services/plot.service
 */
import _ from 'lodash';
import axios from '@/utils/axios-ex.js';

/**
 *  Analyze by uploading csv file
 *
 * @param {File} file csv file data
 * @param {String} plotType analyze plot type
 * @param {Object} options plot options (yaxis label, swarmYlimLower, swarmYlimUpper, etc..)
 * @return {Object} Promise
 */
export function analyze(file, plotType, options) {
	// Create form data contains file and plot type
	let formData = new FormData();
	formData.append('file', file);
	formData.append('plotType', plotType);

	// Add plot options
	if (!_.isEmpty(options)) {
		Object.keys(options).forEach(option => {
			if (!_.isEmpty(_.toString(options[option]))) {
				formData.append(option, options[option]);
			}
		});
	}

	// Call analyze api
	return axios.post('/analyze', formData, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	}).then(response => {
		return response.data;
	});
}
