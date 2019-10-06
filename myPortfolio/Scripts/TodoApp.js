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

var x = document.getElementById("myLocale");

function getLocation() {
  if (navigator.gelocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported on this";
  }
}

function showPosition(position) {
  x.innerHTML =
    "Longitude:" +
    position.coords.longitude +
    "Latitude: " +
    position.coords.latitude;
}
