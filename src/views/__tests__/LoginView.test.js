import React from 'react';
import { shallow } from 'enzyme';
import LoginView from '../LoginView';

let mockProps = {
    value: '',
    errors: {},
    data: '',
    loading: false
  };

describe('Login View', () => {

    it('should render correctly', () => {
        const wrapper = shallow(<LoginView {...mockProps} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.length).toEqual(1);
    });

});