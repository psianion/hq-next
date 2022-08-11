import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useGBLIndia } from "../../../hooks/lb/gblin";
import Image from "next/image";
import Loading from "../../../src/components/Loading";
import { useSetGBL, useUser } from "../../../hooks/user/user";
import { useForm } from "react-hook-form";
import Link from "next/link";

function GBLLBIndia() {
  const { gbllbindata, isError, isLoading } = useGBLIndia();
  const { data } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const setGBL = useSetGBL();
  const [id, setID] = useState("");
  const [stage, setStage] = useState("NOT-LOGGED-IN");

  const onSubmit = async (data) => {
    const { isSuccess } = await setGBL(id, data);
    if (isSuccess) {
      console.log("MMR set");
    } else {
      console.log("MMR set error!");
    }
  };

  useEffect(() => {
    if (!isLoading && !data?.data) {
      return;
    } else if (!isLoading && !data.data.game.pokemongo.ign) {
      setStage("PROFILE-NOT-SETUP");
    } else if (!isLoading && data.data.game.pokemongo.ign) {
      setStage("PROFILE-SETUP");
      setID(data.data._id);
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      {stage === "NOT-LOGGED-IN" && (
        <>
          <SubHeading>Login to Set your GBL ELO</SubHeading>
          <Link href="/profile">
            <Button>Login</Button>
          </Link>
        </>
      )}
      {stage === "PROFILE-NOT-SETUP" && (
        <>
          <SubHeading>Setup your HQ Profile</SubHeading>
          <Link href="/profile">
            <Button>Setup</Button>
          </Link>
        </>
      )}
      {stage === "PROFILE-SETUP" && (
        <GBL>
          <Heading>{data.data.game.pokemongo.ign}</Heading>
          <MMRSection>
            <RankIcon>
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/icons/gbl/${data.data.game.pokemongo.gbl.s11.rank}.png`}
                layout="fill"
              />
            </RankIcon>
            <MMR>
              <CurrentMMR>
                {data.data.game.pokemongo.gbl.s11.currentMMR}{" "}
                <span>Current MMR</span>
              </CurrentMMR>
              <HighestMMR>
                {data.data.game.pokemongo.gbl.s11.highestMMR}{" "}
                <span>Highest MMR</span>
              </HighestMMR>
            </MMR>
          </MMRSection>
          <SetMMRSection onSubmit={handleSubmit(onSubmit)}>
            <MMRInput className="form-control">
              <input
                type="number"
                autoComplete="off"
                {...register("rating", {
                  required: "ELO is required!",
                  maxLength: {
                    value: 4,
                    message: "Enter your 4 digit GBL ELO",
                  },
                  minLength: {
                    value: 4,
                    message: "Enter your 4 digit GBL ELO",
                  },
                  min: {
                    value: 0,
                    message: "Positive ELO when?",
                  },
                })}
              />
            </MMRInput>
            <MMRInput className="form-control">
              <button type="submit">Update MMR</button>
            </MMRInput>
          </SetMMRSection>
          <Error>{errors.rating?.message}</Error>
        </GBL>
      )}

      <Heading>GBL Leaderboards India</Heading>

      {gbllbindata.map((player, index) => (
        <LBContainer
          background={`${process.env.NEXT_PUBLIC_API_URL}/icons/gbl/${player.game.pokemongo.gbl.s11.rank}.png`}
        >
          <Rank>#{index + 1}</Rank>
          <p>●</p>
          <Avatar
            team={
              player.game.pokemongo.trainerTeam === "Valor"
                ? "#FF0000"
                : player.game.pokemongo.trainerTeam === "Mystic"
                ? "#0000FF"
                : player.game.pokemongo.trainerTeam === "Instinct"
                ? "#FFFF00"
                : "none"
            }
          >
            <Sprite>
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/trainer/sprites/${player.sprites.activeAvatar}.png`}
                layout="fill"
              />
            </Sprite>
          </Avatar>
          <MMRSection2>
            <IGN>{player.game.pokemongo.ign}</IGN>
            <MMR2>{player.game.pokemongo.gbl.s11.currentMMR}</MMR2>
          </MMRSection2>
        </LBContainer>
      ))}
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const LBContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 35rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.primary1};
  margin-top: 0.5rem;
  background-image: url(${({ background }) => background});
  background-position: right;
  background-repeat: no-repeat;
  background-size: 4rem;
  transition: all 0.1s ease-in-out;
  border-radius: 0.25rem;
  border-left: solid 1rem ${({ theme }) => theme.highlight0};

  &:hover {
    background-color: ${({ theme }) => theme.highlight0};
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 2rem;
    background-size: 2.5rem;
  }
`;

const Heading = styled(motion.h1)`
  margin-left: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.secondary0};
  margin-top: 2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-left: 0rem;
  }
