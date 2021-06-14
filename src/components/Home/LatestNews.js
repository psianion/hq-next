import styled from "styled-components";
import { motion } from "framer-motion";

function LatestNews() {
  return (
    <>
      <HeadingContainer>
        <Heading>
          <Highlight>LATEST</Highlight> NEWS
        </Heading>
      </HeadingContainer>
    </>
  );
}

const HeadingContainer = styled(motion.div)`
  margin-top: 4rem;
  width: 80rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Heading = styled(motion.h1)`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.secondary1};
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.highlight0};
`;

export default LatestNews;
