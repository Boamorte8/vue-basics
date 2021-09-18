const app = Vue.createApp({
  data() {
    return {
      goals: [],
      newGoal: '',
    };
  },
  methods: {
    addGoal() {
      if (this.newGoal !== '') {
        this.goals.push(this.newGoal);
        this.newGoal = '';
      }
    },
    removeGoal(index) {
      console.log(index);
      this.goals.splice(index, 1);
    }
  },
});

app.mount('#user-goals');
