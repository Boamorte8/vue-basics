const app = Vue.createApp({
	data() {
		return {
			goals: [
				'Learn Vue',
				'Learn Node',
				'Learn React',
			],
			courseGoalA: 'Learn Vue!',
			courseGoalB: '<h2>Master Vue!</h2>',
			vueLink: 'https://vuejs.org/',
		};
	},
	methods: {
		outputGoal() {
			const randomNumber = Math.random();
			if (randomNumber < .5) {
				return this.courseGoalA;
			} else {
				return this.courseGoalB;
			}
		}
	},
});

app.mount('#user-goal');