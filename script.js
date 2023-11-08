$(document).ready(function () {
  $(".fade-in-button").click(function () {
    $(".fade-text").fadeIn("slow");
  });
  $(".fade-out-button").click(function () {
    $(".fade-text").fadeOut("slow");
  });
  $("#hide").click(function () {
    $("#show-text").hide();
  });

  $("#show").click(function () {
    $("#show-text").show();
  });
  $("#appendButton").click(function () {
    var newText = "Appended text. ";
    $("#append-text").append(newText);
  });
  $("#color-button").click(function () {
    $("#color-text").css("color", "red");
  });
  $("#slideUp-Button").click(function () {
    // Slide up the paragraph
    $("#slideUp-text").slideUp();
  });

  $("#slideDown-Button").click(function () {
    // Slide down the paragraph
    $("#slideUp-text").slideDown();
  });
});
