$(document).ready(function () {
  function toggleNavBar() {
    $(".nav").stop().slideToggle();
    if ($(this).hasClass("btn__navbar-on")) {
      $(this).removeClass("btn__navbar-on").addClass("btn__navbar-off");
    } else {
      $(this).removeClass("btn__navbar-off").addClass("btn__navbar-on");
    }
  }

  $(".btn__navbar").on("click", toggleNavBar);
});
