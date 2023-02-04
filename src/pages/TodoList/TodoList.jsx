import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Div,
  Input,
  Label,
  Li,
  Span,
  Text,
  Title,
  Ul,
  Wrapper,
} from "./styles";

const TodoList = () => {
  const [modifyActive, setModifyActive] = useState(false);

  const navigate = useNavigate();
  const hasToken = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    if (!hasToken) navigate("/signin");
  }, [hasToken]);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <Container>
      <Wrapper>
        <Div>
          <Title>TodoList</Title>
          <Text>{new Date().toLocaleDateString("ko-KR", options)}</Text>
        </Div>

        <Div>
          <Input type="text" data-testid="new-todo-input" />
          <Button
            type="button"
            data-testid="new-todo-add-button"
            className="add__todo"
          >
            추가
          </Button>
        </Div>

        {/* <Input type="text" data-testid="modify-input" />
        <Button data-testid="submit-button">제출</Button>
        <Button data-testid="cancel-button">취소</Button> */}
        <Ul>
          <Li>
            <Label>
              <Input type="checkbox" className="checkbox" />
              <Span>TODO 1</Span>
            </Label>
            <Button data-testid="modify-button">수정</Button>
            <Button data-testid="delete-button">삭제</Button>
          </Li>
          <Li>
            <Label>
              <Input type="checkbox" className="checkbox" />
              <Span>TODO 2</Span>
            </Label>
            <Button data-testid="modify-button">수정</Button>
            <Button data-testid="delete-button">삭제</Button>
          </Li>
        </Ul>
      </Wrapper>
    </Container>
  );
};

export default TodoList;
