import React from "react";
import styled from "styled-components";

import "../styles/fonts.css";
import img4 from "../assets/Images/Image4.png";
import img5 from "../assets/Images/Image5.png";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 90vw;

  background-color: white;
  display: flex;

  margin: 0 auto;
  @media (max-width: 48em) {
    width: 90vw;
  }
  @media (max-width: 30em) {
    width: 100vw;
  }
`;

const Title = styled.h1`
  font-size: 85px;
  font-family: "Playfair Display", serif;
  margin-top: 12%;
  position: absolute;
  color: rgb(224, 179, 210);
  top: 1rem;
  left: 0%;
  margin-left: 3%;
  z-index: 5;

  @media (max-width: 64em) {
    top: 30;
    left: 0;
    margin-top: 12%;
    padding-left: 0;
    font-size: 30px;
    //background-color: red;
  }
  @media (max-width: 48em) {
    width: 90vw;
  }
`;
const SubTitle = styled.h1`
  font-size: 100px;
  font-family: "Playfair Display", serif;
  //background-color: red;
  position: abolute;
  left: 0%;
  top: 1rem;
  padding-top: 2rem;
  padding-left: 7rem;
  margin-left: 0%;
  text-align: left;

  color: rgb(238, 238, 238);
  position: absolute;

  @media (max-width: 64em) {
    top: 10;
    left: 0;
    padding-left: 0;
    font-size: 40px;
    //background-color: red;
  }
  @media (max-width: 48em) {
    width: 90vw;
  }
`;
const Left = styled.div`
  width: 50%;
  //background-color: red;
  margin-left: 2%;
  margin-right: 7%;
  //top: 30%;
  z-index: 5;

  @media (max-width: 64em){
    width: 80%;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;

    padding 2rem;
    //padding-bottom: 4rem;
    background-color: pink;
    color:black;
    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.4)`};
    border-radius: 20px;
  }

  @media (max-width: 30em){
    
    width: 70%;
  }


`;
const Right = styled.div`
  width: 50%;
  position: relative;
  //background-color: blue;
  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    position: absolute;
    right: 65%;
    bottom: 14%;
    width: 47%;
    border-radius: 5px;
    z-index: 5;
  }
  .small-img-2 {
    position: absolute;
    left: 16%;
    top: 2%;
    width: 80%;
    border-radius: 5px;
  }

  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      object-fit: cover;
    }
    .small-img-1 {
      width: 30%;
      height: auto;
      left: 5%;
      bottom: 40%;
    }
    .small-img-2 {
      width: 30%;
      height: auto;
      left: 60%;
      bottom: 30%;
    }
  }
`;

const Text = styled.div`
  font-size: 17px;
  position: relative;
  font-family: "Noto Sans KR", sans-serif;
  color: rgb(224, 179, 210);
  top: 66%;
`;

const About3 = () => {
  return (
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
          Highteen
        </Title>
        Highteen
      </SubTitle>

      <Left>
        <Text>
          제나는 언제나 19살이다.
          <br />
          3월 5일생
          <br />
          ESFP
          <br />
          AB형
          <br />
          하이틴과 레트로 감성에 빠져있다.
          <br />
          SNS를 활용해 사람들과 소통을 즐긴다.
          <br />
        </Text>
      </Left>

      <Right>
        <img
          data-scroll
          data-scroll-speed="0.5"
          data-scroll-direction="horizontal"
          src={img5}
          className="small-img-1"
          alt="About Jena"
        />
        <img
          data-scroll
          data-scroll-speed="-0.5"
          data-scroll-direction="horizontal"
          src={img4}
          alt="About Jena"
          className="small-img-2"
        />
      </Right>
    </Section>
  );
};

export default About3;
