import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('App', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should check for div', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('div').length).toBeGreaterThanOrEqual(1);
  });
  it('should check for nav', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('nav').length).toEqual(1);
  });
  it('should check for navlink', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('NavLink').length).toBeGreaterThanOrEqual(1);
  });
});
