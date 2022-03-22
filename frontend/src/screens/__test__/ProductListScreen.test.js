import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import * as redux from 'react-redux';
import ProductListScreen from '../ProductListScreen';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

configure({ adapter: new Adapter() });

describe('screens/ProductListScreen', () => {
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

      productList: {
        products: [
          {
            id: 13,
            product_name: 'Broccoli ',
            image:
              'https://i5.walmartimages.ca/images/Enlarge/094/505/6000200094505.jpg',
            price_walmart: '2.470',
            price_sobeys: '1.990',
            price_zehrs: '3.990',
            walmart_url:
              'https://www.walmart.ca/en/ip/broccoli-stalks/6000016950304',
            zehrs_url: 'https://www.zehrs.ca/broccoli/p/20145621001_EA',
            sobeys_url: 'https://voila.ca/products/7922EA/details',
            description:
              'Broccoli is a cruciferous vegetable that comes in a tight cluster of florets on top of firm, edible stalks. It is deep green in colour, sometimes with a tinge of purple. Add raw broccoli florets to your next vegetable platter or pair with cheddar cheese for a quiche.',
            category: 1,
            user: null,
          },
          {
            id: 10,
            product_name: 'Yellow Onions',
            image:
              'https://i5.walmartimages.ca/images/Enlarge/208/928/6000202208928.jpg',
            price_walmart: '1.970',
            price_sobeys: '2.490',
            price_zehrs: '2.990',
            walmart_url:
              'https://www.walmart.ca/en/ip/onion-yellow-your-fresh-market/6000197111437',
            zehrs_url:
              'https://www.zehrs.ca/yellow-onions-3lb-bag/p/20811994001_EA',
            sobeys_url: 'https://voila.ca/products/14573EA/details',
            description:
              'Yellow onions have a light golden skin and a white flesh. These all-purpose onions have a strong flavour and odour and are a very popular choice for cooking. Chop and add to soups, stews, and almost any recipe that calls for onion.',
            category: 1,
            user: null,
          },
        ],
      },

      productAdd: {
        success: true,
      },

      productDelete: {
        success: false,
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
        <ProductListScreen />
      </BrowserRouter>
    );
    const component = wrapper.find(ProductListScreen);
    expect(component.length).toBe(1);
  });

  it('should render ProductListScreen', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <ProductListScreen />
      </BrowserRouter>
    );
    expect(wrapper.exists()).toBe(true);
    expect(mockDispatch).not.toHaveBeenCalled();
  });
});
