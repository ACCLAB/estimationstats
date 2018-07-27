<template>
	<div>

		<p>
			To compare two or more paired experiments, you can use a multi paired plot. A multi paired plot tiles 2 more more paired plots, allowing for comparison of several paired experiments side by side.
		</p>

		<p>
			The paired mean differences are plotted below the observed values axes in new delta axes. This allows the direct visual comparison of multiple mean differences (‘deltas’).
		</p>

		<img src="../../../../static/img/exemplars/multi-two-group-paired.png" align="centre" width="85%" style="margin: 0px 40px"/>

		<p>
			<router-link :to="{ name: 'analyze', params: { plotType: plotTypes.MULTI_PAIRED.type }}">
				Back to {{ plotTypes.MULTI_PAIRED.name }} analysis
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
