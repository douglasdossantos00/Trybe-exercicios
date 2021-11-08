
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// * exercicio 1, percorrendo o array e imprimindo

/* for(let i=0; i < numbers.length; i++) {
    console.log(numbers [i])
} */


// *exercicio 2, somando todos valores e imprimindo

 /* let resultado = 0;
for(let i=0; i < numbers.length; i++) {
    resultado = resultado + numbers[i];
} 
console.log("resultado da soma =", resultado);
 */


// * exercicio 3, média aritimética e impressão

/* numeroDeitens = numbers.length;
resultado = 0;
for(let i=0; i < numbers.length; i++) {
    resultado += numbers[i]
}
console.log(" Média aritimética = ", (resultado/numeroDeitens));
 */


// *exercicio 4, verificando se é maior/menor que 20 e imprimindo

/*  numeroDeitens = numbers.length;
resultado = 0;

for(let i=0; i < numbers.length; i++) {
    resultado += numbers[i];
}
let mediaAritimetica = (resultado/numeroDeitens)
if(mediaAritimetica > 20){
    console.log("Valor maior que 20");
}    
    else{
        console.log("Valor menor que 20")
    }
 */


// *exercicio 5, descobrindo maior valor com for
let numero = 0;
for(let i=0; i < numbers.length; i++){
    if(numbers[i] > numero){
        numero=numbers[i]
    }
}
console.log(numero);







