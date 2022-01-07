const Player = require('./player')
const Swampert = require('./player')
const Monster = require('./monster')
const Gengar = require('./monster')


let playerArr = [["P",0,0,"M"],[0,"P","M",0],["M",0,"P",0],[0,"M",0,"P"]]
let monstersArr = [["M",0,0,"M"],[0,"M","M",0],["M",0,"M",0],[0,"M",0,"M"],[0,0,"M","M"]]
class Map {
  constructor (){
    
    this.board = []
    
  }
  
  genNewBoard(){
    return   this.board = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
  }

  battle(){
    let p = Math.floor(Math.random() * 16)
    let m1 = Math.floor(Math.random() * 16)
    let m2 = Math.floor(Math.random() * 16)
    let m3 = Math.floor(Math.random() * 16)
    let m4 = Math.floor(Math.random() * 16)
    let m5 = Math.floor(Math.random() * 16)
    let m6 = Math.floor(Math.random() * 16)

    const monster = new Monster();
    const player = new Player();
    
    if(p === m1){
      setTimeout(() => {console.log("\x1b[33m", "A wild Monster appeared!")}, 1000);
      setTimeout(() => {console.log(`Monster attack points: ${monster.attack}`)}, 2000);
      setTimeout(() => {console.log(`Player attack points: ${player.attack}`)}, 2500);
      if (monster.attack > player.attack){
        setTimeout(() => {console.log("\x1b[31m", "You lose!")}, 3000);

      } else {
        setTimeout(() => {console.log("\x1b[34m", "You win!")}, 3000);
      }


    }
    else if(p === m2){
      setTimeout(() => {console.log("\x1b[33m", "A wild Monster appeared!")}, 1000);
      setTimeout(() => {console.log(`Monster attack points: ${monster.attack}`)}, 2000);
      setTimeout(() => {console.log(`Player attack points: ${player.attack}`)}, 2500);
      if (monster.attack > player.attack){
        setTimeout(() => {console.log("\x1b[31m", "You lose!")}, 3000);

      } else {
        setTimeout(() => {console.log("\x1b[34m", "You win!")}, 3000);
      }
    }
    else if(p === m3){
      setTimeout(() => {console.log("\x1b[33m", "A wild Monster appeared!")}, 1000);
      setTimeout(() => {console.log(`Monster attack points: ${monster.attack}`)}, 2000);
      setTimeout(() => {console.log(`Player attack points: ${player.attack}`)}, 2500);
      if (monster.attack > player.attack){
        setTimeout(() => {console.log("\x1b[31m", "You lose!")}, 3000);

      } else {
        setTimeout(() => {console.log("\x1b[34m", "You win!")}, 3000);
      }
    }
    else if(p === m4){
      setTimeout(() => {console.log("\x1b[33m", "A wild Monster appeared!")}, 1000);
      setTimeout(() => {console.log(`Monster attack points: ${monster.attack}`)}, 2000);
      setTimeout(() => {console.log(`Player attack points: ${player.attack}`)}, 2500);
      if (monster.attack > player.attack){
        setTimeout(() => {console.log("\x1b[31m", "You lose!")}, 3000);

      } else {
        setTimeout(() => {console.log("\x1b[34m", "You win!")}, 3000);
      }
    }
    else if(p === m5){
      setTimeout(() => {console.log("\x1b[33m", "A wild Monster appeared!")}, 1000);
      setTimeout(() => {console.log(`Monster attack points: ${monster.attack}`)}, 2000);
      setTimeout(() => {console.log(`Player attack points: ${player.attack}`)}, 2500);
      if (monster.attack > player.attack){
        setTimeout(() => {console.log("\x1b[31m", "You lose!")}, 3000);

      } else {
        setTimeout(() => {console.log("\x1b[34m", "You win!")}, 3000);
      }
    }
    else if(p === m6){
      setTimeout(() => {console.log("\x1b[33m", "A wild Monster appeared!")}, 1000);
      setTimeout(() => {console.log(`Monster attack points: ${monster.attack}`)}, 2000);
      setTimeout(() => {console.log(`Player attack points: ${player.attack}`)}, 2500);
      if (monster.attack > player.attack){
        setTimeout(() => {console.log("\x1b[31m", "You lose!")}, 3000);

      } else {
        setTimeout(() => {console.log("\x1b[34m", "You win!")}, 3000);
      }
    } else {
      console.log(randomPlayer)
      console.log(randomMonster)
      console.log(randomMonster2)
      console.log(randomMonster3)
      setTimeout(() => {console.log("\x1b[36m", `Person location ${p}`)}, 5000);
      setTimeout(() => {console.log("\x1b[32m",`Monster 1 Location ${m1}`)}, 1000);
      setTimeout(() => {console.log("\x1b[32m",`Monster 2 Location ${m2}`)}, 1500);
      setTimeout(() => {console.log("\x1b[32m",`Monster 3 Location ${m3}`)}, 2000);
      setTimeout(() => {console.log("\x1b[32m",`Monster 4 Location ${m4}`)}, 2500);
      setTimeout(() => {console.log("\x1b[32m",`Monster 5 Location ${m5}`)}, 3000);
      setTimeout(() => {console.log("\x1b[32m",`Monster 6 Location ${m6}`)}, 3500);
      setTimeout(() => {console.log("\x1b[35m",`No Monsters in your path today!`)}, 6000);
    }
    
  }
  
  printBoard(){
    return  this.board.forEach(x => console.log(x))
  }
  
  splitBoard(){
    let nastyBoard = this.board.toString().split("")
    
   nastyBoard.forEach(x => {  
      
    if(x === "0" ) {
      console.log(x)
     }
    if(x === "P"){
      console.log("Player!")
    }
    if(x === "M"){
      console.log("Monster!")
    }
  })
    
     
  }

}

const randomArrP = Math.floor(Math.random() * playerArr.length) 
const randomPlayer = playerArr[randomArrP] 

const randomArrM = Math.floor(Math.random() * monstersArr.length) 
const randomMonster = monstersArr[randomArrM] 

const randomArrM2 = Math.floor(Math.random() * monstersArr.length) 
const randomMonster2 = monstersArr[randomArrM2] 

const randomArrM3 = Math.floor(Math.random() * monstersArr.length) 
const randomMonster3 = monstersArr[randomArrM3] 

const testMap = new Map();

// console.log(testMap.printBoard())
testMap.battle()





module.exports = Map 