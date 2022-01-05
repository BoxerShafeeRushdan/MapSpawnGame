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

module.exports = Map 