function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  /* exercicio 1 
  O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. 
  Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days"
  Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
    Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
    Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
    Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

  */

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
function createDaysOfTheMonth(){
  const dayCalendar = document.querySelector('#days');
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let dayList = dezDaysList[i];
    let listDez = document.createElement('li');
    listDez.innerText = dayList;
    dayCalendar.appendChild(listDez);
    listDez.className = "day"
   
    if (dayList == 24  || dayList == 31 ){
      listDez.className = "day holiday";
    } else if (dayList == 4 || dayList == 11 || dayList == 18 || dayList == 25){
      listDez.className = "day friday";
    } else if (dayList == 25){
      listDez.className = "day friday holiday";
    }   
  }
}
createDaysOfTheMonth()

/* exercicio 2 
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
  Adicione a este botão a ID "btn-holiday" .
  Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/
function buttonHoliday (name) {
  let buttonContainer = document.querySelector(".buttons-container");
  let button = document.createElement('button');
  button.innerText = name;
  button.id = "btn-holiday"
  buttonContainer.appendChild(button)
}
buttonHoliday("Feriados")

/* Exercício 3:
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" 
 */
function changeColor(){ 
  let holidays = document.querySelectorAll(".holiday");
  let newColor = "red";
  let setColor = "rgb(238,238,238)";
  document.querySelector("#btn-holiday").addEventListener("click", function() {
    for (let i = 0; i < holidays.length; i += 1){
      if (holidays[i].style.backgroundColor === newColor){
        holidays[i].style.backgroundColor = setColor;
      } else{
        holidays[i].style.backgroundColor = newColor;
      }
    }
  })
}
changeColor()

/* Exercício 4:
Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
 */

function buttonFriday (name) {
  let buttonContainer = document.querySelector(".buttons-container");
  let button = document.createElement('button');
  button.innerText = name;
  button.id = "btn-friday"
  button.className = "buttons-container"
  buttonContainer.appendChild(button)
}
buttonFriday("Sexta-feira")

/* Exercício 5:
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
 */
function clickFriday(array){ 
  let buttonFriday = document.querySelectorAll(".friday");
  let newTxt = "Sextou BB";
  
  document.querySelector("#btn-friday").addEventListener("click", function() {
    for (let i = 0; i < buttonFriday.length; i += 1){
      if (buttonFriday[i].innerText !== newTxt){
        buttonFriday[i].innerText = newTxt;
      } else{
        buttonFriday[i].innerText = array[i];
      }
    }
  })
}
clickFriday([4, 11, 18, 25])

/* exrcicio 6:
 Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, 
  o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
 */
function mouseOver() {
  let getDay = document.querySelector('#days')
    console.log(getDay)
    getDay.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = "30px";
    event.target.style.fontWeight = '200';
  })
} 
mouseOver()

function mouseOut() {
  let getDay = document.querySelector('#days')
    console.log(getDay)
    getDay.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = "20px";
    event.target.style.fontWeight = '200';
  })
}
mouseOut()

/* Exercício 7:
Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro 
  a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" . */

function add

