var arrayNum1 = [1, 4, 3, 2, 5]
var arrayNum2 = [15, 0, 12, 5, 9]
var arrayNum3 = [50, 55, 45, 39, 99]

function buscaPorMenorMaior(arr){
    arr.sort((a, b) => a - b)
    
    return "Menor: " + arr[0] + "\nMaior: " + arr[arr.length - 1] + "\n----------"
}

console.log(buscaPorMenorMaior(arrayNum1))
console.log(buscaPorMenorMaior(arrayNum2))
console.log(buscaPorMenorMaior(arrayNum3))