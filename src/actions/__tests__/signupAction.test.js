import actionTypes from '../actionTypes';
import configureMockStore from 'redux-mock-store';
import mockAxios from 'axios';
import thunk from 'redux-thunk';
import signupAction, {
  fetchsignupFailure,
  fetchsignupSuccess
} from '../signupAction';
import 'babel-polyfill';

jest.mock('axios');

describe('fetchLogin', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore({});
  const mockUserData = {
    email: 'email@here.com',
    password: 'my password',
    name: 'myname'
  };

  afterEach = () => {
    mockAxios.reset();
  };

  it('dispatch actions for signup success', async () => {
    const response = {
        Message: 'signed up',
      };
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({ data: response })
    );
    await store.dispatch(signupAction(mockUserData));
    expect(store.getActions().length).toEqual(1);
  });

  it('dispatch actions for signup success', async () => {
    const response = {
        error: 'signed up',
      };
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({ data: response })
    );
    await store.dispatch(signupAction(mockUserData));
    expect(store.getActions().length).toEqual(2);
  });

  it('dispatch actions for signup success', async () => {
    const response = {
        Alert: 'signed up',
      };
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({ data: response })
    );
    await store.dispatch(signupAction(mockUserData));
    expect(store.getActions().length).toEqual(3);
  });

  it('should dispatch success action', () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const store = mockStore({});
    const mockUserData = {
      email: 'email@here.com',
      password: 'my password',
      name: 'myname'
    };

    mockAxios.post('MockURL', mockUserData);
    store.dispatch(fetchsignupSuccess(mockUserData));
    expect(store.getActions()).toEqual([
      {
        payload: mockUserData,
        type: actionTypes.SIGNUP_SUCCESS
      }
    ]);
    expect(store.getActions().length).toEqual(1);
  });

  it('should dispatch failing action', () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const store = mockStore({});
    const mockUserData = { password: 'my password' };

    mockAxios.post('MockURL', mockUserData);
    store.dispatch(fetchsignupFailure(mockUserData));
    expect(store.getActions()).toEqual([
      {
        errors: mockUserData,
        type: actionTypes.SIGNUP_FAIL
      }
    ]);
    expect(store.getActions().length).toEqual(1);
  });
});
