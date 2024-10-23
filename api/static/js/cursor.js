var cursor = document.getElementsByClassName('cursor')[0];

window.addEventListener("mousemove", function(e){

    const posX = e.clientX;
    const posY = e.clientY;
    cursor.animate({
        left: `${posX}px`,
        top: `${posY}px`},
        {duration: 250, fill: "forwards"});
});

function on_enter(color) {
    gsap.to('.cursor',{
        backgroundColor: color,
        height: '0px',
        width: '0px',
        duration: .2,
        ease: 'power1.inout',
    });
}

function on_exit(color) {
    gsap.to('.cursor',{
        backgroundColor: color,
        height: '20px',
        width: '20px',
        duration: .2,
        ease: 'none',
    });
}