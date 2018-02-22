
const router = new VueRouter({
	routes: [
		{ path: '/', component: HomeComponent },
		{ path: '/selectGiphy', component: SelectGiphyComponent },
		{ path: '/vote', component: VoteComponent },
		{ path: '/winner', component: WinnerComponent },
	]
})


var app = new Vue({
	el: "#app",
	router: router,
	data: {
		status: null
	},
	created: function(){

		this.updateStatus();

		//set timer every 5 seconds to update status of game
		setInterval(this.updateStatus, 5000);

	},
	methods: {
		receivedUsername: function(usernameChanged) {
			this.username = usernameChanged;
			this.updateStatus();
		},
		receivedSubmission: function(giphySubmit) {
			//ajax post/submission
		},
		updateStatus: function() {
			console.log("updateStatus")
			axios
				.get('http://circuslabs.net:6432/status')
				.then((response) => {
					console.log('you got a response');
					this.status = response.data;
				})

		}
	}
})


