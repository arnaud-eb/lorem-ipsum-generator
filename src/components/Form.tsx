import * as React from "react";
import styled from "styled-components";

interface FormProptype {
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
  handleSubmit: () => void;
}

const FormContainer = styled.form`
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  margin-top: 2rem;
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  font-size: 1.25rem;
  color: var(--clr-primary-1);
`;

const Input = styled.input`
  padding: 0.25rem 0.5rem;
  width: 4rem;
  border-radius: var(--radius);
  border: none;
  margin: 0 0.5rem;
  font-size: 1.25rem;
`;

const Button = styled.button`
  text-transform: uppercase;
  background: var(--clr-primary-5);
  color: var(--clr-primary-1);
  padding: 0.375rem 0.75rem;
  letter-spacing: 1px;
  display: inline-block;
  transition: var(--transition);
  font-size: 0.875rem;
  border: 2px solid var(--clr-primary-5);
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);

  &:hover {
    color: var(--clr-primary-5);
    background: var(--clr-primary-8);
    border-color: var(--clr-primary-8);
  }
`;

const Result = ({ number, setNumber, handleSubmit }: FormProptype) => {
  return (
    <FormContainer
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Label>
        paragraphs:
        <Input
          type="number"
          value={number}
          onChange={(e) => {
            setNumber(+e.target.value);
          }}
        />
      </Label>
      <Button type="submit">generate</Button>
    </FormContainer>
  );
};

export default Result;
