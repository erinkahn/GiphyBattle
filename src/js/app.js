
//API Key : bhh0KO5k7BBVEyB1kfKqEHsZNozI68e5
const GIPHY_API_BASE = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=bhh0KO5k7BBVEyB1kfKqEHsZNozI68e5"; 

const router = new VueRouter({
	routes: [
		{ path: '', component: HomeComponent },
		{ path: '/selectGiphy', component: SelectGiphyComponent },
		{ path: '/vote', component: VoteComponent },
		{ path: '/winner', component: WinnerComponent },
	]
})


var app = new Vue({
	el: "#app",
	router: router,
	data: {
		searchTerm: "",
		giphys: [],
	},
	methods: {

	},
})


