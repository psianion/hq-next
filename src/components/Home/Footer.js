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
  return (
    <>
      <LogoDiv></LogoDiv>
      <SocialFooter>
        <IconSection>
          {[faTwitter, faDiscord, faInstagram, faTwitch, faYoutube].map(
            (i, o) => (
              <IconDiv key={o}>
                <FontAwesomeIcon icon={i} />
              </IconDiv>
            )
          )}
        </IconSection>
      </SocialFooter>
      <Copyrights>
        ©2021 by PvP HQ. All Rights Reserved By Their Respective Owners.
        <br /> PVP HQ is NOT affiliated with Niantic Inc., The Pokémon Company,
        Nintendo, Creatures Inc. <br /> or GAME FREAK inc., The Silph Road LLC
        or any other entity reported upon. Pokémon and its <br />
        trademarks © 1995-2021 Nintendo / Creatures Inc. / GAME FREAK inc.
        Pokémon GO © 2016-2021 Niantic, Inc.
      </Copyrights>
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

  @media (max-width: 768px) {
    width: 15rem;
    font-size: 1rem;
  }
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
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.secondary1};
  }

  @media (max-width: 768px) {
    background-color: ${({ theme }) => `${theme.secondary1}70`};
    width: 1.75rem;
    height: 1.75rem;
  }
`;

const Copyrights = styled(motion.div)`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.primary2};
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    max-width: 85%;
    font-size: 0.35rem;
  }
`;

const LogoDiv = styled(motion.div)`
  background-image: url(${({ theme }) => theme.logo});
  width: 150px;
  height: 150px;
  background-repeat: no-repeat;
  background-size: 150px 150px;
  transition: all 0.2s ease-in-out;
  margin-top: 1rem;

  &:hover {
    background-image: url(${({ theme }) => theme.logohq});
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    background-size: 80px 80px;
  }
`;

export default Footer;
