//API Key : bhh0KO5k7BBVEyB1kfKqEHsZNozI68e5
// const GIPHY_API_BASE = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=bhh0KO5k7BBVEyB1kfKqEHsZNozI68e5"; 



var SelectGiphyComponent = Vue.component("select-giphy", {
	data: function() {
		return {
			searchTerm: null,
			giphys: [],
			clickedAgiphy: false,
			chosenGiphyURL: "",
		}
	},
	template: `
		<div class="submitGiphy">

			<h1> Submit a Giphy </h1>

			<p> Choose the best giphy to match this subject: </p> 
			
			<p v-if="status" class="prompt"> "{{ status.question }}" </p>

			<input v-model="searchTerm" type="text" placeholder="search for a giphy">

			<ul class="giphys">
				<li v-for="giphy in giphys">
					<img @click="choseGif(giphy.images.original.url, $event)"  v-bind:src="giphy.images.original.url">
					<br><br>
				</li>
			</ul>

			<div class="back-and-submit">
				<router-link to="/" class="nav"> < </router-link>


				<button @click="submitButtonClicked" :disabled="!searchTerm || !clickedAgiphy">Submit</button>

				<!--<router-link :disabled="!searchTerm || !clickedAgiphy" to="/vote" class="nav"> Submit Giphy </router-link>-->
			</div>


		</div>
	`,
	watch: {
		searchTerm: function() {
			console.log("you entered a search term");

			//`axios`, `get` gifs from giphy based on the search term
			//and `then` when they come back, put the `response` data 
			//in my variable called `this.giphys`
			axios
				.get("http://api.giphy.com/v1/gifs/search?q=" + this.searchTerm + "&limit=10&offset=0&rating=G&lang=en" + "&api_key=bhh0KO5k7BBVEyB1kfKqEHsZNozI68e5")
				.then((response) => {
					console.log('you got gifs and here they are: ', response.data.data);
					this.giphys = response.data.data;
				}) 

		}
	},
	methods: {
		choseGif: function(giphyUrl, event) {
			console.log('clicked', giphyUrl);

			this.clickedAgiphy = true;
			this.chosenGiphyURL = giphyUrl;
			
			document.querySelectorAll(".active").forEach(function(activeGiphys) {
				activeGiphys.classList.remove("active")
			})

			event.target.classList.add("active")

			//event send up to app - chose a giphy	
			// this.$emit("choseagif", giphyUrl); //send url up to parent

		},

		submitButtonClicked: function() {
			console.log("submitButtonClicked")
			this.$emit("choseagif", this.chosenGiphyURL);
			this.$router.push("/vote")
		}
	},
	props: ['status'] //data coming down into this component
})





















