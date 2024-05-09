<template>
	<div>
		<div v-html="renderRichText(getTheCode.intro.json)" />

			<a href='https://github.com/ACCLAB/dabestr'><img src='https://img.shields.io/badge/R-dabestr--0.3.0-green.svg?longCache=true&style=for-the-badge' style="margin:10px 10px"></a>

			<a href='https://github.com/ACCLAB/DABEST-python'><img src='https://img.shields.io/badge/Python-DABEST--2023.02.14-blue.svg?longCache=true&style=for-the-badge' style="margin:10px 10px"></a>

			<a href='https://github.com/ACCLAB/DABEST-Matlab'><img src='https://img.shields.io/badge/Matlab-DABEST--0.1.0-purple.svg?longCache=true&style=for-the-badge' style="margin:10px 10px"></a>

	  <div class="feature-box">
		<div v-html="renderRichText(getTheCode.newFeatures.json)" />
	  </div>
	</div>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
export default {
	data() {
		return {
			getTheCode: []
		};
	},
	async created() {
		this.getTheCode = await this.getData();
	},
	methods: {
		getData: async () => {
			const query = `{
				getTheCodeCollection {
					items {
					sys {
						id
					}
					intro {
						json
					}
					newFeatures {
						json
					}
					}
				}
				}`;
			const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.VUE_APP_CONTENTFUL_SPACE_ID}`;
			const fetchOptions = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${process.env.VUE_APP_CONTENTFUL_ACCESS_TOKEN}`
				},
				body: JSON.stringify({ query })
			};

			try {
				const response = await fetch(fetchUrl, fetchOptions).then((response) => response.json());
				console.log('bruh');
				console.log(response);
				return response.data.getTheCodeCollection.items[0];
			} catch (error) {
				console.log(error);
				throw new Error("Couldn't fetch data");
			}
		},
		renderRichText(richTextJson) {
			return documentToHtmlString(richTextJson);
		}
	},
	metaInfo() {
		return {
			title: 'Get the Code'
		};
	}
};
</script>

<style>
.feature-box {
  border: 2px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
}
</style>
<style>
ol {
	list-style-type: decimal !important;
	margin-left: 40px; 
}
ul {
  list-style-type: disc !important;
}
</style>

