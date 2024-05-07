	<template>

		<div>
			<div v-html="renderRichText(background.text.json, renderOptions(background.text.links))" />
		</div>

	</template>

	<script>
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
	import { BLOCKS } from '@contentful/rich-text-types';
	export default {
		data() {
			return {
				background: []
			};
		},
		async created() {
			this.background = await this.getData();
		},
		methods: {
			getData: async () => {
				const query = `{
					backgroundCollection(limit: 1) {
						items {
						sys {
							id
						}
						text {
							json
							links {
							assets {
								block {
									sys {
									id
									}
									url
									title
									width
									height
									description
								}
								}
							}
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
					return response.data.backgroundCollection.items[0];
				} catch (error) {
					console.log(error);
					throw new Error("Couldn't fetch data");
				}
			},
			renderOptions(links) {
				const assetMap = new Map();
				const assets = links.assets && links.assets.block; // Ensure assets.block is defined
				if (assets) {
					for (const asset of assets) {
						assetMap.set(asset.sys.id, asset);
					}
				}

				return {
					renderNode: {
						[BLOCKS.EMBEDDED_ASSET]: (node, next) => {
							if (!assets) return;
							const asset = assetMap.get(node.data.target.sys.id);
							console.log('Asset:', asset);
							if (!asset) return;
							console.log('Asset URL:', asset.url);
							return (`<img src=${asset.url} class="responsive-img"/>`);
						}

					}
				};
			},

			renderRichText(richTextJson, options) {
				return documentToHtmlString(richTextJson, options);
			}
		},
		metaInfo() {
			return {
				title: 'Background'
			};
		}
	};
	</script>
	<style>
	ol {
		list-style-type: decimal !important;
		margin-left: 40px; 
	}
	ul {
	  list-style-type: disc !important;
	}
	</style>
