var palavra = "Animal"
var frase = "O dia está agradável"
var palindromo = "TENET"


function inversor(string) {
        let stringInvertida = string.split("").reverse().join("");

        if(stringInvertida == string){
            return "Palíndromo"
        } else {
            return stringInvertida
        }
}

console.log(inversor(palavra))
console.log(inversor(frase))
console.log(inversor(palindromo))