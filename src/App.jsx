import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import './App.css';
gsap.registerPlugin(useGSAP, ScrollTrigger);
const App = () => {
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#main",
        markers: true,
        start: "50% 50%",
        end: "150% 50%",
        scrub: 2,
        pin: true,
      },
    });
    tl.to(
      "#center",
      {
        height: "100vh",
      },
      "a"
    )
      .to(
        "#top",
        {
          top: "-50%",
        },
        "a"
      )
      .to(
        "#bottom",
        {
          bottom: "-50%",
        },
        "a"
      )
      .to(
        "#top-h1",
        {
          top: "60%",
        },
        "a"
      )
      .to(
        "#bottom-h1",
        {
          bottom: "-30%",
        },
        "a"
      )
      .to(
        "#center-h1",
        {
          top: "-30%",
        },
        "a"
      )
      .to(".content", {
        delay: -0.2,
        marginTop: "0%",
      });
  });

  return (
    <div id="main">
      <div id="top">
        <h1 id="top-h1">Ayan</h1>
      </div>
      <div id="center">
        <div className="content">
          <h4>A Mernstack</h4>
          <h3>
            <i>Webdeveloper</i> the work that define a <i>movement</i> and created a
            craft.
          </h3>
          <div className="btn">
            <h5>Get Started</h5>
          </div>
          <h2>(17)</h2>
        </div>
      </div>
      <div id="bottom">
        <h1 id="bottom-h1">Ayan</h1>
      </div>
    </div>
  );
};
export default App;
