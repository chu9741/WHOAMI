import { ThemeProvider } from "styled-components";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Theme";
import { useRef } from "react";
import { AnimatePresence } from "framer-motion";

import About from "./pages/About";
import Home from "./pages/Home";
import Insta from "./pages/Insta";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";

function App() {
  const containerRef = useRef(null);
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{ smooth: true }}
          watch={[]}
          containerRef={containerRef}
        >
          <ScrollTriggerProxy />
          <AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
              <Home />
              <About />
              <Insta />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}
export default App;
