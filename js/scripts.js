// BUSINESS LOGIC

function loopNumber(userNumber) {
  var order = $("#sortOrder").val();
  var finalarray3 = [];

  if (userNumber >= 0 && order === "1") {
   for (x = 0; x <= userNumber; x++) {
    var loopCurrentNumber = x.toString();
    var final = checkNumber(loopCurrentNumber);
    finalarray3.push(x + " =" + final + "<br>");
    
   }
 } else if (userNumber >= 0 && order === "2") {
   for (x = userNumber; x >= 0; x--) {
    var loopCurrentNumber = x.toString();
    var final = checkNumber(loopCurrentNumber);
    finalarray3.push(x + " =" + final + "<br>");
   }
  } else if (userNumber < 0) {
    finalarray3.push("Please enter a number greater than 0");
  } else {
    finalarray3.push("Try Again");
  }
  return finalarray3;
}

function checkNumber(userNumber){
  var userInputSplit = userNumber.split("");
  var includesOne = userInputSplit.includes("1");
  var includesZero = userInputSplit.includes("0");
  var divisibleByThree = parseInt(userNumber) % 3 === 0
  var newArray = [];

  if (divisibleByThree === true) {
    newArray.push(" I'm Sorry, Dave. I'm afraid I can't do that.")

  } else if (includesZero === true && includesOne === false) {
    newArray.push(" Beep!")
  } else if (includesOne === true) {
    newArray.push(" Boop!")
    } else {
    newArray.push(" " + userNumber)
  }

  return newArray;
}

// function customName(listNumber) {
//   var userName = $("#user-name").val();
//   var nameSelection = $("input:radio[name=customInputName]:checked").val();
//
//   $("#result ul").append("<li>" + listNumber + " = " + "I'm sorry, " + "<span class='name'></span>" + ". I'm afraid I can't do that." + "</li>");
//
//   if (nameSelection === "yes") {
//     $("span.name").text(userName);
//   } else if (nameSelection === "no"){
//     $("span.name").text("Dave");
//   } else {
//
//   }
// }

// function showNameField() {
//   var nameSelection = $("input:radio[name=customInputName]:checked").val();
//
//   if (nameSelection === "yes") {
//   $(".form-name").slideDown();
//   } else {
//     $(".form-name").slideUp();
//   }
//  }

// USER INTERFACE LOGIC

$(function(){

  // $('input:radio[name=customInputName]').change(function(){
  //   showNameField();
  // });

  $("#beep-boop-form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#user-input").val();
    var finalFinal = loopNumber(userInput).join(" ");
    $("#resultArea").html(finalFinal);
    $("#resultArea").slideDown();
    debugger;

  });

});
