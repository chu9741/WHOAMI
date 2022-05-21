import React from "react";
import styled from "styled-components";
import MainVideo from "../assets/bg_cut.mp4";
import "../styles/fonts.css";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
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

const Title = styled.div`
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
    font-family: "Playfair Display", seirf;
    font-size: 20px;
    font-weight: 200;
    text-shadow: 2px 2px 2px ${(props) => props.theme.body};
  }
`;

const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkOverlay />
      <Title>
        <div>
          <h1 data-scroll data-scroll-delay="0.13" data-scroll-speed="4">
            J
          </h1>
          <h1 data-scroll data-scroll-delay="0.09" data-scroll-speed="4">
            e
          </h1>
          <h1 data-scroll data-scroll-delay="0.05" data-scroll-speed="4">
            n
          </h1>
          <h1 data-scroll data-scroll-delay="0.03" data-scroll-speed="4">
            a
          </h1>
        </div>
        <h2 data-scroll data-scroll-delay="0.03" data-scroll-speed="2">
          forever nineteen
        </h2>
      </Title>

      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
