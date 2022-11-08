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

    showIntro: function () {
        console.log("Earth has been attacked by a horde of aliens! You are the captain of the USS Assembly, on a mission to destroy every last alien ship.\n\nBattle the aliens as you try to destroy them with your lasers.\n\nThere are six alien ships. The aliens' weakness is that they are too logical and attack one at a time: they will wait to see the outcome of a battle before deploying another alien ship. Your strength is that you have the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order. After you have destroyed a ship, you have the option to make a hasty retreat.\n\n********** To begin this mission, enter the following command into the console: game.start() **********\n\nGood luck!!")
    },

    retreat: function () {
        console.log("Engage boosters!! You were able to safely evade from the enemies 🏃💨.\n You live to fight another day. Until next time...✌️")
    },

    chooseFightorRun: function () {
        alert('What would you like to do next??')
        const response = prompt(`Enter 'c' to Continue Battle or 'r' to Retreat.`)
        if (response.toLowerCase() === 'r') {
            console.log('Engage boosters!! RETREAT!! RETREAT!! RETREAT!!\n\nYou have safely evaded the enemies')
            alert('You have failed the mission!')
            alert('You are dead to us!')
            alert('Telecommunication will self destruct in 3...2....1....💥')
            error
        } else if (response.toLowerCase() === 'c') {
            null
        } else {
            alert(`Please try again`)
            this.chooseFightorRun()
        }
    },

    checkIfHumanWonRound: function (currentEnemy) {
        if (currentEnemy < 1) {
            console.log("They didn't stand a chance. Alien ship has been destroyed!!")
            return true
        }
        return false
    },

    currentAlienTarget: function (alienArr) {
        return alienArr[alienArr.length - 1]
    },

    start: function () {
        let player = new MainCharacter()
        let enemy = []
        for (let i = 0; i < 6; i++) {
            enemy.push(new Aliens('Alien Ship', Math.floor(Math.random() * (6 - 3) + 3), Math.floor(Math.random() * (4 - 2) + 2), Math.random() * (.8 - .6) + .6))
        }
        let winnerOfGame; //this is the main objective of the game - to determine the winner of the game
        while (winnerOfGame != 'Alien' || enemy.length != 0) {
            let currentEnemy = this.currentAlienTarget(enemy)

            if (enemy.length > 0 && enemy.length < 6) {

                console.log(`Here comes a new alien target 👽... It is showing a defense level of ${currentEnemy.hull}`);
            }
            winnerOfGame = this.playRound(player, currentEnemy)
            enemy.pop()
            console.log(`Status Update: You have ${player.hull} health remaining and there are ${enemy.length} enemy ships left to destroy!.`)
            this.chooseFightorRun()
            if (winnerOfGame == 'Alien') {
                return this.endGame(winnerOfGame)
            }
            if (enemy.length == 0) {
                return this.endGame(winnerOfGame)
            }
        }
    },

    playRound: function (player, alien) {
        let winnerOfRound;
        while (true) {
            let enemyLife = player.attack(alien)
            if (this.checkIfHumanWonRound(enemyLife)) {
                winnerOfRound = 'Player'
                return winnerOfRound
            }

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

game.showIntro()
