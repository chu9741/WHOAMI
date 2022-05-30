import React from "react";
import styled from "styled-components";

import imgContact from "../assets/Images/Contact.png";

const BackgroundSection = styled.section`
  background-image: url(${imgContact});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
`;

const Section = styled.section`
  background-color: ${(props) => `rgba(255,255,255, 0.1)`};

  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;
`;

const Title = styled.h1`
  margin-top: 3%;
  font-size: 100px;
  font-family: "Source Serif Pro", serif;
  color: white;
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
`;

const Contact = () => {
  return (
    <BackgroundSection>
      <Section className="Contact">
        <Title
          data-scroll
          data-scroll-speed="-1"
          data-scroll-direction="vertical"
        >
          Contact Us
        </Title>
      </Section>
      <img src={imgContact} alt="" />
    </BackgroundSection>
  );
};

export default Contact;
