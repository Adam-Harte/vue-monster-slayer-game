new Vue ({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        playerTurn: true,
        startGame: false
    },
    methods: {
        endGame: function (playerWon) {
            if (playerWon) {
                alert("You won!");
            }
            else {
                alert("You lost!");
            }
            this.startGame = false;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.playerTurn = true;
        },
        attack: function () {
            if (this.playerTurn) {
                this.monsterHealth -= Math.floor(Math.random() * (20 - 1)) + 1;
                if (this.monsterHealth < 1) {
                    this.endGame(true);
                }
            }
            else {
                this.playerHealth -= Math.floor(Math.random() * (15 - 1)) + 1;
                if (this.playerHealth < 1) {
                    this.endGame(false);
                }
            }
            this.playerTurn = !this.playerTurn;
            this.monsterTurn();
        },
        specialAttack: function () {
            if (this.playerTurn) {
                this.monsterHealth -= Math.floor(Math.random() * (35 - 21)) + 21;
                if (this.monsterHealth < 1) {
                    this.endGame(true);
                }
            }
            else {
                this.playerHealth -= Math.floor(Math.random() * (30 - 16)) + 6;
                if (this.playerHealth < 1) {
                    this.endGame(false);
                }
            }
            this.playerTurn = !this.playerTurn;
            this.monsterTurn();
        },
        heal: function () {
            if (this.playerTurn) {
                this.playerHealth += Math.floor(Math.random() * (20 - 10)) + 10;
            }
            else {
                this.monsterHealth += Math.floor(Math.random() * (5 - 15)) + 15;
            }
            this.playerTurn = !this.playerTurn;
            this.monsterTurn();
        },
        monsterTurn: function () {
            if (!this.playerTurn) {
                var vm = this;
                setTimeout(function () {
                    vm.attack();
                }, 1000);
            }
            else {
                return;
            }
        }
    }
})