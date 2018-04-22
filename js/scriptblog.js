$(window).load(function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");

      $("#nav-container").hover(function() {
           console.log('umm');
        $('#nav-container').toggleClass("pushed");
      });
});