import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../Loader';

describe('App', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should check for div', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.find('div').length).toEqual(1);
  });
});
