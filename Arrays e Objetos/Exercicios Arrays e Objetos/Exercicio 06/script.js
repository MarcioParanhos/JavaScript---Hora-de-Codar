let arrayOne = [1,2,3,4,5,6]
let arrayTwo = [1,2,3]

function verifyLength (array) {
    if(array.length > 5 ){
        console.log("Array muito longo")
    } else {
        console.log("Array curto")
    }
}

verifyLength(arrayOne)
verifyLength(arrayTwo)