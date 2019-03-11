import configureMockStore from 'redux-mock-store';
import React from 'react';
import thunk from 'redux-thunk';
import mockAxios from 'jest-mock-axios';
import "babel-polyfill";
import { shallow } from 'enzyme';
import signupAction from '../signupAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('Signup Actions', () => {
  afterEach = () => {
    mockAxios.reset();
  };

  it('dispatch actions for signup', () => {
    const userData = { email: "email@here.com", password:"my password", name:"name" }
    mockAxios.post('MockURL', userData);
    store.dispatch(signupAction);
    expect(store.getActions()).toEqual([]);
  });

  it('dispatch actions for signup', () => {
    let wrapper = shallow(<signupAction />);
    expect(wrapper).toMatchSnapshot();
  });

});
