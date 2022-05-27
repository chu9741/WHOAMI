import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import "../styles/fonts.css";

import img1 from "../assets/Images/Image1-1.png";

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
margin-right: 6rem;

img{ width:100%; height:auto cursor: pointer;}
h1{display: inline-block; width:fit-content; font-weight:500; text-align:center; cursor:pointer;}`;

const Product = ({ img, title = "" }) => {
  return (
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
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
          markers: true,
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

          markers: true,
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
      <Right ref={horizontalRef}>
        <Product img={img1} title="jena" />
        <Product img={img1} title="jena" />
        <Product img={img1} title="jena" />
        <Product img={img1} title="jena" />
        <Product img={img1} title="jena" />
        <Product img={img1} title="jena" />
      </Right>
    </Section>
  );
};

export default Insta;
