import actionTypes from '../actions/actionTypes';

const initState = {
  success: false,
  data: {},
  errors: {},
};

function signupReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        success: true,
        data: action.payload,
        errors: null,
      };
    case actionTypes.SIGNUP_FAIL:
      return {
        ...state,
        errors: action.errors,
        success: false,
        data: null,
      };
    default:
      return state;
  }
}

export default signupReducer;
