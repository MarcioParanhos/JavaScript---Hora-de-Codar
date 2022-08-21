class Cachorro {
    constructor(nome, raca, cor, idade, pelos) {
        this.nome = nome
        this.raca = raca
        this.cor = cor
        this.idade = idade
        this.pelos = pelos
    }
    latir() {
        console.log("Au Au Au Au ... Grrrrr .... Au Au Au")
    }
}

//Instancia que a classe cachorro sempre vai ter 4 patas
Cachorro.prototype.patas = 4
// Isso e importante tem que fixar 
// Cachorro.prototype.latir = function() {
//     console.log("Au Au Au Au ... Grrrrr .... Au Au Au")
// }

let marley = new Cachorro("Marley", "Pé Duro", "Brannco Encardido", "2 Anos", "Longos")

console.log(marley.nome)
console.log(marley.raca)
console.log(marley.cor)
console.log(marley.idade)
console.log(marley.pelos)
console.log(marley.patas)
marley.latir()