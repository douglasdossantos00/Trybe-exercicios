

//usando for

/* const students = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
  ];
  
  function verifyGrades() {
    for (let i = 0; i < students.length; i += 1) {
      const student = students[i];
      if (student.grade >= 60) {
        student.approved = 'Aprovado';
      } else {
        student.approved = 'Recuperação';
      }
    }
  }
  
  verifyGrades();
  
  console.log(students);
  // [
  //   { name: 'Maria', grade: 70, approved: 'Aprovado' },
  //   { name: 'José', grade: 56, approved: 'Recuperação' },
  //   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
  //   { name: 'Ana', grade: 81, approved: 'Aprovado' }
  // ] */

 /*  // mesmo caso, porem usando forEach
  const students = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
  ];
  
  function verifyGrades() {
    students.forEach((student, index) => {
      if (student.grade >= 60) {
        students[index].approved = 'Aprovado';
      } else {
        students[index].approved = 'Recuperação';
      }
    });
  }
  
  verifyGrades();
  
  console.log(students);
  // [
  //   { name: 'Maria', grade: 70, approved: 'Aprovado' },
  //   { name: 'José', grade: 56, approved: 'Recuperação' },
  //   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
  //   { name: 'Ana', grade: 81, approved: 'Aprovado' }
  // ] */


  /* //Queremos encontrar e imprimir no console o primeiro elemento de um array que satisfaça a uma determinada condição.
  // Pode ser, por exemplo, encontrar o primeiro número que seja divisível por 5 em uma lista de números.
  //Primeiro, usando for e if :
  const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
  let firstMultipleOf5;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 5 === 0) {
      firstMultipleOf5 = numbers[index];
      break;
    }
  }
  
  console.log(firstMultipleOf5); */

/*   //Agora, a mesma coisa usando Array.find :

  const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);

console.log(firstMultipleOf5);
// 50
 */


/* // usar o forEach , para realizar a tabuada do 2. 

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);
 */

//1 - Use o método forEach chamando a callback showEmailList para apresentar os emails
let emails = [];
const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    emails.push(`O email ${email} esta cadastrado em nosso banco de dados!`);
    
  };
  
  // Adicione seu código aqui
  emailListInData.forEach(showEmailList);
   
  console.log(emails.sort((a, b) => a > b));
   
