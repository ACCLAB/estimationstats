<template>
	<header>
		<breadcrumbs v-if="!this.$route.meta.noHeader"></breadcrumbs>
		<nav class="navbar-fixed" v-else>
			<img src="./../../../static/img/Logo-resize.svg" alt="Logo">
            <a href="https://estimationstats.com">Visit Our Website</a>
		</nav>
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
