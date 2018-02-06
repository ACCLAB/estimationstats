<template>
	<div id="home">
		<div class="row"></div>
		<!-- <div class="row">
			<div class="col s6 offset-s6">
				<img width="100%" src="./../../../static/img/Curve.svg">
			</div>
		</div> -->
		<div class="row">
			<div class="col s12">
				<span class="title main-title grey-text text-darken-3">
					Estimation Statistics
				</span> BETA
			</div>
			<div class="col s12">
				<span class="title sub-title grey-text text-darken-1">
					Analyze your data with effect sizes
				</span>
			</div>
		</div>


		<div class="row"></div>
		<div class="row">
			<div class="col s12">
				<span id="begin" class="title">Intro</span>
				<div class="divider heavy"></div>
			</div>
			<div class="col s6">
				<router-link :to="{ name: 'background'}">
					What is Estimation Statistics?
				</router-link>
			</div>
			<div class="col s6">
				<router-link :to="{ name: 'user-guide', params: { plotType: plotTypes.UNPAIRED.type }}">
					The Five Plot Types
				</router-link>
			</div>
		</div>



		<div class="row"></div>
		<br>
		<div class="row">
			<div class="col s12">
				<span id="plot" class="title">Gardner-Altman Plots</span>
				<div class="divider heavy"></div>
			</div>
			<div class="col s6">
				<router-link :to="{ name: 'analyze', params: { plotType: plotTypes.UNPAIRED.type }}">
					<img src="./../../../static/img/two-group-unpaired-display.svg" height="50%" width="50%">
					<br>
					{{ plotTypes.UNPAIRED.name }}
				</router-link>
			</div>

			<div class="col s6">
				<router-link :to="{ name: 'analyze', params: { plotType: plotTypes.PAIRED.type }}">
					<img src="./../../../static/img/two-group-paired-display.svg" height="50%" width="50%">
					<br>
					{{ plotTypes.PAIRED.name }}
				</router-link>
			</div>
		</div>

			<div class="row"></div>
			<br>

			<div class="row">
				<div class="col s12">
					<span id="plot" class="title">Cumming Plots</span>
					<div class="divider heavy"></div>
				</div>
				<div class="row"></div> <!-- Not sure why a spacer row is needed here..-->
				<div class="col s6">
					<router-link :to="{ name: 'analyze', params: { plotType: plotTypes.MULTI.type }}">
						<img src="./../../../static/img/multi-two-group-unpaired-display.svg" height="75%">
						<br>
						{{ plotTypes.MULTI.name }}
					</router-link>
				</div>

				<div class="col s6">
					<router-link :to="{ name: 'analyze', params: { plotType: plotTypes.MULTI_PAIRED.type }}">
						<img src="./../../../static/img/multi-two-group-paired-display.svg" height="75%">
						<br>
						{{ plotTypes.MULTI_PAIRED.name }}
					</router-link>
				</div>

			<div class="row"></div>
			<div class="row"></div>
			<div class="col s6">
				<router-link :to="{ name: 'analyze', params: { plotType: plotTypes.SHARED_CONTROL.type }}">
					<img src="./../../../static/img/shared-control-display.svg" height="75%">
					<br>
					{{ plotTypes.SHARED_CONTROL.name }}
				</router-link>
			</div>
		</div>

		<div class="row"></div>
		<br>
		<div class="row">
			<div class="col s12">
				<span id="begin" class="title">Find Out More</span>
				<div class="divider heavy"></div>
			</div>
				<div class="col s6">
					<router-link :to="{ name: 'about'}">About this site</router-link>
				</div>
				<div class="col s6">
					<a href='https://github.com/ACCLAB/DABEST-python' target='_blank'>Get the code</a>
					<!-- <router-link :to="{ name: 'get-code'}">Get the code</router-link> -->
				</div>
			</div>
		</div>

	</div>
</template>

<script>
import * as constants from '@/utils/constants.js';

export default {
	data() {
		return {
			plotTypes: constants.plotTypes
		};
	},
	metaInfo() {
		return {
			title: 'Estimation Statistics'
		};
	}
};
</script>
