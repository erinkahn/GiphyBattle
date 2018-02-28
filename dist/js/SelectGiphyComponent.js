"use strict";

//API Key : bhh0KO5k7BBVEyB1kfKqEHsZNozI68e5
// const GIPHY_API_BASE = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=bhh0KO5k7BBVEyB1kfKqEHsZNozI68e5"; 


var SelectGiphyComponent = Vue.component("select-giphy", {
	data: function data() {
		return {
			searchTerm: null,
			giphys: []
		};
	},
	template: "\n\t\t<div class=\"submitGiphy\">\n\n\t\t\t<h1> Submit a Giphy </h1>\n\n\t\t\t<p> Choose the best giphy to match this subject: </p> \n\t\t\t\n\t\t\t<p v-if=\"status\" class=\"prompt\"> \"{{ status.question }}\" </p>\n\n\t\t\t<input v-model=\"searchTerm\" type=\"text\" placeholder=\"search for a giphy\">\n\n\t\t\t<ul class=\"giphys\">\n\t\t\t\t<li v-for=\"giphy in giphys\">\n\t\t\t\t\t<a> <img v-bind:src=\"giphy.images.original.url\"></a>\n\t\t\t\t\t<br><br>\n\t\t\t\t</li>\n\t\t\t</ul>\n\n\t\t\t<div class=\"back-and-submit\">\n\t\t\t\t<router-link to=\"/\" class=\"nav\"> < </router-link>\n\n\t\t\t\t<router-link :disabled=\"!searchTerm\" to=\"/vote\" class=\"nav\"> Submit Giphy </router-link>\n\t\t\t</div>\n\n\n\t\t</div>\n\t",
	watch: {
		searchTerm: function searchTerm() {
			var _this = this;

			console.log("you entered a search term");

			//`axios`, `get` gifs from giphy based on the search term
			//and `then` when they come back, put the `response` data 
			//in my variable called `this.giphys`
			axios.get("http://api.giphy.com/v1/gifs/search?q=" + this.searchTerm + "&limit=10&offset=0&rating=G&lang=en" + "&api_key=bhh0KO5k7BBVEyB1kfKqEHsZNozI68e5").then(function (response) {
				console.log('you got gifs and here they are: ', response.data.data);
				_this.giphys = response.data.data;
			});
		}
	},
	props: ['status'] //data coming down into this component
});
//# sourceMappingURL=SelectGiphyComponent.js.map
