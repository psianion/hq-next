import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import {
  fadeInLeft,
  fadeInRight,
  stagger3,
  stagger1,
} from "../animations/animations";

import { faAdjust, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";

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
      {openMenu ? (
        <Sidebar variants={fadeInRight}>
          <SideBarItems variants={stagger1}>
            <Link href="/">
              <SideBarItem
                variants={fadeInRight}
                whileHover={{ scale: 1.2 }}
                onClick={toggleMenu}
              >
                HOME
              </SideBarItem>
            </Link>
            <Link href="/tournaments">
              <SideBarItem
                variants={fadeInRight}
                whileHover={{ scale: 1.2 }}
                onClick={toggleMenu}
              >
                TOURNAMENTS
              </SideBarItem>
            </Link>
            <Link href="/tom">
              <SideBarItem
                variants={fadeInRight}
                whileHover={{ scale: 1.2 }}
                onClick={toggleMenu}
              >
                TOWER OF MASTERY
              </SideBarItem>
            </Link>
            <Link href="/frontier">
              <SideBarItem
                variants={fadeInRight}
                whileHover={{ scale: 1.2 }}
                onClick={toggleMenu}
              >
                BATTLE FRONTIER
              </SideBarItem>
            </Link>
            <Link href="/about">
              <SideBarItem
                variants={fadeInRight}
                whileHover={{ scale: 1.2 }}
                onClick={toggleMenu}
              >
                ABOUT
              </SideBarItem>
            </Link>
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
  height: 3rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 1rem;
  background-color: none;
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
  box-shadow: 3px 0px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 0.7rem 0.7rem;
    width: 100%;
  }
`;

const NavButton = styled(motion.button)`
  background-color: ${({ theme }) => theme.primary0};
  color: ${({ theme }) => theme.secondary1};
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: none;
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
  width: 28rem;
  text-align: center;
  cursor: pointer;
`;

const SideBarItem = styled(motion.h1)`
  color: ${({ theme }) => theme.highlight0};
  font-size: 1.5rem;
  font-family: "Open Sans", sans-serif;
  letter-spacing: 2px;
  margin-bottom: 1rem;
`;

export default Navbar;
