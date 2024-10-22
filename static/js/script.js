var web_p = document.querySelectorAll("html")[0];

web_p.style.height = "100vh";
web_p.style.overflow = "hidden";

document.addEventListener("DOMContentLoaded", function () {
  gsap.to(".loader_img", {
    display: "none",
    duration: 0.25,
    delay: 0.25,
    ease: "none",
    onComplete: () => {
      gsap.to(".preloader", {
        y: "-100%",
        borderRadius: "10% 10% 45% 45% / 0% 0% 25% 25%",
        duration: 1,
        delay: 0.5,
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
  }, 1350);
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
