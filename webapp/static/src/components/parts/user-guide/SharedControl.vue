<template>
	<div>
		<p>
			Many biological experiments are designed around a single control group and its comparison with several intervention groups.
		</p>

		<p>
			A shared-control estimation plotpresents the mean differences between a single control (the first column of your spreadsheet) and each of the intervention groups.
		</p>

		<object data="../../../../static/img/exemplars/shared-control.svg" type="image/svg+xml" align="centre" width="85%" style="margin: 0px 40px">
				<img src="../../../../static/img/exemplars/shared-control.svg" align="centre" width="85%" style="margin: 0px 40px"/>
		</object>

		<p>
			<router-link :to="{ name: 'analyze', params: { plotType: plotTypes.SHARED_CONTROL.type }}">
				Back to {{ plotTypes.SHARED_CONTROL.name }} analysis
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
