import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAtrr, checkProps } from "../../utiles/testFunctions"
import NavBar from './NavBar';

const setUp = (props = {}) => {
    const component = shallow(<NavBar {...props} />)
    return component
}


describe('NavBar  />', () => {

    describe('Render NavBar', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                value: 'a',
                onChange: () => { }
            }
            wrapper = setUp(props)
        })
        it('with props', () => {
            const component = findByTestAtrr(wrapper, 'NavBar')
            expect(component).toHaveLength(1);
        })

        describe('Checking PropTypes', () => {
            it('Should NOT throw a warning', () => {
                const expectedProps = {
                    value: 'a',
                    onChange: () => { }
                };
                const propsError = checkProps(NavBar, expectedProps);
                expect(propsError).toBeUndefined();
            });
        });
    })
})
