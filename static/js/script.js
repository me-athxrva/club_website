var web_p = document.querySelectorAll('html')[0];

web_p.style.height = '100vh';
web_p.style.overflow = 'hidden';

document.addEventListener("DOMContentLoaded", function() {
    gsap.to('.loader_img',{
        display: "none",
        duration: .25,
        delay: 0.25,
        ease: "none",
        onComplete: () => {
            gsap.to('.preloader',{
                y: '-100%',
                borderRadius: '10% 10% 45% 45% / 0% 0% 25% 25%',
                duration: 1,
                delay: 0.5,
                ease: "power1.inOut",
                onComplete: () => {
                    gsap.set('.preloader',{
                        display: 'none'
                    });
                    gsap.set(web_p,{
                        height: 'auto',
                        overflow: 'visible',
                    });
                    animations();
                },
            });
        },
    });
});

function animations() {
    // animation for navbar
    gsap.to('.navbar', {
        y: '100px',
        duration: 0.5,
        delay: 0.2,
        ease: 'power1.inOut',
    });  

    // next animation from here
    gsap.fromTo('.welcome',{
        opacity: 0,
    },{
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
        ease: 'power2.inOut',
    });
    
    gsap.to('.bashcraft h1:nth-child(1)',{
        opacity: 1,
        duration: 0.5,
        delay: 0.8,
        ease: 'power1.inOut',
    });

    gsap.fromTo('.bashcraft h1',{
        y: 0,
    },{
        y: '-100%',
        duration: 0.8,
        delay: 2,
        ease: 'power1.inOut',
    });
};