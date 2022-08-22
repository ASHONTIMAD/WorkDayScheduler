
$(document).ready(function(){

var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);
var currentHour = moment().format('HH');

for(let i =9; i <=17; i++) {
    // event
    const events = $("#" + i);
    const rowId = events.attr("id");
    if(currentHour > i) {
        events.addClass("past");
    } else if(currentHour == i) {
        events.addClass("present");
    } else if(currentHour < i) {
        events.addClass("future");
    };
};

  for (var i = 0; i < hour.length; i++) {

    var newDiv = $("<div>");
    var newP = $("<p>");
    var newInput = $("<input>");
    var newBtn = $("<btn>");

    newDiv.addClass("row");
    newP.addClass("col-sm-1 time-block hour");
    newP.text(hour[i]);
    newInput.addClass("col-sm-10 description");
    newInput.attr("id", militaryTimes[i]);
    newBtn.addClass("col-sm-1 saveBtn fa fa-save");

    if (militaryTimes[i] < currentHour) {
      newInput.addClass("past");
    } else if (militaryTimes[i] === currentHour) {
      newInput.addClass("present");
    } else newInput.addClass("future");

    newDiv.append(newP, newInput, newBtn);
    $(".container").append(newDiv);
  }


  const createEvent = (rowId) => {
   var  textAreaEl = $("<textarea>");
   textAreaEl.val("enter your event");

   textAreaEl.focus();

   $("#" + rowId).append(textAreaEl);

};


   $(".saveBtn").on("click", function () {
    var masterInputs = [];
    for (var i = 9; i < 18; i++) {
      var userInput = $("#" + i).val();
      masterInputs.push(userInput);
    }
    localStorage.setItem("savedTasks", JSON.stringify(masterInputs));
  });

   var storedTasks = JSON.parse(localStorage.getItem("savedTasks"));
  console.log(storedTasks);

   for (i = 0; i < storedTasks.length; i++) {
    $("#" + (i + 9)).val(storedTasks[i]);
  }
})