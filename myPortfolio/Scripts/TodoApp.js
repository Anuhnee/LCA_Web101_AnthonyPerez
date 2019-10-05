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
