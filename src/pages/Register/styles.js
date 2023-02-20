import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16rem 0;
`;

export const Form = styled.form`
  width: 50rem;
  height: 50rem;
`;

export const Title = styled.h1`
  font-size: 2.6rem;
  text-align: center;
  margin-bottom: 2.6rem;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 500;
  color: #222;
`;

export const Input = styled.input`
  padding: 1.6rem;
  font-size: 2rem;
  text-align: left;
  font-weight: 500;
  border-radius: 1rem;

  &::placeholder {
    font-size: 1.6rem;
    font-weight: 400;
  }
`;

export const Button = styled.button`
  width: 100%;
  display: block;
  padding: 1.6rem;
  font-size: 2rem;
  background-color: ${(props) => (props.disabled ? "gray" : "#db4c3f")};
  color: #fff;
  margin: 3.6rem 0;
  border-radius: 0.4rem;
  transition: all 0.3s ease;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${(props) => (props.disabled ? "gray" : "#c53727")};
  }
`;
