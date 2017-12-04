<template>
	<div>
		<div class="page-title">{{ plotName }}</div>
		<div class="row">
			<div class="col number">
				<i class="circle-number left">0</i>
			</div>
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
				<router-link :to="{ name: 'user-guide', params: { plotType: plotType }}">See user guide.</router-link>
			</div>
		</div>
		<br>
		<div class="row">
			<div class="col number">
				<i class="circle-number left">1</i>
			</div>
			<div class="col content">
				<div class="row col">
					Enter your data.
				</div>
				<div class="row">
					<div class="col s12 input-types">
						<span v-for="inputDataType in inputDataTypes" :key="inputDataType.type">
							<input type="radio" :id="inputDataType.type" v-model="curentInputType" :value="inputDataType.type" />
							<label :for="inputDataType.type">{{ inputDataType.name }}</label>
						</span>
					</div>
					<div class="col s12" v-show="curentInputType === inputDataTypes.COPY_PASTE.type">
						The first row of the data MUST be names of the groups.
						<br><br>
						<span class="text" style="font-size:20px"> A paired dataset is preloaded below. (Taken from S. Champely's
							<a href='https://www.rdocumentation.org/packages/PairedData/versions/0.9.9/topics/anscombe2'>anscombe2</a> dataset.)
							<br> There are four sets of paired samples (n=15) giving the same paired t-test <i>P</i> value despite vastly different graphical relationships.
						</span>
						<HotTable :settings="hotSettings"></HotTable>
					</div>
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
			</div>
		</div>

		<div class="row">
			<div class="col number">
				<i class="circle-number left">2</i>
			</div>
			<div class="col content">
				<div class="row no-margin-bot">
					<div class="col s12">
						Title for the main plot y-axis. <div style="font-size:21px">If left blank, defaults to "value".</div>
					</div>
				</div>
				<div class="row">
					<div class="input-field col s12 m6 l6">
						<input id="yaxis" type="text" v-model="yaxisLabel">
						<label for="yaxis" class="">y-axis label</label>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col number">
				<i class="circle-number left">3</i>
			</div>
			<div class="col content">
				<div class="row no-margin-bot">
					<div class="col s12">
						Main y-axis limits. <div style="font-size:21px">If left blank, the limits are auto-scaled.</div>
					</div>
				</div>
				<div class="row">
					<div class="input-field col s12 m6 l3">
						<input id="swarmYlimLower" type="number" step="any" v-model="swarmYlimLower">
						<label for="swarmYlimLower" class="">lower limit</label>
					</div>

					<div class="input-field col s12 m6 l3">
						<input id="swarmYlimUpper" type="number" step="any" v-model="swarmYlimUpper">
						<label for="swarmYlimUpper" class="">upper limit</label>
					</div>
				</div>
			</div>
		</div>

		<template v-if="plotType === plotTypes.MULTI.type || plotType === plotTypes.MULTI_PAIRED.type || plotType === plotTypes.SHARED_CONTROL.type">
		<div class="row">
			<div class="col number">
				<i class="circle-number left">4</i>
			</div>
			<div class="col content">
				<div class="row no-margin-bot">
					<div class="col s12">
						Bootstrapped difference y-axis limits. <div style="font-size:21px">If left blank, the limits are auto-scaled.</div>
					</div>
				</div>
				<div class="row">
					<div class="input-field col s12 m6 l3">
						<input id="conYlimLower" type="number" step="any" v-model="conYlimLower">
						<label for="conYlimLower" class="">lower limit</label>
					</div>

					<div class="input-field col s12 m6 l3">
						<input id="conYlimUpper" type="number" step="any" v-model="conYlimUpper">
						<label for="conYlimUpper" class="">upper limit</label>
					</div>
				</div>
			</div>
		</div>
	</template>


		<div class="row">
			<template v-if="plotType === plotTypes.UNPAIRED.type || plotType === plotTypes.PAIRED.type">
				<div class="col number">
					<i class="circle-number left">4</i>
				</div>
		</template>
			<template v-else-if="plotType === plotTypes.MULTI.type || plotType === plotTypes.MULTI_PAIRED.type || plotType === plotTypes.SHARED_CONTROL.type">
				<div class="col number">
					<i class="circle-number left">5</i>
				</div>
			</template>

			<div class="col content">
				<div class="row col">
					Analyze your data and display as an m-diff plot.
				</div>
				<div class="row">
					<div class="file-field input-field col s12">
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
					<div class="file-field input-field col s12">
						<template v-if="_.has(analyzedData, 'png')">
							<img :src="`data:image/png;base64,${analyzedData.png}`">
						</template>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<template v-if="plotType === plotTypes.UNPAIRED.type || plotType === plotTypes.PAIRED.type">
				<div class="col number">
					<i class="circle-number left">5</i>
				</div>
		</template>
			<template v-else-if="plotType === plotTypes.MULTI.type || plotType === plotTypes.MULTI_PAIRED.type || plotType === plotTypes.SHARED_CONTROL.type">
				<div class="col number">
					<i class="circle-number left">6</i>
				</div>
			</template>
			<div class="col content">
				<div class="row col">
					Download results.
					<br>
					<span class="text" style="font-size:20px">
						Plots are available in SVG or PNG formats.
						<br>The table of statistics can be downloaded as a CSV text file.
					</span>
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
			</div>
		</div>
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
			curentInputType: constants.inputDataTypes.COPY_PASTE.type, // Default is copy paste data
			plotTypes: constants.plotTypes,
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
			hotSettings: { // Handsontable config
				data: [['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'],
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
				[9.565, 6.955, 10, 35, 20.735, 9.265, 2.775, 5.225]], // Init data
				width: 800,
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
						content += constants.CSV_NEW_LINE + index + constants.CSV_DELIMITER + rowData.join(constants.CSV_DELIMITER);
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
				swarm_ylimLower: this.swarmYlimLower,
				swarm_ylimUpper: this.swarmYlimUpper,
				con_ylimLower: this.conYlimLower,
				con_ylimUpper: this.conYlimUpper
			};
		}
	},
	components: {
		HotTable
	}
};
</script>
