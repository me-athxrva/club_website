var loader = document.getElementsByClassName('pg_loader')[0];
loader.style.height = '5000px';
loader.style.width = '5000px';

window.addEventListener("DOMContentLoaded",function() {
    gsap.to('.pg_loader',{
        height: '0px',
        width: '0px',
        duration: 1.5,
        delay: 0.5,
        ease: 'power1.inOut', 
        onComplete: () => {
            gsap.set('pg_loader',{
                height: '0px',
                width: '0px',
                
            });
            animation_subpage();
        }
    });
});

function animation_subpage(){
};