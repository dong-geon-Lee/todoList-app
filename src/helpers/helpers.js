export const config = (token) => {
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.access_token}`,
    },
  };
};

export const headers = {
  headers: { "Content-Type": "application/json" },
};

export const formattedDates = () => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date().toLocaleDateString("ko-KR", options);
};

export const findTodoList = (todoLists, id) => {
  return todoLists.find((todoList) => todoList.id === id);
};

export const checkSignUpUser = (email, password, password2) => {
  const checkPassword = password.length >= 8 && password === password2;
  return email.includes("@") && checkPassword;
};

export const checkSignInUser = (email, password) => {
  return email.includes("@") && password.length >= 8;
};
