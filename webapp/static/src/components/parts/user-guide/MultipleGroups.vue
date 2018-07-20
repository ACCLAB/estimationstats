<template>
	<div>

		<p>
			To compare two or more similar experiments, it is often convenient to place a number of two-groups results into a single arrangement. In this plot, the mean difference can no longer be placed to the right.
		</p>

		<p>
			Instead, the two or more mean differences are plotted below the observed values axes in new delta axes. This allows the direct visual comparison of multiple mean differences (‘deltas’).
		</p>

		<object data="../../../../static/img/exemplars/multi-two-group-unpaired.svg" type="image/svg+xml" align="centre" width="85%" style="margin: 0px 40px" >
				<img src="../../../../static/img/exemplars/multi-two-group-unpaired.svg" align="centre" width="85%" style="margin: 0px 40px"/>
		</object>

		<p>
			<router-link :to="{ name: 'analyze', params: { plotType: plotTypes.MULTI.type }}">
				Back to {{ plotTypes.MULTI.name }} analysis
			</router-link>
		</p>

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
