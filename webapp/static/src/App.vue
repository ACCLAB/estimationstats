<template>
	<div class="container">
		<div id="app">
			<transition name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" :duration="500">
				<header-view v-if="!$route.meta.noHeader"></header-view>
			</transition>
			<transition name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" :duration="500" @after-enter="afterEnter">
				<router-view class="main-content" :key="$route.fullPath"></router-view>
			</transition>
			<footer-view></footer-view>
		</div>
		<div v-show="navigateProgress > 0" ref="progress" class="app-progress">
			<div :style="{top: `${scrollY}px`}" class="progress">
				<div class="determinate" :style="{width: `${navigateProgress}%`}"></div>
			</div>
		</div>
	</div>
</template>

<script>
import HeaderView from '@/components/layouts/Header';
import FooterView from '@/components/layouts/Footer';

export default {
	name: 'app',
	data() {
		return {
			navigateProgress: 0,
			scrollY: 0
		};
	},
	watch: {
		navigateProgress(newVal) {
			if (newVal > 0) {
				document.body.classList.add('loading');
			} else {
				document.body.classList.remove('loading');
			}
		}
	},
	created() {
		this.$router.beforeEach((to, from, next) => {
			const progress = setInterval(() => {
				if (this.navigateProgress < 95) {
					this.navigateProgress += 5;
				} else if (this.navigateProgress > 95) {
					clearInterval(progress);
				}
				console.log('a');
			}, 100);
			next();
		});
		this.$router.afterEach((to, from) => {
			this.navigateProgress = 100;
			setTimeout(() => {
				this.navigateProgress = 0;
			}, 500);
		});
	},
	mounted() {
		document.body.appendChild(this.$refs.progress);
		window.addEventListener('scroll', () => {
			this.scrollY = window.scrollY;
		});
	},
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

<style lang="scss" scoped>
.progress {
	position: absolute;
	margin: 0;
	top: 0px;
}
</style>
