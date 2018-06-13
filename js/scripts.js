// BUSINESS LOGIC

function loopNumber(userNumber) {
  var order = $("#sortOrder").val();
  var finalArray = [];

  if (userNumber >= 0 && order === "1") {
   for (x = 0; x <= userNumber; x++) {
    var loopCurrentNumber = x.toString();
    var final = checkNumber(loopCurrentNumber);
    finalArray.push(x + " =" + final + "<br>");
   }
  } else if (userNumber >= 0 && order === "2") {
   for (x = userNumber; x >= 0; x--) {
    var loopCurrentNumber = x.toString();
    var final = checkNumber(loopCurrentNumber);
    finalArray.push(x + " =" + final + "<br>");
   }
  } else if (userNumber < 0) {
    finalArray.push("Please enter a number greater than 0");
  } else {
    finalArray.push("Try Again");
  }
  return finalArray;
}

function checkNumber(userNumber){
  var userInputSplit = userNumber.split("");
  var includesOne = userInputSplit.includes("1");
  var includesZero = userInputSplit.includes("0");
  var divisibleByThree = parseInt(userNumber) % 3 === 0
  var newArray = [];

  if (divisibleByThree === true) {
    newArray.push(" I'm Sorry, <span class='name'></span>. I'm afraid I can't do that.")
  } else if (includesZero === true && includesOne === false) {
    newArray.push(" Beep!")
  } else if (includesOne === true) {
    newArray.push(" Boop!")
  } else {
    newArray.push(" " + userNumber)
  }
  return newArray;
}

// USER INTERFACE LOGIC

$(function(){

  $('input:radio[name=customInputName]').change(function(){
    var userName = $("#user-name").val();
    var nameSelection = $("input:radio[name=customInputName]:checked").val();

    $(".form-name").slideToggle();

    if (nameSelection === "yes" && userName === "") {
     $("span.name").text("Dave");
   } else if (nameSelection === "yes") {
     $("span.name").text(userName);
   } else {
     $("span.name").text("Dave");
   }

  });

  $("#beep-boop-form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#user-input").val();
    var finalResult = loopNumber(userInput).join(" ");
    var userName = $("#user-name").val();
    var nameSelection = $("input:radio[name=customInputName]:checked").val();

    $("#result").html(finalResult);

    if (nameSelection === "yes" && userName === "") {
      $("span.name").text("Dave");
    } else if (nameSelection === "yes") {
      $("span.name").text(userName);
    } else {
      $("span.name").text("Dave");
    }

    $("#resultArea").slideDown();

  });
});
