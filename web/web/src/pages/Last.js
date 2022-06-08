import React from "react";
import styled from "styled-components";
import "../styles/fonts.css";
import { motion } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 7rem auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background-color: ${(props) => props.theme.body};
  background-color: white;
  //color: ${(props) => props.theme.text};
  color: rgb(224, 179, 210);

  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 18rem;
  h3 {
    font-size: 100px;
    font-family: "Oleo Script Swash Caps", cursive;
    color: rgb(196, 161, 178);
  }
`;

const Component = styled(motion.footer)`
width 80vw;

ul{
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 10rem;
    padding: 0 1rem;
    border-top: 2px solid ${(props) => props.theme.text}; 
    border-bottom: 2px solid ${(props) => props.theme.text};
    border-color: rgb(224,179,210);
}

li{
    padding: 2rem;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover{
        transform: scale(1.1);
    }
}
`;

const Bottom = styled.div`
  padding: 0.5rem 0;
  margin: 0 4rem;
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Last = () => {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    scroll.scrollTo(elem, {
      offset: "20", //-50 or 0
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };
  return (
    <Section>
      <Container>
        <h3 data-scroll data-scroll-speed="2">
          Jena
        </h3>
      </Container>
      <Component
        initial={{ y: "-100px" }} //
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        <ul>
          <li onClick={() => handleScroll("#Home")}>Home</li>
          <li onClick={() => handleScroll(".About")}>About Jena</li>
          <li onClick={() => handleScroll(".instagram")}>Instagram</li>
          <li onClick={() => handleScroll(".Contact")}>Contact us</li>
        </ul>
        <Bottom>
          <span>&copy; {new Date().getFullYear()}. All Rights Reserved.</span>
        </Bottom>
      </Component>
    </Section>
  );
};

export default Last;
