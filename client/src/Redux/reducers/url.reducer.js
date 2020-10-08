import { SHORTEN_URL_FAILURE, SHORTEN_URL_SUCCESS } from '../actionTypes';

const initialState = {
  shortUrl: '',
  shortened: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SHORTEN_URL_SUCCESS:
      return {
        ...state,
        shortUrl: payload.shortUrl,
        shortened: true,
      };
    case SHORTEN_URL_FAILURE:
      return {
        ...state,
        shortUrl: '',
        shortened: false,
      };
    default:
      return state;
  }
}
