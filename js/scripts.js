
$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var yourNameInput = $("input#yourName").val();
    var yourFoodInput = $("input#yourFood").val();
    var flavorInput = $("input:radio[name=flavor]:checked").val();

    // console.log(nameInput, foodInput, flavorInput);
    $(".yourName").text(yourNameInput);
    $(".yourFood").append(yourFoodInput);
    $("#story").show();
    event.preventDefault();
  });
});
