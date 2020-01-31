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
		// Create mouse click event
		let event = document.createEvent('MouseEvents');
		event.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);

		// Create download hyperlink
		let link = document.createElement('a');
		link.setAttribute('href', content);
		link.setAttribute('download', `output_${fileName}`);
		link.dispatchEvent(event);
	}
}
