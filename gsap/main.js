let t1 = gsap.timeline({ paused: true });

//First page
const menuBtn = document.querySelector(".menu-div");
const exitBtn = document.querySelector(".exit");

t1.to(".menu", { opacity: 1, duration: 1, top: 0, ease: Power2.easeInOut }, 6);
menuBtn.addEventListener("click", () => {
  t1.play().timeScale(1);
});

t1.to(
  ".nav",
  {
    opacity: 1,
    marginBottom: 0,
    duration: 1,
    ease: Power2.easeInOut,
    stagger: 0.3,
  },
  ">-0.5"
);
exitBtn.addEventListener("click", () => {
  t1.timeScale(1.5);
  t1.reverse();
});
