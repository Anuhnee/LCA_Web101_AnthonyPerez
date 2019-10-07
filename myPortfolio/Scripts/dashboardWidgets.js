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
  })
});