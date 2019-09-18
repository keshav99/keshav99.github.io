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
                  .fromTo(".container-intro", 1, {y: "-150vh", opacity: "0"}, {y: "-170vh", delay: 1.5, opacity: "1", ease: Linear.easeIn})
                ) // trigger a TweenMax.to tween
                // .addIndicators({name: "1 (duration: 0.5)"}) // add indicators (requires plugin)
                .addTo(controller);
    
      new ScrollMagic.Scene({
                  triggerElement: "#zelight"
                })
                .setTween(
                  new TimelineMax()
                  .fromTo("#zelight", 1, {opacity: "0"}, {delay: 1.5, opacity: "0.5", ease: Linear.easeOut})
                ) // trigger a TweenMax.to tween
                // .addIndicators({name: "1 (duration: 0.5)"}) // add indicators (requires plugin)
      .addTo(controller);           

    new ScrollMagic.Scene({
                  triggerElement: ".container-intro-middle"
                })
                .setTween(
                  new TimelineMax()
                  .fromTo(".container-intro-middle", 1, {y: "-50vh", opacity: "0"}, {y: "-70vh", delay: 3.5, opacity: "1", ease: Linear.easeIn})
                ) // trigger a TweenMax.to tween
                // .addIndicators({name: "1 (duration: 0.5)"}) // add indicators (requires plugin)
                .addTo(controller);

   new ScrollMagic.Scene({
                              triggerElement: ".container-intro2"
                            })
                            .setTween(
                              new TimelineMax()
                              .fromTo(".container-intro2", 1, {y: "250vh", opacity: "0"}, {y: "225vh", opacity: "0.5", delay: 4.5, ease: Linear.easeIn})
                            ) // trigger a TweenMax.to tween
                            // .addIndicators({name: "1 (duration: 0.5)"}) // add indicators (requires plugin)
                            .addTo(controller);
      
      // var wipeAnimation = new TimelineMax()
      //   .add([//TweenMax.fromTo("section.panel.blue img#bg",    5, {scale:1, autoalpha:0.05}, {scale:1.1, ease: Linear.easeNone}),  // in from right      
      //   //TweenMax.fromTo("section.panel.blue img#light, section.panel.blue img#zelight", 1, {autoalpha: 0.1}, {ease: Linear.easeNone}),
      //   //TweenMax.fromTo("section.panel.blue img#zelight", 0.5, {opacity: 0.5, autoalpha: 0.1}, {opacity:0, ease: Linear.easeNone}),
      //   //TweenMax.fromTo("#portfolio", 1, {y: "100%",  autoalpha: 0.1}, {y: "0%", ease: Linear.easeNone}),
      //   TweenMax.fromTo(".container-intro", 1, { autoalpha: 0.001}, {y: "-150%", ease: Linear.easeNone}),
      //   TweenMax.fromTo(".container-intro-middle", 1, { autoalpha: 0.001}, {y: "-150%", ease: Linear.easeNone}),
      //   TweenMax.fromTo(".container-intro2", 1, {autoalpha: 0.005}, {opacity: 0, ease: Linear.easeNone})])  // in from left
      //   //.fromTo("#skills",    3, {y:  "150%"}, {y: "0%", ease: Linear.easeNone})  // in from right
      //   //.fromTo("#contact", 2, {y: "500%"}, {y: "250%", ease: Linear.easeNone}); // in from top
      //   new ScrollMagic.Scene({
      //   triggerElement: ".container-fluid",
      //   triggerHook: "onLeave",
      //   duration: "1000"
      // })
      // .setPin(".container-fluid")
      // .setTween(wipeAnimation)
      // // .addIndicators() // add indicators (requires plugin)
      // .addTo(controller);
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
    $(window).scroll(function(){
      $(".container-intro, .container-intro-middle, .container-intro2").css("opacity", 1 - $(window).scrollTop() / 200);
      

      var header = document.getElementById('zelight');
      var range = 200;

      var scrollTop = $(this).scrollTop(),
      height = header.height/2,
      offset = height / 2,
      calc = (1 - (scrollTop - offset + range) / range);
      $('#zelight').css({ 'opacity': calc });

      if (calc > '1') {
        $('#zelight').css({ 'opacity': 0.7 });
        console.log('here');
      } else if ( calc < '0' ) {
        $('#zelight').css({ 'opacity': 0.15 });
      }

    //   if ($(this).scrollTop() > $(window).height()) { 
    //     $('#zelight').attr('src','img/zelight-blue.png');
    // }
    // if ($(this).scrollTop() < $(window).height()) { 
    //     $('#zelight').attr('src','img/zelight.png');
    // }
//     var mid_off = mid.scrollTop-50;
//     if (document.body.scrollTop > mid_off) {
//       mid.classList.remove('bg1');
//       mid.classList.add('bg2');
//  }
//  else {
//       mid.classList.remove('bg2');
//       mid.classList.add('bg1');
//  }    
    });
    
    $("#cpp").hover(
      function(){
        // console.log("hijdirgk");
        // var $dt = document.getElementById('docktext');
        // $(document.getElementById('docktext')).animate({opacity:0});
        // $(document.getElementById('docktext')).animate({opacity:1});
        // $(document.getElementById('docktext')).text("I have nearly 4 years of experience in C++. I had created a Conference Team and Task management Application. Using Hashed Trees, tasks could be assigned from one user to another.");
        $("#docktext").hide(150, function() {
          $(this).html("I have nearly 4 years of experience in C++. I had created a Conference Team and Task management Application. Using Hashed Trees, tasks could be assigned from one user to another.").show(100);
      });

      },
      function(){
        // console.log("hijdirgk");
        // var $dt = document.getElementById('docktext');
        // $(document.getElementById('docktext')).text("Starting from developing websites since my 9th grade, I had begun my journey as a developer and have felt untramelled veering from one technology to another throughout these years. I strongly believe an all-round developer never stops learning because of how dynamic technology is.");
        $("#docktext").hide(150, function() {
          $(this).html("Starting from developing websites since my 9th grade, I had begun my journey as a developer and have felt untramelled veering from one technology to another throughout these years. I strongly believe an all-round developer never stops learning because of how dynamic technology is.").show(100);
      });
      }
    );
    $("#java").hover(
      function(){
        // console.log("hijdirgk");
        // var $dt = document.getElementById('docktext');
        // $(document.getElementById('docktext')).animate({opacity:0});
        // $(document.getElementById('docktext')).animate({opacity:1});
        // $(document.getElementById('docktext')).text("I have nearly 4 years of experience in C++. I had created a Conference Team and Task management Application. Using Hashed Trees, tasks could be assigned from one user to another.");
        $("#docktext").hide(50, function() {
          $(this).html("Having practised java for nearly 6 years now, I have created many applications with it. From school, I created a Glow Hockey game using java graphics, and then tested java with an arduino board while making a Traffic Signal Light Automated Application").show(100);
      });

      },
      function(){
        // console.log("hijdirgk");
        // var $dt = document.getElementById('docktext');
        // $(document.getElementById('docktext')).text("Starting from developing websites since my 9th grade, I had begun my journey as a developer and have felt untramelled veering from one technology to another throughout these years. I strongly believe an all-round developer never stops learning because of how dynamic technology is.");
        $("#docktext").hide(50, function() {
          $(this).html("Starting from developing websites since my 9th grade, I had begun my journey as a developer and have felt untramelled veering from one technology to another throughout these years. I strongly believe an all-round developer never stops learning because of how dynamic technology is.").show(100);
      });
      }
    );
    $("#python").hover(
      function(){
        // console.log("hijdirgk");
        // var $dt = document.getElementById('docktext');
        // $(document.getElementById('docktext')).animate({opacity:0});
        // $(document.getElementById('docktext')).animate({opacity:1});
        // $(document.getElementById('docktext')).text("I have nearly 4 years of experience in C++. I had created a Conference Team and Task management Application. Using Hashed Trees, tasks could be assigned from one user to another.");
        $("#docktext").hide(150, function() {
          $(this).html("From coding in hackathons to developing APIs, I feel most comfortable in using Python. I have explored web scraping, web APIs (Django and Flask), neural networking(with Tensorflow and Pytorch) and hace accordingly created many applications using this.").show(100);
      });

      },
      function(){
        // console.log("hijdirgk");
        // var $dt = document.getElementById('docktext');
        // $(document.getElementById('docktext')).text("Starting from developing websites since my 9th grade, I had begun my journey as a developer and have felt untramelled veering from one technology to another throughout these years. I strongly believe an all-round developer never stops learning because of how dynamic technology is.");
        $("#docktext").hide(150, function() {
          $(this).html("Starting from developing websites since my 9th grade, I had begun my journey as a developer and have felt untramelled veering from one technology to another throughout these years. I strongly believe an all-round developer never stops learning because of how dynamic technology is.").show(100);
      });
      }
    );
    $("#csharp").hover(
      function(){
        // console.log("hijdirgk");
        // var $dt = document.getElementById('docktext');
        // $(document.getElementById('docktext')).animate({opacity:0});
        // $(document.getElementById('docktext')).animate({opacity:1});
        // $(document.getElementById('docktext')).text("I have nearly 4 years of experience in C++. I had created a Conference Team and Task management Application. Using Hashed Trees, tasks could be assigned from one user to another.");
        $("#docktext").hide(150, function() {
          $(this).html("I have completed the Universal Windows Platform developer series for Windows 10 applications where I had worked on C# along with XAML for creating responsive desktop applications. I began wokring with Visual Studio and Windows Form application since my high school.").show(100);
      });

      },
      function(){
        // console.log("hijdirgk");
        // var $dt = document.getElementById('docktext');
        // $(document.getElementById('docktext')).text("Starting from developing websites since my 9th grade, I had begun my journey as a developer and have felt untramelled veering from one technology to another throughout these years. I strongly believe an all-round developer never stops learning because of how dynamic technology is.");
        $("#docktext").hide(150, function() {
          $(this).html("Starting from developing websites since my 9th grade, I had begun my journey as a developer and have felt untramelled veering from one technology to another throughout these years. I strongly believe an all-round developer never stops learning because of how dynamic technology is.").show(100);
      });
      }
    );
    $("#js").hover(
      function(){
        // console.log("hijdirgk");
        // var $dt = document.getElementById('docktext');
        // $(document.getElementById('docktext')).animate({opacity:0});
        // $(document.getElementById('docktext')).animate({opacity:1});
        // $(document.getElementById('docktext')).text("I have nearly 4 years of experience in C++. I had created a Conference Team and Task management Application. Using Hashed Trees, tasks could be assigned from one user to another.");
        $("#docktext").hide(150, function() {
          $(this).html("I have worked extensively with Web designing and developmemnt. I have also explored many frameworks with javascript such as AngularJS and JQuery. I had also created a desktoop application when I interned at Vicara Tech using ElectronJS.").show(100);
      });

      },
      function(){
        // console.log("hijdirgk");
        // var $dt = document.getElementById('docktext');
        // $(document.getElementById('docktext')).text("Starting from developing websites since my 9th grade, I had begun my journey as a developer and have felt untramelled veering from one technology to another throughout these years. I strongly believe an all-round developer never stops learning because of how dynamic technology is.");
        $("#docktext").hide(150, function() {
          $(this).html("Starting from developing websites since my 9th grade, I had begun my journey as a developer and have felt untramelled veering from one technology to another throughout these years. I strongly believe an all-round developer never stops learning because of how dynamic technology is.").show(100);
      });
      }
    );
    $("#tf").hover(
      function(){
        // console.log("hijdirgk");
        // var $dt = document.getElementById('docktext');
        // $(document.getElementById('docktext')).animate({opacity:0});
        // $(document.getElementById('docktext')).animate({opacity:1});
        // $(document.getElementById('docktext')).text("I have nearly 4 years of experience in C++. I had created a Conference Team and Task management Application. Using Hashed Trees, tasks could be assigned from one user to another.");
        $("#docktext").hide(150, function() {
          $(this).html("I had very recently completed the Neural Networking And Deep Learning course by deeplearning.ai where various tools including Tensorflow for python had been used.").show(100);
      });

      },
      function(){
        // console.log("hijdirgk");
        // var $dt = document.getElementById('docktext');
        // $(document.getElementById('docktext')).text("Starting from developing websites since my 9th grade, I had begun my journey as a developer and have felt untramelled veering from one technology to another throughout these years. I strongly believe an all-round developer never stops learning because of how dynamic technology is.");
        $("#docktext").hide(150, function() {
          $(this).html("Starting from developing websites since my 9th grade, I had begun my journey as a developer and have felt untramelled veering from one technology to another throughout these years. I strongly believe an all-round developer never stops learning because of how dynamic technology is.").show(100);
      });
      }
    );
    $("#ms").hover(
      function(){
        // console.log("hijdirgk");
        // var $dt = document.getElementById('docktext');
        // $(document.getElementById('docktext')).animate({opacity:0});
        // $(document.getElementById('docktext')).animate({opacity:1});
        // $(document.getElementById('docktext')).text("I have nearly 4 years of experience in C++. I had created a Conference Team and Task management Application. Using Hashed Trees, tasks could be assigned from one user to another.");
        $("#docktext").hide(150, function() {
          $(this).html("Metasploit software is used for vulnerability and testing. I worked on a project for escalating priviledges on a Windows machine and remotely adding users and administrator to exploit metasploitable").show(100);
      });

      },
      function(){
        // console.log("hijdirgk");
        // var $dt = document.getElementById('docktext');
        // $(document.getElementById('docktext')).text("Starting from developing websites since my 9th grade, I had begun my journey as a developer and have felt untramelled veering from one technology to another throughout these years. I strongly believe an all-round developer never stops learning because of how dynamic technology is.");
        $("#docktext").hide(150, function() {
          $(this).html("Starting from developing websites since my 9th grade, I had begun my journey as a developer and have felt untramelled veering from one technology to another throughout these years. I strongly believe an all-round developer never stops learning because of how dynamic technology is.").show(100);
      });
      }
    );
    $("#android").hover(
      function(){
        // console.log("hijdirgk");
        // var $dt = document.getElementById('docktext');
        // $(document.getElementById('docktext')).animate({opacity:0});
        // $(document.getElementById('docktext')).animate({opacity:1});
        // $(document.getElementById('docktext')).text("I have nearly 4 years of experience in C++. I had created a Conference Team and Task management Application. Using Hashed Trees, tasks could be assigned from one user to another.");
        $("#docktext").hide(150, function() {
          $(this).html("I developed a remote Android to Desktop application which would send data from my android phone to my PC using TCP/IP communication under the same network. I was able to access my notifications, open applications remotely or send notes.").show(100);
      });

      },
      function(){
        // console.log("hijdirgk");
        // var $dt = document.getElementById('docktext');
        // $(document.getElementById('docktext')).text("Starting from developing websites since my 9th grade, I had begun my journey as a developer and have felt untramelled veering from one technology to another throughout these years. I strongly believe an all-round developer never stops learning because of how dynamic technology is.");
        $("#docktext").hide(150, function() {
          $(this).html("Starting from developing websites since my 9th grade, I had begun my journey as a developer and have felt untramelled veering from one technology to another throughout these years. I strongly believe an all-round developer never stops learning because of how dynamic technology is.").show(100);
      });
      }
    );
    $("#ps").hover(
      function(){
        // console.log("hijdirgk");
        // var $dt = document.getElementById('docktext');
        // $(document.getElementById('docktext')).animate({opacity:0});
        // $(document.getElementById('docktext')).animate({opacity:1});
        // $(document.getElementById('docktext')).text("I have nearly 4 years of experience in C++. I had created a Conference Team and Task management Application. Using Hashed Trees, tasks could be assigned from one user to another.");
        $("#docktext").hide(150, function() {
          $(this).html("This started as a hobby which helped with my photography and later on I learnt to design minimal icons and designs using Photoshop. ").show(100);
      });

      },
      function(){
        // console.log("hijdirgk");
        // var $dt = document.getElementById('docktext');
        // $(document.getElementById('docktext')).text("Starting from developing websites since my 9th grade, I had begun my journey as a developer and have felt untramelled veering from one technology to another throughout these years. I strongly believe an all-round developer never stops learning because of how dynamic technology is.");
        $("#docktext").hide(150, function() {
          $(this).html("Starting from developing websites since my 9th grade, I had begun my journey as a developer and have felt untramelled veering from one technology to another throughout these years. I strongly believe an all-round developer never stops learning because of how dynamic technology is.").show(100);
      });
      }
    );
    $("#raspi").hover(
      function(){
        // console.log("hijdirgk");
        // var $dt = document.getElementById('docktext');
        // $(document.getElementById('docktext')).animate({opacity:0});
        // $(document.getElementById('docktext')).animate({opacity:1});
        // $(document.getElementById('docktext')).text("I have nearly 4 years of experience in C++. I had created a Conference Team and Task management Application. Using Hashed Trees, tasks could be assigned from one user to another.");
        $("#docktext").hide(150, function() {
          $(this).html('For a project "VirtuoRehab" (a team of 4), we created a unity game for patients undergoing physiotherapic treatments using IMU sensors for detecting movements in hands and legs. ').show(100);
      });

      },
      function(){
        // console.log("hijdirgk");
        // var $dt = document.getElementById('docktext');
        // $(document.getElementById('docktext')).text("Starting from developing websites since my 9th grade, I had begun my journey as a developer and have felt untramelled veering from one technology to another throughout these years. I strongly believe an all-round developer never stops learning because of how dynamic technology is.");
        $("#docktext").hide(150, function() {
          $(this).html("Starting from developing websites since my 9th grade, I had begun my journey as a developer and have felt untramelled veering from one technology to another throughout these years. I strongly believe an all-round developer never stops learning because of how dynamic technology is.").show(100);
      });
      }
    );
    $("#unity").hover(
      function(){
        // console.log("hijdirgk");
        // var $dt = document.getElementById('docktext');
        // $(document.getElementById('docktext')).animate({opacity:0});
        // $(document.getElementById('docktext')).animate({opacity:1});
        // $(document.getElementById('docktext')).text("I have nearly 4 years of experience in C++. I had created a Conference Team and Task management Application. Using Hashed Trees, tasks could be assigned from one user to another.");
        $("#docktext").hide(150, function() {
          $(this).html('I began learning Unity game development for the last one year. I am currently working on a game that involves navigating through a maze and successfully finding your way out while destroying enemies attack that appear randomly').show(100);
      });

      },
      function(){
        // console.log("hijdirgk");
        // var $dt = document.getElementById('docktext');
        // $(document.getElementById('docktext')).text("Starting from developing websites since my 9th grade, I had begun my journey as a developer and have felt untramelled veering from one technology to another throughout these years. I strongly believe an all-round developer never stops learning because of how dynamic technology is.");
        $("#docktext").hide(150, function() {
          $(this).html("Starting from developing websites since my 9th grade, I had begun my journey as a developer and have felt untramelled veering from one technology to another throughout these years. I strongly believe an all-round developer never stops learning because of how dynamic technology is.").show(100);
      });
      }
    );
    $("#ubuntu").hover(
      function(){
        // console.log("hijdirgk");
        // var $dt = document.getElementById('docktext');
        // $(document.getElementById('docktext')).animate({opacity:0});
        // $(document.getElementById('docktext')).animate({opacity:1});
        // $(document.getElementById('docktext')).text("I have nearly 4 years of experience in C++. I had created a Conference Team and Task management Application. Using Hashed Trees, tasks could be assigned from one user to another.");
        $("#docktext").hide(150, function() {
          $(this).html('I have worked with linux platforms and performs vulnerability attacks from inux to windows xp operating systems. I have also adopted to linux command line and programming in vim editor.').show(100);
      });

      },
      function(){
        // console.log("hijdirgk");
        // var $dt = document.getElementById('docktext');
        // $(document.getElementById('docktext')).text("Starting from developing websites since my 9th grade, I had begun my journey as a developer and have felt untramelled veering from one technology to another throughout these years. I strongly believe an all-round developer never stops learning because of how dynamic technology is.");
        $("#docktext").hide(150, function() {
          $(this).html("Starting from developing websites since my 9th grade, I had begun my journey as a developer and have felt untramelled veering from one technology to another throughout these years. I strongly believe an all-round developer never stops learning because of how dynamic technology is.").show(100);
      });
      }
    );
      

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