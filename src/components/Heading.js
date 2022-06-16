import styled from "styled-components";
import { motion } from "framer-motion";

function Heading({ highhead, head }) {
  return (
    <>
      <HeadingContainer>
        <Head>{head}</Head>
      </HeadingContainer>
    </>
  );
}

const HeadingContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const Head = styled(motion.h1)`
  position: relative;
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.secondary0};
  font-size: 2.25rem;
  font-weight: 500;
  text-align: center;
  margin: auto;
  white-space: nowrap;
  padding-bottom: 1.25rem;

  &::before {
    background-color: ${({ theme }) => theme.highlight0};
    content: "";
    display: block;
    height: 0.25rem;
    width: 10rem;
    transform: translateX(-2.5rem);
  }

  &::after {
    background-color: ${({ theme }) => theme.highlight0};
    content: "";
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    height: 0.25rem;
    width: 10rem;
    transform: translateX(2.5rem) translateY(-0.75rem);
  }

  @media (max-width: 768px) {
    margin-left: 0rem;
    font-weight: 500;
    font-size: 1.5rem;
  }
`;

export default Heading;
