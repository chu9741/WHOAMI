import React from "react";
import styled from "styled-components";
import CoverVideo from "../components/CoverVideo";

const pages = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;
const Home = () => {
  return (
    <pages>
      <CoverVideo />
      <h1>Logo</h1>
      <h1>NavBar</h1>
    </pages>
  );
};

export default Home;
