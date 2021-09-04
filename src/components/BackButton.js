import styled from "styled-components";
import { motion } from "framer-motion";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BackButton({ text, path }) {
  return (
    <>
      <HeadingContainer>
        <Link href={path}>
          <Button>
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{ marginRight: "0.5rem", fontSize: "0.7rem" }}
            />
            {text}
          </Button>
        </Link>
      </HeadingContainer>
    </>
  );
}

const HeadingContainer = styled(motion.div)`
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
`;

const Button = styled(motion.div)`
  display: flex;
  align-items: center;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.highlight0};
  padding: 0.2rem 1rem;
  border-radius: 0.5rem;
  background-color: transparent;
  color: ${({ theme }) => theme.highlight0};
  font-family: Poppins;

  & :hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
    border: 1px solid ${({ theme }) => theme.highlight0};
    padding: 0.25rem 0.75rem;
  }
`;

export default BackButton;
