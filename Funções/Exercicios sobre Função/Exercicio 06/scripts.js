let data = true
let typeData = typeof(data)

function verifyData(data) {
    if (data === 'number'   ) {
        console.log("Esse dado e um Number")
    } else if (data === 'string'   ) {
        console.log("Esse dado e uma String ")
    } else {
        console.log("Esse dado e um Boolean ")
    }
}

verifyData(typeData)