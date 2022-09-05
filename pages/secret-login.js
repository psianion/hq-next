import styled from "styled-components";
import { motion } from "framer-motion";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function SecretLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    window.localStorage.setItem(
      "server-cache",
      data.secretlogin.replace(/\s/g, "")
    );
    router.push("/");
  };

  return (
    <Container>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Arvo&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ImageDiv></ImageDiv>
      <ContentDiv onSubmit={handleSubmit(onSubmit)}>
        <h1>I hope this works login page...</h1>
        <p>Enter your Secret</p>
        <LoginInput className="form-control">
          <input
            type="password"
            autoComplete="off"
            {...register("secretlogin")}
          />
        </LoginInput>
        <LoginInput className="form-control">
          <button type="submit">Login</button>
        </LoginInput>
      </ContentDiv>
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primary0};
  height: 100vh;
`;

const TextDiv = styled(motion.div)`
  font-size: 7rem;
  font-family: "Arvo", "Open Sans", serif;
  color: ${({ theme }) => theme.secondary1};

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const LoginInput = styled(motion.div)`
  input {
    height: 3rem;
    width: 20rem;
    background-color: ${({ theme }) => theme.primary1};
    border: none;
    color: ${({ theme }) => theme.secondary1};
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    padding: 0 1rem;
    margin-top: 1rem;

    &:focus {
      background-color: ${({ theme }) => theme.primary2};
      outline: none;
    }
  }

  button {
    width: 9rem;
    height: 3rem;
    font-weight: 600;
    font-size: 1.5rem;
    border: none;
    border-radius: 0.2rem;
    transition: all 0.2s ease-in-out;
    font-family: "Arvo", "Open Sans", serif;
    cursor: pointer;
    color: ${({ theme }) => theme.secondary1};
    background-color: ${({ theme }) => theme.highlight0};
    margin-top: 1rem;
  }

  button:hover {
    background-color: #bc4236;
  }

  @media (max-width: 768px) {
    button {
      width: 6rem;
      height: 2rem;
      font-weight: 600;
      font-size: 1rem;
    }

    input {
      width: 80%;
    }
  }
`;

const ContentDiv = styled(motion.form)`
  font-family: "Arvo", "Open Sans", serif;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.secondary1};
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.4rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;
const ImageDiv = styled(motion.div)`
  width: 20rem;
  height: 18rem;
  background: url("/gif/gengar.gif");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    width: 15rem;
    height: 12rem;
  }
`;
