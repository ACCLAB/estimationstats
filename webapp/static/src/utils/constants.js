/** Define plot types */
export const plotTypes = {
	UNPAIRED: { type: 'two-independent-groups', name: 'Two-Group Unpaired' },
	PAIRED: { type: 'paired', name: 'Two-Group Paired' },
	MULTI: { type: 'multi', name: 'Multiple Two-group Unpaired' },
	MULTI_PAIRED: { type: 'multi-paired', name: 'Multiple Two-group Paired' },
	SHARED_CONTROL: { type: 'shared-control', name: 'Multi-group shared control' }
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
