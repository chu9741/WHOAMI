import React from "react";
import styled from "styled-components";

import "../styles/fonts.css";
import img1 from "../assets/Images/Image1-1.png";
import img2 from "../assets/Images/Image2.jpg";
import img3 from "../assets/Images/Image3.jpg";

const BackgroundSection = styled.section`
  position: relative;
  width:100%;
  background-color: rgb(255, 234, 221);
`
const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;
  background-color: rgb(255, 234, 221);
  display: flex;

  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 100px;
  font-family: "Source Serif Pro", serif;

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
`;

const Left = styled.div`
  width: 50%;
  font-size: 30px;
  position: relative;
  margin-left: 2%;
  margin-top: 20%;
  z-index: 5;
`;
const Right = styled.div`
  width: 50%;
  position: relative;

  img {
    width: 100%;
    height: auto;
  }

  .small-img-1{
    position: absolute;
    right:95%;
    bottom:10%;
    width:40%;
  }
  .small-img-2{
    position: absolute;
    left:80%;
    bottom:30%;
    width:40%;
  }

`;

const About = () => {
  return (
    <BackgroundSection>
    <Section>
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About Jena
      </Title>

      <Left>
        Hello, My name is Jena.
        <br /> I'm 19 years old. <br /> Welcome to my website!
      </Left>

      <Right>
        <img src={img1} alt="About Jena" />
        <img 
        data-scroll 
        data-scroll-speed="4"
          src={img2}
          className="small-img-1"
          alt="About Jena" />
        <img 
        data-scroll 
        data-scroll-speed = '-3'
          src={img3}
          alt="About Jena"
          className="small-img-2" />
      </Right>
    </Section>
    </BackgroundSection>
  );
};

export default About;
