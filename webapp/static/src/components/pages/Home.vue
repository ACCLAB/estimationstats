<template>
	<div id="home">
		<div class="row">
			<div class="col s6 offset-s6">
				<img width="100%" src="./../../../static/img/Curve.svg" alt="statistical analysis">
			</div>
		</div>
		<div class="row">
			<div class="col s12">
				<span class="title main-title grey-text text-darken-3">
					Estimation Statistics
				</span> 
			</div>
			<div class="col s12">
				<span class="title sub-title grey-text text-darken-1">
					Analyze your data with effect sizes
				</span>
			</div>
		</div>

		<div class="row">

			<div class="col s12">
				<span id="plot" class="title">Plot</span>
				<div class="divider heavy"></div>
			</div>

			<div class="col s6">
				<router-link :to="{ name: 'analyze', params: { plotType: plotTypes.UNPAIRED.type }}">
					{{ plotTypes.UNPAIRED.home_name }}
				</router-link>
			</div>
			<div class="col s6">
				<router-link :to="{ name: 'analyze', params: { plotType: plotTypes.PAIRED.type }}">
					{{ plotTypes.PAIRED.home_name }}
				</router-link>
			</div>

			<div class="col s6">
				<router-link :to="{ name: 'analyze', params: { plotType: plotTypes.MULTI.type }}">
					{{ plotTypes.MULTI.home_name }}
				</router-link>
			</div>
			<div class="col s6">
				<router-link :to="{ name: 'analyze', params: { plotType: plotTypes.MULTI_PAIRED.type }}">
					{{ plotTypes.MULTI_PAIRED.home_name }}
				</router-link>
			</div>

			<div class="col s6">
				<router-link :to="{ name: 'analyze', params: { plotType: plotTypes.SHARED_CONTROL.type }}">
					{{ plotTypes.SHARED_CONTROL.home_name }}
				</router-link>
			</div>

			<div class="col s6">
				<router-link :to="{ name: 'analyze', params: { plotType: plotTypes.REPEATED_MEASURES.type }}">
					{{ plotTypes.REPEATED_MEASURES.home_name }}
				</router-link>
			</div>

			<div class="col s6">
				<router-link :to="{ name: 'analyze', params: { plotType: plotTypes.PROPORTION.type }}">
					{{ plotTypes.PROPORTION.home_name }}
				</router-link>
			</div>

			<div class="col s6">
				<router-link :to="{ name: 'analyze', params: { plotType: plotTypes.PROPORTION_PAIRED.type }}">
					{{ plotTypes.PROPORTION_PAIRED.home_name }}
				</router-link>
			</div>

			<div class="col s6">
				<router-link :to="{ name: 'analyze', params: { plotType: plotTypes.DELTA_DELTA.type }}">
					{{ plotTypes.DELTA_DELTA.home_name }}
				</router-link>
			</div>

			<div class="col s6">
				<router-link :to="{ name: 'analyze', params: { plotType: plotTypes.DELTA_DELTA_PAIRED.type }}">
					{{ plotTypes.DELTA_DELTA_PAIRED.home_name }}
				</router-link>
			</div>

			<div class="col s6">
				<router-link :to="{ name: 'analyze', params: { plotType: plotTypes.MINI_META.type }}">
					{{ plotTypes.MINI_META.home_name }}
				</router-link>
			</div>

			<div class="col s6">
				<router-link :to="{ name: 'analyze', params: { plotType: plotTypes.MINI_META_PAIRED.type }}">
					{{ plotTypes.MINI_META_PAIRED.home_name }}
				</router-link>
			</div>

		</div>

		<div class="row"></div>

			<div class="row">
				<div class="col s12">
					<span id="begin" class="title">Background</span>
					<div class="divider heavy"></div>
				</div>


				<div class="col s6">
					<router-link :to="{ name: 'background'}">
						What is estimation?
					</router-link>
				</div>

				<div class="col s6">
					<router-link :to="{ name: 'getcode'}">
						Get the code
					</router-link>
				</div>

				<div class="col s6">
					<router-link :to="{ name: 'about'}">
						About this site
					</router-link>
				</div>

				<div class="col s6">
					<router-link :to="{ name: 'readthepaper'}">
						Read the paper
					</router-link>
				</div>
				<div class="col s6">
					<router-link :to="{ name: 'meettheteam'}">
						Meet the team
					</router-link>
				</div>

			</div>

		<!-- <div class="row">
			<div class="col s12">
				<span id="begin" class="title">Find Out More</span>
				<div class="divider heavy"></div>
		</div> -->

	</div>
</template>

<script>
import * as constants from '@/utils/constants.js';

export default {
	title: 'Estimation Statistics',
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
