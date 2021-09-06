import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeInTop, stagger2, stagger3 } from "../../animations/animations";
import Head from "next/head";

function RegionHero({ gymName, gymLocation }) {
  return (
    <>
      <Head>
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
        <h1>{gymName}</h1>
        <h5>{gymLocation}</h5>
      </HeroContainer>
    </>
  );
}

const HeroContainer = styled(motion.div)`
  height: 30rem;
  width: 100%;
  margin-top: 3rem;
  background: linear-gradient(transparent, ${({ theme }) => theme.primary0}),
    url("/Images/ToMGymHome.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-weight: 600;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.secondary0};
    font-family: "Aaargh", "Roboto", sans-serif;
    letter-spacing: 4px;
    margin-top: 7rem;
  }

  h5 {
    color: ${({ theme }) => theme.secondary1};
    transition: all 0.2s ease-in-out;
    font-size: 2rem;
    letter-spacing: 4px;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
    cursor: default;
    text-transform: uppercase;
    margin-bottom: 5rem;
  }

  h1 {
    display: block;
    font-size: 5rem;
    font-family: "Prototype", "Open Sans", sans-serif;
    font-weight: 400;
    text-align: center;
    color: ${({ theme }) => theme.secondary1};
    transition: all 0.2s ease-in-out;
    cursor: default;
    text-transform: uppercase;
  }

  @media (max-width: 760px) {
    background: linear-gradient(transparent, ${({ theme }) => theme.primary0}),
      url("/Images/ToMGymHomeMob.jpg");
  }

  @media (max-width: 768px) {
    height: 30vh;

    p {
      font-size: 0.8rem;
      margin-top: 5rem;
    }

    h5 {
      font-weight: 600;
      color: ${({ theme }) => theme.secondary1};
      transition: all 0.2s ease-in-out;
      font-size: 1rem;
      cursor: default;
      text-align: center;
      display: block;
      margin-top: 0.5rem;
    }

    h1 {
      display: block;
      font-size: 2rem;
      font-family: "Prototype", "Open Sans", sans-serif;
      font-weight: 400;
      text-align: center;
      color: ${({ theme }) => theme.secondary0};
      transition: all 0.2s ease-in-out;
      cursor: pointer;
    }
  }
`;

export default RegionHero;
