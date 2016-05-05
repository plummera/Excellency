/*! Excellency - v0.1 - 2016-05-05
 * https://www.github.com/plummera/Excellency//
* Copyright (c) 2016 Anthony T. Plummer; Unlicensed for the free! */
// init controller
var controller = new ScrollMagic.Controller();

// create a scene
var scene = new ScrollMagic.Scene({
          triggerElement: "#trigger1"
        })
        .setTween("#animate1", 0.5, {backgroundColor: "green", scale: 2.5}) // trigger a TweenMax.to tween
        .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
        .addTo(controller);
