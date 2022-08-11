// Estrutura de uma arrow Function
let consoleTeste = () => {

}

let consoleTeste2 = () => {
    console.log('Olá Mundo!')
}

consoleTeste2()

let somaMaluca = (num1, num2, num3) => {
    let result = num1 * (num2 / num3)
    return result
}

// dando o console.log na variavel passando os parametros
console.log(somaMaluca(25, 4 , 5))

// Arrow Function simplificada 
let raizQuadrada = n => n * n

console.log(raizQuadrada(58))

