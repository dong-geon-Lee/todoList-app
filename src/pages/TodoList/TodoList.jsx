import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { findTodoList, formattedDates } from "../../helpers/helpers";
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
import {
  createTodoAPI,
  deleteTodoAPI,
  getTodosAPI,
  updateTodoAPI,
} from "../../api/todo";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todoLists, setTodoLists] = useState([]);
  const [editTodo, setEditTodo] = useState("");

  const token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();

  const onChange = (e) => {
    setTodo(e.target.value);
  };

  const handleEditOnChange = (e) => {
    setEditTodo(e.target.value);
  };

  const handleUpdateTodo = (id) => {
    const todoItems = findTodoList(todoLists, id);
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
    try {
      const data = await createTodoAPI(todo, token);
      setTodoLists((prevState) => [...prevState, data]);
      setTodo("");
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  };

  const getTodos = async () => {
    try {
      const data = await getTodosAPI(token);
      setTodoLists(data);
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  };

  const updateTodo = async (id, editTodo, isCompleted) => {
    try {
      await updateTodoAPI(id, editTodo, isCompleted, token);
      getTodos();
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await deleteTodoAPI(id, token);
      getTodos();
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  };

  useEffect(() => {
    if (!token?.access_token) navigate("/signin");
    if (token?.access_token) getTodos();
  }, [navigate, token?.access_token]);

  return (
    <Container>
      <Wrapper>
        <Div>
          <Title>TodoList</Title>
          <Text>{formattedDates()}</Text>
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
          {todoLists?.map((todoList) => (
            <Li key={todoList?.id}>
              <Label>
                <Input type="checkbox" className="checkbox" />
                <>
                  {todoList.isCompleted ? (
                    <Input
                      type="text"
                      data-testid="modify-input"
                      onChange={handleEditOnChange}
                      value={editTodo}
                    />
                  ) : (
                    <Span>{todoList?.todo}</Span>
                  )}
                </>
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
