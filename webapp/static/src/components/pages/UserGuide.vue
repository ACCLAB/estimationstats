<template>
	<div>
		<div class="title">{{ title }}</div>
		<component :is="userGuide"></component>
	</div>
</template>

<script>
import _ from 'lodash';
import * as constants from '@/utils/constants.js';
import TwoIndependentGroups from '@/components/parts/user-guide/TwoIndependentGroups';
import Paired from '@/components/parts/user-guide/Paired';
import MultipleGroups from '@/components/parts/user-guide/MultipleGroups';
import MultiPaired from '@/components/parts/user-guide/MultiPaired';
import SharedControl from '@/components/parts/user-guide/SharedControl';

export default {
	data() {
		return {
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
			return `User guide: ${analyzePlot ? analyzePlot.name : ''}`;
		},
		userGuide() {
			if (this.plotType === constants.plotTypes.UNPAIRED.type) {
				return 'TwoIndependentGroups';
			} else if (this.plotType === constants.plotTypes.PAIRED.type) {
				return 'Paired';
			} else if (this.plotType === constants.plotTypes.MULTI.type) {
				return 'MultipleGroups';
			} else if (this.plotType === constants.plotTypes.MULTI_PAIRED.type) {
				return 'MultiPaired';
			} else if (this.plotType === constants.plotTypes.SHARED_CONTROL.type) {
				return 'SharedControl';
			}
		}
	},
	methods: {
	},
	components: {
		TwoIndependentGroups,
		Paired,
		MultipleGroups,
		MultiPaired,
		SharedControl
	}
};
</script>
