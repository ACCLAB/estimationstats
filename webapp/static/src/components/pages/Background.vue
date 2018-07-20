<template>

	<div>
		<!-- <h5>Background</h5> -->
		<p>
			This site provides you with a web application to plot experimental data from an <a href='https://en.wikipedia.org/wiki/Estimation_statistics' target='blank'>estimation statistics</a> perspective. You may have found significance testing and P-values <a href='https://www.nature.com/articles/nmeth.3288' target='blank'>problematic</a>; you may be asking what comes <a href='https://doi.org/10.5281/zenodo.60156' target='blank'>next</a>.
		</p>

		<h5>Estimation statistics > significance testing</h5>
		<p>
			Estimation statistics is a simple <a href='https://thenewstatistics.com/itns/' target='blank'>framework</a> that—while avoiding the pitfalls of significance testing—uses familiar statistical concepts: means, mean differences, and error bars. More importantly, it focuses on the effect size of one's experiment/intervention, as opposed to significance testing.
		</p>

		<p>
			Significance testing calculates the probability (the P-value) that the experimental data would be observed, if the intervention did not produce a change in the metric measured (i.e. the null hypothesis). This leads analysts to apply a false dichotomy on the experimental intervention.
		</p>

		<p>
			Estimation statistics, on the other hand, focuses on the magnitude of the effect (the effect size) and its precision. This encourages analysts to gain a deeper understanding of the metrics used, and how they relate to the natural processes being studied.
		</p>

		<h5>The Inadequacy of Common Plots</h5>
		<p>
			Let's say we have performed an experiment with 40 control subjects, and 40 test subjects. We begin our data analysis by making a barplot of the data.
			<br><br>
			<object data="../../../static/img/background/barplot.svg" type="image/svg+xml" height="550px" width="100%" align="centre">
					<img src="../../../static/img/background/barplot.svg" align="centre" height="550px" style="margin: 50px 0px"/>
			</object>
			The barplot has several shortcomings, despite enjoying widespread usage in academic journals. We're not the first ones (see <a href='https://www.nature.com/articles/nmeth.2837' target='blank'>this</a>,  <a href='http://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.1002128' target='blank'>this</a>, or <a href='https://onlinelibrary.wiley.com/doi/full/10.1111/ejn.13400' target='blank'>that</a>) to point out the myriad flaws with the barplot. Importantly, the barplot does not show us the effect size.
		</p>

		<p>
			So next, we use a boxplot to visualize the data.
			<br><br>
			<object data="../../../static/img/background/boxplot.svg" type="image/svg+xml" height="550px" width="100%" align="centre">
					<img src="../../../static/img/background/boxplot.svg" align="centre" height="550px" style="margin: 50px 0px"/>
			</object>
			Unfortunately, the boxplot still doesn't show all our data. We still lack information about the underlying distribution of your data. Is it normally distributed? Is there skew in the points? What is the sample size? More importantly, boxplots do not display the effect size.
		</p>

		<p>
			To display several data points across one or more categories,  we can use the jitter plot.
			<br><br>
			<object data="../../../static/img/background/jitter.svg" type="image/svg+xml" height="550px" width="100%" align="centre">
					<img src="../../../static/img/background/jitter.svg" align="centre" height="550px" style="margin: 50px 0px"/>
			</object>
			Jitter plots avoid overlapping datapoints (i.e. datapoints with the same y-value) by adding a random factor to each point along the orthogonal x-axes. Thus, while a jitter plot displays all datapoints (implicitly indicating the sample size visually), it might not accurately depict the underlying distribution of the data.
		</p>

		<!-- <br>
		<p>
			We can instead use a swarmplot, which displaces each datapoint orthogonally instead.
			<object data="../../../static/img/background/swarmplot.svg" type="image/svg+xml" height="550px" width="100%" align="centre">
					<img src="../../../static/img/background/swarmplot.svg" align="centre" height="550px" style="margin: 50px 0px"/>
			</object>
			The swarmplot is better able to represent underlying distribution of the data. But how can we display the effect size, which is what we are actually interested in?
		</p> -->

		<h5>The Estimation Plot</h5>
		<p>
			<object data="../../../static/img/background/two-group-estimation-plot.svg" type="image/svg+xml" height="550px" width="100%" align="centre">
					<img src="../../../static/img/background/two-group-estimation-plot.svg" align="centre" height="550px" style="margin: 50px 0px"/>
			</object>
			All datapoints are displayed with a swarmplot, which orders each point to display the underlying distribution. Importantly, the estimation plot presents the effect size as a <b><i>bootstrap 95% confidence interval</i></b> on a <b><i>seperate but aligned axes</i></b>. We illustrate how bootstrap confidence intervals are generated below.
		</p>

		<p>
			<object data="../../../static/img/background/bootstrap-step-by-step.svg" type="image/svg+xml" width="100%" align="left">
					<img src="../../../static/img/background/bootstrap-step-by-step.svg" align="left" height="550px" style="margin: 50px 0px"/>
			</object>
			<br><br>
			In a typical scientific experiment, we are attempting to estimate the mean difference (Δ) between two populations: <i>µ</i><sub>Control</sub> and <i>µ</i><sub>Test</sub> (Figure 5A). We <i>sample</i> from the control population and from the test population (Figure 5B). We can easily compute the mean difference in our observed sample (Δ̂). <b>But how do we obtain a measure of precision and confidence about our observed mean difference, and also get a sense of the population mean difference?</b>
		</p>

		<p>
			We can calculate the 95% confidence interval (95% CI) of the mean difference by resampling from our observed data several times (Figure 5C). With computers, we can perform 5000 resamples very easily. The mean difference for each of these resamples is calculated. According to the <a href='https://en.wikipedia.org/wiki/Central_limit_theorem' target='blank'>Central Limit Theorem</a>, these 5000 resampled mean differences will have a normal distribution, allowing easy derivation of a 95% CI of the mean difference (Figure 5D).
		</p>

		<p>
				An added benefit of bootstrap confidence intervals is that we <b>do not need to assume</b> that the population from which our samples come from have a normal distribution.
		</p>

		<p>
			The "95%" of the confidence interval refers to the <i>proportion of confidence intervals</i> that would contain the population mean, if samples from the population were repeatedly obtained, and confidence intervals obtained for each sample. That is to say, we can be 95% confident the interval contains the true mean of the population.
		</p>

		<p>
			The estimation plot presents Figure 5B and Figure 5D side-by-side as a single integrated plot. It thus tightly couples visual presentation of the raw data with an indication of the population mean difference, and its confidence interval.
		</p>

		<h5>An estimation plot for your type of data</h5>
		<p>
			For each of the most routine significance tests, there is an estimation replacement:
			<ul style="list-style-type:disc">
				<li>
					Unpaired Student’s t-test → <router-link :to="{ name: 'analyze', params: { plotType: plotTypes.UNPAIRED.type }}">Two-group estimation plot</router-link>
					<br>
					<object data="../../../static/img/exemplars/two-group-unpaired.svg" type="image/svg+xml" width="40%" align="centre">
							<img src="../../../static/img/exemplars/two-group-unpaired.svg" align="left" height="550px" style="margin: 50px 0px"/>
					</object>
				</li>

				<li>
					Paired Student’s t-test → <router-link :to="{ name: 'analyze', params: { plotType: plotTypes.PAIRED.type }}">Paired estimation plot</router-link>
					<br>
					<object data="../../../static/img/exemplars/two-group-paired.svg" type="image/svg+xml" width="40%" align="centre">
							<img src="../../../static/img/exemplars/two-group-paired.svg" align="left" height="550px" style="margin: 50px 0px"/>
					</object>
				</li>

				<li>
					One-way ANOVA + multiple comparisons → <router-link :to="{ name: 'analyze', params: { plotType: plotTypes.MULTI.type }}">Multi two-group estimation plot</router-link>
					<br>
					<object data="../../../static/img/exemplars/multi-two-group-unpaired.svg" type="image/svg+xml" width="90%" align="centre">
							<img src="../../../static/img/exemplars/multi-two-group-unpaired.svg" align="left" height="550px" style="margin: 50px 0px"/>
					</object>
				</li>

				<li>
					Repeated measures ANOVA → <router-link :to="{ name: 'analyze', params: { plotType: plotTypes.MULTI_PAIRED.type }}">Multi paired estimation plot</router-link>
					<br>
					<object data="../../../static/img/exemplars/multi-two-group-paired.svg" type="image/svg+xml" width="90%" align="centre">
							<img src="../../../static/img/exemplars/multi-two-group-paired.svg" align="left" height="550px" style="margin: 50px 0px"/>
					</object>
				</li>

				<li>
					Ordered groups ANOVA → <router-link :to="{ name: 'analyze', params: { plotType: plotTypes.SHARED_CONTROL.type }}">Shared-control estimation plot</router-link>
					<br>
					<object data="../../../static/img/exemplars/shared-control.svg" type="image/svg+xml" width="90%" align="centre">
							<img src="../../../static/img/exemplars/shared-control.svg" align="left" height="550px" style="margin: 50px 0px"/>
					</object>
				</li>
			</ul>

			<p>
				All of these plots enable you to graphically inspect the mean difference and its confidence interval. When there are multiple groups, the side-by-side plotting allows the visual comparison of effect sizes.
			</p>
		</p>

		<h5>In summary</h5>
		Relative to conventional plots, estimation plots offer five key benefits:

		<table style="width:95%" align='centre'>
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


	<!-- <ol type='1'>
	<li><u>Avoid false dichotomy.</u> One of the many problems with significance testing is the application of an α-threshold creates the illusion of a dichotomy. Is there really a great difference between probabilities of 0.04999 and 0.05001? In significance testing, the former is ‘significant’ and the latter is ‘non-significant.’ The graphical method of showing this test result with clusters of stars amplifies this false dichotomy; since the average reader is primed to look for <i>P</i> < 0.05, presenting P-values is almost as bad. Estimation plots present the significance test result innocuously: as the presence or absence of a gap between the mean-difference zero line and the closest confidence interval bound.</li>
	<br>
	<li><u>Display all observed values.</u> <a href='https://doi.org/10.1038/nmeth.2837' target='_blank'>Bar charts</a> often show means, error, and significance stars only. <a href='https://www.nature.com/articles/nmeth.2811' target="_blank">Boxplots</a> generally show just medians, quartiles, maybe a few outliers, and P-values. For observed values, estimation plots follow best practices by presenting <a href='https://doi.org/10.1371/journal.pbio.1002128' target="_blank">each and every datapoint</a>. Presenting all observed values means that nothing is hidden: range, normality, skew, kurtosis, outliers, bounds, modality, and sample size are all clearly visible.</li>
	<br>
	<li><u>Focus on intervention effect size.</u> Estimation comparison plots include an entirely new axis for the mean difference of two groups (or paired data), and a whole panel for the mean differences of multiple groups. This serves to draw attention to something that deserves it, the answer to the question: “What is the magnitude of the effect of the intervention?”</li>
	<br>
	<li><u>Visualize estimate precision.</u> Unlike a significance test result, the narrowness of a confidence interval gives a clear impression of effect size precision. The 95% confidence interval provides the range of the population mean difference values that are the most plausible. This 95% plausible interval also serves as an 83% prediction interval for replications (<a href='https://www.amazon.com/Introduction-New-Statistics-Estimation-Science/dp/1138825522/' target='_blank'>Cumming and Calin-Jageman 2016</a>), i.e. predicts future replication effect sizes (assuming no change in protocol) with 83% accuracy.</li>
	<br>
	<li><u>Show mean difference distribution.</u> The distribution of mean differences can be estimated using bootstrap resamples of the available data. As an approximation of the <a href='https://web.stanford.edu/~hastie/Papers/ESLII.pdf' target="_blank">Bayes posterior distribution</a>, this curve allows the analyst to weigh plausibility over an effect likelihood size range. Finally, plotting this curve discourages dichotomous thinking—engendered by P-values and hard-edged confidence intervals (<a href='https://www.ncbi.nlm.nih.gov/pubmed/28176294'>Kruschke and Liddell 2017</a>)—by drawing attention to the distribution’s graded nature.</li>
	</ol> -->

	<p>
		To our knowledge, mean difference comparison plots were first described by Martin Gardner and Douglas Altman (<a href='https://www.ncbi.nlm.nih.gov/pmc/articles/pmid/3082422/' target='_blank'>Gardner and Altman 1986</a>), while the multiple-comparison design was devised by Geoff Cumming (<a href='https://www.amazon.com/Introduction-New-Statistics-Estimation-Science/dp/1138825522/' target='_blank'>Cumming 2012</a>).
	</p>

	</div>
</template>

<script>
import * as constants from '@/utils/constants.js';
export default {
	metaInfo() {
		return {
			title: 'Background'
		};
	},

	data() {
		return {
			plotTypes: constants.plotTypes
		};
	}

};
</script>
