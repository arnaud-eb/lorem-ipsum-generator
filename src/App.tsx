import React from "react";
import styled from "styled-components";

import Form from "./components/Form";
import Result from "./components/Result";

import text from "./data";

const AppWrapper = styled.section`
  width: 90vw;
  margin: 0 auto;
  max-width: 40rem;
  margin-top: 5rem;
  text-align: center;

  @media screen and (min-width: 992px) {
    width: 95vw;
  }
`;

const Title = styled.h3`
  text-transform: uppercase;
  color: var(--clr-primary-1);
`;

function App() {
  const [number, setNumber] = React.useState(0);
  const [paragraphs, setParagraph] = React.useState<string[] | []>([]);

  const handleSubmit = () => {
    if (number <= 0) {
      setParagraph(text.slice(0, 1));
    } else {
      setParagraph(text.slice(0, number));
    }
  };

  return (
    <AppWrapper>
      <Title>tired of boring lorem ipsum?</Title>
      <Form number={number} setNumber={setNumber} handleSubmit={handleSubmit} />
      <Result paragraphs={paragraphs} />
    </AppWrapper>
  );
}

export default App;
