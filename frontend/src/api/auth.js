import axios from "axios";
import { AUTH_API_URL } from "../constants/constants";
import { headers } from "../helpers/helpers";

export const signupAPI = async (email, password) => {
  try {
    const response = await axios.post(
      `${AUTH_API_URL}/signup`,
      { email, password },
      headers
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const signInAPI = async (email, password) => {
  try {
    const response = await axios.post(
      `${AUTH_API_URL}/signin`,
      { email, password },
      headers
    );
    return response;
  } catch (error) {
    throw error;
  }
};
