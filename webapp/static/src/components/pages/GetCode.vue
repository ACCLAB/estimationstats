<template>
	<div>
	  <div class="feature-box">
        <p><b>New DABEST features</b></p>
        <p>On 20 March 2023, we officially released DABEST v2023.02.14 for Python. This new version provided the following new features:</p>
		<p>1. Repeated measures: Augments the prior function for plotting (independent) multiple test groups versus a shared control; it can now do the same for repeated-measures experimental designs. Thus, together, these two methods can be used to replace both flavors of the 1-way ANOVA with an estimation analysis.</p>
		<p>2. Proportional data: Generates proportional bar plots, proportional differences, and calculates Cohen’s h. Also enables plotting Sankey diagrams for paired binary data. This is the estimation equivalent to a bar chart with Fischer’s exact test.</p>
		<p>3. The delta-delta plot. Calculates the delta-delta for 2 × 2 experimental designs and plots the four groups with their relevant effect sizes. This design can be used as a replacement for the 2 × 2 ANOVA.</p>
		<p>4. Mini-meta. Calculates and plots a weighted delta for meta-analysis of experimental replicates. Useful for summarizing data from multiple replicated experiments, for example by different scientists in the same lab, or the same scientist at different times. When the observed values are known (and share a common metric), this makes meta-analysis available as a routinely accessible tool.</p>
       </div>

	   <p>
			If you have experience coding, or want more control over plot aesthetics, you can install your package of choice from the DABEST software suite. The packages are available on Github for  <a href='https://github.com/ACCLAB/dabestr' target='_blank'>R</a> (<a href="https://acclab.github.io/dabestr/" target="_blank">docs</a>), <a href='https://github.com/ACCLAB/DABEST-python' target='_blank'>Python</a> (<a href="https://acclab.github.io/DABEST-python-docs/" target="_blank">docs</a>), and <a href='https://github.com/ACCLAB/DABEST-Matlab' target='_blank'>Matlab</a>.
		</p>

			<a href='https://github.com/ACCLAB/dabestr'><img src='https://img.shields.io/badge/R-dabestr--0.3.0-green.svg?longCache=true&style=for-the-badge' style="margin:10px 10px"></a>

			<a href='https://github.com/ACCLAB/DABEST-python'><img src='https://img.shields.io/badge/Python-DABEST--2023.02.14-blue.svg?longCache=true&style=for-the-badge' style="margin:10px 10px"></a>

			<a href='https://github.com/ACCLAB/DABEST-Matlab'><img src='https://img.shields.io/badge/Matlab-DABEST--0.1.0-purple.svg?longCache=true&style=for-the-badge' style="margin:10px 10px"></a>

	</div>
</template>

<script>
export default {
	metaInfo() {
		return {
			title: 'Get the Code'
		};
	}
};
</script>

<style>
.feature-box {
  border: 2px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
}
</style>