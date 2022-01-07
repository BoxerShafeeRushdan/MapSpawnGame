class Monster {
    constructor (name,hp,attack) {
        this.name = name
        this.hp = hp
        this.attack = attack 
    }

}
class Gengar extends Monster {
    constructor (name,hp,attack) {
        super(name,hp,attack)
        this.name = "Gengar"
        this.hp = 153
        this.attack = 180
    }
}


module.exports = Monster

module.exports = Gengar