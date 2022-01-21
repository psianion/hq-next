import styled from "styled-components";
import { motion } from "framer-motion";
import Heading from "../Heading";
import Link from "next/link";

const data = require("../../assets/data/TeamsData");

function Teams() {
  return (
    <>
      <Heading head={"PvP Teams at HQ"} />
      <Container>
        {data.map((i) => (
          <Section key={i.id}>
            <ImageSection>
              <img src={i.logo} />
            </ImageSection>
            <DescSection>
              <h1>{i.name}</h1>
              <h5>{i.game}</h5>
              <h3>{i.format}</h3>
              <Link href={i.buttonLink}>
                <Button>Go to team page</Button>
              </Link>
            </DescSection>
            <BGSection>
              <img src={i.bg} />
            </BGSection>
          </Section>
        ))}
      </Container>
    </>
  );
}

const Container = styled(motion.div)`
  width: 80rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.primary0};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    width: 98%;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    margin-bottom: 0rem;
  }
`;

const Section = styled(motion.div)`
  width: 16rem;
  margin-bottom: 2rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  height: 21rem;
  border: 0.1rem solid ${({ theme }) => `${theme.primary1}`};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: skew(-2deg);
`;

const BGSection = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 0;

  img {
    width: 16rem;
    height: 21rem;
    border-radius: 0.5rem;
    opacity: 0.4;
    filter: blur(1px);
  }
`;

const ImageSection = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  transform: translateY(-3.5rem);
  justify-content: center;
  z-index: 1;

  img {
    width: 22rem;
    height: 22rem;
    border-radius: 0.5rem;
  }
`;

const DescSection = styled(motion.div)`
  height: 5rem;
  display: flex;
  flex-direction: column;
  width: 20rem;
  align-items: center;
  justify-content: center;
  z-index: 1;
  transform: translateY(-5.5rem) skew(2deg);

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => `${theme.secondary0}`};
    font-weight: 600;
    font-family: "Poppins", sans-serif;
  }

  h3 {
    font-size: 1.1rem;
    color: ${({ theme }) => `${theme.secondary1}`};
    font-weight: 400;
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
  }

  h5 {
    font-size: 0.8rem;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
    text-transform: uppercase;
    color: ${({ theme }) => `${theme.secondary2}`};
  }
`;

const Button = styled(motion.button)`
  font-size: 1rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => `${theme.secondary0}`};
  background-color: transparent;
  border: 1px solid ${({ theme }) => `${theme.secondary0}`};
  padding: 0.2rem 1.25rem;
  margin-top: 0.5rem;
  cursor: pointer;
  border-radius: 2rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => `${theme.highlight0}`};
    border: 1px solid ${({ theme }) => `${theme.highlight0}`};
    color: ${({ theme }) => `${theme.secondary0}`};
  }
`;

export default Teams;
