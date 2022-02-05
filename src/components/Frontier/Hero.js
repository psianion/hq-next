import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeInTop, stagger2, stagger3 } from "../../animations/animations";

function Hero() {
  return (
    <>
      <HeroContainer
        variants={stagger3}
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
      >
        <h5>Battle Frontier : Season 5</h5>
        <h3>Dungeons & Dragons Edition</h3>
        <ButtonContainer variants={stagger2}>
          <Button
            variants={fadeInTop}
            onClick={() =>
              window.open("https://discord.gg/QEFTu9J", "_blank").focus()
            }
          >
            JOIN THE DISCORD
          </Button>
        </ButtonContainer>
      </HeroContainer>
    </>
  );
}

const HeroContainer = styled(motion.div)`
  height: 35rem;
  width: 100% !important;
  background: linear-gradient(transparent, ${({ theme }) => theme.primary0}),
    url("/Images/BFS5/bg.png") no-repeat center center fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;

  h5 {
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.secondary1};
    transition: all 0.2s ease-in-out;
    font-size: 3rem;
    line-height: 3rem;
    cursor: default;
  }

  h3 {
    font-weight: 400;
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.secondary1};
    transition: all 0.2s ease-in-out;
    font-size: 1.25rem;
    text-transform: uppercase;
    cursor: default;
  }

  h5:hover {
    color: ${({ theme }) => theme.secondary0};
  }

  @media (max-width: 1024px) {
    background: linear-gradient(transparent, ${({ theme }) => theme.primary0}),
      url("/Images/hqbgmob.png") no-repeat center center fixed;
    background-size: cover;
    height: 80vh;

    h5 {
      font-size: 2rem;
      line-height: 2.25rem;

      br {
        display: block;
      }
    }
  }

  @media (max-width: 768px) {
    background-size: cover;
    height: 90vh;
    h5 {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.highlight0};
      line-height: 1.8rem;
      font-weight: 600;

      br {
        display: block;
      }
    }
  }
`;

const ButtonContainer = styled(motion.div)`
  width: 70rem;
  max-width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-shadow: 0px 10px 7px -8px rgba(15, 15, 15, 0.36);
  margin-bottom: 1rem;
  padding-bottom: 2rem;

  @media (max-width: 1024px) {
    max-width: 95%;
    margin-top: 1.5rem;
  }

  @media (max-width: 768px) {
    margin-top: 1.5rem;
    max-width: 90%;
  }
`;

const Button = styled(motion.button)`
  color: ${({ theme }) => theme.secondary2};
  background-color: ${({ theme }) => `${theme.primary0}80`};
  font-family: "Poppins", sans-serif;
  letter-spacing: 1px;
  width: 20rem;
  font-weight: 600;
  font-size: 1.25rem;
  margin-top: 1rem;
  border-radius: 0.2rem;
  padding: 0.5rem 1rem;
  border: solid 2px ${({ theme }) => theme.secondary1};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    border: solid 2px ${({ theme }) => theme.highlight0};
    color: ${({ theme }) => theme.highlight0};
    background-color: ${({ theme }) => `${theme.primary0}`};
  }

  @media (max-width: 1024px) {
    width: 15rem;
    font-size: 1.2rem;
    margin-top: 0.5rem;
  }

  @media (max-width: 768px) {
    width: 80%;
    font-size: 1rem;
    margin-top: 0.5rem;
  }
`;

export default Hero;
