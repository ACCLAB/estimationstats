<template>
	<div>
		<div class="title">{{ title }}</div>
		<p>
			<span class="left">
				<i class="circle-number left">&#9450;</i>
			</span>
			<span class="text">
				This is the estimation-statistics counterpart to Student’s t-test.
				<br> The function will generate an m-diff plot: a Gardner-Altman mean difference plot for two independent groups
				<router-link :to="{ name: 'user-guide', params: { plotType: plotType }}">See user guide.</router-link>
			</span>
		</p>
		<p>
			<span class="left">
				<i class="circle-number left">&#9312;</i>
			</span>
			<span class="text">
				Input your data. You can either enter data into a table, upload a CSV spreadsheet, or link to a Google spreadsheet.
				<br> Spreadsheets must have two labelled columns.
			</span>
			<div class="row">
				<div class="file-field input-field col s6 offset-s1 file-field input-field">
					<div class="btn btn-large">
						<span>
							<i class="medium material-icons left pe-7s-file"></i>
							<span>Choose file</span>
							<input :ref="'file'" type="file" name="file" accept=".csv">
						</span>
					</div>
					<div class="file-path-wrapper">
						<input id="file-path" class="file-path validate" type="text">
					</div>
				</div>
			</div>
		</p>
		<p>
			<span class="left">
				<i class="circle-number left">&#9313;</i>
			</span>
			<span class="text">
				Analyze your data and display in an m-diff plot.
			</span>
			<div class="row">
				<div class="file-field input-field col s12 offset-s1">
					<div class="btn btn-large" :class="{disabled:isAnalyzing}" @click="onAnalyze">
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
								<div class="circle"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="file-field input-field col s11 offset-s1">
					<template v-if="analyzedData && analyzedData.png">
						<img :src="`data:image/png;base64,${analyzedData.png}`">
					</template>
				</div>
			</div>
		</p>
		<p>
			<span class="left">
				<i class="circle-number left">&#9314;</i>
			</span>
			<span class="text">
				Download results. Plots are available as SVG vector graphics or PNG images. The table of effect sizes can be downloaded as a CSV spreadsheet.
			</span>
			<div class="row">
				<div class="file-field input-field col s2 offset-s1">
					<div class="btn btn-large" @click="onDownload">
						<span>
							<i class="medium material-icons left pe-7s-cloud-download"></i>
							<span class="left">Download</span>
						</span>
					</div>
				</div>
				<div class="col s4 file-types">
					<span v-for="fileType in fileTypes" :key="fileType.extension">
						<input type="radio" :id="fileType.extension" v-model="fileExtension" :value="fileType.extension" />
						<label :for="fileType.extension">{{ fileType.name }}</label>
					</span>
				</div>
			</div>
		</p>
	</div>
</template>

<script>
import _ from 'lodash';
import * as constants from '@/utils/constants.js';
import * as plotService from '@/services/plot-service.js';
import * as downloadUtil from '@/utils/download-util.js';

export default {
	data() {
		return {
			fileTypes: constants.fileTypes,
			fileExtension: constants.fileTypes.PNG.extension,
			analyzedData: {},
			fileName: '',
			isAnalyzing: false
		};
	},
	metaInfo() {
		return {
			title: this.title
		};
	},
	props: {
		plotType: { type: String, default: constants.plotTypes.UNPAIRED.type } // Default is unpaired group
	},
	computed: {
		title() {
			// Find analyzing plot by plot type
			let analyzePlot = _.find(_.values(constants.plotTypes), plot => plot.type === this.plotType);
			return analyzePlot ? analyzePlot.name : '';
		}
	},
	methods: {
		onAnalyze() {
			// Get selected file
			this.fileData = this.$refs.file.files[0];
			if (this.fileData) {
				// Analyze csv file data
				let [fileName, fileExtension] = this.fileData.name.split('.');
				if (fileExtension === constants.fileTypes.CSV.extension) {
					// Show preloader
					this.isAnalyzing = true;
					plotService.analyze(this.fileData, this.plotType).then(data => {
						this.analyzedData = data;
						this.fileName = fileName;

						// Hide preloader
						this.isAnalyzing = false;
					});
				}
			}
		},
		onDownload() {
			downloadUtil.downloadByContent(`${this.fileName}.${this.fileExtension}`, this.createFileContent());
		},
		createFileContent() {
			let content = '';
			if (!_.isEmpty(this.fileExtension)) {
				// Create csv content
				if (this.fileExtension === constants.fileTypes.CSV.extension && !_.isEmpty(this.analyzedData.csv)) {
					content += 'data:text/csv;encoding:=utf-8,';
					content += constants.CSV_DELIMITER + this.analyzedData.columns.join(constants.CSV_DELIMITER);
					this.analyzedData.csv.forEach((rowData, index) => {
						content += '\n' + index + constants.CSV_DELIMITER + rowData.join(constants.CSV_DELIMITER);
					});
					content = encodeURI(content);
				} else if (!_.isEmpty(this.analyzedData[this.fileExtension])) {
					// Create png/svg image content
					content += 'data:image/' + this.fileExtension + (this.fileExtension === constants.fileTypes.SVG.extension ? '+xml' : '') + ';base64,' + this.analyzedData[this.fileExtension];
				}
			}
			return content;
		}
	}
};
</script>
