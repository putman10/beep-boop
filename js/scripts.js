// BUSINESS LOGIC

function loopNumber(userNumber) {

  var loopAmmount = userNumber;

  $("#result ul").text(" ");


 for (x = 0; x <= loopAmmount; x++) {
  var loopCurrentNumber = x.toString();
  checkNumber(loopCurrentNumber);
 }

 $("#result").slideDown();

}

function checkNumber(userNumber){
  var userInputSplit = userNumber.split("");
  var includesOne = userInputSplit.includes("1");
  var includesZero = userInputSplit.includes("0");
  var divisibleByThree = parseInt(userNumber) % 3 === 0

  if (divisibleByThree === true) {
    customName(userNumber);
  } else if (includesZero === true && includesOne === false) {
    $("#result ol").append("<li>" +  "Beep!" + "</li>");
  } else if (includesOne === true) {
    $("#result ol").append("<li>" +  "Boop!" + "</li>");
  } else {
    $("#result ol").append("<li>" + parseInt(userNumber) + "</li>");
  }
}

function customName(userNumber) {
  var userInput = $("#user-name").val();

  $("#result ol").append("<li>" + "I'm sorry, " + "<span class='name'></span>" + ". I'm afraid I can't do that." + "</li>");

  $("span.name").text(userInput);

}


// USER INTERFACE LOGIC

$(function(){

  $("#beep-boop-form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#user-input").val();

    loopNumber(userInput);

  });
});
