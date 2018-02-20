var searchTerm;
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
		results: false,
		current_gif: false
	},
	methods: {
		getGiphys: function() {
			var self = this;
			axios.get(GIPHY_API_BASE, {
				params: {
					api_key: 'bhh0KO5k7BBVEyB1kfKqEHsZNozI68e5',
					 q: self.query.split(' ').join('+'),
                    limit: 50
				}
			})
			.then(function (response) {
                self.results = response.data.data;
                self.current_gif = false;
            })
            .catch(function (error) {
                console.log(error);
            });    
		},
		viewGIF: function (gif) {
            this.current_gif = gif.images.original.url;
        }
	}
})


