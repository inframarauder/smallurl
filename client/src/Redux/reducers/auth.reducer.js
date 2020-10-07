import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actionTypes';

const initialState = {
  isLoggedIn: false,
  isLoading: true,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        user: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        user: payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        user: null,
      };
    default:
      return { ...state };
  }
}
