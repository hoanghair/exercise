$(document).ready(function () {
  $(".btn__navbar").click(function () {
    if ($(this).hasClass("btn__navbar-on")) {
      $(".nav").show();
      $(this).removeClass("btn__navbar-on").addClass("btn__navbar-off");
    } else {
      $(".nav").hide();
      $(this).removeClass("btn__navbar-off").addClass("btn__navbar-on");
    }
  });
});
