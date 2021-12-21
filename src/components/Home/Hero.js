import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeInTop, stagger2, stagger3 } from "../../animations/animations";
import Head from "next/head";
import Link from "next/link";

function Hero() {
  return (
    <>
      <Head>
        <title>Home | PvP HQ</title>
        <link
          rel="preconnect"
          href="/fonts/Prototype.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>

      <HeroContainer
        variants={stagger3}
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
      >
        <h5>
          India's largest <br /> Pokémon PvP community
        </h5>
        <ButtonContainer variants={stagger2}>
          <Link href="/tournaments">
            <Button
              variants={fadeInTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              FIND TOURNAMENTS
            </Button>
          </Link>

          <SolidButton
            variants={fadeInTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.open("https://discord.gg/QEFTu9J", "_blank").focus()
            }
          >
            JOIN THE DISCORD
          </SolidButton>

          <Link href="/tom">
            <Button
              variants={fadeInTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              TOWER OF MASTERY
            </Button>
          </Link>
        </ButtonContainer>
      </HeroContainer>
    </>
  );
}

const HeroContainer = styled(motion.div)`
  height: 35rem;
  width: 100%;
  background: linear-gradient(transparent, ${({ theme }) => theme.primary0}),
    url("/Images/hqbg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h5 {
    margin-top: 20rem;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.highlight0};
    transition: all 0.2s ease-in-out;
    font-size: 3rem;
    line-height: 3.5rem;
    cursor: default;

    br {
      display: none;
    }
  }

  h5:hover {
    color: ${({ theme }) => theme.secondary1};
  }

  @media (max-width: 768px) {
    height: 80vh;
    background-image: linear-gradient(
        transparent,
        ${({ theme }) => theme.primary0}
      ),
      url("/Images/hqbgmob.png");

    h5 {
      margin-top: 20rem;
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

  @media (max-width: 768px) {
    margin-top: 1.5rem;
    max-width: 90%;
  }
`;

const Button = styled(motion.button)`
  color: ${({ theme }) => theme.highlight0};
  background-color: ${({ theme }) => `${theme.primary0}80`};
  font-family: "Poppins", sans-serif;
  letter-spacing: 1px;
  width: 20rem;
  font-weight: 600;
  font-size: 1.4rem;
  padding: 0.75rem 1.5rem;
  margin-top: 2rem;
  border-radius: 0.2rem;
  border: solid 2px ${({ theme }) => theme.highlight0};
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => `${theme.primary0}`};
  }

  @media (max-width: 768px) {
    width: 80%;
    padding: 0.25rem 1rem;
    font-size: 1rem;
    margin-top: 0.5rem;
  }
`;

const SolidButton = styled(motion.button)`
  color: ${({ theme }) => theme.primary0};
  background-color: ${({ theme }) => `${theme.highlight0}`};
  font-family: "Poppins", sans-serif;
  width: 18rem;
  font-weight: 600;
  font-size: 1.5rem;
  border-radius: 0.2rem;
  padding: 0.75rem 1.5rem;
  margin: 2rem 2rem 0 2rem;
  border: solid 2px ${({ theme }) => theme.highlight0};
  cursor: pointer;

  @media (max-width: 768px) {
    width: 85%;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    margin: 0.5rem 0 0 0;
  }
`;

export default Hero;
