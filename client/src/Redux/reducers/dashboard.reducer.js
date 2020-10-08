import { GET_DASHBOARD_FAILURE, GET_DASHBOARD_SUCCESS } from '../actionTypes';

const initialState = {
  urls: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
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
