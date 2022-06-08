import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Theme";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { AnimatePresence } from "framer-motion";

import About from "./pages/About";
import Home from "./pages/Home";
import Insta from "./pages/Insta";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import Contact from "./pages/Contact";
import About2 from "./pages/About2";
import About3 from "./pages/About3";
import Last from "./pages/Last";

function App() {
  const containerRef = useRef(null);
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            smartphone: { smooth: true },
            tablet: { smooth: true },
          }}
          watch={[]}
          containerRef={containerRef}
        >
          <ScrollTriggerProxy />
          <AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
              <Home />
              <About />
              <About2 />
              <About3 />
              <Insta />
              <Contact />
              <Last />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}
export default App;
