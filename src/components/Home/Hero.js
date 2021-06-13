import styled from "styled-components";
import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      <HeroContainer>
        <HeroContent></HeroContent>
        <ButtonContainer>
          <Button>FIND TOURNAMENTS</Button>
          <SolidButton>JOIN THE DISCORD</SolidButton>
          <Button>READ OUR BLOG</Button>
        </ButtonContainer>
      </HeroContainer>
    </>
  );
}

const HeroContainer = styled(motion.div)`
  height: 45rem;
  width: 100%;
  margin-top: 3rem;
  position: absolute;
  background: linear-gradient(transparent, ${({ theme }) => theme.primary0}),
    url("/Images/Home.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroContent = styled(motion.div)`
  width: 80rem;
  max-width: 80%;
  height: 30rem;
  margin-top: 2rem;
  background-color: ${({ theme }) => theme.primary0};
  border-radius: 0.5rem;
  border-bottom: ${({ theme }) => theme.highlight0} 0.3rem solid;
`;

const ButtonContainer = styled(motion.div)`
  width: 60rem;
  max-width: 60%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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
`;

const SolidButton = styled(motion.button)`
  color: ${({ theme }) => theme.primary0};
  background-color: ${({ theme }) => `${theme.highlight0}`};
  font-family: "Poppins", sans-serif;
  width: 15rem;
  font-size: 1.2rem;
  padding: 0.75rem 1.5rem;
  margin-top: 2rem;
  border: solid 2px ${({ theme }) => theme.highlight0};
  cursor: pointer;
`;

export default Hero;
