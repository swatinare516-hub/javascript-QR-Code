gsap.registerPlugin(ScrollTrigger);


gsap.to(".reveal", {
  opacity: 1,
  y: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out"
});


gsap.to(".container2", {
  xPercent: -400,
  ease: "none",
  scrollTrigger: {
    trigger: ".container2",
    start: "top top",
    end: "+=400%",
    scrub: 1,
    pin: true
  }
});

gsap.to(".reveal-left", {
  x: 0,
  opacity: 1,
  duration: 1,
  ease: "power3.out",
  delay: 1
});

const waveText = document.querySelector(".wave-text");


const text = waveText.innerText;
waveText.innerHTML = "";

text.split("").forEach(char => {
  const span = document.createElement("span");
  span.innerText = char === " " ? "\u00A0" : char;
  waveText.appendChild(span);
});


gsap.fromTo(".wave-text span",
  { y: 0 },
  {
    y: -20,
    duration: 0.6,
    stagger: {
      each: 0.05,
      repeat: -1,
      yoyo: true
    },
    ease: "sine.inOut"
  }
);


const headerTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });


headerTimeline.from(".header", {
  y: -100,
  opacity: 0,
  duration: 1
});


headerTimeline.from(".header h2", {
  opacity: 0,
  y: -20,
  duration: 0.6
}, "-=0.5"); 


headerTimeline.from(".links a", {
  opacity: 0,
  y: -20,
  stagger: 0.2,
  duration: 0.6
}, "-=0.4"); 


headerTimeline.from(".links button", {
  opacity: 0,
  y: -20,
  duration: 0.6
}, "-=0.4");