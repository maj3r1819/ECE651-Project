import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import * as redux from 'react-redux';
import CartScreen from '../CartScreen';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

configure({ adapter: new Adapter() });

describe('screens/CartScreen', () => {
  let spyOnUseSelector;
  let spyOnUseDispatch;
  let spyOnUseEffect;
  let mockDispatch;
  let props;

  beforeEach(() => {
    var mockState = {
      cart: {
        cartItems: [
          {
            product_id: 3,
            name: 'Cucumber',
            image:
              'https://i5.walmartimages.ca/images/Enlarge/094/566/6000200094566.jpg',
            price_walmart: '1.970',
            price_sobeys: '2.490',
            price_zehrs: '1.690',
            qty: '1',
          },
          {
            product_id: 9,
            name: 'Carrots',
            image:
              'https://i5.walmartimages.ca/images/Enlarge/094/417/6000200094417.jpg',
            price_walmart: '2.470',
            price_sobeys: '3.990',
            price_zehrs: '2.990',
            qty: '2',
          },
        ],
      },

      orderAdd: {
        order: {
          id: 53,
          cartItems: [
            {
              id: 61,
              name: 'Cucumber',
              quantity: 1,
              img: 'https://i5.walmartimages.ca/images/Enlarge/094/566/6000200094566.jpg',
              price_walmart: '1.970',
              price_sobeys: '2.490',
              price_zehrs: '1.690',
              cart: 53,
              product: 3,
            },
            {
              id: 63,
              name: 'Tomato',
              quantity: 1,
              img: 'https://i5.walmartimages.ca/images/Enlarge/lu4/853/999999-PLU4853.jpg',
              price_walmart: '1.540',
              price_sobeys: '2.290',
              price_zehrs: '1.770',
              cart: 53,
              product: 6,
            },
          ],
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
        <CartScreen />
      </BrowserRouter>
    );
    const component = wrapper.find(CartScreen);
    expect(component.length).toBe(1);
  });

  it('should render CartScreen', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <CartScreen />
      </BrowserRouter>
    );
    expect(wrapper.exists()).toBe(true);
    expect(mockDispatch).not.toHaveBeenCalled();
  });
});
