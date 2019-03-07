import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from '../LoginForm';

describe('App', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should check for div', () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper.find('div').length).toBeGreaterThanOrEqual(1);
  });
});
