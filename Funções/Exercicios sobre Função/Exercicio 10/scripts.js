let numDecrement = prompt("Informe um numero!")
num = parseInt(numDecrement)

function decrement (num) {
    for (let i = num; i > 0; i--) {
     console.log(i)
    }
}

decrement(num)