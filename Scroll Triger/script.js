gsap.registerPlugin(ScrollTrigger);


gsap.to(".container1 h1", {
    x: "-180%",
    color: "blue",
    scrollTrigger: {
        trigger: ".container1 h1",
        scroller: "body",
        scrub: 3,
        start: "top top",
        end: "+=300",
        pin: true
    }
});


gsap.to(".container2", {
    x: "-400vw",
    scrollTrigger: {
        trigger: ".container2",
        scroller: "body",
        scrub: 3,
        start: "top top",
        end: "+=400%",
        pin: true,
        markers: true
    }
});