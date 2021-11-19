// exercicio 1 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let h1Body = document.createElement("h1");
h1Body.innerText = "Exercício 5.2 - JavaScript";
document.body.appendChild(h1Body);

// exercicio 2 Adicione a tag main com a classe main-content como filho da tag body ;
let mainBody = document.createElement("main");
mainBody.className = "main-content";
document.body.appendChild(mainBody);

//exercicio 3 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let sectionMain = document.createElement("section");
sectionMain.className = "center-content";
mainBody.appendChild (sectionMain);


// exercicio 4 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let pSection = document.createElement("p");
sectionMain.appendChild(pSection);

// exercicio 5 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let sectionLeft = document.createElement("section");
sectionLeft.className = 'left-content'
mainBody.appendChild(sectionLeft); 


// exercicio 6 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let sectionRight = document.createElement("section");
mainBody.appendChild(sectionRight);
sectionRight.className = 'right-content';  

// exercicio 7 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
let imageSectionLeft = document.createElement("img");
imageSectionLeft.className = "small-image"
imageSectionLeft.src = "https://picsum.photos/200"
sectionLeft.appendChild(imageSectionLeft)

// exercicio 8 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let listaSectionRight = document.createElement("ul");
listaSectionRight.innerText = "lista";  
listaSectionRight.className = "classeDalista";
sectionRight.appendChild(listaSectionRight);

let listaNumeros = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for(i = 0; i < listaNumeros.length; i += 1) {
    let numero = listaNumeros[i];
    let itensListaSectionRight = document.createElement('li');
    itensListaSectionRight.innerText = numero;
    listaSectionRight.appendChild(itensListaSectionRight)
}

// exercicio 9 Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

for(i = 1; i <=3 ; i += 1){
let h3Main = document.createElement("h3");
h3Main.innerHTML = 'Show ' + i;
sectionMain.appendChild(h3Main);
}

// segunda parte
// exercicio 1 Adicione a classe title na tag h1 criada;
const titulo = document.querySelector('h1');
titulo.className = 'title';

// exercicio 2 Adicione a classe description nas 3 tags h3 criadas;
const descricao = document.getElementsByTagName('h3');
for(i = 0; i <3 ; i += 1) {
    descricao[i].className = 'description'
}

// exercicio 3 Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
const rmSectionLeft = document.getElementsByClassName('left-content')[0];
mainBody.removeChild(rmSectionLeft); 

// exercicio 4 Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ; 
const cetralizaSectionRight = document.getElementsByClassName('right-content')[0];
sectionRight.style.marginRight = 'auto';

// exercicio 5 Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
const backgroundSection = document.getElementsByClassName("center-content")[0].parentNode;
backgroundSection.style.backgroundColor = 'green';

// exercicio 6 Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
listaSectionRight.lastElementChild.remove();
listaSectionRight.lastElementChild.remove()
