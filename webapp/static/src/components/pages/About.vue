<template>
	<div>
		<h5>Contact</h5>
		Please send questions, feedback, suggestions <a href='http://www.claridgechang.net/contact.html' target='_blank'>here</a>.
		<br><br>
		<h5>The authors</h5>
		As a behavioral scientist, Adam Claridge-Chang became frustrated with significance testing; he retrained in estimation statistics by reading textbooks and articles by <a href='http://as.wiley.com/WileyCDA/WileyTitle/productCd-0727913751.html' target='_blank'>Altman</a>, <a href='https://effectsizefaq.com/about/' target='_blank'>Ellis</a>, <a href='https://www.routledge.com/Introduction-to-the-New-Statistics-Estimation-Open-Science-and-Beyond/Cumming-Calin-Jageman/p/book/9781138825529' target='_blank'>Cumming</a>, <a href='http://ist-socrates.berkeley.edu/~maccoun/PP279_Cohen1.pdf' target='_blank'>Cohen</a>, and <a href='http://as.wiley.com/WileyCDA/WileyTitle/productCd-EHEP002313.html'>Borenstein</a>. Noting that the suite of methods went by several names, Adam wrote a <a href='https://en.wikipedia.org/wiki/Estimation_statistics'>Wikipedia</a> page and published an <a href='https://doi.org/10.5281/zenodo.60156'>editorial</a> branding the framework as estimation statistics. Then, he and <a href='https://www.twitter.com/jacuzzijo' target='_blank'>Joses Ho</a> implemented a package in the Python programming language to make estimation tools more widely available in a form that is compatible with code-driven data analysis workflows.
		<br><br>
		The web application was built to make estimation available to everyone, including those who haven’t gotten around to learning to code.
		<br><br>To find out more about the authors’ research, please visit the Claridge-Chang <a href='http://www.claridgechang.net/' target='_blank'>lab webpage</a>.
		<br><br>
		<h5>The website</h5>
		The <a href='https://github.com/josesho/bootstrap_contrast' target='_blank'>codebase</a> was built in Python using the <a href='https://www.matplotlib.org' target="_blank">matplotlib</a>, <a href='https://pandas.pydata.org' target="_blank"><i>pandas</i></a>, and <a href='https://seaborn.pydata.org' target="_blank">seaborn</a> libraries. The bootstrap algorithm was heavily adapted from Constantine Evans' <a href='https://github.com/cgevans/scikits-bootstrap' target="_blank">scikits-bootstrap</a> package.
		<br><br>The web application was built in <a href="https://flask.pocoo.org" target="_blank">Flask</a> and <a href='https://vuejs.org/'>Vue.js</a> by Hung Nguyen.
		<br><br>The layout uses fonts and typography designed by <a href='https://practicaltypography.com/end-credits.html#bio' target="_blank">Matthew Butterick</a>.
		<br><br>This site is © 2017 Adam Claridge-Chang and Joses Ho. All rights reserved.
		<br><br>
		<h5>How to cite</h5>
		Ho, J and Claridge-Chang, A (2017), “Estimation Statistics” website http://www.estimationstats.com, accessed on [insert access date here].
		<!-- <br><br>Twitter feed on #estimationstats -->

	</div>
</template>

<script>
export default {
	metaInfo() {
		return {
			title: 'About'
		};
	}
};
</script>
