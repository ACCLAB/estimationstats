<template>
	<div>
		<h5>The authors</h5>
		<p>
			<img src="../../../static/img/people/adam.png" align="left" height="200px" style="margin: 10px 30px 0px 0px"/>
			As a behavioral scientist, <a href ='https://twitter.com/adamcchang'>Adam Claridge-Chang</a> became frustrated with significance testing; he retrained in estimation statistics by reading textbooks and articles by <a href='http://as.wiley.com/WileyCDA/WileyTitle/productCd-0727913751.html' target='_blank'>Altman</a>, <a href='https://effectsizefaq.com/about/' target='_blank'>Ellis</a>, <a href='https://www.routledge.com/Introduction-to-the-New-Statistics-Estimation-Open-Science-and-Beyond/Cumming-Calin-Jageman/p/book/9781138825529' target='_blank'>Cumming</a>, <a href='https://www.ics.uci.edu/~sternh/courses/210/cohen94_pval.pdf' target='_blank'>Cohen</a>, and <a href='http://as.wiley.com/WileyCDA/WileyTitle/productCd-EHEP002313.html'>Borenstein</a>. Noting that the suite of methods went by several names, Adam wrote a <a href='https://en.wikipedia.org/wiki/Estimation_statistics'>Wikipedia entry</a> and published an <a href='https://doi.org/10.5281/zenodo.60156'>editorial</a> branding the framework as <em>estimation statistics</em>.
		</p>
		<br>
		<p>
			<img src="../../../static/img/people/joses.jpg" align="left" height="170px" style="margin: 10px 30px 0px 0px"/>
			Then, he and <a href='https://www.twitter.com/jacuzzijo' target='_blank'>Joses Ho</a> created the DABEST package (Data Analysis with Bootstrap ESTimation) in <a href='https://www.github.com/ACCLAB/DABEST-Python'>Python</a>, <a href='https://www.github.com/dabestr' target='_blank'>R</a> and <a href='https://www.github.com/DABEST-Matlab' target='_blank'>Matlab</a> to make estimation tools more widely available. This web application was built to make estimation available to everyone, including those who haven’t gotten around to learning to code.
		</p>
		<p>
			To read more about the authors’ research, please visit the Claridge-Chang <a href='http://www.claridgechang.net/' target='_blank'>lab webpage</a>.
		</p>
		
		<br>
		
		<h5>Contact</h5>
		<p>
			<!-- <a href="https://twitter.com/EstimationStats?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="true" data-size="large">Follow @EstimationStats</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> -->
			Twitter: <a href="https://twitter.com/EstimationStats?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="large" data-show-count="true">@EstimationStats</a>. 
			<br>
			You can also post questions, feedback, and suggestions to our <a href='https://groups.google.com/forum/#!forum/estimationstats' target="-blank">Google Groups</a>.
		</p>

		<br>

		<h5>The website</h5>
		<p>
			The <a href='https://github.com/ACCLAB/DABEST-python' target='_blank'>codebase</a> was built in Python using the <a href='https://www.matplotlib.org' target="_blank">matplotlib</a>, <a href='https://pandas.pydata.org' target="_blank">pandas</a>, and <a href='https://seaborn.pydata.org' target="_blank">seaborn</a> libraries. An early version of the bootstrap algorithm was heavily adapted from Constantine Evans' <a href='https://github.com/cgevans/scikits-bootstrap' target="_blank">scikits-bootstrap</a> package.
		</p>
		<p>
			The web application was built in <a href="https://flask.pocoo.org" target="_blank">Flask</a> and <a href='https://vuejs.org/'>Vue.js</a> by Hung Nguyen.
		</p>
		<p>
			The layout uses fonts and typography designed by <a href='https://practicaltypography.com/about-matthew-butterick.html' target="_blank">Matthew Butterick</a>. Typefaces designed by <a href='https://cargocollective.com/jonnypinhorn' target='blank'>Jonny Pinhorn</a> were used in the exemplar plots.
		</p>
		<p>
			This site is © 2017-2019 Adam Claridge-Chang and Joses Ho. All rights reserved.
		</p>
		
		<br>

		<h5>How to cite</h5>
		<p>
			<b>Moving beyond P values: Everyday data analysis with estimation plots</b>
			<br>
			Joses Ho, Tayfun Tumkaya, Sameer Aryal, Hyungwon Choi, Adam Claridge-Chang
			<br>
			Nature Methods 2019, 1548-7105. DOI: <a href="https://dx.doi.org/10.1038/s41592-019-0470-3" target="_blank">10.1038/s41592-019-0470-3</a>
			<br>
			<a href="https://rdcu.be/bHhJ4" target="_blank">Free-to-view PDF</a>
		</p>
		<br>

		<!-- <h5>Contact</h5>
		<p>
			You can reach us on Twitter: <a href="https://twitter.com/EstimationStats?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="large" data-show-count="true">@EstimationStats</a>.
		</p>

		<p>
			You can also send questions, feedback, suggestions <a href='mailto:estimationstats@googlegroups.com'>here</a>.
		</p> -->

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
