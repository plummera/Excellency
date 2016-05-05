// init Kitteh Controller
var controller = new ScrollMagic.Controller();

// Animation for Kittehs Glasses and Lit
new ScrollMagic.Scene({triggerElement: "#trigger1"})
        .setTween("#glasses", 1.0, {left: "400px", display: "block"})
        .addIndicators({name: "glasses (duration: 1.0)"})
        .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#trigger2"})
        .setTween("#lit", 1.0, {left: "638px", display: "block"})
        .addIndicators({name: "lit (duration: 1.0)"})
        .addTo(controller);

// init Background Controller2
var controller2 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "85%"}});

// Backgrounds
new ScrollMagic.Scene({triggerElement: "#kitteh"})
				.setTween("#kitteh > div", {y: "800px", ease: Linear.easeNone})
				.addIndicators()
				.addTo(controller2);

new ScrollMagic.Scene({triggerElement: "#kitteh2"})
				.setTween("#kitteh2 > div", {y: "800px", ease: Linear.easeNone})
				.addIndicators()
				.addTo(controller2);

new ScrollMagic.Scene({triggerElement: "#kitteh3"})
				.setTween("#kitteh3 > div", {y: "800px", ease: Linear.easeNone})
				.addIndicators()
				.addTo(controller2);
