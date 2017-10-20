/**
 * Common utility
 * @module utils/common
 */

/**
 * Get base URL for REST service
 *
 * @return {String} URL
 */
export function getBaseURL() {
	const protocol = window.location.protocol;
	const clientHost = window.location.host;
	const serverHost = process.env.NODE_ENV === 'production' ? clientHost : '127.0.0.1:5000';
	const apiEndpoint = process.env.API_ENDPOINT;
	return `${protocol}//${serverHost}/${apiEndpoint}`;
}
