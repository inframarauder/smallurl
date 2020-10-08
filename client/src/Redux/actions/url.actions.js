import { SHORTEN_URL_SUCCESS, SHORTEN_URL_FAILURE } from '../actionTypes';
import { toast } from 'react-toastify';
import Api from '../../Services';

export const quickShorten = (body) => async (dispatch) => {
  try {
    const { data } = await Api.quickShorten(body);
    dispatch({
      type: SHORTEN_URL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error(error);
    if (error.response) {
      toast.error(error.response.data.error);
    }
    dispatch({ type: SHORTEN_URL_FAILURE });
  }
};
export const createShortUrl = (body) => async (dispatch) => {
  try {
    const { data } = await Api.createShorUrl(body);

    dispatch({
      type: SHORTEN_URL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error(error);
    if (error.response) {
      toast.error(error.response.data.error);
    }
    dispatch({ type: SHORTEN_URL_FAILURE });
  }
};
