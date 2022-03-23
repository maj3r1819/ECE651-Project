import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import * as redux from 'react-redux';
import ProductAddScreen from '../ProductAddScreen';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

configure({ adapter: new Adapter() });

describe('screens/ProductAddScreen', () => {
  let spyOnUseSelector;
  let spyOnUseDispatch;
  let spyOnUseEffect;
  let mockDispatch;
  let props;

  beforeEach(() => {
    var mockState = {
      userLogin: {
        userInfo: [
          {
            id: 7,
            namee: 'chilliam@email.com',
            isAdminn: true,
            email: 'chilliam@email.com',
          },
        ],
      },

      productAdd: {
        success: true,
      },

      categoryList: {
        categories: [
          {
            id: 1,
            category_name: 'Fruits & Vegetables',
          },
          {
            id: 2,
            category_name: 'Meat & Seafood',
          },
          {
            id: 3,
            category_name: 'Dairy & Eggs',
          },
        ],
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

    jest.mock('react', () => ({
      ...jest.requireActual('react'),
      useState: jest.fn(),
    }));

    const setState = jest.fn();
    const useStateMock = (initState: any) => [initState, setState];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Should render without errors', () => {
    const wrapper = mount(
      <BrowserRouter>
        <ProductAddScreen />
      </BrowserRouter>
    );
    const component = wrapper.find(ProductAddScreen);
    expect(component.length).toBe(1);
  });

  it('should render ProductAddScreen', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <ProductAddScreen />
      </BrowserRouter>
    );
    expect(wrapper.exists()).toBe(true);
    expect(mockDispatch).not.toHaveBeenCalled();
  });

  it('should render name', () => {
    const wrapper = mount(
      <BrowserRouter>
        <ProductAddScreen />
      </BrowserRouter>
    );
    const component = wrapper.find(`[controlId='name']`);
    expect(component.length).toBe(1);
  });

  it('should render category', () => {
    const wrapper = mount(
      <BrowserRouter>
        <ProductAddScreen />
      </BrowserRouter>
    );
    const component = wrapper.find(`[controlId='category']`);
    expect(component.length).toBe(1);
  });

  it('should render image', () => {
    const wrapper = mount(
      <BrowserRouter>
        <ProductAddScreen />
      </BrowserRouter>
    );
    const component = wrapper.find(`[controlId='image']`);
    expect(component.length).toBe(1);
  });

  it('should render price', () => {
    const wrapper = mount(
      <BrowserRouter>
        <ProductAddScreen />
      </BrowserRouter>
    );
    const component = wrapper.find(`[controlId='price']`);
    expect(component.length).toBe(3);
  });

  it('should render url', () => {
    const wrapper = mount(
      <BrowserRouter>
        <ProductAddScreen />
      </BrowserRouter>
    );
    const component = wrapper.find(`[controlId='url']`);
    expect(component.length).toBe(3);
  });

  it('should render description', () => {
    const wrapper = mount(
      <BrowserRouter>
        <ProductAddScreen />
      </BrowserRouter>
    );
    const component = wrapper.find(`[controlId='description']`);
    expect(component.length).toBe(1);
  });

  it('test submit', () => {
    const wrapper = mount(
      <BrowserRouter>
        <ProductAddScreen />
      </BrowserRouter>
    );
    const component = wrapper.find(Button).simulate('submit');
    expect(mockDispatch.mock.calls.length).toEqual(1);
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('test onChange', () => {
    const event = {
      preventDefault() {},
      target: { value: 'Hello' },
    };
    const wrapper = mount(
      <BrowserRouter>
        <ProductAddScreen />
      </BrowserRouter>
    );
    wrapper
      .find(Form.Control)
      .map((control) => control.simulate('change', event));
  });
});
