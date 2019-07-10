<template>
  <div>
    <h4>What is an effect size?</h4>
    An effect size is simply the magnitude (size) of a phenomenon of interest (the effect). Experimental and empirical science seeks an answer to the question, "What is the difference between the control group and the test group?" <router-link :to="{ name: 'background'}">Estimation statistics</router-link>, with its focus on effect sizes and confidence intervals, provides a quantitative answer. (Null-hypothesis significance testing, on the other hand, merely answers the question "Is there a difference?)
    <br>
    <br>
    Here, we introduce the effect sizes that EstimationStats.com can produce plots for.
    <br>
    <br>
    
    <a name="about-mean-diff"></a>
    <h4>Mean difference</h4>
    The effect size most familiar to both scientist and layperson is the difference of means. It is simply the mean of the control group subtracted from that of the test group:
    <br>
    <vue-mathjax :formula="meanDiffFormula"></vue-mathjax>
    <br>
    <br>
		
    <a name="about-median-diff"></a>
    <h4>Median difference</h4>
    Sometimes, if the data is not normally distributed, or if the data is bounded, the difference between medians might be a better effect size.
    <br>
    <vue-mathjax :formula="medianDiffFormula"></vue-mathjax>
    <br>
    <br>
		  
    <h4>Cohen's <i>d</i></h4>
    First mooted by psychologist <a href='https://www.nytimes.com/1998/02/07/nyregion/jacob-cohen-74-psychologist-and-pioneer-in-statistical-studies.html' target='_blank'>Jacob Cohen</a> in <a href='https://www.ncbi.nlm.nih.gov/pubmed/13880271' target='_blank'>1962</a>, Cohen's <i>d</i> is the mean difference between two groups, divided by the pooled standard deviation of both groups.
    <br>
    <vue-mathjax :formula="cohenDFormula"></vue-mathjax>
    <br>
    where
		<vue-mathjax :formula="pooledSDFormula"></vue-mathjax>
		and
		<vue-mathjax :formula="controlCount"></vue-mathjax>
		<vue-mathjax :formula="testCount"></vue-mathjax>
		In other words, this is a <i>standardized</i> effect size, where the mean difference is expressed in terms of the pooled standard deviation of the samples.
		<br>
		<br>
		
    <h4>Hedges' <i>g</i></h4>
    In <a href='https://journals.sagepub.com/doi/10.3102/10769986006002107' target='_blank'>1981</a>, <a href='https://www.ipr.northwestern.edu/faculty-experts/fellows/hedges.html' target='_blank'>Larry Hedges</a> showed that Cohen's <i>d</i> can be <a href='https://en.wikipedia.org/wiki/Bias_of_an_estimator'>biased</a> for small samples. That is to say, if the samples sizes are small, Cohen's <i>d</i> tends to overestimate the true effect size.
		
		To solve this problem, Hedges introduced a <i>correction factor</i>:
		
    <br>
    <vue-mathjax :formula="hedgesGFormula"></vue-mathjax>
		where <i>F</i> can be approximated by
		<vue-mathjax :formula="FApprox"></vue-mathjax>
		Here at EstimationStats.com, we use the exact form for <i>F</i>, which employs the <a href='https://en.wikipedia.org/wiki/Gamma_function' taget='_blank'>gamma function</a> (Γ):
		<vue-mathjax :formula="FExact"></vue-mathjax>
		and <i>e</i> refers to the degrees of freedom: 
		<vue-mathjax :formula="DegFree"></vue-mathjax>
		Both Cohen's <i>d</i> and Hedges'<i>g</i> are often used in <a href='https://ebn.bmj.com/content/16/1/3' target='_blank'>meta-analysis</a> to compare experimental results from replicate studies.
    <br>
    <br>
		
    <h4>Cliff's delta</h4>
		Named after <a href='https://en.wikipedia.org/wiki/Norman_Cliff' target='_blank'>Norman Cliff</a>, who came up with this effect size in <a href='https://psycnet.apa.org/record/1994-08169-001' target='_blank'>1993</a>, Cliff's delta is a measure of <i>ordinal dominance</i>, ie. how often the values from the test sample are larger than values from the control sample.
		<br>
		<vue-mathjax :formula="cliffsDeltaFormula"></vue-mathjax>
		where # denotes the number of times a value from the test sample exceeds (or is lesser than) values in the control sample.
		<br>
		<br>
		Cliff's delta ranges from -1 to 1; it can also be thought of as a measure of the degree of overlap between the two samples. An attractive aspect of this effect size is that it does not make an assumptions about the underlying distributions that the samples were drawn from.
		<br>
		<br>
    
    <a @click="$router.go(-1)">Back to Previous Analysis</a>
  </div>
</template>

<script>
import { VueMathjax } from 'vue-mathjax';
export default {
	components: {
		'vue-mathjax': VueMathjax
	},
	data () {
		return {
			mu: '$\\mu$',
			meanDiffFormula: '$$\\text{Mean difference} = \\overline{x}_{Test} -  \\overline{x}_{Control}$$',
			medianDiffFormula: '$$\\text{Median difference} = \\widetilde{x}_{Test} -  \\widetilde{x}_{Control}$$',
			testCount: '$$\\text{Number of observations in test sample} = n_{Test}$$',
			controlCount: '$$\\text{Number of observations in control sample} = n_{Control}$$',
			cohenDFormula: "$$\\text{Cohen's}\\ \\mathit{d} = {\\overline{x}_{Test} -  \\overline{x}_{Control}\\over \\text{StDev}_{pooled}}$$",
			pooledSDFormula: '$$ \\text{StDev}_{pooled} = \\sqrt{{(n_{Test} - 1)\\times \\text{StDev}_{Test} + (n_{Control} - 1)\\times \\text{StDev}_{Control} \\over n_{Test} + n_{Control} -2}} $$',
			hedgesGFormula: "$$\\text{Hedges'}\\ \\mathit{g} = {{\\overline{x}_{Test} -  \\overline{x}_{Control}\\over \\text{StDev}_{pooled}}} \\times F$$",
			FApprox: '$$F \\approx 1 - {3 \\over {4(n_{Test} + n_{Control}) - 9}}$$',
			FExact: '$$F = {\\Gamma(e/2) \\over {\\sqrt{e/2}} \\times \\Gamma((e - 1)/2)}$$',
			DegFree: '$$e = n_{Test} + n_{Control} -2 $$',
			cliffsDeltaFormula: '$$\\text{delta} = {\\#(x_{Test} > x_{Control})- \\#(x_{Test} < x_{Control}) \\over n_{Test} \\times n_{Control}}$$'
		};
	},
	metaInfo() {
		return {
			title: 'Effect Sizes'
		};
	}
};
</script>
