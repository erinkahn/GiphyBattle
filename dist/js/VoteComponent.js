"use strict";

var VoteComponent = Vue.component("vote", {
	data: function data() {
		return {};
	},
	template: "\n\t\t<div class=\"vote\">\n\n\t\t\t<h1>Cast Your Vote</h1>\n\t\t\t<p>Vote for the best giphy that matches this subject: </p>\n\t\t\t<p> {{ status.question }} </p>\n\n\t\t\t<p> {{ status.submissions.length }} Submissions </p>\n\n\t\t\t<ul class=\"votes\">\n\t\t\t\t<li v-for=\"submission in status.submissions\">\n\t\t\t\t\t<img :src=\"submission.giphyURL\">\n\t\t\t\t\t{{submission.username}} {{submission.upvotes.length}} votes\n\t\t\t\t</li>\n\t\t\t</ul>\n\n\t\t\t<div class=\"back-and-submit\">\n\t\t\t\t<router-link to=\"/selectGiphy\" class=\"nav\"> < </router-link>\n\t\t\t\t<router-link to=\"/winner\" class=\"nav\"> Vote </router-link>\n\t\t\t</div>\n\n\t\t</div>\n\t",
	props: ['status']
});
//# sourceMappingURL=VoteComponent.js.map
