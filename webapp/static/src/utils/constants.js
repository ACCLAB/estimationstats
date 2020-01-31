/** Define plot types */
export const plotTypes = {
	UNPAIRED: { type: 'two-independent-groups', home_name: 'Two groups', footer_name: 'Two groups', about_title: 'Two-group Gardner-Altman plot', back_link: 'two groups' },
	PAIRED: { type: 'paired', home_name: 'Paired', footer_name: 'Paired', about_title: 'Paired Gardner-Altman plot', back_link: 'paired groups' },
	MULTI: { type: 'multi', home_name: 'Multiple two-groups', footer_name: 'Multi two-groups', about_title: 'Multi two-group Cumming plot', back_link: 'multiple two-groups' },
	MULTI_PAIRED: { type: 'multi-paired', home_name: 'Multiple paired', footer_name: 'Multi paired', about_title: 'Multi paired Cumming plot', back_link: 'multiple paired' },
	SHARED_CONTROL: { type: 'shared-control', home_name: 'Shared control', footer_name: 'Shared control', about_title: 'Shared control Cumming plot', back_link: 'shared control' }
};

/* Define effect sizes */
export const unpairedEffectSizes = {
	MEAN_DIFF: { type: 'mean_diff', name: 'Mean difference', desc: 'The difference between the means of each group.' },
	MEDIAN_DIFF: { type: 'median_diff', name: 'Median difference', desc: 'The difference between the medians of each group.' },
	COHENS_D: { type: 'cohens_d', name: "Cohen's d", desc: 'The difference in means, divided by the pooled standard deviation of the two samples. This is useful for comparing effect sizes across experiments.' },
	HEDGES_G: { type: 'hedges_g', name: "Hedges' g", 	desc: "Cohen's d corrected for small-sample bias." },
	CLIFFS_DELTA: { type: 'cliffs_delta', name: "Cliff's delta", desc: 'The likelihood that a random selection from the test sample is larger than a random selection from the control group.' }
};

export const pairedEffectSizes = {
	MEAN_DIFF: { type: 'mean_diff', name: 'Mean difference', desc: 'The difference between the means of each group.' },
	MEDIAN_DIFF: { type: 'median_diff', name: 'Median difference', desc: 'The difference between the medians of each group.' },
	COHENS_D: { type: 'cohens_d', name: "Cohen's d", desc: 'The difference in means, divided by the pooled standard deviation of the two samples. This is useful for comparing effect sizes across experiments.' },
	HEDGES_G: { type: 'hedges_g', name: "Hedges' g", 	desc: "Cohen's d corrected for small-sample bias." }
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
