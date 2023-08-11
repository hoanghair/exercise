$(document).ready(function () {
  function toggleNavBar() {
    if ($(this).hasClass("btn__navbar-on")) {
      $(".nav").addClass("is-on");
      $(this).removeClass("btn__navbar-on").addClass("btn__navbar-off");
    } else {
      $(".nav").removeClass("is-on");
      $(this).removeClass("btn__navbar-off").addClass("btn__navbar-on");
    }
  }

  $(".btn__navbar").on("click", toggleNavBar);
  
});


