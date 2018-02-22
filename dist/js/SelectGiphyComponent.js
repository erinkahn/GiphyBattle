"use strict";

//API Key : bhh0KO5k7BBVEyB1kfKqEHsZNozI68e5
// const GIPHY_API_BASE = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=bhh0KO5k7BBVEyB1kfKqEHsZNozI68e5"; 


var SelectGiphyComponent = Vue.component("select-giphy", {
	data: function data() {
		return {};
	},
	template: "\n\t\t<div class=\"submitGiphy\">\n\n\t\t\t<h1> Submit a Giphy </h1>\n\n\t\t\t<p> Choose the best giphy to match this subject: </p> \n\t\t\t<p v-if=\"status\" class=\"prompt\"> \"{{ status.question }}\" </p>\n\n\t\t\t<input type=\"text\" placeholder=\"search for a giphy\">\n\n\t\t\t<div class=\"back-and-submit\">\n\t\t\t\t<router-link to=\"/\" class=\"nav\"> < </router-link>\n\t\t\t\t<router-link to=\"/vote\" class=\"nav\"> Submit Giphy </router-link>\n\t\t\t</div>\n\n\n\t\t</div>\n\t",
	props: ['status']
});
//# sourceMappingURL=SelectGiphyComponent.js.map
