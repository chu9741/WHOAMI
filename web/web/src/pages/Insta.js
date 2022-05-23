import React from "react";
import styled from "styled-components";

import "../styles/fonts.css";

const Section = styled.section`
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
  font-size: 40px;
  font-family: "Oleo Script Swash Caps", cursive;
  font-weight: 300;

  color: ${(props) => props.theme.text};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;
`;

const Left = styled.div`
  width: 30%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
  z-index: 5;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 25px;
    font-weight: 300;
    width: 80%;
    margin 0 auto;

  }
`;

const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;

  background-color: ${(props) => props.theme.grey};
  width: 65%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
`;
const Insta = () => {
  return (
    <Section>
      <Title data-scroll data-scroll-speed="-1">
        Instagram
      </Title>
      <Left>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur.
        </p>
      </Left>
      <Right>
        <h1>img</h1>
        <h1>img</h1>
        <h1>img</h1>
        <h1>img</h1>
        <h1>img</h1>
      </Right>
    </Section>
  );
};

export default Insta;
