import axios from "axios";
import { TODOS_API_URL } from "../constants/constants";
import { config } from "../helpers/helpers";

export const getTodosAPI = async (token) => {
  try {
    const response = await axios.get(TODOS_API_URL, config(token));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createTodoAPI = async (todo, token) => {
  try {
    const response = await axios.post(TODOS_API_URL, { todo }, config(token));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateTodoAPI = async (id, editTodo, isCompleted, token) => {
  try {
    await axios.put(
      `${TODOS_API_URL}/${id}`,
      { todo: editTodo, isCompleted: !isCompleted },
      config(token)
    );
  } catch (error) {
    throw error;
  }
};

export const deleteTodoAPI = async (id, token) => {
  try {
    await axios.delete(`${TODOS_API_URL}/${id}`, config(token));
  } catch (error) {
    throw error;
  }
};
