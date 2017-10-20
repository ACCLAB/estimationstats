/**
 * Plot service
 * @module services/plot.service
 */
import axios from '@/utils/axios-ex.js';

/**
 *  Analyze inputed file data
 *
 * @param {File} file csv file data
 * @param {String} plotType analyze plot type
 * @return {Object} Promise
 */
export function analyze(file, plotType) {
	// Create form data contains file and plot type
	let formData = new FormData();
	formData.append('file', file);
	formData.append('plotType', plotType);

	// Call analyze api
	return axios.post('/analyze', formData, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	}).then(response => {
		return response.data;
	});
}
