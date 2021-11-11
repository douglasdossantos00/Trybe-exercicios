// *Exercicio 1, imprimir um quadrado de asterisco conforme valor n

/*  
for (i=0; i<number; i++){
    nLine += nAsterisk;
}
for(i=0; i<number; i++) {
    console.log(nLine)
} */


// *Exercicio 2, imprima um triângulo retângulo com n asteriscos de base.

/* const number = 5;
let nAsterisk = "*";
let nLine = "";
for (i=0; i<number; i++) {
    nLine += nAsterisk;
    console.log(nLine);
} */


// * Exercicio 3, Agora inverta o lado do triângulo

const number = 5;
let nAsterisk = "*";
let nLine = "";
let positonAsterisk = number;
for (i=0; i<number; i++) {
    for (i2=0; i2<=number; i2++){
        if(i2 < positonAsterisk){
            nLine = nLine + " ";
        }
        else {
            nLine = nLine + "*";
        }        
        
    }
    console.log(nLine);
    nLine = "";
    positonAsterisk-= 1;
}







