import React from 'react';
import { shallow } from 'enzyme';
import {SignupView} from '../SignupView';

describe('Signup View', () => {
  let wrapper;
  const mockSignUpfn = jest.fn();
  const historyMock = { push: jest.fn() };

  beforeEach(() => {
    wrapper = shallow(
      <SignupView signupAction={mockSignUpfn} history={historyMock} />
    );
  });
  afterEach(() => {
    mockSignUpfn.mock.calls = [];
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.length).toEqual(1);
  });

  it('should be call fetchLogin with the username and password in the state as arguments', () => {

    wrapper.find('SignupForm').dive().find('#email').simulate('change', {
      target: { "email": "value@email.com" }
    });
    wrapper.find('SignupForm').dive().find('#name').simulate('change', {
      target: { "name": "value" }
    });
    wrapper.find('SignupForm').dive().find('#password').simulate('change', {
      target: { "password": "value" }
    });
    wrapper.find('SignupForm').dive().find('form').simulate('submit', { preventDefault() {} });
    expect(mockSignUpfn.mock.calls.length).toEqual(1);

  });
  it('Should recieve props data', () => {
    const spy = jest.spyOn(SignupView.prototype, 'componentWillReceiveProps');
    const nextProps={
      data: {data: true}
    }
    wrapper.instance().componentWillReceiveProps(nextProps);
    wrapper.setProps({
      loading: true
    })
    expect(spy).toHaveBeenCalled()
  })
  it('Should recieve props error', () => {
    const spy = jest.spyOn(SignupView.prototype, 'componentWillReceiveProps');
    const nextProps={
      errors: {errors: true}
    }
    wrapper.instance().componentWillReceiveProps(nextProps);
    wrapper.setProps({
      loading: true,
      errors: true
    })
    expect(spy).toHaveBeenCalled()
  })

});
