$(document).ready(function() {
    $("button").on("click", function() {
      if ($(this).hasClass("nav-button")) {
        $("nav div").addClass("show");
      } else if ($(this).hasClass("exit-menu")) {
        $("nav div").removeClass("show");
      } else if ($(this).hasClass("to-top")) {
        $("html,body").animate({ scrollTop: 0 }, "slow");
      }
    });
  
    AOS.init({
      duration: 1800,
      easing: "ease"
    });
  });
  $('.gn-icon-menu').hover(function(){
    $('.gn-menu-wrapper').toggleClass('gn-open-part');
  });
  
  $('.gn-menu-wrapper').hover(function(){
    $(this).toggleClass('gn-open-all');
  })