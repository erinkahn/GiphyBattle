"use strict";

var WinnerComponent = Vue.component("winner", {
	data: function data() {
		return {};
	},
	template: "\n\t\t<div class=\"win\">\n\n\t\t\t<h1> Congrats, Name{{ winner }} </h1> \n\n\t\t\t<p> You are the winner!!! </p>\n\n\t\t\t<p> {{ \" \" }} </p>\n\n\t\t\t<router-link to=\"/\" class=\"nav\"> play again </router-link>\n\n\t\t\n\t\t</div>\n\t",
	props: ['status']
});
//# sourceMappingURL=WinnerComponent.js.map
