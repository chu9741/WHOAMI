import React from "react";
import styled from "styled-components";

import imgdesigner from "../assets/Images/designer.png";
import imgdeveloper from "../assets/Images/coding.png";
import imgleader from "../assets/Images/leader.png";

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
  width: 350px;
  height: 220px;
  background-color: orange;
  border-radius: 20px;
  border: 3px solid;
  display: flex;
`;

const LeftContainer = styled.div`
  margin-top: 5%;
  margin-left: 2%;
  width: 30%;
  height: 70%;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  z-index: 5;
`;

const Right = styled.div`
  margin-left: 20%;
  margin-top: 10%;
`;

const Position = styled.p`
font-size = 30px;
margin-top: 10%;
margin-left:10%;
`;
const Name = styled.p`font-size=20px;
margin-top: 10%;
margin-left:30%;`;
const Email = styled.p`font-size=20px;
margin-top:50%;`;
const Contact = () => {
  return (
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
            <Position>Team Leader</Position>
            <Name>Shin Ye Ji</Name>
            <Email>aaaa@ajou.ac.kr</Email>
          </Right>
        </Item>
        <Item>
          <LeftContainer>
            <img src={imgdesigner} alt="" />
          </LeftContainer>
          <Right>
            <Position>Team Leader</Position>
            <Name>Shin Ye Ji</Name>
            <Email>aaaa@ajou.ac.kr</Email>
          </Right>
        </Item>
        <Item>
          <LeftContainer>
            <img src={imgdeveloper} alt="" />
          </LeftContainer>
          <Right>
            <Position>Team Leader</Position>
            <Name>Shin Ye Ji</Name>
            <Email>aaaa@ajou.ac.kr</Email>
          </Right>
        </Item>
      </Container>
    </Section>
  );
};

export default Contact;
