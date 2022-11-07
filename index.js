//Create actors first (USS Assembly and Alien ships)
//A ship object (an actor) could therefore have an attack method (an action)
//A repeating action in the game is that these ships attack each other until one of them has been destroyed. This might necessitate a loop or multiple loops

class MainCharacter {
    constructor() {
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = .7;
        this.attackShout = 'Hey Aliens, let me know how those lasers taste! Hahahah!';
    }

    // attack(alien) { //alien is a place holder
    //     if (checkAccuracy(this.accuracy)) {
    //         alien.hull = this.firepower
    //         console.log('I hit the enemy ship')
    //     }else{
    //         console.log('Damn, I missed!')
    //     }
    //     return alien.hull
    // }
    // checkAccuracy(accuracy) {
    //     let check = Math.random()
    //     if (check < accuracy) {
    //         return true
    //     }else{
    //         return false
    //     }
    // }
    attack(alienObj) {
        console.log("It's your turn to attack.\nAiming... aimingg.. FIRE!!!")
        if (Math.random() < this.accuracy) { ////Make it so the alien will only be hit if a Math.random call is below the accuracy threshold.
            console.log(`The enemy has been hit! ${this.attackShout}`)
            alienObj.hull -= this.firepower
            console.log(`${alienObj.name} has ${alienObj.hull} health remaing.`)

        } else {
            console.log("Oh no! Where'd you learn how to shoot? You missed! 🚫🚫🚫")

        }
        return alienObj.hull
    }


}

const ussAssembly = new MainCharacter(20, 5, .7, 'Hey Aliens, let me know how those lasers taste! Hahahah!')


class Aliens {
    constructor(name, hull, firepower, accuracy) {
        this.name = name
        this.hull = hull //between 3-6
        this.firepower = firepower // between 2-4
        this.accuracy = accuracy //between .6-.8
    }

    attack(playerObj, alienObj) {
        console.log("It is the enemy's turn to attack. PREPARE DEFENSES!!" )
        if (Math.random() < this.accuracy) {
            playerObj.hull -= this.firepower
            console.log(`${alienObj.name} hit us with a ${alienObj.firepower} damage attack. We have ${playerObj.hull} health remaining.`)

        } else {
            console.log("Way to dodge those attacks!! They missed!")
        }
        return playerObj.hull
    }
}


const alienShip1 = new Aliens('Alien Ship #1', Math.floor(Math.random() * (6 - 3) + 3), Math.floor(Math.random() * (4 - 2) + 2), Math.random() * (.8 - .6) + .6)
const alienShip2 = new Aliens('Alien Ship #2', Math.floor(Math.random() * (6 - 3) + 3), Math.floor(Math.random() * (4 - 2) + 2), Math.random() * (.8 - .6) + .6)
const alienShip3 = new Aliens('Alien Ship #3', Math.floor(Math.random() * (6 - 3) + 3), Math.floor(Math.random() * (4 - 2) + 2), Math.random() * (.8 - .6) + .6)
const alienShip4 = new Aliens('Alien Ship #4', Math.floor(Math.random() * (6 - 3) + 3), Math.floor(Math.random() * (4 - 2) + 2), Math.random() * (.8 - .6) + .6)
const alienShip5 = new Aliens('Alien Ship #5', Math.floor(Math.random() * (6 - 3) + 3), Math.floor(Math.random() * (4 - 2) + 2), Math.random() * (.8 - .6) + .6)
const alienShip6 = new Aliens('Alien Ship #6', Math.floor(Math.random() * (6 - 3) + 3), Math.floor(Math.random() * (4 - 2) + 2), Math.random() * (.8 - .6) + .6)


let alienFleet = [alienShip1, alienShip2, alienShip3, alienShip4, alienShip5, alienShip6]
let alienCount = alienFleet.length



