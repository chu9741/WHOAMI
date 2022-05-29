import React from "react";
import styled from "styled-components";

import "../styles/fonts.css";
import img1 from "../assets/Images/Image1-1.png";
import img2 from "../assets/Images/Image2.jpg";
import img3 from "../assets/Images/Image3.jpg";

const BackgroundSection = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: white;
`;
const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;
  background-color: white;
  display: flex;

  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 100px;
  font-family: "Roboto", sans-serif;
  margin-top: 13%;
  position: absolute;
  color: rgb(224, 179, 210);
  top: 1rem;
  left: 0%;
  margin-left: 7%;
  z-index: 5;
`;
const SubTitle = styled.h1`
  font-size: 120px;
  font-family: "Roboto", sans-serif;
  //background-color: red;
  position: abolute;
  left: 0%;
  top: 1rem;
  padding-top: 2rem;
  padding-left: 10rem;
  margin-left: 0%;
  text-align: right;

  color: rgb(238, 238, 238);
  position: absolute;
`;
const Left = styled.div`
  width: 50%;
  font-size: 20px;
  position: relative;
  font-family: "Noto Sans KR", sans-serif;

  margin-left: 0%;
  margin-right: 2%;
  margin-top: 45%;
  z-index: 5;
`;
const Right = styled.div`
  width: 50%;
  position: relative;

  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    position: absolute;
    right: 95%;
    bottom: 10%;
    width: 40%;
  }
  .small-img-2 {
    position: absolute;
    left: 80%;
    bottom: 30%;
    width: 40%;
  }
`;

const About = () => {
  return (
    <BackgroundSection className="About">
      <Section>
        <SubTitle
          data-scroll
          data-scroll-speed="-1"
          data-scroll-direction="horizontal"
        >
          <Title
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            UN-JENA
          </Title>
          UN-JENA
        </SubTitle>

        <Left>
          “언제나 너의 곁에 있을게”라는 의미를 담은 이름이다.
          <br />
          <br />
          JENA는 영어이름처럼 사용한다.
          <br />
          <br />
          UN 접두사를 활용해 ‘사람이 아닌’이라는 의미도 담았다
          <br />
          <br />
        </Left>

        <Right>
          <img src={img1} alt="About Jena" />
          <img
            data-scroll
            data-scroll-speed="4"
            src={img2}
            className="small-img-1"
            alt="About Jena"
          />
          <img
            data-scroll
            data-scroll-speed="-3"
            src={img3}
            alt="About Jena"
            className="small-img-2"
          />
        </Right>
      </Section>
    </BackgroundSection>
  );
};

export default About;
