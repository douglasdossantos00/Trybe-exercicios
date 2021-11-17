// exercicio 1
let h1Body = document.createElement("h1");
h1Body.innerText = "Exercício 5.2 - JavaScript";
document.body.appendChild(h1Body);

// exercicio 2
let mainBody = document.createElement("main");
mainBody.className = "main-content";
document.body.appendChild(mainBody);

//exercicio 3
let sectionMain = document.createElement("section");
sectionMain.className = "center-content";
mainBody.appendChild (sectionMain);


// exercicio 4
let pSection = document.createElement("p");
sectionMain.appendChild(pSection);

// exercicio 5
let sectionLeft = document.createElement("section");
sectionMain.appendChild(sectionLeft);
sectionMain.className = "left-content";

// exercicio 6
let sectionRight = document.createElement("section");
sectionMain.appendChild(sectionRight);
sectionMain.className = 'right-content';

// exercicio 7
let imageSectionLeft = document.createElement("img");
imageSectionLeft.className = "small-image"
imageSectionLeft.src = "https://picsum.photos/200"
sectionLeft.appendChild(imageSectionLeft)




