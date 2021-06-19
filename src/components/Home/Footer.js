import styled from "styled-components";
import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  faDiscord,
  faInstagram,
  faTwitch,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  useEffect(() => {
    console.log("hello");
  }, []);

  return (
    <>
      <LogoDiv></LogoDiv>
      <SocialFooter>
        <IconSection>
          {[faTwitter, faDiscord, faInstagram, faTwitch, faYoutube].map((i) => (
            <IconDiv>
              <FontAwesomeIcon icon={i} />
            </IconDiv>
          ))}
        </IconSection>
      </SocialFooter>
      <div>no</div>
    </>
  );
}

const SocialFooter = styled(motion.div)`
  height: 4rem;
  width: 100%;
  background-color: ${({ theme }) => theme.primary0};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconSection = styled(motion.div)`
  width: 20rem;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const IconDiv = styled(motion.div)`
  background-color: ${({ theme }) => theme.primary2};
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primary0};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.secondary1};
  }
`;

const LogoDiv = styled(motion.div)`
  background-image: url(${({ theme }) => theme.logo});
  width: 100px;
  height: 100px;
  background-repeat: no-repeat;
  background-size: 100px 100px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-image: url(${({ theme }) => theme.logohq});
  }
`;

export default Footer;
