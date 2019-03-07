import actionTypes from '../actions/actionTypes';

const initState = {
  success: false,
  data: {},
  errors: {},
};

function loginReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        success: true,
        data: action.payload,
        errors: null,
      };
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        errors: action.error,
        success: false,
        data: null,
      };
    default:
      return state;
  }
}

export default loginReducer;
