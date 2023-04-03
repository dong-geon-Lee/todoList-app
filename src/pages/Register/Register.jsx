import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupAPI } from "../../api/auth";
import { HTTP__CREATED } from "../../constants/constants";
import { checkSignUpUser } from "../../helpers/helpers";
import { Button, Container, Div, Form, Input, Label, Title } from "./styles";

const Register = () => {
  const [disabled, setDisabled] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const { email, password, password2 } = userData;
  const token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();

  const onChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const validation = checkSignUpUser(email, password, password2);
      const response = validation && (await signupAPI(email, password));
      if (response.status === HTTP__CREATED) {
        navigate("/signin");
        setUserData({ email: "", password: "", password2: "" });
      }

      setDisabled(true);
    } catch (error) {
      setDisabled(true);
      throw new Error(error.response.data.message);
    }
  };

  useEffect(() => {
    if (email && password && password2) setDisabled(false);
    if (token) navigate("/todo");
  }, [navigate, email, password, password2, token]);

  return (
    <Container>
      <Form onSubmit={handleSignup}>
        <Title>회원가입</Title>
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
            data-testid="password2-input"
            name="password2"
            value={password2}
            onChange={onChange}
            placeholder="패스워드 확인..."
          />
        </Div>
        <Button type="submit" data-testid="signup-button" disabled={disabled}>
          회원가입
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
