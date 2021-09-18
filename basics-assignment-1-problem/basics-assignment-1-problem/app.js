const app = Vue.createApp({
	data() {
		return {
			user: {
				name: 'Esteban Salazar',
				age: 30
			},
			image: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Eurasian_wolf.JPG',
		}
	},
	methods: {
		getFavoriteNumber() {
			return Math.floor(Math.random());
		}
	},
});

app.mount('#assignment');
