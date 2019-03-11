import React from 'react';
import { shallow } from 'enzyme';
import HomeView from '../HomeView';

describe('App', () => {
    it('should render correctly', () => {
    const wrapper = shallow(<HomeView />);
        expect(wrapper).toMatchSnapshot();
    });
    it('should check for div', () => {
        const wrapper = shallow(<HomeView />);
        expect(wrapper.find('div').length).toEqual(1);
    });
    

});