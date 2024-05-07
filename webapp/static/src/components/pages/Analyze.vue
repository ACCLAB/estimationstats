<template>
	<div>
		<div class="page-title">
			{{ plotName }}
		</div>

		<div class="row">
			<!-- <div class="col number">
				<i class="circle-number left">0</i>
			</div> -->
			<div class="col content">
				<template v-if="plotType === plotTypes.UNPAIRED.type">
					This page does estimation statistics' counterpart to Student’s t-test: the two-independent-groups mean difference plot.
				</template>
				<template v-else-if="plotType === plotTypes.PAIRED.type">
					This page will generate the estimation version of the paired t-test: the paired mean difference plot.
				</template>
				<template v-else-if="plotType === plotTypes.MULTI.type">
					Use this page to make a single plot of several sets of two-groups data. This enables side-by-side comparison of multiple mean differences.
				</template>
				<template v-else-if="plotType === plotTypes.MULTI_PAIRED.type">
					Use this page to make a single plot of multiple sets of paired data. Useful for side-by-side comparison of multiple paired mean differences.
				</template>
				<template v-else-if="plotType === plotTypes.SHARED_CONTROL.type">
					Use this page to make a plot of experiments that share one reference control group.
				</template>
				<template v-else-if="plotType === plotTypes.REPEATED_MEASURES.type">
					Use this page to make a plot showing effect sizes from repeated-measures data. The effect sizes are calculated relative to a baseline reference. This would be typically used for repeated observations from the same cohort of subject.				
				</template>
				<template v-else-if="plotType === plotTypes.PROPORTION.type">
					Use this page to make a plot of proportions from independent groups. Input values are binary only, limited to 0 and 1 ('failure' and 'success', respectively). For proportions from paired or repeated observations, use <router-link :to="{ name: 'analyze', params: { plotType: plotTypes.PROPORTION_PAIRED.type }}">this function</router-link>.				
				</template>
				<template v-else-if="plotType === plotTypes.PROPORTION_PAIRED.type">
					Use this page to make a plot of proportions from paired data or repeated observations. Input values are binary only, limited to 0 and 1 ('failure' and 'success', respectively). For proportions from independent groups, use <router-link :to="{ name: 'analyze', params: { plotType: plotTypes.PROPORTION.type }}">this function</router-link>.			
				</template>
				<template v-else-if="plotType === plotTypes.DELTA_DELTA.type">
					Use this page to make a delta-delta plot for 2 × 2 experimental designs where the effect of two independent variables on a dependent variable are studied. The goal is to report a distilled effect size accounting for multiple controls. It plots raw data for all four groups, along with an effect size between each pair, and an overall effect size between the primary effect sizes For paired data, use <router-link :to="{ name: 'analyze', params: { plotType: plotTypes.DELTA_DELTA_PAIRED.type }}">this function</router-link>.			
				</template>
				<template v-else-if="plotType === plotTypes.DELTA_DELTA_PAIRED.type">
					Use this page to make a delta-delta plot for 2 × 2 experimental designs where the effect of two independent variables on a dependent variable are studied, where one of the independent variable is a within subject measurement (paired). The goal is to report a distilled effect size accounting for multiple controls.  It plots raw data for all four groups, along with an effect size between each pair, and an overall effect size between the primary effect sizes. For unpaired data, use <router-link :to="{ name: 'analyze', params: { plotType: plotTypes.DELTA_DELTA.type }}">this function</router-link>.			
				</template>
				<template v-else-if="plotType === plotTypes.MINI_META.type">
					Use this page to plot a weighted delta for meta-analysis of experimental replicates. For paired data, use <router-link :to="{ name: 'analyze', params: { plotType: plotTypes.MINI_META_PAIRED.type }}">this function </router-link>.			
				</template>
				<template v-else-if="plotType === plotTypes.MINI_META_PAIRED.type">
					Use this page to plot a weighted delta for meta-analysis of experimental replicates, for paired data. For unpaired data, use <router-link :to="{ name: 'analyze', params: { plotType: plotTypes.MINI_META.type }}">this function </router-link>.			
				</template>
				<router-link :to="{ name: 'user-guide', params: { plotType: plotType }}" v-if="plotType === plotTypes.UNPAIRED.type || 
				plotType === plotTypes.PAIRED.type ||
				plotType === plotTypes.MULTI.type || 
				plotType === plotTypes.MULTI_PAIRED.type || 
				plotType === plotTypes.SHARED_CONTROL.type ">
					Find out more.
				</router-link>
			</div>
		</div>

		<br>

		<!-- Enter Data -->
		<div class="row">
			<div class="col s1">
				<i class="circle-number left">1</i>
			</div>
			<div class="col s11">
				Enter your data
			</div>
		</div>

		<div class="row">
			<template v-if="plotType === plotTypes.DELTA_DELTA.type">
				<div class="col content" style="font-size:1.25rem;">
				Each row of your data table should contain observations about an individual data point. Two of the columns contain labels for the two independent variables in the 2 x 2 design. The remaining columns contain values of dependent variables; see preloaded data for an example.
				</div>				
			</template>
			<template v-else-if="plotType === plotTypes.DELTA_DELTA_PAIRED.type">
				<div class="col content" style="font-size:1.25rem;">
					Each row of your data table should contain observations about an individual data point. Two of the columns contain labels for the two independent variables in the 2 x 2 design. The paired independent variable must be used as x. There should be a column containing ID’s for pairing the rows. The remaining columns contain values of dependent variables; see preloaded data for an example.				</div>				
			</template>
			<template v-else>	
				<div class="col content" style="font-size:1.25rem;">
					Each column of your data must correspond to one group of observations, and the first row must be names of the groups; see preloaded data for an example.
				</div>
			</template>
		</div>

		<div class="row">
			<div class="col s12 input-types">
				<span v-for="inputDataType in inputDataTypes" :key="inputDataType.type">
					<input type="radio" :id="inputDataType.type" v-model="curentInputType" :value="inputDataType.type" />
					<label :for="inputDataType.type">{{ inputDataType.name }}</label>
				</span>
			</div>
		</div>

		<div class="row hotTable" v-show="curentInputType === inputDataTypes.COPY_PASTE.type">
			<template v-if="plotType === plotTypes.UNPAIRED.type || plotType === plotTypes.PAIRED.type">
				<HotTable :settings="hotSettingsTwoGroup"></HotTable>
			</template>

			
			<template v-else-if="plotType === plotTypes.DELTA_DELTA.type">
			    <HotTable :settings="hotSettingsDelta"></HotTable>
			</template>
						
			<template v-else-if="plotType === plotTypes.DELTA_DELTA_PAIRED.type">
			    <HotTable :settings="hotSettingsDeltaPaired"></HotTable>
			</template>

			<template v-else-if="plotType === plotTypes.MINI_META.type || plotType === plotTypes.MINI_META_PAIRED.type">
			    <HotTable :settings="hotSettingsMeta"></HotTable>
			</template>
			
			<template v-else-if="plotType === plotTypes.PROPORTION.type || plotType === plotTypes.PROPORTION_PAIRED.type">
			    <HotTable :settings="hotSettingsBinary"></HotTable>
			</template>

			<template v-else>
				<HotTable :settings="hotSettingsMultiGroup"></HotTable>
				<div class="row">
					<div class="col content" style="font-size:1rem;">
						This
						<a href='https://www.rdocumentation.org/packages/PairedData/versions/0.9.9/topics/anscombe2'>preloaded dataset</a> consists of four sets of paired samples (n=15) giving the same paired t-test <i>P</i> value, despite vastly divergent graphical relationships.
					</div>
				</div>
			</template>
		</div>

		<div class="row">
			<div class="file-field input-field col s11 file-field input-field blue-text" v-show="curentInputType === inputDataTypes.CSV.type">
				<div class="btn btn-large">
					<span>
						<i class="medium material-icons left pe-7s-file"></i>
						<span>Choose file</span>
						<input :ref="'file'" type="file" name="file" accept=".csv" @change="onSelectFile">
					</span>
				</div>
				<div class="file-path-wrapper">
					<input id="file-path" class="file-path validate" type="text">
				</div>
			</div>
		</div>





			<!-- Choose Effect Size -->
			<div class="row">
				<div class="col s1">
					<i class="circle-number left">2</i>
				</div>
				<div class="col s11">
					Choose your effect size
				</div>
			</div>

			<div class="row">
				<div class="col content" style="font-size:1.25rem;">
					Mouse-over each effect size for a short description, or click <router-link :to="{ name: 'abouteffsizes'}">here</router-link>.
				</div>
			</div>

			<div class="row">
				<template v-if="plotType == plotTypes.DELTA_DELTA.type || plotType == plotTypes.DELTA_DELTA_PAIRED.type || plotType == plotTypes.MINI_META.type || plotType == plotTypes.MINI_META_PAIRED.type">
					<div class="col s12 unpaired-effect-size" style="text-align:left; font-size:15px">
						<span v-for="es in deltaDeltaMiniMetaEffectSizes" :key="es.type" v-bind:title="es.desc">
							<input type="radio" :id="es.type" :value="es.type" v-model="effectSize" v-tooltip.top-center="es.name"/>
							<label :for="es.type">{{es.name}}</label>
						</span>
					</div>

				</template>

				<template v-else-if="plotType == plotTypes.PROPORTION.type || plotType == plotTypes.PROPORTION_PAIRED.type">
					<div class="col s12 unpaired-effect-size" style="text-align:left; font-size:15px">
						<span v-for="es in proportionEffectSizes" :key="es.type" v-bind:title="es.desc">
							<input type="radio" :id="es.type" :value="es.type" v-model="effectSize" v-tooltip.top-center="es.name"/>
							<label :for="es.type">{{es.name}}</label>
						</span>
					</div>

				</template>

				<template v-else-if="plotType == plotTypes.UNPAIRED.type || plotType == plotTypes.MULTI.type || plotType == plotTypes.SHARED_CONTROL.type">
					<div class="col s12 unpaired-effect-size" style="text-align:left; font-size:15px">
						<span v-for="es in unpairedEffectSizes" :key="es.type" v-bind:title="es.desc">
							<input type="radio" :id="es.type" :value="es.type" v-model="effectSize" v-tooltip.top-center="es.name"/>
							<label :for="es.type">{{es.name}}</label>
						</span>
					</div>

				</template>
					<template v-else>
					<div class="col s12 paired-effect-size" style="text-align:left; font-size:15px">
						<span v-for="es in pairedEffectSizes" :key="es.type" v-bind:title="es.desc">
							<input type="radio" :id="es.type" :value="es.type" v-model="effectSize" v-tooltip.top-center="es.name"/>
							<label :for="es.type">{{es.name}}</label>
						</span>
					</div>
				</template>
			</div>



			<!-- Choose CI width -->
			<br>
			<div class="row">
				<div class="col s1">
					<i class="circle-number left">3</i>
				</div>
				<div class="col s11">
					Select the width of the confidence interval
				</div>
			</div>

			<div class="row">
				<div class="col content" style="font-size:1.25rem;">
					Choose an number between 50 and 99.9; the default is a 95% CI.
				</div>
			</div>

			<div class="row">
				<div class="input-field col s8">
					<vue-slider v-model="ci" interval=0.1 min=50 max=99.9
					height=8 dotSize=22 speed=0.1 tooltip=false>
					</vue-slider>
				</div>

				<div class="input-field col s2">
					<input id="ci" type="number" step=0.1 min=50 max=99.9 v-model="ci">
				</div>
			</div>

			<!-- Choose swarmplot dot size if unpaired -->
			<template v-if="plotType != plotTypes.PAIRED.type && plotType != plotTypes.MULTI_PAIRED.type && plotType != plotTypes.REPEATED_MEASURES.type && plotType != plotTypes.PROPORTION.type && plotType != plotTypes.PROPORTION_PAIRED.type && plotType != plotTypes.MINI_META_PAIRED.type && plotType != plotTypes.DELTA_DELTA_PAIRED.type">
				<br>
				<div class="row">
					<div class="col s1">
						<i class="circle-number left">4</i>
					</div>
					<div class="col s11">
						Select the size of the rawdata swarm dots
					</div>

				</div>
				<div class="row">
					<div class="col content" style="font-size:1.25rem;">
						Change the size (in <a href="https://en.wikipedia.org/wiki/Point_(typography)" tager="_blank">points</a>) of the swarmplot data points.
					</div>
				</div>

				<div class="row">
					<!-- For some reason, if the maximum goes beyond 10,
					the behaviour of the slider bar is super wonky. -->

					<div class="input-field col s8">
						<vue-slider v-model="swarm_dotsize" interval=0.1 min=1 max=9.9
						height=8 dotSize=22 speed=0.1 tooltip=false>
						</vue-slider>
					</div>

					<div class="input-field col s2">
						<input id="swarm_dotsize" type="number" step=0.1 min=1 max=9.9 v-model="swarm_dotsize">
					</div>
				</div>
			</template>



			<!-- Choose effect size dot size -->
			<br>
			<div class="row">
				<div class="col s1">
					<template v-if="plotType === plotTypes.PAIRED.type || plotType === plotTypes.MULTI_PAIRED.type || plotType === plotTypes.PROPORTION.type || plotType === plotTypes.PROPORTION_PAIRED.type || plotType === plotTypes.REPEATED_MEASURES.type">
						<i class="circle-number left">4</i>
					</template>
					<template v-else-if="plotType === plotTypes.DELTA_DELTA_PAIRED.type || plotType === plotTypes.MINI_META_PAIRED.type">
						<i class="circle-number left">4</i>
					</template>


					<template v-else>
						<i class="circle-number left">5</i>
					</template>
				</div>

				<div class="col s11">
					Select the size of the effect size markers
				</div>
			</div>

			<div class="row">
				<div class="col content" style="font-size:1.25rem;">
					Change the size (in <a href="https://en.wikipedia.org/wiki/Point_(typography)" tager="_blank">points</a>) of the effect size markers.
				</div>
			</div>

			<div class="row">
				<!-- For some reason, if the maximum goes beyond 10,
				the behaviour of the slider bar is super wonky. -->

				<div class="input-field col s8">
					<vue-slider v-model="es_markersize" interval=0.1 min=1 max=9.9
					height=8 dotSize=22 speed=0.1 tooltip=false>
					</vue-slider>
				</div>

				<div class="input-field col s2">
					<input id="es_markersize" type="number" step=0.1 min=1 max=9.9 v-model="es_markersize">
				</div>
			</div>

			<!-- Choose raw data y-axis limits -->
			<br>

		<template v-if="plotType != plotTypes.PROPORTION.type && plotType != plotTypes.PROPORTION_PAIRED.type">

			<div class="row">
				<div class="col s1">
					<template v-if="plotType === plotTypes.UNPAIRED.type">
						<i class="circle-number left">6</i>
					</template>

					<template v-else-if="plotType === plotTypes.PAIRED.type || plotType === plotTypes.MULTI_PAIRED.type || plotType === plotTypes.REPEATED_MEASURES.type">
						<i class="circle-number left">5</i>
					</template>
					<template v-else-if="plotType === plotTypes.DELTA_DELTA_PAIRED.type || plotType === plotTypes.MINI_META_PAIRED.type">
						<i class="circle-number left">5</i>
					</template>

					<template v-else-if="plotType === plotTypes.MULTI.type">
						<i class="circle-number left">6</i>
					</template>

					<template v-else-if="plotType === plotTypes.SHARED_CONTROL.type">
						<i class="circle-number left">6</i>
					</template>
					<template v-else>
							<i class="circle-number left">6</i>
					</template>
					

				</div>

				<div class="col s11">
					Set the y-axis limits for the raw data
				</div>

			</div>

			<div class="row">
				<div class="col content" style="font-size:1.25rem;">
					If left blank, the limits are auto-scaled.
				</div>
			</div>

			<div class="row">
				<div class="input-field col s5 l3">
					<input id="swarmYlimLower" type="number" step="any" v-model="swarmYlimLower">
					<label for="swarmYlimLower" class="">lower limit</label>
				</div>

				<div class="input-field col s5 l3">
					<input id="swarmYlimUpper" type="number" step="any" v-model="swarmYlimUpper">
					<label for="swarmYlimUpper" class="">upper limit</label>
				</div>
			</div>

		</template>


			<!-- Choose effect size y-axis limits -->
			<template v-if="plotType === plotTypes.MULTI.type || plotType === plotTypes.MULTI_PAIRED.type || plotType === plotTypes.SHARED_CONTROL.type || effectSize === unpairedEffectSizes.CLIFFS_DELTA.type" >
				<br>
				<div class="row">
					<div class="col s1">


						<template v-if="plotType === plotTypes.UNPAIRED.type && effectSize === unpairedEffectSizes.CLIFFS_DELTA.type">
							<i class="circle-number left">7</i>
						</template>

						<template v-else-if="plotType === plotTypes.MULTI.type">
							<i class="circle-number left">7</i>
						</template>

						<template v-else-if="plotType === plotTypes.MULTI_PAIRED.type">
							<i class="circle-number left">6</i>
						</template>

						<template v-else-if="plotType === plotTypes.SHARED_CONTROL.type">
							<i class="circle-number left">7</i>
						</template>

					</div>

					<div class="col s11">
						Set the y-axis limits for the effect size axes
					</div>

				</div>

				<div class="row">
					<div class="col content" style="font-size:1.25rem;">
						If left blank, the limits are auto-scaled.
					</div>
				</div>

				<div class="row">
					<div class="input-field col s5 l3">
						<input id="conYlimLower" type="number" step="any" v-model="conYlimLower">
						<label for="conYlimLower" class="">lower limit</label>
					</div>

					<div class="input-field col s5 l3">
						<input id="conYlimUpper" type="number" step="any" v-model="conYlimUpper">
						<label for="conYlimUpper" class="">upper limit</label>
					</div>
				</div>


			</template>


			<!-- Choose label for y-axis raw data. -->
			<br>

			<div class="row">

				<div class="col s1">

						<template v-if="plotType === plotTypes.UNPAIRED.type">
							<i class="circle-number left">7</i>
						</template>

						<template v-else-if="plotType === plotTypes.PAIRED.type || plotType === plotTypes.REPEATED_MEASURES.type">
							<i class="circle-number left">6</i>
						</template>

						<template v-else-if="plotType === plotTypes.MULTI.type">
							<i class="circle-number left">8</i>
						</template>

						<template v-else-if="plotType === plotTypes.MULTI_PAIRED.type">
							<i class="circle-number left">7</i>
						</template>

						<template v-else-if="plotType === plotTypes.SHARED_CONTROL.type">
							<i class="circle-number left">8</i>
						</template>

						<template v-else-if="plotType === plotTypes.PROPORTION.type || plotType === plotTypes.PROPORTION_PAIRED.type">
							<i class="circle-number left">5</i>
						</template>
						<template v-else-if="plotType === plotTypes.DELTA_DELTA_PAIRED.type || plotType === plotTypes.MINI_META_PAIRED.type">
						<i class="circle-number left">6</i>
					</template>

						<template v-else>
							<i class="circle-number left">7</i>
						</template>

				</div>

				<div class="col s11">
					<template v-if="plotType === plotTypes.DELTA_DELTA.type || plotType === plotTypes.DELTA_DELTA_PAIRED.type">
							Input the name of the dependent variable for the input column
					</template>
					<template v-else>
						Label the y-axis of the raw data
					</template>
				</div>
			</div>

			<div class="row">
				<div class="col content" style="font-size:1.25rem;">
					If left blank, this defaults to the string "value".
				</div>
			</div>

			<div class="row">
				<div class="input-field col s10">
					<input id="yaxis" type="text" v-model="yaxisLabel">
					<label for="yaxis" class="">y-axis label</label>
				</div>
			</div>

            <!-- Choose name of the column which contains the label of experiments. -->
			<template v-if="plotType === plotTypes.DELTA_DELTA.type || plotType === plotTypes.DELTA_DELTA_PAIRED.type" >
				<br>
				<div class="row">
					<div class="col s1">
						<template v-if="plotType === plotTypes.DELTA_DELTA.type">
							<i class="circle-number left">8</i>
						</template>
						<template v-else-if="plotType === plotTypes.DELTA_DELTA_PAIRED.type">
							<i class="circle-number left">7</i>
						</template>
					</div>
					<div class="col s11">
						Input the name of the column which contains the label of experiments
					</div>
				</div>
				<div class="row">
				<div class="col content" style="font-size:1.25rem;">
					This defaults to Status for the sample data.
				</div>
			</div>
				<div class="row">
					<div class="input-field col s10">
						<input id="experiment" type="text" v-model="experiment">
					</div>
				</div>
		    </template>

			<!-- Label x axis -->
			<template v-if="plotType === plotTypes.DELTA_DELTA.type || plotType === plotTypes.DELTA_DELTA_PAIRED.type" >
				<br>
				<div class="row">
					<div class="col s1">
						<template v-if="plotType === plotTypes.DELTA_DELTA.type">
							<i class="circle-number left">9</i>
						</template>
						<template v-else-if="plotType === plotTypes.DELTA_DELTA_PAIRED.type">
							<i class="circle-number left">8</i>
						</template>
					</div>
					<div class="col s11">
						Label the variable plotted along the horizontal axis and the variable to determine the colour of dots for scattered plots or the colour of lines for slopegraphs, separated by a comma.
					</div>
				</div>
				<div class="row">
				<div class="col content" style="font-size:1.25rem;">
					This defaults to Condition,Genotype for the sample data.
				</div>
			</div>
				<div class="row">
					<div class="input-field col s10">
						<input id="x" type="text" v-model="x">
					</div>
				</div>
		    </template>

			<!-- Analyse -->
			<br>
			<div class="row">
				<div class="col s1">
					<template v-if="plotType === plotTypes.UNPAIRED.type && effectSize != unpairedEffectSizes.CLIFFS_DELTA.type">
						<i class="circle-number left">8</i>
					</template>

					<template v-else-if="plotType === plotTypes.UNPAIRED.type && effectSize === unpairedEffectSizes.CLIFFS_DELTA.type">
						<i class="circle-number left">9</i>
					</template>

					<template v-else-if="plotType === plotTypes.PAIRED.type || plotType === plotTypes.REPEATED_MEASURES.type">
						<i class="circle-number left">7</i>
					</template>
					<template v-else-if="plotType === plotTypes.MINI_META_PAIRED.type">
						<i class="circle-number left">7</i>
					</template>

					<template v-else-if="plotType === plotTypes.MULTI_PAIRED.type">
						<i class="circle-number left">8</i>
					</template>

					<template v-else-if="plotType === plotTypes.MULTI.type">
						<i class="circle-number left">9</i>
					</template>

					<template v-else-if="plotType === plotTypes.SHARED_CONTROL.type">
							<i class="circle-number left">9</i>
					</template>

					<template v-else-if="plotType === plotTypes.DELTA_DELTA.type">
							<i class="circle-number left">10</i>
					</template>
					<template v-else-if="plotType === plotTypes.DELTA_DELTA_PAIRED.type">
							<i class="circle-number left">9</i>
						</template>
					<template v-else-if="plotType === plotTypes.PROPORTION.type || plotType === plotTypes.PROPORTION_PAIRED.type">
							<i class="circle-number left">6</i>
						</template>
					<template v-else>
							<i class="circle-number left">8</i>
					</template>
				</div>

				<div class="col s11">
					Analyze and display your data
				</div>
			</div>

			<div class="row">
				<div class="file-field input-field col s12">
					<div class="btn btn-large" :class="{disabled:isAnalyzing || !analyable}" @click="onAnalyze">
						<span>
							<i class="medium material-icons left pe-7s-display1"></i>
							<span class="left">Analyze</span>
						</span>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="preloader-wrapper active" v-show="isAnalyzing">

					<div class="spinner-layer spinner-blue">
						<div class="circle-clipper left">
							<div class="circle"></div>
						</div>
						<div class="gap-patch">
							<div class="circle"></div>
						</div>
						<div class="circle-clipper right">
							<div class="circle"></div>
						</div>
					</div>

					<div class="spinner-layer spinner-red">
					<div class="circle-clipper left">
						<div class="circle"></div>
					</div><div class="gap-patch">
						<div class="circle"></div>
					</div><div class="circle-clipper right">
						<div class="circle"></div>
					</div>
				</div>

				<div class="spinner-layer spinner-yellow">
					<div class="circle-clipper left">
						<div class="circle"></div>
					</div><div class="gap-patch">
						<div class="circle"></div>
					</div><div class="circle-clipper right">
						<div class="circle"></div>
					</div>
				</div>

				<div class="spinner-layer spinner-green">
					<div class="circle-clipper left">
						<div class="circle"></div>
					</div><div class="gap-patch">
						<div class="circle"></div>
					</div><div class="circle-clipper right">
						<div class="circle"></div>
					</div>
				</div>
				</div>
			</div>

			<div class="row">
				<div class="file-field input-field col s12">
					<template v-if="_.has(analyzedData, 'png')">

						<!-- The image is inserted below. -->
						<img :src="`data:image/png;base64,${analyzedData.png}`" width="100%">

						<!-- Figure Legend and results are inserted below. -->
						<p v-html="analyzedData.legend"></p>

				</template>
				</div>
			</div>

			<!-- Download -->
			<div class="row">
				<div class="col s1">
				<template v-if="plotType === plotTypes.UNPAIRED.type && effectSize != unpairedEffectSizes.CLIFFS_DELTA.type">
					<i class="circle-number left">9</i>
				</template>

				<template v-else-if="plotType === plotTypes.UNPAIRED.type && effectSize === unpairedEffectSizes.CLIFFS_DELTA.type">
					<i class="circle-number left">10</i>
				</template>

				<template v-else-if="plotType === plotTypes.PAIRED.type">
					<i class="circle-number left">8</i>
				</template>
				<template v-else-if="plotType === plotTypes.MINI_META_PAIRED.type">
					<i class="circle-number left">8</i>
				</template>


				<template v-else-if="plotType === plotTypes.MULTI_PAIRED.type">
					<i class="circle-number left">9</i>
				</template>

				<template v-else-if="plotType === plotTypes.MULTI.type">
					<i class="circle-number left">10</i>
				</template>

				<template v-else-if="plotType === plotTypes.SHARED_CONTROL.type">
					<i class="circle-number left">10</i>
				</template>

				<template v-else-if="plotType === plotTypes.REPEATED_MEASURES.type">
					<i class="circle-number left">8</i>
				</template>

				<template v-else-if="plotType === plotTypes.DELTA_DELTA.type">
					<i class="circle-number left">11</i>
				</template>
				<template v-else-if="plotType === plotTypes.DELTA_DELTA_PAIRED.type">
							<i class="circle-number left">10</i>
						</template>

				<template v-else-if="plotType === plotTypes.PROPORTION.type || plotType === plotTypes.PROPORTION_PAIRED.type">
							<i class="circle-number left">7</i>
				</template>

				<template v-else>
					<i class="circle-number left">9</i>
				</template>
				</div>

				<div class="col s11">
					Download the results
				</div>
			</div>

			<div class="row">
				<div class="col content" style="font-size:1.25rem;">
					Plots are available in SVG or PNG formats.
					<br>The table of statistics can be downloaded as a CSV text file.
				</div>
			</div>

			<div class="row">
				<div class="col s12 file-types">
					<span v-for="fileType in fileTypes" :key="fileType.extension">
						<input type="radio" :id="fileType.extension" v-model="fileExtension" :value="fileType.extension" />
						<label :for="fileType.extension">{{ fileType.name }}</label>
					</span>
				</div>
			</div>

			<div class="row">
				<div class="file-field input-field col s12">
					<div class="btn btn-large" @click="onDownload" :class="{disabled:_.isEmpty(analyzedData)}">
						<span>
							<i class="medium material-icons left pe-7s-cloud-download"></i>
							<span class="left">Download</span>
						</span>
					</div>
				</div>
			</div>

			<div class="row">
				<template v-if="_.has(analyzedData, 'png')">
					<div class="row">
						<div class="col content" style="font-size:0.9rem; font-style:italic;">
						<!-- Mild Panic Button. -->
						Spotted something amiss? Send your feedback <a href='mailto:estimationstats@googlegroups.com'>here</a>.
						</div>
					</div>
				</template>
			</div>

	</div>

