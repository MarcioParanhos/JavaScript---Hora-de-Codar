function imprimirNoConsole () {
    console.log("Imprimindo no Console")
}

imprimirNoConsole()

function imprimindoComParametro (text){
    console.log(text)
}

imprimindoComParametro("Marcio Paranhos")

function imprimirSoma(num1, num2){
    let result = num1 + num2
    console.log(result)
}

imprimirSoma(5, 65)


// Declaração de função anonima
const soma = function (a, b){
    return a + b
}

console.log(soma(47, 8))

const somaLouca = function(a, b, c){
    return a+(b*c)/(a-c)+a*(c-a)
}

console.log(somaLouca(25, 5 ,14))