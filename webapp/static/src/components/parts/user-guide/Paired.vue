<template>
	<div>
		<img src="../../../../static/img/two-group-paired-display.svg" align="left" height="500px" style="margin: 20px 0px">
		<br>
		Sometimes it is possible and preferable to take measurements from a single group before and after an intervention: the paired observations design. Since the groups being compared comprise of observations from the same individuals, the estimation plot uses before-after lines instead of dots.
		<br><br>
		These lines are able to illustrate elegantly the presence of any trend between the two time-points, and are thus preferable than two bar graphs (or boxplots) that reduce both observations simply to their mean (or median).
		<br><br>
		<router-link :to="{ name: 'analyze', params: { plotType: plotTypes.PAIRED.type }}">
			Back to {{ plotTypes.PAIRED.name }} analysis
		</router-link>
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
