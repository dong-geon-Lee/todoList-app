import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInAPI } from "../../api/auth";
import { HTTP__OK } from "../../constants/constants";
import { checkSignInUser } from "../../helpers/helpers";
import { Button, Container, Div, Form, Input, Label, Title } from "./styles";

const Login = () => {
  const [disabled, setDisabled] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userData;
  const token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();

  const onChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const validation = checkSignInUser(email, password);
      if (validation) {
        const response = await signInAPI(email, password);
        if (response.status === HTTP__OK) {
          localStorage.setItem("token", JSON.stringify(response.data));
          setUserData({ email: "", password: "" });
          navigate("/todo", { state: { token: response.data } });
        }
      }
      setDisabled(true);
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  };

  useEffect(() => {
    if (email && password) setDisabled(false);
    if (token) navigate("/todo");
  }, [navigate, email, password, token]);

  return (
    <Container>
      <Form onSubmit={handleSignIn}>
        <Title>로그인</Title>
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

        <Button type="submit" data-testid="signin-button" disabled={disabled}>
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
