import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import * as redux from 'react-redux';
import ProfileScreen from '../ProfileScreen';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

configure({ adapter: new Adapter() });

describe('screens/ProfileScreen', () => {
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
      orderListMy: {
        orders: [
          {
            id: 52,
            cartItems: [
              {
                id: 59,
                name: 'Celery ',
                quantity: 2,
                img: 'https://i5.walmartimages.ca/images/Enlarge/094/529/6000200094529.jpg',
                price_walmart: '2.970',
                price_sobeys: '3.690',
                price_zehrs: '2.990',
                cart: 52,
                product: 8,
              },
              {
                id: 60,
                name: 'Donuts',
                quantity: 1,
                img: 'https://i5.walmartimages.ca/images/Enlarge/655/383/6000202655383.jpg',
                price_walmart: '1.270',
                price_sobeys: '2.990',
                price_zehrs: '4.990',
                cart: 52,
                product: 89,
              },
            ],
            user: {
              id: 7,
              username: 'chilliam@email.com',
              email: 'chilliam@email.com',
              namee: 'chilliam',
              isAdminn: true,
            },
            total_price_walmart: '7.210',
            total_price_sobeys: '10.370',
            total_price_zehrs: '10.970',
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
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Should render without errors', () => {
    const wrapper = mount(
      <BrowserRouter>
        <ProfileScreen />
      </BrowserRouter>
    );
    const component = wrapper.find(ProfileScreen);
    expect(component.length).toBe(1);
  });

  it('should render ProfileScreen', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <ProfileScreen />
      </BrowserRouter>
    );
    expect(wrapper.exists()).toBe(true);
    expect(mockDispatch).not.toHaveBeenCalled();
  });
});
