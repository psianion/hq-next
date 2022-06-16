import styled from "styled-components";
import { motion } from "framer-motion";
import {
  fadeInBottom,
  fadeInTop,
  stagger2,
  stagger3,
} from "../../animations/animations";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

function Hero() {
  return (
    <>
      <HeroContainer
        variants={stagger3}
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
      >
        <SmallImageSection>
          <Image
            src="/Images/battle.png"
            width="75px"
            height="75px"
            placeholder="blur"
            loading="eager"
          ></Image>
        </SmallImageSection>
        <TextSection variants={fadeInBottom}>
          <Heading>India's largest Pokémon GO PvP community</Heading>
          <Text>
            <b>PvP HQ</b> is a community for all Pokémon enthusiants where they
            can enjoy playing the games with top trainers across the world and
            be the very best, like no one ever was!
          </Text>
          <ButtonSection variants={stagger2}>
            <Button1
              onClick={() =>
                window.open("https://discord.gg/QEFTu9J", "_blank").focus()
              }
              variants={fadeInTop}
            >
              JOIN THE DISCORD
            </Button1>
            <Button2 variants={fadeInTop}>LOGIN TO HQ</Button2>
          </ButtonSection>
        </TextSection>
        <ImageSection variants={fadeInBottom}>
          <Image
            src="/Images/hqbg2.png"
            width="600px"
            height="480px"
            placeholder="blur"
            loading="eager"
          ></Image>
        </ImageSection>
        {/*
        <h1>
          India's largest Pokémon PvP community
        </h1>
        <ButtonContainer variants={stagger2}>
          <Link href="/tournaments">
            <Button variants={fadeInTop}>FIND TOURNAMENTS</Button>
          </Link> 

<Button
            variants={fadeInTop}
            onClick={() =>
              window.open("https://discord.gg/QEFTu9J", "_blank").focus()
            }
          >
            JOIN THE DISCORD
          </Button>

          <Link href="/tom">
            <Button variants={fadeInTop}>TOWER OF MASTERY</Button>
          </Link>
        </ButtonContainer>
        */}
      </HeroContainer>
    </>
  );
}

const HeroContainer = styled(motion.div)`
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    height: fit-content;
    width: 100%;
    padding: 2rem 0rem;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

const TextSection = styled(motion.div)`
  width: 35rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 45rem;
    align-items: center;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`;

const SmallImageSection = styled(motion.div)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }
`;

const ImageSection = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 40rem;
  height: 30rem;
  margin-top: 0;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    justify-content: center;
    margin-top: 1rem;
  }
`;

const Heading = styled(motion.h1)`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 3.5rem;
  line-height: 3.75rem;
  color: ${({ theme }) => `${theme.highlight0}`};
  letter-spacing: 0.02rem;

  @media (max-width: 768px) {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`;

const Text = styled.p`
  margin-top: 1rem;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  color: ${({ theme }) => `${theme.secondary2}`};
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.9rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.3rem;
  }
`;

const ButtonSection = styled(motion.div)`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const Button2 = styled(motion.button)`
  background: none;
  border: 1px solid ${({ theme }) => `${theme.highlight0}`};
  color: ${({ theme }) => `${theme.highlight0}`};
  cursor: pointer;
  padding: 0.8rem 2rem;
  font-size: 1.3rem;
  font-family: "Poppins";
  font-style: normal;
  letter-spacing: 0.1rem;
  font-weight: 500;
  margin-left: 30px;
  margin-top: 0px;

  @media (max-width: 768px) {
    padding: 0.5rem 2rem;
    margin-top: 10px;
    margin-left: 0px;
    width: 90%;
  }
`;

const Button1 = styled(motion.button)`
  background-color: ${({ theme }) => `${theme.highlight0}`};
  border: 1px solid ${({ theme }) => `${theme.highlight0}`};

  color: #fff;
  cursor: pointer;
  padding: 0.8rem 2rem;
  font-size: 1.3rem;
  font-family: "Poppins";
  font-style: normal;
  letter-spacing: 0.1rem;
  font-weight: 500;

  @media (max-width: 768px) {
    padding: 0.5rem 2rem;
    width: 90%;
  }
`;

export default Hero;
