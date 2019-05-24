import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import App from "./App"
import { findByTestAtrr } from "./utiles/index"
import UsersDetails from './containers/Team/UsersDetails/UsersDetails';
import NotFound from './components/NotFound/NotFound';
import TeamGroup from './containers/Team/TeamGroup/TeamGroup';

const setUp = (props = {}) => {
  const component = shallow(<App {...props} />)
  return component
}


describe('<App />', () => {

  let component;
  beforeEach(() => {
    component = setUp();
  })

  it('Should render basic root App ', () => {
    const wrapper = findByTestAtrr(component, 'App')
    expect(wrapper).toHaveLength(1);
  })

  it('invalid path should redirect to page 404 (Not found)', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/random']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(UsersDetails)).toHaveLength(0);
    expect(wrapper.find(NotFound)).toHaveLength(1);
  });

  it('valid path "USER" should not redirect to 404 (Not found)', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/user/1/']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(UsersDetails)).toHaveLength(1);
    expect(wrapper.find(NotFound)).toHaveLength(0);
  });

  it('valid path "TEAM" should not redirect to 404 (Not found)', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/team/1/']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(TeamGroup)).toHaveLength(1);
    expect(wrapper.find(NotFound)).toHaveLength(0);
  });

  it('initial path "/" should redirect to page "TEAM"', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(TeamGroup)).toHaveLength(1);
    expect(wrapper.find(NotFound)).toHaveLength(0);
  });

  it('valid path "/not-found" should redirect to 404 (Not found)', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/not-found']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(NotFound)).toHaveLength(1);
  });
})
