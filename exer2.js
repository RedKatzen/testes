var num1 = [5, 1, 4, 2, 3]
var num2 = [20, 0, 10, 15, 78]
var num3 = [-6, 20, 45, 154, -500]

function ordenador(arr){
    arr.sort((a, b) => a - b) 

    return arr
}

console.log(ordenador(num1))
console.log(ordenador(num2))
console.log(ordenador(num3))








// function comparaNumeros(a,b) { if (a == b) return 0; if (a < b) return -1; if (a > b) return 1; }
// lista.sort(comparaNumeros)