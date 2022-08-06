alert("Sistema para verificar se um numero e primou ou não")
let num = prompt("Informe um numero!")
let divider = 0

for(let i = 1; i <= num; i++) {

    if(num % i == 0 ){
        divider++
    }

}

if (divider == 2){
    alert("É um numero primo")
} else {
    alert("Não e primo")
}


