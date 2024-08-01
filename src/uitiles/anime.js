import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export const scaleAnime = (el, el2) => {
  gsap.to(el, {
    y: "-100%",
    duration: 2,
  });
  gsap.fromTo(el2, { scale: 1.5 }, { scale: 1, duration: 1.5, delay: 0.5 });
};
export const useFadeIn = (el) => {
  gsap.fromTo(
    el,
    {
      opacity: 0,
      scale: 1.4,
      y: 200,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "linear",
    }
  );
};
export const useFadeDown = (el) => {
  gsap.fromTo(
    el,
    {
      opacity: 0,
      y: 200,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "bounce",
      delay: 0.5,
    }
  );
};
export const useFadeUp = (el) => {
  gsap.fromTo(
    el,
    {
      opacity: 0,
      filter: "blur(3px)",
      y: 100,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      filter: "blur(0)",
      ease: "sine.out",
      stagger: 1,
    }
  );
};
export const useBlurEffect = (el) => {
  gsap.fromTo(
    el,
    {
      filter: "blur(2px)",
    },
    {
      filter: "blur(0)",
      scrollTrigger: {
        trigger: el,
        start: "center center",
        toggleActions: "play none none play",
      },
      ease: "sine.out",
      duration: 1,
    }
  );
};
export const useScrollTrigger = (el) => {
  gsap.fromTo(
    el,
    {
      opacity: 0,
      y: 200,
    },
    {
      scrollTrigger: {
        trigger: el,
        start: "top center",
        toggleActions: "play none none reverse",
      },
      stagger: {
        each: "0.3",
        ease: "linear",
        // from: "random",
      },
      opacity: 1,
      y: 0,
      duration: 1,
    }
  );
};
export const useScrollHorizontal = (el, startX, endX) => {
  gsap.fromTo(
    el,
    { x: startX },
    {
      scrollTrigger: {
        trigger: el,
        start: "center center",
        end: "+=500",
        toggleActions: "play none none reverse",
        scrub: 1,
      },
      x: endX,
      ease: "linear",
      duration: 2,
    }
  );
};
