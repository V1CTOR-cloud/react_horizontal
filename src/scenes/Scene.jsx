import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import "../styles.css";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const pixelsPause = 300;
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          start: `top+=${pixelsPause} top`,
          end: () => "+=" + window.innerWidth * panels.length,
          markers: { startColor: "fuchsia", endColor: "fuchsia", indent: 200 },
        },
      });
      ScrollTrigger.create({
        trigger: slider.current,
        end: () => "+=" + (window.innerWidth * panels.length + pixelsPause),
        markers: true,
        pin: true,
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div className="App" ref={component}>
      <div className="firstContainer">
        <h1>Testing horizontal scrolling w/ three sections</h1>
        <h2>First Container</h2>
      </div>
      <div ref={slider} className="container">
        <div className="description panel blue">
          <div>
            SCROLL DOWN
            <div className="scroll-down">
              <div className="arrow"></div>
            </div>
          </div>
        </div>
        <div className="panel red">ONE</div>
        <div className="panel orange">TWO</div>
        <div className="panel purple">THREE</div>
      </div>
      <div className="lastContainer">Last Container</div>
    </div>
  );
}
