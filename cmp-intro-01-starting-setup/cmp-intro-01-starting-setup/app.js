const app = Vue.createApp({
	data() {
		return {
			contacts: [
				{
					id: 'manuel0',
					name: 'Manuel Lorenz',
					phone: '01234 5678 991',
					email: 'manuel@localhost.com',
				},
				{
					id: 'julie0',
					name: 'Julie Jones',
					phone: '09876 543 221',
					email: 'manuel@localhost.com',
				},
			],
		};
	},
});

app.component('user-contact', {
	props: ['contact'],
	template: `
		<li>
      <h2>{{ contact.name }}</h2>
      <button @click="toggleDetails">{{ labelButton }}</button>
      <ul v-if="showDetails">
        <li><strong>Phone:</strong> {{ contact.phone }}</li>
        <li><strong>Email:</strong> {{ contact.email }}</li>
      </ul>
    </li>
	`,
	data() {
		return {
			showDetails: false,
		};
	},
	computed: {
		labelButton() {
			return this.showDetails ? 'Hide Details' : 'Show Details';
		},
	},
	methods: {
		toggleDetails() {
			this.showDetails = !this.showDetails;
		},
	},
});

app.mount('#app');