import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import Heading from "../Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const data = require("../../assets/data/EventsData");

function GymNews() {
  const [isActive, setIsActive] = useState(1);
  const active = data.find(({ id }) => id === isActive);

  return (
    <>
      <Heading head={"NEWS"} highhead={"TOWER OF MASTERY"} />
      <Container>
        <Section1>
          {data.map((i) => (
            <Box
              key={i.id}
              onClick={() => {
                setIsActive(i.id);
              }}
            >
              <ImageBox1></ImageBox1>
              <ContentBox1>
                <h1>{i.name}</h1>
                <h5>{i.snippet}</h5>
                <p>
                  <FontAwesomeIcon icon={faCalendarAlt} /> {i.time}
                </p>
              </ContentBox1>
            </Box>
          ))}
        </Section1>
        <Section2>
          <ImageBox2></ImageBox2>
          <ContentBox2>
            <div>
              <h1>{active.name}</h1>
              <h5>{active.desc}</h5>
            </div>
            <Section2Footer>
              <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Read More
              </Button>
              <FlexBox>
                <FontAwesomeIcon icon={faCalendarAlt} />
                <p>{active.time}</p>
              </FlexBox>
            </Section2Footer>
          </ContentBox2>
        </Section2>
      </Container>
    </>
  );
}

const Container = styled(motion.div)`
  width: 80rem;
  height: 30rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.primary1};
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 768px) {
    width: 95%;
    flex-direction: column-reverse;
    align-items: center;
    height: 40rem;
  }
`;

const Section1 = styled(motion.div)`
  border-radius: 0.5rem;
  width: 50%;
  background-color: ${({ theme }) => theme.primary1};
  height: 30rem;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 16rem;
  }
`;

const Box = styled(motion.div)`
  border-radius: 0.5rem;
  width: 100%;
  background-color: ${({ theme }) => theme.primary1};
  color: ${({ theme }) => theme.secondary0};
  border-bottom: 1px solid ${({ theme }) => theme.primary2};
  height: 6rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.primary2};
    border-left: ${({ theme }) => theme.highlight0} 0.5rem solid;
  }

  @media (max-width: 768px) {
    width: 98%;
    height: 3rem;
  }
`;

const FlexBox = styled(motion.div)`
  display: flex;
  align-items: center;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ImageBox1 = styled(motion.div)`
  width: 5rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.primary2};
  margin: 0.5rem;
  border-radius: 0.5rem;

  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
    margin: 0.25rem;
  }
`;

const ImageBox2 = styled(motion.div)`
  width: 97.5%;
  height: 18rem;
  background-color: ${({ theme }) => theme.primary2};
  margin: 0.5rem;
  border-radius: 0.5rem;

  @media (max-width: 768px) {
    width: 96%;
    height: 12rem;
  }
`;

const Button = styled(motion.button)`
  color: ${({ theme }) => theme.primary0};
  background-color: ${({ theme }) => `${theme.highlight0}`};
  width: 7rem;
  height: 2rem;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  @media (max-width: 768px) {
    width: 5rem;
    font-size: 0.75rem;
    height: 1.5rem;
  }
`;

const ContentBox1 = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 1rem;

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.secondary0};
  }

  h5 {
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    letter-spacing: 0.2px;
    margin-top: 0.2rem;
    color: ${({ theme }) => theme.secondary1};
  }

  p {
    font-size: 0.9rem;
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.secondary1};
    margin-top: 0.8rem;
  }

  @media (max-width: 768px) {
    margin-top: 0.5rem;

    h1 {
      font-size: 1rem;
    }

    h5 {
      font-size: 0.6rem;
      margin-top: 0rem;
    }

    p {
      font-size: 0.5rem;
      margin-top: 0.1rem;
    }
  }
`;

const ContentBox2 = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 10rem;
  margin-top: 1rem;

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => `${theme.secondary0}`};
    margin: 0.5rem;
  }

  h5 {
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    letter-spacing: 0.2px;
    margin: 0 0.5rem 0.5rem 0.5rem;
    color: ${({ theme }) => theme.secondary2};
  }

  p {
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.secondary2};
    margin-left: 0.5rem;
  }

  @media (max-width: 768px) {
    margin-top: 0.5rem;

    h1 {
      font-size: 1.2rem;
    }

    h5 {
      font-size: 0.8rem;
      margin-top: 0rem;
    }

    p {
      font-size: 0.8rem;
      margin-left: 0.3rem;
      margin-top: 0.1rem;
    }
  }
`;

const Section2Footer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 97%;
  margin: 0 0 0 0.5rem;
`;

const Section2 = styled(motion.div)`
  border-radius: 0.5rem;
  width: 50%;
  background-color: ${({ theme }) => theme.primary1};

  @media (max-width: 768px) {
    width: 100%;
    height: 24rem;
  }
`;

export default GymNews;
