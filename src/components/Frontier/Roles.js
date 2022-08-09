import styled from "styled-components";
import { motion } from "framer-motion";
import Heading from "../Heading";

const data = require("../../assets/data/FrontierS5/Roles");

function Roles() {
  return (
    <>
      <Heading head={"D&D Battle Roles"} />
      <Container>
        {data.map((i) => (
          <Section key={i.id}>
            <DescSection1>
              <h1>{i.name}</h1>
              <h5>
                <b>Types:</b> {i.types}
              </h5>
              <h5>
                <b>Bans:</b> {i.bans}
              </h5>
              <Button
                onClick={() => {
                  navigator.clipboard.writeText(i.string);
                }}
              >
                Copy String
              </Button>
            </DescSection1>
            <ImageSection>
              <img src={i.image} />
            </ImageSection>
          </Section>
        ))}
      </Container>
    </>
  );
}

const Container = styled(motion.div)`
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.primary0};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    width: 98%;
    height: fit-content;
  }
`;

const Section = styled(motion.div)`
  width: 36rem;
  margin-bottom: 1rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  height: 13rem;
  border: 2px solid ${({ theme }) => `${theme.primary1}`};
  border-radius: 0.5rem;
  transform: skew(-5deg);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    width: 98%;
    flex-direction: column;
    justify-content: center;
    height: fit-content;
    transform: skew(-2deg);
  }
`;

const ImageSection = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  img {
    width: 15rem;
    height: 12rem;
    border-radius: 0.5rem;
  }

  @media (max-width: 768px) {
    width: 98%;
    margin: 0.3rem 0rem;

    img {
      height: auto;
      width: 98%;
    }
  }
`;

const DescSection1 = styled(motion.div)`
  transform: skew(5deg);
  width: 18rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h1 {
    font-size: 2rem;
    color: ${({ theme }) => `${theme.secondary1}`};
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    margin-bottom: 0.25rem;
  }

  h5 {
    font-size: 1rem;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
    font-style: italic;
    color: ${({ theme }) => `${theme.secondary1}`};
    margin-top: 0.25rem;
  }

  @media (max-width: 768px) {
    transform: skew(2deg);
    width: 95%;
    align-items: center;

    h1 {
      font-size: 1.5rem;
      margin: 0.5rem 0rem;
    }

    h5 {
      font-size: 0.9rem;
      text-align: center;
      margin-bottom: 1rem;
    }
  }
`;

const Button = styled(motion.button)`
  font-size: 1rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => `${theme.highlight0}`};
  background-color: transparent;
  border: 1px solid ${({ theme }) => `${theme.highlight0}`};
  padding: 0.25rem 1rem;
  cursor: pointer;
  border-radius: 2rem;
  transition: all 0.3s ease-in-out;
  margin-top: 1rem;

  &:hover {
    background-color: ${({ theme }) => `${theme.highlight0}`};
    border: 1px solid ${({ theme }) => `${theme.highlight0}`};
    color: ${({ theme }) => `${theme.primary0}`};
  }

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

export default Roles;
