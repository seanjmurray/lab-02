
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
  //   alert('Correct ' + score + '/7!');
  // }

  // Question one
  var questionOne = prompt('Is my dog the cutest?');
  if(questionOne[0].toLowerCase() === 'y'){
    // correct();
    score ++;
    alert('Correct ' + score + '/7!');
  } else {
    alert('Unbelievable, ' + score + '/6');
  }
  // question two
  var questionTwo = prompt('Do I have a red motorcycle?');
  if(questionTwo[0].toLowerCase() === 'y'){
    // correct();
    score ++;
    alert('Correct ' + score + '/7!');
  } else {
    alert('are you sure you were ready for this? ' + score + '/7');
  }
  // question three
  var questionThree = prompt('Did your name suddenly appear on this site?');
  if(questionThree[0].toLowerCase() === 'y'){
    // correct();
    score ++;
    alert('Correct ' + score + '/7!');
  } else {
    alert('Are you sure you looked at this site? ' + score + '/7!');
  }
  // Question four
  var questionFour = prompt('Do I like to rock climb?');
  if(questionFour[0].toLowerCase() === 'y'){
    // correct();
    score ++;
    alert('Correct ' + score + '/7!');
  } else {
    alert('Close, ' + score + '/7!');
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
        alert('Too low');
      }else if(numberQuestion > myNumber){
        attemptsLeft--;
        alert('Too high');
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
  attemptsLeft = 6;
  var notTrue = false;
  var optionBands = [' Red Hot Chilli Peppers', ' Thomas Rhett', ' Old Dominion', ' Kenny Chesney', ' Lil Dicky', ' Luke Combs', ' Chase Rice', ' Taylor Rae Holbrook', ' Kane Brown', ' Hoodie Allen'];

  var favBands =['red hot chilli peppers', 'kenny chesney'];
  loop1:
  for(var e = 0; e < 5; e++){
    if(attemptsLeft > 0){
      var manyAnswers = prompt('Can you guess my favorite band? You have ' + attemptsLeft +' tries! Here are your choices:' + optionBands + '.');
      for(var a = 0; a < favBands.length; a++){
        if(favBands[a] === manyAnswers.toLowerCase()){
          score++;
          alert('Correct ' + score + '/7!');
          notTrue = true;
          break loop1;
        }else{
          attemptsLeft--;
          alert('Try again!');
          break;
        }
      }
    }else{
      alert('Almost, my favorite bands were ' + favBands[0] + ' and ' + favBands[1] + '.');
      break;
    }
  }


  // Question
  var questionFive = prompt('Alright ' + userName + ', the final question. Is this a cool website?');
  if(questionFive[0].toLowerCase() === 'y'){
    score++;
    alert('Thank you for taking my quiz ' + userName + ' you scored ' + score + '/7!');
  } else {
    alert('I\'m sorry you feel that way.' + score + '/7! Thank you for taking my quiz ' + userName + '!');
  }
});
