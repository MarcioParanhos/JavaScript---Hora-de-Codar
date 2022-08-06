let name = prompt ("Qual o nome do condutor do veiculo")
let age = prompt ("Qual sua idade condutor?")
let cnh = prompt ("O condutor possui CHN?")

if (age > 18 && cnh == "Não"){
    alert(`Olá ${name} o senhor possui mais de 18 anos e ainda não possui a CHN`)
} else if (age > 18 && cnh == "Sim"){
    alert(`Olá ${name} o senhor possui mais de 18 anos e possui CHN`)
} else {
    alert(`Olá ${name} o senhor não possui mais de 18 anos e não possui CHN`)
}