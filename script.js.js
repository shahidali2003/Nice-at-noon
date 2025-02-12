gsap.to(".calm1 img",{
    transform: "translateX(-380%)",
    scrollTrigger:{
        trigger:".images",
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true,
    }
})

gsap.from(".con-text h1",{
    opacity: 0,
    y:20,
    duration:0.7,
    stagger:0.3,
    scrollTrigger:{
        trigger:".con-text h1",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 80%",
        scrub:4,
    }
})

gsap.from(".part1 h1",{
    opacity: 0,
    y:60,
    duration:0.7,
    stagger:0.4,
   
})
