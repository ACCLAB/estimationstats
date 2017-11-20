<template>
	<div id="home">
		<br>
		<div class="row">
			<div class="col s6 offset-s6">
				<img width="100%" src="./../../../static/img/Curve.svg">
			</div>
		</div>
		<div class="row">
			<div class="col s12">
				<span class="title main-title grey-text text-darken-3">Estimation Statistics</span>
			</div>
			<div class="col s12">
				<span class="title sub-title grey-text text-darken-1">Analyze your data with effect sizes</span>
			</div>
		</div>
		<br>
		<div class="row">
			<div class="col s12">
				<span class="title">Start</span>
				<div class="divider heavy"></div>
			</div>
			<div class="col s6">
				<router-link :to="{ name: 'introduction'}">Introduction</router-link>
			</div>
			<div class="col s6">
				<router-link :to="{ name: 'about'}">About this site</router-link>
			</div>
			<div class="col s6">
				<router-link :to="{ name: 'user-guide', params: { plotType: plotTypes.UNPAIRED.type }}">User guide</router-link>
			</div>
			<div class="col s6">
				<router-link :to="{ name: 'get-code'}">Get the code</router-link>
			</div>
		</div>
		<div class="row"></div>
		<div class="row">
			<div class="col s12">
				<span class="title">Plot</span>
				<div class="divider heavy"></div>
			</div>
			<div class="col s6">
				<router-link :to="{ name: 'analyze', params: { plotType: plotTypes.UNPAIRED.type }}">{{ plotTypes.UNPAIRED.name }}</router-link>
			</div>
			<div class="col s6">
				<router-link :to="{ name: 'analyze', params: { plotType: plotTypes.MULTI.type }}">{{ plotTypes.MULTI.name }}</router-link>
			</div>
			<div class="col s6">
				<router-link :to="{ name: 'analyze', params: { plotType: plotTypes.PAIRED.type }}">{{ plotTypes.PAIRED.name }}</router-link>
			</div>
			<div class="col s6">
				<router-link :to="{ name: 'analyze', params: { plotType: plotTypes.MULTI_PAIRED.type }}">{{ plotTypes.MULTI_PAIRED.name }}</router-link>
			</div>
			<div class="col s6 offset-s6">
				<router-link :to="{ name: 'analyze', params: { plotType: plotTypes.SHARED_CONTROL.type }}">{{ plotTypes.SHARED_CONTROL.name }}</router-link>
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

