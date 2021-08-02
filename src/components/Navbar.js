import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useAuth } from "../../hooks/auth/login";

import {
  fadeInLeft,
  fadeInRight,
  stagger3,
  stagger1,
  fadeInBottom,
} from "../animations/animations";

import {
  faAdjust,
  faBars,
  faChevronUp,
  faCog,
  faPowerOff,
  faSignOutAlt,
  faTimes,
  faUser,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import { useRouter } from "next/router";
import { useUser } from "../../hooks/user/user";

function Navbar({ toggleTheme, theme }) {
  const router = useRouter();
  const { isAuth, setIsAuth } = useAuth();
  const { me } = useUser();
  const [openMenu, setOpenMenu] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    if (openSettings) {
      setOpenSettings(false);
    }
  };

  const toggleSettings = () => {
    setOpenSettings(!openSettings);
    if (openMenu) {
      setOpenMenu(false);
    }
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
        {isAuth ? (
          <NavButton
            onClick={toggleSettings}
            title="Dark Mode"
            variants={fadeInLeft}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {openSettings ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "Poppins",
                  fontSize: "1rem",
                }}
              >
                {me.ign || "Not Set"}{" "}
                <FontAwesomeIcon
                  icon={faUserCircle}
                  style={{ marginLeft: "0.5rem", fontSize: "1.5rem" }}
                />
              </div>
            )}
          </NavButton>
        ) : (
          <NavButton
            onClick={toggleSettings}
            title="Dark Mode"
            variants={fadeInLeft}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {openSettings ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faUserCircle} />
            )}
          </NavButton>
        )}
      </Nav>
      {openSettings ? (
        <RightSidebar variants={fadeInBottom}>
          <RightSideBarItems variants={stagger1}>
            {isAuth && (
              <ProfileSec
                variants={fadeInBottom}
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  router.push("/profile");
                  toggleSettings();
                }}
              >
                <Picture></Picture>
                <ProfileContent>
                  <h5>{me.ign || "Not Set"}</h5>
                  <p>
                    {me.totalWins}/{me.totalMatches} Match Wins
                  </p>
                </ProfileContent>
              </ProfileSec>
            )}
            <RightSideBarItem
              variants={fadeInBottom}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                toggleSettings();
                toggleTheme();
              }}
            >
              <FontAwesomeIcon
                icon={faAdjust}
                style={{
                  marginRight: "1rem",
                  fontSize: "1.5rem",
                  width: "1.5rem",
                }}
              />
              {theme == "light" ? "Dark Mode" : "Light Mode"}
            </RightSideBarItem>
            {isAuth ? (
              <RightSideBarItem
                variants={fadeInBottom}
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  toggleSettings();
                  window.open(
                    `${process.env.API_URL}` + "/auth/logout",
                    "_self"
                  );
                  localStorage.removeItem("me");
                  setIsAuth(false);
                }}
              >
                <FontAwesomeIcon
                  icon={faPowerOff}
                  style={{
                    marginRight: "1rem",
                    fontSize: "1.5rem",
                    width: "1.5rem",
                  }}
                />
                Logout
              </RightSideBarItem>
            ) : (
              <RightSideBarItem
                variants={fadeInBottom}
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  toggleSettings();
                  router.push("/login");
                }}
              >
                <FontAwesomeIcon
                  icon={faUser}
                  style={{
                    marginRight: "1rem",
                    fontSize: "1.5rem",
                    width: "1.5rem",
                  }}
                />
                Login
              </RightSideBarItem>
            )}
          </RightSideBarItems>
        </RightSidebar>
      ) : (
        <></>
      )}
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
  background-color: ${({ theme }) => theme.primary0};
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

const RightSidebar = styled(motion.div)`
  position: fixed;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  top: 0;
  right: 0;
  height: 100vh;
  width: 20rem;
  background-color: ${({ theme }) => theme.primary0};
  padding: 0rem 1rem;
  z-index: 1;
  box-shadow: 3px 0px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 0.7rem 0.7rem;
    width: 100%;
    height: 100vh;
  }
`;

const NavButton = styled(motion.button)`
  background-color: ${({ theme }) => theme.primary0};
  color: ${({ theme }) => theme.secondary1};
  height: 2.5rem;
  border-radius: 50%;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 1.75rem;
    font-size: 1.25rem;
  }
`;

const RightSideBarItems = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 90vh;
  width: 28rem;
  text-align: center;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 80vh;
    width: 100%;
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

const ProfileSec = styled(motion.div)`
  width: 100%;
  height: 6rem;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  display: flex;
  flex: row;
`;

const Picture = styled(motion.div)`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary1};
`;

const ProfileContent = styled(motion.div)`
  width: 12rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.primary1};
  border-radius: 0.25rem;
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 1rem;

  h5 {
    font-size: 1.2rem;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }

  p {
    font-size: 0.9rem;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.secondary2};
  }

  @media (max-width: 768px) {
    width: 70%;
  }
`;

const RightSideBarItem = styled(motion.h1)`
  width: 95%;
  height: 2.5rem;
  color: ${({ theme }) => theme.secondary1};
  font-size: 1.25rem;
  font-family: "Open Sans", sans-serif;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 600;
  border-radius: 0.25rem;
  margin-bottom: 0.75rem;
  background-color: ${({ theme }) => theme.primary1};
  padding: 0.5rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.primary2};
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 2.25rem;
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
    padding: 1rem;
  }
`;

export default Navbar;
