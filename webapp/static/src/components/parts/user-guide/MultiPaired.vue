<template>
	<div>
		To compare two or more paired experiments, you can use a multi paired plot.
		<br>
		<img src="../../../../static/img/multi-two-group-paired-display.svg" align="centre" height="400px" style="margin: 20px 0px">
		<br><br>
		A multi paired plot tiles 2 more more paired plots, allowing for comparison of several paired experiments side by side.
		<br><br>
		The paired mean differences are plotted below the observed values axes in new delta axes. This allows the direct visual comparison of multiple mean differences (‘deltas’).
		<br><br>
		<router-link :to="{ name: 'analyze', params: { plotType: plotTypes.MULTI_PAIRED.type }}">
			Back to {{ plotTypes.MULTI_PAIRED.name }} analysis
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