`;

const SubHeading = styled(motion.h1)`
  margin-left: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.secondary0};
  margin-top: 2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-left: 0rem;
  }
`;

const IGN = styled(motion.h1)`
  margin-left: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.secondary0};

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-left: 0.25rem;
  }
`;

const Rank = styled(motion.div)`
  width: 3rem;
  margin-left: 0.5rem;
  font-family: "Montserrat", sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.secondary0};

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-left: 0.25rem;
    width: 2rem;
  }
`;

const Error = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.secondary1};
  font-weight: 400;
  color: #ff3131;

  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

const MMRSection2 = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 22rem;
  @media (max-width: 768px) {
    width: 12rem;
  }
`;

const MMR2 = styled(motion.div)`
  margin-left: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-size: 1.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.secondary0};

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-left: 0.25rem;
  }
`;

const GBL = styled(motion.div)`
  width: 27rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.5rem 1rem;
    align-items: center;
  }
`;

const MMRSection = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const RankIcon = styled(motion.div)`
  position: relative;
  width: 5rem;
  height: 5rem;

  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`;

const MMR = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
`;

const CurrentMMR = styled(motion.div)`
  font-family: "Montserrat", sans-serif;
  font-size: 1.75rem;
  color: ${({ theme }) => theme.highlight0};
  font-weight: 600;

  span {
    font-size: 1rem;
    color: ${({ theme }) => theme.secondary1};
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;

    span {
      font-size: 0.75rem;
    }
  }
`;

const HighestMMR = styled(motion.div)`
  font-family: "Montserrat", sans-serif;
  font-size: 1.75rem;
  color: ${({ theme }) => theme.secondary1};
  font-weight: 600;

  span {
    font-size: 1rem;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;

    span {
      font-size: 0.75rem;
    }
  }
`;

const SetMMRSection = styled(motion.form)`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

const MMRInput = styled(motion.div)`
  margin-top: 0.5rem;
  input {
    height: 2rem;
    width: 6rem;
    background-color: ${({ theme }) => theme.primary1};
    border: solid 1px ${({ theme }) => theme.secondary1};
    color: ${({ theme }) => theme.secondary1};
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    padding: 0 1rem;
    border-radius: 2rem;
    font-weight: 600;
    text-align: center;

    &:focus {
      background-color: ${({ theme }) => theme.primary0};
      outline: none;
    }
  }

  button {
    height: 2rem;
    width: fit-content;
    background-color: ${({ theme }) => theme.highlight0};
    border: solid 1px ${({ theme }) => theme.highlight0};
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    padding: 0 1rem;
    border-radius: 2rem;
    font-weight: 400;
    text-align: center;
    margin-left: 1rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    input {
      height: 1.5rem;
      width: 4rem;
      font-size: 0.75rem;
    }

    button {
      height: 1.5rem;
      font-size: 0.75rem;
    }
  }
`;

const Button = styled(motion.button)`
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

const Avatar = styled(motion.div)`
  border: solid 0.1rem ${({ team }) => team};
  background-color: ${({ theme }) => theme.primary1};
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;

  @media (max-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const Flag = styled(motion.div)`
  position: relative;
  width: 1.4rem;
  height: 1.05rem;
  transform: translateY(-1rem);

  @media (max-width: 768px) {
    margin-left: 0rem;
    width: 2rem;
    height: 1.5rem;
    transform: translateY(-1rem);
  }
`;

const Sprite = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
  width: 2.5rem;
  height: 2.5rem;

  @media (max-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export default GBLLBIndia;
