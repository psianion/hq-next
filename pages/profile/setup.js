import styled from "styled-components";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useUser, useSetupProfile } from "../../hooks/user/user";
import Loading from "../../src/components/Loading";
import CountryData from "../../src/assets/data/CountryData";
import Image from "next/image";

export default function ProfileSetup() {
  const router = useRouter();

  const [id, setID] = useState("");

  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      nationality: {},
    },
  });
  const { data, isError, isLoading } = useUser();
  const setupProfile = useSetupProfile();

  const [loading, setLoading] = useState(true);

  const onSubmit = async (data) => {
    const { isSuccess } = await setupProfile(id, data);
    if (isSuccess) {
      router.push("/profile");
    } else {
      console.log("No setup, try again.");
    }
  };

  useEffect(() => {
    if (!isLoading && !data?.data) {
      router.push("/login");
    } else if (!isLoading && !data?.data?.game?.pokemongo.ign) {
      setID(data.data._id);
    } else if (!isLoading && data.data.game.pokemongo.ign) {
      router.push("/profile");
    }
  }, [isLoading]);

  return (
    <Container>
      <Content2>
        <ProfileForm onSubmit={handleSubmit(onSubmit)}>
          <ProfileFormDiv className="form-control">
            <label>In Game Name</label>
            <input type="text" {...register("ign")} />
          </ProfileFormDiv>
          <ProfileFormDiv className="form-control">
            <label>Trainer Code</label>
            <input type="text" {...register("trainerCode")} />
          </ProfileFormDiv>
          <ProfileDivHori>
            <ProfileFormDiv className="form-control">
              <label>Team</label>
              <select {...register("trainerTeam")}>
                {["Valor", "Mystic", "Instinct"].map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </ProfileFormDiv>
            <NationalityFormDiv className="form-control">
              <label>Nationality</label>
              <select {...register("nationality")}>
                {CountryData.map((value) => (
                  <option key={value.code} value={value.code.toLowerCase()}>
                    {value.name}
                  </option>
                ))}
              </select>
            </NationalityFormDiv>
          </ProfileDivHori>

          <ProfileFormDiv className="form-control">
            <label></label>
            <button type="submit">Set Up</button>
          </ProfileFormDiv>
        </ProfileForm>
      </Content2>
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  margin-top: 3.5rem;

  @media (max-width: 768px) {
    height: 95vh;
    margin-top: 1rem;
  }
`;

const Content2 = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.primary0};
  border: solid 2px ${({ theme }) => theme.primary1};
  border-radius: 0.5rem;
  width: 90rem;
  height: 50rem;

  @media (max-width: 768px) {
    width: 95%;
    height: 98%;
    margin-top: 3rem;
  }
`;

const ProfileForm = styled(motion.form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    height: 98%;
    width: 95%;
  }
`;

const ProfileDivHori = styled(motion.div)`
  display: flex;
  width: 50rem;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (max-width: 768px) {
    width: 50%;
  }
`;

const NationalityFormDiv = styled(motion.div)`
  max-height: 10rem !important;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    label {
      font-size: 1rem;
    }

    select {
      width: 10rem;
    }
  }

  label {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.secondary2};
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
  }

  select {
    height: 3rem;
    width: 20rem;
    background-color: ${({ theme }) => theme.primary1};
    border: none;
    color: ${({ theme }) => theme.secondary1};
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    padding: 0 1rem;

    &:focus {
      background-color: ${({ theme }) => theme.primary2};
      outline: none;
    }
  }
`;

const CountryDiv = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileFormDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  max-height: 10rem;

  @media (max-width: 768px) {
    label {
      font-size: 1rem;
    }

    input {
      width: 10rem;
    }

    select {
      width: 10rem;
    }

    button {
      width: 7rem;
    }
  }

  label {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.secondary2};
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
  }

  input {
    height: 3rem;
    width: 20rem;
    background-color: ${({ theme }) => theme.primary1};
    border: none;
    color: ${({ theme }) => theme.secondary1};
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    padding: 0 1rem;

    &:focus {
      background-color: ${({ theme }) => theme.primary2};
      outline: none;
    }
  }

  button {
    height: 3rem;
    width: 15rem;
    background-color: ${({ theme }) => theme.highlight0};
    border: none;
    color: ${({ theme }) => theme.secondary1};
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    padding: 0 1rem;
    margin-top: 2rem;
    cursor: pointer;
  }

  select {
    height: 3rem;
    width: 20rem;
    background-color: ${({ theme }) => theme.primary1};
    border: none;
    color: ${({ theme }) => theme.secondary1};
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    padding: 0 1rem;

    &:focus {
      background-color: ${({ theme }) => theme.primary2};
      outline: none;
    }
  }
`;
