
'use strict';

// on load user is asked for their name, name inserted into H1
var userName = prompt('Hi, what is your name?');
document.getElementById('userName').innerHTML = userName;
// adds listener to window for scroll percentage
window.onscroll = function() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById('bar').style.width = scrolled + '%';
};
// When user clicks button quiz is started
document.getElementById('clickMe').addEventListener('click', function(){
  // User score
  var score = 0;
  //function for yes/no questions
  function question(questionPrompt){
    var userAnswer = prompt(questionPrompt);
    if (userAnswer[0].toLowerCase() === 'y'){
      score ++;
      return alert('Correct ' + score + '/7!');
    } else {
      return alert('Wrong, ' + score + '/7');
    }
  }
  // array for questions
  var questions = ['Is my dog the cutest?', 'Do I have a red motorcycle?', 'Did your name suddenly appear on this site?', 'Do I like to rock climb?'];
  // new question with Number
  function guessNumber(){
    var myNumber = Math.random();
    myNumber = myNumber * 10;
    myNumber = Math.floor(myNumber);
    var attemptsLeft = 4;
    for(var i = 0; i < 5; i++) {
      if(attemptsLeft === 0){
        alert('Close the number was ' + myNumber + '.');
      }else {
        var numberQuestion = prompt('You have ' + attemptsLeft + ' tries to guess my number between 0-10, good luck!');
        if(isNaN(parseInt(numberQuestion))){
          attemptsLeft--;
          alert('Please use a number.');
        }else if(Number(numberQuestion) > myNumber){
          attemptsLeft--;
          alert('Too high');
        }else if (Number(numberQuestion) < myNumber){
          attemptsLeft--;
          alert('Too low');
        }else {
          score ++;
          attemptsLeft = 1;
          alert('Correct ' + score + '/7!');
          break;
        }
      }
    }
  }
  // new question with many answers
  function bandQuestion(){
    var attempts = 6;
    var optionBands = [' Red Hot Chilli Peppers', ' Thomas Rhett', ' Old Dominion', ' Kenny Chesney', ' Lil Dicky', ' Luke Combs', ' Chase Rice', ' Taylor Rae Holbrook', ' Kane Brown', ' Hoodie Allen'];
    var favBands =['red hot chilli peppers', 'kenny chesney'];
    var notTrue = false;

    function bandCheck(){
      if(favBands.indexOf(bandPrompt) === -1){
        attempts--;
        alert('Try again');
      }else {
        score++;
        alert('Correct! ' + score + '/7!');
        attempts = 1;
        return notTrue = true;
      }
    }
    for(var i = attempts; i >= 0; i--){
      if(i > 0){
        if(!notTrue){
          var bandPrompt = (prompt('Can you guess my favorite band? You have ' + attempts +' attempt(s) left. Here are your choices:' + optionBands + '.')).toLowerCase();
          bandPrompt;
          bandCheck();
        }
      }else if(i === 0 && !notTrue){
        alert('Almost! My favorite bands were '+ favBands[0] + ' and ' + favBands[1] + '.');
      }
    }
  }
  // Question
  function lastQuestion(){
    var questionFive = prompt('Alright ' + userName + ', the final question. Is this a cool website?');
    if(questionFive[0].toLowerCase() === 'y'){
      score++;
      alert('Thank you for taking my quiz ' + userName + ' you scored ' + score + '/7!');
    } else {
      alert('I\'m sorry you feel that way.' + score + '/7! Thank you for taking my quiz ' + userName + '!');
    }
  }
  // questions 1 to 4
  for(var a = 0; a < questions.length; a++){
    question(questions[a]);
  }
  guessNumber();
  bandQuestion();
  lastQuestion();
});


