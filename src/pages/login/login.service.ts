import axios from 'axios';
import { IRegister } from './interface';

const LOGIN_URL = `${process.env.REACT_APP_API_URL}/authentication`;

const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${LOGIN_URL}/login`, {
      username,
      password,
    });

    const { access_token, user } = response.data;
    localStorage.setItem('authToken', access_token);
    localStorage.setItem('loggedUser', JSON.stringify(user));

    return {
      access_token,
      user,
    };
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error.message);
  }
};

const register = async (registerDto: IRegister) => {
  try {
    const response = await axios.post(`${LOGIN_URL}/register`, registerDto);
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error.message);
  }

  return await login(registerDto.username, registerDto.password);
};

const isAuthenticated = () => {
  const authToken = localStorage.getItem('authToken');
  return !!authToken;
};

const logout = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('loggedUser');
};

export const LoginService = {
  login,
  isAuthenticated,
  logout,
  register,
};
