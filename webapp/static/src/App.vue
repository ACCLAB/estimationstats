<template>
	<div id="app">
		<header-view></header-view>
		<div class="main">
			<router-view/>
		</div>
	</div>
</template>

<script>
import HeaderView from '@/components/layouts/Header';

export default {
	name: 'app',
	components: {
		HeaderView
	}
};
</script>
