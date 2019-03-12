import configureMockStore from 'redux-mock-store';
import React from 'react';
import thunk from 'redux-thunk';
import mockAxios from 'jest-mock-axios';
import "babel-polyfill";
import { shallow } from 'enzyme';
import loginAction from '../loginAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('Login Actions', () => {
  afterEach = () => {
    mockAxios.reset();
  };

  it('dispatch actions for login', () => {
    const userData = { email: "email@here.com", password:"my password" }
    mockAxios.post('MockURL', userData);
    store.dispatch(loginAction);
    expect(store.getActions()).toEqual([]);
  });

  it('dispatch actions for login', () => {
    let wrapper = shallow(<loginAction />);
    expect(wrapper).toMatchSnapshot();
  });

});
