const GIPHY_API_BASE = ""; 

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
		subject: "",
		giphys: [],
	},
	methods: {

	},
})