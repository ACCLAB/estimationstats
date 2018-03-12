<template>
	<div>
		<!-- <h5>Background</h5> -->
		<br>
		This site provides you with a web application to plot experimental data from an <a href='https://en.wikipedia.org/wiki/Estimation_statistics' target='blank'>estimation statistics</a> perspective. You may have found significance testing and P-values <a href='https://www.nature.com/articles/nmeth.3288' target='blank'>problematic</a>; you may be asking what comes <a href='https://doi.org/10.5281/zenodo.60156' target='blank'>next</a>.
		<br><br>Estimation statistics is a simple <a href='https://thenewstatistics.com/itns/' target='blank'>framework</a> that—while avoiding the pitfalls of significance testing—uses familiar statistical concepts: means, mean differences, and error bars.
		For each of the most routine significance tests, there is an estimation replacement:
		<ul style="list-style-type:disc">
			<li>Unpaired Student’s t-test → Two-groups Gardner-Altman comparison plot</li>
			<li>Paired Student’s  t-test → Paired comparison</li>
			<li>One-way ANOVA + multiple comparisons → Multiple groups Cumming plot</li>
			<li>Repeated measures ANOVA → Multi-paired comparison</li>
			<li>Ordered groups ANOVA → Shared-control comparison</li>
		</ul>
		All of these plots enable you to graphically inspect the mean difference and its confidence interval. When there are multiple groups, the side-by-side plotting allows the visual comparison of effect sizes.
		<br>
		<!-- <i>example figure with panels bars-stars, boxplot, estimation plot</i> -->
		<br>Relative to conventional plots, estimation plots offer five key benefits:

		<table style="width:90%">
	  <tr>
			<th>   </th>
	    <th>Bars-and-Stars</th>
	    <th>Boxplot & <i>P</i></th>
	    <th>Estimation Plot</th>
	  </tr>
	  <tr>
			<td>Avoid false dichotomy</td>
	    <td><font color="red">✘</font></td>
	    <td><font color="red">✘</font></td>
	    <td><font color="green">✔</font></td>
	  </tr>
	  <tr>
			<td>Display all observed values</td>
	    <td><font color="red">✘</font></td>
	    <td><font color="red">✘</font></td>
	    <td><font color="green">✔</font></td>
	  </tr>
		<tr>
			<td>Focus on intervention effect size</td>
	    <td><font color="red">✘</font></td>
	    <td><font color="red">✘</font></td>
	    <td><font color="green">✔</font></td>
	  </tr>
		<tr>
			<td>Visualize estimate precision</td>
	    <td><font color="red">✘</font></td>
	    <td><font color="red">✘</font></td>
	   <td><font color="green">✔</font></td>
	  </tr>
		<tr>
			<td>Show mean difference distribution</td>
	    <td><font color="red">✘</font></td>
	    <td><font color="red">✘</font></td>
	    <td><font color="green">✔</font></td>
	  </tr>
	</table>

	<ol type='1'>
	<li><u>Avoid false dichotomy.</u> One of the many problems with significance testing is the application of an α-threshold creates the illusion of a dichotomy. Is there really a great difference between probabilities of 0.04999 and 0.05001? In significance testing, the former is ‘significant’ and the latter is ‘non-significant.’ The graphical method of showing this test result with clusters of stars amplifies this false dichotomy; since the average reader is primed to look for <i>P</i> < 0.05, presenting P-values is almost as bad. Estimation plots present the significance test result innocuously: as the presence or absence of a gap between the mean-difference zero line and the closest confidence interval bound.</li>
	<br>
	<li><u>Display all observed values.</u> <a href='https://doi.org/10.1038/nmeth.2837' target='_blank'>Bar charts</a> often show means, error, and significance stars only. <a href='https://www.nature.com/articles/nmeth.2811' target="_blank">Boxplots</a> generally show just medians, quartiles, maybe a few outliers, and P-values. For observed values, estimation plots follow best practices by presenting <a href='https://doi.org/10.1371/journal.pbio.1002128' target="_blank">each and every datapoint</a>. Presenting all observed values means that nothing is hidden: range, normality, skew, kurtosis, outliers, bounds, modality, and sample size are all clearly visible.</li>
	<br>
	<li><u>Focus on intervention effect size.</u> Estimation comparison plots include an entirely new axis for the mean difference of two groups (or paired data), and a whole panel for the mean differences of multiple groups. This serves to draw attention to something that deserves it, the answer to the question: “What is the magnitude of the effect of the intervention?”</li>
	<br>
	<li><u>Visualize estimate precision.</u> Unlike a significance test result, the narrowness of a confidence interval gives a clear impression of effect size precision. The 95% confidence interval provides the range of the the population mean difference values that are the most plausible. This 95% plausible interval also serves as an 83% prediction interval for replications (<a href='https://www.amazon.com/Introduction-New-Statistics-Estimation-Science/dp/1138825522/' target='_blank'>Cumming and Calin-Jageman 2016</a>), i.e. predicts future replication effect sizes (assuming no change in protocol) with 83% accuracy.</li>
	<br>
	<li><u>Show mean difference distribution.</u> The distribution of mean differences can be estimated using bootstrap resamples of the available data. As an approximation of the <a href='https://web.stanford.edu/~hastie/Papers/ESLII.pdf' target="_blank">Bayes posterior distribution</a>, this curve allows the analyst to weigh plausibility over an effect likelihood size range. Finally, plotting this curve discourages dichotomous thinking—engendered by P-values and hard-edged confidence intervals (<a href='https://www.ncbi.nlm.nih.gov/pubmed/28176294'>Kruschke and Liddell 2017</a>)—by drawing attention to the distribution’s graded nature.</li>
	</ol>

	To our knowledge, mean difference comparison plots were first described by Martin Gardner and Douglas Altman (<a href='https://www.ncbi.nlm.nih.gov/pmc/articles/pmid/3082422/' target='_blank'>Gardner and Altman 1986</a>), while the multiple-comparison design was devised by Geoff Cumming (<a href='https://www.amazon.com/Introduction-New-Statistics-Estimation-Science/dp/1138825522/' target='_blank'>Cumming 2012</a>). We propose calling the two-groups plot <i>Gardner-Altman comparison plots</i> and the multi-group plots <i>Cumming comparison plots</i>.

	</div>
</template>

<script>
export default {
	metaInfo() {
		return {
			title: 'Background'
		};
	}
};
</script>
