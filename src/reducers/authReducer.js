import { IS_AUTHENTICATED } from "../actions/types";

const initialState = {
  isAuthenticated: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    default:
      return state;
  }
}
