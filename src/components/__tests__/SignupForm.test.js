import React from 'react';
import { shallow } from 'enzyme';
import SignupForm from '../SignupForm';

describe('App', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<SignupForm />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should check for div', () => {
    const wrapper = shallow(<SignupForm />);
    expect(wrapper.find('div').length).toBeGreaterThanOrEqual(1);
  });
});
