import styled from "styled-components";
import { motion } from "framer-motion";
import Heading from "../Heading";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrown,
  faLevelUpAlt,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
const csv = require("csvtojson");

function Tournaments() {
  const TournamentURL =
    "https://docs.google.com/spreadsheets/d/1J9NFJdSX8Z17g_T2XMrxIe2LQ7Jjh-sjYtPYawaWXEc/export?format=csv";

  const [tournamentData, setTournamentData] = useState([]);

  fetch(TournamentURL)
    .then((result) => result.text())
    .then(function (csvtext) {
      return csv().fromString(csvtext);
    })
    .then((csv) => {
      setTournamentData(csv);
    });

  return (
    <>
      <Heading head={"TOURNAMENTS"} highhead={"FEATURED"} />
      <Container>
        {tournamentData
          .slice(0)
          .reverse()
          .map((i) => (
            <ContentBox key={i.id}>
              <ImageBox>
                <img src={i.image} />
              </ImageBox>
              <InfoBox>
                <Name>{i.name}</Name>
                {i.status === "ONGOING" && (
                  <>
                    <FlexBox>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={i.link}
                      >
                        {i.link_text}
                      </a>
                    </FlexBox>
                    <CompletedBox>
                      <div>
                        <FontAwesomeIcon icon={faSpinner} spin />
                      </div>
                      <p>In Progress</p>
                    </CompletedBox>
                  </>
                )}
                {i.status === "CONCLUDED" && (
                  <>
                    <FlexBox>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={i.link}
                      >
                        {i.link_text}
                      </a>
                    </FlexBox>
                    <Winner>
                      <div>
                        <FontAwesomeIcon icon={faCrown} />
                      </div>
                      <p>{i.winner}</p>
                    </Winner>
                  </>
                )}
                {i.status === "UPCOMING" && (
                  <>
                    <FlexBox>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={i.link}
                      >
                        {i.link_text}
                      </a>
                    </FlexBox>
                    <CompletedBox>
                      <div>
                        <FontAwesomeIcon icon={faLevelUpAlt} />
                      </div>
                      <p>Upcoming</p>
                    </CompletedBox>
                  </>
                )}
              </InfoBox>
            </ContentBox>
          ))}
      </Container>
    </>
  );
}

const Container = styled(motion.div)`
  width: 88rem;
  height: 24rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.primary0};
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    width: 98%;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    margin-bottom: 0rem;
  }
`;

const CompletedBox = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;

  div {
    font-size: 1.2rem;
  }

  p {
    font-size: 1.2rem;
    margin-left: 0.5rem;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    div {
      font-size: 0.9rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

const Winner = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #d4af37;
  width: 100%;

  div {
    font-size: 1.2rem;
  }

  p {
    font-size: 1.2rem;
    margin-left: 0.5rem;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
  }

  @media (max-width: 768px) {
    div {
      font-size: 0.9rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

const ContentBox = styled(motion.div)`
  border-radius: 0.5rem;
  height: fit-content;
  background-color: ${({ theme }) => theme.primary1};
  width: 17rem;
  padding-bottom: 0.75rem;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  align-items: center;

  &:hover {
    border-bottom: ${({ theme }) => theme.highlight0} 0.3rem solid;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin-bottom: 1rem;
  }
`;

const ImageBox = styled(motion.div)`
  height: 12.8rem;
  width: 16rem;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  background-color: ${({ theme }) => theme.primary2};

  img {
    width: 16rem;
    height: 12.8rem;
    border-radius: 0.5rem;
  }

  @media (max-width: 768px) {
    width: 95%;
    height: auto;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const InfoBox = styled(motion.div)`
  width: 17rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 7rem;
  @media (max-width: 768px) {
    height: 5rem;
    justify-content: center;
  }
`;

const FlexBox = styled(motion.div)`
  width: 16rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;

  a {
    display: flex;
    align-items: center;
    font-size: 1rem;
    border: 1px solid ${({ theme }) => theme.highlight0};
    padding: 0.2rem 1rem;
    background-color: transparent;
    color: ${({ theme }) => theme.highlight0};
    font-family: Poppins;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    text-transform: uppercase;
    margin: 0.5rem;

    & :hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.highlight0};
      color: ${({ theme }) => theme.secondary0};
    }
  }

  @media (max-width: 768px) {
    width: 85%;
    font-size: 0.7rem;
    a {
      margin: 0.33rem;
      font-size: 0.8rem;
      padding: 0.1rem 0.5rem;
    }
  }
`;

const Name = styled(motion.h1)`
  color: ${({ theme }) => theme.secondary0};
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export default Tournaments;
