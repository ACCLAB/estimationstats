<template>
	<div>



		<p>
			One of the most fundamental experimental designs is to compare a control group with an independent group that has been subjected to some intervention. This design is called two independent group. Conventionally, these kind of data were analyzed with Student’s <i>t</i>-test, the main outcome being a binary test result (statistically significant or statistically non-significant).
		</p>
		
		<p>
			To replace this outmoded method, estimation uses a <i>separate but aligned axes</i> to show the experimental intervention’s effect size. In addition, this plot presents the effect size as a <i>bootstrap 95% confidence interval</i> (95% CI) to the right of the raw data, with the mean of the test group aligned with the effect size. 
		</p>

		<p>
			<img src="../../../../static/img/exemplars/two-group-unpaired.svg" class="responsive-img"/>
			
		</p>
		 This t-test counterpart was first described by <a href='https://www.independent.co.uk/news/people/obituary-professor-martin-gardner-1470261.html' target='_blank'>Martin Gardner</a> and <a href='https://www.bmj.com/content/361/bmj.k2588' target='_blank'>Douglas J. Altman</a> in <a href="https://www.bmj.com/content/292/6522/746">1986</a>, so we call this the Gardner-Altman two-groups mean-difference estimation plot.
		</p>
		
		<p>
			There is also a related <router-link :to="{ name: 'user-guide', params: { plotType: plotTypes.PAIRED.type }}">estimation plot</router-link> for repeated measures or paired observations.
		</p>
			



		<p><i>
			<router-link :to="{ name: 'analyze', params: { plotType: plotTypes.UNPAIRED.type }}">
				Back to {{ plotTypes.UNPAIRED.name }} analysis
			</router-link>
		</i></p>

	</div>
</template>

<script>
import * as constants from '@/utils/constants.js';
export default {
	data() {
		return {
			plotTypes: constants.plotTypes
		};
	}
};
</script>
