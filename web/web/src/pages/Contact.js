import React from "react";
import styled from "styled-components";

import imgdesigner from "../assets/Images/designer.png";
import imgdeveloper from "../assets/Images/coding.png";
import imgleader from "../assets/Images/leader.png";

import imgSrc1 from "../assets/Images/imgSrc1.png";
import img1 from "../assets/Images/Image2.jpg";
import frame3 from "../assets/Images/frame3.png";
const BackgroundSection = styled.section`
  background-image: url(${img1});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
`;

const Section = styled.section`
  background-color: ${(props) => `rgba(255,255,255, 0.3)`};

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

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
`;

const Container = styled.div`
  margin-top: 20%;
  width: 100%;
  display: flex;
  align-tiems: center;
  justify-content: space-around;
  flex-direction: row;
`;

const Item = styled.div`
  width: 338px;
  background-image: url(${frame3});
  background-size: 101%;
  background-position: center;
  background-attachment: fixed;
  overflow: hidden;
  color: black;
  height: 195px;
  //background-color: rgba(5, 2, 1, 1);
  background-color: rgba(245, 232, 201, 1);
  border-radius: 5px;

  display: flex;
`;

const LeftContainer = styled.div`
  margin-top: 5%;
  margin-left: 5%;
  width: 30%;
  height: 70%;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  background-color: transparent;
  z-index: 5;
`;

const Right = styled.div`
  width: 100%;

  //background-color: transparent;
`;

const Position = styled.p`
  font-size: 20px;
  margin-top: 10%;
  margin-left: 30%;
  height: 30%;
  width: 100%;
  font-color: white;
  background-color: transparent;
`;
const Name = styled.p`
  font-size: 20px;
  margin-top: 10%;
  margin-left: 30%;
  height: 30%;
  font-color: white;

  background-color: transparent;
`;

const Email = styled.p`
  font-size: 15px;
  margin-top: 0%;
  background-color: transparent;
  margin-left: 5%;
  margin-right: 5%;
  font-color: white;
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

        <Container
          data-scroll
          data-scroll-speed="2"
          data-scroll-direction="vertical"
        >
          <Item>
            <LeftContainer>
              <img src={imgleader} alt="" />
            </LeftContainer>
            <Right>
              <Position>Team Manager</Position>
              <Name>Shin Ye Ji</Name>
              <Email>e-mail : aaaa@ajou.ac.kr</Email>
            </Right>
          </Item>
          <Item>
            <LeftContainer>
              <img src={imgdesigner} alt="" />
            </LeftContainer>
            <Right>
              <Position>Designer</Position>
              <Name>Park Hyo Joo</Name>
              <Email>e-mail : aaaa@ajou.ac.kr</Email>
            </Right>
          </Item>
          <Item>
            <LeftContainer>
              <img src={imgdeveloper} alt="" />
            </LeftContainer>
            <Right>
              <Position>Web Developer</Position>
              <Name>Choi Hyun Uk</Name>
              <Email>e-mail : chu9741@ajou.ac.kr</Email>
            </Right>
          </Item>
        </Container>
      </Section>
      <img src={imgSrc1} alt="" />
    </BackgroundSection>
  );
};

export default Contact;
