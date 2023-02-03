import React from "react";
import { Link } from "react-router-dom";
import { Container, Wrapper } from "./styles";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <h1>홈페이지</h1>
        </Link>
        <Link to="/signup">
          <h1>회원가입</h1>
        </Link>
        <Link to="/signin">
          <h1>로그인</h1>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
