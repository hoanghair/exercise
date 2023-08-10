$(document).ready(function () {
  function onNavBar() {
    if ($(this).hasClass("btn__navbar-on")) {
      $(".nav").css("display", "block");
      $(this).removeClass("btn__navbar-on").addClass("btn__navbar-off");
    } else {
      $(".nav").css("display", "none");
      $(this).removeClass("btn__navbar-off").addClass("btn__navbar-on");
    }
  }

  $(".btn__navbar").on("click", onNavBar);
});
$(window).on("resize", function () {
  if($(window).width() > 768){
    $(".nav").addClass("is-on")
  }else{
    $(".nav").removeClass("is-on")
  }
});

