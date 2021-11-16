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
 

  //2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e,
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


/* let info = {
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
 */    

/* // Exercicio 6, faça um console.log no seguinte formato:
// "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + '"' +leitor.livrosFavoritos[0].titulo +'".'); */

  //Exercicio 7, Adicione um novo livro favorito na chave livrosFavoritos , que é um array 

  /* let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  leitor.livrosFavoritos.push ({titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editor: 'Rocco',});
    console.table(leitor.livrosFavoritos);

    // Exercicio 8, Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato:

    console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos.");
 */


  

