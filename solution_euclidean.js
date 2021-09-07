//solução

function solution(N , M){
    
    let x = N
    let y = M
    let resto = x % y
    while (resto !== 0){
        x = y
        y = resto
        resto = x % y
        }
    return N/y 
}

console.log(solution(10, 4))