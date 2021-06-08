import { useState } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import {
  fadeInLeft,
  fadeInRight,
  stagger3,
  stagger1,
} from "../animations/animations";

import {
  faAdjust,
  faBars,
  faTimes,
  faHome,
  faAddressBook,
  faCode,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faDiscord,
  faTwitter,
  faTwitch,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Navbar({ toggleTheme }) {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Nav variants={stagger3}>
        <NavButton
          onClick={toggleMenu}
          title="Menu"
          variants={fadeInRight}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {openMenu ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </NavButton>
        <LogoH1>logo.</LogoH1>
        <NavButton
          onClick={toggleTheme}
          title="Dark Mode"
          variants={fadeInLeft}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FontAwesomeIcon icon={faAdjust} />
        </NavButton>
      </Nav>
      <SocialBar variants={stagger1}>
        <SocialButton
          variants={fadeInLeft}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href="https://discord.gg/QEFTu9J" target="_blank">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </SocialButton>
        <SocialButton
          variants={fadeInLeft}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href="https://twitter.com/pvphqin" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </SocialButton>
        <SocialButton
          variants={fadeInLeft}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href="https://www.instagram.com/pvphq/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </SocialButton>
        <SocialButton
          variants={fadeInLeft}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FontAwesomeIcon icon={faTwitch} />
        </SocialButton>
        <SocialButton
          variants={fadeInLeft}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FontAwesomeIcon icon={faYoutube} />
        </SocialButton>
      </SocialBar>
      {openMenu ? (
        <Sidebar variants={fadeInRight}>
          <SideBarItems variants={stagger1}>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
          </SideBarItems>
        </Sidebar>
      ) : (
        <></>
      )}
    </motion.div>
  );
}

const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  height: 7vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 1rem;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0.7rem 0.7rem;
  }
`;

const Sidebar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 30rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.primary0};
  justify-content: space-between;
  z-index: 1;
  padding: 0rem 1rem;
  box-shadow: 3px 0px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 0.7rem 0.7rem;
    width: 100%;
  }
`;

const SocialBar = styled(motion.div)`
  position: fixed;
  height: 100%;
  right: 0;
  bottom: 0;
  width: 4.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 0rem 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem 0.5rem;
    width: 2.75rem;
  }
`;

const LogoH1 = styled.h1`
  color: ${({ theme }) => theme.highlight1};
  font-size: 2rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const NavButton = styled(motion.button)`
  background-color: ${({ theme }) => theme.primary1};
  color: ${({ theme }) => theme.secondary1};
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: none;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 1.75rem;
    height: 1.75rem;
    font-size: 1rem;
  }
`;

const SideBarItems = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
`;

const SocialButton = styled(motion.div)`
  color: ${({ theme }) => theme.highlight0};
  width: 2rem;
  height: 2rem;
  border: none;
  font-size: 1.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  z-index: 1;

  @media (max-width: 768px) {
    width: 1rem;
    height: 1rem;
    font-size: 1rem;
    margin-bottom: 0.7rem;
  }
`;

export default Navbar;
