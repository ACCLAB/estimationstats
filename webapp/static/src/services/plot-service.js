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
 * @param {String} yaxisLabel y-axis label
 * @return {Object} Promise
 */
export function analyze(file, plotType, yaxisLabel) {
	// Create form data contains file and plot type
	let formData = new FormData();
	formData.append('file', file);
	formData.append('plotType', plotType);
	if (!_.isEmpty(yaxisLabel)) {
		formData.append('yaxisLabel', yaxisLabel);
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
