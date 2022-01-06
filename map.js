let playerArr = [["P",0,0,0],[0,"P",0,0],[0,0,"P",0],[0,0,0,"P"]]
let monstersArr = [["M",0,0,0],[0,"M",0,0],["M",0,0,0],[0,"M",0,"M"],[0,"M",0,0],[0,0,"M",0],[0,"M",0,0],[0,0,"M","M"]]
class Map {
  constructor (){
    
    this.board = []
    
  }
  
  genNewBoard(){
    return   this.board = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
    
  }
  
  printBoard(){
    return  this.board.forEach(x => console.log(x))
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
  console.log(randomPlayer)
  console.log(randomMonster)
  console.log(randomMonster2)
  console.log(randomMonster3)


module.exports = Map 