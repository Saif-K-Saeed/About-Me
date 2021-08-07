'use strict';

window.addEventListener('scroll',function(){
  let header = document.querySelector('header');
  header.classList.toggle('sticky',window.scrollY > 0);
});
// let score = 0;
// let userName = prompt('Welcome to my page can you tell me your name');
// alert('Welcome again (' + userName + ') to my page I will ask you some questions about my self and you will answer by yes or no');


// // function ques1() {
// let myName = prompt('My name is saif?');
// if (myName.toLowerCase() === 'yes' || myName.toLowerCase() === 'y') {
//   alert('This is a good starting');
//   console.log('First question:Your answer is true');
//   score++;
// } else if (myName.toLowerCase() === 'no' || myName.toLowerCase() === 'n') {
//   alert('sorry this is not true');
//   console.log('First question:Your answer is false');
// }
// else {
//   alert('sorry you should answer by yes or no');
//   console.log('First question:You should pick yes or no');
// }
// // }
// // ques1();


// // function ques2() {
// let favSport = prompt('My favorite sport is football?');
// if (favSport.toLowerCase() === 'yes' || favSport.toLowerCase() === 'y') {
//   alert('sorry I do not like it');
//   console.log('Second question:Your answer is false');
// } else if (favSport.toLowerCase() === 'no' || favSport.toLowerCase() === 'n') {
//   alert('You are amazing keep on it');
//   console.log('Second question:Your answer is true');
//   score++;
// }
// else {
//   alert('sorry you should answer by yes or no');
//   console.log('Second question:You should pick yes or no');
// }
// // }
// // ques2();


// // function ques3() {
// let favMeal = prompt('My favorite meal is mansaf?');
// if (favMeal.toLowerCase() === 'yes' || favMeal.toLowerCase() === 'y') {
//   alert('yes this is true I fall in love with mansaf ');
//   console.log('Third question:Your answer is true');
//   score++;
// } else if (favMeal.toLowerCase() === 'no' || favMeal.toLowerCase() === 'n') {
//   alert('I am so sorry I love mansaf');
//   console.log('Third question:Your answer is false');
// }
// else {
//   alert('sorry you should answer by yes or no');
//   console.log('Third question:You should pick yes or no');
// }
// // }
// // ques3();

// // function ques4() {
// let myAge = prompt('Am I 32 years old ?');
// if (myAge.toLowerCase() === 'yes' || myAge.toLowerCase() === 'y') {
//   alert('yes this is true I am 32 years old  ');
//   console.log('Third question:Your answer is true');
//   score++;
// } else if (myAge.toLowerCase() === 'no' ||myAge.toLowerCase() === 'n') {
//   alert('I am so sorry I am 32 years old ');
//   console.log('Third question:Your answer is false');
// }
// else {
//   alert('sorry you should answer by yes or no');
//   console.log('Third question:You should pick yes or no');
// }


// // }
// // ques4();

// //Third question
// // function ques5() {
// let myCountry = prompt('Am I from Jordan?');
// if (myCountry.toLowerCase() === 'yes' || myCountry.toLowerCase() === 'y') {
//   alert('yes this is true I am from Jordan');
//   console.log('Third question:Your answer is true');
//   score++;
// } else if (myCountry.toLowerCase() === 'no' || myCountry.toLowerCase() === 'n') {
//   alert('I am so sorry I am from Jordan');
//   console.log('Third question:Your answer is false');
// }
// else {
//   alert('sorry you should answer by yes or no');
//   console.log('Third question:You should pick yes or no');
// }
// // }
// // ques5();



// // function ques6() {
// let correctNumber = 6;
// for (let i = 1; i <= 4; i++) {
//   let guessNum = parseInt(prompt('Can you guess my favorite number. Please type a number.'));
//   if (guessNum === correctNumber) {
//     alert('That\'s rigth you are amazing');
//     console.log('fouth question:Your answer is true');
//     score++;
//     break;
//   }
//   else if (guessNum > correctNumber) {
//     alert('sorry, It\'s too high');
//     console.log('fouth question:Your answer is false');
//   }
//   else if (guessNum < correctNumber) {
//     alert('sorry, It\'s too low');
//     console.log('fouth question:Your answer is false ');
//   }
//   else {
//     console.log('fouth question:Your answer is false');
//   }
// }
// alert(`My favorate number is ${correctNumber}`);

// // }
// // ques6();


// // function ques7() {
// let favFruit = ['kiwi', 'Peache', 'apple', 'banana', 'mango'];
// let flag = false;
// for (let i = 1; i <= 6; i++) {
//   let guessFruit = prompt('Can you guess my favorite fruit. Please type a name of fruit.');
//   guessFruit = guessFruit.toLowerCase();
//   for (let j = 0; j < favFruit.length; j++) {
//     if (guessFruit === favFruit[j]) {
//       alert('That\'s true');
//       console.log('fifth question:Your answer is true');
//       score++;
//       flag =true;
//     }
//     else {
//       console.log('fifth question:Your answer is false');
//     }
//   }
//   if(flag){
//     break;
//   }

// }
// alert('My favorate fruit are [kiwi, Peache, apple,banana, mango]');
// // }
// // ques7();

// alert(`Thank you ${userName} Your score is = ${score}/7 `);
// console.log('your score =', score);
// alert(`Thank you so much ${userName} for sharing this questions with us I hope you enjoy with it. There is a short introducing about me in this page. We look forward to see you soon`);


