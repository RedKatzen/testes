var comprimento = 1
var unidadeEntrada = "quilometro"
var unidadeSaida = "polegada"

var comprimento2 = 10
var unidadeEntrada2 = "q"
var unidadeSaida2 = "pe"

function unidadeConversor(num, uniEntrada, uniSaida){
    let unidadeCorreta = true

    switch(uniEntrada){
        case "metro":
            if(uniSaida === "pe"){
                num *= 3.281
            } else if(uniSaida === "centimetro"){
                num *= 100
            } else if(uniSaida === "polegada"){
                num *= 39.37
            } else if(uniSaida === "milimetro"){
                num *= 1000
            } else if(uniSaida === "quilometro"){
                num /= 1000
            } else if(uniSaida === "milha"){
                num /= 1609
            }
            break;

        case "centimetro":
            if(uniSaida === "quilometro"){
                num /= 100000
            } else if(uniSaida === "metro"){
                num /= 100
            } else if(uniSaida === "milimetro"){
                num *= 10
            } else if(uniSaida === "milha"){
                num /= 160934
            } else if(uniSaida === "pe"){
                num /= 30.48
            } else if(uniSaida === "polegada"){
                num *= 2.54
            }
            break;

        case "milimetro":
            if(uniSaida === "quilometro"){
                num /= 1000000
            } else if(uniSaida === "metro"){
                num /= 1000
            } else if(uniSaida === "centimetro"){
                num /= 10
            } else if(uniSaida === "milha"){
                num /= 1.609
            } else if(uniSaida === "pe"){
                num /= 305
            } else if(uniSaida === "polegada"){
                num *= 25.4
            }
            break;
        
        case "milha":
            if(uniSaida === "quilometro"){
                num *= 1.609
            } else if(uniSaida === "metro"){
                num *=  1609
            } else if(uniSaida === "centimetro"){
                num *= 160934
            } else if(uniSaida === "milimetro"){
                num *= 1.609
            } else if(uniSaida === "pe"){
                num *= 5280
            } else if(uniSaida === "polegada"){
                num *= 63360
            }
            break;

        case "quilometro":
            if(uniSaida === "metro"){
                num *= 1000
            } else if(uniSaida === "centimetro"){
                num *=  100000
            } else if(uniSaida === "milimetro"){
                num *= 1000000
            } else if(uniSaida === "milha"){
                num /= 1.609
            } else if(uniSaida === "polegada"){
                num *= 39370
            } else if(uniSaida === "pe"){
                num *= 3281
            }
            break;
            
        case "pe":
            if(uniSaida === "quilometro"){
                num /= 3281
            } else if(uniSaida === "metro"){
                num /= 3.281
            } else if(uniSaida === "centimetro"){
                num /= 30.48
            } else if(uniSaida === "milimetro"){
                num /= 305
            } else if(uniSaida === "milha"){
                num /= 5280
            } else if(uniSaida === "polegada"){
                num *= 12
            }
            break;
            
        case "polegada":
            if(uniSaida === "quilometro"){
                num /= 39370
            } else if(uniSaida === "metro"){
                num /= 39.37
            } else if(uniSaida === "centimetro"){
                num *= 2.54
            } else if(uniSaida === "milimetro"){
                num *= 25.4
            } else if(uniSaida === "milha"){
                num /= 63360
            } else if(uniSaida === "pe"){
                num /= 12
            }
            break;

        default:
            unidadeCorreta = false
            console.log("Não existe esta unidade de medida\n")
            console.log("Estas são as unidades disponíveis:")
            console.log("--quilometro\n--metro\n--centimetro\n--milimetro\n--milha\n--pe\n--polegada")
            break;
    }
    if(unidadeCorreta == true){
        return num + " " + uniSaida
    } else {
        return "\nERROR"
    }
}

console.log(unidadeConversor(comprimento, unidadeEntrada, unidadeSaida))
console.log("----------------------------------------------------")
console.log(unidadeConversor(comprimento2, unidadeEntrada2, unidadeSaida2))