import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const NavContainer = styled(motion.div)`
  width: 100vw;
  z-index: 6;
  margin-left: 0%;

  position: absolute;
  top: ${(props) =>
    props.click ? `-${props.theme.navHeight}` : `-${props.theme.navHeight}`};

  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  transition: all 0.3s ease;
`;

const MenuItems = styled(motion.ul)`
  position: relative;
  height: ${(props) => props.theme.navHeight};
  background-color: rgba(10, 10, 10, 0.2);
  color: ${(props) => props.theme.text};
  list-style: none;

  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  padding: 0 10rem;
`;

// const MenuBtn = styled.li`
//   background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.7)`};
//   list-style-type: style none;
//   color: ${(props) => props.theme.text};
//   width: 15rem;
//   height: 3.5rem;

//   clip-path: polygon(90% 0, 90% 60%, 50% 100%, 10% 60%, 10% 0);

//   position: absolute;
//   top: 100%;
//   left: 50%;
//   transform: translateX(-50%);

//   display: flex;
//   justify-content: center;
//   align-items: center;

//   font-size: 18px;
//   font-weight: 500;
//   text-transform: uppercase;

//   cursor: pointer;
// `;

const MenuItem = styled(motion.li)`
  color: ${(props) => props.theme.text};
  cursor: pointer;
  font-family: "Fredericka the Great", cursive;
`;

const NavBar = () => {
  const [click, setClick] = useState(false);

  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    setClick(!click);
    scroll.scrollTo(elem, {
      offset: "0",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };
  return (
    <NavContainer
      click={click}
      initial={{ y: "0%" }}
      animate={{ y: 80 }}
      transition={{ duration: 2, delay: 2 }}
    >
      <MenuItems>
        {/* <MenuBtn onClick={() => setClick(!click)}>Menu</MenuBtn> */}
        <MenuItem
          onClick={() => handleScroll(".About")}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.8, Y: 0 }}
        >
          About Jena
        </MenuItem>
        <MenuItem
          onClick={() => handleScroll(".instagram")}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.8, Y: 0 }}
        >
          Instagram
        </MenuItem>
        <MenuItem
          onClick={() => handleScroll(".Contact")}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.8, Y: 0 }}
        >
          Contact us
        </MenuItem>
      </MenuItems>
    </NavContainer>
  );
};

export default NavBar;
