import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { InstaData } from "../components/InstaData";
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
  background-color: rgb(224,179,210);
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
  width: 200%;
  background-color: rgb(255, 255, 255);

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
margin-bottom: 0.7rem;
img{ width:100%; height:auto cursor: pointer;}
h1{display: inline-block; width:fit-content; font-weight:500; text-align:center; cursor:pointer;}`;

const Box = styled.div`
  
  width: fit-content
  padding: 2rem 2rem;
  backdrop-filter: blur(4px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.7);
  background-color: rgb(255,255,255);
  cursor: pointer;
  z-index: 7;
  display: flex;
  align-items: center;
  margin-left: 5%;
`;

const Text = styled.h1`
  font-size: 15px;
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
          <br />
          𝐸𝑣𝑒𝑟𝑦𝑡ℎ𝑖𝑛𝑔 𝑖𝑛 𝑦𝑜𝑢𝑟 𝑤𝑜𝑟𝑙𝑑 𝑖𝑠 𝑐𝑟𝑒𝑎𝑡𝑒𝑑 𝑏𝑦 𝑤ℎ𝑎𝑡 𝑦𝑜𝑢 𝑡ℎ𝑖𝑛𝑘!
          <br />
          🎀 ғᴏʀᴇᴠᴇʀ ɴɪɴᴛᴇᴇɴ, ᴜɴ ᔕ ᴊᴇɴᴀ
          <br />
          🧸 ᴠɪʀᴛᴜᴀʟ ʜᴜᴍᴀɴ ⠀<br />
          🇰🇷 ᴋᴏʀᴇᴀ⠀
          <br />
        </p>
      </Left>
      <Right ref={horizontalRef}>
        <Product
          img={InstaData[4].imgSrc}
          title={InstaData[4].name}
          link={InstaData[4].link}
        />
        <Product
          img={InstaData[3].imgSrc}
          title={InstaData[3].name}
          link={InstaData[3].link}
        />
        <Product
          img={InstaData[2].imgSrc}
          title={InstaData[2].name}
          link={InstaData[2].link}
        />
        <Product
          img={InstaData[1].imgSrc}
          title={InstaData[1].name}
          link={InstaData[1].link}
        />
        <Product
          img={InstaData[0].imgSrc}
          title={InstaData[0].name}
          link={InstaData[0].link}
        />
      </Right>
    </Section>
  );
};

export default Insta;
