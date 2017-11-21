<template>
	<div class="container">
		<div id="app">
			<transition name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" :duration="500">
				<header-view v-if="!$route.meta.noHeader"></header-view>
			</transition>
			<transition name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" :duration="500" @after-enter="afterEnter">
				<router-view class="main-content" :key="$route.params.plotType"></router-view>
			</transition>
			<footer-view></footer-view>
		</div>
	</div>
</template>

<script>
import HeaderView from '@/components/layouts/Header';
import FooterView from '@/components/layouts/Footer';

export default {
	name: 'app',
	methods: {
		afterEnter() {
			this.$root.$emit('triggerScroll');
		}
	},
	components: {
		HeaderView,
		FooterView
	}
};
</script>
