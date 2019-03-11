import { combineReducers } from 'redux';
import loginReducer from './loginReducer';

const InitialState = {
  start: false,
};

function startReducer(state = InitialState) {
  return state;
}

const rootReducer = combineReducers({
  start: startReducer,
  login: loginReducer,
});

export default rootReducer;