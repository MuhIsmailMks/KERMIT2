document.addEventListener("DOMContentLoaded", () => {
 
    // hero
    // const triggerElement = window.innerWidth < 1024 ? '.about' : '.hero_section';
    // const xElementHero = window.innerWidth < 1024 ? '20vw' : '50vw';

    // gsap.fromTo('.plane_animation', { x: xElementHero, }, {
    //     x: "-60vw", ease: "none", scrollTrigger: {
    //         trigger: triggerElement,
    //         start: "0% 100%",
    //         end: "100% 50%", 
    //         scrub: 5,
    //     }
    // });

 

    // hero
    gsap.fromTo('.hero_content', 
        {  y: '0vw'},  
        {   
            y: "-20vw", 
            ease: "none", 
            scrollTrigger: {
                trigger: "#about",
                start: "0% 100%", 
                end: "100% 100%",  
                scrub: 4,  
            }
        }
    );
 

    // how to buy
    gsap.fromTo('.howItem1', 
        { x: '-50vw' , y: '-20vw'},  
        { 
            x: "0vw",  
            y: "0vw", 
            ease: "none", 
            scrollTrigger: {
                trigger: ".how-buy__wrap",
                start: "0% 100%", 
                end: "100% 100%",  
                scrub: 2,  
            }
        }
    );
 
    gsap.fromTo('.howItem2', 
        { x: '50vw' , y: '-20vw'},  
        { 
            x: "0vw",  
            y: "0vw", 
            ease: "none", 
            scrollTrigger: {
                trigger: ".how-buy__wrap",
                start: "0% 100%", 
                end: "100% 100%",  
                scrub: 2,  
            }
        }
    );

    gsap.fromTo('.howItem3', 
        { x: '-50vw' , y: '20vw'},  
        { 
            x: "0vw",  
            y: "0vw", 
            ease: "none", 
            scrollTrigger: {
                trigger: ".how-buy__wrap",
                start: "0% 100%", 
                end: "100% 100%",  
                scrub: 2,  
            }
        }
    );

    gsap.fromTo('.howItem4', 
        { x: '50vw' , y: '20vw'},  
        { 
            x: "0vw",  
            y: "0vw", 
            ease: "none", 
            scrollTrigger: {
                trigger: ".how-buy__wrap",
                start: "0% 100%", 
                end: "100% 100%",  
                scrub: 2,  
            }
        }
    );
    

    // nomics
    gsap.fromTo('.tokenomics__wrap', 
        {  y: '0vw'},  
        {   
            y: "-20vw", 
            ease: "none", 
            scrollTrigger: {
                trigger: ".tokenomics",
                start: "80% 100%", 
                end: "100% 100%",  
                scrub: 5,  
            }
        }
    );

    gsap.fromTo('.contract_content', 
        { opacity: "0%" }, 
        { 
            opacity: "100%",  
            ease: "none", 
            scrollTrigger: {
                trigger: '#contract',
                start: "100% 100%",  
                end: "100% 100%", 
                scrub: 2, 
            }
        }
    );
    

});