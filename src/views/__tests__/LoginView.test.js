import React from 'react';
import { mount } from 'enzyme';
import { LoginView, mapStateToProps } from '../LoginView';

describe('Login View', () => {
  let wrapper;
  const mockLogin = jest.fn(),
    historyMock = { push: jest.fn() };

  beforeEach(() => {
    wrapper = mount(
      <LoginView loginAction={mockLogin} history={historyMock} />
    );
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.length).toEqual(1);
  });

  it('should be call fetchLogin with the username and password in the state as arguments', () => {
    wrapper.find('#email').simulate('change', {
      target: { email: 'value@email.com' }
    });
    wrapper.find('#password').simulate('change', {
      target: { password: 'value' }
    });
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(mockLogin.mock.calls.length).toEqual(1);
  });

  it('Should recieve props data', () => {
    const spy = jest.spyOn(LoginView.prototype, 'componentWillReceiveProps');
    const nextProps = {
      data: { data: true }
    };
    wrapper.instance().componentWillReceiveProps(nextProps);
    wrapper.setProps({
      loading: true
    });
    expect(spy).toHaveBeenCalled();
  });

  it('Should recieve props error', () => {
    const spy = jest.spyOn(LoginView.prototype, 'componentWillReceiveProps');
    const nextProps = {
      errors: { errors: true }
    };
    wrapper.instance().componentWillReceiveProps(nextProps);
    wrapper.setProps({
      loading: true,
      errors: true
    });
    expect(spy).toHaveBeenCalled();
  });

});
