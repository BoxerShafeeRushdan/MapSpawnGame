const Player = require('./player')
const Swampert = require('./player')
const Monster = require('./monster')
const Gengar = require('./monster')


let playerArr = [["P",0,0,"M"],[0,"P","M",0],["M",0,"P",0],[0,0,0,"P"]]
let monstersArr = [["M",0,0,0],[0,"M",0,0],["M",0,0,0],[0,"M",0,"M"],[0,"M",0,0],[0,0,"M",0],[0,"M",0,0],[0,0,"M","M"]]
class Map {
  constructor (){
    
    this.board = []
    
  }
  
  genNewBoard(){
    return   this.board = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
  }

  genNewMAndP(){
    let p = Math.floor(Math.random() * 16)
    let m1 = Math.floor(Math.random() * 16)
    let m2 = Math.floor(Math.random() * 16)
    let m3 = Math.floor(Math.random() * 16)
    let m4 = Math.floor(Math.random() * 16)
    let m5 = Math.floor(Math.random() * 16)
    let m6 = Math.floor(Math.random() * 16)

    
    if(p === m1){
      console.log("\x1b[31m", "A wild Monster appeared! !")
    }
    if(p === m2){
      console.log("\x1b[31m", "A wild Monster appeared! 2")
    }
    if(p === m3){
      console.log("\x1b[31m", "A wild Monster appeared! 3")
    }
    if(p === m4){
      console.log("\x1b[31m", "A wild Monster appeared! 4")
    }
    if(p === m5){
      console.log("\x1b[31m", "A wild Monster appeared! 5")
    }
    if(p === m6){
      console.log("\x1b[31m", "A wild Monster appeared! 6")
    }
    
    console.log("\x1b[36m", `Person location ${p}`)
    
    console.log("\x1b[32m",`Monster Location ${m1,m2}`)
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
testMap.genNewBoard()
// console.log(testMap.printBoard())
console.log(testMap.genNewMAndP())


console.log(randomPlayer)
console.log(randomMonster)
console.log(randomMonster2)
console.log(randomMonster3)


module.exports = Map 