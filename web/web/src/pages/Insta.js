import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Blogs } from "../components/BlogData";
//import BlogComponent from "../components/BlogComponents";
import "../styles/fonts.css";

import imgSrc1 from "../assets/Images/imgSrc1.png";
import img1 from "../assets/Images/Image1-1.png";
import imgSrc2 from "../assets/Images/imgSrc2.png";
import imgSrc3 from "../assets/Images/imgSrc3.png";

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
  font-size: 60px;
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
  left: 10%;
  padding-left: 30%;
  min-height: 100vh;
  width: 170%;
  background-color: rgb(255, 234, 221);

  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    display: inline-block;
    width: fit-content;
    width: 5rem;
    margin: 0 2rem;
  }
`;

const Item = styled(motion.div)`
display: flex;
justify-content:center;
flex-direction:column;
align-items: center;

width:20rem;
margin-right:0.5rem;
margin-left: 0.5rem;
margin-top:0.3rem;
margin-bottom: 1rem;
img{ width:100%; height:auto cursor: pointer;}
h1{display: inline-block; width:fit-content; font-weight:500; text-align:center; cursor:pointer;}`;

const Box = styled.div`
  border: 2px solid;
  width: fit-content
  padding: 2rem 2rem;
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 2);
  background-color: rgb(210,210,210);
  cursor: pointer;
  z-index: 7;
  display: flex;
  align-items: center;
  margin-left: 5%;
`;

const Text = styled.h1`
  font-size: 20px;
`;
const Product = ({ img, title, link }) => {
  return (
    <Box>
      <Item
        initial={{ filter: "grayscale(100%)" }}
        whileInView={{ filter: "grayscale(0%)" }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: "all" }}
      >
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt={title} />
          <Text>{title}</Text>
        </a>
      </Item>
    </Box>
  );
};

const Insta = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;

    let pinWrapWidth = scrollingElement.offsetWidth;

    let t1 = gsap.timeline();
    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App", // locomo elem
          scrub: true,
          pin: true,
        },
        // we haveto increase scrolling height of this section
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      //horizontal scroll
      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App", // locomo elem
          scrub: true,
        },
        // we haveto increase scrolling height of this section
        x: -pinWrapWidth,
        ease: "none",
      });

      ScrollTrigger.refresh();
    }, 1000);
    return () => {};
  }, []);

  return (
    <Section ref={ref}>
      <Title data-scroll data-scroll-speed="-1" className="instagram">
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
      <Right ref={horizontalRef}>
        <Product img={img1} title="" link={Blogs[0].link} />
        <Product img={img1} title="" link={Blogs[0].link} />
        <Product img={imgSrc1} title={Blogs[2].name} link={Blogs[2].link} />
        <Product img={imgSrc2} title={Blogs[3].name} link={Blogs[3].link} />
        <Product img={imgSrc3} title={Blogs[4].name} link={Blogs[4].link} />
      </Right>
    </Section>
  );
};

export default Insta;
