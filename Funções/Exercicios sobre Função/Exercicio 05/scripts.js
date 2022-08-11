let myName = prompt("Informe seu nome Jovem Padawan!")
let age = prompt("Informe sua idade Jovem Padawan!")

console.log(confirmAge(myName, age))

function confirmAge (name, age) {

    let myAge =  parseInt(age)

    if (myAge >= 18) {
        console.log(`Olá ${name}, Você tem ${age} Anos, portanto você esta autoriado para entrar na Auto Escola`)
    } else {
        console.log(`Olá ${name}, Você tem ${age} Anos, portanto você não esta autoriado para entrar na Auto Escola`)
    }
}