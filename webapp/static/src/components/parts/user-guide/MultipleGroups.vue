<template>
	<div>

		<p>
			To compare two or more similar experiments, it is often convenient to place a number of two-groups results into a single arrangement. In this plot, the mean difference can no longer be placed to the right.
		</p>

		<img src="../../../../static/img/exemplars/multi-two-group-unpaired.svg" class="responsive-img">
		
		<p>
			Instead, the two or more mean differences on a delta axes that is now aligned vertically with, and located beneath, the rawdata axes. Indeed, the delta axes now depicts a <a href="https://en.wikipedia.org/wiki/Forest_plot">forest plot</a>, which allows the direct visual and statistical comparison of multiple mean differences (‘deltas’). This estimation plot design draws heavily from <a href='https://www.youtube.com/watch?v=nDN-hcKR7j8' target='_blank'>Geoff Cumming</a>'s textbook <a href='https://www.routledge.com/Understanding-The-New-Statistics-Effect-Sizes-Confidence-Intervals-and/Cumming/p/book/9780415879682' targtarget='_blank'><i>Understanding the New Statistics</i></a>, and hence is termed a Cumming plot.
		</p>
		
		<p>
			There is also a related estimation plot for <router-link :to="{ name: 'user-guide', params: { plotType: plotTypes.MULTI_PAIRED.type }}">repeated measures or paired observations</router-link>.
		</p>

		<p><i>
						<router-link :to="{ name: 'analyze', params: { plotType: plotTypes.MULTI.type }}">
				Back to {{ plotTypes.MULTI.back_link }} analysis
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
