//função para encontrar valores distintos
function Solution(array) {
    let tot2 = 0
    for (i in array) {
        let tot = 0
        for (c in array) {
            if (array[i] == array[c])
                tot += 1
        }
        if (tot == 1) {
            tot2 += 1
        }
        else {
            delete array[i]
        }
    }
    return tot2;
}


//tamanho do array desejado
let tamanho = 5
let array = []


//geração de números aleatórios de 1 à 1000000
while (array.length < tamanho) {
    let n = Math.random().toFixed(6) * 1000000
    array.push(n)
}


//solução
console.log(Solution(array))



