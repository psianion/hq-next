import styled from "styled-components";
import Head from "next/head";
import { motion } from "framer-motion";
import GymHero from "../../../src/components/ToM/GymHero";
import Footer from "../../../src/components/Footer";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackButton from "../../../src/components/BackButton";
import EUE4 from "../../../src/assets/data/EUE4";
import PokemonTeam from "../../../src/components/ToM/PokemonTeam";

function EliteFour() {
  return (
    <Container>
      <Head>
        <title>EU Elite Four | PvP HQ</title>
      </Head>
      <GymHero gymName={"Elite Four"} gymLocation={"Europe Region"} />
      <BackButton text={"All EU Gyms"} path={"/tom/eu"} />
      <TextContainer>
        <h1>
          The <Highlight>Elite Four </Highlight>defending Europe will be :
        </h1>
      </TextContainer>
      {EUE4.map((E4) => (
        <Region key={E4.id}>
          <h5>
            {E4.typing1} & {E4.typing2} Elite
          </h5>
          <h3>{E4.name}</h3>
          <p>CLICK TO COPY TRAINER CODE!</p>
          <LeaderCode
            onClick={() => {
              navigator.clipboard.writeText(E4.trainerCode);
            }}
          >
            <div>{E4.trainerCode}</div>
            <FontAwesomeIcon
              style={{ marginLeft: "0.5rem", fontSize: "1rem" }}
              icon={faCopy}
            />
          </LeaderCode>
          <PokemonTeam pokemon={E4.pokemon} />
        </Region>
      ))}
      <Footer />
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LeaderCode = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => `${theme.primary1}`};
  padding: 0rem 2rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.secondary1};

  &:hover {
    color: ${({ theme }) => theme.highlight0};
  }
`;

const Region = styled(motion.div)`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
  border-bottom: 0.3rem solid ${({ theme }) => theme.primary1};
  background-color: ${({ theme }) => `${theme.primary1}20`};

  transition: all 0.2s ease-in-out;
  cursor: pointer;
  padding: 0.2rem 0.5rem;
  margin-top: 1rem;

  h3 {
    font-size: 2rem;
    font-family: "Poppins", sans-serif;
    margin-bottom: 0.3rem;
    font-weight: 500;
  }

  h5 {
    font-size: 1.25rem;
    letter-spacing: 0.2rem;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    margin-top: 1rem;
    color: ${({ theme }) => `${theme.secondary2}80`};
  }

  p {
    font-size: 1rem;
    letter-spacing: 0.1rem;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.primary2};
    text-transform: uppercase;
  }

  &:hover {
    border-bottom: 0.3rem solid ${({ theme }) => theme.highlight0};
    background-color: ${({ theme }) => `${theme.primary1}40`};
  }

  @media (max-width: 768px) {
    width: 20rem;
    border-radius: 0.1rem;
    font-size: 1.2rem;
    border-right: 0.3rem solid ${({ theme }) => theme.highlight0};
  }
`;

const TextContainer = styled(motion.div)`
  width: 80rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;

  h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    // text-transform: uppercase;
  }

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column-reverse;
    align-items: center;
    height: fit-content;

    h1 {
      font-size: 0.9rem;
    }
  }
`;

const Highlight = styled(motion.span)`
  color: ${({ theme }) => theme.highlight0};
  font-size: 1.6rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default EliteFour;
