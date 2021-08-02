'use strict';

var score=0;
var userName=prompt('Welcome to my page can you tell me your name');
alert('Welcome again '+userName+' to my page I will ask you some questions about my self and you will answer by yes or no');
//First question
function ques1(){
  var myName= prompt('My name is saif?');
  if(myName.toLowerCase() ==='yes' || myName.toLowerCase() ==='y')
  {
    alert('This is a good starting');
  console.log('First question:Your answer is true');
  score++;
} else if(myName.toLowerCase() ==='no' || myName.toLowerCase() ==='n')
{
  alert('sorry this is not true');
  console.log('First question:Your answer is false');
}
else{
  alert('sorry you should answer by yes or no');
  console.log('First question:You should pick yes or no');
}
}
ques1();
//Second question
function ques2(){
  var favDrink= prompt('My favorite sport is football?');
  if(favDrink.toLowerCase() ==='yes' || favDrink.toLowerCase() ==='y')
  {
  alert('sorry I do not like it');
  console.log('Second question:Your answer is false');
} else if(favDrink.toLowerCase() ==='no' || favDrink.toLowerCase() ==='n')
{
  alert('You are amazing keep on it');
  console.log('Second question:Your answer is true');
  score++;
}
else{
  alert('sorry you should answer by yes or no');
  console.log('Second question:You should pick yes or no');
}
}
ques2();

//Third question
function ques3(){
  var favMeal= prompt('My favorite meal is mansaf?');
  if(favMeal.toLowerCase() ==='yes' || favMeal.toLowerCase() ==='y')
  {
    alert('yes this is true I fall in love with mansaf ');
    console.log('Third question:Your answer is true');
    score++;
  } else if(favMeal.toLowerCase() ==='no' || favMeal.toLowerCase() ==='n')
  {
    alert('I am so sorry I love mansaf');
    console.log('Third question:Your answer is false');
  }
  else{
    alert('sorry you should answer by yes or no');
    console.log('Third question:You should pick yes or no');
  }
}
ques3();



function ques4(){
  for(var i=0;i<4;i++){
    var guessNum=parseInt(prompt('Can you guess my favorite number. Please type a number.'));
    if(guessNum ===6){
      alert('That\'s rigth you are amazing');
      console.log('fouth question:Your answer is true');
    score++;
    break;
  }
  else if(guessNum >6){
    alert('sorry, It\'s too high');
    console.log('fouth question:Your answer is false');
  }
  else if(guessNum <6){
    alert('sorry, It\'s too low');
    console.log('fouth question:Your answer is false');
  }
  else {
    console.log('fouth question:Your answer is false');
  }
}
alert('My favorate number is 6');

}
ques4();


function ques5(){
  for(var x=0;x<6;x++){
    var favFruit=['kiwi','Peache','apple','banana','mango'];
    var guessFruit=prompt('Can you guess my favorite fruit. Please type a name of fruit.');
    guessFruit=guessFruit.toLowerCase();
    if(guessFruit===favFruit[0] || guessFruit===favFruit[1] ||guessFruit===favFruit[2] ||guessFruit===favFruit[3]||guessFruit===favFruit[4]){
      alert('That\'s true');
      console.log('fifth question:Your answer is true');
    score++;
    break;}
    else {
    console.log('fifth question:Your answer is false');
  }
}
alert('My favorate fruit are [kiwi, Peache, apple,banana, mango]');
}
ques5();

alert(`Thank you ${userName} Your score is = ${score}/5 `);
console.log('your score =',score);
alert(`Thank you so much ${userName} for sharing this questions with us I hope you enjoy with it. There is a short introducing about me in this page. We look forward to see you soon`);


