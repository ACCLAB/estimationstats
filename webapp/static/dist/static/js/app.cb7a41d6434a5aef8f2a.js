webpackJsonp([2],{"+HWC":function(t,e,a){"use strict";var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e(this.$route.meta.noHeader?"nav":"breadcrumbs"),this._v(" "),e("div",{staticClass:"divider heavy"})],1)},staticRenderFns:[]};e.a=i},0:function(t,e,a){a("j1ja"),t.exports=a("NHnr")},"1v2+":function(t,e,a){"use strict";var i={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("br"),t._v("\n\tThis site provides you with a web application to plot experimental data from an "),i("a",{attrs:{href:"https://en.wikipedia.org/wiki/Estimation_statistics",target:"blank"}},[t._v("estimation statistics")]),t._v(" perspective. You may have found significance testing and P-values "),i("a",{attrs:{href:"https://www.nature.com/articles/nmeth.3288",target:"blank"}},[t._v("problematic")]),t._v("; you may be asking what comes "),i("a",{attrs:{href:"https://doi.org/10.5281/zenodo.60156",target:"blank"}},[t._v("next")]),t._v(".\n\t"),i("br"),i("br"),t._v("Estimation statistics is a simple "),i("a",{attrs:{href:"https://thenewstatistics.com/itns/",target:"blank"}},[t._v("framework")]),t._v(" that—while avoiding the pitfalls of significance testing—uses familiar statistical concepts: means, mean differences, and error bars.\n\tFor each of the most routine significance tests, there is an estimation replacement:\n\t"),t._m(0),t._v("\n\tAll of these plots enable you to graphically inspect the mean difference and its confidence interval. When there are multiple groups, the side-by-side plotting allows the visual comparison of effect sizes.\n\t"),i("br"),t._v(" "),i("img",{staticStyle:{margin:"50px 0px"},attrs:{src:a("WK6i"),align:"centre",height:"550px"}}),t._v(" "),i("br"),t._v("Relative to conventional plots, estimation plots offer five key benefits:\n\n\t"),i("table",{staticStyle:{width:"90%"}},[t._m(1),t._v(" "),i("tr",[i("td",[t._v("Avoid false dichotomy")]),t._v(" "),i("td",[i("font",{attrs:{color:"red"}},[t._v("✘")])],1),t._v(" "),i("td",[i("font",{attrs:{color:"red"}},[t._v("✘")])],1),t._v(" "),i("td",[i("font",{attrs:{color:"green"}},[t._v("✔")])],1)]),t._v(" "),i("tr",[i("td",[t._v("Display all observed values")]),t._v(" "),i("td",[i("font",{attrs:{color:"red"}},[t._v("✘")])],1),t._v(" "),i("td",[i("font",{attrs:{color:"red"}},[t._v("✘")])],1),t._v(" "),i("td",[i("font",{attrs:{color:"green"}},[t._v("✔")])],1)]),t._v(" "),i("tr",[i("td",[t._v("Focus on intervention effect size")]),t._v(" "),i("td",[i("font",{attrs:{color:"red"}},[t._v("✘")])],1),t._v(" "),i("td",[i("font",{attrs:{color:"red"}},[t._v("✘")])],1),t._v(" "),i("td",[i("font",{attrs:{color:"green"}},[t._v("✔")])],1)]),t._v(" "),i("tr",[i("td",[t._v("Visualize estimate precision")]),t._v(" "),i("td",[i("font",{attrs:{color:"red"}},[t._v("✘")])],1),t._v(" "),i("td",[i("font",{attrs:{color:"red"}},[t._v("✘")])],1),t._v(" "),i("td",[i("font",{attrs:{color:"green"}},[t._v("✔")])],1)]),t._v(" "),i("tr",[i("td",[t._v("Show mean difference distribution")]),t._v(" "),i("td",[i("font",{attrs:{color:"red"}},[t._v("✘")])],1),t._v(" "),i("td",[i("font",{attrs:{color:"red"}},[t._v("✘")])],1),t._v(" "),i("td",[i("font",{attrs:{color:"green"}},[t._v("✔")])],1)])]),t._v(" "),t._m(2),t._v("\n\nTo our knowledge, mean difference comparison plots were first described by Martin Gardner and Douglas Altman ("),i("a",{attrs:{href:"https://www.ncbi.nlm.nih.gov/pmc/articles/pmid/3082422/",target:"_blank"}},[t._v("Gardner and Altman 1986")]),t._v("), while the multiple-comparison design was devised by Geoff Cumming ("),i("a",{attrs:{href:"https://www.amazon.com/Introduction-New-Statistics-Estimation-Science/dp/1138825522/",target:"_blank"}},[t._v("Cumming 2012")]),t._v("). We propose calling the two-groups plot "),i("i",[t._v("Gardner-Altman comparison plots")]),t._v(" and the multi-group plots "),i("i",[t._v("Cumming comparison plots")]),t._v(".\n\n")])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticStyle:{"list-style-type":"disc"}},[a("li",[t._v("Unpaired Student’s t-test → Two-groups Gardner-Altman comparison plot")]),t._v(" "),a("li",[t._v("Paired Student’s  t-test → Paired comparison")]),t._v(" "),a("li",[t._v("One-way ANOVA + multiple comparisons → Multiple groups Cumming plot")]),t._v(" "),a("li",[t._v("Repeated measures ANOVA → Multi-paired comparison")]),t._v(" "),a("li",[t._v("Ordered groups ANOVA → Shared-control comparison")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th"),this._v(" "),e("th",[this._v("Bars-and-Stars")]),this._v(" "),e("th",[this._v("Boxplot & "),e("i",[this._v("P")])]),this._v(" "),e("th",[this._v("Estimation Plot")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ol",{attrs:{type:"1"}},[a("li",[a("u",[t._v("Avoid false dichotomy.")]),t._v(" One of the many problems with significance testing is the application of an α-threshold creates the illusion of a dichotomy. Is there really a great difference between probabilities of 0.04999 and 0.05001? In significance testing, the former is ‘significant’ and the latter is ‘non-significant.’ The graphical method of showing this test result with clusters of stars amplifies this false dichotomy; since the average reader is primed to look for "),a("i",[t._v("P")]),t._v(" < 0.05, presenting P-values is almost as bad. Estimation plots present the significance test result innocuously: as the presence or absence of a gap between the mean-difference zero line and the closest confidence interval bound.")]),t._v(" "),a("br"),t._v(" "),a("li",[a("u",[t._v("Display all observed values.")]),t._v(" "),a("a",{attrs:{href:"https://doi.org/10.1038/nmeth.2837",target:"_blank"}},[t._v("Bar charts")]),t._v(" often show means, error, and significance stars only. "),a("a",{attrs:{href:"https://www.nature.com/articles/nmeth.2811",target:"_blank"}},[t._v("Boxplots")]),t._v(" generally show just medians, quartiles, maybe a few outliers, and P-values. For observed values, estimation plots follow best practices by presenting "),a("a",{attrs:{href:"https://doi.org/10.1371/journal.pbio.1002128",target:"_blank"}},[t._v("each and every datapoint")]),t._v(". Presenting all observed values means that nothing is hidden: range, normality, skew, kurtosis, outliers, bounds, modality, and sample size are all clearly visible.")]),t._v(" "),a("br"),t._v(" "),a("li",[a("u",[t._v("Focus on intervention effect size.")]),t._v(" Estimation comparison plots include an entirely new axis for the mean difference of two groups (or paired data), and a whole panel for the mean differences of multiple groups. This serves to draw attention to something that deserves it, the answer to the question: “What is the magnitude of the effect of the intervention?”")]),t._v(" "),a("br"),t._v(" "),a("li",[a("u",[t._v("Visualize estimate precision.")]),t._v(" Unlike a significance test result, the narrowness of a confidence interval gives a clear impression of effect size precision. The 95% confidence interval provides the range of the the population mean difference values that are the most plausible. This 95% plausible interval also serves as an 83% prediction interval for replications ("),a("a",{attrs:{href:"https://www.amazon.com/Introduction-New-Statistics-Estimation-Science/dp/1138825522/",target:"_blank"}},[t._v("Cumming and Calin-Jageman 2016")]),t._v("), i.e. predicts future replication effect sizes (assuming no change in protocol) with 83% accuracy.")]),t._v(" "),a("br"),t._v(" "),a("li",[a("u",[t._v("Show mean difference distribution.")]),t._v(" The distribution of mean differences can be estimated using bootstrap resamples of the available data. As an approximation of the "),a("a",{attrs:{href:"https://web.stanford.edu/~hastie/Papers/ESLII.pdf",target:"_blank"}},[t._v("Bayes posterior distribution")]),t._v(", this curve allows the analyst to weigh plausibility over an effect likelihood size range. Finally, plotting this curve discourages dichotomous thinking—engendered by P-values and hard-edged confidence intervals ("),a("a",{attrs:{href:"https://www.ncbi.nlm.nih.gov/pubmed/28176294"}},[t._v("Kruschke and Liddell 2017")]),t._v(")—by drawing attention to the distribution’s graded nature.")])])}]};e.a=i},"2s2z":function(t,e,a){"use strict";var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"page-title"},[this._v(this._s(this.title))]),this._v(" "),e(this.userGuide,{tag:"component"})],1)},staticRenderFns:[]};e.a=i},"3YtA":function(t,e,a){"use strict";var i=a("kkmO"),s=a("YXhs"),n=a("VU/8")(i.a,s.a,!1,null,null,null);e.a=n.exports},"4f9D":function(t,e,a){t.exports=a.p+"static/img/shared-control-display.052f06b.svg"},"7tTb":function(t,e,a){"use strict";var i=a("I002"),s=a("SZ4d"),n=a("VU/8")(i.a,s.a,!1,null,null,null);e.a=n.exports},"A+Ec":function(t,e,a){t.exports=a.p+"static/img/two-group-unpaired-display.4956789.svg"},BYyJ:function(t,e,a){"use strict";var i=a("FN8c");e.a={data:function(){return{plotTypes:i.e}}}},"CC/z":function(t,e,a){"use strict";var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home"}},[a("div",{staticClass:"row"}),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"row"}),t._v(" "),a("div",{staticClass:"row"},[t._m(2),t._v(" "),a("div",{staticClass:"col s6"},[a("router-link",{attrs:{to:{name:"background"}}},[t._v("\n\t\t\t\tWhat is Estimation Statistics?\n\t\t\t")])],1),t._v(" "),t._m(3),t._v(" "),a("div",{staticClass:"col s6"},[a("router-link",{attrs:{to:{name:"about"}}},[t._v("About this site")])],1)]),t._v(" "),a("div",{staticClass:"row"},[t._m(4),t._v(" "),a("div",{staticClass:"col s6"},[a("router-link",{attrs:{to:{name:"analyze",params:{plotType:t.plotTypes.UNPAIRED.type}}}},[t._v("\n\t\t\t\t"+t._s(t.plotTypes.UNPAIRED.name)+"\n\t\t\t")])],1),t._v(" "),a("div",{staticClass:"col s6"},[a("router-link",{attrs:{to:{name:"analyze",params:{plotType:t.plotTypes.PAIRED.type}}}},[t._v("\n\t\t\t\t"+t._s(t.plotTypes.PAIRED.name)+"\n\t\t\t")])],1),t._v(" "),a("div",{staticClass:"col s6"},[a("router-link",{attrs:{to:{name:"analyze",params:{plotType:t.plotTypes.MULTI.type}}}},[t._v("\n\t\t\t\t"+t._s(t.plotTypes.MULTI.name)+"\n\t\t\t")])],1),t._v(" "),a("div",{staticClass:"col s6"},[a("router-link",{attrs:{to:{name:"analyze",params:{plotType:t.plotTypes.MULTI_PAIRED.type}}}},[t._v("\n\t\t\t\t"+t._s(t.plotTypes.MULTI_PAIRED.name)+"\n\t\t\t")])],1),t._v(" "),a("div",{staticClass:"col s6"},[a("router-link",{attrs:{to:{name:"analyze",params:{plotType:t.plotTypes.SHARED_CONTROL.type}}}},[t._v("\n\t\t\t\t"+t._s(t.plotTypes.SHARED_CONTROL.name)+"\n\t\t\t")])],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col s6 offset-s6"},[e("img",{attrs:{width:"100%",src:a("SzUt")}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col s12"},[e("span",{staticClass:"title main-title grey-text text-darken-3"},[this._v("\n\t\t\t\tEstimation Statistics\n\t\t\t")]),this._v(" BETA\n\t\t")]),this._v(" "),e("div",{staticClass:"col s12"},[e("span",{staticClass:"title sub-title grey-text text-darken-1"},[this._v("\n\t\t\t\tAnalyze your data with effect sizes\n\t\t\t")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col s12"},[e("span",{staticClass:"title",attrs:{id:"begin"}},[this._v("Intro")]),this._v(" "),e("div",{staticClass:"divider heavy"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col s6"},[e("a",{attrs:{href:"https://github.com/ACCLAB/DABEST-python",target:"_blank"}},[this._v("Get the code")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col s12"},[e("span",{staticClass:"title",attrs:{id:"plot"}},[this._v("Plot")]),this._v(" "),e("div",{staticClass:"divider heavy"})])}]};e.a=i},Dwx7:function(t,e,a){"use strict";var i=a("UCde"),s=a("2s2z"),n=a("VU/8")(i.a,s.a,!1,null,null,null);e.a=n.exports},EmVl:function(t,e,a){t.exports=a.p+"static/img/multi-two-group-paired-display.59b7484.svg"},FN8c:function(t,e,a){"use strict";a.d(e,"e",function(){return i}),a.d(e,"c",function(){return s}),a.d(e,"d",function(){return n}),a.d(e,"a",function(){return r}),a.d(e,"b",function(){return o});var i={UNPAIRED:{type:"two-independent-groups",name:"Two groups"},PAIRED:{type:"paired",name:"Paired"},MULTI:{type:"multi",name:"Multi Two groups"},MULTI_PAIRED:{type:"multi-paired",name:"Multi Paired"},SHARED_CONTROL:{type:"shared-control",name:"Shared control"}},s={PNG:{extension:"png",name:"PNG"},SVG:{extension:"svg",name:"SVG"},CSV:{extension:"csv",name:"CSV"}},n={COPY_PASTE:{type:"copy_paste",name:"Copy-paste"},CSV:{type:"upload_csv",name:"Upload CSV"}},r=",",o="\n"},I002:function(t,e,a){"use strict";var i=a("FN8c");e.a={data:function(){return{plotTypes:i.e}}}},I2Tb:function(t,e,a){"use strict";var i=a("PouT"),s=a("CC/z"),n=a("VU/8")(i.a,s.a,!1,null,null,null);e.a=n.exports},KnNf:function(t,e,a){"use strict";var i=a("FN8c");e.a={data:function(){return{plotTypes:i.e}}}},M93x:function(t,e,a){"use strict";var i=a("xJD8"),s=a("v6EA"),n=a("VU/8")(i.a,s.a,!1,null,null,null);e.a=n.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("M4fF"),s=a.n(i),n=a("7+uW"),r=a("7eza"),o=a.n(r),l=a("M93x"),u=a("YaEn"),c=a("0lrd"),p=(a.n(c),a("xnyV"));a.n(p);n.a.use(o.a,{template:'\n\t<nav class="breadcrumb" v-if="$breadcrumbs.length">\n\t\t<router-link exact class="breadcrumb-item black-text" :to="{ name: \'home\' }">Estimation stats</router-link>\n\t\t<template v-for="(crumb, key) in $breadcrumbs">\n\t\t\t/\n\t\t\t<router-link active-class="" exact class="breadcrumb-item black-text" :to="crumb.meta.anchor ? crumb.meta.anchor : linkProp(crumb)" :key="key">{{ crumb | crumbText }}</router-link>\n\t\t</template>\n\t</nav>'}),Object.defineProperty(n.a.prototype,"_",{value:s.a}),n.a.config.productionTip=!1,new n.a({el:"#app",router:u.a,render:function(t){return t(l.a)}})},NpNT:function(t,e,a){"use strict";var i={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h5",[t._v("The authors")]),t._v("\n\tAs a behavioral scientist, Adam Claridge-Chang became frustrated with significance testing; he retrained in estimation statistics by reading textbooks and articles by "),a("a",{attrs:{href:"http://as.wiley.com/WileyCDA/WileyTitle/productCd-0727913751.html",target:"_blank"}},[t._v("Altman")]),t._v(", "),a("a",{attrs:{href:"https://effectsizefaq.com/about/",target:"_blank"}},[t._v("Ellis")]),t._v(", "),a("a",{attrs:{href:"https://www.routledge.com/Introduction-to-the-New-Statistics-Estimation-Open-Science-and-Beyond/Cumming-Calin-Jageman/p/book/9781138825529",target:"_blank"}},[t._v("Cumming")]),t._v(", "),a("a",{attrs:{href:"http://ist-socrates.berkeley.edu/~maccoun/PP279_Cohen1.pdf",target:"_blank"}},[t._v("Cohen")]),t._v(", and "),a("a",{attrs:{href:"http://as.wiley.com/WileyCDA/WileyTitle/productCd-EHEP002313.html"}},[t._v("Borenstein")]),t._v(". Noting that the suite of methods went by several names, Adam wrote a "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Estimation_statistics"}},[t._v("Wikipedia")]),t._v(" page and published an "),a("a",{attrs:{href:"https://doi.org/10.5281/zenodo.60156"}},[t._v("editorial")]),t._v(" branding the framework as estimation statistics.\n\n\t"),a("br"),a("br"),t._v("Then, he and "),a("a",{attrs:{href:"https://www.twitter.com/jacuzzijo",target:"_blank"}},[t._v("Joses Ho")]),t._v(" implemented a package in the Python programming language to make estimation tools more widely available in a form that is compatible with code-driven data analysis workflows. The web application was built to make estimation available to everyone, including those who haven’t gotten around to learning to code.\n\t"),a("br"),a("br"),t._v("To find out more about the authors’ research, please visit the Claridge-Chang "),a("a",{attrs:{href:"http://www.claridgechang.net/",target:"_blank"}},[t._v("lab webpage")]),t._v(".\n\t"),a("br"),a("br"),t._v(" "),a("h5",[t._v("The website")]),t._v("\n\tThe "),a("a",{attrs:{href:"https://github.com/ACCLAB/DABEST-python",target:"_blank"}},[t._v("codebase")]),t._v(" was built in Python using the "),a("a",{attrs:{href:"https://www.matplotlib.org",target:"_blank"}},[t._v("matplotlib")]),t._v(", "),a("a",{attrs:{href:"https://pandas.pydata.org",target:"_blank"}},[a("i",[t._v("pandas")])]),t._v(", and "),a("a",{attrs:{href:"https://seaborn.pydata.org",target:"_blank"}},[t._v("seaborn")]),t._v(" libraries. The bootstrap algorithm was heavily adapted from Constantine Evans' "),a("a",{attrs:{href:"https://github.com/cgevans/scikits-bootstrap",target:"_blank"}},[t._v("scikits-bootstrap")]),t._v(" package.\n\t"),a("br"),a("br"),t._v("The web application was built in "),a("a",{attrs:{href:"https://flask.pocoo.org",target:"_blank"}},[t._v("Flask")]),t._v(" and "),a("a",{attrs:{href:"https://vuejs.org/"}},[t._v("Vue.js")]),t._v(" by Hung Nguyen.\n\t"),a("br"),a("br"),t._v("The layout uses fonts and typography designed by "),a("a",{attrs:{href:"https://practicaltypography.com/end-credits.html#bio",target:"_blank"}},[t._v("Matthew Butterick")]),t._v(".\n\t"),a("br"),a("br"),t._v("This site is © 2017-2018 Adam Claridge-Chang and Joses Ho. All rights reserved.\n\t"),a("br"),a("br"),t._v(" "),a("h5",[t._v("How to cite")]),t._v("\n\tHo, J and Claridge-Chang, A (2017), “Estimation Statistics” website http://www.estimationstats.com, accessed on [insert access date here].\n\t"),t._v(" "),a("br"),a("br"),t._v(" "),a("h5",[t._v("Contact")]),t._v("\n\tPlease send questions, feedback, suggestions "),a("a",{attrs:{href:"http://www.claridgechang.net/contact.html",target:"_blank"}},[t._v("here")]),t._v(".\n\t"),a("br"),a("br")])}]};e.a=i},PouT:function(t,e,a){"use strict";var i=a("FN8c");e.a={data:function(){return{plotTypes:i.e}},metaInfo:function(){return{title:"Estimation Statistics"}}}},SZ4d:function(t,e,a){"use strict";var i={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",[i("div",{staticClass:"row"}),t._v(" "),i("div",{staticClass:"row valign-wrapper"},[i("div",{staticClass:"col s2 center-align"},[i("router-link",{staticClass:"grey-text text-darken-1",attrs:{exact:"",to:{name:"home"}}},[i("img",{staticClass:"logo",attrs:{src:a("xDdg")}})])],1),t._v(" "),i("div",{staticClass:"col s12"},[i("div",{staticClass:"menu center-align"},[i("router-link",{staticClass:"grey-text text-darken-1",attrs:{exact:"",to:{name:"analyze",params:{plotType:t.plotTypes.UNPAIRED.type}}}},[t._v(t._s(t.plotTypes.UNPAIRED.name))]),t._v(" "),i("span",{staticClass:"inline-divider heavy"}),t._v(" "),i("router-link",{staticClass:"grey-text text-darken-1",attrs:{exact:"",to:{name:"analyze",params:{plotType:t.plotTypes.PAIRED.type}}}},[t._v(t._s(t.plotTypes.PAIRED.name))]),t._v(" "),i("span",{staticClass:"inline-divider heavy"}),t._v(" "),i("router-link",{staticClass:"grey-text text-darken-1",attrs:{exact:"",to:{name:"analyze",params:{plotType:t.plotTypes.MULTI.type}}}},[t._v(t._s(t.plotTypes.MULTI.name))]),t._v(" "),i("span",{staticClass:"inline-divider heavy"}),t._v(" "),i("router-link",{staticClass:"grey-text text-darken-1",attrs:{exact:"",to:{name:"analyze",params:{plotType:t.plotTypes.MULTI_PAIRED.type}}}},[t._v(t._s(t.plotTypes.MULTI_PAIRED.name))]),t._v(" "),i("span",{staticClass:"inline-divider heavy hide-on-med-and-down"}),t._v(" "),i("router-link",{staticClass:"grey-text text-darken-1",attrs:{exact:"",to:{name:"analyze",params:{plotType:t.plotTypes.SHARED_CONTROL.type}}}},[t._v(t._s(t.plotTypes.SHARED_CONTROL.name))])],1)])])])},staticRenderFns:[]};e.a=i},SzUt:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMTIuNnB4IiBoZWlnaHQ9Ijc3LjJweCIgdmlld0JveD0iMTkwLjYgMzgyLjIgMjEyLjYgNzcuMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAxOTAuNiAzODIuMiAyMTIuNiA3Ny4yIgoJIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGlkPSJtYTQzOTg5M2ZmNF8yXyIgZmlsbD0iI0IxREZGOSIgZD0iTTQwMy4yLDQ1MS41djAuNGgtMi4xSDM5OWgtMi4xaC0yLjJoLTIuMWgtMi4xaC0yLjFoLTIuMWgtMi4xaC0yLjJoLTIuMWgtMi4xaC0yLjIKCQloLTIuMUgzNzFoLTIuMWgtMi4xaC0yLjJoLTIuMWgtMi4yaC0yLjFIMzU2aC0yLjFoLTIuMWgtMi4xaC0yLjFoLTIuMmgtMi4xSDM0MWgtMi4yaC0yLjJoLTIuMWgtMi4xaC0yLjFoLTIuMWgtMi4xaC0yLjJoLTIuMQoJCWgtMi4xaC0yLjFoLTIuMkgzMTNoLTIuMWgtMi4yaC0yLjFoLTIuMWgtMi4yaC0yLjFIMjk4aC0yLjFoLTIuMmgtMi4xaC0yLjFoLTIuMmgtMi4ySDI4M2gtMi4xaC0yLjFoLTIuMWgtMi4yaC0yLjFoLTIuMUgyNjhoLTIuMgoJCWgtMi4xaC0yLjFoLTIuMWgtMi4xaC0yLjJoLTIuMWgtMi4yaC0yLjFoLTIuMWgtMi4yaC0yLjFIMjQwaC0yLjFoLTIuMmgtMi4xaC0yLjFoLTIuMmgtMi4xSDIyNWgtMi4xaC0yLjFoLTIuMWgtMi4xaC0yLjJoLTIuMQoJCUgyMTBoLTIuMWgtMi4yaC0yLjFoLTIuMWgtMi4xaC0yLjFoLTIuMmgtMi4xaC0yLjF2LTAuMmwwLDBsMi4xLDBoMi4xbDIuMiwwbDIuMSwwbDIuMS0wLjFsMi4xLTAuMWwyLjEtMC4xbDIuMi0wLjFsMi4xLTAuMgoJCWwyLjEtMC4xbDIuMS0wLjJsMi4yLTAuMmwyLjEtMC4ybDIuMS0wLjJsMi4xLTAuM2wyLjEtMC40bDIuMi0wLjVsMi4xLTAuNmwyLjItMC44bDIuMS0wLjlsMi4xLTEuMWwyLjItMS4ybDIuMS0xLjNsMi4xLTEuNAoJCWwyLjEtMS41bDIuMi0xLjdsMi4xLTEuOWwyLjEtMmwyLjItMi4xbDIuMS0yLjFsMi4yLTIuMmwyLjEtMi40bDIuMS0yLjdsMi4xLTNsMi4xLTMuMWwyLjItM2wyLjEtMi43bDIuMS0yLjRsMi4xLTIuMWwyLjItMS45CgkJbDIuMS0xLjhsMi4xLTEuOGwyLjEtMS45bDIuMS0yLjJsMi4yLTIuNWwyLjItMi44bDIuMS0yLjlsMi4xLTIuN2wyLjItMi4ybDIuMS0xLjRsMi4xLTAuNmwyLjEsMC4zbDIuMiwwLjlsMi4xLDEuMmwyLjEsMS40CgkJbDIuMiwxLjRsMi4xLDEuNGwyLjEsMS42bDIuMiwxLjhsMi4xLDIuMmwyLjEsMi41bDIuMSwyLjdsMi4yLDNsMi4xLDMuMWwyLjEsMy4xbDIuMSwzLjFsMi4xLDNsMi4xLDIuOGwyLjIsMi42bDIuMiwyLjRsMi4xLDIuMwoJCWwyLjEsMi4ybDIuMiwyLjFsMi4xLDJsMi4xLDEuOWwyLjEsMS45bDIuMSwxLjhsMi4yLDEuOGwyLjEsMS43bDIuMiwxLjZsMi4xLDEuNGwyLjIsMS4zbDIuMSwxLjFsMi4xLDAuOWwyLjIsMC44bDIuMSwwLjZsMi4yLDAuNQoJCWwyLjEsMC40bDIuMSwwLjNsMi4yLDAuM2wyLjEsMC4zbDIuMSwwLjNsMi4xLDAuM2wyLjEsMC4zbDIuMSwwLjJsMi4yLDAuMmwyLjEsMC4ybDIuMSwwLjFMNDAzLjIsNDUxLjV6Ii8+CgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxLjQxNzMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSIKCQlNMzYyLjcsNDUxLjlIMjQ0LjIiLz4KCTxwYXRoIGlkPSJtZmYzYjM0ZGUwMV81XyIgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEuNDE3MyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMzA5LjQsNDUxLjkKCQljMC0xLjgtMC43LTMuNi0yLTQuOGMtMS4zLTEuMy0zLTItNC44LTJjLTEuOCwwLTMuNSwwLjctNC44LDJjLTEuMywxLjMtMiwzLTIsNC44YzAsMS44LDAuNywzLjYsMiw0LjhjMS4zLDEuMywzLDIsNC44LDIKCQljMS44LDAsMy41LTAuNyw0LjgtMkMzMDguNiw0NTUuNCwzMDkuNCw0NTMuNywzMDkuNCw0NTEuOXoiLz4KPC9nPgo8L3N2Zz4K"},TO3r:function(t,e,a){"use strict";var i={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._v("\n\tTo compare two or more paired experiments, you can use a multi paired plot.\n\t"),i("br"),t._v(" "),i("img",{staticStyle:{margin:"20px 0px"},attrs:{src:a("EmVl"),align:"centre",height:"400px"}}),t._v(" "),i("br"),i("br"),t._v("\n\tA multi paired plot tiles 2 more more paired plots, allowing for comparison of several paired experiments side by side.\n\t"),i("br"),i("br"),t._v("\n\tThe paired mean differences are plotted below the observed values axes in new delta axes. This allows the direct visual comparison of multiple mean differences (‘deltas’).\n\t"),i("br"),i("br"),t._v(" "),i("router-link",{attrs:{to:{name:"analyze",params:{plotType:t.plotTypes.MULTI_PAIRED.type}}}},[t._v("\n\t\tBack to "+t._s(t.plotTypes.MULTI_PAIRED.name)+" analysis\n\t")])],1)},staticRenderFns:[]};e.a=i},UCde:function(t,e,a){"use strict";var i=a("M4fF"),s=a.n(i),n=a("FN8c"),r=a("sDzw"),o=a("epYT"),l=a("3YtA"),u=a("oWkA"),c=a("h9h3");e.a={data:function(){return{}},metaInfo:function(){return{title:this.title}},props:{plotType:{type:String,default:n.e.UNPAIRED.type}},computed:{title:function(){var t=this,e=s.a.find(s.a.values(n.e),function(e){return e.type===t.plotType});return""+(e?e.name:"")},userGuide:function(){return this.plotType===n.e.UNPAIRED.type?"TwoIndependentGroups":this.plotType===n.e.PAIRED.type?"Paired":this.plotType===n.e.MULTI.type?"MultipleGroups":this.plotType===n.e.MULTI_PAIRED.type?"MultiPaired":this.plotType===n.e.SHARED_CONTROL.type?"SharedControl":void 0}},methods:{},components:{TwoIndependentGroups:r.a,Paired:o.a,MultipleGroups:l.a,MultiPaired:u.a,SharedControl:c.a}}},VNuk:function(t,e,a){"use strict";var i=a("cEAn"),s=a("1v2+"),n=a("VU/8")(i.a,s.a,!1,null,null,null);e.a=n.exports},W2g5:function(t,e,a){"use strict";var i=a("pPub"),s=a("NpNT"),n=a("VU/8")(i.a,s.a,!1,null,null,null);e.a=n.exports},WK6i:function(t,e,a){t.exports=a.p+"static/img/bars-stars-estplot.adaed38.svg"},YBe0:function(t,e,a){"use strict";var i={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._v("\n\tOne of the most fundamental experimental designs is to compare a control group with an independent group that has been subjected to some intervention. This design is called two independent group. Conventionally, these kind of data were analyzed with Student’s t-test, the main outcome being a binary test result (statistically significant or statistically non-significant).\n\t"),i("br"),t._v(" "),i("br"),t._v(" "),i("img",{staticStyle:{margin:"0px 20px"},attrs:{src:a("A+Ec"),align:"left",height:"500px"}}),t._v("\n\tTo replace this outmoded method, estimation uses a graphical tool to show the experimental intervention’s effect size. This t-test counterpart was first described by Gardner and Altman in 1986, so we call this the Gardner-Altman two-groups mean-difference plot, or m-diff plot for short. This plot places the mean-difference information on a new axis to the right of the observed-values axis.\n\t"),i("br"),i("br"),t._v(" "),i("router-link",{attrs:{to:{name:"analyze",params:{plotType:t.plotTypes.UNPAIRED.type}}}},[t._v("\n\t\tBack to "+t._s(t.plotTypes.UNPAIRED.name)+" analysis\n\t")])],1)},staticRenderFns:[]};e.a=i},YXhs:function(t,e,a){"use strict";var i={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._v("\n\tTo compare two or more similar experiments, it is often convenient to place a number of two-groups results into a single arrangement. In this plot, the mean difference can no longer be placed to the right.\n\t"),i("br"),t._v(" "),i("img",{staticStyle:{margin:"20px 0px"},attrs:{src:a("iR4R"),align:"centre",height:"400px"}}),t._v(" "),i("br"),t._v("\n\tInstead, the two or more mean differences are plotted below the observed values axes in new delta axes. This allows the direct visual comparison of multiple mean differences (‘deltas’).\n\t"),i("br"),i("br"),t._v(" "),i("router-link",{attrs:{to:{name:"analyze",params:{plotType:t.plotTypes.MULTI.type}}}},[t._v("\n\t\tBack to "+t._s(t.plotTypes.MULTI.name)+" analysis\n\t")])],1)},staticRenderFns:[]};e.a=i},YaEn:function(t,e,a){"use strict";var i=a("//Fk"),s=a.n(i),n=a("7+uW"),r=a("/ocq"),o=a("p3jY"),l=a.n(o),u=a("I2Tb"),c=a("Dwx7"),p=a("VNuk"),d=a("W2g5");n.a.use(r.a),n.a.use(l.a);var M=new r.a({linkActiveClass:"active",scrollBehavior:function(t,e,a){return new s.a(function(e,i){M.app.$root.$once("triggerScroll",function(){var i=function(){if(a)return a;var e={};return t.hash?(e.selector=t.hash,!!document.querySelector(t.hash)&&e):{x:0,y:0}}();e(i)})})},routes:[{path:"/",name:"home",component:u.a,meta:{noHeader:!0,breadcrumb:"Estimation stats"}},{path:"/background",name:"background",component:p.a,meta:{anchor:"",breadcrumb:"Intro"}},{path:"/user-guide/:plotType",name:"user-guide",component:c.a,props:!0,meta:{anchor:"",breadcrumb:"Intro"}},{path:"/about",name:"about",component:d.a,meta:{anchor:"",breadcrumb:"Find Out More"}},{path:"/analyze/:plotType",name:"analyze",component:function(){return a.e(0).then(a.bind(null,"qKdH"))},props:!0,meta:{anchor:"",breadcrumb:"Plot"}}]});e.a=M},cEAn:function(t,e,a){"use strict";e.a={metaInfo:function(){return{title:"Background"}}}},cKMn:function(t,e,a){"use strict";var i={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("img",{staticStyle:{margin:"20px 0px"},attrs:{src:a("kZa+"),align:"left",height:"500px"}}),t._v(" "),i("br"),t._v("\n\tSometimes it is possible and preferable to take measurements from a single group before and after an intervention: the paired observations design. Since the groups being compared comprise of observations from the same individuals, the estimation plot uses before-after lines instead of dots.\n\t"),i("br"),i("br"),t._v("\n\tThese lines are able to illustrate elegantly the presence of any trend between the two time-points, and are thus preferable than two bar graphs (or boxplots) that reduce both observations simply to their mean (or median).\n\t"),i("br"),i("br"),t._v(" "),i("router-link",{attrs:{to:{name:"analyze",params:{plotType:t.plotTypes.PAIRED.type}}}},[t._v("\n\t\tBack to "+t._s(t.plotTypes.PAIRED.name)+" analysis\n\t")])],1)},staticRenderFns:[]};e.a=i},eR78:function(t,e,a){"use strict";var i=a("FN8c");e.a={data:function(){return{plotTypes:i.e}}}},epYT:function(t,e,a){"use strict";var i=a("eR78"),s=a("cKMn"),n=a("VU/8")(i.a,s.a,!1,null,null,null);e.a=n.exports},h9h3:function(t,e,a){"use strict";var i=a("iUzk"),s=a("qwee"),n=a("VU/8")(i.a,s.a,!1,null,null,null);e.a=n.exports},iR4R:function(t,e,a){t.exports=a.p+"static/img/multi-two-group-unpaired-display.a3ac7ad.svg"},iUzk:function(t,e,a){"use strict";var i=a("FN8c");e.a={data:function(){return{plotTypes:i.e}}}},jDP6:function(t,e,a){"use strict";var i=a("FN8c");e.a={data:function(){return{plotTypes:i.e}}}},"kZa+":function(t,e,a){t.exports=a.p+"static/img/two-group-paired-display.7801d15.svg"},kkmO:function(t,e,a){"use strict";var i=a("FN8c");e.a={data:function(){return{plotTypes:i.e}}}},oWkA:function(t,e,a){"use strict";var i=a("KnNf"),s=a("TO3r"),n=a("VU/8")(i.a,s.a,!1,null,null,null);e.a=n.exports},pPub:function(t,e,a){"use strict";e.a={metaInfo:function(){return{title:"About"}}}},qN3X:function(t,e,a){"use strict";var i=a("jDP6"),s=a("+HWC"),n=a("VU/8")(i.a,s.a,!1,null,null,null);e.a=n.exports},qwee:function(t,e,a){"use strict";var i={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._v("\n\tMany biological experiments are designed around a single control group and its comparison with several intervention groups.\n\t"),i("br"),t._v(" "),i("img",{staticStyle:{margin:"20px 0px"},attrs:{src:a("4f9D"),align:"center",height:"500px"}}),t._v(" "),i("br"),t._v("\n\tThis plot calculates and plots the mean differences between a single control (the first column of your spreadsheet) and each of the intervention groups.\n\t"),i("br"),i("br"),t._v(" "),i("router-link",{attrs:{to:{name:"analyze",params:{plotType:t.plotTypes.SHARED_CONTROL.type}}}},[t._v("\n\t\tBack to "+t._s(t.plotTypes.SHARED_CONTROL.name)+" analysis\n\t")])],1)},staticRenderFns:[]};e.a=i},sDzw:function(t,e,a){"use strict";var i=a("BYyJ"),s=a("YBe0"),n=a("VU/8")(i.a,s.a,!1,null,null,null);e.a=n.exports},v6EA:function(t,e,a){"use strict";var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{attrs:{id:"app"}},[e("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut",mode:"out-in",duration:500}},[this.$route.meta.noHeader?this._e():e("header-view")],1),this._v(" "),e("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut",mode:"out-in",duration:500},on:{"after-enter":this.afterEnter}},[e("router-view",{key:this.$route.fullPath,staticClass:"main-content"})],1),this._v(" "),e("footer-view")],1)])},staticRenderFns:[]};e.a=i},xDdg:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDEuN3B4IiBoZWlnaHQ9IjEzOC4xcHgiIHZpZXdCb3g9IjAgMCAxNDEuNyAxMzguMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTQxLjcgMTM4LjEiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxwYXRoIGZpbGw9IiMxMTU2QTIiIGQ9Ik0yOS40LDE5LjJIMTcuOXY4aDEwLjN2My4zSDE3Ljl2OS4yaDExLjl2My4ySDE0LjFWMTZoMTUuM0wyOS40LDE5LjJMMjkuNCwxOS4yeiIvPgoJCTxwYXRoIGZpbGw9IiMxMTU2QTIiIGQ9Ik0zNy4zLDM3LjZjMS45LDEuNSw0LjMsMi42LDcuMywyLjZjMy42LDAsNC45LTEuOSw0LjktNC4xYzAtMi4yLTEuMy0zLjQtNC44LTUuNAoJCQljLTUuMy0zLjEtNy41LTQuNi03LjUtOC4zYzAtMy40LDIuNy03LjEsOC40LTcuMWMyLjksMCw1LjYsMS4xLDcuMSwyLjNsLTAuOSwzLjJjLTEuNy0xLjMtNC0yLjMtNi4yLTIuM2MtMy40LDAtNC44LDEuNC00LjgsMy41CgkJCWMwLDEuOCwxLjEsMi45LDUuNSw1LjNjNS4xLDIuNyw3LDUuMyw3LDguNWMwLDUuMS0zLjYsNy42LTguOCw3LjZjLTMuNywwLTYuOS0xLjMtOC4yLTIuNUwzNy4zLDM3LjZ6Ii8+CgkJPHBhdGggZmlsbD0iIzExNTZBMiIgZD0iTTcwLjYsMTkuMnYyMy43aC0zLjdWMTkuMmgtOC43VjE2aDIxLjJ2My4zSDcwLjZ6Ii8+CgkJPHBhdGggZmlsbD0iIzExNTZBMiIgZD0iTTkwLDQyLjloLTMuN1YxNkg5MFY0Mi45eiIvPgoJCTxwYXRoIGZpbGw9IiMxMTU2QTIiIGQ9Ik0xMjIuNCwyNS45bC04LjYsMTcuNGgtMC40bC04LjYtMTcuNGgtMC4zbC0yLjEsMTdoLTMuOGw0LTI3LjRoMC44bDEwLjIsMjAuNmgwLjJsMTAtMjAuNmgwLjhsNCwyNy40CgkJCWgtMy44bC0yLjEtMTdIMTIyLjR6Ii8+CgkJPHBhdGggZmlsbD0iIzExNTZBMiIgZD0iTTI5LjYsNzUuNUgxOC4ybC0yLjksN2gtNGwxMi4xLTI3LjdoMC44bDEyLjIsMjcuN2gtNEwyOS42LDc1LjV6IE0xOS42LDcyLjNoOC42TDI0LDYyLjNoLTAuM0wxOS42LDcyLjN6CgkJCSIvPgoJCTxwYXRoIGZpbGw9IiMxMTU2QTIiIGQ9Ik00OC40LDU4Ljh2MjMuN2gtMy43VjU4LjhoLTguN3YtMy4yaDIxLjJ2My4ySDQ4LjR6Ii8+CgkJPHBhdGggZmlsbD0iIzExNTZBMiIgZD0iTTY1LjgsODIuNWgtMy43VjU1LjZoMy43VjgyLjV6Ii8+CgkJPHBhdGggZmlsbD0iIzExNTZBMiIgZD0iTTg1LjQsODMuMWMtNy41LDAtMTMuNC01LjktMTMuNC0xMy45QzcyLDYwLjYsNzguNCw1NSw4NS40LDU1YzcuMSwwLDEzLjMsNS41LDEzLjMsMTQuMwoJCQlDOTguNyw3Ni44LDkzLjEsODMuMSw4NS40LDgzLjF6IE04NS4yLDU4LjRjLTQuOCwwLTkuMyw0LTkuMywxMC44YzAsNS40LDMuNiwxMC42LDkuNiwxMC42YzUuNiwwLDkuNC01LDkuNC0xMC42CgkJCUM5NC44LDYyLjgsOTAuNyw1OC40LDg1LjIsNTguNHoiLz4KCQk8cGF0aCBmaWxsPSIjMTE1NkEyIiBkPSJNMTI0LDc0LjloMC4zVjU1LjZoMy43djI3LjNoLTEuMmwtMTguMy0xOS43aC0wLjN2MTkuM2gtMy43VjU1LjJoMS4yTDEyNCw3NC45eiIvPgoJCTxwYXRoIGZpbGw9IiMxMTU2QTIiIGQ9Ik0xMy41LDExNi44YzEuOSwxLjUsNC4zLDIuNiw3LjMsMi42YzMuNiwwLDQuOS0xLjksNC45LTQuMWMwLTIuMi0xLjMtMy40LTQuOC01LjQKCQkJYy01LjMtMy4xLTcuNS00LjYtNy41LTguM2MwLTMuNCwyLjctNy4xLDguNC03LjFjMi45LDAsNS42LDEuMiw3LjEsMi4zbC0wLjksMy4yYy0xLjctMS4zLTQtMi4zLTYuMi0yLjNjLTMuNCwwLTQuOCwxLjQtNC44LDMuNQoJCQljMCwxLjgsMS4xLDIuOSw1LjUsNS4zYzUuMSwyLjcsNyw1LjMsNyw4LjVjMCw1LjEtMy42LDcuNi04LjgsNy42Yy0zLjcsMC02LjktMS4zLTguMi0yLjVMMTMuNSwxMTYuOHoiLz4KCQk8cGF0aCBmaWxsPSIjMTE1NkEyIiBkPSJNNDcsOTguNXYyMy43aC0zLjdWOTguNWgtOC43di0zLjJoMjEuMnYzLjJINDd6Ii8+CgkJPHBhdGggZmlsbD0iIzExNTZBMiIgZD0iTTc1LjUsMTE1LjJINjQuMmwtMi45LDdoLTRsMTIuMS0yNy43aDAuOGwxMi4yLDI3LjdoLTRMNzUuNSwxMTUuMnogTTY1LjUsMTExLjloOC42TDcwLDEwMmgtMC4zCgkJCUw2NS41LDExMS45eiIvPgoJCTxwYXRoIGZpbGw9IiMxMTU2QTIiIGQ9Ik05Ni41LDk4LjV2MjMuN2gtMy43Vjk4LjVoLTguN3YtMy4yaDIxLjJ2My4ySDk2LjV6Ii8+CgkJPHBhdGggZmlsbD0iIzExNTZBMiIgZD0iTTExMS40LDExNi44YzEuOSwxLjUsNC4zLDIuNiw3LjMsMi42YzMuNiwwLDQuOS0xLjksNC45LTQuMWMwLTIuMi0xLjMtMy40LTQuOC01LjQKCQkJYy01LjMtMy4xLTcuNS00LjYtNy41LTguM2MwLTMuNCwyLjctNy4xLDguNC03LjFjMi45LDAsNS42LDEuMiw3LjEsMi4zbC0wLjksMy4yYy0xLjctMS4zLTQtMi4zLTYuMi0yLjNjLTMuNCwwLTQuOCwxLjQtNC44LDMuNQoJCQljMCwxLjgsMS4xLDIuOSw1LjUsNS4zYzUuMSwyLjcsNyw1LjMsNyw4LjVjMCw1LjEtMy42LDcuNi04LjgsNy42Yy0zLjcsMC02LjktMS4zLTguMi0yLjVMMTExLjQsMTE2Ljh6Ii8+Cgk8L2c+CjwvZz4KPHBhdGggZmlsbD0iIzExNTZBMiIgZD0iTTAsMHYxMzguMWgxNDEuN1YwSDB6IE0xMzguMywxMzQuN0gzLjRWMy4zaDEzNC45VjEzNC43eiIvPgo8L3N2Zz4K"},xJD8:function(t,e,a){"use strict";var i=a("qN3X"),s=a("7tTb");e.a={name:"app",methods:{afterEnter:function(){this.$root.$emit("triggerScroll")}},components:{HeaderView:i.a,FooterView:s.a}}},xnyV:function(t,e){}},[0]);
//# sourceMappingURL=app.cb7a41d6434a5aef8f2a.js.map