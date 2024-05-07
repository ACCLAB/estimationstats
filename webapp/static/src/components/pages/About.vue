<template>
	<div>
		<div v-html="renderRichText(about.text.json)" />
	</div>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export default {
	data() {
		return {
			about: []
		};
	},
	async created() {
		this.about = await this.getData();
	},
	methods: {
		getData: async () => {
			const query = `{
				aboutCollection {
					items {
					sys {
						id
					}
					text {
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
				return response.data.aboutCollection.items[0];
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
			title: 'About'
		};
	}
};
</script>

<style>
ol {
  list-style-type: decimal !important;
}
ul {
  list-style-type: disc !important;
}
</style>