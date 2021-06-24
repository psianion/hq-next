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
        <link
          rel="preconnect"
          href="/fonts/Aaargh.ttf"
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
        <p>WELCOME TO</p>
        <span style={{ display: "flex", alignItems: "center" }}>
          <h1>P</h1>
          <h1>V</h1>
          <h1 style={{ marginRight: "30px" }}>P</h1>
          <h1>H</h1>
          <h1>Q</h1>
        </span>
        <h5>INDIA'S LARGEST POKÉMON GO PVP COMMUNITY</h5>
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
  margin-top: 3rem;
  background: linear-gradient(transparent, ${({ theme }) => theme.primary0}),
    url("/gif/bg.gif");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-weight: 200;
    font-size: 2rem;
    color: ${({ theme }) => theme.secondary0};
    font-family: "Aaargh", "Roboto", sans-serif;
    letter-spacing: 4px;
    margin-top: 15rem;
  }

  h5 {
    font-weight: 200;
    color: ${({ theme }) => theme.highlight0};
    transition: all 0.2s ease-in-out;
    font-size: 2rem;
    cursor: default;
  }

  h5:hover {
    color: ${({ theme }) => theme.secondary1};
  }

  span h1 {
    font-size: 8rem;
    font-family: "Prototype", "Open Sans", sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.secondary0};
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  span h1:hover {
    font-size: 7rem;
    font-family: "Prototype";
    color: ${({ theme }) => theme.highlight0};
    font-weight: 400;
  }

  @media (max-width: 768px) {
    height: 90vh;

    p {
      font-size: 0.8rem;
      margin-top: 20rem;
    }

    h5 {
      font-size: 0.8rem;
      color: ${({ theme }) => theme.secondary1};
      font-weight: 400;
    }

    span h1 {
      font-size: 4rem;
    }

    span h1:hover {
      font-size: 5rem;
    }
  }
`;

const ButtonContainer = styled(motion.div)`
  width: 60rem;
  max-width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
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
