<template>
	<div>



		<p>
			One of the most fundamental experimental designs is to compare a control group with an independent group that has been subjected to some intervention. This design is called two independent group. Conventionally, these kind of data were analyzed with Student’s <i>t</i>-test, the main outcome being a binary test result (statistically significant or statistically non-significant).
		</p>
		
		<p>
			To replace this outmoded method, estimation uses a <i>seperate but aligned axes</i> to show the experimental intervention’s effect size. In addition, this plot presents the effect size as a <i>bootstrap 95% confidence interval</i> (95% CI) on a separate but aligned axes. where the effect size is displayed to the right of the war data, and the mean of the test group is aligned with the effect size. 
		</p>

		<p>
			<img src="../../../../static/img/exemplars/two-group-unpaired.svg" align="center" style="vertical-align:top;margin-top:10px;margin-bottom:10px;margin: -30px 20px" width="100%"/>
			
		</p>
		 This t-test counterpart was first described by <a href="https://www.bmj.com/content/292/6522/746">Martin Gardner and Douglas J. Altman in 1986</a>, so we call this the Gardner-Altman two-groups mean-difference estimation plot.
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
