//função para encontrar o valor sem par
function Solution(array, tamanho) {
    let result = array[0]
    for (let i = 1; i < tamanho; i++) {
        result = result ^ array[i]
    }
    return result;
}


//tamanho do array desejado
let tamanho = 9
let array = []


//geração de números aleatórios de 1 à 1000000
while(array.length < tamanho){
    let n = Math.random().toFixed(6)*1000000
    let npar = n
    array.push(n) 
    if (array.length < tamanho) {
        array.push(npar)
    }    
}

//solução
console.log(array)
console.log(Solution(array, tamanho));


