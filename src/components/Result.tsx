import * as React from "react";
import styled from "styled-components";

interface ResultPropType {
  paragraphs: string[] | [];
}

const ResultContainer = styled.div`
  margin-bottom: 2rem;
`;

const Result = ({ paragraphs }: ResultPropType) => {
  return (
    <ResultContainer>
      {paragraphs.map((para, idx) => (
        <p key={idx}>{para}</p>
      ))}
    </ResultContainer>
  );
};

export default Result;
