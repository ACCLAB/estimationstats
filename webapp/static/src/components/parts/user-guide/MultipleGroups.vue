<template>
	<div>

		<p>
			To compare two or more similar experiments, it is often convenient to place a number of two-groups results into a single arrangement. In this plot, the mean difference can no longer be placed to the right.
		</p>

		<img src="../../../../static/img/exemplars/multi-two-group-unpaired.svg" align="centre" width="100%" style="margin: 0px 40px"/>
		
		<p>
			Instead, the two or more mean differences on a delta axes that is now aligned vertically with, and located beneath, the rawdata axes. Indeed, the delta axes now depicts a <a href="https://en.wikipedia.org/wiki/Forest_plot">forest plot</a>, which allows the direct visual and statistical comparison of multiple mean differences (‘deltas’)
		</p>
		
		<p>
			There is also a related <router-link :to="{ name: 'user-guide', params: { plotType: plotTypes.MULTI_PAIRED.type }}">estimation plot</router-link> for repeated measures or paired observations.
		</p>

		<p><i>
						<router-link :to="{ name: 'analyze', params: { plotType: plotTypes.MULTI.type }}">
				Back to {{ plotTypes.MULTI.name }} analysis
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
