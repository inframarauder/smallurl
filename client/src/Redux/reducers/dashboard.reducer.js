import {
  GET_DASHBOARD_FAILURE,
  GET_DASHBOARD_SUCCESS,
  DASHBOARD_REQUEST,
} from '../actionTypes';

const initialState = {
  urls: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case DASHBOARD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_DASHBOARD_SUCCESS:
      return {
        ...state,
        urls: payload,
        loading: false,
      };
    case GET_DASHBOARD_FAILURE:
      return {
        ...state,
        urls: [],
        loading: false,
      };

    default:
      return state;
  }
}
