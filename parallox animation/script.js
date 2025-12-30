gsap.to('.parallox-icon',{
    x:'70vw',
    y:'60vh',
    scale:1.15,
    rotate:360,
    scrollTrigger:{
        trigger:'.parallox-icon',
        start:'top top',
        end:'bottom bottom',
        scrub:3.0
    }
})