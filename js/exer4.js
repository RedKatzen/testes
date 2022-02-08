num1 = 2
num2 = 11
num3 = 9

function verificadorPrimo(numero){
    var divisores = 0
    var x 

    for(var i = 1; i <= numero; i++){
        if(numero % i === 0){
            divisores++
        } 
    }
    
    if(divisores == 2){
        x = "O número é primo"
    } else {
        x = "O número não é primo"
    }

    return x
}

console.log(verificadorPrimo(num1))
console.log(verificadorPrimo(num2))
console.log(verificadorPrimo(num3))