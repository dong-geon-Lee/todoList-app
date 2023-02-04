import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  margin-top: 10%;
  padding: 4rem 6rem;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 2rem;
  box-shadow: 0 1rem 1rem 1rem rgba(0, 0, 0, 0.3);
  width: 60rem;
  height: 50rem;
  overflow: hidden;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
`;

export const Text = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
`;

export const Ul = styled.ul`
  margin: 4rem 0;
  /* overflow-y: scroll; */
`;

export const Li = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.4rem;
  margin: 2rem 0;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const Input = styled.input`
  padding: 1rem;
  font-size: 1.8rem;
  border-radius: 1rem;
  width: 85%;
  background-color: #f7f7f7;

  &.checkbox {
    width: 2.6rem;
    height: 2.6rem;
    padding: 1rem;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  font-size: 1.8rem;
  background-color: inherit;

  &.add__todo {
    font-size: 2rem;
  }
`;

export const Span = styled.span`
  font-size: 1.8rem;
  display: inline-block;
`;
