let name = prompt("Informe seu nome")
let ageToEnter = prompt("Informe sua idade")

if (ageToEnter >= 18){
    alert(`Sua idade e ${ageToEnter} Anos, Então você poderá entrar.\n Seja Bem vindo! ${name}.`)
} else {
    alert(`${name}, você tem ${ageToEnter} Anos e infelizmente apenas maiores que 18 anos podem entrar`)
}