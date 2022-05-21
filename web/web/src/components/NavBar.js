import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const NavContainer = styled(motion.div)`
  width: 100vw;
  z-index: 6;

  position: absolute;
  top: ${(props) => (props.click ? "0" : `-${props.theme.navHeight}`)};

  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  transition: all 0.3s ease;
`;

const MenuItems = styled(motion.ul)`
  position: relative;
  height: ${(props) => props.theme.navHeight};
  background-color: rgba(255, 205, 174, 0.5);
  color: ${(props) => props.theme.text};
  list-style: none;

  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  padding: 0 10rem;
`;

const MenuBtn = styled.li`
  background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.7)`};
  list-style-type: style none;
  color: ${(props) => props.theme.text};
  width: 15rem;
  height: 3.5rem;

  clip-path: polygon(90% 0, 90% 60%, 50% 100%, 10% 60%, 10% 0);

  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;

  cursor: pointer;
`;

const MenuItem = styled(motion.li)`
  color: ${(props) => props.theme.text};
`;

const NavBar = () => {
  const [click, setClick] = useState(false);
  return (
    <NavContainer
      click={click}
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 2, delay: 2 }}
    >
      <MenuItems>
        <MenuBtn onClick={() => setClick(!click)}>Menu</MenuBtn>
        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.8, Y: 0 }}
        >
          About Jena
        </MenuItem>
        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.8, Y: 0 }}
        >
          Instagram
        </MenuItem>
        <MenuItem
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
