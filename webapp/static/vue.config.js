module.exports = {
	baseUrl: process.env.NODE_ENV === 'production' ? '/static/dist/' : '/',
	configureWebpack: {
		resolve: {
			alias: {
				'vue$': 'vue/dist/vue.esm.js'
			}
		}
	}
};
