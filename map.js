let playerArr = [["P",0,0,0],[0,"P",0,0],[0,0,"P",0],[0,0,0,"P"]]
let monstersArr = [["M",0,0,0],[0,"M",0,0],["M",0,0,0],[0,"M",0,"M"]]
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

  console.log(randomPlayer)
  console.log(randomMonster)
  console.log(randomMonster)
  console.log(randomMonster)


module.exports = Map 