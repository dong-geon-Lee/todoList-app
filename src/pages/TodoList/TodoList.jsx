import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { Container } from "./styles";

const TodoList = () => {
  const navigate = useNavigate();
  const hasToken = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    if (!hasToken) navigate("/signin");
  }, [hasToken]);

  return (
    <Container>
      <h1>todo리스트 페이지</h1>
    </Container>
  );
};

export default TodoList;
