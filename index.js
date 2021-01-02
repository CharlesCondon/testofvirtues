// prints "hi" in the browser's dev tools console
console.log("hi");

// functions to show message based on which button the user picks
$(document).ready(function() {
  $(".no").click(function() {
      $(".a").removeClass("clickno");
      $(".a").addClass("clickno2");
      $(".b").removeClass("clickyes2");
      $(".b").addClass("clickyes");
    });
  $(".yes").click(function() {
      $(".b").removeClass("clickyes");
      $(".b").addClass("clickyes2");
      $(".a").removeClass("clickno2");
      $(".a").addClass("clickno");
    });
});
