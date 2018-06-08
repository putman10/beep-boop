// BUSINESS LOGIC

function checkNumber(userNumber){
  var userInputSplit = userNumber.split("");
  var includesOne = userInputSplit.includes("1");
  var includesZero = userInputSplit.includes("0");
  var divisibleByThree = parseInt(userNumber) % 3 === 0
  var finalNumber = [];

  console.log(divisibleByThree);

  if (divisibleByThree === true) {
    finalNumber.push("I'm sorry, Dave. I'm afraid I can't do that.");
  } else if (includesZero === true && includesOne === false) {
    finalNumber.push('Beep!');
  } else if (includesOne === true) {
    finalNumber.push('Boop!');
  } else {
    finalNumber.push(parseInt(userNumber));
  }
console.log(finalNumber);
  $("#result").text(finalNumber);
  $("#result").slideDown();

}

function checkNumber3(userNumber1){

}

// USER INTERFACE LOGIC

$(function(){

  $("#beep-boop-form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#user-input").val();
    checkNumber(userInput);

  });


});
