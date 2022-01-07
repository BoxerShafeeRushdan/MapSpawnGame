class Monster {
    constructor (name,hp,attack) {
        this.name = name
        this.hp = hp
        this.attack = Math.floor(Math.random() * 200)
    }

}
class Gengar extends Monster {
    constructor (name,hp,attack) {
        super(name,hp,attack)
        this.name = "Gengar"
        this.hp = 153
        this.attack = Math.floor(Math.random() * 200)
    }
}


module.exports = Monster

module.exports = Gengar