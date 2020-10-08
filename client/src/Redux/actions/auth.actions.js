import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actionTypes';
import { toast } from 'react-toastify';
import Api from '../../Services';

export const signup = (body) => async (dispatch) => {
  try {
    const { data } = await Api.signup(body);
    localStorage.setItem('token', data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.email,
    });
  } catch (error) {
    console.error(error);
    if (error.response) {
      toast.error(error.response.data.error);
    }
    dispatch({
      type: LOGIN_FAILURE,
    });
  }
};

export const login = (body) => async (dispatch) => {
  try {
    const { data } = await Api.login(body);
    localStorage.setItem('token', data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.email,
    });
  } catch (error) {
    console.error(error);
    if (error.response) {
      toast.error(error.response.data.error);
    }
    dispatch({
      type: LOGIN_FAILURE,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: LOGOUT });
};
