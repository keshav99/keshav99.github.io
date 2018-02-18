$(window).load(function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");;

      $("#nav-container").hover(function() {
           console.log('umm');
        $('#nav-container').toggleClass("pushed");
      });
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
      triggerElement: ".container-intro"
    })
    .setPin(".container-intro")
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: ".container-intro-middle"
    })
    .setPin(".container-intro-middle")
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: ".container-intro2"
    })
    .setPin(".container-intro2")
    .addTo(controller);

    
      // define movement of panels
    if($(window).width()>1024){

      new ScrollMagic.Scene({
                  triggerElement: ".container-intro"
                })
                .setTween(
                  new TimelineMax()
                  .fromTo(".container-intro", 1, {y: "-150vh", opacity: "0"}, {y: "-170vh", delay: 1, opacity: "1", ease: Linear.easeIn})
                ) // trigger a TweenMax.to tween
                // .addIndicators({name: "1 (duration: 0.5)"}) // add indicators (requires plugin)
                .addTo(controller);
    
    new ScrollMagic.Scene({
                  triggerElement: ".container-intro-middle"
                })
                .setTween(
                  new TimelineMax()
                  .fromTo(".container-intro-middle", 1, {y: "-50vh", opacity: "0"}, {y: "-70vh", delay: 3, opacity: "1", ease: Linear.easeIn})
                ) // trigger a TweenMax.to tween
                // .addIndicators({name: "1 (duration: 0.5)"}) // add indicators (requires plugin)
                .addTo(controller);

   new ScrollMagic.Scene({
                              triggerElement: ".container-intro2"
                            })
                            .setTween(
                              new TimelineMax()
                              .fromTo(".container-intro2", 1, {y: "250vh", opacity: "0"}, {y: "225vh", opacity: "0.5", delay: "4", ease: Linear.easeIn})
                            ) // trigger a TweenMax.to tween
                            // .addIndicators({name: "1 (duration: 0.5)"}) // add indicators (requires plugin)
                            .addTo(controller);
      
      var wipeAnimation = new TimelineMax()
        .add([TweenMax.fromTo("section.panel.blue img#bg",    1, {scale:1, autoalpha:0.05}, {scale:1.05, ease: Linear.easeNone}),  // in from right      
        TweenMax.fromTo("section.panel.blue img#light, section.panel.blue img#zelight", 1, {bottom: 0, autoalpha: 0.1}, {bottom:"60%", ease: Linear.easeNone}),
        TweenMax.fromTo("section.panel.blue img#zelight", 2, {opacity: 0.5, autoalpha: 0.1}, {opacity:0, ease: Linear.easeNone}),
        TweenMax.fromTo("#portfolio", 1, {y: "100%",  autoalpha: 0.1}, {y: "40%", ease: Linear.easeNone}),
        TweenMax.fromTo(".container-intro", 1, {x: "0%", autoalpha: 1}, {x: "200%", ease: Linear.easeNone}),
        TweenMax.fromTo(".container-intro-middle", 1, {x: "0%", autoalpha: 1}, {x: "100%", ease: Linear.easeNone}),
        TweenMax.fromTo(".container-intro2", 1, {scale:1, autoalpha: 0.005}, {scale: 0, ease: Linear.easeNone})])  // in from left
        .fromTo("#skills",    4, {y:  "150%"}, {y: "0%", ease: Linear.easeNone})  // in from right
        .fromTo("#contact", 1, {y: "500%"}, {y: "250%", ease: Linear.easeNone}); // in from top
        new ScrollMagic.Scene({
        triggerElement: ".container-fluid",
        triggerHook: "onLeave",
        duration: "3000"
      })
      .setPin(".container-fluid")
      .setTween(wipeAnimation)
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
        console.log($(window).width());
    }
    else{
      new ScrollMagic.Scene({
                  triggerElement: ".container-intro"
                })
                .setTween(
                  new TimelineMax()
                  .fromTo(".container-intro", 1, {y: "-150vh", opacity: "0"}, {y: "-170vh", delay: 1, opacity: "1", ease: Linear.easeIn})
                ) // trigger a TweenMax.to tween
                // .addIndicators({name: "1 (duration: 0.5)"}) // add indicators (requires plugin)
                .addTo(controller);
    
    new ScrollMagic.Scene({
                  triggerElement: ".container-intro-middle"
                })
                .setTween(
                  new TimelineMax()
                  .fromTo(".container-intro-middle", 1, {y: "-50vh", opacity: "0"}, {y: "-70vh", delay: 3, opacity: "1", ease: Linear.easeIn})
                ) // trigger a TweenMax.to tween
                // .addIndicators({name: "1 (duration: 0.5)"}) // add indicators (requires plugin)
                .addTo(controller);

   new ScrollMagic.Scene({
                              triggerElement: ".container-intro2"
                            })
                            .setTween(
                              new TimelineMax()
                              .fromTo(".container-intro2", 1, {y: "1000vh", opacity: "0"}, {y: "500vh", opacity: "0.5", delay: "4", ease: Linear.easeIn})
                            ) // trigger a TweenMax.to tween
                            // .addIndicators({name: "1 (duration: 0.5)"}) // add indicators (requires plugin)
                            .addTo(controller);
// <!-- 
//         var wipeAnimation = new TimelineMax()
//            .add([
//           //    TweenMax.fromTo("section.panel.blue img#bg",    3, {scale:1, autoalpha:0.05}, {scale:1.5, ease: Linear.easeNone}),  // in from right      
//           //  TweenMax.fromTo("section.panel.blue img#light, section.panel.blue img#zelight", 3, {bottom: 0, autoalpha: 0.1}, {bottom:"100%", ease: Linear.easeNone}),
//           //  TweenMax.fromTo("section.panel.blue img#zelight", 2, {opacity: 0.5, autoalpha: 0.1}, {opacity:0, ease: Linear.easeNone}),
//           TweenMax.fromTo("#portfolio", 3, {y: "100%", autoalpha: 1}, {y: "0%", ease: Linear.easeNone}),
//           TweenMax.fromTo(".container-intro", 1, { autoalpha: 1}, {y: "-300%", ease: Linear.easeNone}),
//           TweenMax.fromTo(".container-intro-middle", 1, {autoalpha: 1}, {y: "-300%", ease: Linear.easeNone}),
//           TweenMax.fromTo(".container-intro2", 1, {scale:1, autoalpha: 0.005}, {scale: 0, ease: Linear.easeNone})])  // in from left
//           .fromTo("#skills",    3, {x:  "150%"}, {x: "0%", ease: Linear.easeNone})  // in from right
//           .fromTo("#contact", 1, {y: "250%"}, {y: "150%", ease: Linear.easeNone}); // in from top
//           new ScrollMagic.Scene({
//   				triggerElement: ".container-fluid",
//   				triggerHook: "onLeave",
//   				duration: "3000"
//   			})
//   			.setPin(".container-fluid")
//   			.setTween(wipeAnimation)
//   			// .addIndicators() // add indicators (requires plugin)
//         .addTo(controller); -->
        console.log($(window).width());
      console.log("doesnt");
      
    }

    // create scene to pin and link animation
    
      
      $(document).on("click", "a[href^=#]", function(e) {
      var id = $(this).attr("href");
      console.log(id);
      if($(id).length > 0) {
        e.preventDefault();

        // trigger scroll
        controller.scrollTo(id);

        // If supported by the browser we can also update the URL
        if (window.history && window.history.pushState) {
          history.pushState("", document.title, id);
        }
      }

    });
  });