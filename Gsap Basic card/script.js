gsap.from(".card-container .card:nth-child(even)", {
  opacity: 0,
  y: "50px",
  duration: 1,
  stagger: 0.5,
  delay: 1.2
});


gsap.from(".card-container .card:nth-child(odd)", {
  opacity: 0,
  y: "-50px",
  duration: 1,
  stagger: 0.6
});


gsap.to(".loader-container .box", {
  rotate: 360,
  repeat: -1,
  duration: 1,
});


gsap.from(".page1 .box1", {
  opacity: 0,
  y: "100px",
  
  rotate: 360,
  stagger: 0.5,
  borderRadius: "50%",
  scrollTrigger: {
    trigger: ".page1 .box1",
    scroller: "body",
    start: "top 70%",
    end: "-300",
    markers: true,
    scrub: 3
  }
});