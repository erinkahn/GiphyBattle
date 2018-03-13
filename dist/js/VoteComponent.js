'use strict';

var VoteComponent = Vue.component("vote", {
	data: function data() {
		return {};
	},
	template: '\n\t\t<div class="vote">\n\n\t\t\t<h1>Cast Your Vote</h1>\n\t\t\t<p>Click to vote for the best giphy that matches this subject: </p>\n\t\t\t<p>Once you\'ve voted on your favorite giphy, wait until the winner is revealed. </p>\n\t\t\t<p> {{ status.question }} </p>\n\n\t\t\t<p> {{ status.submissions.length }} Submissions </p>\n\n\t\t\t<ul class="votes">\n\t\t\t\t<li v-for="(submission, index) in status.submissions">\n\t\t\t\t\t<img @click="userVoted(index)" :src="submission.giphyURL">\n\t\t\t\t\t{{submission.username}} {{submission.upvotes.length}} votes\n\t\t\t\t</li>\n\t\t\t</ul>\n\n\t\t\t<div class="back-and-submit">\n\t\t\t\t<router-link to="/selectGiphy" class="nav"> < </router-link>\n\t\t\t</div>\n\n\t\t</div>\n\t',
	methods: {
		userVoted: function userVoted(index) {
			console.log('user voted', index);
			// do ajax req for POST /upvote/0
			// url + index
			// send in username
			axios.post('http://circuslabs.net:6432/upvote/' + index, {
				username: this.username
			}).then(function (response) {
				console.log('hi server, upvote this');
			}).catch(function (error) {
				console.log('you got an error');
			});
		}

	},
	props: ['status']
});
//# sourceMappingURL=VoteComponent.js.map
