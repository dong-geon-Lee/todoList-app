import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  BtnBox,
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
  const [todo, setTodo] = useState("");
  const [todoLists, setTodoLists] = useState([]);
  const [modifyActive, setModifyActive] = useState(false);

  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const onChange = (e) => {
    setTodo(e.target.value);
  };

  const onchangeCheckBox = (e, id) => {
    setTodoLists((prevState) => {
      return prevState.map((todoList) => {
        if (todoList.id === id) {
          return { ...todoList, isCompleted: e.target.checked };
        }
        return todoList;
      });
    });
  };

  const createTodo = async () => {
    const response = await axios.post(
      "https://pre-onboarding-selection-task.shop/todos",
      { todo },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.access_token}`,
        },
      }
    );

    setTodoLists((prevState) => [...prevState, response.data]);
    setTodo("");
  };

  const getTodos = async () => {
    const response = await axios.get(
      "https://pre-onboarding-selection-task.shop/todos",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.access_token}`,
        },
      }
    );

    setTodoLists(response.data);
  };

  const deleteTodo = async (id) => {
    await axios.delete(
      `https://pre-onboarding-selection-task.shop/todos/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.access_token}`,
        },
      }
    );

    getTodos();
  };

  useEffect(() => {
    if (!token) navigate("/signin");
    getTodos();
  }, []);

  console.log(todoLists);

  return (
    <Container>
      <Wrapper>
        <Div>
          <Title>TodoList</Title>
          <Text>{new Date().toLocaleDateString("ko-KR", options)}</Text>
        </Div>

        <Div>
          <Input
            type="text"
            data-testid="new-todo-input"
            onChange={onChange}
            value={todo}
          />
          <Button
            type="button"
            data-testid="new-todo-add-button"
            className="add__todo"
            onClick={createTodo}
          >
            추가
          </Button>
        </Div>

        {/* <Input type="text" data-testid="modify-input" />
        <Button data-testid="submit-button">제출</Button>
        <Button data-testid="cancel-button">취소</Button> */}
        <Ul>
          {todoLists.map((todoList) => (
            <Li key={todoList?.id}>
              <Label>
                <Input
                  type="checkbox"
                  className="checkbox"
                  onChange={(event) => onchangeCheckBox(event, todoList.id)}
                  checked={todoList.isCompleted}
                />
                <Span isCompleted={todoList.isCompleted}>{todoList?.todo}</Span>
              </Label>
              <BtnBox>
                <Button
                  data-testid="modify-button"
                  disabled={todoList.isCompleted}
                >
                  수정
                </Button>
                <Button
                  type="button"
                  data-testid="delete-button"
                  onClick={() => deleteTodo(todoList.id)}
                >
                  삭제
                </Button>
              </BtnBox>
            </Li>
          ))}
        </Ul>
      </Wrapper>
    </Container>
  );
};

export default TodoList;
