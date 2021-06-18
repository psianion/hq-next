import styled from "styled-components";
import { motion } from "framer-motion";

function Heading({ highhead, head }) {
  return (
    <>
      <HeadingContainer>
        <Head>
          <Highlight>{highhead}</Highlight> {head}
        </Head>
      </HeadingContainer>
    </>
  );
}

const HeadingContainer = styled(motion.div)`
  margin-top: 3rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    margin-top: 3rem;
    margin-bottom: 1rem;
  }
`;

const Head = styled(motion.h1)`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.secondary1};

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.highlight0};
`;

export default Heading;
