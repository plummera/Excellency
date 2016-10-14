/*! Excellency - v0.1 - 2016-05-06
 * https://www.github.com/plummera/Excellency//
* Copyright (c) 2016 Anthony T. Plummer; Unlicensed for the free! */
// Kitteh
var kitteh = new ScrollMagic.Controller();
new ScrollMagic.Scene({triggerElement: "#SGslideIn", duration: 120})
        .setTween("#glasses", {left: "392px", display: "block", position: "fixed"})
        .addTo(kitteh);

new ScrollMagic.Scene({triggerElement: "#LitSlideIn", duration: 120})
        .setTween("#lit", {left: "650px", display: "block", position: "fixed"})
        .addTo(kitteh);

new ScrollMagic.Scene({triggerElement: "#SGslideOut", duration: 120})
        .setTween("#glasses", {display: "none"})
        .addTo(kitteh);

new ScrollMagic.Scene({triggerElement: "#LitSlideOut", duration: 120})
        .setTween("#lit", {display: "none"})
        .addTo(kitteh);



// Background Easing
var backgroundEasing = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "85%"}});
new ScrollMagic.Scene({triggerElement: "#kitteh"})
				.setTween("#kitteh > div", {y: "800px", ease: Linear.easeNone})
				.addTo(backgroundEasing);

new ScrollMagic.Scene({triggerElement: "#kitteh2"})
				.setTween("#kitteh2 > div", {y: "800px", ease: Linear.easeNone})
				.addTo(backgroundEasing);

new ScrollMagic.Scene({triggerElement: "#kitteh3"})
				.setTween("#kitteh3 > div", {y: "800px", ease: Linear.easeNone})
				.addTo(backgroundEasing);



// catPhoto Fading
var photoFade = new ScrollMagic.Controller();
new ScrollMagic.Scene({triggerElement: "#Puddin"})
				.setVelocity(".catPhoto-1", {opacity: 0}, {duration: 400})
				.addTo(photoFade);

// Neko's Bounce
$(function () { // wait for document ready
  var bounce = {
    hi : {
      curviness: 1.25,
      autoRotate: true,
      values: [
          {x: -100,	y: 10},
          {x: 300,	y: 20}
        ]
    },
    play : {
      curviness: 1.25,
      autoRotate: true,
      values: [
          {x: 510,	y: 30},
          {x: 620,	y: 10},
          {x: 500,	y: 20},
          {x: 380,	y: 10},
          {x: 500,	y: 20},
          {x: 580,	y: 10},
          {x: 620,	y: 35}
        ]
    },
    bye : {
      curviness: 1.25,
      autoRotate: true,
      values: [
          {x: 660,	y: 30},
          {x: 800,	y: 20},
          {x: $(window).width() + 600,	y: 10},
        ]
    }
  };
// Start Niko
var nikoPlay = new ScrollMagic.Controller();

// Start Play
var tween = new TimelineMax()
  .add(TweenMax.to($(".catPhoto-2"), 1.2, {css:{bezier:bounce.hi}, ease:Power1.easeInOut}))
  .add(TweenMax.to($(".catPhoto-2"), 2, {css:{bezier:bounce.play}, ease:Power1.easeInOut}))
  .add(TweenMax.to($(".catPhoto-2"), 1, {css:{bezier:bounce.bye}, ease:Power1.easeInOut}));

new ScrollMagic.Scene({triggerElement: "#Neko", duration: 400, offset: 100})
          .setPin(".catPhoto-2")
          .setTween(tween)
          .addTo(nikoPlay);
})

function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}
