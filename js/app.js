
'use strict';

// on load user is asked for their name, name inserted into H1
var userName = prompt('Hi, what is your name?');
document.getElementById('userName').innerHTML = userName;

// When user clicks button quiz is started
document.getElementById('clickMe').addEventListener('click', function(){
  // User score
  var score = 0;
  // runs correct alert and adds 1 to score
  // function correct(){
  //   score ++;
  //   alert('Correct ' + score + '/6!');
  // }

  // Question one
  var questionOne = prompt('Is my dog the cutest?');
  if(questionOne[0].toLowerCase() === 'y'){
    // correct();
    score ++;
    alert('Correct ' + score + '/6!');
  } else {
    alert('Unbelievable, ' + score + '/6');
  }
  // question two
  var questionTwo = prompt('Do I have a red motorcycle?');
  if(questionTwo[0].toLowerCase() === 'y'){
    // correct();
    score ++;
    alert('Correct ' + score + '/6!');
  } else {
    alert('are you sure you were ready for this? ' + score + '/6');
  }
  // question three
  var questionThree = prompt('Did your name suddenly appear on this site?');
  if(questionThree[0].toLowerCase() === 'y'){
    // correct();
    score ++;
    alert('Correct ' + score + '/6!');
  } else {
    alert('Are you sure you looked at this site? ' + score + '/6!');
  }
  // Question four
  var questionFour = prompt('Do I like to rock climb?');
  if(questionFour[0].toLowerCase() === 'y'){
    // correct();
    score ++;
    alert('Correct ' + score + '/6!');
  } else {
    alert('Close, ' + score + '/6!');
  }

  // new question with Number
  var myNumber = Math.random();
  myNumber = myNumber * 10;
  myNumber = Math.floor(myNumber);
  var attemptsLeft = 4;
  for(var i = 0; i < 5; i++) {
    if(attemptsLeft > 0) {
      var numberQuestion = prompt('You have ' + attemptsLeft + ' tries to guess my number, good luck!');
      if(numberQuestion < myNumber){
        attemptsLeft--;
        alert('Too low try again');
      }else if(numberQuestion > myNumber){
        attemptsLeft--;
        alert('Too high, ');
      }else {
        // correct();
        score ++;
        alert('Correct ' + score + '/7!');
        break;
      }
    } else{
      alert('Close the number was ' + myNumber + '.');
    }
  }
  // new question with many answers
  var manyAnswers = prompt('');

  // Question 
  var questionFive = prompt('Alright ' + userName + ', the final question. Is this a cool website?');
  if(questionFive[0].toLowerCase() === 'y'){
    score++;
    alert('Thank you for taking my quiz ' + userName + ' you scored ' + score + '/5!');
  } else {
    alert('I\'m sorry you feel that way.' + score + '/5! Thank you for taking my quiz ' + userName + '!');
  }
});
