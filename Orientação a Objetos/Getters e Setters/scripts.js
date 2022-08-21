class Cachorro {
    constructor(nome, raca, idade, cor, pelos) {
        this.nome = nome
        this.raca = raca
        this.idade = idade
        this.cor =  cor
        this.pelos = pelos
    }
    get verRaca() {
        return "A raça de " + this.nome + " é " + this.raca
    }
    set novaRaca(value) {
        this.raca = value
    }
}

let marley = new Cachorro ("Marley", "Pé Duro", "2 Anos", "Brannco Encardido", "Longos")

// Cahama o metodo ver raça criado na classe
console.log(marley.verRaca)
// Adiciona novo valor a raça
marley.novaRaca = "rasga Saco"
console.log(marley)