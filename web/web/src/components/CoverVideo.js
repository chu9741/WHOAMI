import React from "react";
import styled from "styled-components";
import MainVideo from "../assets/bg_cut.mp4";
import "../styles/fonts.css";
import { motion } from "framer-motion";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;

  //   @media (max-width: 48em) {
  //     object-position: center 10%;
  //   }
  // }
  // @media (max-width: 30em) {
  //   object-position: center 50%;
  // }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.5)`};
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-family: "Oleo Script Swash Caps", cursive;
    font-size: 100px;
    text-shadow: 2px 2px 2px ${(props) => props.theme.body};
  }
  h2 {
    font-family: "Playfair Display", serif;
    font-size: 20px;
    font-weight: 200;
    text-shadow: 2px 2px 2px ${(props) => props.theme.body};
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { delayChildren: 1, staggerChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkOverlay />
      <Title variants={container} initial="hidden" animate="show">
        <div>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.11"
            data-scroll-speed="4"
          >
            J
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.10"
            data-scroll-speed="4"
          >
            e
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.09"
            data-scroll-speed="4"
          >
            n
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.08"
            data-scroll-speed="4"
          >
            a
          </motion.h1>
        </div>
        <motion.h2 data-scroll data-scroll-delay="0.07" data-scroll-speed="3">
          forever nineteen
        </motion.h2>
      </Title>

      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
