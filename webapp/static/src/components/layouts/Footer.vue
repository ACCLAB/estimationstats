<template>
	
	<footer>
		
		<div class="row">
			<!-- <div class="col s12">
				<div class="divider heavy"></div>
			</div> -->
		</div>
		
		<div class="row valign-wrapper">

			<div class="col s2 left-align">
				<router-link exact :to="{ name: 'home' }" class="grey-text text-darken-1">
					<img class="logo" src="./../../../static/img/Logo-resize.svg">
				</router-link>
			</div>

			<div class="col s10 center-align">
				<div class="menu center-align">
						<!-- <h5> -->
						<router-link exact :to="{ name: 'analyze', params: { plotType: plotTypes.UNPAIRED.type }}" class="grey-text text-darken-1">{{ plotTypes.UNPAIRED.footer_name }}</router-link>

						<span class="inline-divider heavy"></span>
						<router-link exact :to="{ name: 'analyze', params: { plotType: plotTypes.PAIRED.type }}" class="grey-text text-darken-1">{{ plotTypes.PAIRED.footer_name }}</router-link>

						<span class="inline-divider heavy"></span>
						<router-link exact :to="{ name: 'analyze', params: { plotType: plotTypes.MULTI.type }}" class="grey-text text-darken-1">{{ plotTypes.MULTI.footer_name }}</router-link>

						<span class="inline-divider heavy"></span>
						<router-link exact :to="{ name: 'analyze', params: { plotType: plotTypes.MULTI_PAIRED.type }}" class="grey-text text-darken-1">{{ plotTypes.MULTI_PAIRED.footer_name }}</router-link>

						<span class="inline-divider heavy"></span>
						<router-link exact :to="{ name: 'analyze', params: { plotType: plotTypes.SHARED_CONTROL.type }}" class="grey-text text-darken-1">{{ plotTypes.SHARED_CONTROL.footer_name }}</router-link>
					<!-- </h5> -->
				</div>
			</div>
			
		</div>
		
	</footer>
	
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