// start battle!!
// const startBattle = () => {
//     while (alienCount > 0 && ussAssembly.hull > 0) { //when there are alien ships left and we have health, attack the current alien ship 
//         ussAssembly.attack(alienFleet[0])
//             if (alienFleet[0].hull > 0 && alienCount > 0) { //if the current alien ship has health, it will attack us
//                 alienFleet[0].attack(ussAssembly) }      
//        else if (alienFleet[0].hull < 1 && alienCount > 0){ //if the current alien ship has no health left, it is removed and replaced with a remaining ship
//         alienFleet.shift()
//         }else if (alienFleet[0].hull < 0 && alienCount < 0) { //if there are no enemy ships left, you win
//             console.log("Congratulations, you win!! You've destroyed all of the enemy ships!!")
//         }
//        }      
//     }

//Make a game object
let game = {
    //Make a method in the game object that will run a 'check win' for the health of the alien(s) and/or the USS Assembly. If the hull is 0 or less, display a message that the ship went kabloo-ey.
    checkIfHumanWonRound: function () {
        if (enemyLife < 1) {
            console.log("They didn't stand a chance! Alien ship has been destroyed")
        }
    },

    checkIfAlienWonRound: function () {
        if (player.hull < 1) {
            return true
        }
    },

    //check battle status
    checkStatus: function () {
        console.log(`Status Update: You have ${player.hull} health remaining.`)
        console.log(`Status Update: There are ${enemy.length} Alien ships remaining.`)
    },

    checkIfThereareAliensLeft: function () {
        if (enemy.length < 1 && playerLife > 0) {
            console.log('Congratulations, you win! You have defeated all of the enemy ships!!')
        } else {
            console.log('Prepare to battle a new alien ship!')
        }
    },

    checkCurrentAliensHealth: function () {
        return enemyLife
    },


    retreat: function () {
        console.log("That was close, but you were able to safely evade from the enemies 🏃💨. You live to fight another day! Until next time...✌️")
    },

    humanAttacks: function () {
        ussAssembly.attack(alienFleet[0])
    },

    alienAttacks: function () {
        alienFleet[0].attack(ussAssembly)
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
            winnerOfGame = this.playRound(player, currentEnemy) // winner of the game will be either player or current enemy
            if (winnerOfGame == 'Alien') { //if the winner of the game is 'Alien',
                return this.endGame(winnerOfGame) //'Ther winner is Alien will be logged'
            }
            enemy.pop() //the last alien ship in the enemy array will be removed and a new alien ship will become the current enemy
            // this.checkStatus
            console.log(`Status Update: You have ${player.hull} health remaining and there are ${enemy.length} enemy ships left to destroy!.`)
            if (enemy.length > 0)
            console.log('Here comes a new alien target 👽...')
            if (enemy.length == 0) { //if there are no remaining alien ships in the enemy array,
                return this.endGame(winnerOfGame) //'The winner is Player' will be logged'
            }
        }
    },

    playRound: function (player, alien) {
        let winnerOfRound;
        while (true) {
            let enemyLife = player.attack(alien)
            if (enemyLife <= 0) {
                console.log("Wow! They didn't stand a chance. You destroyed the alien ship!.")// this.checkIfHumanWonRound
                winnerOfRound = 'Player'
                this.checkIfThereareAliensLeft
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
        if (winner = 'Player') {
            console.log('🙌🍾🥂🎉🙌🍾🥂🎉🙌🍾🥂🎉🙌🍾🥂🎉🙌🍾🥂🎉\nCongratulations, you win! You have defeated all of the enemy ships!!\n🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆')
        } else {
            console.log('Bummerrr.. your alien ship has been destroyed!! GAME OVER')
        }


    }
}
game.startGame()


/*start round {
      attack sequence {While loop (no one has been destroyed) 
          {
              
              
              player attack function {
                  if false, enemu health remains the same
                  if true, subtract players firepower from enemie's health
                  if they attack, is enemy destroyed? (put a function here) return Winner
              }
          }
          enemy attacks {
              grab player's target
              alien attack function {
                  if false, player health remains the same
                  if true, subtract alien firepower from player's health
                  if they attack, is enemy destroyed? (put a function here) return winner
          }
          
              
          }
      }
      is any enemy destoyed?
        }        if player is destroyed = GAME OVER
              if alien is destroyed
              Are there anymore aliens in the array?
                  if there are, pick new target
                  restart fight sequence
                  else, game over*/