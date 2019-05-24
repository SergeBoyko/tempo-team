import React from 'react';
import { shallow } from 'enzyme'
import { findByTestAtrr } from '../../../utiles/testFunctions'

import TeamGroup from './TeamGroup';

const setUp = (props = {}) => {
    const component = shallow(<TeamGroup {...props} />)
    return component
}


describe('<TeamGroup /> render without props', () => {

    let wrapper;
    beforeEach(() => {
        const props = {}
        wrapper = setUp(props)
    })

    it('div TeamGroupNavBar', () => {
        const component = findByTestAtrr(wrapper, 'TeamGroupNavBar')
        expect(component).toHaveLength(1);
    })

    it('div TeamGroupTeamList', () => {
        const component = findByTestAtrr(wrapper, 'TeamGroupTeamList')
        expect(component).toHaveLength(1);
    })

    it('div TeamGroupUserList', () => {
        const component = findByTestAtrr(wrapper, 'TeamGroupUserList')
        expect(component).toHaveLength(1);
    })

});
