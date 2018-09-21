$(function() {
  $(".eat").on("click", function(event) {
    console.log("devoured clicked");
    var id = $(this).data("id");
    // var newEaten = $(this).data("neweaten") === false;

    var newEatenState = {
      devoured: true
    };
    console.log("id:" + id);
    console.log("eaten:" + newEatenState.devoured);

    // Send the PUT request.
    $.ajax("/bugers/update/" + id, {
      type: "PUT",
      data: newEatenState
    }).then(function() {
      console.log("changed eaten state to", newEaten);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
