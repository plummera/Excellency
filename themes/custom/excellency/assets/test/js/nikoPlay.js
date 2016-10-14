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
