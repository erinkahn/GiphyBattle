"use strict";

var SelectGiphyComponent = Vue.component("selectGiphy", {
	data: function data() {
		return {};
	},
	template: "\n\t\t<div class=\"submitGiphy\">\n\n\t\t\t<h1> Submit a Giphy </h1>\n\n\t\t\t<p> Choose the best giphy to match this subject: </p> \n\t\t\t<p> {{ \"subject\" }} </p>\n\n\t\t\t<input type=\"text\" placeholder=\"search for a giphy\">\n\n\t\t\t<div class=\"back-and-submit\">\n\t\t\t\t<router-link to=\"/\" class=\"nav\"> < </router-link>\n\t\t\t\t<router-link to=\"/vote\" class=\"nav\"> Submit Giphy </router-link>\n\t\t\t</div>\n\n\n\t\t</div>\n\t",
	props: []
});
//# sourceMappingURL=SelectGiphyComponent.js.map
