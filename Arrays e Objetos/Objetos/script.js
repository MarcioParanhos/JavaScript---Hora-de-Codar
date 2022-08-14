// let pessoa = {
//     nome: "Marcio Paranhos",
//     profissao: "Tecnico de RH de merda",
//     idade: 29,
//     cor: "Branco",
//     genero: "Masculino",
//     estadoCivil: "Solteiro"
// }

// //Acessa a informação do objeto com um "."
// console.log(pessoa.nome)
// console.log(pessoa.idade)
// console.log(pessoa.estadoCivil)

// let cachorro = {
//     nome: "Marley",
//     reça: "Pé Duro",
//     // função dentro do objeto
//     latir: function () {
//         console.log("Au Au")
//     },
//     cor: "Branco"
// }

// // Deletar um elemeto do Objeto
// delete cachorro.raça
// console.log(cachorro.raça)
// console.log(cachorro.nome)
// console.log(cachorro.cor)
// //Adicionar um elemento no objeto
// cachorro.raça = "PitBull"
// console.log(cachorro.raça)
// cachorro.latir()

//Copiar propriedades de um objeto
let obbjectOne = {
    nome: "Marcio",
    sobrenome: "Paranhos"
}

let objectTwo = {
    pets: ["Marley", "Piranha", "Miminho"]
}

Object.assign(obbjectOne, objectTwo)

console.log(obbjectOne)