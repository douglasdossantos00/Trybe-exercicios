/* //exercicio administrador de tempo
document.getElementsByTagName('h1')[0].style.background= "rgb(0, 176, 105)";
document.querySelector(".emergency-tasks").style.background = "rgb(255, 159, 132)";
document.querySelector(".no-emergency-tasks").style.background = "rgb(249, 219, 94)"
document.querySelector("#footer-container").style.background = "rgb(0, 53, 51)"
const h3Emergency = document.querySelectorAll(".emergency-tasks h3");
for (i = 0; i < h3Emergency.lenght; i += 1){
    h3Emergency[i].style.background = "rgb(165, 0, 243)";
   
} */

//exercicio funções de manipulação do DOM

document.getElementsByTagName('p')[0].innerText = 'Espero que esteja na XP trabalhando como desenvolvedor'
document.getElementsByTagName("main")[0].style.background = 'rgb(76,164,109)';
document.getElementsByTagName("section")[0].style.background = 'white'
document.getElementsByTagName("h1")[0].innerText = "Exercício 5.1 - Javascript"
let paragrafos = document.getElementsByTagName("p");
for (let i = 0; i < paragrafos.length; i++) {
  let paragrafoMaiusculo = paragrafos[i];
  paragrafoMaiusculo.innerHTML = paragrafo.innerHTML.toUpperCase();
}
console.log(paragrafos);