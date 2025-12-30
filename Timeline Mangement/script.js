const tl = gsap.timeline({ paused: true });

const icon = document.querySelector(".header i");
const closeIcon = document.querySelector(".menu-header i");



tl.from(".menu", {
    opacity: 0,
    x: 300,
    duration: 0.5
})

.from(".menu-header h2", {
    opacity: 0,
    x: -100
})

.from(".menu-header i", {
    opacity: 0,
    x: 100
})
.from(".nav-links a", {
    opacity: 0,
    x: 50,
    stagger: 0.25
})
.from(".nav-links button", {
    opacity: 0,
    y: 50
});

icon.addEventListener("click", () => {
    tl.play();
});

closeIcon.addEventListener("click", () => {
    tl.reverse();
});