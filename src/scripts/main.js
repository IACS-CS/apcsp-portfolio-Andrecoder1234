import "../styles/styles.css";
// Add imports here
import Aos from "aos";
import "aos/dist/aos.css";  
import 'animate.css';
// This project uses Animate.css
// License: MIT License
// Copyright (c) 2014 Daniel Eden
// Full license text in LICENSE file.

console.log("What?");
console.log("Hello world, from main.js!");
if (typeof window !== "undefined") {
  // Put code that runs ONLY in the browser here -- this is most likely where
  // MOST of your code should go.
  
  console.log("Hello world, from main.js!");
  Aos.init();



  // If you see a SSR error, try moving your code here!
  console.log("Hello world, browser :-)");
}

import "@picocss/pico/css/pico.min.css";

