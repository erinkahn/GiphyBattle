var HomeComponent = Vue.component("home", {
	template: `
		<div class="home">

			<h1><img src="dist/img/logo.png"></h1>

			<h2>How to play:</h2>

			<p>Watch the game screen to see the subject. Choose a Giphy to match the subject in the best way possible.</p>

			<p>Vote which Giphy(s) is/are the best. The Giphy with the most votes wins!</p>

			<input type="text" placeholder="type your name here">

			<router-link to="/selectGiphy" class="nav"> Let's Battle </router-link>

		</div>
	`,
})