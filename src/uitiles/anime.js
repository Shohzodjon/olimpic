import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const useFadeUp = (parent, child) => {
  gsap.fromTo(
    gsap.utils.toArray(child),
    {
      opacity: 0,
      y: 200,
    },
    {
      scrollTrigger: {
        trigger: parent,
        start: "top 60%",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "circ.out",
    }
  );
};

