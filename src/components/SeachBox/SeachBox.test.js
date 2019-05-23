import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAtrr, checkProps } from "../../utiles/testFunctions"
import SearchBox from './SeachBox';

const setUp = (props = {}) => {
    const component = shallow(<SearchBox {...props} />)
    return component
}


describe('SearchBox  />', () => {

    describe('Render <Input/>', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                value: 'a',
                onChange: () => { }
            }
            wrapper = setUp(props)
        })
        it('with props', () => {
            const component = findByTestAtrr(wrapper, 'SearchBox')
            expect(component).toHaveLength(1);
        })

        describe('Checking PropTypes', () => {
            it('Should NOT throw a warning', () => {
                const expectedProps = {
                    value: 'a',
                    onChange: () => { }
                };
                const propsError = checkProps(SearchBox, expectedProps);
                expect(propsError).toBeUndefined();
            });
        });
    })
})
