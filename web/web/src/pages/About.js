import React from "react";
import styled from "styled-components";

import "../styles/fonts.css";
import img1 from "../assets/Images/Image1-1.png";
import img2 from "../assets/Images/Image2.png";
import img3 from "../assets/Images/Image3.png";

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

  // @media (max-width: 48em) {
  //   width: 90vw;
  // }
  // @media (max-width: 30em) {
  //   width: 100vw;
  // }
`;
const TitleText = styled.p`
  font-size: 30px;
  font-family: "Playfair Display", serif;
  color: rgb(224, 179, 210);
  margin-left: 0%;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 85px;
  font-family: "Playfair Display", serif;
  margin-top: 15%;
  position: absolute;
  color: rgb(224, 179, 210);
  top: 1rem;
  left: 0%;
  margin-left: 7%;
  z-index: 5;

  // @media (max-width: 64em) {
  //   top: 0;
  //   left: 0;
  // }
  // @media (max-width: 48em) {
  //   width: 90vw;
  // }
`;
const SubTitle = styled.h1`
  font-size: 120px;
  font-family: "Playfair Display", serif;
  //background-color: red;
  position: abolute;
  left: 0%;
  top: 1rem;
  padding-top: 2rem;
  padding-left: 8rem;
  margin-left: 0%;
  text-align: right;

  color: rgb(238, 238, 238);
  position: absolute;
`;
const Left = styled.div`
  width: 50%;
  font-size: 17px;
  position: relative;
  font-family: "Noto Sans KR", sans-serif;
  color: rgb(224, 179, 210);
  margin-left: 0%;
  margin-right: 7%;
  margin-top: 45%;
  z-index: 5;

  // @media (max-width: 64em){
  //   width: 80%;
  //   position: absolute;
  //   top:50%;
  //   left:50%;
  //   transform: translate(-50%, -50%) !important;
  //   margin: 0 auto;

  //   padding 2rem;
  //   color:black;
  //   backdrop-filter: blur(2px);
  //   background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.4)`};
  //   border-radius: 20px;
  // }

  // @media (max-width: 30em){

  //   width: 70%;
  // }
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
    border-radius: 10px;
  }
  .small-img-2 {
    position: absolute;
    left: 80%;
    bottom: 30%;
    width: 40%;
    border-radius: 10px;
  }

  // @media (max-width: 64em) {
  //   width: 100%;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   img {
  //     object-fit: cover;
  //   }
  //   .small-img-1 {
  //     width: 30%;
  //     height: auto;
  //     left: 5%;
  //     bottom: 40%;
  //   }
  //   .small-img-2 {
  //     width: 30%;
  //     height: auto;
  //     left: 60%;
  //     bottom: 30%;
  //   }
  // }
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
            <TitleText>"I'll always be with you..."</TitleText>
          </Title>
          UN-JENA
        </SubTitle>

        <Left>
          ???????????? ?????? ?????? ?????????????????? ????????? ?????? ????????????.
          <br />
          <br />
          JENA??? ?????????????????? ????????????.
          <br />
          <br />
          UN ???????????? ????????? ???????????? ?????????????????? ????????? ?????????
          <br />
          <br />
        </Left>

        <Right>
          <img src={img1} alt="About Jena" />
          <img
            data-scroll
            data-scroll-speed="3"
            src={img2}
            className="small-img-1"
            alt="About Jena"
          />
          <img
            data-scroll
            data-scroll-speed="-2"
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
