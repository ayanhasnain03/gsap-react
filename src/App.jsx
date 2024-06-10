import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP);
const App = () => {

  useGSAP(
    () => {
      gsap.set("svg", { opacity: 1 });

gsap.to(".ball", {
  keyframes: {
    "0%": { yPercent: 0, scaleX: 1, scaleY: 1 },
    "7%": { yPercent: 5, scaleY: 0.9, scaleX: 1.1, ease: "sine.in" },
    "25%": { yPercent: 100, scaleY: 1.15, scaleX: 0.9, ease: "sine.in" },
    "50%": { yPercent: 500, scaleX: 1, scaleY: 1, ease: "none" },
    "60%": { scaleX: 1.6, scaleY: 0.4, ease: "none" },
    "65%": { yPercent: 500, scaleX: 1, scaleY: 1 },
    "100%": { yPercent: 0, scaleX: 1, scaleY: 1 },
    easeEach: "sine.out"
  },
  duration: 1.5,
  repeat: -1,
  transformOrigin: "center bottom"
});

gsap.to(".shadow", {
  scale: 0.7,
  duration: 0.4,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  transformOrigin: "center"
});
    }
);


  return (
  <>
<div className="h-[100vh] w-[100vw] flex justify-center items-center overflow-hidden">
<svg viewBox="0 0 100 200" className="w-[70vw]max-w-[500px] max-h-[80vh] opacity-0">
  <ellipse className="shadow" cx="50" cy="188" rx="15" ry="5" />

  <circle className="ball text-[#88ce02]" cx="50" cy="22" r="15" />
</svg>
</div>

  </>
  )
}
export default App