/**
 * Download utility
 * @module utils/download-util
 */
import _ from 'lodash';

/**
* Download file by generated content
*
* @param {String} fileName file name
* @param {String} content file content
* @return {void}
*/
export function downloadByContent(fileName, content) {
	if (!_.isEmpty(content)) {
		let link = document.createElement('a');
		link.setAttribute('href', content);
		link.setAttribute('download', `download_${fileName}`);
		link.click();
	}
}
