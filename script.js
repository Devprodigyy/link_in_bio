
gsap.to("#loader",{
    top:"-100vh",
    delay:5,
    duration:0.5,
})

Shery.imageEffect(".images", {
  style: 2,
  config: {
    resolutionXY: { value: 100 },
    distortion: { value: true },
    mode: { value: -3 },
    mousemove: { value: 0 },
    modeA: { value: 1 },
    modeN: { value: 0 },
    speed: { value: 1, range: [-500, 500], rangep: [-10, 10] },
    frequency: { value: 50, range: [-800, 800], rangep: [-50, 50] },
    angle: { value: 0.5, range: [0, 3.141592653589793] },
    waveFactor: { value: 1.4, range: [-3, 3] },
    color: { value: 10212607 },
    pixelStrength: { value: 3, range: [-20, 100], rangep: [-20, 20] },
    quality: { value: 5, range: [0, 10] },
    contrast: { value: 1, range: [-25, 25] },
    brightness: { value: 1, range: [-1, 25] },
    colorExposer: { value: 0.18, range: [-5, 5] },
    strength: { value: 0.2, range: [-40, 40], rangep: [-5, 5] },
    exposer: { value: 8, range: [-100, 100] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 1.9968520461699895 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 0 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 3 } },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
  //   debug: true,
  gooey: true,
});



var open = document.querySelector("#openmenu");

open.addEventListener("click", function () {
  gsap.to("#menubox", {
    x: 600,
    duration:0.8,
  });
  open.style.cursor = "none";
});


var cl = document.querySelector("#menuclose");

cl.addEventListener("click", function () {
  gsap.to("#menubox", {
    x: -600,
    duration:1.8,
  });
  open.style.cursor = "auto";

});


Shery.makeMagnet(".magnet" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });


var info =document.querySelector("#info");

info.addEventListener("mousemove", function () {
    Shery.textAnimate(".textmove" /* Element to target.*/, {
        //Parameters are optional.
        style:2 ,
        y: 10,
        delay: 0.1,
        duration: 0.5,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        multiplier: 0.2,
      });
});