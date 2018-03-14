var WinnerComponent = Vue.component("winner", {
	data: function() {
		return {

		}
	},
	template: `
		<div class="win">

			<div v-if="status && status.submissions && status.submissions.length">

				<h1> Congrats, {{ status.submissions[0].username }} !!! </h1> 

				<p> You are the winner!!! </p>

				<p> <img :src="status.submissions[0].giphyURL"> </p>

				<router-link to="/" class="nav"> play again </router-link>
			</div>
		</div>
	`,
	watch: {
		status: function() {
			console.log("status changed")
			if (this.status.phase != 'post-game'){
				this.$router.push('/selectGiphy');
			}
		}
	},
	props: ['status']
});