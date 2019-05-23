import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAtrr, checkProps } from "../../../utiles/testFunctions"
import UsersList from './UsersList';

const setUp = (props = {}) => {
    const component = shallow(<UsersList {...props} />)
    return component
}


describe('UsersList  />', () => {

    describe('Render UsersList', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                users: ['a'],
                teamsDetails: { id: 1 },
                groupdetails: false
            }
            wrapper = setUp(props)
        })
        it('with props', () => {
            const component = findByTestAtrr(wrapper, 'UsersList')
            expect(component).toHaveLength(1);
        })

        describe('Checking PropTypes', () => {
            it('Should NOT throw a warning', () => {
                const expectedProps = {
                    users: ['a'],
                    teamsDetails: { id: 1 },
                    groupdetails: false
                };
                const propsError = checkProps(UsersList, expectedProps);
                expect(propsError).toBeUndefined();
            });
        });
    })
})
