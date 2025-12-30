const t1 = gsap.timeline()

t1.from('.header',{
    opacity:0 ,
    y:-50, 
    duration: 0.5,
}).from('.header h2',{
    opacity:0 ,
    x:'-200px',
}).from('.header .Links a',{
    opacity:0,
    y:'30px',
    stagger:0.2,
}).from('.header .Links button',{
    opacity:0,
    x:'30px'
}).from('.homepage img',{

    opacity:0,
    y:'-60px',
}).from('.homepage .content h2',{
    opacity:0,
    x:'-100px',
    duration:0.5,
}).from('.homepage .content h3',{
    opacity:0,
    x:'100px',
}).from('.homepage .content p',{
    opacity:0,
    y:'30px',
    duration:0.5,
}).from('.about-us h2',{
    opacity:0,
    y:'-50px',
}).from('.about-us .card-container .card',{
    opacity:0,
    y:'30px',
    stagger:0.5,
})