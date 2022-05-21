import React from "react";
import styled from "styled-components";
import CoverVideo from "../components/CoverVideo";
import NavBar from "../components/NavBar";

const pages = styled.section`
  position: relative;
  min-height: 200vh;
  overflow: hidden;
`;
const Home = () => {
  return (
    <pages>
      <CoverVideo />
      <NavBar />
      <h1>NavBar</h1>
      <h1>NavBar</h1>
      <h1>NavBar</h1>
      <h1>NavBar</h1>
      <h1>NavBar</h1>
      <h1>NavBar</h1>
      <h1>NavBar</h1>
      <h1>NavBar</h1>
    </pages>
  );
};

export default Home;
