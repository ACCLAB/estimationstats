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
				<router-link :to="{ name: 'user-guide', params: { plotType: plotType }}">Find out more.</router-link>
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
			<div class="col content" style="font-size:1.25rem;">
				Each column of your data must correspond to one group of observations, and the first row must be names of the groups; see preloaded data for an example.
			</div>
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
				<template v-if="plotType != plotTypes.PAIRED.type && plotType != plotTypes.MULTI_PAIRED.type">
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
			
			
			
			<br>
			<!-- Choose CI width -->
			
			
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
				<div class="input-field col s12 m6 l7">
					<vue-slider v-model="ci" interval=0.1 min=50 max=99.9
					height=8 dotSize=22 speed=0.1 tooltip=false>
					</vue-slider>
				</div>

				<div class="input-field col s12 m6 l3">
					<input id="ci" type="number" step=0.1 min=50 max=99.9 v-model="ci">
				</div>
			</div>
			
			
			
			
			
			<!-- Choose swarmplot dot size if unpaired -->
			<template v-if="plotType != plotTypes.PAIRED.type && plotType != plotTypes.MULTI_PAIRED.type">
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

					<div class="input-field col s12 m6 l7">
						<vue-slider v-model="swarm_dotsize" interval=0.1 min=1 max=9.9
						height=8 dotSize=22 speed=0.1 tooltip=false>
						</vue-slider>
					</div>

					<div class="input-field col s12 m6 l3">
						<input id="swarm_dotsize" type="number" step=0.1 min=1 max=9.9 v-model="swarm_dotsize">
					</div>
				</div>
			</template>
			
			
			
			<!-- Choose effect size dot size -->
			<br>
			<div class="row">
				<div class="col s1">
					<template v-if="plotType === plotTypes.PAIRED.type || plotType === plotTypes.MULTI_PAIRED.type">
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

				<div class="input-field col s12 m6 l7">
					<vue-slider v-model="es_markersize" interval=0.1 min=1 max=9.9
					height=8 dotSize=22 speed=0.1 tooltip=false>
					</vue-slider>
				</div>

				<div class="input-field col s12 m6 l3">
					<input id="es_markersize" type="number" step=0.1 min=1 max=9.9 v-model="es_markersize">
				</div>
			</div>
			
			
				
			
			
			
			
			
		


			<!-- Choose raw data y-axis limits -->
			<br>
			
			<div class="row">
				<div class="col s1">
					<template v-if="plotType === plotTypes.UNPAIRED.type">
						<i class="circle-number left">6</i>
					</template>
					
					<template v-else-if="plotType === plotTypes.PAIRED.type || plotType === plotTypes.MULTI_PAIRED.type">
						<i class="circle-number left">5</i>
					</template>
					
					<template v-else-if="plotType === plotTypes.MULTI.type">
						<i class="circle-number left">6</i>
					</template>
					
					<template v-else-if="plotType === plotTypes.SHARED_CONTROL.type">
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
				<div class="input-field col s12 m6 l4">
					<input id="swarmYlimLower" type="number" step="any" v-model="swarmYlimLower">
					<label for="swarmYlimLower" class="">lower limit</label>
				</div>

				<div class="input-field col s12 m6 l4">
					<input id="swarmYlimUpper" type="number" step="any" v-model="swarmYlimUpper">
					<label for="swarmYlimUpper" class="">upper limit</label>
				</div>
			</div>
			
			

			
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
					<div class="input-field col s12 m6 l4">
						<input id="conYlimLower" type="number" step="any" v-model="conYlimLower">
						<label for="conYlimLower" class="">lower limit</label>
					</div>

					<div class="input-field col s12 m6 l4">
						<input id="conYlimUpper" type="number" step="any" v-model="conYlimUpper">
						<label for="conYlimUpper" class="">upper limit</label>
					</div>
				</div>
				
				
			</template>
			
			
			<!-- Choose label for y-axis raw data. -->
			<br>
			
			<div class="row">
				
				<div class="col s1">
						<template v-if="plotType === plotTypes.UNPAIRED.type && effectSize != unpairedEffectSizes.CLIFFS_DELTA.type">
							<i class="circle-number left">7</i>
						</template>
						
						<template v-else-if="plotType === plotTypes.UNPAIRED.type && effectSize === unpairedEffectSizes.CLIFFS_DELTA.type">
							<i class="circle-number left">8</i>
						</template>
						
						<template v-if="plotType === plotTypes.PAIRED.type">
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
				</div>
				
				<div class="col s11">
					Label the y-axis of the raw data
				</div>
			</div>
				
			<div class="row">
				<div class="col content" style="font-size:1.25rem;">
					If left blank, this defaults to the string "value".
				</div>
			</div>
			
			<div class="row">
				<div class="input-field col s12 m6 l6">
					<input id="yaxis" type="text" v-model="yaxisLabel">
					<label for="yaxis" class="">y-axis label</label>
				</div>
			</div>
			
			
			
			
			
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

					<template v-else-if="plotType === plotTypes.PAIRED.type">
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
					<div class="preloader-wrapper big active" v-show="isAnalyzing">
						<div class="spinner-layer spinner-blue-only">
							<div class="circle-clipper left">
								<div class="circle"></div>
							</div>
							<div class="gap-patch">
								<div class="circle"></div>
							</div>
							<div class="circle-clipper right">
								<div class="circle">
								</div>
							</div>
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
			<br>
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
				
				<template v-else-if="plotType === plotTypes.MULTI_PAIRED.type">
					<i class="circle-number left">9</i>
				</template>

				<template v-else-if="plotType === plotTypes.MULTI.type">
					<i class="circle-number left">10</i>
				</template>

				<template v-else-if="plotType === plotTypes.SHARED_CONTROL.type">
					<i class="circle-number left">10</i>
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
import(/* webpackPreload: true */ 'vue-handsontable-official');

// Vue.use(VTooltip);

export default {
	data() {
		let self = this;
		return {
			es_descs: 'Hello does this work ah.',
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
				// width: 100,
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
				// width: 800,
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
			// Find analyzing plot by plot type
			let analyzePlot = _.find(_.values(constants.plotTypes), plot => plot.type === this.plotType);
			return analyzePlot ? analyzePlot.name : '';
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
