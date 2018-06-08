// BUSINESS LOGIC

function loopNumber(userNumber) {
  var order = $("#sortOrder").val();

  $("#result ul").text(" ");

  if (userNumber >= 0 && order === "1") {
   for (x = 0; x <= userNumber; x++) {
    var loopCurrentNumber = x.toString();
    checkNumber(loopCurrentNumber);
   }
 } else if (userNumber >= 0 && order === "2") {
   for (x = userNumber; x >= 0; x--) {
    var loopCurrentNumber = x.toString();
    checkNumber(loopCurrentNumber);
   }
  } else if (userNumber < 0) {
 alert("Please enter a number greater than 0")
  } else {
    alert("this will work in a bit")

  }

 $("#resultArea").slideDown();

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
  var nameSelection = $("input:radio[name=customInputName]:checked").val();

  $("#result ul").append("<li>" + listNumber + " = " + "I'm sorry, " + "<span class='name'></span>" + ". I'm afraid I can't do that." + "</li>");

  if (nameSelection === "yes") {
    $("span.name").text(userName);
  } else if (nameSelection === "no"){
    $("span.name").text("Dave");
  } else {

  }
}

function showNameField() {
  var nameSelection = $("input:radio[name=customInputName]:checked").val();

  if (nameSelection === "yes") {
  $(".form-name").slideDown();
  } else {
    $(".form-name").slideUp();
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
