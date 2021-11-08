
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// * exercicio 1, percorrendo o array e imprimindo

 
/* for(let i=0; i < numbers.length; i++) {
    console.log(numbers [i])
} */

// *exercicio 2, somando todos valores e imprimindo

let resultado = 0;
for(let i=0; i < numbers.length; i++) {
    resultado *= numbers[i];
} 
console.log("resultado da soma =", resultado);


