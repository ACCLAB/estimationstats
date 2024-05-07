/** Define plot types */
export const plotTypes = {
	UNPAIRED: { type: 'two-independent-groups', home_name: 'Two groups', footer_name: 'Two groups', about_title: 'Two-group Gardner-Altman plot', back_link: 'two groups' },
	PAIRED: { type: 'paired', home_name: 'Paired', footer_name: 'Paired', about_title: 'Paired Gardner-Altman plot', back_link: 'paired groups' },
	MULTI: { type: 'multi', home_name: 'Multiple two-groups', footer_name: 'Multi two-groups', about_title: 'Multi two-group Cumming plot', back_link: 'multiple two-groups' },
	MULTI_PAIRED: { type: 'multi-paired', home_name: 'Multiple paired', footer_name: 'Multi paired', about_title: 'Multi paired Cumming plot', back_link: 'multiple paired' },
	SHARED_CONTROL: { type: 'shared-control', home_name: 'Shared control', footer_name: 'Shared control', about_title: 'Shared control Cumming plot', back_link: 'shared control' },
	REPEATED_MEASURES: { type: 'repeated-measures', home_name: 'Repeated measures', footer_name: 'Repeated measures', about_title: 'Repeated measures', back_link: 'repeated measures' },
	PROPORTION: { type: 'proportion', home_name: 'Proportion', footer_name: 'Proportion', about_title: 'Proportion', back_link: 'proportion' },
	PROPORTION_PAIRED: { type: 'proportion-paired', home_name: 'Proportion paired', footer_name: 'Proportion parired', about_title: 'Proportion paired', back_link: 'proportion paired' },
	MINI_META: { type: 'mini-meta', home_name: 'Mini meta', footer_name: 'Mini meta', about_title: 'Mini meta', back_link: 'mini meta' },
	MINI_META_PAIRED: { type: 'mini-meta-paired', home_name: 'Mini meta paired', footer_name: 'Mini meta parired', about_title: 'Mini meta paired', back_link: 'mini meta paired' },
	DELTA_DELTA: { type: 'delta-delta', home_name: 'Delta delta', footer_name: 'Delta delta', about_title: 'Delta delta', back_link: 'delta delta' },
	DELTA_DELTA_PAIRED: { type: 'delta-delta-paired', home_name: 'Delta delta paired', footer_name: 'Delta delta paired', about_title: 'Delta delta paired', back_link: 'delta delta paired' }
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

export const proportionEffectSizes = {
	MEAN_DIFF: { type: 'mean_diff', name: 'Mean difference', desc: 'The difference between the means of each group.' },
	COHENS_H: { type: 'cohens_h', name: "Cohen's h", desc: 'The measure of distance between two proportions. This is useful to determine if the difference between two proportions is "meaningful".' }
};

export const deltaDeltaMiniMetaEffectSizes = {
	MEAN_DIFF: { type: 'mean_diff', name: 'Mean difference', desc: 'The difference between the means of each group.' }
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
