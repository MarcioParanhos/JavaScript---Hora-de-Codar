let calculadora = {
    somar: function (num1, num2) {
        return num1 + num2
    },
    subtrair: function (num1, num2) {
        return num1 - num2
    },
    multiplicar: function (num1, num2) {
        return num1 * num2
    },
    dividir: function (num1, num2) {
        return num1 / num2
    }
}

console.log(calculadora.somar(250,2))
console.log(calculadora.subtrair(250,2))
console.log(calculadora.multiplicar(250,2))
console.log(calculadora.dividir(250,2))