// BUSINESS LOGIC

function loopNumber(userNumber) {

  $("#result ul").text(" ");

  if (userNumber >= 0) {
   for (x = 0; x <= userNumber; x++) {
    var loopCurrentNumber = x.toString();
    checkNumber(loopCurrentNumber);
   }
  } else if (true) {
alert("Please enter a number greater than 0")
  }

 $("#result").slideDown();

}

function checkNumber(userNumber){
  var userInputSplit = userNumber.split("");
  var includesOne = userInputSplit.includes("1");
  var includesZero = userInputSplit.includes("0");
  var divisibleByThree = parseInt(userNumber) % 3 === 0

  if (divisibleByThree === true) {
    customName();
  } else if (includesZero === true && includesOne === false) {
    $("#result ol").append("<li>" +  "Beep!" + "</li>");
  } else if (includesOne === true) {
    $("#result ol").append("<li>" +  "Boop!" + "</li>");
  } else {
    $("#result ol").append("<li>" + parseInt(userNumber) + "</li>");
  }
}

function customName() {
  var userName = $("#user-name").val();

  $("#result ol").append("<li>" + "I'm sorry, " + "<span class='name'></span>" + ". I'm afraid I can't do that." + "</li>");

  if ($("#user-name").val()) {
    $("span.name").text(userName);
  } else {
    $("span.name").text("Dave");
  }
}


// USER INTERFACE LOGIC

$(function(){

  $("#beep-boop-form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#user-input").val();

    loopNumber(userInput);

  });
});
