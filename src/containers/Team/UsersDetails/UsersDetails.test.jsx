import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAtrr } from "../../../utiles/testFunctions"
import UsersDetails from './UsersDetails';

const setUp = (props = {}) => {
    const component = shallow(<UsersDetails {...props} />)
    return component
}


describe('UsersDetails  />', () => {

    describe('Render UsersDetails', () => {
        let wrapper;
        beforeEach(() => {
            const props = {

            }
            wrapper = setUp(props)
        })
        it('without props', () => {
            const component = findByTestAtrr(wrapper, 'UsersDetails')
            expect(component).toHaveLength(1);
        })
        it('Header', () => {
            const component = findByTestAtrr(wrapper, 'UsersDetailsHeader')
            expect(component).toHaveLength(1);
        })
        it('paragraph Username', () => {
            const component = findByTestAtrr(wrapper, 'UsersDetailsUsername')
            expect(component).toHaveLength(1);
        })
        it('paragraph ID', () => {
            const component = findByTestAtrr(wrapper, 'UsersDetailsID')
            expect(component).toHaveLength(1);
        })

    })
})
