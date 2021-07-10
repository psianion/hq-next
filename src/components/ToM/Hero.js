import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeInTop, stagger2, stagger3 } from "../../animations/animations";
import Head from "next/head";
import Link from "next/link";

function Hero() {
  return (
    <>
      <Head>
        <title>Tower of Mastery | PvP HQ</title>
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
        <p>WELCOME TO THE</p>
        <span style={{ display: "flex", alignItems: "center" }}>
          <h1>T</h1>
          <h1>O</h1>
          <h1>W</h1>
          <h1>E</h1>
          <h1 style={{ marginRight: "30px" }}>R</h1>
          <h1>O</h1>
          <h1 style={{ marginRight: "30px" }}>F</h1>
          <h1>M</h1>
          <h1>A</h1>
          <h1>S</h1>
          <h1>T</h1>
          <h1>E</h1>
          <h1>R</h1>
          <h1>Y</h1>
        </span>
        <h1>
          TOWER <br /> OF <br /> MASTERY
        </h1>
        <h5>INDIA'S LARGEST POKÉMON GO PVP COMMUNITY</h5>
        <h4>
          INDIA'S LARGEST POKÉMON <br /> GO PVP COMMUNITY
        </h4>
      </HeroContainer>
    </>
  );
}

const HeroContainer = styled(motion.div)`
  height: 50rem;
  width: 100%;
  margin-top: 3rem;
  background: linear-gradient(transparent, ${({ theme }) => theme.primary0}),
    url("/Images/ToMHome.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-weight: 600;
    font-size: 2rem;
    color: ${({ theme }) => theme.secondary0};
    font-family: "Aaargh", "Roboto", sans-serif;
    letter-spacing: 4px;
  }

  h5 {
    font-weight: 200;
    color: ${({ theme }) => theme.secondary1};
    transition: all 0.2s ease-in-out;
    font-size: 2rem;
    cursor: default;
  }

  h4 {
    display: none;
  }

  h1 {
    display: none;
  }

  span h1 {
    font-size: 5rem;
    font-family: "Prototype", "Open Sans", sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.secondary0};
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    display: block;
  }

  span h1:hover {
    font-size: 4.5rem;
    font-family: "Prototype";
    color: #222831;
    font-weight: 400;
  }

  @media (max-width: 760px) {
    background: linear-gradient(transparent, ${({ theme }) => theme.primary0}),
      url("/Images/ToMHomeMob.jpg");
  }

  @media (max-width: 768px) {
    height: 75vh;

    p {
      font-size: 0.8rem;
      margin-top: 15rem;
    }

    h5 {
      display: none;
    }

    h4 {
      font-weight: 200;
      color: ${({ theme }) => theme.secondary1};
      transition: all 0.2s ease-in-out;
      font-size: 1rem;
      cursor: default;
      text-align: center;
      display: block;
      margin-top: 1rem;
    }

    h1 {
      display: block;
      font-size: 3rem;
      font-family: "Prototype", "Open Sans", sans-serif;
      font-weight: 400;
      text-align: center;
      color: ${({ theme }) => theme.secondary0};
      transition: all 0.2s ease-in-out;
      cursor: pointer;
    }

    span h1 {
      display: none;
    }
  }
`;

export default Hero;
