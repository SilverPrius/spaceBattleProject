//Create actors first (USS Assembly and Alien ships)
//A ship object (an actor) could therefore have an attack method (an action)
//A repeating action in the game is that these ships attack each other until one of them has been destroyed. This might necessitate a loop or multiple loops


class Ships {
    constructor(hull, firepower, accuracy, attackShout) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
        this.attackShout = attackShout;
    }

    

     attack() {
        if (Math.random() < this.accuracy) {
            console.log(`The enemy has been hit! ${this.attackShout}`)
            alienFleet[0].hull -= this.firepower
            console.log(`${alienFleet[0].name} has ${alienFleet[0].hull} health remaing.`)
        }else{
            console.log("Where'd you learn how to shoot? You missed!")
        }
    }
}
class MainCharacter extends Ships {
     USSA = new MainCharacter (20, 5, .7, 'Hey Aliens, let me know how those lasers taste! Hahahah!')
}

console.log(USSA)
// const ussAssembly = new MainCharacter(20, 5, .7, 'Hey Aliens, let me know how those lasers taste! Hahahah!')


class Aliens { 
    constructor(name, hull, firepower, accuracy) {
        this.name = name
        this.hull = hull //between 3-6
        this.firepower = firepower // between 2-4
        this.accuracy = accuracy //between .6-.8
    }

    attack() {
        if (Math.random() < this.accuracy) {
            ussAssembly.hull -= this.firepower
            console.log(`${alienFleet[0].name} hit us with a ${alienFleet[0].firepower} damage attack. We have ${ussAssembly.hull} health remaining.`)
            
        }else{
            console.log("They missed!")
        }
    }
}


const alienShip1 = new Aliens('Alien Ship #1', Math.floor(Math.random()*(6-3)+3), Math.floor(Math.random()*(4-2)+2), Math.random()*(.8-.6)+.6)
const alienShip2 = new Aliens('Alien Ship #2', Math.floor(Math.random()*(6-3)+3), Math.floor(Math.random()*(4-2)+2), Math.random()*(.8-.6)+.6)
const alienShip3 = new Aliens('Alien Ship #3', Math.floor(Math.random()*(6-3)+3), Math.floor(Math.random()*(4-2)+2), Math.random()*(.8-.6)+.6)
const alienShip4 = new Aliens('Alien Ship #4', Math.floor(Math.random()*(6-3)+3), Math.floor(Math.random()*(4-2)+2), Math.random()*(.8-.6)+.6)
const alienShip5 = new Aliens('Alien Ship #5', Math.floor(Math.random()*(6-3)+3), Math.floor(Math.random()*(4-2)+2), Math.random()*(.8-.6)+.6)
const alienShip6 = new Aliens('Alien Ship #6', Math.floor(Math.random()*(6-3)+3), Math.floor(Math.random()*(4-2)+2), Math.random()*(.8-.6)+.6)


let alienFleet = [alienShip1, alienShip2, alienShip3, alienShip4, alienShip5, alienShip6]
let alienCount = alienFleet.length




//start battle!!
const startBattle = () => {
    while (alienCount > 0 && ussAssembly.hull > 0) { //when there are alien ships left and we have health, attack the current alien ship 
        ussAssembly.attack(alienFleet[0])
            if (alienFleet[0].hull > 0 && alienCount > 0) { //if the current alien ship has health, it will attack us
                alienFleet[0].attack(ussAssembly) }      
       else if (alienFleet[0].hull < 1 && alienCount > 0){ //if the current alien ship has no health left, it is removed and replaced with a remaining ship
        alienFleet.shift()
        }else if (alienFleet[0].hull < 0 && alienCount < 0) { //if there are no enemy ships left, you win
            console.log("Congratulations, you win!! You've destroyed all of the enemy ships!!")
        }
       }      
    }

console.log(startBattle())
