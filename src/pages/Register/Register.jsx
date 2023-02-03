import React, { useState } from "react";
import { Button, Container, Div, Form, Input, Label, Title } from "./styles";

const Register = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const { email, password, password2 } = userData;
  console.log(email, password, password2);

  const onChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Container>
      <Form>
        <Title>TodoList 가입</Title>
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
        <Div>
          <Label>패스워드 확인</Label>
          <Input
            type="password"
            data-testid="password-input"
            name="password2"
            value={password2}
            onChange={onChange}
            placeholder="패스워드 입력..."
          />
        </Div>
        <Button type="submit" data-testid="signup-button">
          회원가입
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
