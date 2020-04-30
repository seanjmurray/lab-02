
'use strict';

// on load user is asked for their name, name inserted into H1
var userName = prompt('Hi, what is your name?');
document.getElementById('userName').innerHTML = userName;

// When user clicks button quiz is started
document.getElementById('clickMe').addEventListener('click', function(){
  // User score
  var score = 0;
  // runs correct alert and adds 1 to score


  function question(questionPrompt){
    var userAnswer = prompt(questionPrompt);
    if (userAnswer[0].toLowerCase() === 'y'){
      score ++;
      return alert('Correct ' + score + '/7!');
    } else {
      return alert('Wrong, ' + score + '/7');
    }
  }
  var questions = ['Is my dog the cutest?', 'Do I have a red motorcycle?', 'Did your name suddenly appear on this site?', 'Do I like to rock climb?'];

  for(var a = 0; a < questions.length; a++){
    question(questions[a]);
  }

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
  // fix bug with second loop logic
  function bandQuestion(){
    var attempts = 6;
    var optionBands = [' Red Hot Chilli Peppers', ' Thomas Rhett', ' Old Dominion', ' Kenny Chesney', ' Lil Dicky', ' Luke Combs', ' Chase Rice', ' Taylor Rae Holbrook', ' Kane Brown', ' Hoodie Allen'];

    var favBands =['red hot chilli peppers', 'kenny chesney'];
    loop1:
    for(var e = 0; e < 7; e++){
      if(attempts === 0){
        alert('Almost, my favorite bands were ' + favBands[0] + ' and ' + favBands[1] + '.');
        break;
      }else{
        var manyAnswers = prompt('Can you guess my favorite band? You have ' + attemptsLeft +' tries! Here are your choices:' + optionBands + '.');
        // for(var a = 0; a < favBands.length; a++){
        if(favBands[0] === manyAnswers.toLowerCase() || favBands[1] === manyAnswers.toLowerCase()){
          score++;
          alert('Correct ' + score + '/7!');
          break loop1;
        }else{
          attempts--;
          alert('Try again!');
        }
        // }
      }
    }
  }

//   // Question
//   var questionFive = prompt('Alright ' + userName + ', the final question. Is this a cool website?');
//   if(questionFive[0].toLowerCase() === 'y'){
//     score++;
//     alert('Thank you for taking my quiz ' + userName + ' you scored ' + score + '/7!');
//   } else {
//     alert('I\'m sorry you feel that way.' + score + '/7! Thank you for taking my quiz ' + userName + '!');
//   }
//   questionOne();
});


