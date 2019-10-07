// Todo List
$(function() {
  let $list = $(".TodoUl");
  let $newItemForm = $("#newItemForm");

  $newItemForm.on("submit", function(e) {
    e.preventDefault();
    let text = $('input.myTodo[type="text"]').val();
    $list.append(`<li>${text}</li>`);
    $('input[type="text"]').val("");
    $(`li`).addClass("ulItem");
  });

  $list.on("click", "li", function() {
    let $this = $(this);
    $this.remove();
  });
});


//Geolocation 
var x = document.getElementById("myLocale");

function getLocation() {
  if (navigator.gelocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Unable to fetch location! ";
  }
}

function showPosition(position) {
  x.innerHTML =
    "Longitude:" +
    position.coords.longitude +
    "Latitude: " +
    position.coords.latitude;
}


//Clicker Game
$(document).ready(function(){
  var count = 0;
  let square = $('.gameBox');
  $(square).click(function(){
    if(count < 100) {
      count++;
      $(this).text("click me" + " " + count);
    }else{
      count = count + 10;
    };
    square.css("background-color", "green");
  })
});

//Calculator
$(document).ready(function() {
  var result = 0;
  var prevEntry = 0;
  var operation = null;
  var currentEntry = '0';
  updateScreen(result);
  
  $('.buttons').click(function(evt) {
    var buttonPressed = $(this).html();
    console.log(buttonPressed);
    
    if (buttonPressed === "C") {
      result = 0;
      currentEntry = '0';
    } else if (buttonPressed === "CE") {
      currentEntry = '0';
    } else if (buttonPressed === "back") {
      //currentEntry = currentEntry.substring(0, currentEntry.length-1);
    } else if (buttonPressed === "+/-") {
      currentEntry *= -1;
    } else if (buttonPressed === '.') {
      currentEntry += '.';
    } else if (isNumber(buttonPressed)) {
      if (currentEntry === '0') currentEntry = buttonPressed;
      else currentEntry = currentEntry + buttonPressed;
    } else if (isOperator(buttonPressed)) {
      prevEntry = parseFloat(currentEntry);
      operation = buttonPressed;
      currentEntry = '';
    } else if(buttonPressed === '%') {
      currentEntry = currentEntry / 100;
    } else if (buttonPressed === 'sqrt') {
      currentEntry = Math.sqrt(currentEntry);
    } else if (buttonPressed === '1/x') {
      currentEntry = 1 / currentEntry;
    } else if (buttonPressed === '=') {
      currentEntry = operate(prevEntry, currentEntry, operation);
      operation = null;
    }
    
    updateScreen(currentEntry);
  });
});

updateScreen = function(displayValue) {
  var displayValue = displayValue.toString();
  $('.result').html(displayValue.substring(0, 10));
};

isNumber = function(value) {
  return !isNaN(value);
}

isOperator = function(value) {
  return value === '/' || value === '*' || value === '+' || value === '-';
};

operate = function(a, b, operation) {
  a = parseFloat(a);
  b = parseFloat(b);
  console.log(a, b, operation);
  if (operation === '+') return a + b;
  if (operation === '-') return a - b;
  if (operation === '*') return a * b;
  if (operation === '/') return a / b;
}