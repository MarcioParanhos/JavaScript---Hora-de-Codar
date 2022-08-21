function Cachorro(nome, raca, cor, idade) {
    this.nome = nome
    this.raca = raca
    this.cor = cor
    this.idade = idade
}

let husky = new Cachorro("Belinha", "Husky", "Wood", "6 Meses")
let marley = new Cachorro ("Marley", "Pé Duro", "Branco Encardido", "2 Anos")

console.log(marley.raca)
console.log(marley.cor)
console.log(marley.idade)

console.log(marley)
console.log(husky)