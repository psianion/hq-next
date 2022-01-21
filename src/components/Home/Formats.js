import styled from "styled-components";
import { motion } from "framer-motion";
import Heading from "../Heading";
import Link from "next/link";

const data = require("../../assets/data/FormatsData");

function Formats() {
  return (
    <>
      <Heading head={"Formats at PvP HQ"} />
      <Container>
        {data.map((i) => (
          <div key={i.id}>
            {i.id % 2 == 0 ? (
              <Section>
                <ImageSection>
                  <img src={i.image} />
                </ImageSection>
                <DescSection2>
                  <h1>{i.name}</h1>
                  <h5>{i.desc}</h5>
                  <Link href={i.buttonLink}>
                    <Button>{i.buttonText}</Button>
                  </Link>
                </DescSection2>
              </Section>
            ) : (
              <Section>
                <DescSection1>
                  <h1>{i.name}</h1>
                  <h5>{i.desc}</h5>
                  <Link href={i.buttonLink}>
                    <Button>{i.buttonText}</Button>
                  </Link>
                </DescSection1>
                <ImageSection>
                  <img src={i.image} />
                </ImageSection>
              </Section>
            )}
          </div>
        ))}
      </Container>
    </>
  );
}

const Container = styled(motion.div)`
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.primary0};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 98%;
    height: fit-content;
  }
`;

const Section = styled(motion.div)`
  width: 65rem;
  margin-bottom: 1rem;
  height: 21rem;
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
    width: 25rem;
    height: 20rem;
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
  width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h1 {
    font-size: 2rem;
    color: ${({ theme }) => `${theme.secondary1}`};
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    margin-bottom: 1rem;
  }

  h5 {
    font-size: 1rem;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
    font-style: italic;
    color: ${({ theme }) => `${theme.secondary1}`};
    margin-bottom: 1.5rem;
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

const DescSection2 = styled(motion.div)`
  transform: skew(5deg);
  width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  h1 {
    font-size: 2rem;
    color: ${({ theme }) => `${theme.secondary1}`};
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    margin-bottom: 1rem;
  }

  h5 {
    font-size: 1rem;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
    font-style: italic;
    color: ${({ theme }) => `${theme.secondary1}`};
    margin-bottom: 1.5rem;
    text-align: end;
  }

  @media (max-width: 768px) {
    transform: skew(2deg);
    width: 95%;
    align-items: center;

    h1 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    h5 {
      text-align: center;
      font-size: 0.9rem;
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
  padding: 0.5rem 2rem;
  cursor: pointer;
  border-radius: 2rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => `${theme.highlight0}`};
    border: 1px solid ${({ theme }) => `${theme.highlight0}`};
    color: ${({ theme }) => `${theme.primary0}`};
  }

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

export default Formats;
