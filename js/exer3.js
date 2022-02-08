var num1 = [5, 1, 4, 2, 3]
var num2 = [20, 0, 10, 15, 78]
var num3 = [-6, 20, 45, 154, -500]

function ordenadorMenorMaior(arr, ordem){
    let valor = Math.trunc(Math.random() * 100)
    if(valor % 2 === 0){
        ordem = 1
    } else {
        ordem = 2
    }

    switch (ordem){
        case 1:
            arr.sort((a, b) => {
                if(a > b)
                    return 1
                if(a < b)
                    return -1
                else
                    return 0
            })
            break;
        case 2:
            arr.sort((a, b) => {
                if(a < b)
                    return 1
                if(a > b)
                    return -1
                else
                    return 0
            })
        break;
        default:
            console.log("ERROR")
    }

    return arr
}

console.log(ordenadorMenorMaior(num1))
console.log(ordenadorMenorMaior(num2))
console.log(ordenadorMenorMaior(num3))