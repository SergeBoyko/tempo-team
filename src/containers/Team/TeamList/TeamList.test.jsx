import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAtrr, checkProps } from "../../../utiles/testFunctions"
import TeamList from './TeamList';

const setUp = (props = {}) => {
    const component = shallow(<TeamList {...props} />)
    return component
}


describe('TeamList  />', () => {

    describe('Render TeamList', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                teams: [{ id: 1 }],
                selectTeam: () => { },
                selectedTeam: { id: 1 }
            }
            wrapper = setUp(props)
        })
        it('with props', () => {
            const component = findByTestAtrr(wrapper, 'TeamList')
            expect(component).toHaveLength(1);
        })

        describe('Checking PropTypes', () => {
            it('Should NOT throw a warning', () => {
                const expectedProps = {
                    teams: [{ id: 1 }],
                    selectTeam: () => { },
                    selectedTeam: { id: 1 }
                };
                const propsError = checkProps(TeamList, expectedProps);
                expect(propsError).toBeUndefined();
            });
        });
    })
})
