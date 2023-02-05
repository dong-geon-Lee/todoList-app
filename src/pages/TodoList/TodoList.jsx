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
  const [editTodo, setEditTodo] = useState("");

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

  const handleEditOnChange = (e) => {
    setEditTodo(e.target.value);
  };

  const handleUpdateTodo = (id) => {
    const todoItems = todoLists.find((todoList) => todoList.id === id);
    setEditTodo(todoItems.todo);
  };

  const handleTodoUpdate = (id) => {
    setTodoLists((prevState) => {
      return prevState.map((todoList) => {
        if (todoList.id === id) {
          return {
            ...todoList,
            isCompleted: !todoList.isCompleted,
          };
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

  const updateTodo = async (id, editTodo, isCompleted) => {
    console.log(id, editTodo);
    await axios.put(
      `https://pre-onboarding-selection-task.shop/todos/${id}`,
      {
        todo: editTodo,
        isCompleted: !isCompleted,
      },
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
            name="todo"
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

        <Ul>
          {todoLists.map((todoList) => (
            <Li key={todoList?.id}>
              <Label>
                <Input type="checkbox" className="checkbox" />
                {todoList.isCompleted ? (
                  <>
                    <Input
                      type="text"
                      data-testid="modify-input"
                      onChange={handleEditOnChange}
                      value={editTodo}
                    />
                  </>
                ) : (
                  <>
                    <Span isCompleted={todoList.isCompleted}>
                      {todoList?.todo}
                    </Span>
                  </>
                )}
              </Label>
              <BtnBox>
                {todoList.isCompleted ? (
                  <>
                    <Button
                      data-testid="submit-button"
                      onClick={() =>
                        updateTodo(todoList.id, editTodo, todoList.isCompleted)
                      }
                    >
                      제출
                    </Button>
                    <Button
                      data-testid="cancel-button"
                      onClick={() => {
                        handleTodoUpdate(todoList.id);
                      }}
                    >
                      취소
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      type="button"
                      data-testid="modify-button"
                      onClick={() => {
                        handleTodoUpdate(todoList.id);
                        handleUpdateTodo(todoList.id);
                      }}
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
                  </>
                )}
              </BtnBox>
            </Li>
          ))}
        </Ul>
      </Wrapper>
    </Container>
  );
};

export default TodoList;
