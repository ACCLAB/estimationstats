<template>
	<div class="navbar-fixed">
		<nav class="white" role="navigation">
			<ul id="slide-out" class="side-nav fixed black-text">
				<li class="main-menu">Analysis menu</li>
				<li v-for="plot in plotTypes" :key="plot.type" class="sub-menu">
					<router-link :to="{ name: 'analyze', params: { plotType: plot.type }}" :class="{active:plot===plotTypes.UNPAIRED && $route.path==='/'}">{{ plot.name }}</router-link>
				</li>
				<li class="main-menu">User guide</li>
				<li v-for="plot in plotTypes" :key="plot.type" class="sub-menu">
					<router-link :to="{ name: 'user-guide', params: { plotType: plot.type }}">{{ plot.name }}</router-link>
				</li>
			</ul>
			<a href="#" data-activates="slide-out" class="button-collapse side-menu">
				<i class="medium material-icons">menu</i>
			</a>
			<div class="nav-wrapper valign-wrapper">
				<h1 class="blue-text text-darken-3">Estimation Stats</h1>
			</div>
		</nav>
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
