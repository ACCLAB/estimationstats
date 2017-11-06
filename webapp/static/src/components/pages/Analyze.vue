<template>
	<div>
		<div class="title">{{ plotName }}</div>
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
				<div class="col s11 offset-s1 input-types">
					<span v-for="inputDataType in inputDataTypes" :key="inputDataType.type">
						<input type="radio" :id="inputDataType.type" v-model="curentInputType" :value="inputDataType.type" />
						<label :for="inputDataType.type">{{ inputDataType.name }}</label>
					</span>
				</div>
				<div class="col s11 offset-s1" v-show="curentInputType === inputDataTypes.COPY_PASTE.type">
					<HotTable :settings="hotSettings"></HotTable>
				</div>
				<div class="file-field input-field col s6 offset-s1 file-field input-field" v-show="curentInputType === inputDataTypes.CSV.type">
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
		</p>
		<p>
			<span class="left">
				<i class="circle-number left">&#9313;</i>
			</span>
			<span class="text">
				Analyze your data and display in an m-diff plot.
			</span>
			<div class="row">
				<div class="file-field input-field col s11 offset-s1">
					<div class="btn btn-large" :class="{disabled:isAnalyzing || !analyable}" @click="onAnalyze">
						<span>
							<i class="medium material-icons left pe-7s-display1"></i>
							<span class="left">Analyze</span>
						</span>
					</div>
					<div class="preloader-wrapper active" v-show="isAnalyzing">
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
					<template v-if="_.has(analyzedData, 'png')">
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
					<div class="btn btn-large" @click="onDownload" :class="{disabled:_.isEmpty(analyzedData)}">
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
import HotTable from 'vue-handsontable-official';
import * as constants from '@/utils/constants.js';
import * as plotService from '@/services/plot-service.js';
import * as downloadUtil from '@/utils/download-util.js';

export default {
	data() {
		let self = this;
		return {
			file: null,
			fileTypes: constants.fileTypes,
			fileExtension: constants.fileTypes.PNG.extension, // Default is download PNG
			inputDataTypes: constants.inputDataTypes,
			curentInputType: constants.inputDataTypes.CSV.type, // Default is upload csv file
			analyzedData: {},
			fileName: '',
			isAnalyzing: false,
			hotDataChangeTrigger: 0,
			hot: null, // Handsontable instance
			hotSettings: { // Handsontable config
				minRows: 16,
				minCols: 16,
				colHeaders: true,
				rowHeaders: true,
				height: 400,
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

			let analyze;
			if (this.curentInputType === constants.inputDataTypes.COPY_PASTE.type) {
				analyze = this.analyzeByInputData;
			} else {
				analyze = this.analyzeByUploadFile;
			}
			analyze().then(({ analyzedData, fileName }) => {
				this.analyzedData = analyzedData;
				this.fileName = fileName;

				// Hide preloader
				this.isAnalyzing = false;
			}, () => {
				// Hide preloadery
				this.isAnalyzing = false;
			});
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
						content += '\n' + index + constants.CSV_DELIMITER + rowData.join(constants.CSV_DELIMITER);
					});
					content = encodeURI(content);
				} else if (!_.isEmpty(this.analyzedData[this.fileExtension])) {
					// Create png/svg image content
					content += 'data:image/' + this.fileExtension + (this.fileExtension === constants.fileTypes.SVG.extension ? '+xml' : '') + ';base64,' + this.analyzedData[this.fileExtension];
				}
			}
			return content;
		},
		analyzeByUploadFile() {
			if (this.file) {
				// Analyze csv file data
				let [fileName, fileExtension] = this.file.name.split('.');
				if (fileExtension === constants.fileTypes.CSV.extension) {
					// Show preloader
					this.isAnalyzing = true;
					return plotService.analyzeByUploadFile(this.file, this.plotType).then(data => {
						return { analyzedData: data, fileName };
					}, error => {
						return Promise.reject(error);
					});
				}
			}
		},
		analyzeByInputData() {
			let _sourceData = _.cloneDeep(this.hot.getSourceData());
			this.hot.updateSettings({
				minRows: 0,
				minCols: 0
			});

			// Remove empty columns
			let col = 0;
			let totalCol = this.hot.countCols();
			while (col < totalCol) {
				if (this.hot.isEmptyCol(col)) {
					this.hot.alter('remove_col', col);
					totalCol--;
				} else {
					col++;
				}
			}

			// Remove empty rows
			let row = 0;
			let totalRow = this.hot.countRows();
			while (row < totalRow) {
				if (this.hot.isEmptyRow(row)) {
					this.hot.alter('remove_row', row);
					totalRow--;
				} else {
					row++;
				}
			}

			// Get trimmed data for analyze
			let data = _.cloneDeep(this.hot.getSourceData());

			// Update hot table to settings and data before trim
			this.hot.updateSettings({
				data: _sourceData,
				minRows: 16,
				minCols: 16
			});

			// Analyze input data
			if (!_.isEmpty(data)) {
				// First row is column name
				let unnamedCount = 0;
				let columns = _.map(data[0], name => {
					if (_.isEmpty(name)) {
						name = `Unnamed: ${unnamedCount}`;
						unnamedCount++;
					}
					return name;
				});

				// Data row is start from second row
				let analyzeData = _.map(_.drop(data), row => {
					// Convert value to number
					return _.map(row, cell => {
						let val = _.toNumber(cell);
						return _.isNaN(val) ? cell : val;
					});
				});

				// Show preloader
				this.isAnalyzing = true;
				return plotService.analyze(columns, analyzeData, this.plotType).then(data => {
					return { analyzedData: data, fileName: this.plotName };
				}, error => {
					return Promise.reject(error);
				});
			}
		}
	},
	components: {
		HotTable
	}
};
</script>
