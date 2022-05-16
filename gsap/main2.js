let t1 = gsap.timeline();

t1.from(".whoami", {
  opacity: 0,
  xPercent: -100,
  delay: 0.5,
  duration: 1,
  ease: "power1.out",
  yoyo: true,
});

t1.from(
  ".question-mark",
  {
    opacity: 0,
    yPercent: 100,
    delay: 0.5,
    repeatDelay: 1,
    duration: 1,
    ease: "power1.out",
  },
  0.01
);

t1.to(".question-mark", { x: -100, duration: 0.5, ease: "power1.out" });

t1.to(".whoami", {
  opacity: 0,
  xPercent: -100,
  duration: 0.5,
  ease: "power1.out",
  yoyo: true,
});

t1.to(".question-mark", { opacity: 0, duration: 3, ease: "expo.out" }, 5);

t1.to(".cover", { xPercent: -100, duration: 0.1, ease: "power1.out1" }, 5);

t1.to(".video-wrapper", { delay: 5 });
