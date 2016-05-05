// init Kitteh Controller
var controller = new ScrollMagic.Controller();

// Animation for Kittehs Glasses and Lit
var scene = new ScrollMagic.Scene({
          triggerElement: "#trigger1"
        })
        .setTween("#glasses", 0.5, {backgroundColor: "green", scale: 2.5}) // trigger a TweenMax.to tween
        .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
        .addTo(controller);

// init Background Controller2
var controller2 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "85%"}});

// Backgrounds
new ScrollMagic.Scene({triggerElement: "#kitteh"})
				.setTween("#kitteh > div", {y: "400px", ease: Linear.easeNone})
				.addIndicators()
				.addTo(controller2);

new ScrollMagic.Scene({triggerElement: "#kitteh2"})
				.setTween("#kitteh2 > div", {y: "400px", ease: Linear.easeNone})
				.addIndicators()
				.addTo(controller2);

new ScrollMagic.Scene({triggerElement: "#kitteh3"})
				.setTween("#kitteh3 > div", {y: "400px", ease: Linear.easeNone})
				.addIndicators()
				.addTo(controller2);
