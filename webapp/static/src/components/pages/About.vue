<template>
	<div>
		<h4>The authors</h4>
		<p>
			<img src="../../../static/img/people/adam.png" align="left" height="200px" style="margin: 10px 30px 0px 0px"/>
			As a behavioral scientist, <a href ='https://twitter.com/adamcchang'>Adam Claridge-Chang</a> became frustrated with significance testing; he retrained in estimation statistics by reading textbooks and articles by <a href='http://as.wiley.com/WileyCDA/WileyTitle/productCd-0727913751.html' target='_blank'>Altman</a>, <a href='https://effectsizefaq.com/about/' target='_blank'>Ellis</a>, <a href='https://www.routledge.com/Introduction-to-the-New-Statistics-Estimation-Open-Science-and-Beyond/Cumming-Calin-Jageman/p/book/9781138825529' target='_blank'>Cumming</a>, <a href='https://www.ics.uci.edu/~sternh/courses/210/cohen94_pval.pdf' target='_blank'>Cohen</a>, and <a href='https://as.wiley.com/WileyCDA/WileyTitle/productCd-EHEP002313.html' target='_blank'>Borenstein</a>. Noting that the suite of methods went by several names, Adam wrote a <a href='https://en.wikipedia.org/wiki/Estimation_statistics' target='_blank'>Wikipedia entry</a> and, with Pryseley Assam, published an <a href='https://doi.org/10.5281/zenodo.60156' target="_blank">editorial</a> branding the framework as <em>estimation statistics</em>. With <a href="https://twitter.com/_sameeraryal" target="_blank">Sameer Aryal</a> and <a href="https://twitter.com/TumkayaTayfun" target="_blank">Tayfun Tumkaya</a>, he developed a <a href="https://www.github.com/DABEST-matlab" target="_blank">Matlab version of DABEST</a>. With Joses, he refined the design of estimation plots to make them more transparent and visually appealing, and co-wrote an <a href="https://doi.org/10.1038/s41592-019-0470-3">article on estimation plots</a> that is widely read.
		</p>
		<br>
		<p>
			<img src="../../../static/img/people/joses.jpg" align="left" height="170px" style="margin: 10px 30px 0px 0px"/>
	    To make estimation tools more widely available, <a href="https://www.josesho.com" target="_blank">Joses Ho</a> led the development of the DABEST packages (Data Analysis with Bootstrap ESTimation) in <a href="https://www.github.com/ACCLAB/dabestr" target="_blank">R</a> and <a href="https://www.github.com/ACCLAB/DABEST-Python" target="_blank">Python</a>. He broadened the utility of estimation plots by adding new graphical representations of several effect sizes, including plots of standardized effect sizes. To make estimation graphics accessible to all scientists (including non-coders), Joses also led the implementation of estimationstats.com.
		</p>
		<p>
			To read more about the authors’ research, please visit the Claridge-Chang <a href='http://www.claridgechang.net/' target='_blank'>lab webpage</a>.
		</p>

		<br>

		<h4>Contact</h4>
		<p>
			Post questions, feedback, and suggestions to our <a href='https://groups.google.com/forum/#!forum/estimationstats' target="-blank">Google Groups</a>.
		</p>

		<p>
			<!-- <a href="https://twitter.com/EstimationStats?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="true" data-size="large">Follow @EstimationStats</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> -->
			Please follow us on Twitter <a href="https://www.twitter.com/EstimationStats" class="twitter-follow-button" data-size="large" data-show-count="true">@EstimationStats</a> for updates and news!
			<br>
		</p>

		<br>

		<h4>The website</h4>
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
			This site is © 2017-2021 Adam Claridge-Chang and Joses Ho. All rights reserved.
		</p>

		<br>

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
