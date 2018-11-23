<template>
	<div>
		<h5>The authors</h5>
		<p>
			<img src="../../../static/img/people/adam.png" align="left" height="200px" style="margin: 10px 10px 0px"/>
			As a behavioral scientist, <a href ='https://twitter.com/adamcchang'>Adam Claridge-Chang</a> became frustrated with significance testing; he retrained in estimation statistics by reading textbooks and articles by <a href='http://as.wiley.com/WileyCDA/WileyTitle/productCd-0727913751.html' target='_blank'>Altman</a>, <a href='https://effectsizefaq.com/about/' target='_blank'>Ellis</a>, <a href='https://www.routledge.com/Introduction-to-the-New-Statistics-Estimation-Open-Science-and-Beyond/Cumming-Calin-Jageman/p/book/9781138825529' target='_blank'>Cumming</a>, <a href='https://www.ics.uci.edu/~sternh/courses/210/cohen94_pval.pdf' target='_blank'>Cohen</a>, and <a href='http://as.wiley.com/WileyCDA/WileyTitle/productCd-EHEP002313.html'>Borenstein</a>. Noting that the suite of methods went by several names, Adam wrote a <a href='https://en.wikipedia.org/wiki/Estimation_statistics'>Wikipedia</a> page and published an <a href='https://doi.org/10.5281/zenodo.60156'>editorial</a> branding the framework as estimation statistics.
		</p>

		<p>
			<img src="../../../static/img/people/joses.jpg" align="left" height="170px" style="margin: 10px 10px 0px"/>
			Then, he and <a href='https://www.twitter.com/jacuzzijo' target='_blank'>Joses Ho</a> implemented a package in <a href='https://www.github.com/ACCLAB/DABEST-Python'>Python</a> to make estimation tools more widely available. This web application was built to make estimation available to everyone, including those who haven’t gotten around to learning to code. (The Claridge-Chang lab has also produced packages to produce estimation plots in <a href='https://www.github.com/dabestr' target='_blank'>R</a> and <a href='https://www.github.com/DABEST-Matlab' target='_blank'>Matlab</a>.)
		</p>

		<p>
			To read more about the authors’ research, please visit the Claridge-Chang <a href='http://www.claridgechang.net/' target='_blank'>lab webpage</a>.
		</p>

		<h5>The website</h5>
		<p>
			The <a href='https://github.com/ACCLAB/DABEST-python' target='_blank'>codebase</a> was built in Python using the <a href='https://www.matplotlib.org' target="_blank">matplotlib</a>, <a href='https://pandas.pydata.org' target="_blank">pandas</a>, and <a href='https://seaborn.pydata.org' target="_blank">seaborn</a> libraries. An early version of the bootstrap algorithm was heavily adapted from Constantine Evans' <a href='https://github.com/cgevans/scikits-bootstrap' target="_blank">scikits-bootstrap</a> package.
		</p>
		<p>
			The web application was built in <a href="https://flask.pocoo.org" target="_blank">Flask</a> and <a href='https://vuejs.org/'>Vue.js</a> by Hung Nguyen.
		</p>
		<p>
			The layout uses fonts and typography designed by <a href='https://practicaltypography.com/end-credits.html#bio' target="_blank">Matthew Butterick</a>. For the exemplar plots, typefaces designed by <a href='https://cargocollective.com/jonnypinhorn' target='blank'>Jonny Pinhorn</a> were used.
		</p>
		<p>
			This site is © 2017-2018 Adam Claridge-Chang and Joses Ho. All rights reserved.
		</p>

		<h5>How to cite</h5>
		<p>
			<b>Moving beyond P values: Everyday data analysis with estimation plots</b>
			<br>
			Joses Ho, Tayfun Tumkaya, Sameer Aryal, Hyungwon Choi, Adam Claridge-Chang
			<br>
			<a href='https://doi.org/10.1101/377978' target='_blank'>https://doi.org/10.1101/377978</a>
		</p>

		<h5>Contact</h5>
		<p>
			You can reach us on Twitter: <a href="https://twitter.com/EstimationStats?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="large" data-show-count="true">@EstimationStats</a>.
		</p>

		<p>
			You can also send questions, feedback, suggestions <a href='http://www.claridgechang.net/contact.html' target='_blank'>here</a>.
		</p>

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
