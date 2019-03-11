import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';

const InitialState = {
  start: false,
};

function startReducer(state = InitialState) {
  return state;
}

const rootReducer = combineReducers({
  start: startReducer,
  login: loginReducer,
  signup: signupReducer,
});

export default rootReducer;