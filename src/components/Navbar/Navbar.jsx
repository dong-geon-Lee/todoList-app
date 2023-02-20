import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Container, Title } from "./styles";

const Navbar = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <Container>
      {token ? (
        <Box>
          <Button onClick={handleLogout}>로그아웃</Button>
        </Box>
      ) : (
        <Box>
          <Link to="/signup">
            <Title>회원가입</Title>
          </Link>
          <Link to="/signin">
            <Title>로그인</Title>
          </Link>
        </Box>
      )}
    </Container>
  );
};

export default Navbar;
