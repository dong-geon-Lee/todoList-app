import React, { useState } from "react";
import { Button, Container, Div, Form, Input, Label, Title } from "./styles";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userData;
  console.log(email, password);

  const onChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Container>
      <Form>
        <Title>TodoList 로그인</Title>
        <Div>
          <Label>이메일</Label>
          <Input
            type="text"
            data-testid="email-input"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="이메일 입력..."
          />
        </Div>
        <Div>
          <Label>패스워드</Label>
          <Input
            type="password"
            data-testid="password-input"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="패스워드 입력..."
          />
        </Div>

        <Button type="submit" data-testid="signup-button">
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
