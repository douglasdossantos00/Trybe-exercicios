/* 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, 
    incluindo seu nome. Valor esperado no console: */
//criar objeto
 /* let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  }; */

// imprimir boas vindas para nome da personagem
    //console.log("Seja bem vinda ", info.personagem)
 

/*  //2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e,
 //em seguida, imprima o objeto no console. Valor esperado no console:    
 
 let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  //inserir nova propriedade
  info["recorrente"]="Sim";
  //imprimir o objeto
console.log(info);
 */

/* // Exercicio 3, fazer for/in para mostar as chaves
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: "Sim",
  };
  // criando loop for /in
  for(let key in info){
      console.log(key);
  } */


/* // Exercicio 4, fazer for/in para mostrar os valores das chaves
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: "Sim",
  };
// criando loop for/in
  for(let key in info){
      console.log(info[key]);
  }
 */

//Exrecicio 5, criar um segundo objeto e com as condições.....e imprimir as consições do objeto juntas e amas recorrentes e as duas forem sim


let info = {
        personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
        recorrente: "Sim",
}
// criando objeto
let info2 = {
        personagem: 'Tio Patinhas',
        origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
        nota: "O último MacPatinhas",
        recorrente: "Sim",
};
for(let key in info){
    if(key == "recorrente" && info[key] == "Sim" && info2[key]=="Sim"){
    console.log("Ambos recorrentes")
    }
    else{
    console.log(info[key] + " e " + info2[key]);
    }
}
    




  