</template>



<script>
// import Vue from 'vue';
import _ from 'lodash';
import HotTable from 'vue-handsontable-official';
import vueSlider from 'vue-slider-component';
// import VTooltip from 'v-tooltip';
import * as constants from '@/utils/constants.js';
import * as plotService from '@/services/plot-service.js';
import * as downloadUtil from '@/utils/download-util.js';

// Vue.use(VTooltip);

export default {
	data() {
		let self = this;
		return {
			ci: 95,
			swarm_dotsize: 5,
			es_markersize: 8,
			file: null,
			fileTypes: constants.fileTypes,
			fileExtension: constants.fileTypes.PNG.extension, // Default is download PNG
			inputDataTypes: constants.inputDataTypes,
			curentInputType: constants.inputDataTypes.COPY_PASTE.type, // Default is copy paste data
			plotTypes: constants.plotTypes,
			unpairedEffectSizes: constants.unpairedEffectSizes,
			proportionEffectSizes: constants.proportionEffectSizes,
			deltaDeltaMiniMetaEffectSizes: constants.deltaDeltaMiniMetaEffectSizes,
			pairedEffectSizes: constants.pairedEffectSizes,
			effectSize: constants.unpairedEffectSizes.MEAN_DIFF.type, // default is mean difference.
			effectSizePrint: constants.unpairedEffectSizes.MEAN_DIFF.name,
			effectSizeDropDown: constants.unpairedEffectSizes.MEAN_DIFF.name,
			yaxisLabel: '',
			swarmYlimLower: '',
			swarmYlimUpper: '',
			conYlimLower: '',
			conYlimUpper: '',
			analyzedData: {},
			fileName: '',
			experiment: 'Condition',
			x_values: '',
			x: 'Treatment,Genotype',
			isAnalyzing: false,
			hotDataChangeTrigger: 0,
			hot: null, // Handsontable instance
			hotSettingsTwoGroup: { // Handsontable config
				data: [
					['Control', 'Test'],
					[8.885, 6.625],
					[14.38, 2.3],
					[8.015, 11.975],
					[5.835, 3.65],
					[5.47, 8.325],
					[12.06, 9],
					[11.72, 6.675],
					[10.315, 5.35],
					[5.065, 3.025],
					[8.235, 0.7],
					[15.08, 8.375],
					[13.485, 8.235],
					[11.3, 6.91],
					[9.82, 8.59],
					[9.565, 9.265]
				],
				width: 225,
				height: 400,
				minRows: 15,
				minCols: 2,
				colWidths: 80,
				rowHeights: 30,
				colHeaders: true,
				rowHeaders: true,
				manualColumnResize: true,
				contextMenu: true,
				afterInit() {
					self.hot = this;
				},
				afterChange() {
					self.hotDataChangeTrigger++;
				}
			},
			hotSettingsMultiGroup: { // Handsontable config
				data: [
					['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'],
					[8.885, 10.135, 8, -35, 3.375, 6.625, 0.54, -0.54],
					[14.38, 11.94, 7, -30, -0.3, 2.3, 1.98, 0.02],
					[8.015, 6.025, 17, -25, 10.025, 11.975, 1.1, 0.9],
					[5.835, 3.045, 15, -20, 2.35, 3.65, 3.42, 0.58],
					[5.47, 1.87, 12, -15, 7.675, 8.325, 2.54, 1.46],
					[12.06, 12.64, 5, -10, 9, 9, 1.655, 2.345],
					[11.72, 9.66, 6, -5, 7.325, 6.675, 4.865, 1.135],
					[10.315, 9.265, 19, 0, 6.65, 5.35, 3.98, 2.02],
					[5.065, 6.155, 16, 5, 4.975, 3.025, 3.1, 2.9],
					[8.235, 10.785, 11, 10, 3.3, 0.7, 2.215, 3.785],
					[15.08, 12.36, 18, 15, 11.625, 8.375, 6.305, 1.695],
					[13.485, 10.175, 9, 20, 17.765, 8.235, 5.42, 2.58],
					[11.3, 12.38, 14, 25, 17.09, 6.91, 4.54, 3.46],
					[9.82, 9.66, 13, 30, 19.41, 8.59, 3.655, 4.345],
					[9.565, 6.955, 10, 35, 20.735, 9.265, 2.775, 5.225]
				],
				// width: 350,
				height: 400,
				minRows: 15,
				minCols: 10,
				colWidths: 80,
				rowHeights: 30,
				colHeaders: true,
				rowHeaders: true,
				manualColumnResize: true,
				contextMenu: true,
				afterInit() {
					self.hot = this;
				},
				afterChange() {
					self.hotDataChangeTrigger++;
				}
			},
			hotSettingsBinary: {
				data: [
					['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'],
					[1, 1, 1, 0, 1, 1, 1, 0],
					[0, 0, 1, 0, 1, 0, 0, 1],
					[0, 1, 0, 0, 1, 1, 1, 1],
					[0, 1, 1, 0, 0, 0, 0, 0],
					[1, 0, 1, 1, 0, 0, 1, 1],
					[0, 0, 0, 1, 1, 0, 0, 1],
					[0, 1, 1, 0, 0, 0, 1, 1],
					[0, 1, 0, 0, 0, 1, 1, 0],
					[0, 1, 1, 0, 0, 0, 1, 1],
					[1, 1, 1, 0, 1, 0, 1, 0],
					[0, 0, 0, 0, 1, 1, 1, 0],
					[0, 1, 0, 0, 1, 0, 0, 0],
					[0, 0, 1, 0, 1, 0, 1, 1],
					[1, 0, 1, 0, 0, 0, 0, 1],
					[1, 1, 0, 0, 0, 0, 0, 1],
					[1, 1, 0, 0, 1, 0, 0, 1]
				],
				// width: 350,
				height: 400,
				minRows: 15,
				minCols: 10,
				colWidths: 80,
				rowHeights: 30,
				colHeaders: true,
				rowHeaders: true,
				manualColumnResize: true,
				contextMenu: true,
				afterInit() {
					self.hot = this;
				},
				afterChange() {
					self.hotDataChangeTrigger++;
				}
			},
			hotSettingsDelta: {
				data: [
					['Condition', 'Genotype', 'Treatment', 'Value'],
					['Test', 'Genotype1', 'On', 0.053518],
					['Test', 'Genotype1', 'On', 0.022529],
					['Control', 'Genotype2', 'On', 0],
					['Control', 'Genotype2', 'Off', 0.331313],
					['Control', 'Genotype2', 'Off', 0.201301],
					['Test', 'Genotype1', 'On', 0.134406],
					['Test', 'Genotype1', 'Off', 0.189826],
					['Test', 'Genotype1', 'Off', 0.30143],
					['Control', 'Genotype3', 'Off', 0.009922],
					['Control', 'Genotype3', 'On', 0.151225],
					['Test', 'Genotype1', 'Off', 0.262215],
					['Control', 'Genotype2', 'On', 0.153235],
					['Control', 'Genotype3', 'On', 0.20355],
					['Control', 'Genotype3', 'On', 0],
					['Control', 'Genotype2', 'Off', 0.162804],
					['Control', 'Genotype2', 'Off', 0.435852],
					['Control', 'Genotype2', 'On', 0],
					['Test', 'Genotype1', 'Off', 0.303203],
					['Control', 'Genotype2', 'Off', 0.184778],
					['Control', 'Genotype3', 'On', 0.125796],
					['Control', 'Genotype3', 'On', 0.047029],
					['Test', 'Genotype1', 'Off', 0.250439],
					['Test', 'Genotype1', 'On', 0],
					['Control', 'Genotype3', 'Off', 0.003272],
					['Control', 'Genotype2', 'Off', 0.174806],
					['Test', 'Genotype1', 'On', 0],
					['Test', 'Genotype1', 'On', 0.084159],
					['Test', 'Genotype1', 'Off', 0.190748],
					['Control', 'Genotype3', 'On', 0.200963],
					['Control', 'Genotype2', 'On', 0.385388]
				],
				// width: 350,
				height: 450,
				minRows: 6,
				minCols: 4,
				colWidths: 110,
				rowHeights: 30,
				colHeaders: true,
				rowHeaders: true,
				manualColumnResize: true,
				contextMenu: true,
				afterInit() {
					self.hot = this;
				},
				afterChange() {
					self.hotDataChangeTrigger++;
				}
			},
			hotSettingsMeta: {
				data: [
					['Control 1', 'Test 1', 'Control 2', 'Test 2', 'Control 3', 'Test 3'],
					[-0.576, -0.478, 0.2, -0.649, 0, 0.941],
					[-0.088, 0.063, 0.204, -0.6, -0.557, -0.045],
					[0.238, 0.476, -0.661, 0.22, -0.683, 0.23],
					[0.039, 0.992, 0.337, 0.485, -0.512, -0.407],
					[-0.104, 0.545, -0.8, 0.6, 0.198, 0],
					[0.239, 0.529, -0.422, 1, -0.109, 0.904],
					[-0.174, 1, 0.027, 0.2, 0.378, -0.382],
					[0.544, 0.444, 0.696, 0.951, 0.003, -0.556],
					[0.225, 1, 0.507, 0.217, 0.422, -0.976],
					[-0.646, 0.317, 0.203, 0.981, 0.702, -0.507],
					[0.035, 0.196, -0.115, 0.412, 0.499, 0.6],
					[0.27, 1, -0.368, 0.005, -0.156, 0.569],
					[-0.383, 0.851, 0.321, 0.908, -0.459, 0.2],
					[0.35, 1, -0.368, 0.885, 0.558, 0.774],
					[-0.077, 1, 0.001, 1, -0.403, 0.848],
					[-0.009, 0.797, -0.66, 0.6, 0.355, -0.402],
					[0.531, 1, -0.35, 0.397, -0.402, 0.9],
					[0.133, -0.2, 0.311, -0.176, 0.032, -0.382],
					[0.057, 0.776, -0.778, 1, 0.814, -0.654],
					[-0.076, 1, -0.293, 1, -0.273, -0.407],
					[-0.235, 0.613, -0.104, 0.807, 0.742, -0.205],
					[0.433, 0.806, -0.555, 0.876, -0.565, -0.051],
					[-0.145, 0.549, -0.496, 1, 0.796, 0.121],
					[0.243, 0.667, -0.387, 1, -0.018, 0.797],
					[-0.745, 0.24, 0.577, 0.164, -0.418, 0.032]
				],
				height: 450,
				minRows: 6, // Adjust as needed
				minCols: 6, // Adjust as needed
				colWidths: 100, // Adjust as needed
				rowHeights: 30, // Adjust as needed
				colHeaders: true,
				rowHeaders: true,
				manualColumnResize: true,
				contextMenu: true,
				afterInit() {
					self.hot = this;
				},
				afterChange() {
					self.hotDataChangeTrigger++;
				}
			},
			hotSettingsDeltaPaired: {
				data: [
					['ID', 'Condition', 'Genotype', 'Treatment', 'Value'],
					['2022-06-21_15-55-00_Chamber4', 'Control', 'Genotype1', 'Off', 0.21937],
					['2022-06-21_15-55-00_Chamber5', 'Control', 'Genotype2', 'Off', 0],
					['2022-06-21_15-55-00_Chamber9', 'Control', 'Genotype1', 'Off', 0.273244],
					['2022-06-21_15-55-00_Chamber10', 'Control', 'Genotype2', 'Off', 0.084084],
					['2022-06-21_15-55-00_Chamber14', 'Control', 'Genotype1', 'Off', 0],
					['2022-06-21_15-55-00_Chamber15', 'Control', 'Genotype2', 'Off', 0.189597],
					['2022-06-21_15-55-00_Chamber19', 'Control', 'Genotype1', 'Off', 0],
					['2022-06-21_15-55-00_Chamber20', 'Control', 'Genotype2', 'Off', 0],
					['2022-06-21_15-55-00_Chamber24', 'Control', 'Genotype1', 'Off', 0.488668],
					['2022-06-21_15-55-00_Chamber25', 'Control', 'Genotype2', 'Off', 0.170494],
					['2022-06-21_15-55-00_Chamber29', 'Control', 'Genotype1', 'Off', 0.051277],
					['2022-06-21_15-55-00_Chamber30', 'Control', 'Genotype2', 'Off', 0.041749],
					['2022-06-23_15-46-48_Chamber4', 'Control', 'Genotype1', 'Off', 0.4249469999999999],
					['2022-06-23_15-46-48_Chamber5', 'Control', 'Genotype2', 'Off', 0.284084],
					['2022-06-23_15-46-48_Chamber9', 'Control', 'Genotype1', 'Off', 0],
					['2022-06-23_15-46-48_Chamber10', 'Control', 'Genotype2', 'Off', 0],
					['2022-06-23_15-46-48_Chamber14', 'Control', 'Genotype1', 'Off', 0.272179],
					['2022-06-23_15-46-48_Chamber15', 'Control', 'Genotype2', 'Off', 0],
					['2022-06-23_15-46-48_Chamber19', 'Control', 'Genotype1', 'Off', 0.363921],
					['2022-06-23_15-46-48_Chamber20', 'Control', 'Genotype2', 'Off', 0.266407],
					['2022-06-23_15-46-48_Chamber24', 'Control', 'Genotype1', 'Off', 0.127615],
					['2022-06-23_15-46-48_Chamber25', 'Control', 'Genotype2', 'Off', 0.1496839999999999],
					['2022-06-23_15-46-48_Chamber29', 'Control', 'Genotype1', 'Off', 0.163976],
					['2022-06-23_15-46-48_Chamber30', 'Control', 'Genotype2', 'Off', 0.250516],
					['2022-06-23_18-14-40_Chamber4', 'Control', 'Genotype1', 'Off', 0.25381],
					['2022-06-23_18-14-40_Chamber5', 'Control', 'Genotype2', 'Off', 0.002769],
					['2022-06-23_18-14-40_Chamber9', 'Control', 'Genotype1', 'Off', 0.033014],
					['2022-06-23_18-14-40_Chamber10', 'Control', 'Genotype2', 'Off', 0.008369],
					['2022-06-23_18-14-40_Chamber14', 'Control', 'Genotype1', 'Off', 0.352445],
					['2022-06-23_18-14-40_Chamber15', 'Control', 'Genotype2', 'Off', 0.094019],
					['2022-06-23_18-14-40_Chamber19', 'Control', 'Genotype1', 'Off', 0.204803],
					['2022-06-23_18-14-40_Chamber20', 'Control', 'Genotype2', 'Off', 0.044515],
					['2022-06-23_18-14-40_Chamber24', 'Control', 'Genotype1', 'Off', 0.197136],
					['2022-06-23_18-14-40_Chamber25', 'Control', 'Genotype2', 'Off', 0.009731],
					['2022-06-23_18-14-40_Chamber29', 'Control', 'Genotype1', 'Off', 0.065709],
					['2022-06-23_18-14-40_Chamber30', 'Control', 'Genotype2', 'Off', 0.23767],
					['2022-08-04_16-18-39_Chamber5', 'Control', 'Genotype2', 'Off', 0.289493],
					['2022-08-04_16-18-39_Chamber10', 'Control', 'Genotype2', 'Off', 0.1366129999999999],
					['2022-08-04_16-18-39_Chamber15', 'Control', 'Genotype2', 'Off', 0.142453],
					['2022-08-04_16-18-39_Chamber20', 'Control', 'Genotype2', 'Off', 0.157178],
					['2022-08-04_16-18-39_Chamber25', 'Control', 'Genotype2', 'Off', 0.253182],
					['2022-09-13_16-54-00_Chamber5', 'Control', 'Genotype2', 'Off', 0.01783],
					['2022-09-13_16-54-00_Chamber10', 'Control', 'Genotype2', 'Off', 0.240685],
					['2022-09-13_16-54-00_Chamber15', 'Control', 'Genotype2', 'Off', 0.186163],
					['2022-09-13_16-54-00_Chamber20', 'Control', 'Genotype2', 'Off', 0.04923],
					['2022-09-23_16-13-02_Chamber2', 'Control', 'Genotype2', 'Off', 0.416591],
					['2022-09-23_16-13-02_Chamber5', 'Control', 'Genotype2', 'Off', 0.01152],
					['2022-09-23_16-13-02_Chamber8', 'Control', 'Genotype2', 'Off', 0.18102],
					['2022-09-23_16-13-02_Chamber11', 'Control', 'Genotype2', 'Off', 0.079364],
					['2022-09-23_16-13-02_Chamber14', 'Control', 'Genotype2', 'Off', 0.209079],
					['2022-09-23_16-13-02_Chamber16', 'Control', 'Genotype2', 'Off', 0.329975],
					['2022-09-23_16-13-02_Chamber19', 'Control', 'Genotype2', 'Off', 0.236999],
					['2022-09-23_16-13-02_Chamber22', 'Control', 'Genotype2', 'Off', 0.341599],
					['2022-09-23_16-13-02_Chamber25', 'Control', 'Genotype2', 'Off', 0.391316],
					['2022-09-06_17-37-53_Chamber27', 'Test', 'Genotype3', 'Off', 0.280471],
					['2022-09-06_17-37-53_Chamber28', 'Test', 'Genotype3', 'Off', 0.491162],
					['2022-09-06_17-37-53_Chamber29', 'Test', 'Genotype3', 'Off', 0.251627],
					['2022-09-06_17-37-53_Chamber30', 'Test', 'Genotype3', 'Off', 0.322197],
					['2022-06-21_15-55-00_Chamber3', 'Test', 'Genotype3', 'Off', 0.268027],
					['2022-06-21_15-55-00_Chamber8', 'Test', 'Genotype3', 'Off', 0.087201],
					['2022-06-21_15-55-00_Chamber13', 'Test', 'Genotype3', 'Off', 0.213277],
					['2022-06-21_15-55-00_Chamber18', 'Test', 'Genotype3', 'Off', 0.22251],
					['2022-06-21_15-55-00_Chamber23', 'Test', 'Genotype3', 'Off', 0.216495],
					['2022-06-21_15-55-00_Chamber28', 'Test', 'Genotype3', 'Off', 0.250054],
					['2022-06-23_15-46-48_Chamber3', 'Test', 'Genotype3', 'Off', 0.465536],
					['2022-06-23_15-46-48_Chamber8', 'Test', 'Genotype3', 'Off', 0.364813],
					['2022-06-23_15-46-48_Chamber13', 'Test', 'Genotype3', 'Off', 0.198114],
					['2022-06-23_15-46-48_Chamber18', 'Test', 'Genotype3', 'Off', 0.423311],
					['2022-06-23_15-46-48_Chamber23', 'Test', 'Genotype3', 'Off', 0.490578],
					['2022-06-23_15-46-48_Chamber28', 'Test', 'Genotype3', 'Off', 0.343618],
					['2022-06-23_18-14-40_Chamber3', 'Test', 'Genotype3', 'Off', 0.581079],
					['2022-06-23_18-14-40_Chamber8', 'Test', 'Genotype3', 'Off', 0.390513],
					['2022-06-23_18-14-40_Chamber13', 'Test', 'Genotype3', 'Off', 0.324241],
					['2022-06-23_18-14-40_Chamber18', 'Test', 'Genotype3', 'Off', 0.18978],
					['2022-06-23_18-14-40_Chamber23', 'Test', 'Genotype3', 'Off', 0.347012],
					['2022-06-23_18-14-40_Chamber28', 'Test', 'Genotype3', 'Off', 0.264043],
					['2022-08-04_16-18-39_Chamber3', 'Test', 'Genotype3', 'Off', 0.36746],
					['2022-08-04_16-18-39_Chamber8', 'Test', 'Genotype3', 'Off', 0.4294989999999999],
					['2022-08-04_16-18-39_Chamber13', 'Test', 'Genotype3', 'Off', 0.489761],
					['2022-08-04_16-18-39_Chamber18', 'Test', 'Genotype3', 'Off', 0.167097],
					['2022-09-13_16-54-00_Chamber3', 'Test', 'Genotype3', 'Off', 0.608196],
					['2022-09-13_16-54-00_Chamber8', 'Test', 'Genotype3', 'Off', 0.477207],
					['2022-09-13_16-54-00_Chamber13', 'Test', 'Genotype3', 'Off', 0.465295],
					['2022-09-13_16-54-00_Chamber18', 'Test', 'Genotype3', 'Off', 0.501833],
					['2022-06-21_15-55-00_Chamber4', 'Control', 'Genotype1', 'On', 0],
					['2022-06-21_15-55-00_Chamber5', 'Control', 'Genotype2', 'On', 0.210326],
					['2022-06-21_15-55-00_Chamber9', 'Control', 'Genotype1', 'On', 0.2465419999999999],
					['2022-06-21_15-55-00_Chamber10', 'Control', 'Genotype2', 'On', 0.2215639999999999],
					['2022-06-21_15-55-00_Chamber14', 'Control', 'Genotype1', 'On', 0.433925],
					['2022-06-21_15-55-00_Chamber15', 'Control', 'Genotype2', 'On', 0.005357],
					['2022-06-21_15-55-00_Chamber19', 'Control', 'Genotype1', 'On', 0.2775],
					['2022-06-21_15-55-00_Chamber20', 'Control', 'Genotype2', 'On', 0.109484],
					['2022-06-21_15-55-00_Chamber24', 'Control', 'Genotype1', 'On', 0],
					['2022-06-21_15-55-00_Chamber25', 'Control', 'Genotype2', 'On', 0.050362],
					['2022-06-21_15-55-00_Chamber29', 'Control', 'Genotype1', 'On', 0.239366],
					['2022-06-21_15-55-00_Chamber30', 'Control', 'Genotype2', 'On', 0.206998],
					['2022-06-23_15-46-48_Chamber4', 'Control', 'Genotype1', 'On', 0.028078],
					['2022-06-23_15-46-48_Chamber5', 'Control', 'Genotype2', 'On', 0],
					['2022-06-23_15-46-48_Chamber9', 'Control', 'Genotype1', 'On', 0],
					['2022-06-23_15-46-48_Chamber10', 'Control', 'Genotype2', 'On', 0.312459],
					['2022-06-23_15-46-48_Chamber14', 'Control', 'Genotype1', 'On', 0.054427],
					['2022-06-23_15-46-48_Chamber15', 'Control', 'Genotype2', 'On', 0],
					['2022-06-23_15-46-48_Chamber19', 'Control', 'Genotype1', 'On', 0.042083],
					['2022-06-23_15-46-48_Chamber20', 'Control', 'Genotype2', 'On', 0.1943099999999999],
					['2022-06-23_15-46-48_Chamber24', 'Control', 'Genotype1', 'On', 0.428395],
					['2022-06-23_15-46-48_Chamber25', 'Control', 'Genotype2', 'On', 0.15868],
					['2022-06-23_15-46-48_Chamber29', 'Control', 'Genotype1', 'On', 0.253093],
					['2022-06-23_15-46-48_Chamber30', 'Control', 'Genotype2', 'On', 0.298666],
					['2022-06-23_18-14-40_Chamber4', 'Control', 'Genotype1', 'On', 0.12986],
					['2022-06-23_18-14-40_Chamber5', 'Control', 'Genotype2', 'On', 0.34665],
					['2022-06-23_18-14-40_Chamber9', 'Control', 'Genotype1', 'On', 0.268424],
					['2022-06-23_18-14-40_Chamber10', 'Control', 'Genotype2', 'On', 0.375278],
					['2022-06-23_18-14-40_Chamber14', 'Control', 'Genotype1', 'On', 0],
					['2022-06-23_18-14-40_Chamber15', 'Control', 'Genotype2', 'On', 0.201571],
					['2022-06-23_18-14-40_Chamber19', 'Control', 'Genotype1', 'On', 0.283483],
					['2022-06-23_18-14-40_Chamber20', 'Control', 'Genotype2', 'On', 0.251491],
					['2022-06-23_18-14-40_Chamber24', 'Control', 'Genotype1', 'On', 0.128476],
					['2022-06-23_18-14-40_Chamber25', 'Control', 'Genotype2', 'On', 0.148656],
					['2022-06-23_18-14-40_Chamber29', 'Control', 'Genotype1', 'On', 0],
					['2022-06-23_18-14-40_Chamber30', 'Control', 'Genotype2', 'On', 0.161145],
					['2022-08-04_16-18-39_Chamber5', 'Control', 'Genotype2', 'On', 0.154047],
					['2022-08-04_16-18-39_Chamber10', 'Control', 'Genotype2', 'On', 0.060728],
					['2022-08-04_16-18-39_Chamber15', 'Control', 'Genotype2', 'On', 0.252101],
					['2022-08-04_16-18-39_Chamber20', 'Control', 'Genotype2', 'On', 0.130002],
					['2022-08-04_16-18-39_Chamber25', 'Control', 'Genotype2', 'On', 0.111169],
					['2022-09-13_16-54-00_Chamber5', 'Control', 'Genotype2', 'On', 0.196676],
					['2022-09-13_16-54-00_Chamber10', 'Control', 'Genotype2', 'On', 0.049188],
					['2022-09-13_16-54-00_Chamber15', 'Control', 'Genotype2', 'On', 0.200395],
					['2022-09-13_16-54-00_Chamber20', 'Control', 'Genotype2', 'On', 0.351199],
					['2022-09-23_16-13-02_Chamber2', 'Control', 'Genotype2', 'On', 0.457458],
					['2022-09-23_16-13-02_Chamber5', 'Control', 'Genotype2', 'On', 0.281116],
					['2022-09-23_16-13-02_Chamber8', 'Control', 'Genotype2', 'On', 0.380213],
					['2022-09-23_16-13-02_Chamber11', 'Control', 'Genotype2', 'On', 0.283504],
					['2022-09-23_16-13-02_Chamber14', 'Control', 'Genotype2', 'On', 0.132945],
					['2022-09-23_16-13-02_Chamber16', 'Control', 'Genotype2', 'On', 0],
					['2022-09-23_16-13-02_Chamber19', 'Control', 'Genotype2', 'On', 0],
					['2022-09-23_16-13-02_Chamber22', 'Control', 'Genotype2', 'On', 0.251647],
					['2022-09-23_16-13-02_Chamber25', 'Control', 'Genotype2', 'On', 0.46849],
					['2022-09-06_17-37-53_Chamber27', 'Test', 'Genotype3', 'On', 0],
					['2022-09-06_17-37-53_Chamber28', 'Test', 'Genotype3', 'On', 0],
					['2022-09-06_17-37-53_Chamber29', 'Test', 'Genotype3', 'On', 0],
					['2022-09-06_17-37-53_Chamber30', 'Test', 'Genotype3', 'On', 0],
					['2022-06-21_15-55-00_Chamber3', 'Test', 'Genotype3', 'On', 0],
					['2022-06-21_15-55-00_Chamber8', 'Test', 'Genotype3', 'On', 0.046978],
					['2022-06-21_15-55-00_Chamber13', 'Test', 'Genotype3', 'On', 0],
					['2022-06-21_15-55-00_Chamber18', 'Test', 'Genotype3', 'On', 0],
					['2022-06-21_15-55-00_Chamber23', 'Test', 'Genotype3', 'On', 0],
					['2022-06-21_15-55-00_Chamber28', 'Test', 'Genotype3', 'On', 0],
					['2022-06-23_15-46-48_Chamber3', 'Test', 'Genotype3', 'On', 0],
					['2022-06-23_15-46-48_Chamber8', 'Test', 'Genotype3', 'On', 0.002141],
					['2022-06-23_15-46-48_Chamber13', 'Test', 'Genotype3', 'On', 0],
					['2022-06-23_15-46-48_Chamber18', 'Test', 'Genotype3', 'On', 0],
					['2022-06-23_15-46-48_Chamber23', 'Test', 'Genotype3', 'On', 0],
					['2022-06-23_15-46-48_Chamber28', 'Test', 'Genotype3', 'On', 0],
					['2022-06-23_18-14-40_Chamber3', 'Test', 'Genotype3', 'On', 0],
					['2022-06-23_18-14-40_Chamber8', 'Test', 'Genotype3', 'On', 0],
					['2022-06-23_18-14-40_Chamber13', 'Test', 'Genotype3', 'On', 0],
					['2022-06-23_18-14-40_Chamber18', 'Test', 'Genotype3', 'On', 0],
					['2022-06-23_18-14-40_Chamber23', 'Test', 'Genotype3', 'On', 0],
					['2022-06-23_18-14-40_Chamber28', 'Test', 'Genotype3', 'On', 0],
					['2022-08-04_16-18-39_Chamber3', 'Test', 'Genotype3', 'On', 0],
					['2022-08-04_16-18-39_Chamber8', 'Test', 'Genotype3', 'On', 0],
					['2022-08-04_16-18-39_Chamber13', 'Test', 'Genotype3', 'On', 0.094354],
					['2022-08-04_16-18-39_Chamber18', 'Test', 'Genotype3', 'On', 0],
					['2022-09-13_16-54-00_Chamber3', 'Test', 'Genotype3', 'On', 0.00202],
					['2022-09-13_16-54-00_Chamber8', 'Test', 'Genotype3', 'On', 0],
					['2022-09-13_16-54-00_Chamber13', 'Test', 'Genotype3', 'On', 0],
					['2022-09-13_16-54-00_Chamber18', 'Test', 'Genotype3', 'On', 0]
				],
				// width: 350,
				height: 450,
				minRows: 6,
				minCols: 4,
				colWidths: 140,
				rowHeights: 30,
				colHeaders: true,
				rowHeaders: true,
				manualColumnResize: true,
				contextMenu: true,
				afterInit() {
					self.hot = this;
				},
				afterChange() {
					self.hotDataChangeTrigger++;
				}
			}
		};
	},

	metaInfo() {
		return {
			title: this.plotName
		};
	},
	props: {
		plotType: { type: String, default: constants.plotTypes.UNPAIRED.type } // Default is unpaired group
	},
	computed: {
		plotName() {
			let analyzePlot = _.find(_.values(constants.plotTypes), plot => plot.type === this.plotType);
			return analyzePlot ? analyzePlot.home_name : '';
		},
		analyable() {
			// if (_.isEmpty(this.hotData)) { }
			if (this.curentInputType === constants.inputDataTypes.COPY_PASTE.type) {
				if (this.hotDataChangeTrigger > 0) {
					for (let row = 0; row < this.hot.countRows(); row++) {
						if (!this.hot.isEmptyRow(row)) {
							return true;
						}
					}
				}
				return false;
			} else {
				return !!this.file;
			}
		}
	},
	watch: {
		curentInputType() {
			if (this.curentInputType === constants.inputDataTypes.COPY_PASTE.type && this.hot) {
				this.$nextTick(() => {
					this.hot.render();
				});
			}
		}
	},
	methods: {

		onAnalyze() {
			// Clear analyzed data
			this.analyzedData = {};
			// Get file for analyze
			let file = this.curentInputType === constants.inputDataTypes.COPY_PASTE.type ? this.createCsvByInputData() : this.file;

			// Get file name and file extension
			let [fileName, fileExtension] = file.name.split('.');
			if (fileExtension === constants.fileTypes.CSV.extension) {
				// Show preloader
				this.isAnalyzing = true;

				// Analyze csv file data
				plotService.analyze(file, this.plotType, this.getPlotOptions()).then(data => {
					this.analyzedData = data;
					this.fileName = fileName;

					// Hide preloader
					this.isAnalyzing = false;
				}, () => {
					// Hide preloadery
					this.isAnalyzing = false;
				});
			}
		},

		onDownload() {
			downloadUtil.downloadByContent(`${this.fileName}.${this.fileExtension}`, this.createFileContent());
		},

		onSelectFile() {
			this.file = this.$refs.file.files[0];
		},

		createFileContent() {
			let content = '';
			if (!_.isEmpty(this.fileExtension)) {
				// Create csv content
				if (this.fileExtension === constants.fileTypes.CSV.extension && !_.isEmpty(this.analyzedData.csv)) {
					content += 'data:text/csv;encoding:=utf-8,';
					content += constants.CSV_DELIMITER + this.analyzedData.columns.join(constants.CSV_DELIMITER);
					this.analyzedData.csv.forEach((rowData, index) => {
						content += constants.CSV_NEW_LINE + (index + 1) + constants.CSV_DELIMITER + rowData.join(constants.CSV_DELIMITER);
					});
					content = encodeURI(content);
				} else if (!_.isEmpty(this.analyzedData[this.fileExtension])) {
					// Create png/svg image content
					content += 'data:image/' + this.fileExtension + (this.fileExtension === constants.fileTypes.SVG.extension ? '+xml' : '') + ';base64,' + this.analyzedData[this.fileExtension];
				}
			}
			return content;
		},

		createCsvByInputData() {
			// Clone source data
			let sourceData = _.cloneDeep(this.hot.getSourceData());

			let totalCol = this.hot.countCols();
			let totalRow = this.hot.countRows();
			let [firstCol, lastCol, firstRow, lastRow] = [-1, -1, -1, -1];

			// Find first & last column has data
			for (let col = 0; col < totalCol; col++) {
				if (!this.hot.isEmptyCol(col)) {
					if (firstCol < 0) {
						firstCol = col;
					}
					lastCol = col;
				}
			}

			// Find first & last row has data
			for (let row = 0; row < totalRow; row++) {
				if (!this.hot.isEmptyRow(row)) {
					if (firstRow < 0) {
						firstRow = row;
					}
					lastRow = row;
				}
			}

			// Remove unnecessary rows
			let analyzeData = _.drop(_.take(sourceData, lastRow + 1), firstRow);
			// Remove unnecessary columns
			analyzeData = _.map(analyzeData, row => {
				return _.drop(_.take(row, lastCol + 1), firstCol);
			});

			// Convert data to csv content
			let csvContent = _.map(analyzeData, row => {
				return row.join(constants.CSV_DELIMITER);
			}).join(constants.CSV_NEW_LINE);

			// Create csv file
			let csvFile = new Blob([csvContent], {
				type: 'text/csv'
			});
			csvFile.lastModifiedDate = new Date();
			csvFile.name = `${this.plotName}.csv`;

			return csvFile;
		},

		getPlotOptions() {
			return {
				yaxisLabel: this.yaxisLabel,
				x: this.x,
				experiment: this.experiment,
				ci: this.ci,
				effect_size: this.effectSize,
				swarm_dotsize: this.swarm_dotsize,
				es_markersize: this.es_markersize,
				swarm_ylimLower: this.swarmYlimLower,
				swarm_ylimUpper: this.swarmYlimUpper,
				con_ylimLower: this.conYlimLower,
				con_ylimUpper: this.conYlimUpper
			};
		}
	},
	components: {
		HotTable,
		vueSlider
		// VTooltip
	}
};
</script>
