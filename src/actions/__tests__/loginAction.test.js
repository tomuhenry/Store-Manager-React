import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'axios';
import "babel-polyfill";
import actionTypes from '../actionTypes';
import loginAction, { fetchLoginSuccess, fetchLoginFailure } from '../loginAction';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore({});
const userData = { email: "email@here.com", password:"my password" }

describe('Login Actions', () => {
  afterEach = () => {
    mockAxios.reset();
  };

  it('dispatch actions for login', () => {
    mockAxios.post('MockURL', userData);
    store.dispatch(loginAction);
    expect(store.getActions()).toEqual([]);
  });

  it('should dispatch success action', () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const store = mockStore({});
    const mockUserData = { email: 'email@here.com', password: 'my password' };

    mockAxios.post('MockURL', mockUserData);
    store.dispatch(fetchLoginSuccess(mockUserData));
    expect(store.getActions()).toEqual([
      {
        payload: mockUserData,
        type: actionTypes.LOGIN_SUCCESS
      }
    ]);
    expect(store.getActions().length).toEqual(1);
  });

  it('should dispatch success action', () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const store = mockStore({});
    const mockUserData = { };

    mockAxios.post('MockURL', mockUserData);
    store.dispatch(fetchLoginFailure(mockUserData));
    expect(store.getActions()).toEqual([
      {
        error: mockUserData,
        type: actionTypes.LOGIN_FAIL
      }
    ]);
    expect(store.getActions().length).toEqual(1);
  });

});

