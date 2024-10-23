var web_p = document.querySelectorAll("html")[0];

web_p.style.height = "100vh";
web_p.style.overflow = "hidden";

document.addEventListener("DOMContentLoaded", function () {
  gsap.set('.preloader text',{
    display: 'none',
    delay: 0.5,
    onComplete: () => {
      window.scrollTo(0, 0)
      gsap.fromTo(".preloader", {
        // clipPath: 'circle(100.0% at 0 0)',
        y: '0%',
      },{
        // clipPath: 'circle(0.0% at 0 0)',
        y: '-100%',
        duration: 1,
        delay: 1,
        ease: "power1.inOut",
        onComplete: () => {
          gsap.set(".preloader", {
            display: "none",
          });
          gsap.set(web_p, {
            height: "auto",
            overflow: "visible",
          });
        },
      });
    },
  });
  setTimeout(() => {
    animations();
  }, 1600);
});

function animations() {
  // first to execute
  gsap.fromTo(
    ".join_btn",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.5,
      delay: 0.2,
      ease: "power1.inOut",
    }
  );

  // second to execute
  gsap.fromTo(
    ".tagline p",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.5,
      delay: 0.3,
      ease: "power1.inOut",
    }
  );

  // third to execute
  gsap.to(".bashcraft h1:nth-child(1)", {
    opacity: 1,
    duration: 0.5,
    delay: 0.4,
    ease: "power1.inOut",
  });

  // fourth to execute
  gsap.fromTo(
    ".welcome",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.5,
      delay: 0.5,
      ease: "power2.inOut",
    }
  );

  // fifth to execute
  gsap.to(".navbar", {
    y: "100px",
    duration: 0.5,
    delay: 0.6,
    ease: "power1.inOut",
  });

  // sixth to execute
  gsap.fromTo(
    ".bashcraft h1",
    {
      y: 0,
    },
    {
      y: "-100%",
      duration: 0.8,
      delay: 1.2,
      ease: "power1.inOut",
    }
  );
}

// button click

function click_btn(link){
  gsap.to('.pg_loader',{
    height: '5000px',
    width: '5000px',
      duration: 1.5,
      delay: 0.5,
      ease: 'power1.inOut',
      onComplete: () => {
          location.href = link;
          setInterval(() => {
              gsap.set('.pg_loader',{
                  height: '0px',
                  width: '0px',
              });
          }, 500);
      },
  });
};
