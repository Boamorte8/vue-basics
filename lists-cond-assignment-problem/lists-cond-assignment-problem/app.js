const app = Vue.createApp({
	data() {
		return {
			tasks: [],
			newTask: '',
			showTasks: true,
		};
	},
	computed: {
		buttonLabel() {
			return this.showTasks ? 'Hide' : 'Show';
		}
	},
	methods: {
		addTask() {
			if (this.newTask !== '') {
				this.tasks.push(this.newTask);
				this.newTask = '';
			}
		},
		removeTask(index) {
			this.tasks.splice(index, 1);
		},
		toggleList() {
			this.showTasks = !this.showTasks;
		},
	},
});

app.mount('#assignment');