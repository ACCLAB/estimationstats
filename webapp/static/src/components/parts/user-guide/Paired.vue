<template>
	<div>

		<object data="../../../../static/img/exemplars/two-group-paired.svg" type="image/svg+xml" align="right" width="40%" style="margin: 25px 50px" >
				<img src="../../../../static/img/exemplars/two-group-paired.svg" align="right" width="40%" style="margin: 25px 50px"/>
		</object>

		<p>
			<br>
			Sometimes it is possible and preferable to take measurements from a single group before and after an intervention: the paired observations design. Since the groups being compared comprise of observations from the same individuals, the estimation plot uses before-after lines instead of dots.
		</p>

		<p>
			These lines are able to illustrate elegantly the presence of any trend between the two time-points, and are thus preferable than two bar graphs (or boxplots) that reduce both observations simply to their mean (or median).
		</p>

		<p>
			<router-link :to="{ name: 'analyze', params: { plotType: plotTypes.PAIRED.type }}">
				Back to {{ plotTypes.PAIRED.name }} analysis
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
