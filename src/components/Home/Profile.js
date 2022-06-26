import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Profile({ stage, data }) {
  const notify = () => {
    toast.success("Trainer Code Copied!", {
      theme: "dark",
      style: {
        fontSize: "1rem",
        fontFamily: `"Poppins", sans-serif`,
        width: "250px",
      },
    });
  };
  return (
    <Container>
      {stage === "PROFILE-NOT-SET" && (
        <Section>
          <WelcomeText>Welcome to PvP HQ</WelcomeText>
          <NameText>{data.data.discordName}</NameText>
          <Link href="/profile">
            <SetupButton>SETUP YOUR PROFILE</SetupButton>
          </Link>
        </Section>
      )}
      {stage === "PROFILE-SET" && (
        <Section>
          <WelcomeText>Welcome to PvP HQ</WelcomeText>
          <NameText>{data.data.ign}</NameText>
          <FriendCode
            onClick={() => {
              navigator.clipboard.writeText(data.data.trainerCode);
              notify();
            }}
          >
            <div>{data.data.trainerCode}</div>
            <FontAwesomeIcon
              style={{ marginLeft: "0.5rem", fontSize: "1rem" }}
              icon={faCopy}
            />
          </FriendCode>

          <Link href="/profile">
            <SetupButton>VIEW FULL PROFILE</SetupButton>
          </Link>
        </Section>
      )}
    </Container>
  );
}

const Container = styled(motion.div)`
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.primary0};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    width: 98%;
    height: fit-content;
  }
`;

const Section = styled(motion.div)`
  width: 45rem;
  margin-bottom: 1rem;
  border: 2px solid ${({ theme }) => `${theme.primary1}`};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 2rem;
  transform: skew(-2deg);

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    justify-content: center;
    height: fit-content;
  }
`;

const WelcomeText = styled.h1`
  font-size: 1.8rem;
  color: ${({ theme }) => `${theme.secondary1}`};
  font-weight: 500;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const NameText = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => `${theme.highlight0}`};
  font-weight: 600;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SetupButton = styled(motion.button)`
  color: #fff;
  cursor: pointer;
  padding: 0.5rem 2rem;
  font-size: 1.3rem;
  font-family: "Poppins";
  font-style: normal;
  letter-spacing: 0.1rem;
  font-weight: 500;
  background-color: ${({ theme }) => `${theme.highlight0}`};
  border: 1px solid ${({ theme }) => `${theme.highlight0}`};

  border-radius: 2rem;
  transition: all 0.3s ease-in-out;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
    padding: 0.25rem 1rem;
    font-size: 0.8rem;
  }
`;

const EditButton = styled(motion.button)`
  cursor: pointer;
  padding: 0.25rem 2rem;
  font-size: 1rem;
  font-family: "Poppins";
  font-style: normal;
  letter-spacing: 0.05rem;
  font-weight: 500;
  color: ${({ theme }) => `${theme.highlight0}`};
  background-color: transparent;
  border: 1px solid ${({ theme }) => `${theme.highlight0}`};
  border-radius: 2rem;
  margin-top: 2rem;

  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => `${theme.highlight0}`};
    border: 1px solid ${({ theme }) => `${theme.highlight0}`};
    color: ${({ theme }) => `${theme.primary0}`};
  }

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
    margin-top: 1rem;
  }
`;

const FriendCode = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-around;

  font-size: 1.5rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  border-radius: 0.2rem;
  background-color: ${({ theme }) => `${theme.primary1}80`};
  color: ${({ theme }) => theme.secondary1};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  padding: 0.25rem 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.primary1};
    border-right: 0.5rem solid ${({ theme }) => theme.highlight0};
  }

  @media (max-width: 768px) {
    width: 90%;
    border-radius: 0.1rem;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.secondary1};
    background-color: ${({ theme }) => theme.primary1};
    border-right: 0.5rem solid ${({ theme }) => theme.highlight0};
  }
`;

export default Profile;
