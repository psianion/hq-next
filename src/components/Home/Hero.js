import styled from "styled-components";
import { motion } from "framer-motion";
import {
  fadeInRight,
  fadeInTop,
  stagger2,
  stagger3,
} from "../../animations/animations";

function Hero() {
  return (
    <>
      <HeroContainer
        variants={stagger3}
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
      >
        <ButtonContainer variants={stagger2}>
          <Button variants={fadeInTop}>FIND TOURNAMENTS</Button>
          <SolidButton variants={fadeInTop}>JOIN THE DISCORD</SolidButton>
          <Button variants={fadeInTop}>TOWER OF MASTERY</Button>
        </ButtonContainer>
      </HeroContainer>
    </>
  );
}

const HeroContainer = styled(motion.div)`
  height: 35rem;
  width: 100%;
  margin-top: 3rem;
  background: linear-gradient(transparent, ${({ theme }) => theme.primary0}),
    url("/bgloop.gif");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 90vh;
  }
`;

const HeroContent = styled(motion.div)`
  width: 80rem;
  max-width: 80%;
  height: 30rem;
  margin-top: 1.5rem;
  background-color: ${({ theme }) => theme.primary0};
  border-radius: 0.5rem;
  border-bottom: ${({ theme }) => theme.highlight0} 0.3rem solid;

  @media (max-width: 768px) {
    width: 95%;
    max-width: 100%;
    margin-top: 0.8rem;
    height: 30rem;
  }
`;

const ButtonContainer = styled(motion.div)`
  width: 60rem;
  max-width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30rem;

  @media (max-width: 768px) {
    margin-top: 20rem;
    max-width: 90%;
  }
`;

const Button = styled(motion.button)`
  color: ${({ theme }) => theme.highlight0};
  background-color: ${({ theme }) => `${theme.primary0}80`};
  font-family: "Poppins", sans-serif;
  letter-spacing: 1px;
  width: 18rem;
  font-size: 1.2rem;
  padding: 0.75rem 1.5rem;
  margin-top: 2rem;
  border: solid 2px ${({ theme }) => theme.highlight0};
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => `${theme.primary0}`};
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    margin-top: 1rem;
  }
`;

const SolidButton = styled(motion.button)`
  color: ${({ theme }) => theme.primary0};
  background-color: ${({ theme }) => `${theme.highlight0}`};
  font-family: "Poppins", sans-serif;
  width: 18rem;
  font-size: 1.2rem;
  padding: 0.75rem 1.5rem;
  margin: 2rem 2rem 0 2rem;
  border: solid 2px ${({ theme }) => theme.highlight0};
  cursor: pointer;

  @media (max-width: 768px) {
    width: 95%;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    margin: 1rem 0 0 0;
  }
`;

export default Hero;
