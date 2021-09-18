function getRandomValue(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
	data() {
		return {
			playerHealth: 100,
			monsterHealth: 100,
			currentRound: 0,
			resultGame: null,
			winner: null,
			logMessages: [],
		};
	},
	computed: {
		monsterBarStyles() {
			if (this.monsterHealth <= 0) {
				return { width: '0%' };
			}
			return { width: this.monsterHealth + '%' };
		},
		playerBarStyles() {
			if (this.playerHealth <= 0) {
				return { width: '0%' };
			}
			return { width: this.playerHealth + '%'	};
		},
		ableSpecialAttack() {
			return this.currentRound % 3 !== 0;
		}
	},
	watch: {
		playerHealth(value) {
			if (value <= 0 && this.monsterHealth < 0) {
				this.resultGame = 'It is a draw!';
				this.winner = 'draw';
			} else if (value <= 0) {
				this.resultGame = 'You lost!';
				this.winner = 'monster';
				
			}
		},
		monsterHealth(value) {
			if (value <= 0 && this.playerHealth < 0) {
				this.resultGame = 'It is a draw!';
				this.winner = 'draw';
			} else if (value <= 0) {
				this.resultGame = 'You won!';
				this.winner = 'player';
			}
		},
	},
	methods: {
		startGame() {
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.currentRound = 0;
			this.winner = null;
			this.resultGame = null;
			this.logMessages = [];
		},
		attackMonster() {
			this.currentRound++;
			const attackValue = getRandomValue(5, 12);
			this.monsterHealth -= attackValue;
			this.addLogMessage('player', 'attack', attackValue);
			this.attackPlayer();
			
		},
		attackPlayer() {
			const attackValue = getRandomValue(8, 15);
			this.playerHealth -= attackValue;
			this.addLogMessage('monster', 'attack', attackValue);
		},
		specialAttackMonster() {
			this.currentRound++;
			const attackValue = getRandomValue(10, 25);
			this.monsterHealth -= attackValue;
			this.addLogMessage('player', 'special-attack', attackValue);
			this.attackPlayer();
		},
		healPlayer() {
			this.currentRound++;
			const healValue = getRandomValue(9, 17);
			if (this.playerHealth + healValue > 100) {
				this.playerHealth = 100;
			} else {
				this.playerHealth += healValue;
			}
			this.addLogMessage('player', 'heal', healValue);
			this.attackPlayer();
		},
		surrender() {
			this.winner = 'monster';
			this.resultGame = 'You lost!';
		},
		addLogMessage(who, what, value) {
			this.logMessages.unshift({
				by: who,
				type: what,
				value,
			});
		},
	},
});

app.mount('#game');