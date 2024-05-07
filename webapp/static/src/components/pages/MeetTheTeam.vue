<template>
	<div>
		<ul class="meetTheTeam">
			<li v-for="person in meetTheTeam" class="meetTheTeam">
				<div class="team-member-container">
				<img :src="person.image.url" height="220px" width="170px" />
				<div>
					<b>{{ person.name }}</b>
					<span v-html="renderRichText(person.bio.json)" />
				</div>
				</div>
				<hr>
			</li>
		</ul>
        <p>
			To read more about the authors’ research, please visit the Claridge-Chang <a href='http://www.claridgechang.net/' target='_blank'>lab webpage</a>.
		</p>
	</div>
</template>


<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
export default {
	data() {
		return {
			meetTheTeam: []
		};
	},
	async created() {
		const rawData = await this.getData();
		this.meetTheTeam = rawData.sort((a, b) => a.rank - b.rank);
	},
	methods: {
		getData: async () => {
			const query = `{
				meetTheTeamCollection {
					items {
					sys {
						id
					}
					name 
					bio {
						json
					}
					image {
						url
					}
					rank
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
				return response.data.meetTheTeamCollection.items.reverse();
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
			title: 'Meet the Team'
		};
	}
};
</script>

<style>
  .team-member-container {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
  }

  .team-member-container img {
    margin-right: 20px;
  }

  .team-member-container hr {
    width: 100%;
    margin-top: 10px;
  }

  ol {
	list-style-type: decimal !important;
  }

  ul {
	list-style-type: disc !important;
  }
</style>