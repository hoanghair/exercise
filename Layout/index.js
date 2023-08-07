$(document).ready(function () {
  $(".btn__menu").click(function () {
    if ($(this).hasClass("btn__menu-on")) {
      $(".nav").show();
      $(this).removeClass("btn__menu-on").addClass("btn__menu-off");
    } else {
      $(".nav").hide();
      $(this).removeClass("btn__menu-off").addClass("btn__menu-on");
    }
  });
});
