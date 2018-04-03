<template>
	<div>
		One of the most fundamental experimental designs is to compare a control group with an independent group that has been subjected to some intervention. This design is called two independent group. Conventionally, these kind of data were analyzed with Student’s t-test, the main outcome being a binary test result (statistically significant or statistically non-significant).
		<br>
		<br>
		<img src="../../../../static/img/two-group-unpaired-display.svg" align="left" height="500px" style="margin: 0px 20px">
		To replace this outmoded method, estimation uses a graphical tool to show the experimental intervention’s effect size. This t-test counterpart was first described by Gardner and Altman in 1986, so we call this the Gardner-Altman two-groups mean-difference plot, or m-diff plot for short. This plot places the mean-difference information on a new axis to the right of the observed-values axis.
		<br><br>
		<router-link :to="{ name: 'analyze', params: { plotType: plotTypes.UNPAIRED.type }}">
			Back to {{ plotTypes.UNPAIRED.name }} analysis
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
