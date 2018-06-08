// BUSINESS LOGIC

function checkNumber(userNumber){
  $("#result").text(userNumber)
  $("#result").slideDown();
}

// USER INTERFACE LOGIC

$(function(){

  $("#beep-boop-form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#user-input").val();
    checkNumber(userInput);
    console.log(userInput);

  });


});
