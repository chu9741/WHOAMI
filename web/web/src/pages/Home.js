import React from "react";
import styled from "styled-components";
import CoverVideo from "../components/CoverVideo";
import NavBar from "../components/NavBar";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;
const Home = () => {
  return (
    <Section id="Home">
      <CoverVideo />
      <NavBar />
    </Section>
  );
};

export default Home;
