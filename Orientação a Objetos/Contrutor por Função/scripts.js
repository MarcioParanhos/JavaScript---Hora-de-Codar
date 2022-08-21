function criarCachorro(raca, cor, idade) {
    //Criar o objeto
    let cachorro = Object.create({})
    cachorro.raca = raca
    cachorro.cor = cor
    cachorro.idade = idade
    return cachorro
}

let doberman = criarCachorro("Doberman", "marrom", "3 Anos")
let marley = criarCachorro("Pé Duro", "Braco", "2 anos")

console.log(doberman.raca)
console.log(doberman.idade)
console.log(doberman.cor)
console.log(marley.raca)
console.log(marley.cor)
console.log(marley.idade)
console.log(marley)
console.log(doberman)