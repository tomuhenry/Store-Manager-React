import React from 'react';
import { shallow } from 'enzyme';
import SignupView from '../SignupView';

let mockProps = {
    value: '',
    errors: {},
    data: '',
    loading: false
  };

describe('Signup View', () => {

    it('should render correctly', () => {
        const wrapper = shallow(<SignupView {...mockProps} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.length).toEqual(1);
    }); 

});