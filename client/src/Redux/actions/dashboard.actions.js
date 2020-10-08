import {
  GET_DASHBOARD_FAILURE,
  GET_DASHBOARD_SUCCESS,
  DASHBOARD_REQUEST,
} from '../actionTypes';
import Api from '../../Services';
import { toast } from 'react-toastify';

export const getDashboard = () => async (dispatch) => {
  try {
    const { data } = await Api.getDashboard();

    dispatch({ type: GET_DASHBOARD_SUCCESS, payload: data });
  } catch (error) {
    console.error(error);
    if (error.response) {
      toast.error(error.response.data.error);
    }

    dispatch({ type: GET_DASHBOARD_FAILURE });
  }
};

export const deleteUrl = (id) => async (dispatch) => {
  try {
    await Api.deleteUrl(id);
    dispatch(getDashboard());
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.error);
    }
  }
};

export const searchUrl = (longUrl) => async (dispatch) => {
  try {
    dispatch({ type: DASHBOARD_REQUEST });
    const { data } = await Api.searchUrl(longUrl);
    console.log(data);
    dispatch({ type: GET_DASHBOARD_SUCCESS, payload: [data] });
  } catch (error) {
    console.log(error);
    if (error.response) {
      toast.error(error.response.data.error);
    }
    dispatch({ type: GET_DASHBOARD_FAILURE });
  }
};
