<template>
  <div>
    <h5>What is an effect size?</h5>
    An effect size is simply the magnitude (size) of a phenomenon of interest (the effect). Experimental and empirical science seeks an answer to the question, "How much is the difference between the control group and the test group?" <router-link :to="{ name: 'background'}">Estimation statistics</router-link>, with its focus on effect sizes and confidence intervals, provides a quantitative answer. (Null-hypothesis significance testing, on the other hand, merely answers the question "Is there a difference?)
    <br>
    <br>
    Here, we introduce the effect sizes that EstimationStats.com can produce plots for.
  
    <h5>Differences</h5>
    <b>Mean difference</b>
    <br>
    The effect size most familiar to both scientist and layperson is the difference of means. It is simply the mean of the control group subtracted from that of the test group:
    <br>
    /insert equation here.
    <br>
    <br>
    <b>Median difference</b>
    <br>
    Sometimes, if the data is not normally distributed, or if the data is bounded, the difference between medians might be a better effect size.
    <br>
    /insert equation here.
    <br>
    <br>
      
    <h5>Standardized Effect Sizes</h5>
    <h6>Cohen's <i>d</i></h6>
   
    <h6>Hedges's <i>g</i></h6>
     
    <h5>Ordinal Dominance</h5>
    <h6>Cliffs' delta</h6>
     
    <br>
    
    <a @click="$router.go(-1)">Back to Previous Analysis</a>
  </div>
</template>

<script>
export default {
	metaInfo() {
		return {
			title: 'Effect Sizes'
		};
	}
};
</script>

