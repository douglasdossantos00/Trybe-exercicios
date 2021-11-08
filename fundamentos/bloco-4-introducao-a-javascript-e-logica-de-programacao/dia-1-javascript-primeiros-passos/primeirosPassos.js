// *exercicio 1

const a = 6;
const b = 7;
console.log("Adição = ", a + b);
console.log("Subtração= ", a - b);
console.log("multiplicação= ", a * b);
console.log("Divisão= ", a / b);
console.log("Módulo = ", a % b);

// *exercicio 2

const c = 6;
const d = 7;
if(c>d){
    console.log(c)
}
else {
    console.log(d)
}

// *exercicio 3

const e = 6;
const f = 7;
const g = 8;
if(e>f && e>g){
    console.log(e)
}
else if(f>e && f>g) {
    console.log(f)
}
else {
    console.log(g)
}

// * exercicio 4

const a4 = 8;
if(a4>0){
  console.log("positive");
}
else if(a4<0) {
    console.log("negative");
}
else {
    console.log("zero")
}

// *exercicio 5

const a5 = 20;
const b5 = 60;
const c5 = 90;
let comparacao = a5+b5+c5 == 180
if (a5 < 0 || b5 < 0 || c5 <0){
    console.log ("erro")
}
else{
    console.log ("os ângulos representam um triângulo = ", comparacao)
}

// *exercicio 6

const a6 = "Bispo";
const lowera6 = a6.toLowerCase()
switch (lowera6) {
  case "rei":
        console.log("Movimenta para qualquer direção");
        break;
    case "rainha":
        console.log("Movimenta para qualquer direção");
        break;
    case "bispo":
        console.log("Movimenta para diagonal");
        break;
    case "torre":
        console.log("Movimenta para horizontal ou vertical");
        break;
    case "cavalo":
        console.log("Movimenta em L");
        break;
    case "peão":
        console.log("Movimenta para frente ou na diagonal quando vai eliminar uma peça");
        break;
        default:
            console.log("não é uma pea de xadrez");
}

// * exercicio 7

const a7 = 30;
if (a7<0 || a7>100) {
    console.log("Valor não é válido");
}
    else if(a7>=90){
    console.log("A");
    }    
    else if(a7>=80) {
        console.log("B");
    }
    else if(a7>=70) {
        console.log("C");
    }
    else if(a7>=60) {
        console.log("D");
    }
    else if(a7>=50) {
        console.log("E");
    }
    else {
        console.log("F");
    }
    
// * exercicio 8

const a8 = 10;
const b8 = 11;
const c8 = 11;
let par = false ;
if(a8%2 == 0 || b8%2 == 0 || c8%2 == 0){
    par = true;
}
console.log("tem número par? =", par);

// * ecxercicio 9

const a9 = 11;
const b9 = 13;
const c9 = 11;
let impar = false ;
if(a9%2 == 0 || b9%2 == 0 || c9%2 == 0){
    impar = true;
}
console.log("todos os números são impar? =", impar);

// * exercicio 10

const a10 = 10;
const b10 = 50;
const custoProd = (a10 * 1.2);
const lucro = (b10 - custoProd)
if(a10<0 || b10<0){
    console.log("erro, valor menor que 0");
}
else {
    console.log(lucro * 1000);
}

// * exercicio 11

const salarioBruto = 1000;
let inss = 0;
let ir = 0;
let salarioIr;
let salarioLiquido;
if(salarioBruto <= 1556.94) {
    inss = (salarioBruto * 0.08);
    salarioIr = (salarioBruto - inss);
    }
    else if(salarioBruto >= 1556.95 & salarioBruto <= 2594.92){
        inss = (salarioBruto * 0.09);
        salarioIr = (salarioBruto - inss);
        }
    else if(salarioBruto >= 2594.93 & salarioBruto <= 5189.82) {
        inss = (salarioBruto * 0.11);
        salarioIr = (salarioBruto - inss);
        } 
    else {
        inss = (570.88);
        salarioIr = (salarioBruto - inss);
    }
    
if(salarioIr >= 1903.98 & salarioIr <= 2826.65) {
    ir = ((salarioIr * 0.075) - 142.80);
    salarioLiquido = (salarioIr - ir);      
}
else if(salarioIr >= 2826.66 & salarioIr <= 3751.05) {
    ir = ((salarioIr * 0.15) - 354.80);
    salarioLiquido = (salarioIr - ir);
}
else if(salarioIr >= 3751.06 & salarioIr <= 4664.68) {
    ir = ((salarioIr * 0.225) - 636.13);
    salarioLiquido = (salarioIr - ir);
} 
else if(salarioBruto >= 4664.68) {
    ir = ((salarioIr * 0.275) - 869.36);
    salarioLiquido = (salarioIr - ir);
}
else {
    salarioLiquido = (salarioIr - ir);
}
    

    
    

console.log("valor inss = ", inss);
console.log("valor do IR = ", ir);
console.log("valor do salário líquido =", salarioLiquido);



    







