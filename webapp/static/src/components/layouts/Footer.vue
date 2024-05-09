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
					<img class="logo" src="./../../../static/img/Box.svg" style="width: 200px; height: 200px;">
				</router-link>
			</div>
			<div class="col s3 center-align">
				<a href="https://acclab.github.io/DABEST-python/" class="grey-text text-darken-1">
					<img class="logo" src="./../../../static/img/DABEST.svg" style="width: 160px; height: auto;">
				</a>
			</div>
			<div class="col s3 center-align">
				<a href="https://acclab.github.io/dabestr/" class="grey-text text-darken-1">
					<img class="logo" src="./../../../static/img/dabestr.svg" style="width: 160px; height: auto;">
				</a>
			</div>
			<div class="col s3 center-align">
				<router-link exact :to="{ name: 'about' }" class="grey-text text-darken-1">
					<img class="logo" src="./../../../static/img/WebApp.svg" style="width: 160px; height: auto;">
				</router-link>
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
