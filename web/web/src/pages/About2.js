import React from "react";
import styled from "styled-components";

import "../styles/fonts.css";
import smallVideo1 from "../assets/smallVideo1.mp4";
import smallVideo2 from "../assets/smallVideo2.mp4";

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

const Title = styled.h1`
  font-size: 70px;
  font-family: "Playfair Display", serif;
  margin-top: 9%;
  position: absolute;
  color: rgb(224, 179, 210);
  top: 1rem;
  left: 20%;
  //margin-left: 7%;
  z-index: 5;
  //background-color: pink;

  // @media (max-width: 64em) {
  //   top: 30;
  //   left: 0;
  //   margin-top: 12%;
  //   padding-left: 0;
  //   font-size: 30px;
  //   //background-color: red;
  // }
  // @media (max-width: 48em) {
  //   width: 90vw;
  // }
`;
const SubTitle = styled.h1`
  font-size: 80px;
  font-family: "Playfair Display", serif;
  position: abolute;
  top: 3rem;
  padding-top: 2rem;
  margin-right: 10%;

  margin-left: 5%;
  text-align: right;
  white-space: pre;

  color: rgb(238, 238, 238);
  position: absolute;

  // @media (max-width: 64em) {
  //   top: 10;
  //   left: 10;
  //   padding-left: 0;
  //   font-size: 40px;
  //   //background-color: red;
  // }
  // @media (max-width: 48em) {
  //   width: 90vw;
  // }
`;
const Text = styled.p`
  font-size: 18px;
  position: relative;
  font-family: "Noto Sans KR", sans-serif;
  color: rgb(224, 179, 210);
  text-align: right;
  margin-top: 80%;
`;
const Left = styled.div`
  width: 50%;
  position: relative;

  video {
    object-fit: contain;
  }

  .small-video1 {
    position: absolute;
    top: 60%;
    left: 25%;
    //right: 95%;
    //bottom: 10%;
    border-radius: 10px;
    width: 60%;
  }

  .small-video2 {
    position: absolute;
    //right: 95%;
    left: 7%;
    top: 8%;
    bottom: 50%;
    height: 50%;
    border-radius: 10px;
  }

  // @media (max-width: 64em) {
  //   width: 100%;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;

  //   .small-video-1 {
  //     width: 25%;
  //     height: auto;
  //     left: 10%;
  //     bottom: 40%;
  //     object-fit: contain;
  //   }
  //   .small-video-2 {
  //     width: 30%;
  //     height: auto;
  //     left: 60%;
  //     bottom: 30%;
  //     object-fit: contain;
  //   }
  // }
`;

const Right = styled.div`
  width: 50%;
  font-size: 20px;
  position: relative;
  font-family: "Noto Sans KR", sans-serif;
  //background-color: blue;
  margin-left: 0%;
  margin-right: 2%;
  //margin-top: 45%;
  z-index: 5;

  // @media (max-width: 64em){
  //   width: 80%;
  //   position: absolute;
  //   top:50%;
  //   left:50%;
  //   transform: translate(-50%, -50%) !important;
  //   margin: 0 auto;

  //   padding 2rem;
  //   padding-bottom: 8rem;
  //   //padding-right: 1rem;
  //   color:black;
  //   backdrop-filter: blur(2px);
  //   background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.4)`};
  //   border-radius: 20px;
  // }

  // @media (max-width: 30em){

  //   width: 70%;
  // }
`;

const About2 = () => {
  return (
    <BackgroundSection>
      <Section>
        <Left>
          <video
            src={smallVideo1}
            type="video/mp4"
            autoPlay
            muted
            loop
            className="small-video1"
          />
          <video
            src={smallVideo2}
            type="video/mp4"
            autoPlay
            muted
            loop
            className="small-video2"
          />
        </Left>

        <Right>
          <SubTitle
            data-scroll
            data-scroll-speed="1"
            data-scroll-direction="horizontal"
          >
            <Title
              data-scroll
              data-scroll-speed="2"
              data-scroll-direction="horizontal"
            >
              Forever Nineteen
            </Title>
            Forever Nineteen
          </SubTitle>
          <Text>
            취미는
            <br />
            사진 찍기
            <br />
            그림 그리기
            <br />
            다이어리 꾸미기
            <br />
            수능특강 꾸미기
            <br />
            코스메틱과 뷰티에 관심이 많다
            <br />
          </Text>
        </Right>
      </Section>
    </BackgroundSection>
  );
};

export default About2;
