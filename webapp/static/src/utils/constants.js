/** Define plot types */
export const plotTypes = {
	UNPAIRED: { type: 'two-independent-groups', name: 'Two independent groups' },
	PAIRED: { type: 'paired', name: 'Paired' },
	MULTI: { type: 'multi', name: 'Multiple groups' },
	MULTI_PAIRED: { type: 'multi-paired', name: 'Multi-paired' },
	SHARED_CONTROL: { type: 'shared-control', name: 'Shared control' }
};

/** Define download file types */
export const fileTypes = {
	PNG: { extension: 'png', name: 'PNG' },
	SVG: { extension: 'svg', name: 'SVG' },
	CSV: { extension: 'csv', name: 'CSV' }
};

/** Define input types */
export const inputDataTypes = {
	COPY_PASTE: { type: 'copy_paste', name: 'Copy-paste' },
	CSV: { type: 'upload_csv', name: 'Upload CSV' }
};

/** Csv content delimiter */
export const CSV_DELIMITER = ',';

/** Csv newline character */
export const CSV_NEW_LINE = '\n';
