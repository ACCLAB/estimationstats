<template>

	<div>
		<p>
			This site provides you with a web application to plot experimental data from an <a href='https://en.wikipedia.org/wiki/Estimation_statistics' target='blank'>estimation statistics</a> perspective. You may have found significance testing and P-values <a href='https://www.nature.com/articles/nmeth.3288' target='blank'>problematic</a>; you may be asking what comes <a href='https://doi.org/10.5281/zenodo.60156' target='blank'>next</a>.
		</p>
		<br>



		<h5>Introducing Estimation Statistics</h5>
		<p>
			Estimation statistics is a simple <a href='https://thenewstatistics.com/itns/' target='blank'>framework</a> that—while avoiding the pitfalls of significance testing—uses familiar statistical concepts: means, mean differences, and error bars. More importantly, it focuses on the effect size of one's experiment/intervention, as opposed to significance testing.
		</p>

		<p>
			Significance testing calculates the probability (the <i>P</i> value) that the experimental data would be observed, if the intervention did not produce a change in the metric measured (i.e. the null hypothesis). This leads analysts to apply a false dichotomy on the experimental intervention.
		</p>

		<p>
			Estimation statistics, on the other hand, focuses on the magnitude of the effect (the effect size) and its precision. This encourages analysts to gain a deeper understanding of the metrics used, and how they relate to the natural processes being studied.
		</p>
		<br>



		<h5>The Inadequacy of Common Plots</h5>
		<p>
			Let's say we have performed an experiment with 30 control subjects, and 30 test subjects. We begin our data analysis by making a barplot of the data.

			<p>
				<img src="../../../static/img/background/barplot.png" align="centre" height="550px" style="margin: 0px 100px -10px"/>
			</p>

			The barplot has several shortcomings, despite enjoying widespread usage in academic journals. We're not the first ones (see <a href='https://www.nature.com/articles/nmeth.2837' target='blank'>this</a>,  <a href='http://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.1002128' target='blank'>this</a>, or <a href='https://onlinelibrary.wiley.com/doi/full/10.1111/ejn.13400' target='blank'>that</a>) to point out the myriad flaws with the barplot. Importantly, the barplot does not show us the effect size.
		</p>

		<p>
			So next, we use a boxplot to visualize the data.
			<p>
				<img src="../../../static/img/background/boxplot.png" align="centre" height="550px" style="margin: 0px 100px -10px"/>
			</p>
			Unfortunately, the boxplot still doesn't show all our data. We still lack information about the underlying distribution of your data. Is it normally distributed? Is there skew in the points? What is the sample size? More importantly, boxplots do not display the effect size.
		</p>

		<p>
			To display several data points across one or more categories,  we can use the jitter plot.
			<p>
				<img src="../../../static/img/background/jitter.png" align="centre" height="550px" style="margin: 0px 100px -10px"/>
			</p>
			Jitter plots avoid overlapping datapoints (i.e. datapoints with the same y-value) by adding a random factor to each point along the orthogonal x-axes. Thus, while a jitter plot displays all datapoints (implicitly indicating the sample size visually), it might not accurately depict the underlying distribution of the data.
		</p>
		<br>



		<h5>Introducing the Estimation Plot</h5>
		<p>
			<p>
				<img src="../../../static/img/background/two-group-estimation-plot.png" align="centre" height="550px" style="margin: 0px 100px -10px"/>
			</p>

			Shown above is a <a href='https://en.wikipedia.org/wiki/Estimation_statistics#Gardner-Altman_plot'>Gardner-Altman estimation plot</a>. (We have named the plot after <a href='https://www.independent.co.uk/news/people/obituary-professor-martin-gardner-1470261.html'>Martin J. Gardner</a> and <a href='https://www.bmj.com/content/361/bmj.k2588'>Douglas Altman</a>, who are credited with <a href='https://www.bmj.com/content/bmj/292/6522/746.full.pdf'>creating the design</a> in 1986.) An estimation plot has two key features:
			<ol>
				<li>
					All datapoints are presented as a swarmplot, which orders each point to display the underlying distribution.
				</li>
				<br>
				<li>
					The effect size is presented as a <b><i>bootstrap 95% confidence interval</i></b> (95% CI) on a <b><i>seperate but aligned axes</i></b>, where the effect size is displayed to the right of the raw data, and the mean of the test group is aligned with the effect size.
				</li>
			</ol>
		</p>
		<br>



		<h5>The Bootstrap Confidence Interval: A Quick Primer</h5>
		<p>
			In a typical scientific experiment, we are interested in two populations (Control and Test), and whether there is a difference between their means (µTest - µControl).
		</p>
		<p>
			<img src ="../../../static/img/background/population_mean.png" align="centre" height="150px" style="margin: 0px 50px 0px"/>
		</p>

		<p>
			We go about this by collecting observations from the control population, and from the test population.
		</p>
		<p>
			<img src ="../../../static/img/background/population_one_observation.png" align="centre" height="300px" style="margin: 0px 50px 0px"/>
		</p>

		<p>
			We can easily compute the mean difference in our observed samples. This is our estimate of the population effect size that we are interested in.
		</p>

		<p>
			<b><i>But how do we obtain a measure of precision and confidence about our estimate? Can we get a sense of how it relates to the population mean difference?</i></b>
		</p>

		<p>
			We can calculate the 95% CI of the mean difference by performing <a href='https://en.wikipedia.org/wiki/Bootstrapping_(statistics)'>bootstrap resampling</a>. <a href='https://projecteuclid.org/euclid.aos/1176344552'>First described</a> by <a href='https://statistics.stanford.edu/people/bradley-efron'>Bradley Efron</a>, the bootstrap is a simple but powerful technique. It creates multiple resamples (with replacement) from a single set of observations, and computes the effect size of interest on each of these resamples. The bootstrap resamples of the effect size can then be used to determine the 95% CI.
		</p>

		<p>
			With computers, we can perform 5000 resamples very easily.
		</p>

		<p>
			<img src ="../../../static/img/background/three-resamples.png" align="centre" height="800px" style="margin: 0px 50px 0px"/>
		</p>

		<p>
			The resampling distribution of the difference in means approaches a normal distribution. This is due to the <a href='https://en.wikipedia.org/wiki/Central_limit_theorem'>Central Limit Theorem</a>: the means of independent random samples will approach a normal distribution even if the underlying population is not normally distributed.
		</p>

		<p>
			Bootstrap resampling gives us two important benefits:
			<ol>

				<li>
					<i>Non-parametric statistical analysis.</i> There is no need to assume that our observations, or the underlying populations, are normally distributed. Thanks to the Central Limit Theorem, the resampling distribution of the effect size will approach normality.
				</li>
				<br>
				<li>
					<i>Easy construction of the 95% CI from the resampling distribution.</i> For 1000 bootstrap resamples of the mean difference, one can use the 25th value and the 975th value of the ranked differences as boundaries of the 95% confidence interval. (This captures the central 95% of the distribution.) Such an interval construction is known as a <i>percentile interval</i>.
				</li>

			</ol>
		</p>

		<p>
			While resampling distributions of the difference in means often have a normal distribution, it is not uncommon to encounter a skewed distribution.
		</p>
		<p>
			<img src ="../../../static/img/background/explaining-bca-bootstrap.png" align="centre" height="300px" style="margin: 0px 50px 0px"/>
		</p>


			<p>
				Thus, Efron developed the <a href='https://en.wikipedia.org/wiki/Bootstrapping_(statistics)#History'>bias-corrected and accelerated bootstrap</a> (BCa bootstrap) to account for the skew whilst obtaining the central 95% of the distribution. Here at estmationstats.com, we apply the BCa correction to the resampling bootstrap distributions of the effect size.
		</p>
		
		<p>
			It must be noted that bootstrapping "may not give very accurate coverage in a small-sample non-parametric situation" (<a href='https://www.jstor.org/stable/2669773' target='_blank'>Efron 2000</a>); caution is warranted if your dataset is very small or contains severe outliers.
		</p>
		<br>



		<h5>An estimation plot for your type of data</h5>
		<p>
			For each of the most routine significance tests, there is an estimation replacement:

			<ol type="I">
				<li>
					Unpaired Student’s t-test → <router-link :to="{ name: 'analyze', params: { plotType: plotTypes.UNPAIRED.type }}">Two-group estimation plot</router-link>
					<br>
					<img src="../../../static/img/exemplars/two-group-unpaired.png" align="center" height="550px" style="margin: -10px 25px 50px"/>
				</li>


				<li>
					Paired Student’s t-test → <router-link :to="{ name: 'analyze', params: { plotType: plotTypes.PAIRED.type }}">Paired estimation plot</router-link>
					<br>
					<p>
					The Gardner-Altman estimation plot can also display effect sizes for repeated measures (<i>aka</i> a paired experimental design) using a <a href='http://charliepark.org/slopegraphs/'>Tufte slopegraph</a> instead of a swarmplot.
				</p>
					<p>
						<img src="../../../static/img/exemplars/two-group-paired.png" align="center" height="550px" style="margin: -10px 25px 50px"/>
					</p>
				</li>


				<li>
					One-way ANOVA + multiple comparisons → <router-link :to="{ name: 'analyze', params: { plotType: plotTypes.MULTI.type }}">Multi two-group estimation plot</router-link>
					<br>
					<p>
						For comparisons between 3 or more groups that typically employ analysis of variance (ANOVA) methods, one can use the <a href= 'https://en.wikipedia.org/wiki/Estimation_statistics#Cumming_plot'>Cumming estimation plot</a>, which can be considered a variant of the Gardner-Altman plot. (The Cumming plot is named after <a href='https://www.youtube.com/watch?v=nDN-hcKR7j8'>Geoff Cumming</a>, and draws its design heavily from his 2012 textbook <a href='https://www.routledge.com/Understanding-The-New-Statistics-Effect-Sizes-Confidence-Intervals-and/Cumming/p/book/9780415879682'>Understanding the New Statistics</a>.)
					</p>

					<p>
						<img src="../../../static/img/exemplars/multi-two-group-unpaired.png" align="center" height="550px" style="margin: -5px 25px 50px"/>
						<br>
						The effect size and 95% CIs are still plotted on a separate axes, but unlike the Gardner-Altman plot, this axes is positioned beneath the raw data. Such a design frees up visual space in the upper panel, allowing the display of summary measurements (mean ± standard deviation) for each group. These are shown as gapped lines to the right of each group. The mean of each group is indicated as a gap in the line, adhering to Edward Tufte’s dictum to <a href='https://medium.com/@plotlygraphs/maximizing-the-data-ink-ratio-in-dashboards-and-slide-deck-7887f7c1fab'>keep the data-ink ratio low</a>.
					</p>
				</li>

				<li>
					Repeated measures ANOVA → <router-link :to="{ name: 'analyze', params: { plotType: plotTypes.MULTI_PAIRED.type }}">Multi paired estimation plot</router-link>
					<br>
							<img src="../../../static/img/exemplars/multi-two-group-paired.png" align="center" height="550px" style="margin: -5px 25px 50px"/>
				</li>

				<li>
					Ordered groups ANOVA → <router-link :to="{ name: 'analyze', params: { plotType: plotTypes.SHARED_CONTROL.type }}">Shared-control estimation plot</router-link>
					<br>
					<img src="../../../static/img/exemplars/shared-control.png" align="center" height="550px" style="margin: -5px 25px 50px"/>
				</li>
			</ol>

		</p>
		<br>



		<h5>Estimation Plots: The Way Forward</h5>
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

	<p>
		You can create estimation plots here at estimationstats.com, or with the DABEST packages which are available in <a href='https://github.com/ACCLAB/dabestr'>R</a>, <a href='https://github.com/ACCLAB/DABEST-Python'>Python</a>, and <a href='https://github.com/ACCLAB/DABEST-Matlab'>Matlab</a>.
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
