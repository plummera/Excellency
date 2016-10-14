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
