import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRegisterTeam } from "../../../hooks/frontier/registration";
import { useRouter } from "next/router";
import { useAcceptInvite } from "../../../hooks/frontier/invite";

function Register({ stage, info }) {
  const [regStage, setRegStage] = useState("DEFAULT");
  const registerTeam = useRegisterTeam();
  const acceptInvite = useAcceptInvite();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onAcceptInvite = async (data) => {
    const { isSuccess, errorMessage } = await acceptInvite(info.data._id, data);

    if (isSuccess) {
      router.push("/frontier/team");
    } else {
      console.log(errorMessage);
      router.reload();
    }
  };

  const onSubmit = async (data) => {
    const { isSuccess } = await registerTeam(info.data._id, data);

    if (isSuccess) {
      router.push("/frontier/team");
    } else {
      router.reload();
    }
  };

  return (
    <Container>
      {stage === "NOT-LOGGED-IN" && (
        <Section>
          <WelcomeText>To Register, Login and setup your Profile</WelcomeText>
          <Link href="/profile">
            <SetupButton>Login</SetupButton>
          </Link>
        </Section>
      )}
      {stage === "PROFILE-SET" && (
        <Section>
          <WelcomeText>Battle Frontier S6 Registrations</WelcomeText>

          {regStage === "DEFAULT" && (
            <>
              {info.data.game.pokemongo.bf?.s6?.team ? (
                <Text>
                  You are registered as a trainer in{" "}
                  <b>{info.data.game.pokemongo.bf?.s6?.team}</b>
                </Text>
              ) : info.data.game.pokemongo.bf?.s6?.invite ? (
                <InviteText>
                  You have a team invite from{" "}
                  <b>{info.data.game.pokemongo.bf?.s6?.invite}</b>
                </InviteText>
              ) : (
                <Text>
                  You are not in a team yet, join your nearest team to
                  participate or register your team below!
                </Text>
              )}

              <ButtonSection>
                {info.data.game.pokemongo.bf?.s6?.invite && (
                  <Button1
                    onClick={() => {
                      onAcceptInvite(info.data.game.pokemongo.bf?.s6?.invite);
                    }}
                  >
                    ACCEPT INVITE
                  </Button1>
                )}
                {!info.data.game.pokemongo.bf?.s6?.team ? (
                  <Button2
                    onClick={() => {
                      setRegStage("REGISTER-NEW-TEAM");
                    }}
                  >
                    REGISTER NEW TEAM
                  </Button2>
                ) : (
                  <Button1
                    onClick={() => {
                      router.push("/frontier/team");
                    }}
                  >
                    TEAM PAGE
                  </Button1>
                )}
              </ButtonSection>
            </>
          )}

          {regStage === "REGISTER-NEW-TEAM" && (
            <RegisterSection onSubmit={handleSubmit(onSubmit)}>
              <RegisterInput className="form-control">
                <input
                  autoComplete="off"
                  {...register("frontierTeam", {
                    required: "Team Name is required!",
                  })}
                />
                <Button1 type="submit">Register Team</Button1>
              </RegisterInput>
            </RegisterSection>
          )}
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

  @media (max-width: 768px) {
    width: 90%;
    text-align: center;
    height: fit-content;
  }
`;

const WelcomeText = styled.h1`
  font-size: 1.8rem;
  color: ${({ theme }) => `${theme.secondary1}`};
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  margin-bottom: 0rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    line-height: 1.3rem;
    margin-bottom: 0.5rem;
  }
`;

const Text = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => `${theme.secondary1}`};
  font-family: "Poppins", sans-serif;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const InviteText = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => `${theme.secondary1}`};
  font-family: "Poppins", sans-serif;
  background-color: ${({ theme }) => `${theme.primary1}`};
  padding: 0.5rem 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
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

const RegisterSection = styled(motion.form)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RegisterInput = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 0.5rem;

  input {
    height: 3rem;
    width: 20rem;
    background-color: ${({ theme }) => theme.primary1};
    border: solid 1px ${({ theme }) => theme.secondary1};
    color: ${({ theme }) => theme.secondary1};
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    padding: 0 1rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 0.5rem;

    &:focus {
      background-color: ${({ theme }) => theme.primary0};
      outline: none;
    }
  }

  @media (max-width: 768px) {
    input {
      height: 1.75rem;
      width: 100%;
      font-size: 0.75rem;
    }
  }
`;

const ButtonSection = styled(motion.div)`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;

const Button2 = styled(motion.button)`
  background: none;
  border: 1px solid ${({ theme }) => `${theme.highlight0}`};
  color: ${({ theme }) => `${theme.highlight0}`};
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  font-size: 1.3rem;
  font-family: "Poppins";
  font-style: normal;
  letter-spacing: 0.1rem;
  font-weight: 500;
  margin-left: 30px;
  margin-top: 0px;

  @media (max-width: 768px) {
    padding: 0.25rem 1rem;
    margin-top: 10px;
    margin-left: 0px;
    font-size: 1rem;
    width: 100%;
  }
`;

const Button1 = styled(motion.button)`
  background-color: ${({ theme }) => `${theme.highlight0}`};
  border: 1px solid ${({ theme }) => `${theme.highlight0}`};

  color: #fff;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  font-size: 1.3rem;
  font-family: "Poppins";
  font-style: normal;
  letter-spacing: 0.1rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1rem;
    letter-spacing: 0.05rem;
    padding: 0.25rem 1rem;
    width: 100%;
  }
`;

export default Register;
