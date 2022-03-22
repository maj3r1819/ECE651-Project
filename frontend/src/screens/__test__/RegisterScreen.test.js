import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import * as redux from 'react-redux';
import RegisterScreen from '../RegisterScreen';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

configure({ adapter: new Adapter() });

describe('screens/RegisterScreen', () => {
  let spyOnUseSelector;
  let spyOnUseDispatch;
  let spyOnUseEffect;
  let mockDispatch;
  let props;

  beforeEach(() => {
    var mockState = {
      userRegister: {
        user: {
          name: 'chilliam@email.com',
          email: 'chilliam@email.com',
          password: '123456',
        },
      },
    };

    // Mock useSelector hook
    spyOnUseSelector = jest
      .spyOn(redux, 'useSelector')
      .mockImplementation((state) => state(mockState));

    // Mock useDispatch hook
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch');
    // Mock dispatch function returned from useDispatch
    mockDispatch = jest.fn();
    spyOnUseDispatch.mockReturnValue(mockDispatch);

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
    jest.restoreAllMocks();
  });

  it('Should render without errors', () => {
    const wrapper = mount(
      <BrowserRouter>
        <RegisterScreen />
      </BrowserRouter>
    );
    const component = wrapper.find(RegisterScreen);
    expect(component.length).toBe(1);
  });

  it('should render RegisterScreen', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <RegisterScreen />
      </BrowserRouter>
    );
    expect(wrapper.exists()).toBe(true);
    expect(mockDispatch).not.toHaveBeenCalled();
  });

  it('should render name', () => {
    const wrapper = mount(
      <BrowserRouter>
        <RegisterScreen />
      </BrowserRouter>
    );
    const component = wrapper.find(`[controlId='name']`);
    expect(component.length).toBe(1);
  });

  it('should render email', () => {
    const wrapper = mount(
      <BrowserRouter>
        <RegisterScreen />
      </BrowserRouter>
    );
    const component = wrapper.find(`[controlId='email']`);
    expect(component.length).toBe(1);
  });

  it('should render password', () => {
    const wrapper = mount(
      <BrowserRouter>
        <RegisterScreen />
      </BrowserRouter>
    );
    const component = wrapper.find(`[controlId='password']`);
    expect(component.length).toBe(1);
  });

  it('should render confirmPassword', () => {
    const wrapper = mount(
      <BrowserRouter>
        <RegisterScreen />
      </BrowserRouter>
    );
    const component = wrapper.find(`[controlId='confirmPassword']`);
    expect(component.length).toBe(1);
  });

  it('test submit', () => {
    const wrapper = mount(
      <BrowserRouter>
        <RegisterScreen />
      </BrowserRouter>
    );
    const component = wrapper.find(Button).simulate('submit');
    expect(mockDispatch.mock.calls.length).toEqual(1);
    expect(mockDispatch).toHaveBeenCalled();
  });
});
