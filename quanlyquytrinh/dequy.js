// function name(x) {
//     let a = 1
//     for (let i = x; i > 0; i--) {
//         a = a * i
//     }
//     return a
// }

// function giaithua(x) {
//     if (x == 1 ) {
//         return 1
//     }
//     return x + giaithua(x-1)
// }

function fibonacci(x){
    if(x<=1){
        return 1
    }
    return fibonacci(x-1)+fibonacci(x-2)
}
console.log(fibonacci(5))