import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import Scene from "./scenes/Scene";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Scene />
    </div>
  );
}
