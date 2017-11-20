<template>
	<header>
		<breadcrumbs v-if="!this.$route.meta.noHeader"></breadcrumbs>
		<nav v-else></nav>
		<div class="divider heavy"></div>
	</header>
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
