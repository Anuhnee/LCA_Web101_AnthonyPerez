var counter = 3;

$("#addBtn").click(function() {
  counter++;
  $("#myUL").append('<li class="new">New Item ${counter}</li>');
});
