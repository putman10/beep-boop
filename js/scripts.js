// BUSINESS LOGIC

function loopNumber(userNumber) {
  var order = "reverse";

  $("#result ul").text(" ");

  if (userNumber >= 0 && order === "notReverse") {
   for (x = 0; x <= userNumber; x++) {
    var loopCurrentNumber = x.toString();
    checkNumber(loopCurrentNumber);
   }
 } else if (userNumber >= 0 && order === "reverse") {
   for (x = userNumber; x >= 0; x--) {
    var loopCurrentNumber = x.toString();
    checkNumber(loopCurrentNumber);
   }
  } else if (userNumber < 0) {
 alert("Please enter a number greater than 0")
  } else {
    alert("this will work in a bit")

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
    $("#result ul").append("<li>" + userNumber + " = " + "Beep!" + "</li>");
  } else if (includesOne === true) {
    $("#result ul").append("<li>" + userNumber + " = " + "Boop!" + "</li>");
  } else {
    $("#result ul").append("<li>" + userNumber + " = " + parseInt(userNumber) + "</li>");
  }
}

function customName(listNumber) {
  var userName = $("#user-name").val();

  $("#result ul").append("<li>" + listNumber + " = " + "I'm sorry, " + "<span class='name'></span>" + ". I'm afraid I can't do that." + "</li>");

  if ($("#user-name").val()) {
    $("span.name").text(userName);
  } else {
    $("span.name").text("Dave");
  }
}

function showNameField() {
  var nameSelection = $("input:radio[name=customInputName]").val();

  if (nameSelection === "yes") {
  $(".form-name").slideToggle();
  } else {
  }
 }

// USER INTERFACE LOGIC

$(function(){

  $('input:radio[name=customInputName]').change(function(){
    showNameField();
  });

  $("#beep-boop-form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#user-input").val();

    loopNumber(userInput);
  });
});
