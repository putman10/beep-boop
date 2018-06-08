// BUSINESS LOGIC

function checkNumber(userNumber){
  var userInputSplit = userNumber.split(" ");
  var includesOne = userInputSplit.includes("1");
  var includesZero = userInputSplit.includes("0");
  var divisibleByThree = parseInt(userNumber) % 3 === 0
  var finalNumber = [];

  if (divisibleByThree === true) {
    $("#result ul").append("<li>" + "I'm sorry, Dave. I'm afraid I can't do that." + "</li>");
  } else if (includesZero === true && includesOne === false) {
    $("#result ul").append("<li>" + "Beep!" + "</li>");
  } else if (includesOne === true) {
    $("#result ul").append("<li>" + "Boop!" + "</li>");
  } else {
    $("#result ul").append("<li>" + parseInt(userNumber) + "</li>");
  }

}

function loopNumber(userNumber) {

  var loopAmmount = parseInt(userNumber);

  $("#result ul").text(" ");
  debugger;

 for (x = 1; x <= loopAmmount; x++) {
  var loopCurrentNumber = x;
  var pushNumber = [];
  pushNumber.push(loopCurrentNumber);
  checkNumber(pushNumber);
 }

 $("#result").slideDown();

}


// USER INTERFACE LOGIC

$(function(){

  $("#beep-boop-form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#user-input").val();

    loopNumber(userInput);

  });


});
