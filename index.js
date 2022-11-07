//Human ship class
class MainCharacter {
    constructor() {
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = .7;
        this.attackShout = 'Hey Aliens, let me know how those lasers taste! Hahahah!';
    }

    attack(alienObj) {
        console.log("It's your turn to attack.\nAiming... aimingg.. FIRE!!!")
        if (Math.random() < this.accuracy) { ////Make it so the alien will only be hit if a Math.random call is below the accuracy threshold.
            console.log(`Awesome! You just hit the enemy with a ${this.firepower} damge attack. ${this.attackShout}`)
            alienObj.hull -= this.firepower
            console.log(`${alienObj.name} has ${alienObj.hull} health remaining.`)

        } else {
            console.log("Oh no! Where'd you learn how to shoot? You missed! 🚫🚫🚫")

        }
        return alienObj.hull
    }


}

const ussAssembly = new MainCharacter(20, 5, .7, 'Hey Aliens, let me know how those lasers taste! Hahahah!')

//Alien ship class
class Aliens {
    constructor(name, hull, firepower, accuracy) {
        this.name = name
        this.hull = hull //between 3-6
        this.firepower = firepower // between 2-4
        this.accuracy = accuracy //between .6-.8
    }

    attack(playerObj, alienObj) {
        console.log("It is the enemy's turn to attack. PREPARE DEFENSES!!")
        if (Math.random() < this.accuracy) {
            playerObj.hull -= alienObj.firepower
            console.log(`Yikes! ${alienObj.name} just hit you with a ${alienObj.firepower} damage attack. You have ${playerObj.hull} health remaining.`)

        } else {
            console.log("Way to dodge those attacks!! They missed!")
        }
        return playerObj.hull
    }
}



//Game object
let game = {

    retreatNow: function (playerObj) {
        let chacesofRetreat = Math.random()

        if (chacesofRetreat >= .7) {
            console.log('Damn! Time to retreat!')
            playerObj.hull = 20
        } else {
            console.log('Bring on the next one!!')
        }
        return

    },
    checkIfHumanWonRound: function (currentEnemy) {
        if (currentEnemy < 1) {
            console.log("They didn't stand a chance. Alien ship has been destroyed!!")
            return true
        }
        return false
    },

    checkIfThereareAliensLeft: function (enemy) {
        if (enemy.length < 1) {
            console.log('Congratulations, you win! You have defeated all of the enemy ships!!')
        } else {
            console.log('Prepare to battle a new alien ship!')
        }
    },

    // checkCurrentAliensHealth: function () {
    //     return enemyLife
    // },


    retreat: function () {
        console.log("That was close, but you were able to safely evade from the enemies 🏃💨. You live to fight another day! Until next time...✌️")
    },

    currentAlienTarget: function (alienArr) {
        return alienArr[alienArr.length - 1]
    },


    startGame: function () {
        let player = new MainCharacter()
        let enemy = []
        for (let i = 0; i < 6; i++) {
            enemy.push(new Aliens('Alien Ship', Math.floor(Math.random() * (6 - 3) + 3), Math.floor(Math.random() * (4 - 2) + 2), Math.random() * (.8 - .6) + .6))
        }
        let winnerOfGame; //this is the main objective of the game - to determine the winner of the game
        while (winnerOfGame != 'Alien' || enemy.length != 0) { //as long as 'Alien' has not won the game or there are at least 1 enemy remaining
            let currentEnemy = this.currentAlienTarget(enemy) //the current enemy target is established
            if (enemy.length > 0 && enemy.length < 6) {
                console.log(`Here comes a new alien target 👽... It is showing a defense level of ${currentEnemy.hull}`);
            }
            winnerOfGame = this.playRound(player, currentEnemy) // winner of the game will be either player or current enemy
            console.log(`Status Update: You have ${player.hull} health remaining and there are ${enemy.length} enemy ships left to destroy!.`)
            enemy.pop() //the last alien ship in the enemy array will be removed and a new alien ship will become the current enemy
            if (winnerOfGame == 'Alien') {
                return this.endGame(winnerOfGame)
            }
            if (enemy.length == 0) { //if there are no remaining alien ships in the enemy array,
                return this.endGame(winnerOfGame) //'The winner is Player' will be logged'
            }
            this.retreatNow(player)
        }
    },

    playRound: function (player, alien) {
        let winnerOfRound;
        while (true) {
            let enemyLife = player.attack(alien)
            if (this.checkIfHumanWonRound(enemyLife)) {
                winnerOfRound = 'Player'
                // this.checkIfThereareAliensLeft(alien)
                return winnerOfRound

            }
            // let playerLife = -4
            let playerLife = alien.attack(player, alien)

            if (playerLife < 1) {
                winnerOfRound = 'Alien'
                return winnerOfRound
            }
        }
    },

    endGame: function (winner) {
        if (winner == 'Player') {
            console.log('🙌🍾🥂🎉🙌🍾🥂🎉🙌🍾🥂🎉🙌🍾🥂🎉🙌🍾🥂🎉\nCongratulations, you win! You have defeated all of the enemy ships!!\n🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆')
        } else {
            console.log('Bummerrr.. your ship has been destroyed!! GAME OVER')
        }


    }
}
game.startGame()
