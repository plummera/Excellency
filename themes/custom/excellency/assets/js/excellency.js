/*! Excellency - v0.1 - 2016-05-05
 * https://www.github.com/plummera/Excellency//
* Copyright (c) 2016 Anthony T. Plummer; Unlicensed for the free! */
var container = document.getElementById('container');
var loader = document.getElementById('loader');
var circleL = document.getElementById('circleL');
var circleR = document.getElementById('circleR');
var jump = document.getElementById('jump');
var jumpRef = jump.cloneNode();

loader.appendChild(jumpRef);

TweenMax.set([container, loader], {
	position: 'absolute',
	top:'50%',
	left: '50%',
	xPercent: -50,
	yPercent: -50
})

TweenMax.set(jumpRef, {
	transformOrigin: '50% 110%',
	scaleY: -1,
	alpha: 0.05
})

var tl = new TimelineMax({
	repeat: -1,
	yoyo: false
});

tl.timeScale(3);

tl.set([jump, jumpRef], {
	drawSVG: '0% 0%'
})
.set([circleL, circleR], {
	attr: {
		rx: 0,
		ry: 0,
	}
})
.to([jump, jumpRef], 0.4, {
	drawSVG: '0% 30%',
	ease: Linear.easeNone
})
.to(circleL, 2, {
	attr: {
		rx: '+=30',
		ry: '+=10'
	},
	alpha: 0,
	ease: Power1.easeOut
}, '-=0.1')
.to([jump, jumpRef], 1, {
	drawSVG: '50% 80%',
	ease: Linear.easeNone
}, '-=1.9')
.to([jump, jumpRef], 0.7, {
	drawSVG: '100% 100%',
	ease: Linear.easeNone
}, '-=0.9')
.to(circleR, 2, {
	attr: {
		rx: '+=30',
		ry: '+=10'
	},
	alpha: 0,
	ease: Power1.easeOut
}, '-=.5')

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
