// BUSINESS LOGIC

function checkNumber(userNumber){
  var userInputSplit = userNumber.split("");
  var includesOne = userInputSplit.includes("1");
  var includesTwo = userInputSplit.includes("0");
console.log(includesOne);
  // if (includesOne === true) {
  //   alert("includes 1");
  // } else if (includesTwo === true) {
  //   alert("includes 0");
  // } else {
  //   alert("includes neither");
  // }

  $("#result").text(userInputSplit);
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
