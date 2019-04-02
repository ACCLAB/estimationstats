<template>
	<div>


		<p>
			Sometimes it is possible and preferable to take measurements from a single group before and after an intervention: the paired observations design. Since the groups being compared comprise of observations from the same individuals, the estimation plot uses a <a href="http://charliepark.org/slopegraphs/">slopegraph</a> (first introduced by Edward Tufte) to depict each pair of repeated observations.
		</p>
		
		<img src="../../../../static/img/exemplars/two-group-paired.svg" align="center" width="100%" style="margin: 25px 50px"/>


		<p>
			These lines are able to illustrate elegantly the presence of any trend between the two time-points, and are thus preferable than two bar graphs (or boxplots) that reduce both observations simply to their mean (or median).
		</p>
		<p>
			As in the <router-link :to="{ name: 'user-guide', params: { plotType: plotTypes.UNPAIRED.type }}">Gardner-Altman two-group plot</router-link>, the effect size and its bootstrap 95% confidence interval are aligned on a separate axis.
		</p>

		<p><i>
			<router-link :to="{ name: 'analyze', params: { plotType: plotTypes.PAIRED.type }}">
				Back to {{ plotTypes.PAIRED.name }} analysis
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
