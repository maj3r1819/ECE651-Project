import React, { useState } from 'react';
import { shallow, configure, render, mount } from 'enzyme';
import SearchBox from '../../components/SearchBox';
import Adapter from 'enzyme-adapter-react-16';
import { Form } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';

function setup() {
  const wrapper = render(
    <Router>
      <SearchBox />
    </Router>
  );

  return { wrapper };
}

configure({ adapter: new Adapter() });
describe('components/SearchBox', () => {
  beforeEach(() => {
    jest.mock('react', () => ({
      ...jest.requireActual('react'),
      useState: jest.fn(),
    }));

    const setState = jest.fn();
    const useStateMock = (initState: any) => [initState, setState];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    const mockedUsedNavigate = jest.fn();
    jest.mock('react-router-dom', () => {
      const originalModule = jest.requireActual('react-router-dom');
      return {
        ...originalModule,
        useNavigate: () => mockedUsedNavigate,
      };
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render SearchBox', () => {
    const { wrapper } = setup();
    expect(wrapper.find('Button').text()).toEqual('Search');
  });

  it('test submit click', () => {
    const wrapper = mount(
      <Router>
        <SearchBox />
      </Router>
    );
    wrapper.find(Form).simulate('submit', { preventDefault() {} });
  });

  it('test onChange', () => {
    const event = {
      preventDefault() {},
      target: { value: 'Hello' },
    };
    const wrapper = mount(
      <Router>
        <SearchBox />
      </Router>
    );
    wrapper.find(Form.Control).simulate('change', event);
  });
});
